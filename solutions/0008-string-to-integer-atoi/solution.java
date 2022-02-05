class Solution {
    public int myAtoi(String s) {
        int sign = 1;
        
        String t = s.trim();
        String u;
        
        if(t.length() == 0) return 0;
        else if(t.charAt(0) == '+') {
            sign = 1;
            u = t.substring(1);
        }    
        else if(t.charAt(0) == '-') {
            sign = -1;
            u = t.substring(1);
        }    
        else if(!Character.isDigit(t.charAt(0))) {
            return 0;
        }  
        else u = t;
        
        int result = 0;
        int i = 0;
        int n = u.length();
        
        while(i < n && Character.isDigit(u.charAt(i))) {
            int pop = Character.getNumericValue(u.charAt(i));

            if(sign == 1) {
                if(result == Integer.MAX_VALUE/10 && pop > 7) {
                    return Integer.MAX_VALUE;
                }
                
                else if(result > Integer.MAX_VALUE/10) {
                    return Integer.MAX_VALUE;
                }
            }

            if(sign == -1) {
                if(-1*result == Integer.MIN_VALUE/10 && pop > 8) {
                    return Integer.MIN_VALUE;
                }
                
                else if(-1*result < Integer.MIN_VALUE/10) {
                    return Integer.MIN_VALUE;
                }
            }

            result = result * 10;
            result = result + pop;
            i++;
        }  
        
        return (sign*result);
        

    }
}
