/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {

    return function (n: number): number {
        let lo = 1, hi = n

        while (lo <= hi) {
            const mid = Math.floor((lo + hi) / 2)

            if (isBadVersion(mid)) {
                if (mid - 1 <= 0 || !isBadVersion(mid - 1)) return mid
                hi = mid - 1
            } else lo = mid + 1
        }
    };
};
