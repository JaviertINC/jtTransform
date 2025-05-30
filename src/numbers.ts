const numbers = {
    /**
     * Transforma números a su representación en letras en español.
     * @param {number} num - El número a transformar.
     * @returns {string} El número en letras en español.
     **/
    numberToLetter(num: number): string {
        if (num === 0) return "Cero";

        const units = ["", "Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve"];
        const teens = ["Diez", "Once", "Doce", "Trece", "Catorce", "Quince", "Dieciséis", "Diecisiete", "Dieciocho", "Diecinueve"];
        const tens = ["", "", "Veinte", "Treinta", "Cuarenta", "Cincuenta", "Sesenta", "Setenta", "Ochenta", "Noventa"];
        const hundreds = ["", "Ciento", "Doscientos", "Trescientos", "Cuatrocientos", "Quinientos", "Seiscientos", "Setecientos", "Ochocientos", "Novecientos"];

        function lessThan100(n: number) {
            if (n < 10) return units[n];
            if (n < 20) return teens[n - 10];
            if (n < 30) return n === 20 ? tens[2] : "Veinti" + units[n % 10].toLowerCase();
            const d = Math.floor(n / 10);
            const u = n % 10;
            return u === 0 ? tens[d] : tens[d] + " y " + units[u].toLowerCase();
        }

        function lessThan1000(n: number) {
            if (n === 100) return "Cien";
            const c = Math.floor(n / 100);
            const resto = n % 100;
            return (c === 0 ? "" : hundreds[c] + (resto > 0 ? " " : "")) + lessThan100(resto);
        }

        function convertSection(n: number) {
            if (n < 1000) return lessThan1000(n);
            const miles = Math.floor(n / 1000);
            const resto = n % 1000;
            let milesTexto = "";
            if (miles === 1) {
                milesTexto = "Mil";
            } else {
                milesTexto = lessThan1000(miles) + " mil";
            }
            let restoTexto = resto > 0 ? " " + lessThan1000(resto) : "";
            return milesTexto + restoTexto;
        }

        function convert(n: number): string {
            const BILLON = 1_000_000_000_000;
            const MILLON = 1_000_000;
            const MIL = 1000;

            if (n < MIL) return lessThan1000(n);
            if (n < MILLON) return convertSection(n);
            if (n < BILLON) {
                const millones = Math.floor(n / MILLON);
                const resto = n % MILLON;
                const millonesTexto = millones === 1 ? "Un millón" : convert(millones) + " millones";
                return millonesTexto + (resto > 0 ? " " + convert(resto) : "");
            }

            const billones = Math.floor(n / BILLON);
            const resto = n % BILLON;
            const billonesTexto = billones === 1 ? "Un billón" : convert(billones) + " billones";
            return billonesTexto + (resto > 0 ? " " + convert(resto) : "");
        }

        let result = convert(num).trim().toLocaleLowerCase();

        result = result.replace(/uno mil/g, "un mil");
        result = result.replace(/uno millón/g, "un millón");
        result = result.replace(/uno billón/g, "un billón");

        return result.charAt(0).toUpperCase() + result.slice(1);
    },

    /**
     * Transforma una cadena de texto que representa un número en letras a su valor numérico.
     * @param {string} str - La cadena de texto a transformar.
     * @returns {number} El valor numérico del texto.
     **/
    letterToNumber(str: string): number {
        if (str === "cero") return 0;

        const units: { [key: string]: number } = {
            "un": 1, "uno": 1, "dos": 2, "tres": 3, "cuatro": 4, "cinco": 5, "seis": 6, "siete": 7, "ocho": 8, "nueve": 9
        };
        const teens: { [key: string]: number } = {
            "diez": 10, "once": 11, "doce": 12, "trece": 13, "catorce": 14, "quince": 15, "dieciséis": 16, "diecisiete": 17, "dieciocho": 18, "diecinueve": 19
        };
        const tens: { [key: string]: number } = {
            "veinte": 20, "treinta": 30, "cuarenta": 40, "cincuenta": 50, "sesenta": 60, "setenta": 70, "ochenta": 80, "noventa": 90
        };
        const hundreds: { [key: string]: number } = {
            "cien": 100, "ciento": 100, "doscientos": 200, "trescientos": 300, "cuatrocientos": 400, "quinientos": 500, "seiscientos": 600, "setecientos": 700, "ochocientos": 800, "novecientos": 900
        };
        const combinedTensUnits: { [key: string]: number } = {
            "veintiuno": 21, "veintidos": 22, "veintitres": 23, "veinticuatro": 24,
            "veinticinco": 25, "veintiseis": 26, "veintisiete": 27, "veintiocho": 28, "veintinueve": 29
        };

        str = str.toLowerCase().replace(/ y /g, ' ').replace(/-/g, ' ').replace(/\s+/g, ' ').trim();

        function parseTensUnits(text: string): number {
            text = text.trim();
            if (text === "") return 0;

            if (teens[text] !== undefined) return teens[text];
            if (combinedTensUnits[text] !== undefined) return combinedTensUnits[text]; // Check for "veintitres" etc.

            const parts = text.split(' ');

            if (parts.length === 2) {
                 const part1 = parts[0];
                 const part2 = parts[1];
                 if (tens[part1] !== undefined && units[part2] !== undefined) {
                      return tens[part1] + units[part2];
                 }
             } else if (parts.length === 1) {
                 const word = parts[0];
                 if (tens[word] !== undefined) return tens[word];
                 if (units[word] !== undefined) return units[word];
             }

            return 0;
        }

        function parseSegment(text: string): number {
            text = text.trim();
            if (text === "") return 0;

            if (text === "cien") return 100;

            let value = 0;
            const words = text.split(' ');
            let restText = text;

            if (words.length > 0) {
                const firstWord = words[0];
                 if (hundreds[firstWord] !== undefined && firstWord !== 'cien') {
                     value += hundreds[firstWord];
                     restText = words.slice(1).join(' ');
                 } else if (firstWord === 'ciento' && words.length > 1) {
                     value += 100;
                     restText = words.slice(1).join(' ');
                 }
            }

             if (restText.length > 0) {
                  value += parseTensUnits(restText);
             }

            return value;
        }

        let totalResult = 0;
        let remainingString = str;

        const billionTokens = remainingString.split(/ (billones|billon)\s*/);
        if (billionTokens.length > 1) {
            const beforeBillion = billionTokens[0].trim();
            const billionValue = (beforeBillion === "" || beforeBillion === "un") ? 1 : parseSegment(beforeBillion);
            totalResult += billionValue * 1_000_000_000;
            remainingString = billionTokens[2] ? billionTokens[2].trim() : "";
        }


        const millionTokens = remainingString.split(/ (millones|millon)\s*/);
        if (millionTokens.length > 1) {
            const beforeMillion = millionTokens[0].trim();
             const millionValue = (beforeMillion === "" || beforeMillion === "un") ? 1 : parseSegment(beforeMillion);
            totalResult += millionValue * 1_000_000;
            remainingString = millionTokens[2] ? millionTokens[2].trim() : "";
        }

        const milTokens = remainingString.split(/ (mil)\s*/);
        if (milTokens.length > 1) {
            const beforeMil = milTokens[0].trim();
            const milValue = (beforeMil === "" || beforeMil === "un") ? 1 : parseSegment(beforeMil);
            totalResult += milValue * 1000;
            remainingString = milTokens[2] ? milTokens[2].trim() : "";
        }

        totalResult += parseSegment(remainingString);

        return totalResult;
    }
}

export default numbers;