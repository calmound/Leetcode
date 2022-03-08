/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if(x < 0) {
        return false
    }
    let cur = 0
    let y = x
    while(y) {
        cur = cur * 10 + y % 10
        y = Math.floor(y / 10)
    }
    return x == cur
};