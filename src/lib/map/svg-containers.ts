import {
    mapMarkerFirstEndLayerSvgString,
    mapMarkerFirstStartLayerSvgString,
    mapMarkerSecondEndLayerSvgString,
    mapMarkerSecondStartLayerSvgString,
} from './mp-marker-string';

export const mapMarkerStartSvgContainer = `<div class="svg-container">
                                            ${mapMarkerFirstStartLayerSvgString}
                                            ${mapMarkerSecondStartLayerSvgString}
                                        </div>`;

export const mapMarkerEndSvgContainer = `<div class="svg-container">
                                            ${mapMarkerFirstEndLayerSvgString}
                                            ${mapMarkerSecondEndLayerSvgString}
                                        </div>`;
