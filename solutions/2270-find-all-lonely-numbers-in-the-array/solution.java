class Solution {
    public List<Integer> findLonely(int[] nums) {
        Map<Integer, Integer> helper = new HashMap<>();
        List<Integer> result = new ArrayList<>();
        
        for(int i: nums) {
            helper.put(i, helper.getOrDefault(i, 0)+1);
        }
        
        for(int i: helper.keySet()) {
            if(helper.get(i) == 1 && !helper.containsKey(i+1) && !helper.containsKey(i-1))
                result.add(i);
        }
        
        return result;
    }
}
