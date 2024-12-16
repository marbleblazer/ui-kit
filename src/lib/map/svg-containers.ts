import { Palette } from '@mui/material';
import {
    mapMarkerFirstEndLayerSvgString,
    mapMarkerFirstStartLayerSvgString,
    mapMarkerSecondEndLayerSvgString,
    mapMarkerSecondStartLayerSvgString,
} from './mp-marker-string';

export const mapMarkerStartSvgContainer = (theme: Palette) => `<div class="svg-container">
                                            ${mapMarkerFirstStartLayerSvgString(theme)}
                                            ${mapMarkerSecondStartLayerSvgString(theme)}
                                        </div>`;

export const mapMarkerEndSvgContainer = (theme: Palette) => `<div class="svg-container">
                                            ${mapMarkerFirstEndLayerSvgString(theme)}
                                            ${mapMarkerSecondEndLayerSvgString(theme)}
                                        </div>`;
