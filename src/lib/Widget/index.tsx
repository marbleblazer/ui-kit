import { FC } from 'react';

import { GraphicWidget } from './GraphicWidget';
import { StaticWidget } from './StaticWidget';
import { WidgetProps, WidgetTypes } from './types';

export const Widget: FC<WidgetProps> = ({ config, ...props }) => {
    if (config.type === WidgetTypes.Graphic) return <GraphicWidget config={config} {...props} />;

    return <StaticWidget config={config} {...props} />;
};
