import { useCallback } from 'react';

/** Хук для скачивания xlsx */
export function useDownloadXlsx({ file, cb }: { file: Blob | null | undefined; cb: () => void }) {
    return useCallback(() => {
        try {
            if (file) {
                const url = window.URL.createObjectURL(new Blob([file]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'report.xlsx');
                document.body.appendChild(link);
                link.click();
                link.remove();
                cb();
            }
        } catch (error) {
            console.error('Error downloading the file:', error);
        }
    }, [cb, file]);
}
