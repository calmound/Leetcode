/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    // 默认为第一个串，然后遍历每个字符串的公共的串
    if(strs.length === 1) return strs[0]
    const first = strs[0]
    let maxStr = strs[0];

    for(let i = 1;i<strs.length;i++) {
        const str = strs[i]
        let res = ''
        let j = 0
        while(j < first.length && j < str.length) {
            if(first[j] !== str[j]) {
                break;
            }
            res += str[j]
            j++
        }
        console.log(maxStr)
        maxStr = maxStr.length > res.length ? res : maxStr
    }
    return maxStr
};