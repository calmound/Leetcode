/**

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    flag = true;
    if(root == null) return true;
    var left = DFS(root.left);
    var right = DFS(root.right);
      if(Math.abs(left-right)>1) {
       flag = false;
   }
    return flag;
};

flag = true;
function DFS(root){
   if(root == null) return 0;
   var left = DFS(root.left) +1;
   var right = DFS(root.right) +1;
   if(Math.abs(left-right)>1) {
       flag = false;
   }
   return Math.max(left,right);
}