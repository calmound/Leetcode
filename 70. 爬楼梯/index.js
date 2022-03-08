/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    // const res = []
    // const rec = function(n) {
    //     if(res[n]) return res[n]
    //     if(n === 1) return 1
    //     if(n === 2) return 2;
    //     res[n] = rec(n - 1) + rec(n - 2)
    //     return res[n]
    // }
    // return rec(n)


    const res = []
    res[1] = 1
    res[2] = 2
    for(let i =3;i <= n;i++) {
        res[i] = res[i-1] + res[i-2]
    }
    return res[n]
};