import { SliderProps } from '@mui/material';
import * as S from './style';

interface ISliderProps extends SliderProps {}

export const Slider: React.FC<ISliderProps> = (props) => {
    return <S.Slider {...props} />;
};
