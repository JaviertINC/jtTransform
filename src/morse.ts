const morseCode: { [key: string]: string } = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.'
};

const morse = {
    format: (text: string): string => {

        return text
            .toUpperCase()
            .split('')
            .map(char => morseCode[char] || char)
            .join(' ');
    },

    unformat: (text: string): string => {
        const reverseMorseCode = Object.fromEntries(
            Object.entries(morseCode).map(([key, value]) => [value, key])
        );

        return text
            .split(' ')
            .map(word => reverseMorseCode[word] || word)
            .join('');
    }
}

export default morse;