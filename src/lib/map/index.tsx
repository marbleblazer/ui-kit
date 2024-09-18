import { Box, useTheme } from '@mui/material';
import mapboxgl, { LngLat } from 'mapbox-gl';
import { useEffect, useMemo, useRef, useState } from 'react';

import { getMapStyleId } from '@chirp/ui/helpers/mapUtils';
import { useBreakpoints } from '@chirp/ui/hooks/useBreakpoints';

import * as S from './style';
import { Coordinates } from './map.types';

mapboxgl.accessToken = import.meta.env.VITE_UI_MAPBOX_TOKEN || '';

type Props = {
    coordinates?: Coordinates;
    scrollZoom?: boolean;
    setCoordinates: (coords: Coordinates) => void;
    onChange?: () => void;
};

export const Map: React.FC<Props> = ({ coordinates, scrollZoom = true, setCoordinates, onChange = () => {} }) => {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const wrapper = useRef<HTMLDivElement | null>(null);
    const map = useRef<mapboxgl.Map>(null);
    const { isMobile } = useBreakpoints();
    const [newCoordinates, setNewCoordinates] = useState<LngLat | null>(null);

    const { palette } = useTheme();

    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='15' height='19' viewBox='0 0 15 19' fill='none'>
      <path
        d='M14.75 7.45098C14.75 8.73696 14.2998 10.0885 13.607 11.4033C12.9151 12.7163 11.9896 13.9769 11.0591 15.0768C10.1293 16.1759 9.19871 17.1095 8.50031 17.7684C8.15127 18.0977 7.86063 18.3581 7.6576 18.5358C7.59699 18.5888 7.5442 18.6345 7.5 18.6725C7.4558 18.6345 7.403 18.5888 7.34238 18.5358C7.13935 18.3581 6.8487 18.0977 6.49965 17.7684C5.80123 17.1095 4.87063 16.1759 3.94076 15.0768C3.01027 13.9769 2.08479 12.7163 1.39294 11.4033C0.700079 10.0885 0.249937 8.73697 0.25 7.45099C0.25011 5.18593 1.06503 3.3908 2.36836 2.161C3.67379 0.929208 5.48494 0.25 7.5 0.25C11.5136 0.25 14.75 3.12781 14.75 7.45098Z'
        fill='#FF4D14'
        stroke='#101010'
        strokeWidth='0.5'
      />
      <circle cx='7.5' cy='7.5' r='2.5' fill='#101010' />
    </svg>`;

    const customMarker = document && document.createElement('div');
    customMarker.innerHTML = svg;
    const marker = useMemo(() => new mapboxgl.Marker(customMarker), []);

    useEffect(() => {
        if (map.current) return;
        // @ts-ignore
        map.current = new mapboxgl.Map({
            container: mapContainer.current || '',
            style: getMapStyleId(palette.mode),
            zoom: 6,
            minZoom: 4,
            scrollZoom,
            projection: { name: 'equirectangular' },
            logoPosition: 'bottom-right',
            maxBounds: [
                [-180, -72],
                [180, 72],
            ],
            center:
                coordinates?.lat && coordinates?.lon
                    ? [coordinates.lon, coordinates.lat]
                    : [9.56413004748697, 51.65120378622913],
            trackResize: true,
            crossSourceCollisions: false,
            cooperativeGestures: isMobile,
        });

        map.current.addControl(
            new mapboxgl.FullscreenControl({ container: wrapper.current ?? undefined }),
            'bottom-right',
        );
        map.current.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'bottom-right');

        const geolocate = new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true,
            },
            showUserHeading: false,
            fitBoundsOptions: {
                animate: false,
            },
        });

        map.current.addControl(geolocate, 'bottom-right');
        map.current.getCanvas().style.cursor = 'pointer';

        const addMarker = (event: mapboxgl.MapTouchEvent | mapboxgl.MapMouseEvent) => {
            if (!map.current) return;
            const coords = event.lngLat;
            const latlng = new mapboxgl.LngLat(coords.lng, coords.lat);
            setCoordinates({ lat: coords.lat, lon: coords.lng });
            setNewCoordinates(latlng);
        };

        geolocate.on('geolocate', (e: any) => {
            if (!map.current) return;
            const latlng = new mapboxgl.LngLat(e.coords.longitude as number, e.coords.latitude as number);
            map.current?.flyTo({ center: [latlng.lng, latlng.lat], essential: true });
        });

        map.current.on('click', addMarker);
    }, []);

    useEffect(() => {
        if (!newCoordinates || !map.current) return;

        marker.setLngLat(newCoordinates).addTo(map.current);
        onChange();
    }, [marker, newCoordinates]);

    return (
        <S.MapContainer width="100%" height="100%" position="relative" className="wrapper" ref={wrapper}>
            <Box width="100%" height="100%" ref={mapContainer} className="map-container" />
        </S.MapContainer>
    );
};
