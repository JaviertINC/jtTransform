const numbers = {
    numberToLetter(num: number): string {
        if (num === 0) return "Cero";

        const units = ["", "Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve"];
        const teens = ["Diez", "Once", "Doce", "Trece", "Catorce", "Quince", "Dieciséis", "Diecisiete", "Dieciocho", "Diecinueve"];
        const tens = ["", "", "Veinte", "Treinta", "Cuarenta", "Cincuenta", "Sesenta", "Setenta", "Ochenta", "Noventa"];
        const hundreds = ["", "Ciento", "Doscientos", "Trescientos", "Cuatrocientos", "Quinientos", "Seiscientos", "Setecientos", "Ochocientos", "Novecientos"];

        function menosDe100(n: number) {
            if (n < 10) return units[n];
            if (n < 20) return teens[n - 10];
            if (n < 30) return n === 20 ? tens[2] : "Veinti" + units[n % 10].toLowerCase();
            const d = Math.floor(n / 10);
            const u = n % 10;
            return u === 0 ? tens[d] : tens[d] + " y " + units[u].toLowerCase();
        }

        function menosDe1000(n: number) {
            if (n === 100) return "Cien";
            const c = Math.floor(n / 100);
            const resto = n % 100;
            return (c === 0 ? "" : hundreds[c] + (resto > 0 ? " " : "")) + menosDe100(resto);
        }

        function convertirSeccion(n: number) {
            if (n < 1000) return menosDe1000(n);
            const miles = Math.floor(n / 1000);
            const resto = n % 1000;
            let milesTexto = "";
            if (miles === 1) {
                milesTexto = "Mil";
            } else {
                milesTexto = menosDe1000(miles) + " mil";
            }
            let restoTexto = resto > 0 ? " " + menosDe1000(resto) : "";
            return milesTexto + restoTexto;
        }

        function convertir(n: number): string {
            const BILLON = 1_000_000_000_000;
            const MILLON = 1_000_000;
            const MIL = 1000;

            if (n < MIL) return menosDe1000(n);
            if (n < MILLON) return convertirSeccion(n);
            if (n < BILLON) {
                const millones = Math.floor(n / MILLON);
                const resto = n % MILLON;
                const millonesTexto = millones === 1 ? "Un millón" : convertir(millones) + " millones";
                return millonesTexto + (resto > 0 ? " " + convertir(resto) : "");
            }

            const billones = Math.floor(n / BILLON);
            const resto = n % BILLON;
            const billonesTexto = billones === 1 ? "Un billón" : convertir(billones) + " billones";
            return billonesTexto + (resto > 0 ? " " + convertir(resto) : "");
        }

        let result = convertir(num).trim().toLocaleLowerCase();
        return result.charAt(0).toUpperCase() + result.slice(1);
    }
}

export default numbers;