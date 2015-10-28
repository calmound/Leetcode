/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root == null) return root;
    var myRoot = null;
    myRoot = DFS(root,myRoot);
    return myRoot;
};

function DFS(root,myRoot){
   if(root != null) {
      myRoot = new TreeNode(root.val);
   }
   if(root.left != null) myRoot.right = DFS(root.left,myRoot.right);
   if(root.right != null) myRoot.left = DFS(root.right,myRoot.left);
   return myRoot;
}