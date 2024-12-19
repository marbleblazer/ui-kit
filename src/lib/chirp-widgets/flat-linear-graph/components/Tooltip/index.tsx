import { useTheme } from '@nivo/core';
import { SliceTooltipProps } from '@nivo/line';
import { TableTooltip } from '@nivo/tooltip';
import moment from 'moment';
import { AttributeConfig, WidgetTypes } from '@chirp/ui/lib/chirp-widgets/types';
import { Typography } from '@chirp/ui/lib/typogrpahy';

export const Tooltip = ({
    slice,
    config,
    postfix,
}: SliceTooltipProps & { config?: AttributeConfig; postfix?: string }) => {
    const theme = useTheme();

    const dateString = moment(slice.points[0].data.xFormatted).format('DD.MM, HH:mm');

    return (
        <TableTooltip
            rows={[
                [
                    <Typography key="date" color="text.text8" variant="text12">
                        {dateString}
                    </Typography>,
                ],
                slice.points.map((point) => {
                    const isBoolean = config && config.type === WidgetTypes.Boolean;
                    const value =
                        isBoolean && config.value_map
                            ? config.value_map[String(point.data.yFormatted)]
                            : point.data.yFormatted;

                    return [
                        // TODO - "No data" in case of a data failure
                        <Typography
                            key="value"
                            style={theme.tooltip.tableCellValue}
                            fontSize={13}
                            color={point.serieColor}
                        >
                            {value}
                            <Typography component="span" sx={{ verticalAlign: 'super' }} fontSize="10px">
                                {postfix}
                            </Typography>
                        </Typography>,
                    ];
                }),
            ]}
        />
    );
};
