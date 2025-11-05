function kClosest(points: number[][], k: number): number[][] {
    const withDistances = points.map(([x, y]) => {
        return [x, y, Math.sqrt(Math.pow((x - 0), 2) + Math.pow((y - 0), 2))]
    })

    return withDistances.sort((a, b) => a[2] - b[2]).map(item => [item[0], item[1]]).slice(0, k)
};
