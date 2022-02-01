class Solution {
    public String convert(String s, int numRows) {
        
        if(numRows == 1) return s;
        
        int n = s.length();
        
        List<StringBuilder> rows = new ArrayList<StringBuilder>();
        
        for(int i = 0; i < Math.min(numRows, n); i++) {
            rows.add(new StringBuilder());
        }
            
        int curr_row = 0;
        boolean going_down = false;
            
        for(int i = 0; i < n; i++) {
            rows.get(curr_row).append(s.charAt(i));
            
            if(curr_row == 0 || curr_row == numRows-1) {
                going_down = !going_down;
            }
            
            curr_row += going_down ? 1 : -1;
        }
            
        StringBuilder result = new StringBuilder();    
            
        for(int i = 0; i < rows.size(); i++) {
            result.append(rows.get(i));
        }
            
        return result.toString();
            
            
       
    }
}
