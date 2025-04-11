import { useTheme } from '@mui/material';
import { BaseWidget } from '../base-widget';

export const ListWithIconsWidget: React.FC<React.PropsWithChildren<IQuantitativeListWidgetProps>> = (props) => {
    const { ...baseWidgetProps } = props;

    const { palette } = useTheme();

    return <BaseWidget />;
};
