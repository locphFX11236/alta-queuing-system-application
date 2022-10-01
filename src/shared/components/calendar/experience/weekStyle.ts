const IsValueWeek = (week: any, value: string[]): string => {
    if (value.length === 0) return '';
    else if (value.length === 1) {
        if (week[0].isSame(value[0], 'week')) return 'week-range';
        else return '';
    } else {
        if (
            week[0].isSame(value[0], 'week') ||
            week[0].isSame(value[1], 'week') ||
            week[0].isBetween(value[0], value[1], 'week')
        ) return 'week-range';
        return '';
    }
};

export default IsValueWeek;