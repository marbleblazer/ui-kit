import { SxProps } from '@mui/system/styleFunctionSx';
import * as S from './styles';
import { BaseCard } from '../base-card';
import { Typography } from '../../typogrpahy';
import { Stack } from '@mui/material';
import { ImagePreview } from '../../image-preview';

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
            headerSx={{ ...headerSx, minHeight: '56px' }}
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
                    <Stack>
                        <Typography variant="title16">{title}</Typography>
                        <S.SubtitleTypography variant="title12" sx={{ color: 'text.text8' }}>
                            {subTitle}
                        </S.SubtitleTypography>
                    </Stack>
                </Stack>
            }
            contentChildren={contentChildren}
        />
    );
};
