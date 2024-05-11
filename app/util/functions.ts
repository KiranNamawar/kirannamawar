export function formatedDate(date: number) {
    const year = Math.floor(date / 100);

    const month = date % 100;

    const dateObj = new Date(year, month - 1, 1);

    return dateObj.toLocaleDateString('en-IN', {
        month: 'long',
        year: 'numeric',
    });
}
