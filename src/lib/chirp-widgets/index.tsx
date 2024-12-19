import { FC } from 'react';

import { GraphicWidget } from './graphic-widget';
import { StaticWidget } from './static-widget';
import { WidgetProps, WidgetTypes } from './types';

export const Widget: FC<WidgetProps> = ({ config, ...props }) => {
    if (config.type === WidgetTypes.Graphic) return <GraphicWidget config={config} {...props} />;

    return <StaticWidget config={config} {...props} />;
};
