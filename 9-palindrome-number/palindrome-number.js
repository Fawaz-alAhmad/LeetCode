/**
 * @param {number} x
 * @return {boolean}
 */

function reverseNumber(num, reversed = 0) {
    if (num === 0) return reversed;
    const lastDigit = num % 10;
    reversed = (reversed * 10) + lastDigit;
    return reverseNumber(Math.floor(num / 10), reversed);
}
const isPalindrome = function (x) {
    if (x < 0) return false;
    return x === reverseNumber(x)
};