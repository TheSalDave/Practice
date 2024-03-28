class Solution:
    def maxSubarrayLength(self, nums: List[int], k: int) -> int:
        out, left, right, n = 0, 0, 0, len(nums)
        counts = {}


        while right < n:
            if nums[right] not in counts:
                counts[nums[right]] = 1
            else:
                counts[nums[right]] += 1

            while counts[nums[right]] > k:
                counts[nums[left]] -= 1
                left += 1
                
            out = max(out, right - left + 1)

            right += 1

        return out
