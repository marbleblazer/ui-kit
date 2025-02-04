import { useEffect, useMemo, useState } from 'react';
import { Box, Paper, Stack } from '@mui/material';
import { Dropdown } from '../dropdown';
import { MultiselectDropdownButton } from './dropdown-button/dropdown-button';
import { Checkbox } from '../checkbox';
import { DropdownFooter } from './dropdown-content/footer';
import { SearchInput } from '../search-input';
import { useDebounce } from '@chirp/ui/hooks/use-debounce';
import { useTranslation } from 'react-i18next';

type CheckedStateType<T> = {
    array: T[];
    map: { [key: number | string]: boolean };
};

interface IDropdownMultiselectProps<T> {
    title: string;
    width: string;

    options: T[];
    idKey: keyof T;
    nameKey: keyof T;
    selectedOptions: T[];

    onAccept: (arr: T[]) => void;
    onClear: () => void;
}

export const DropdownMultiselect = <T extends Record<keyof T, unknown>>({
    title = '',
    width = '230px',
    selectedOptions = [],

    options = [],
    idKey,
    nameKey,

    onAccept,
    onClear,
}: IDropdownMultiselectProps<T>) => {
    const { t } = useTranslation('uiKit', { keyPrefix: 'DropdownMultiselect' });
    const [openState, setOpenState] = useState(false);
    const [searchState, setSearchState] = useState('');
    const [checkedItemsState, setCheckedItemsState] = useState<CheckedStateType<T>>({
        array: [],
        map: {},
    });

    const debouncedSearch = useDebounce(searchState);

    useEffect(() => {
        if (!selectedOptions) return;
        const mappedSelectedItems = selectedOptions.reduce(
            (acc, item) => ({ ...acc, [item[idKey] as PropertyKey]: true }),
            {} as CheckedStateType<T>['map'],
        );
        setCheckedItemsState({ array: selectedOptions, map: mappedSelectedItems });
    }, [selectedOptions]);

    const handleChangeCheckedITem = (elem: T, checked: boolean) => {
        if (checked) {
            setCheckedItemsState((prev) => ({
                array: [...prev.array, elem],
                map: { ...prev.map, [elem[idKey] as PropertyKey]: true },
            }));
        } else {
            setCheckedItemsState((prev) => ({
                array: prev.array.filter((item) => item[idKey] !== elem[idKey]),
                map: { ...prev.map, [elem[idKey] as PropertyKey]: false },
            }));
        }
    };

    const handleApplyClick = () => {
        onAccept(checkedItemsState.array);
        setOpenState(false);
    };

    const handleClearClick = () => {
        onClear();
        setOpenState(false);
    };

    const filteredOptions = useMemo(() => {
        return options.filter((item) =>
            String(item[nameKey]).toString().toLowerCase().includes(debouncedSearch.toLowerCase()),
        );
    }, [options, debouncedSearch]);

    return (
        <Box width={width}>
            <Dropdown
                isOpened={openState}
                anchorEl={<MultiselectDropdownButton title={title} onClick={() => setOpenState(!openState)} />}
            >
                <Paper>
                    <Stack width={width}>
                        <Box p={4}>
                            <Stack gap={4}>
                                <SearchInput
                                    value={searchState}
                                    onChange={setSearchState}
                                    placeholder={t('Search by name')}
                                />
                                {filteredOptions.map((item, index) => (
                                    <Checkbox
                                        key={`${index}-${item[idKey]}`}
                                        variant="check"
                                        label={item[nameKey] as string}
                                        checked={!!checkedItemsState.map[item[idKey] as number | string]}
                                        onChange={(_, checked) => handleChangeCheckedITem(item, checked)}
                                        labelTypographyVariant="body1"
                                        formControlLabelProps={{
                                            sx: {
                                                color: 'text.text4',
                                            },
                                        }}
                                        sx={{
                                            height: '26px',
                                        }}
                                    />
                                ))}
                            </Stack>
                        </Box>
                        <DropdownFooter
                            selectedCount={checkedItemsState.array?.length}
                            onAccept={handleApplyClick}
                            onClear={handleClearClick}
                        />
                    </Stack>
                </Paper>
            </Dropdown>
        </Box>
    );
};
