import { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { BaseWidget, IBaseWidgetProps } from '../base-widget';
import { Checkbox, Select, StackedChart } from '@chirp/ui/lib';
import { Stack, useTheme, Box } from '@mui/material';
import { StackedLineChartDataType } from '../../charts/stacked-chart/stacked-line-chart';
import { ColorListItem } from '../common/color-list-item/list-item';
import { arrayToMap } from '@chirp/ui/helpers/array-to-map';

import * as S from './styles';
import { BaseWidgetCustomHeader } from '../base-widget/base-widget-custom-header';
import { CurrentItemContent } from './current-item-content';
import { useTranslation } from 'react-i18next';

type OptionType = {
    value: number;
    label: string;
};

export interface IStackedLineChartWidgetProps<T> extends IBaseWidgetProps {
    collection: T[];
    dataKey: keyof T;
    idKey: keyof T;
    chartStyles?: React.CSSProperties;
    selectOptions: OptionType[];
    maxItems?: number;
    colors: string[];
}

export const StackedLineChartWidget = <T,>(props: PropsWithChildren<IStackedLineChartWidgetProps<T>>) => {
    const { t } = useTranslation('uiKit', { keyPrefix: 'widgets' });
    const theme = useTheme();
    const {
        collection,
        colors,
        dataKey,
        selectOptions,
        maxItems = 10,
        chartStyles,
        idKey,
        title,
        ...baseWidgetProps
    } = props;
    const [currentItemIdx, setCurrentItemIdx] = useState<null | number>(null);
    const [selectedKeys, setSelectedKeys] = useState<number[]>([]);

    const handleChangeSelectedKeys = (keys: number[]) => {
        keys.sort();
        setSelectedKeys(keys);
    };

    const preparedData = useMemo(() => {
        if (!selectedKeys?.length) {
            return collection.map((elem) => elem[dataKey]) as StackedLineChartDataType[];
        }

        const filtered = collection.filter((elem) => selectedKeys.includes(elem[idKey] as number));

        return filtered.map((elem) => elem[dataKey]) as StackedLineChartDataType[];
    }, [selectedKeys, collection, dataKey, idKey]);

    const mappedOptions = useMemo(() => arrayToMap(selectOptions, 'value'), [selectOptions]);

    useEffect(() => {
        if (!selectOptions) return;

        const keys = selectOptions.map((elem) => elem.value);
        setSelectedKeys(keys);
    }, [selectOptions]);

    return (
        <BaseWidget
            title={title}
            {...baseWidgetProps}
            customHeader={
                currentItemIdx !== null ? (
                    <BaseWidgetCustomHeader
                        typeText={title}
                        title={mappedOptions[currentItemIdx]?.label}
                        onBackClick={() => setCurrentItemIdx(null)}
                    />
                ) : undefined
            }
        >
            {currentItemIdx !== null ? (
                <CurrentItemContent
                    data={[preparedData[currentItemIdx]]}
                    color={colors[currentItemIdx % colors.length]}
                    itemName={mappedOptions[selectedKeys[currentItemIdx]]?.label}
                    chartStyles={chartStyles}
                />
            ) : (
                <Box>
                    <Stack direction="row" gap={4}>
                        <StackedChart
                            colors={colors}
                            style={{ width: '100%', height: '100%', paddingTop: '34px', ...chartStyles }}
                            data={preparedData}
                        />
                        <Stack>
                            <Select
                                variant="outlined"
                                name="vendor"
                                multiple
                                sx={{
                                    mt: 0,
                                    border: 'none',
                                    backgroundColor: theme.palette.background.background2,
                                    height: '30px',
                                    '& .MuiInputBase-input.MuiOutlinedInput-input': {
                                        padding: '5.5px 12px',
                                    },
                                }}
                                defaultValue={[]}
                                value={selectedKeys}
                                renderValue={() => t('All')}
                                placeholder={t('All')}
                                MenuProps={{ PaperProps: { sx: { maxHeight: '300px' } } }}
                                onChange={(e) => handleChangeSelectedKeys(e.target.value as number[])}
                            >
                                {selectOptions.map((option) => (
                                    <S.StyledMenuItem value={option.value} key={option.value}>
                                        {option.label}
                                        <Checkbox
                                            checked={selectedKeys.find((elem) => elem === option.value) !== undefined}
                                        />
                                    </S.StyledMenuItem>
                                ))}
                            </Select>
                            <Stack gap={1} mt={3} width="220px">
                                {selectedKeys?.map((item, idx) => (
                                    <ColorListItem
                                        key={item}
                                        onClick={() => setCurrentItemIdx(idx)}
                                        name={mappedOptions[item]?.label}
                                        value={null}
                                        color={colors[idx % colors.length]}
                                    />
                                ))}
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            )}
        </BaseWidget>
    );
};
