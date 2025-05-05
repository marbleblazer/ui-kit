import { FormControl, InputAdornment, MenuItem, SelectProps, useTheme } from '@mui/material';
import { FC, useMemo, useState } from 'react';

import { InputLabel } from '../input-label';
import * as S from './style';
import { CloseIcon } from '@chirp/ui/assets/icons';
import { IconButton } from '../icon-button';
import { TextField } from '../text-field';
import { SearchIcon } from '@chirp/ui/assets/fleet-icons';
import { Loader } from '../loader';

export type SelectWithSearchOptionType = {
    value: string | number;
    name: string | number;
    badge?: string;
};

export type SelectWithSearchPropsType = Omit<SelectProps, 'onClose' | 'variant' | 'collection'> & {
    isLoading?: boolean;
    onClear?: () => void;
    searchPlaceholder?: string;
    collection: SelectWithSearchOptionType[];
};

export const SelectWithSearch: FC<SelectWithSearchPropsType> = ({
    label,
    labelId,
    disabled,
    value,
    isLoading,
    onClear,
    collection = [],
    searchPlaceholder,
    endAdornment,
    MenuProps,
    ...props
}) => {
    const theme = useTheme();
    const [searchText, setSearchText] = useState('');

    const mergedMenuProps = {
        ...MenuProps,
        MenuListProps: {
            ...MenuProps?.MenuListProps,
            sx: {
                padding: 0,
                ...MenuProps?.MenuListProps?.sx,
            },
        },
    };

    const filteredCollection = useMemo(() => {
        if (searchText?.length) {
            return collection.filter((item) => String(item.name).toLowerCase().includes(searchText.toLowerCase()));
        }

        return collection;
    }, [searchText, collection]);

    return (
        <FormControl fullWidth>
            <InputLabel
                labelId={labelId}
                label={label}
                className={props.error ? 'Mui-error' : undefined}
                sx={{
                    opacity: disabled ? 0.3 : 1,
                    '&.MuiInputLabel-shrink': {
                        transform: 'none',
                        left: 0,
                        color: theme.palette.text.titleInput,
                        ...theme.typography.caption12,
                    },
                }}
            />
            <S.Select
                {...props}
                value={value}
                disabled={disabled}
                MenuProps={mergedMenuProps}
                onClose={() => setSearchText('')}
                endAdornment={
                    endAdornment ? (
                        endAdornment
                    ) : onClear && value ? (
                        <InputAdornment sx={{ marginRight: '16px' }} position="end">
                            <IconButton variant="gray" onClick={onClear}>
                                <CloseIcon />
                            </IconButton>
                        </InputAdornment>
                    ) : null
                }
            >
                <S.ListSubheader onClick={(e) => e.stopPropagation()}>
                    <TextField
                        size="small"
                        value={searchText}
                        // autoFocus
                        placeholder={searchPlaceholder}
                        fullWidth
                        onClick={(e) => e.stopPropagation()}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                            endAdornment: isLoading ? (
                                <InputAdornment position="end">
                                    <Loader />
                                </InputAdornment>
                            ) : null,
                        }}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key !== 'Escape') {
                                e.stopPropagation();
                            }
                        }}
                    />
                </S.ListSubheader>
                {filteredCollection.length
                    ? filteredCollection.map(({ badge, ...rest }) => (
                          <MenuItem key={`${rest.name}-${rest.value}`} value={String(rest.value)}>
                              <S.MenuItemWrapper
                                  width="100%"
                                  direction="row"
                                  justifyContent="space-between"
                                  alignItems="center"
                              >
                                  {String(rest.name)}
                                  {badge ? <span>{badge}</span> : null}
                              </S.MenuItemWrapper>
                          </MenuItem>
                      ))
                    : null}
            </S.Select>
        </FormControl>
    );
};
