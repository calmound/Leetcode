/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var ans = 0;
    while(num>=10)
    {
        while(num)
        {
            ans += num%10;
            num = Math.floor(num/10);
        }
        num = ans;
        ans = 0;
    }
    return num;
};