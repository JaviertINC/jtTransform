const natoAlphabet: { [key: string]: string } = {
    'A': 'Alfa',
    'B': 'Bravo',
    'C': 'Charlie',
    'D': 'Delta',
    'E': 'Echo',
    'F': 'Foxtrot',
    'G': 'Golf',
    'H': 'Hotel',
    'I': 'India',
    'J': 'Juliett',
    'K': 'Kilo',
    'L': 'Lima',
    'M': 'Mike',
    'N': 'November',
    'Ñ': 'Ñandú',
    'O': 'Oscar',
    'P': 'Papa',
    'Q': 'Quebec',
    'R': 'Romeo',
    'S': 'Sierra',
    'T': 'Tango',
    'U': 'Uniform',
    'V': 'Victor',
    'W': 'Whiskey',
    'X': 'X-ray',
    'Y': 'Yankee',
    'Z': 'Zulu',
};

const nato = {
    /**
     * Formatea un texto a código NATO.
     * @param {string} text - El texto a formatear.
     * @returns {string} El texto en código NATO.
     **/
    format: (text: string): string => {

        return text
            .toUpperCase()
            .split('')
            .map(char => natoAlphabet[char] || char)
            .join(' ');
    },

    /**
     * Desformatea un texto en código NATO a su representación original.
     * @param {string} text - El texto en código NATO a desformatear.
     * @returns {string} El texto original.
     **/
    unformat: (text: string): string => {
        const reverseNatoAlphabet = Object.fromEntries(
            Object.entries(natoAlphabet).map(([key, value]) => [value, key])
        );

        return text
            .split(' ')
            .map(word => reverseNatoAlphabet[word] || word)
            .join('');
    },
};

export default nato;