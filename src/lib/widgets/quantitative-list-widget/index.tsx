import { alpha, Stack, SxProps, useTheme } from '@mui/material';
import { BaseWidget, IBaseWidgetProps } from '../base-widget';
import * as S from './style';
import { Typography } from '../../typogrpahy';

interface IListItem {
    value: number;
    status: string;
    color: string;
    label: string;
}

interface IQuantitativeListWidgetProps extends IBaseWidgetProps {
    data: IListItem[];
    listContainerSx?: SxProps;
    listItemSx?: SxProps;
    onItemClick?: (item: string) => void;
}

export const QuantitativeListWidget: React.FC<React.PropsWithChildren<IQuantitativeListWidgetProps>> = (props) => {
    const { data, onItemClick, listContainerSx, listItemSx, ...baseWidgetProps } = props;

    const { palette } = useTheme();

    const renderMainContent = (
        <Stack gap="12px" sx={{ ...listContainerSx }}>
            {data.map((item, index) => (
                <S.ListItem
                    key={item.status}
                    onClick={(event) => {
                        event.stopPropagation();

                        if (onItemClick) {
                            onItemClick(item.status);
                        }
                    }}
                    sx={{
                        ...listItemSx,
                        borderBottom: index === data.length - 1 ? 'none' : `1px solid ${palette.border.border3}`,
                    }}
                >
                    <Stack direction="row" gap="8px" alignItems="center">
                        <S.Circle sx={{ backgroundColor: item.color }} />
                        <Typography variant="body1" color={palette.text.text1}>
                            {item.label}
                        </Typography>
                    </Stack>
                    <S.QuantityBox sx={{ backgroundColor: alpha(item.color, 0.2), color: item.color }}>
                        {item.value}
                    </S.QuantityBox>
                </S.ListItem>
            ))}
        </Stack>
    );

    return <BaseWidget {...baseWidgetProps} renderMainContent={renderMainContent} />;
};
