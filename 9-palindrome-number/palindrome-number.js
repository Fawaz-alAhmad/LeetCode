/**
 * @param {number} x
 * @return {boolean}
 */

function reverseNumber(n){
    // if (n<10){
    //     return n
    // }
    // return n%10 + reverseNumber(Math.floor(n/10))

    const arr = n.toString().split('').reverse()
    return parseInt(arr.join(''))
}

const isPalindrome = function(x) {
    return x  === reverseNumber(x)
};