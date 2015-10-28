﻿/**
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
    return DFS(root,p,q);
};


function DFS(root,p,q){
   if(p.val == root.val || q.val == root.val) return root;
   if((p.val < root.val && q.val > root.val) || (p.val > root.val && q.val < root.val)) return root;
   if(p.val < root.val && q.val < root.val) return DFS(root.left,p,q);
   if(p.val > root.val && q.val > root.val) return DFS(root.right,p,q);
}


