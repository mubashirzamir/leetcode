/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    let current = head, prev = null, next = null

    while (current) {
        next = current.next // store two in next
        current.next = prev // point one to previous
        prev = current // store one in prev
        current = next // point current to two
    }

    return prev
};
