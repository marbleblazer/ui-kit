export const removeQueryParam = (keyToDelete: string) => {
    const params = new URLSearchParams();

    params.delete(keyToDelete);
};
