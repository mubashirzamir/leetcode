class Solution {
    public int lengthOfLongestSubstring(String s) {

        int length = s.length();

        if (length == 0) return 0;

        if (length == 1) return 1;

        int max = -1;

        for(int i = 0; i < length; i++) {

            boolean flag = true;

            if (max >= length - i)
                return max;

            for(int j = i+1; j < length; j++) {

                String str = s.substring(i, j);

                if (str.indexOf(s.charAt(j)) != -1) {

                    if(str.length() > max) {
                        max = str.length();
                    }

                    flag = false;

                    break;
                }
            }

            if (flag && length - i > max) {
                max = length - i;
            }
        }

        return max;
    }
}
