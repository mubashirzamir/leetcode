class Solution {
    public int removeElement(int[] nums, int val) {
        int n = nums.length;
        if(n == 0) return 0;
        
        int res = 0;
        for(int i = 0; i < n; i++) {
            if(nums[i] != val) {
                nums[res] = nums[i]; 
                res++;
            }
        }
        
        return res;
    }
}
