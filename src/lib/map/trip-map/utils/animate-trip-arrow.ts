import bearing from '@turf/bearing';
import distance from '@turf/distance';
import { point } from '@turf/helpers';

interface IAnimateProps {
    clearObjects: () => void;
    coordinates: [number, number][];
    startTime: number;
    animationDuration: number;
    arrowRefCurrent?: HTMLDivElement;
    animationMarkerRefCurrent: mapboxgl.Marker | null;
    animationPauseRefCurrent:
        | boolean
        | {
              coordinates: [number, number][];
              elapsedTime: number;
          }
        | null;
}

export const animateTripArrow = ({
    clearObjects,
    coordinates,
    startTime,
    arrowRefCurrent,
    animationPauseRefCurrent,
    animationDuration,
    animationMarkerRefCurrent,
}: IAnimateProps) => {
    if (!coordinates.length) return;

    const now = performance.now();

    // Длины сегментов
    const segmentLengths = coordinates.map((coord, i) =>
        i === 0 ? 0 : distance(point(coordinates[i - 1]), point(coord)),
    );
    // Общая длина пути
    const totalLength = segmentLengths.reduce((sum, len) => sum + len, 0);
    const accumulatedLengths = segmentLengths.reduce<number[]>((acc, len, i) => {
        acc.push((acc[i - 1] || 0) + len);

        return acc;
    }, []);

    if (animationPauseRefCurrent === true) {
        animationPauseRefCurrent = {
            elapsedTime: now - startTime,
            coordinates,
        };

        return;
    }

    if (animationPauseRefCurrent === false) {
        return;
    }

    const elapsed = now - startTime;
    const progress = Math.min(elapsed / animationDuration, 1);
    const traveledDistance = progress * totalLength;

    // Два ближайших сегмента
    let segmentIndex = accumulatedLengths.findIndex((d) => d >= traveledDistance);

    if (segmentIndex === -1) segmentIndex = coordinates.length - 1;

    const [prevLng, prevLat] = coordinates[segmentIndex - 1] || coordinates[0];
    const [nextLng, nextLat] = coordinates[segmentIndex] || coordinates[coordinates.length - 1];

    const segmentStart = accumulatedLengths[segmentIndex - 1] || 0;
    const segmentEnd = accumulatedLengths[segmentIndex] || totalLength;
    const segmentProgress = (traveledDistance - segmentStart) / (segmentEnd - segmentStart);

    // Интерполяция координат
    const currentLng = prevLng + (nextLng - prevLng) * segmentProgress;
    const currentLat = prevLat + (nextLat - prevLat) * segmentProgress;

    animationMarkerRefCurrent?.setLngLat([currentLng, currentLat]);

    // Расчет угла направления движения
    const angle = bearing([prevLng, prevLat], [nextLng, nextLat]) + 60; // 60 - значение для корректировки
    const svgElement = arrowRefCurrent?.querySelector('svg');

    if (svgElement) svgElement.style.transform = `rotate(${angle}deg)`;

    if (progress < 1) {
        requestAnimationFrame(() =>
            animateTripArrow({
                clearObjects,
                coordinates,
                startTime,
                arrowRefCurrent,
                animationPauseRefCurrent,
                animationDuration,
                animationMarkerRefCurrent,
            }),
        );
    } else {
        clearObjects();
    }
};
