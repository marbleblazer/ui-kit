import { useCallback, useEffect } from 'react';
import html2canvas from 'html2canvas';

interface IUseMapScreenshotProps {
    map: React.RefObject<mapboxgl.Map | null>;
    onFullMapImageReady?: (callback: () => Promise<string>) => void;
    onMapData?: () => void;
    isDataOnMap?: boolean;
}

export const useMapScreenshot = ({ map, onFullMapImageReady, onMapData, isDataOnMap }: IUseMapScreenshotProps) => {
    const captureFullMapScreenshot = useCallback(async () => {
        const mapCurrent = map.current;

        if (!mapCurrent) return '';

        const sources = mapCurrent.getStyle()?.sources || {};
        const sourceIds = Object.keys(sources).filter(
            (id) => id.includes('mapbox-gl-draw') || id === 'LINE_POINTS_SOURCE_KEY',
        );

        for (const sourceId of sourceIds) {
            if (!mapCurrent.isSourceLoaded(sourceId)) {
                await new Promise((resolve) => mapCurrent.once('sourcedata', resolve));
            }
        }

        mapCurrent.triggerRepaint(); // html2canvas требует актуальную карту для снимка (без доп. рендера не произойдет захвата канваса)
        await new Promise((resolve) => mapCurrent.once('render', resolve));
        await new Promise((resolve) => mapCurrent.once('idle', resolve));

        try {
            const container = mapCurrent.getContainer();

            const canvas = await html2canvas(container, {
                useCORS: true,
                backgroundColor: null,
                scale: 1,
                ignoreElements: (el) => el.classList.contains('mapboxgl-control-container'),
            });

            return canvas.toDataURL('image/png');
        } catch (error) {
            console.error('Error capturing screenshot with html2canvas:', error);

            return '';
        }
    }, [map]);

    // Определение готовности карты для скриншота
    useEffect(() => {
        const mapCurrent = map.current;

        if (!mapCurrent || !onMapData || isDataOnMap) return;

        const handleIdle = () => {
            onMapData();
            mapCurrent.off('idle', handleIdle);
        };

        const waitForIdle = () => mapCurrent.on('idle', handleIdle);

        if (mapCurrent.isStyleLoaded()) {
            waitForIdle();
        } else {
            const onStyleLoad = () => {
                waitForIdle();
                mapCurrent.off('style.load', onStyleLoad);
            };
            mapCurrent.on('style.load', onStyleLoad);
        }

        return () => {
            mapCurrent.off('idle', handleIdle);
        };
    }, [map, onMapData, isDataOnMap]);

    useEffect(() => {
        if (!onFullMapImageReady) return;

        onFullMapImageReady(captureFullMapScreenshot);
    }, [captureFullMapScreenshot, onFullMapImageReady]);
};
