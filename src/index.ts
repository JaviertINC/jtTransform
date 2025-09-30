import braille from './braille';
import morse from './morse';
import nato from './nato';
import numbers from './numbers';
import size from './size';
import date from './date';
import color from './color';

const jtTransform = {
    numberToLetter: numbers.numberToLetter,
    letterToNumber: numbers.letterToNumber,
    size,
    nato,
    morse,
    braille,
    date,
    color
}

export default jtTransform;