class Solution {
    public String longestCommonPrefix(String[] strs) {
        int n = strs.length;
        String s = strs[0];
        
        if(n == 1) return s;
        if(s.equals("")) return "";
    
        int count = 0;
        int min = Integer.MAX_VALUE;
        
        for(int i = 1; i < n; i++) {
            
            if(strs[i].equals("")) return "";
            
            else if(strs[i].charAt(0) != s.charAt(0)) {
                return "";
            }
            
            else if(strs[i].equals(s)) {
                count = s.length();
            }
            
            else {
                for(int j = 1; j <= Math.min(strs[i].length(), s.length()); j++) {

                    if(strs[i].substring(0, j).equals(s.substring(0, j)) && j <= min) {
                        count = j;
                    }

                    else {
                        break;
                    }
                
                }
            }  
            if(count < min) min = count;
        }
        
        return s.substring(0, min);
    }
}
