class Solution {
        public static int romanToInt(String s) {
        int n = s.length();
        int result = 0;
        
        for(int i = 0; i < n; i++) {
            boolean flag = true;
            switch(s.charAt(i)) {
                case 'I':
                    result = result + 1;
                    break;
                case 'V':
                    if(i > 0) {
                        if(s.charAt(i-1) == 'I') {
                            flag = false;
                            result--;
                            result = result + 4;
                        }
                    }
                    if(flag) result = result + 5; 
                    break;
                case 'X':
                    if(i > 0) {
                        if(s.charAt(i-1) == 'I') {
                            flag = false;
                            result--;
                            result = result + 9;
                        }
                    }
                    if(flag) result = result + 10; 
                    break;    
                case 'L':
                    if(i > 0) {
                        if(s.charAt(i-1) == 'X') {
                            flag = false;
                            result = result - 10;
                            result = result + 40;
                        }
                    }
                    if(flag) result = result + 50; 
                    break;  
                case 'C':
                    if(i > 0) {
                        if(s.charAt(i-1) == 'X') {
                            flag = false;
                            result = result - 10;
                            result = result + 90;
                        }
                    }
                    if(flag) result = result + 100; 
                    break;    
                case 'D':
                    if(i > 0) {
                        if(s.charAt(i-1) == 'C') {
                            flag = false;
                            result = result - 100;
                            result = result + 400;
                        }
                    }
                    if(flag) result = result + 500; 
                    break;
                case 'M':
                    if(i > 0) {
                        if(s.charAt(i-1) == 'C') {
                            flag = false;
                            result = result - 100;
                            result = result + 900;
                        }
                    }
                    if(flag) result = result + 1000; 
                    break;    
            }
        }
        return result;
    }
}
