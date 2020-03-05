const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    function letterToMorseString (str) {
        
        function codeToSymbol(piece) {
            if (piece == '10') {
                return '.';
            }

            if (piece == '11') {
                return '-';
            } else {
                return '';
            }
        }

        let out = '';
        

        for (let i = 0; i < str.length; i+=2) {
            let piece = str.substr(i, 2);
            out += codeToSymbol(piece);
        }

        return out;
    }

    function compareMorse (str) {
        return MORSE_TABLE[str];
    }

    let decodedMessage = '';

    for (let i = 0; i < expr.length; i+=10) {
        let letter = expr.substr(i, 10);
        if (letter == '**********') {
            decodedMessage += ' ';
        } else {
            let morseLetter = letterToMorseString(letter);
            decodedMessage += compareMorse(morseLetter);
        }
    }

    return decodedMessage;

}

module.exports = {
    decode
}