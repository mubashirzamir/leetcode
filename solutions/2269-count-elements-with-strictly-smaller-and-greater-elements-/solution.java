class Solution {
    public int countElements(int[] nums) {
        int result = 0;
        for(int i = 0; i < nums.length; i++) {
            boolean smaller_flag = false;
            boolean greater_flag = false;
            for(int j = 0; j < nums.length; j++) {
                if(smaller_flag & greater_flag) break;
                else if(i != j && nums[i] > nums[j]) smaller_flag = true;
                else if(i != j && nums[i] < nums[j]) greater_flag = true;
            }
            if(smaller_flag & greater_flag) result++;
        }
        return result;
    }
}
