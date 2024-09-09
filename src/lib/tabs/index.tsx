import { SxProps, Theme } from '@mui/material';

import * as S from './style';

type Props<T extends string> = {
    items: T[];
    activeTab: T;
    setActiveTab(tab: T): void;
    sx?: SxProps<Theme>;
    variant?: 'fullWidth' | 'standard' | 'scrollable';
};

export const Tabs = <T extends string>({ items, activeTab, setActiveTab, sx, variant }: Props<T>) => {
    return (
        <S.Tabs
            className="tabs"
            value={activeTab}
            onChange={(_, tabName) => setActiveTab(tabName)}
            sx={sx}
            variant={variant}
        >
            {items.map((tab) => (
                <S.Tab key={tab} label={tab} value={tab} />
            ))}
        </S.Tabs>
    );
};
