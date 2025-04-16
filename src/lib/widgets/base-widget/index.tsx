import { Stack, SxProps } from '@mui/material';
import * as S from './style';

export interface IBaseWidgetProps {
    mainContainerSx?: SxProps;
    headerSx?: SxProps;
    leftHeaderContentSx?: SxProps;
    rightHeaderContentSx?: SxProps;
    headerSubheaderContainerSx?: SxProps;
    renderLeftHeaderContent?: React.ReactNode;
    renderRightHeaderContent?: React.ReactNode;
    renderMainContent?: React.ReactNode;
    renderSubHeader?: React.ReactNode;
    onContainerClick?: () => void;
}

export const BaseWidget: React.FC<IBaseWidgetProps> = ({
    mainContainerSx,
    headerSx,
    leftHeaderContentSx,
    rightHeaderContentSx,
    headerSubheaderContainerSx,
    renderLeftHeaderContent,
    renderRightHeaderContent,
    renderMainContent,
    renderSubHeader,
    onContainerClick,
}) => {
    const containerStyles = {
        ...mainContainerSx,
        cursor: onContainerClick ? 'pointer' : 'default',
    };

    const headerContent = (
        <S.Header sx={headerSx}>
            <S.HeaderContent sx={leftHeaderContentSx}>{renderLeftHeaderContent}</S.HeaderContent>
            <S.HeaderContent sx={rightHeaderContentSx}>{renderRightHeaderContent}</S.HeaderContent>
        </S.Header>
    );

    return (
        <S.Container sx={containerStyles} onClick={onContainerClick}>
            {renderSubHeader ? (
                <Stack sx={{ gap: '12px', ...headerSubheaderContainerSx }}>
                    {headerContent}
                    {renderSubHeader}
                </Stack>
            ) : (
                headerContent
            )}
            {renderMainContent}
        </S.Container>
    );
};
