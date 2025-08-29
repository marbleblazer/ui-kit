// Хаверсин (метры)
export const haversine = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371000;
    const toRad = (x: number) => (x * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;

    return 2 * R * Math.asin(Math.sqrt(a));
};

// Проекция точки на сегмент
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

    if (segLen2 === 0) return { t: 0, lon: x1, lat: y1 };

    let t = (pxm * dx + pym * dy) / segLen2;
    t = Math.max(0, Math.min(1, t));

    return { t, lon: x1 + (x2 - x1) * t, lat: y1 + (y2 - y1) * t };
};

// ETA до waypoint
export const remainingToWaypoint = (
    deviceLon: number,
    deviceLat: number,
    polyline: [number, number][],
    cumDist: number[],
    cumTime: number[],
    waypointIndex: number,
    offRouteThreshold = 50,
) => {
    let best: { dist: number; segIdx: number; t: number } | null = null;

    for (let i = 0; i < polyline.length - 1; i++) {
        const [lon1, lat1] = polyline[i];
        const [lon2, lat2] = polyline[i + 1];
        const proj = projectPointOnSegment([deviceLon, deviceLat], [lon1, lat1], [lon2, lat2]);

        const d = haversine(deviceLat, deviceLon, proj.lat, proj.lon);

        if (!best || d < best.dist) {
            best = { dist: d, segIdx: i, t: proj.t };
        }
    }

    if (!best) return { onRoute: false };

    if (best.dist > offRouteThreshold) {
        return { onRoute: false, distanceToRoute: best.dist };
    }

    const { segIdx, t } = best;
    const distAtProj = cumDist[segIdx] + (cumDist[segIdx + 1] - cumDist[segIdx]) * t;
    const timeAtProj = cumTime[segIdx] + (cumTime[segIdx + 1] - cumTime[segIdx]) * t;

    const remainingDist = cumDist[waypointIndex] - distAtProj;
    const remainingTime = cumTime[waypointIndex] - timeAtProj;

    return {
        onRoute: true,
        remainingDistanceM: Math.max(0, remainingDist),
        remainingTimeS: Math.max(0, remainingTime),
    };
};
