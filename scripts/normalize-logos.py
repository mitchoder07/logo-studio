"""
Normalizes all logo PNGs so every mark fills the frame at the same
relative size. Centers content on a 1024x1024 black canvas where the
content's longest dimension = 88% of the canvas.

This makes every logo appear the same size in the masonry grid,
regardless of its original aspect ratio.

Run: python3 /home/z/my-project/scripts/normalize-logos.py
"""
from PIL import Image
import os

LOGOS_DIR = '/home/z/my-project/public/logos'
TARGET_SIZE = 1024
CONTENT_FILL_PCT = 0.88  # content fills 88% of canvas (longest dim)
# This leaves ~6% padding on each side, which looks consistent

def find_content_bbox(img):
    """Find bounding box of non-black content."""
    if img.mode != 'RGB':
        img = img.convert('RGB')
    W, H = img.size
    pixels = img.load()
    min_x, min_y, max_x, max_y = W, H, 0, 0
    found = False
    for y in range(0, H, 3):
        for x in range(0, W, 3):
            r, g, b = pixels[x, y]
            if r + g + b > 60:
                found = True
                if x < min_x: min_x = x
                if y < min_y: min_y = y
                if x > max_x: max_x = x
                if y > max_y: max_y = y
    if not found:
        return None
    return (min_x, min_y, max_x + 1, max_y + 1)

def process_logo(path):
    """Normalize logo: crop to content, resize to fill 88% of 1024x1024, center on black."""
    img = Image.open(path).convert('RGB')
    W, H = img.size
    bbox = find_content_bbox(img)
    if bbox is None:
        return False, 'no content'

    # Crop to content
    content = img.crop(bbox)
    cw, ch = content.size

    # Resize content so longest dimension = TARGET_SIZE * CONTENT_FILL_PCT
    target_content_size = int(TARGET_SIZE * CONTENT_FILL_PCT)
    if cw >= ch:
        new_w = target_content_size
        new_h = int(ch * (target_content_size / cw))
    else:
        new_h = target_content_size
        new_w = int(cw * (target_content_size / ch))

    content_resized = content.resize((new_w, new_h), Image.LANCZOS)

    # Center on black canvas
    canvas = Image.new('RGB', (TARGET_SIZE, TARGET_SIZE), (0, 0, 0))
    offset_x = (TARGET_SIZE - new_w) // 2
    offset_y = (TARGET_SIZE - new_h) // 2
    canvas.paste(content_resized, (offset_x, offset_y))

    canvas.save(path, 'PNG')
    return True, f'content {cw}x{ch} → {new_w}x{new_h} centered'

def main():
    logos = sorted([f for f in os.listdir(LOGOS_DIR) if f.endswith('.png')])
    print(f'Normalizing {len(logos)} logos...')

    ok = 0
    for fname in logos:
        path = os.path.join(LOGOS_DIR, fname)
        try:
            success, msg = process_logo(path)
            if success:
                ok += 1
                print(f'  ✓ {fname}: {msg}')
        except Exception as e:
            print(f'  ✗ {fname}: {e}')

    print(f'\nDone: {ok}/{len(logos)} normalized')

if __name__ == '__main__':
    main()
