public class Solution {

  /**
   * 
   * @param nums
   * @param target
   * @return
   *         Time Complexity: O(n^2), n is the length of nums
   *         Space Complexity: O(1)
   */
  public int[] twoSumBruteForce(int[] nums, int target) {
    for (int i = 0; i < nums.length; i++) {
      for (int j = i + 1; j < nums.length; j++) {
        if (nums[j] == target - nums[i]) {
          return new int[] { i, j };
        }
      }
    }
    return new int[] {};
  }

  /**
   * 
   * @param nums
   * @param target
   * @return
   *         Time Complexity: O(n), n is the length of nums
   *         Space Complexity: O(n)
   */
  public int[] twoSumHashTable(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
      int y = target - nums[i]; // x + y = target
      if (map.containsKey(y)) {
        return new int[] { map.get(y), i };
      }
      map.put(nums[i], i);
    }
    return new int[] {};
  }

}
