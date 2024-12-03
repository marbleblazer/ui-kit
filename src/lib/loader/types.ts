import { Theme } from '@mui/material';

export type TLoaderSize = 'small' | 'large';

export interface IElementConfig {
    width: string;
    height: string;
    translate: string;
}

export interface ISpanConfig {
    width: string;
    height: string;
}

export interface ISizeConfig {
    element: IElementConfig;
    span: ISpanConfig;
}
export interface ILoaderElementProps {
    theme?: Theme;
    index: number;
    size: TLoaderSize;
}

export interface ILoaderSpanProps {
    size: TLoaderSize;
}
