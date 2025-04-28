import { Stack, SxProps } from '@mui/material';
import * as S from './style';
import { Loader } from '@chirp/ui/lib';

export interface IBaseWidgetProps {
    isLoading: boolean;
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
    isLoading,
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
            {isLoading ? (
                <Loader size="large" />
            ) : (
                <>
                    {renderSubHeader ? (
                        <Stack sx={{ gap: '12px', ...headerSubheaderContainerSx }}>
                            {headerContent}
                            {renderSubHeader}
                        </Stack>
                    ) : (
                        headerContent
                    )}
                    {renderMainContent}
                </>
            )}
        </S.Container>
    );
};
