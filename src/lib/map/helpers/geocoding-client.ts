import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';

export const geocodingClient = mbxGeocoding({ accessToken: import.meta.env.VITE_UI_MAPBOX_TOKEN });
