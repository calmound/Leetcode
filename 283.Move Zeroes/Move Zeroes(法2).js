/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var k =0;
    for(var i = 0;i< nums.length;i++){
        if(nums[i]!=0){
            nums[k] = nums[i];
            k++;
        }
    }
    for(;k<nums.length;k++) nums[k] = 0;
};