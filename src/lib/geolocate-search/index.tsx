import { FC, useEffect, useState } from 'react';
import { Autocomplete } from '../autocomplete';
import { TextField } from '../text-field';
import { useDebounce } from '@chirp/ui/hooks';
import { geocodingClient } from '../map/helpers/geocoding-client';
import { useTranslation } from 'react-i18next';
import { GeocodeFeature } from '@mapbox/mapbox-sdk/services/geocoding';
import { SxProps } from '@mui/material/styles';
import { StandardTextFieldProps } from '@mui/material/TextField';

interface IGeolocateSearchProps {
    selectedValue: null | GeocodeFeature['geometry']['coordinates'];
    onSelect: (location: GeocodeFeature | null) => void;
    textFieldProps?: StandardTextFieldProps;
    sx?: SxProps;
}

export const GeolocateSearch: FC<IGeolocateSearchProps> = ({ sx, selectedValue, textFieldProps, onSelect }) => {
    const { i18n } = useTranslation();

    const [localSelectedValue, setLocalSelectedValue] = useState<GeocodeFeature | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [locationsState, setLocationsState] = useState<GeocodeFeature[]>([]);

    const debouncedValue = useDebounce(inputValue, 300);

    useEffect(() => {
        if (!debouncedValue.length) return;

        geocodingClient
            .forwardGeocode({
                query: debouncedValue,
                language: [i18n.language],
            })
            .send()
            .then((response) => setLocationsState(response.body.features));
    }, [debouncedValue, i18n.language]);

    useEffect(() => {
        if (selectedValue) {
            geocodingClient
                .reverseGeocode({
                    query: [selectedValue[0], selectedValue[1]],
                    language: [i18n.language],
                })
                .send()
                .then((response) => {
                    const features = response.body.features;

                    const foundFeature = features.find(
                        (elem) =>
                            elem.geometry.coordinates[0] === selectedValue[0] &&
                            elem.geometry.coordinates[1] === selectedValue[1],
                    );
                    console.log(foundFeature);

                    setLocalSelectedValue(foundFeature ?? response.body.features[0]);
                });
        }
    }, [i18n.language, selectedValue]);

    return (
        <Autocomplete
            fullWidth
            freeSolo
            filterOptions={(x) => x}
            disabled={false}
            value={localSelectedValue}
            sx={sx}
            options={locationsState}
            getOptionKey={(option) => (typeof option === 'string' ? '' : (option?.id ?? ''))}
            getOptionLabel={(option) => (typeof option === 'string' ? '' : (option?.place_name ?? ''))}
            onChange={(_, newValue) => onSelect(newValue as GeocodeFeature)}
            inputValue={inputValue}
            onReset={() => onSelect(null)}
            onInputChange={(_, newInputValue) => {
                setInputValue(newInputValue);
            }}
            renderInput={(params) => <TextField {...params} {...textFieldProps} />}
        />
    );
};
