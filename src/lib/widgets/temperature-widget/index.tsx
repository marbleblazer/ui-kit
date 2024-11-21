import { Stack, Typography } from '@mui/material';
import * as S from './style';
import { SettingsIcon, TemperatureIcon, ThumbtackIcon } from '@chirp/ui/assets/fleet-icons';

export const TemperatureWidget = () => {
    return (
        <S.WidgetContainer>
            <S.HeaderWrapper>
                <Stack gap="8px">
                    <Stack flexDirection="row" alignItems="center" gap="8px">
                        <TemperatureIcon />
                        <S.TemperatureTypography variant="caption">Temperature</S.TemperatureTypography>
                    </Stack>

                    <Stack flexDirection="row">
                        <S.LastUpdateTypography variant="caption">Last update:</S.LastUpdateTypography>
                        <S.LastUpdateTimeTypography variant="caption">20:32</S.LastUpdateTimeTypography>
                    </Stack>
                </Stack>

                <S.RightCornerIconsWrapper>
                    <SettingsIcon />
                    <ThumbtackIcon />
                </S.RightCornerIconsWrapper>
            </S.HeaderWrapper>

            <Stack direction="row" marginTop="12px" alignItems="flex-end">
                <Typography variant="h1">35</Typography>
                <Typography variant="body1" sx={{ fontSize: '20px', lineHeight: '32px', fontWeight: '500' }}>
                    ,05
                </Typography>
                <Typography variant="caption">°C</Typography>

                {/* <Stack alignItems="flex-end">
                </Stack> */}
            </Stack>

            <Stack marginTop="38px">
                <S.LastUpdateTypography variant="caption">Last 12h</S.LastUpdateTypography>

                <Stack>
                    <Stack flexDirection="row" justifyContent="space-between">
                        <Typography variant="caption">Min 12</Typography>
                        <Typography variant="caption">Avg 38</Typography>
                        <Typography variant="caption">Max 41</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </S.WidgetContainer>
    );
};
