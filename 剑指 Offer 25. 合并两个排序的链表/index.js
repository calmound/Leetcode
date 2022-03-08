/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    if(l1 === null) return l2
    if(l2 === null) return l1

    let p = null
    if(l1.val < l2.val) {
        p = l1
        l1 = l1.next
    }else {
        p = l2
        l2 = l2.next
    }
    const head = p
    while(l1 || l2) {
        if(l1 === null) {
            p.next = l2;
            break;
        }

        if(l2 === null) {
            p.next = l1;
            break;
        }

        if(l1.val < l2.val) {
            p.next = l1
            l1 = l1.next
        }else {
            p.next = l2
            l2 = l2.next
        }
        p = p.next
    }
    return head
};