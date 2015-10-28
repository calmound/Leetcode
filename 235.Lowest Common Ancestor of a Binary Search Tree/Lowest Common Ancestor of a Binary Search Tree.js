/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root == null) return null;
    var nodes = [];
    var node;
    DFS(root,p,nodes);
    var i ;
    for(i = path.length-1;i>=0;i--){
       if(DFS2(path[i],q)) break;
    }
    return path[i];
};

path = [];
function DFS(root,p,nodes){
   if(root === p){
      nodes.push(p);
      path = nodes.concat();
   }
   nodes.push(root);
   if(root.left != null)  DFS(root.left,p,nodes);
   if(root.right != null) DFS(root.right,p,nodes);
   nodes.pop();
}

function DFS2(root,q){
    if(root == null) return false;
    else if(root === q) return true;
    return DFS2(root.left,q) || DFS2(root.right,q);
}

