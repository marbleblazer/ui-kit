import { useCallback, useEffect } from 'react';
import html2canvas from 'html2canvas';

interface IUseMapScreenshotProps {
    map: React.RefObject<mapboxgl.Map | null>;
    onFullMapImageReady?: (callback: () => Promise<string>) => void;
}

export const useMapScreenshot = ({ map, onFullMapImageReady }: IUseMapScreenshotProps) => {
    const captureFullMapScreenshot = useCallback(async () => {
        const mapCurrent = map.current;

        if (!mapCurrent) return '';

        mapCurrent.triggerRepaint();

        await new Promise((resolve) => mapCurrent.once('render', resolve));

        const container = mapCurrent.getContainer();

        // Удаление контролов карты
        const controls = container.querySelectorAll('.mapboxgl-control-container');
        controls.forEach((control) => control.remove());

        try {
            const canvas = await html2canvas(container, {
                useCORS: true,
                backgroundColor: null,
                scale: 1,
            });

            return canvas.toDataURL('image/png');
        } catch (error) {
            console.error('Error capturing screenshot with html2canvas:', error);

            return '';
        }
    }, [map]);

    useEffect(() => {
        if (!onFullMapImageReady) return;

        onFullMapImageReady(captureFullMapScreenshot);
    }, [captureFullMapScreenshot, onFullMapImageReady]);

    return { captureFullMapScreenshot };
};
