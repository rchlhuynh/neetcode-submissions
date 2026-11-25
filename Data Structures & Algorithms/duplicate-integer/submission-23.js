class Solution {
    hasDuplicate(nums) {
        for (let i = 0; i < nums.length; i++) {
            const firstIndex = nums.indexOf(nums[i]);
        const lastIndex = nums.lastIndexOf(nums[i]);

        if (firstIndex !== lastIndex) {
            return true
        }
        } return false
    }
}

