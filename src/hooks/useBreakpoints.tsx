import { Breakpoint, useMediaQuery, useTheme } from '@mui/material';

export interface UseBreakpointsResult {
    isSmallMobile: boolean;
    isMobile: boolean;
    isDesktop: boolean;
    isTablet: boolean;
    isExtraLarge: boolean;
}

//  'xs' | 'sm' | 'md' | 'lg' | 'xl',
export const useBreakpoints = (): UseBreakpointsResult => {
    const theme = useTheme();
    const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
    const isExtraLarge = useMediaQuery(theme.breakpoints.up('xxl' as Breakpoint));

    return {
        isSmallMobile,
        isMobile: isMobile || isTablet,
        isTablet,
        isDesktop,
        isExtraLarge,
    };
};
