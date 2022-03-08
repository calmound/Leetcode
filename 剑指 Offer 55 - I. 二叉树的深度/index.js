/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
    if(root === null) return 0
    const stack = [{node:root, step:1}]
    let step = 1
    let max = 1

    while(stack.length){
        const p = stack.pop()
        const {node, step} = p
        if(node.left) {
            stack.push({
                node: node.left,
                step:step+1
            })
        }
        if(node.right) {
            stack.push({
                node: node.right,
                step: step + 1 
            })
        }
        max = Math.max(step, max)
    }
    return max
};