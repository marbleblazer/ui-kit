import { SliceTooltipProps } from '@nivo/line';
import { TableTooltip } from '@nivo/tooltip';
import moment from 'moment';
import { AttributeConfig, WidgetTypes } from '@chirp/ui/lib/chirp-widgets/types';
import { Typography } from '@chirp/ui/lib/typogrpahy';
import { useTheme } from '@mui/material';

export const Tooltip = ({
    slice,
    config,
    postfix,
    minY,
    maxY,
}: SliceTooltipProps & { config?: AttributeConfig; postfix?: string; minY: number | null; maxY: number | null }) => {
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
                        <Typography key="value" color={theme.palette.text.text4}>
                            <div>
                                <Typography variant="text13" color={theme.palette.text.text4}>
                                    Current {value}
                                </Typography>
                                <Typography variant="caption8" sx={{ verticalAlign: 'super' }}>
                                    {postfix}
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="text13" color={theme.palette.base.color6}>
                                    Max {maxY}
                                </Typography>
                                <Typography
                                    variant="caption8"
                                    sx={{ verticalAlign: 'super' }}
                                    color={theme.palette.base.color6}
                                >
                                    {postfix}
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="text13" color={theme.palette.base.color23}>
                                    Min {minY}
                                </Typography>
                                <Typography
                                    variant="caption8"
                                    sx={{ verticalAlign: 'super' }}
                                    color={theme.palette.base.color23}
                                >
                                    {postfix}
                                </Typography>
                            </div>
                        </Typography>,
                    ];
                }),
            ]}
        />
    );
};
