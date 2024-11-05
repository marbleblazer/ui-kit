export const mockStackedData = Array.from({ length: 10 }, (_, idx) => ({
    id: idx,
    fuel_consumption: {
        '2024-10-10': Math.random() * 60,
        '2024-10-11': Math.random() * 60,
        '2024-10-12': Math.random() * 60,
        '2024-10-13': Math.random() * 60,
        '2024-10-14': Math.random() * 60,
        '2024-10-15': Math.random() * 60,
        '2024-10-16': Math.random() * 60,
        '2024-10-17': Math.random() * 60,
        '2024-10-18': Math.random() * 60,
        '2024-10-19': Math.random() * 60,
        '2024-10-20': Math.random() * 60,
        '2024-10-21': Math.random() * 60,
        '2024-10-22': Math.random() * 60,
    },
}));
