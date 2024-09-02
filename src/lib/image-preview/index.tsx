import { ChangeEvent, FC } from 'react';
import * as S from './style';
import { CloseIcon, TrashIcon } from '@chirp/ui/assets/icons';
import { Typography } from '@mui/material';

export interface IImagePreviewProps {
    onLoad?: (file: File) => void;
    previewUrl?: string;
    withBorder?: boolean;
    onDelete?: () => void;
}

export const ImagePreview: FC<IImagePreviewProps> = ({ previewUrl, withBorder, onDelete, onLoad }) => {
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

    return (
        <S.ImageWrapper borderRadius={8} border={withBorder ? 6 : 0}>
            {previewUrl && previewUrl?.length > 0 ? (
                <S.Image src={previewUrl} />
            ) : (
                onLoad && (
                    <S.EmptyFallbackWrapper>
                        <S.UploadInput type="file" onChange={handleUploadImage} accept="image/*" />
                        <CloseIcon />
                        {/* TODO: change source to ui-kit typography after 2092 merge */}
                        <Typography variant="body2">Add an image</Typography>
                    </S.EmptyFallbackWrapper>
                )
            )}
            {onDelete && (
                <S.DeleteBtn variant="secondary" onClick={onDelete} size="small">
                    <TrashIcon />
                </S.DeleteBtn>
            )}
        </S.ImageWrapper>
    );
};
