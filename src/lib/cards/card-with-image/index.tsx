import { SxProps } from '@mui/system/styleFunctionSx';
import * as S from './styles';
import { BaseCard } from '../base-card';
import { Stack } from '@mui/material';
import { ImagePreview } from '../../image-preview';
import { Typography } from '../../typogrpahy';

interface ICardWithImageProps {
    containerSx?: SxProps;
    headerSx?: SxProps;
    contentSx?: SxProps;
    title: string;
    subTitle?: string;
    image: string;
    contentChildren?: React.ReactNode;
}

export const CardWithImage: React.FC<ICardWithImageProps> = ({
    title,
    subTitle,
    image,
    contentChildren,
    containerSx,
    headerSx,
    contentSx,
}) => {
    return (
        <BaseCard
            containerSx={containerSx}
            headerSx={{ ...headerSx, minHeight: '56px', width: '100%' }}
            contentSx={contentSx}
            headerChildren={
                <Stack flexDirection="row" gap="16px" alignItems="center">
                    <ImagePreview
                        previewUrl={image ?? ''}
                        title="Photo"
                        borderRadius="8px"
                        width="48px"
                        height="48px"
                    />
                    <Stack sx={{ overflow: 'hidden', whiteSpace: 'nowrap', width: '100%' }}>
                        <S.TitleTypography variant="title16">{title}</S.TitleTypography>
                        <Typography variant="title12" color="text.text8">
                            {subTitle}
                        </Typography>
                    </Stack>
                </Stack>
            }
            contentChildren={contentChildren}
        />
    );
};
