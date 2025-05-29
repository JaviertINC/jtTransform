const date = {    
    /**
     * Obtiene el nombre del día de la semana en el idioma especificado
     * @param date - La fecha de la cual obtener el día de la semana
     * @param locale - El código de idioma (ej: 'es-ES', 'en-US', 'fr-FR')
     * @returns El nombre del día de la semana en el idioma especificado
     **/
    weekDay(date: Date, locale: string = 'es-ES'): string {
        return date.toLocaleDateString(locale, { weekday: 'long' });
    },

    /**
     * Obtiene el nombre del mes en el idioma especificado
     * @param date - La fecha de la cual obtener el mes
     * @param locale - El código de idioma (ej: 'es-ES', 'en-US', 'fr-FR')
     * @returns El nombre del mes en el idioma especificado
     **/
    month(date: Date, locale: string = 'es-ES'): string {
        return date.toLocaleDateString(locale, { month: 'long' });
    }
};

export default date;