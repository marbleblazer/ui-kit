export function formatFromCamelCase(input?: string | null): string {
    if (!input) return '';
    // Разделяем строку на слова по заглавным буквам
    const words = input.match(/[A-Z][a-z]+|[a-z]+/g);

    // Если нет найденных слов, возвращаем пустую строку
    if (!words) return '';

    // if (input) return input;

    // Приводим первую букву к заглавной, остальные — к строчным
    const formattedWords = words.map((word, index) => {
        return index === 0 ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : word.toLowerCase();
    });

    // Объединяем слова с пробелами
    return formattedWords.join(' ');
}
