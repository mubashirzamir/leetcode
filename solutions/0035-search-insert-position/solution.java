class Solution {
    public int searchInsert(int[] nums, int target) {
        int result = -1;
        
        if(nums[0] > target) return 0;
        
        
        if(nums[nums.length-1] < target) return nums.length;
        
        for(int i = 0; i < nums.length; i++) {
            if(nums[i] >= target) {
                result = i;
                break;
            }
        }
        
        return result;
    }
}
