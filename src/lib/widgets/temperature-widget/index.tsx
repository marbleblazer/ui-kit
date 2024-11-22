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
                        <S.CustomCaptionTypography variant="caption">Last update:</S.CustomCaptionTypography>
                        <S.LastUpdateTimeTypography variant="caption">20:32</S.LastUpdateTimeTypography>
                    </Stack>
                </Stack>

                <S.RightCornerIconsWrapper>
                    <SettingsIcon />
                    <ThumbtackIcon />
                </S.RightCornerIconsWrapper>
            </S.HeaderWrapper>

            <Stack direction="row" marginTop="12px">
                <S.LeftSideOfTemperatureTypography variant="h1">35</S.LeftSideOfTemperatureTypography>

                <Stack alignItems="flex-end" justifyContent="flex-end">
                    <S.DegreeSignTypography variant="caption">°C</S.DegreeSignTypography>
                    <S.RightSideOfTemperatureTypography variant="body1">,05</S.RightSideOfTemperatureTypography>
                </Stack>
            </Stack>

            <Stack gap="6px" marginTop="38px">
                <S.CustomCaptionTypography variant="caption" sx={{ marginRight: '0px' }}>
                    Last 12h
                </S.CustomCaptionTypography>

                <Stack>
                    <Stack flexDirection="row" justifyContent="space-between">
                        <Stack direction="row">
                            <Typography variant="caption">Min</Typography>
                            <Typography variant="caption">12</Typography>
                        </Stack>

                        <Stack direction="row">
                            <Typography variant="caption">Avg</Typography>
                            <Typography variant="caption">38</Typography>
                        </Stack>

                        <Stack direction="row">
                            <Typography variant="caption">Max</Typography>
                            <Typography variant="caption">41</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </S.WidgetContainer>
    );
};
