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

function middleNode(head: ListNode | null): ListNode | null {
    // Two pointers
    // First pointer increments by 2
    // Second pointer increments by 1
    // When first pointer reaches end, return second pointer
    let p = head
    let q = head
    
    while (p !== undefined) {
        p = p?.next?.next
        if (p === undefined) break
        q = q?.next
    }

    return q
};
