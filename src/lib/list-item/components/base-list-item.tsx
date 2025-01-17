import { ListItemProps as MUIListItemProps, Stack } from '@mui/material';
import { FC } from 'react';
import * as S from '../style';
import { Checkbox, ICheckboxProps } from '../../checkbox';
import { Typography } from '../../typogrpahy';

interface IListItemProps extends MUIListItemProps {
    title: string;
    subTitle?: string;
    checkboxProps?: Omit<ICheckboxProps, 'label'>; // if undefined - no checkbox
}

export const BaseListItem: FC<IListItemProps> = ({ title, subTitle, checkboxProps, ...props }) => {
    return (
        <S.ListItem
            sx={{
                alignItems: subTitle ? 'flex-start' : 'center',
            }}
            {...props}
        >
            <Stack direction="row">
                {checkboxProps ? (
                    <Checkbox
                        formControlLabelProps={{
                            sx: {
                                padding: 0,
                                height: '24px',
                                mr: 0,
                            },
                        }}
                        {...checkboxProps}
                    />
                ) : null}
                <Stack>
                    <Typography variant="body1" color="text.text4">
                        {title}
                    </Typography>
                    {subTitle && (
                        <Typography
                            variant="caption12"
                            sx={{
                                color: 'text.text8',
                            }}
                        >
                            {subTitle}
                        </Typography>
                    )}
                </Stack>
            </Stack>
        </S.ListItem>
    );
};
