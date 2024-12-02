import { Box, Tooltip as MuiTooltip, TooltipProps, useTheme } from '@mui/material';

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
                        borderRadius: '12px',
                        backdropFilter: 'blur(10px)',
                        boxShadow: theme.palette.shadow.primary,
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
