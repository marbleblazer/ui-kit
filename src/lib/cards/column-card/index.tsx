import { SxProps } from '@mui/system/styleFunctionSx';
import * as S from './styles';
import { BaseCard } from '../base-card';
import { Stack, Grid } from '@mui/material';
import { Typography } from '../../typogrpahy';

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
                        <Grid item key={index} xs={index === columns.length - 1 ? 8 : 4}>
                            <Stack>
                                <S.ColumnTitleTypography variant="caption12">{column.title}</S.ColumnTitleTypography>

                                {column.data.map((item, itemIndex) =>
                                    tooltipColumnIndex === index ? (
                                        <S.CustomTooltip title={item} placement="top-start" key={itemIndex}>
                                            <S.ColumnDataTypography variant="caption12">{item}</S.ColumnDataTypography>
                                        </S.CustomTooltip>
                                    ) : (
                                        <S.ColumnDataTypography variant="caption12" key={itemIndex}>
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
