public class Solution {

  /**
   * 
   * @param s
   * @param t
   * @return
   *         Time Complexity: O(nlogn), n is the length of s
   *         Space Complexity: O(1)
   */
  public boolean isAnagramSorting(String s, String t) {
    if (s.length() != t.length()) {
      return false;
    }
    char[] str1 = s.toCharArray();
    char[] str2 = t.toCharArray();
    Arrays.sort(str1);
    Arrays.sort(str2);
    return Arrays.equals(str1, str2);
  }

  /**
   *
   * @param s
   * @param t
   * @return
   *         Time Complexity: O(n), n is the length of s
   *         Space Complexity: O(1)
   */
  public boolean isAnagramFreqCounter(String s, String t) {
    if (s.length() != t.length()) {
      return false;
    }
    int[] table = new int[26];
    for (int i = 0; i < s.length(); i++) {
      table[s.charAt(i) - 'a']++;
    }
    for (int i = 0; i < t.length(); i++) {
      table[t.charAt(i) - 'a']--;
      if (table[t.charAt(i) - 'a'] < 0) {
        return false;
      }
    }
    return true;
  }
}
