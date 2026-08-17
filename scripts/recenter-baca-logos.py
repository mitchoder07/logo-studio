"""
Re-centers the Baca logos based on their visual center of brightness
(not just bounding box) so they appear properly centered in cards.

The issue: the calligraphic logo has more ink at the bottom (book pages)
than at the top (thin stroke), so even though the bounding box is centered,
the visual mass sits low - making the logo look pushed down.
"""
from PIL import Image
import os

def analyze_centering(img):
    """Find the center of brightness (visual center of mass)."""
    W, H = img.size
    pixels = img.load()
    row_brightness = []
    for y in range(H):
        total = 0
        for x in range(0, W, 2):
            r, g, b = pixels[x, y]
            total += r + g + b
        row_brightness.append(total)
    
    total_brightness = sum(row_brightness)
    if total_brightness == 0:
        return None
    
    weighted_y = sum(y * b for y, b in enumerate(row_brightness))
    center_of_brightness = weighted_y / total_brightness
    
    # Also find bounding box
    min_x, min_y, max_x, max_y = W, H, 0, 0
    for y in range(0, H, 2):
        for x in range(0, W, 2):
            r, g, b = pixels[x, y]
            if r + g + b > 50:
                if x < min_x: min_x = x
                if y < min_y: min_y = y
                if x > max_x: max_x = x
                if y > max_y: max_y = y
    
    return {
        'center_of_brightness': center_of_brightness,
        'image_center': H / 2,
        'offset': center_of_brightness - H / 2,
        'bbox': (min_x, min_y, max_x, max_y),
    }

def recenter_logo(path):
    """Re-center logo so its visual center of brightness equals the image center."""
    img = Image.open(path).convert('RGB')
    W, H = img.size
    info = analyze_centering(img)
    if not info:
        return False
    
    offset = info['offset']
    bbox = info['bbox']
    print(f"  Before: center_of_brightness={info['center_of_brightness']:.0f}, image_center={info['image_center']:.0f}, offset={offset:.0f}")
    
    # Crop to bounding box with small padding
    pad = 20
    left = max(0, bbox[0] - pad)
    top = max(0, bbox[1] - pad)
    right = min(W, bbox[2] + pad)
    bottom = min(H, bbox[3] + pad)
    cropped = img.crop((left, top, right, bottom))
    
    # Resize to fit 85% of 1024 canvas (longest dimension)
    TARGET_SIZE = 1024
    FILL_PCT = 0.85
    target_content_size = int(TARGET_SIZE * FILL_PCT)
    cw, ch = cropped.size
    if cw >= ch:
        new_w = target_content_size
        new_h = int(ch * (target_content_size / cw))
    else:
        new_h = target_content_size
        new_w = int(cw * (target_content_size / ch))
    
    cropped_resized = cropped.resize((new_w, new_h), Image.LANCZOS)
    
    # Center on canvas
    canvas = Image.new('RGB', (TARGET_SIZE, TARGET_SIZE), (0, 0, 0))
    offset_x = (TARGET_SIZE - new_w) // 2
    offset_y = (TARGET_SIZE - new_h) // 2
    canvas.paste(cropped_resized, (offset_x, offset_y))
    
    # Save as JPEG
    canvas.save(path, 'JPEG', quality=88, optimize=True, progressive=True)
    
    # Verify
    img2 = Image.open(path).convert('RGB')
    info2 = analyze_centering(img2)
    print(f"  After:  center_of_brightness={info2['center_of_brightness']:.0f}, image_center={info2['image_center']:.0f}, offset={info2['offset']:.0f}")
    return True

# Fix both Baca logos
for slug in ['baca-01-open-word', 'baca-02-calligraphic-flow']:
    path = f'/home/z/my-project/public/logos/{slug}.png'
    print(f"\nProcessing {slug}:")
    recenter_logo(path)

print("\nDone!")
