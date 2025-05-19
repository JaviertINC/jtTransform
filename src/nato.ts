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
    format: (text: string): string => {

        return text
            .toUpperCase()
            .split('')
            .map(char => natoAlphabet[char] || char)
            .join(' ');
    },

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