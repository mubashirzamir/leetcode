/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    const originalColor = image[sr][sc]
    let visited = Array.from({ length: image.length }, () => Array.from({ length: image[0].length }, () => false));

    const fill = (image, sr, sc, targetColor, originalColor) => {
        visited[sr][sc] = true
        image[sr][sc] = targetColor

        // down
        if (sr + 1 < image.length && !visited[sr + 1][sc] && image[sr + 1][sc] === originalColor) {
            fill(image, sr + 1, sc, targetColor, originalColor)
        }

        // up
        if (sr - 1 > -1 && !visited[sr - 1][sc] && image[sr - 1][sc] === originalColor) {
            fill(image, sr - 1, sc, targetColor, originalColor)
        }

        // right
        if (sc + 1 < image[0].length && !visited[sr][sc + 1] && image[sr][sc + 1] === originalColor) {
            fill(image, sr, sc + 1, targetColor, originalColor)
        }

        // left
        if (sc - 1 >= 0 && !visited[sr][sc - 1] && image[sr][sc - 1] === originalColor) {
            fill(image, sr, sc - 1, targetColor, originalColor)
        }

        return
    }

    fill(image, sr, sc, color, originalColor)
    return image
};   
