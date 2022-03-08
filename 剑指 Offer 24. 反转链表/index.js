/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let cur = head
    let prev = null // 前驱指针
    while(cur) {
        const next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    return prev
};