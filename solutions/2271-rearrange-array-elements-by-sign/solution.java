class Solution {
    public int[] rearrangeArray(int[] nums) {
        ArrayList<Integer> positive = new ArrayList<>();
        ArrayList<Integer> negative = new ArrayList<>();
        
        for(int i = 0; i < nums.length; i++) {
            if(nums[i] >= 0) positive.add(nums[i]);
            else negative.add(nums[i]);
        }
        
        boolean helper = true;
        int j = 0;
        int k = 0;
        for(int i = 0; i < nums.length; i++) {
            if(helper) {
                helper = !helper;
                nums[i] = positive.get(j++);
            }    
            else {
                helper = !helper;
                nums[i] = negative.get(k++);
            }
        }
        
        return nums;
    }
}
