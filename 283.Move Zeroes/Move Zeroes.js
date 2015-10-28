/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for(var i = 0;i< nums.length;i++){
        if(nums[i]==0){
        var j;
           for(j = i+1;j < nums.length;j++){
              if(nums[j] != 0){
                  nums[i] = nums[j];
                  nums[j] = 0 ;
                  break;
              }
           }
           //如果j找到最后都没有非0，表示末尾都是0了
           if(j == nums.length) break;
        }
    }
};