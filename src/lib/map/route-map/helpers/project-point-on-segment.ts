export const projectPointOnSegment = (
    [px, py]: [number, number],
    [x1, y1]: [number, number],
    [x2, y2]: [number, number],
) => {
    const refLat = (((py + y1 + y2) / 3) * Math.PI) / 180;
    const dx = (x2 - x1) * Math.cos(refLat) * 111320;
    const dy = (y2 - y1) * 110540;
    const pxm = (px - x1) * Math.cos(refLat) * 111320;
    const pym = (py - y1) * 110540;

    const segLen2 = dx * dx + dy * dy;

    if (segLen2 === 0) return { t: 0 };

    const t = (pxm * dx + pym * dy) / segLen2;

    return { t: Math.max(0, Math.min(1, t)) };
};
