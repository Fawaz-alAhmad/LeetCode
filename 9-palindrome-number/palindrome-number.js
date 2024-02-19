/**
 * @param {number} x
 * @return {boolean}
 */

function countDigits(n) {
    if (n < 10) {
        return 1;
    } else {
        return 1 + countDigits(Math.floor(n / 10));
    }
}


function reverseNumber(n) {
    if (n < 10) {
        return n
    }
    let exp = countDigits(n) - 1;
    return (n % 10) * 10 ** exp + reverseNumber(Math.floor(n / 10))
}

const isPalindrome = function (x) {
    if (x < 0) return false;
    return x === reverseNumber(x)
};