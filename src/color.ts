function anyToRGBA(color: string): { r: number, g: number, b: number, opacity: number, origin: string, type: string } {
    color = color.trim().toLowerCase();
    let r: number = 0, g: number = 0, b: number = 0, a: number = 1;
    let type: string = 'unknown';
    let origin: string = color;


    if (color.startsWith('#')) {
        const hex = color.slice(1);
        if (hex.length === 3) {
            r = parseInt(hex[0] + hex[0], 16);
            g = parseInt(hex[1] + hex[1], 16);
            b = parseInt(hex[2] + hex[2], 16);
        }
        else if (hex.length === 6) {
            r = parseInt(hex.slice(0, 2), 16);
            g = parseInt(hex.slice(2, 4), 16);
            b = parseInt(hex.slice(4, 6), 16);
        }
        type = 'hex';
    } else if (color.startsWith('rgba')) { // Input: rgba(255, 255, 255, 1)
        const rgba = color.match(/rgba?\(([^)]+)\)/);
        if (rgba) {
            const values = rgba[1].split(',').map(v => parseFloat(v.trim()));
            r = values[0];
            g = values[1];
            b = values[2];
            a = values[3] !== undefined ? values[3] : 1;
            type = 'rgba';
        }
    } else if (color.startsWith('rgb')) { // Input: rgb(255, 255, 255)
        const rgb = color.match(/rgb\(([^)]+)\)/);
        if (rgb) {
            const values = rgb[1].split(',').map(v => parseFloat(v.trim()));
            r = values[0];
            g = values[1];
            b = values[2];
            a = 1;
            type = 'rgb';
        }
    } else if (color.startsWith('cmyk') || color.startsWith('cmyb')) { // Input: cmyk(0, 0, 0, 0) | cmyb(0, 0, 0, 0)
        const cmyk = color.match(/(cmyk|cmyb)\(([^)]+)\)/);
        if (cmyk) {
            const values = cmyk[2].split(',').map(v => parseFloat(v.trim()));
            const c = values[0] / 100;
            const m = values[1] / 100;
            const y = values[2] / 100;
            const k = values[3] / 100;
            r = Math.round(255 * (1 - c) * (1 - k));
            g = Math.round(255 * (1 - m) * (1 - k));
            b = Math.round(255 * (1 - y) * (1 - k));
            a = cmyk.length > 4 ? parseFloat(cmyk[4]) : 1;
            origin = color;
            type = 'cmyk';
        }
    } else {
        // Fallback to black
        r = 0;
        g = 0;
        b = 0;
        a = 1;
        origin = color;
        type = 'unknown';
    }

    return {
        r,
        g,
        b,
        opacity: a,
        origin,
        type
    }
}


function rgbaToHex(r: number, g: number, b: number, a: number = 1): string {
    const toHex = (x: number) => {
        const hex = Math.round(x).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }
    if (a < 1) {
        const alphaHex = Math.round(a * 255).toString(16);
        return `#${toHex(r)}${toHex(g)}${toHex(b)}${alphaHex}`;
    }
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function rgbaToCMYK(r: number, g: number, b: number, a: number = 1): string {
    const c = 1 - (r / 255);
    const m = 1 - (g / 255);
    const y = 1 - (b / 255);
    const k = Math.min(c, m, y);
    return `cmyk(${Math.round((c - k) * 100)}, ${Math.round((m - k) * 100)}, ${Math.round((y - k) * 100)}, ${Math.round(k * 100)})`;
}

const color = {
    toRGB(color: string): { r: number, g: number, b: number } {
        const rgba = anyToRGBA(color);
        return {
            r: rgba.r,
            g: rgba.g,
            b: rgba.b
        }
    },

    toRGBA(color: string): { r: number, g: number, b: number, a: number } {
        const rgba = anyToRGBA(color);
        return {
            r: rgba.r,
            g: rgba.g,
            b: rgba.b,
            a: rgba.opacity
        }
    },

    toHex(color: string): string {
        const rgba = anyToRGBA(color);
        return rgbaToHex(rgba.r, rgba.g, rgba.b, rgba.opacity);
    },

    toCMYK(color: string): string {
        const rgba = anyToRGBA(color);
        return rgbaToCMYK(rgba.r, rgba.g, rgba.b, rgba.opacity);
    },

    toCMYB(color: string): string {
        return this.toCMYK(color);
    },

    toAll(color: string): {
        rgb: string,
        rgba: string,
        hex: string,
        cmyk: string
    } {
        const rgba = anyToRGBA(color);
        return {
            rgb: `rgb(${rgba.r}, ${rgba.g}, ${rgba.b})`,
            rgba: `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.opacity})`,
            hex: this.toHex(color),
            cmyk: this.toCMYK(color)
        }
    }
}

export default color;