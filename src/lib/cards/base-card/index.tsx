import { SxProps } from '@mui/system/styleFunctionSx';
import * as S from './styles';

interface IBaseCardProps {
    containerSx?: SxProps;
    headerSx?: SxProps;
    contentSx?: SxProps;
    headerChildren?: React.ReactNode;
    contentChildren?: React.ReactNode;
}

export const BaseCard: React.FC<IBaseCardProps> = ({
    containerSx,
    headerSx,
    headerChildren,
    contentChildren,
    contentSx,
}) => {
    return (
        <S.CardContainer sx={{ ...containerSx }}>
            <S.CardHeader sx={{ ...headerSx }}>{headerChildren}</S.CardHeader>
            <S.CardContent sx={{ ...contentSx }}>{contentChildren}</S.CardContent>
        </S.CardContainer>
    );
};
