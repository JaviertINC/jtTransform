const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

const size = {
    /**
     * Transforma bytes a un formato legible.
     * @param {number} bytes - Número de bytes a transformar.
     * @param {number} decimals - Número de decimales a mostrar (opcional, por defecto 2).
     * @returns {string} - Tamaño legible como string.
     **/
    format(bytes: number, decimals: number = 2): string {
        if (Number.isNaN(bytes)) return '0' + sizes[0];
        let i = Math.floor(Math.log(bytes) / Math.log(1024));
        return `${parseFloat((bytes / Math.pow(1024, i)).toFixed((decimals < 0 ? 0 : decimals)))}${sizes[i]}`;
    },

    /**
     * Transforma un tamaño legible a bytes.
     * @param {string} size - Tamaño legible a transformar. Mientras más decimales tenga, más preciso será el resultado.
     * @returns {number} - Número de bytes.
     **/
    unformat(size: string): number {
        size = size.replace(/\s+/g, '').toUpperCase();
        const match = size.match(/([0-9.]+)([A-Z]+)/);
        if (!match) return 0;
        const value = parseFloat(match[1]);
        const unit = match[2].toUpperCase();
        const index = sizes.findIndex(s => s.toUpperCase() === unit);
        if (index === -1) return 0;
        return value * Math.pow(1024, index);
    }
}

export default size;