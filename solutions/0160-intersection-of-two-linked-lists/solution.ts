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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let set = new Set<ListNode>()

    while (headA !== null) {
        set.add(headA)
        headA = headA.next
    }    

    while (headB !== null) {
        if (set.has(headB)) return headB
        headB = headB.next
    }

    return null
};
