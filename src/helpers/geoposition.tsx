export const convertDDToDMS = (deg: number, lng: boolean): string => {
    let d = parseInt(deg.toString());
    const minfloat = Math.abs((deg - d) * 60);
    let m = Math.floor(minfloat);
    const secfloat = (minfloat - m) * 60;
    let s = Math.round((secfloat + Number.EPSILON) * 100) / 100;
    d = Math.abs(d);

    if (s === 60) {
        m++;
        s = 0;
    }

    if (m === 60) {
        d++;
        m = 0;
    }

    const dms = {
        dir: deg < 0 ? (lng ? 'W' : 'S') : lng ? 'E' : 'N',
        deg: d,
        min: m,
        sec: s,
    };

    return `${dms.deg}\u00B0 ${dms.min}' ${dms.sec}" ${dms.dir}`;
};
