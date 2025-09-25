import { MenuItem, SelectChangeEvent, Stack } from '@mui/material';

import * as S from './style';
import { FC } from 'react';
import { LANGUAGE_ICONS } from './constances';

export interface ILanguageSelectorProps {
    currentLanguage: string;
    languages: Record<string, string>;
    onChangeLanguage: (lang: string) => void;
}

export const LanguageSelector: FC<ILanguageSelectorProps> = ({ currentLanguage, languages, onChangeLanguage }) => {
    const handleChange = (e: SelectChangeEvent<unknown>) => {
        const lang = e.target.value as string;
        onChangeLanguage(lang);
    };

    return (
        <S.Selector>
            <S.Select
                value={currentLanguage}
                startAdornment={<S.TranslateIcon />}
                MenuProps={{
                    PaperProps: { sx: { borderRadius: '8px' } },
                    MenuListProps: {
                        sx: { padding: 0, color: 'text.textInput80', '.MuiMenuItem-root': { minHeight: '36px' } },
                    },
                }}
                onChange={handleChange}
            >
                {Object.entries(languages).map(([value, label]) => (
                    <MenuItem key={value} value={value}>
                        <Stack direction="row" alignItems="center" gap={1}>
                            <div>{value in LANGUAGE_ICONS ? LANGUAGE_ICONS[value] : null}</div>
                            {label}
                        </Stack>
                    </MenuItem>
                ))}
            </S.Select>
        </S.Selector>
    );
};
