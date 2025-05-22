import { Palette } from '@mui/material';
import {
    mapMarkerDiffusion,
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

export const specificMarkerIconWithDiffusion = (theme: Palette, specificMarkerIcon: (theme: Palette) => string) =>
    `<div style="position: relative; width: 154px; height: 154px;">
        <div style="position: absolute; top: 0; left: 0;">
            ${mapMarkerDiffusion(theme)}
        </div>
        <div style="position: absolute; top: 60px; left: 60px;">
            ${specificMarkerIcon(theme)}
        </div>
    </div>
    `;
