import { ChangeEvent, FC } from 'react';
import * as S from './style';
import { TrashIcon } from '@chirp/ui/assets/icons';
import { Typography } from '../typogrpahy';
import { PhotoUploadIcon } from '@chirp/ui/assets/fleet-icons';
import Stack from '@mui/material/Stack';

export interface IImagePreviewProps {
    previewUrl?: string;
    borderRadius?: number | string;
    title?: string;
    subTitle?: string;
    width?: string;
    height?: string;

    onRemove?: () => void;
    onLoad?: (file: File) => void;
}

const VALID_FILE_FORMATS = ['image/png', 'image/jpeg'];

export const ImagePreview: FC<IImagePreviewProps> = ({
    previewUrl,
    onRemove,
    onLoad,
    title = 'title',
    subTitle = 'subtitle',
    width = '160px',
    height = '150px',
    borderRadius = 2,
}) => {
    const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0] && onLoad) {
            const reader = new FileReader();
            const file = e.target.files[0];
            reader.onloadend = () => {
                onLoad(file);
            };
            reader.readAsDataURL(file);
        }
    };

    const onDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        let files = [...e.dataTransfer.files];
        let file = files[0];

        if (!VALID_FILE_FORMATS.includes(file.type)) {
            return;
        }
        if (file && onLoad) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onLoad(file);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <S.ImageWrapper borderRadius={borderRadius} width={width} height={height} onDrop={onDropHandler}>
            {previewUrl && previewUrl?.length > 0 ? (
                <>
                    <S.Image src={previewUrl} />
                    {onRemove && (
                        <S.DeleteBtn variant="secondary" onClick={onRemove} size="small">
                            <TrashIcon />
                        </S.DeleteBtn>
                    )}
                </>
            ) : (
                onLoad && (
                    <S.EmptyFallbackWrapper>
                        <S.UploadInput type="file" onChange={handleUploadImage} accept="image/png, image/jpeg" />
                        <Stack gap="8px" alignItems="center">
                            <PhotoUploadIcon />
                            <Stack gap="4px" alignItems="center">
                                <Typography
                                    sx={{
                                        color: 'text.text1',
                                    }}
                                    variant="title14"
                                >
                                    {title}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: 'text.text8',
                                    }}
                                    variant="text12"
                                    textAlign="center"
                                >
                                    {subTitle}
                                </Typography>
                            </Stack>
                        </Stack>
                    </S.EmptyFallbackWrapper>
                )
            )}
        </S.ImageWrapper>
    );
};
