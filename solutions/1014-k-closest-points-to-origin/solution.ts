function kClosest(points: number[][], k: number): number[][] {
    const withDistances = points.map(a => [a[0], a[1], Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2))])

    return withDistances.sort((a, b) => a[2] - b[2]).map(x => [x[0], x[1]]).slice(0, k)
};
