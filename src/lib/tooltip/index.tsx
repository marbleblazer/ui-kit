import { Box, Tooltip as MuiTooltip, TooltipProps, useTheme } from '@mui/material';

export const Tooltip: React.FC<TooltipProps> = ({ children, ...props }) => {
    const theme = useTheme();

    return (
        <MuiTooltip
            componentsProps={{
                tooltip: {
                    sx: {
                        padding: '20px',
                        /* 10px as was set in Figma is too small */
                        ...theme.typography.caption,
                        background: theme.palette.darkShades.ternary,
                        color: theme.palette.lightShades.primary,
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
