/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let hi = n
        let lo = 0

        while (lo <= hi) {
            const mid = Math.trunc((lo + hi) / 2)

            if (!isBadVersion(mid) && isBadVersion(mid + 1)) return mid + 1
            if (isBadVersion(mid) && !isBadVersion(mid - 1)) return mid
            else if (!isBadVersion(mid)) lo = mid + 1
            else if (isBadVersion(mid)) hi = mid - 1
        }
    };
};
