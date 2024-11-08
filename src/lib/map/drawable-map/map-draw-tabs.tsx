// import mapboxgl from 'mapbox-gl';

import * as S from '../style';
import { Tabs } from '../../tabs';

interface IMapDrawModeTabsProps {
    activeMode?: string;
    onChangeMode: (mode: string) => void;
}

const drawModes = [
    { key: 'draw_line_string', title: 'Line' },
    { key: 'draw_circle', title: 'Circle' },
    { key: 'draw_polygon', title: 'Polygon' },
];

export const MapDrawModeTabs: React.FC<IMapDrawModeTabsProps> = ({ activeMode, onChangeMode }) => {
    const resolvedKey = drawModes.find((node) => node.key === activeMode)?.key;

    return (
        <S.MapDrawModeTabsWrapper>
            <Tabs
                items={drawModes}
                resolvedTitle={(node) => node.title}
                resolvedValue={(node) => node.key}
                activeTab={resolvedKey || false}
                setActiveTab={onChangeMode}
            />
        </S.MapDrawModeTabsWrapper>
    );
};
