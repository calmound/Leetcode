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
    if(root == null) return true;
    return DFS(root) != -1;
};

function DFS(root){
   if(root == null) return 0;
   var left = DFS(root.left);
   var right = DFS(root.right);
   if(left==-1 || right==-1 || Math.abs(left-right)>1) {//-1表示存在不平衡的情况
       return -1;
   }
   return Math.max(left,right) + 1;
}