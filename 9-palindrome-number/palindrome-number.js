/**
 * @param {number} x
 * @return {boolean}
 */

function reverseNumber(n) {
    if (n < 10) {
        return n
    }
    let exp = n.toString().length - 1
    return (n % 10) * 10 ** exp + reverseNumber(Math.floor(n / 10))
}

const isPalindrome = function (x) {
    if (x < 0) return false;
    return x === reverseNumber(x)
};