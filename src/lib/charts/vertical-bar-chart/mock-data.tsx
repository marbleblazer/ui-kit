export const mockBarsData = Array.from({ length: 10 }, (_, idx) => ({
    id: idx + 1,
    name: `${idx + 1}-car`,
    total: Math.round(Math.random() * 100),
}));
