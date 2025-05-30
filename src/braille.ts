const brailleAlphabet: { [key: string]: string } = {
    'A': '⠁',
    'B': '⠃',
    'C': '⠉',
    'D': '⠙',
    'E': '⠑',
    'F': '⠋',
    'G': '⠛',
    'H': '⠓',
    'I': '⠊',
    'J': '⠚',
    'K': '⠅',
    'L': '⠇',
    'M': '⠍',
    'N': '⠝',
    'Ñ': '⠻',
    'O': '⠕',
    'P': '⠏',
    'Q': '⠟',
    'R': '⠗',
    'S': '⠎',
    'T': '⠞',
    'U': '⠥',
    'V': '⠧',
    'W': '⠺',
    'X': '⠭',
    'Y': '⠽',
    'Z': '⠵',
    '0': '⠴',
    '1': '⠂',
    '2': '⠆',
    '3': '⠒',
    '4': '⠲',
    '5': '⠢',
    '6': '⠖',
    '7': '⠶',
    '8': '⠦',
    '9': '⠔'
};

const braille = {
    /**
     * Formatea un texto a Braille.
     * @param {string} text - El texto a formatear.
     * @returns {string} El texto en Braille.
     **/
    format: (text: string): string => {

        return text
            .toUpperCase()
            .split('')
            .map(char => brailleAlphabet[char] || char)
            .join(' ');
    },

    /**
     * Desformatea un texto en Braille a su representación original.
     * @param {string} text - El texto en Braille a desformatear.
     * @returns {string} El texto original.
     **/
    unformat: (text: string): string => {
        const reverseBrailleAlphabet = Object.fromEntries(
            Object.entries(brailleAlphabet).map(([key, value]) => [value, key])
        );

        return text
            .split(' ')
            .map(word => reverseBrailleAlphabet[word] || word)
            .join('');
    }
};

export default braille;