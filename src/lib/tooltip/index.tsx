import { alpha, Box, Tooltip as MuiTooltip, TooltipProps, useTheme } from '@mui/material';

export const Tooltip: React.FC<TooltipProps> = ({ children, ...props }) => {
    const theme = useTheme();

    return (
        <MuiTooltip
            componentsProps={{
                tooltip: {
                    sx: {
                        padding: '8px 16px',
                        ...theme.typography.caption12,
                        backgroundColor: theme.palette.background.background14,
                        color: theme.palette.text.text6,
                        borderRadius: '8px',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 4 10 0 #5C5C5C',
                        borderColor: alpha(theme.palette.border.border3, 0.1),
                    },
                },
            }}
            {...props}
        >
            <Box display="inline-block" height="min-content" width="min-content" maxWidth="100%">
                {children}
            </Box>
        </MuiTooltip>
    );
};
