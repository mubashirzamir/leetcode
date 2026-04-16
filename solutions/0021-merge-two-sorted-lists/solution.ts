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
    let merged = new ListNode()
    const headMerged = merged

    // while there are elements in both lists
    while (list1 || list2) {
        merged.next = new ListNode()
        merged = merged.next

        if (!list1) {
            merged.val = list2.val
            list2 = list2.next
        } else if (!list2) {
            merged.val = list1.val
            list1 = list1.next
        } else if (list1.val <= list2.val) {
            merged.val = list1.val
            list1 = list1.next
        } else if (list1.val > list2.val) {
            merged.val = list2.val
            list2 = list2.next
        }


    }

    return headMerged.next
};
