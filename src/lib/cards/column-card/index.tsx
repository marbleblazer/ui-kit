import { SxProps } from '@mui/system/styleFunctionSx';
import * as S from './styles';
import { BaseCard } from '../base-card';
import { Typography } from '../../typogrpahy';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

interface IColumnData {
    title: string;
    data: string[];
}

interface IColumnCardProps {
    containerSx?: SxProps;
    headerSx?: SxProps;
    contentSx?: SxProps;
    title: string;
    columns: IColumnData[];
    tooltipColumnIndex?: number;
}

export const ColumnCard: React.FC<IColumnCardProps> = ({
    containerSx,
    headerSx,
    contentSx,
    title,
    columns,
    tooltipColumnIndex, // Индекс столбца в columns, на котором будет всплывать tooltip
}) => {
    return (
        <BaseCard
            containerSx={{ ...containerSx, gap: '20px' }}
            headerSx={headerSx}
            contentSx={contentSx}
            headerChildren={<Typography variant="title16">{title}</Typography>}
            contentChildren={
                <Grid container>
                    {columns.map((column, index) => (
                        <Grid item key={index} sx={{ width: '100px' }}>
                            <Stack>
                                <S.ColumnTitleTypography variant="text12">{column.title}</S.ColumnTitleTypography>

                                {column.data.map((item, itemIndex) =>
                                    tooltipColumnIndex === index && item.length > 10 ? (
                                        <S.CustomTooltip title={item} placement="right-end" key={itemIndex}>
                                            <S.ColumnDataTypography variant="text12">{item}</S.ColumnDataTypography>
                                        </S.CustomTooltip>
                                    ) : (
                                        <S.ColumnDataTypography variant="text12" key={itemIndex}>
                                            {item}
                                        </S.ColumnDataTypography>
                                    ),
                                )}
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            }
        />
    );
};
