class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode result = new ListNode();
        ListNode p = l1;
        ListNode q = l2;
        ListNode curr = result;
        int carry = 0;
        
        while(p != null || q!= null) {
            int x, y;
            if(p != null)
                x = p.val;
            else
                x = 0;
            if(q != null)
                y = q.val;
            else
                y = 0;
            
            int sum = carry + x + y;
            carry = sum / 10;
            curr.next = new ListNode(sum % 10);
            curr = curr.next;
            
            if(p != null) p = p.next;
            if(q != null) q = q.next;
        }
        
        if(carry > 0) curr.next = new ListNode(carry);
        
        return result.next;
        
    }
}
