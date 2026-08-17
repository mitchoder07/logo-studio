"""
Crops all logo PNGs to remove empty margins and center the content
with consistent padding. Makes every logo fill its card uniformly.

Run: python3 /home/z/my-project/scripts/crop-logos.py
"""
from PIL import Image, ImageChops
import os

LOGOS_DIR = '/home/z/my-project/public/logos'
TARGET_SIZE = 1024
PADDING_PCT = 0.06  # 6% padding around content on each side

def find_content_bbox(img):
    """Find bounding box of non-black content."""
    if img.mode != 'RGB':
        img = img.convert('RGB')
    W, H = img.size
    pixels = img.load()
    min_x, min_y, max_x, max_y = W, H, 0, 0
    found = False
    # Sample every 3 pixels for speed
    for y in range(0, H, 3):
        for x in range(0, W, 3):
            r, g, b = pixels[x, y]
            if r + g + b > 60:  # non-black
                found = True
                if x < min_x: min_x = x
                if y < min_y: min_y = y
                if x > max_x: max_x = x
                if y > max_y: max_y = y
    if not found:
        return None
    return (min_x, min_y, max_x + 1, max_y + 1)

def process_logo(path):
    """Crop logo to content + padding, resize to 1024x1024, save."""
    img = Image.open(path).convert('RGB')
    W, H = img.size
    bbox = find_content_bbox(img)
    if bbox is None:
        return False, 'no content'

    content_w = bbox[2] - bbox[0]
    content_h = bbox[3] - bbox[1]

    # Add padding around content (percentage of content dimension)
    pad_x = int(content_w * PADDING_PCT)
    pad_y = int(content_h * PADDING_PCT)

    # Expand bbox with padding, clamped to image bounds
    left = max(0, bbox[0] - pad_x)
    top = max(0, bbox[1] - pad_y)
    right = min(W, bbox[2] + pad_x)
    bottom = min(H, bbox[3] + pad_y)

    cropped = img.crop((left, top, right, bottom))

    # Make it square by padding the shorter dimension with black
    cw, ch = cropped.size
    if cw != ch:
        square_size = max(cw, ch)
        square = Image.new('RGB', (square_size, square_size), (0, 0, 0))
        offset_x = (square_size - cw) // 2
        offset_y = (square_size - ch) // 2
        square.paste(cropped, (offset_x, offset_y))
        cropped = square

    # Resize to target size
    final = cropped.resize((TARGET_SIZE, TARGET_SIZE), Image.LANCZOS)
    final.save(path, 'PNG')
    return True, f'cropped from ({content_w}x{content_h}) to fill frame'

def main():
    logos = sorted([f for f in os.listdir(LOGOS_DIR) if f.endswith('.png')])
    print(f'Processing {len(logos)} logos...')

    ok = 0
    skipped = 0
    failed = 0
    for fname in logos:
        path = os.path.join(LOGOS_DIR, fname)
        try:
            success, msg = process_logo(path)
            if success:
                ok += 1
                print(f'  ✓ {fname}: {msg}')
            else:
                skipped += 1
                print(f'  - {fname}: {msg}')
        except Exception as e:
            failed += 1
            print(f'  ✗ {fname}: {e}')

    print(f'\nDone: {ok} cropped, {skipped} skipped, {failed} failed')

if __name__ == '__main__':
    main()
