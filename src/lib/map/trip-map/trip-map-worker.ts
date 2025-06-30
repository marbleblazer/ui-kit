import { FC, useEffect } from 'react';
import { CLUSTERS_LAYER_KEY, LINE_POINTS_LAYER_KEY, LINE_POINTS_SOURCE_KEY } from './constance';
import { useTheme } from '@mui/material';
import moment from 'moment';
import mapboxgl from 'mapbox-gl';

interface ITripMapWorkerProps {
    mapCurrent: mapboxgl.Map;
    mapUpdatedState: boolean;
}

export const TripMapWorker: FC<ITripMapWorkerProps> = ({ mapCurrent, mapUpdatedState }) => {
    const theme = useTheme();
    useEffect(() => {
        if (!mapCurrent) return;

        const clusterClickHandler = (e: mapboxgl.MapMouseEvent) => {
            const features = mapCurrent.queryRenderedFeatures(e.point, {
                layers: [CLUSTERS_LAYER_KEY],
            });

            if (features && !!features?.length) {
                const clusterId = features[0].properties?.cluster_id as number;

                const mainSource = mapCurrent!.getSource(LINE_POINTS_SOURCE_KEY) as mapboxgl.GeoJSONSource;

                mainSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
                    if (err) return;

                    const feature = features?.[0];

                    if ('coordinates' in feature.geometry)
                        mapCurrent?.easeTo({
                            center: (feature.geometry?.coordinates as [number, number]) ?? undefined,
                            zoom: zoom || 10,
                        });
                });
            }
        };

        const pointerMouseEnterHandler = (e: mapboxgl.MapMouseEvent) => {
            mapCurrent.getCanvas().style.cursor = 'pointer';

            const { speeds, time } = e.features?.[0].properties as {
                speeds: number | null;
                time: string | null;
            };

            const speed = speeds ?? null;
            const serverTime = time ?? null;

            if (speed === null && serverTime === null) return;

            const popupContent = `
                                <div>${serverTime ? moment(new Date(serverTime)).format('YYYY.MM.DD HH:mm') : 'N/A'}</div>
                                <div class="speed">${speed !== null ? `${speed.toFixed(2)} km/h` : 'Speed N/A'}</div>
                                `;

            popup.setLngLat(e.lngLat).setHTML(popupContent);

            // @ts-expect-error разобраться в чем проблема
            popup.addTo(mapCurrent);
        };

        const mouseLeaveHandler = () => {
            mapCurrent.getCanvas().style.cursor = '';
            popup.remove();
        };

        const popup = new mapboxgl.Popup({ closeButton: false, className: 'speed-popup' });

        mapCurrent.on('click', CLUSTERS_LAYER_KEY, clusterClickHandler);

        mapCurrent.on('mouseenter', LINE_POINTS_LAYER_KEY, pointerMouseEnterHandler);

        mapCurrent.on('mouseleave', LINE_POINTS_LAYER_KEY, mouseLeaveHandler);

        return () => {
            mapCurrent.off('mouseenter', LINE_POINTS_LAYER_KEY, pointerMouseEnterHandler);
            mapCurrent.off('mouseleave', LINE_POINTS_LAYER_KEY, mouseLeaveHandler);
            mapCurrent.off('click', CLUSTERS_LAYER_KEY, clusterClickHandler);
        };
    }, [mapCurrent, theme, mapUpdatedState]);

    return null;
};
