import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class Solution {
  /**
   * 
   * @param nums
   * @return
   *         Time Complexity: O(n^2), n is the length of nums
   *         Space Complexity: O(1)
   */
  public boolean containsDuplicateLinear(int[] nums) {
    for (int i = 0; i < nums.length; ++i) {
      for (int j = 0; j < i; ++j) {
        if (nums[j] == nums[i])
          return true;
      }
    }
    return false;
  }

  /**
   *
   * @param nums
   * @return
   *         Time Complexity: O(nlogn), n is the length of nums
   *         Space Complexity: O(1)
   */
  public boolean containsDuplicateSorting(int[] nums) {
    Arrays.sort(nums);
    for (int i = 0; i < nums.length - 1; ++i) {
      if (nums[i] == nums[i + 1])
        return true;
    }
    return false;
  }

  /**
   *
   * @param nums
   * @return
   *         Time Complexity: O(n), n is the length of nums
   *         Space Complexity: O(n)
   */
  public boolean containsDuplicateHashTable(int[] nums) {
    Set<Integer> set = new HashSet<>(nums.length);
    for (int x : nums) {
      if (set.contains(x))
        return true;
      set.add(x);
    }
    return false;
  }
}
