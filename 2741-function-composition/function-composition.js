/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = function (functions) {
    if (functions.length === 0) {
        return function (x) {
            return x;
        };
    }
    return functions.reduceRight(function (composed, fn) {
        return function (x) {
            return fn(composed(x))
        }
    })
}

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */