import * as S from '../style';
import { Tabs } from '../../tabs';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

interface IMapDrawModeTabsProps {
    activeMode?: string;
    onChangeMode: (mode: string) => void;
}

type DrawModesType = {
    key: 'draw_line_string' | 'draw_circle' | 'draw_polygon';
    title: 'Line' | 'Circle' | 'Polygon';
};

const drawModes: DrawModesType[] = [
    { key: 'draw_polygon', title: 'Polygon' },
    { key: 'draw_circle', title: 'Circle' },
    { key: 'draw_line_string', title: 'Line' },
];

export const MapDrawModeTabs: React.FC<IMapDrawModeTabsProps> = ({ activeMode, onChangeMode }) => {
    const { t } = useTranslation('uiKit', { keyPrefix: 'map' });
    const resolvedKey = useMemo(() => {
        return drawModes.find((node) => node.key === activeMode)?.key;
    }, [activeMode]);

    console.log(activeMode, resolvedKey);

    return (
        <S.MapDrawModeTabsWrapper>
            <Tabs
                items={drawModes}
                resolvedTitle={(node) => t(node.title)}
                resolvedValue={(node) => node.key}
                activeTab={resolvedKey || false}
                setActiveTab={onChangeMode}
            />
        </S.MapDrawModeTabsWrapper>
    );
};
