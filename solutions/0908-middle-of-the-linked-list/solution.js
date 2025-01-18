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
var middleNode = function (head) {
    let length = 0
    let step = 0
    let firstPointer = head
    let secondPointer = head

    while (firstPointer) {
        length++
        firstPointer = firstPointer.next
    }

    let mid = Math.floor(length / 2)

    while (step < mid) {
        step++
        secondPointer = secondPointer.next
    }

    return secondPointer
};
