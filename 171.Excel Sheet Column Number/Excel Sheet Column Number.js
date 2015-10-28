/*
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var num = 0;
    for(var i=s.length-1;i>=0;i--)
    {
	num += Math.pow(26,s.length-i-1)*(s.charCodeAt(i)-64);
    }	
    return num;
};