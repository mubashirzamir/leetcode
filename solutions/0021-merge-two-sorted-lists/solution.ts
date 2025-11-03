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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 === null) return list2
    if (list2 === null) return list1
    if (list1 === null && list2 === null) return null

    let result = new ListNode()
    let curr1 = list1, curr2 = list2, currResult = result

    while (curr1 !== null || curr2 !== null) {
        let val = null

        if (curr1 === null) {
            val = curr2.val
            curr2 = curr2.next
        } else if (curr2 === null) {
            val = curr1.val
            curr1 = curr1.next
        } else if (curr1.val <= curr2.val) {
            val = curr1.val
            curr1 = curr1.next
        } else if (curr1.val > curr2.val) {
            val = curr2.val
            curr2 = curr2.next
        }

        currResult.next = new ListNode(val)
        currResult = currResult.next
    }

    return result.next
};
