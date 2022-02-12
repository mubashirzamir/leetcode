import java.util.Stack;

class Solution {
    public boolean isValid(String s) {
        int n = s.length();
        if(n == 0) return true;
        if(s.charAt(0) == '}' || s.charAt(0) == ']' || s.charAt(0) == ')') return false;
        
        char[] array = s.toCharArray();
        Stack<Character> stack = new Stack<Character>();
        
        for(char c: array) {
            if(c == '{' || c == '[' || c == '(') stack.push(c);
            
            else if(!stack.isEmpty()) {
                if(stack.peek() == '{' && c == '}') stack.pop();
                else if(stack.peek() == '[' && c == ']') stack.pop();
                else if(stack.peek() == '(' && c == ')') stack.pop();
                else return false;
            }
            
            else return false;
        }
        
        if(stack.isEmpty()) return true;
        else return false;
    }
    
    
}
