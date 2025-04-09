import { SxProps } from '@mui/material';
import * as S from './style';

export interface IBaseWidgetProps {
    mainContainerSx?: SxProps;
    headerSx?: SxProps;
    leftHeaderContentSx?: SxProps;
    rightHeaderContentSx?: SxProps;
    renderLeftHeaderContent?: React.ReactNode;
    renderRightHeaderContent?: React.ReactNode;
    renderMainContent?: React.ReactNode;
}

export const BaseWidget: React.FC<IBaseWidgetProps> = ({
    mainContainerSx,
    headerSx,
    leftHeaderContentSx,
    rightHeaderContentSx,
    renderLeftHeaderContent,
    renderRightHeaderContent,
    renderMainContent,
}) => {
    return (
        <S.Container sx={{ ...mainContainerSx }}>
            <S.Header sx={{ ...headerSx }}>
                <S.HeaderContent sx={{ ...leftHeaderContentSx }}>{renderLeftHeaderContent}</S.HeaderContent>
                <S.HeaderContent sx={{ ...rightHeaderContentSx }}>{renderRightHeaderContent}</S.HeaderContent>
            </S.Header>
            {renderMainContent}
        </S.Container>
    );
};
