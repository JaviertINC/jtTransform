const date = {
    weekDay: (day: number) => {
        if (day < 0 || day > 7) return 'No válido';
        const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        if (day === 7) day = 0;
        return days[day];
    },

    month: (month: number) => {
        if (month < 1 || month > 12) return 'No válido';
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        return months[month - 1];
    }
};

export default date;