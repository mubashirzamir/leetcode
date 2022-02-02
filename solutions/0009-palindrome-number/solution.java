class Solution {
    public boolean isPalindrome(int x) {
        if(x < 0) return false;
        
        if((x/10) < 1) return true;
        
        /*int reverse = 0;
        int n = 0;
        
        while(x > 1) {
            reverse += (x%10) + (10^n);
            x /= 10;
        }
        
        if(x == reverse) return true;
        else return false;*/
        
        String s = Integer.toString(x);
        int i = 0;
        int j = s.length() - 1;
        
        while(i < j) {
            if(s.charAt(i) != s.charAt(j))
                return false;
            i++;
            j--;
        }
        
        return true;
    }
}
