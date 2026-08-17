"""
Fixes visual centering for ALL logos by shifting content so the
center of brightness equals the image center.

Some logos have inherent bottom-heavy or top-heavy compositions
(e.g. a cougar head with text below = bottom-heavy).
This script shifts the image content up/down to compensate,
making every logo LOOK centered in its card.

Run: python3 /home/z/my-project/scripts/center-all-logos.py
"""
from PIL import Image
import os

LOGOS_DIR = '/home/z/my-project/public/logos'

def get_brightness_center(img):
    """Find the Y coordinate of the center of brightness."""
    W, H = img.size
    pixels = img.load()
    row_brightness = [0] * H
    for y in range(H):
        for x in range(0, W, 2):
            r, g, b = pixels[x, y]
            row_brightness[y] += r + g + b
    total = sum(row_brightness)
    if total == 0:
        return H / 2
    weighted_y = sum(y * b for y, b in enumerate(row_brightness))
    return weighted_y / total

def center_logo(path):
    """Shift image content so center of brightness = image center."""
    img = Image.open(path).convert('RGB')
    W, H = img.size
    center = get_brightness_center(img)
    offset = center - H / 2
    
    if abs(offset) < 3:
        return False, f'already centered (offset={offset:.0f})'
    
    # Shift content by -offset (if offset is positive = too low, shift up)
    shift = -int(round(offset))
    new_img = Image.new('RGB', (W, H), (0, 0, 0))
    new_img.paste(img, (0, shift))
    new_img.save(path, 'JPEG', quality=88, optimize=True, progressive=True)
    
    # Verify
    new_center = get_brightness_center(new_img)
    new_offset = new_center - H / 2
    return True, f'offset {offset:.0f} → {new_offset:.0f}'

def main():
    logos = sorted([f for f in os.listdir(LOGOS_DIR) if f.endswith('.png')])
    print(f'Centering {len(logos)} logos...')
    
    fixed = 0
    skipped = 0
    for fname in logos:
        path = os.path.join(LOGOS_DIR, fname)
        try:
            was_fixed, msg = center_logo(path)
            if was_fixed:
                fixed += 1
                print(f'  ✓ {fname}: {msg}')
            else:
                skipped += 1
        except Exception as e:
            print(f'  ✗ {fname}: {e}')
    
    print(f'\nDone: {fixed} fixed, {skipped} already centered')

if __name__ == '__main__':
    main()
