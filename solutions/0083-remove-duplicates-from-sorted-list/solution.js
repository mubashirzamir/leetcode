/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head || !head.next) return head

    let left = head
    let right = left.next

    while (right) {
        if (left.val === right.val) {
            left.next = right.next
            right = right.next
        } else {
            left = right
            right = left.next
        }
    }

    return head
};
