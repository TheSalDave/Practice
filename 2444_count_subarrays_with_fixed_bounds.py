class Solution:
    def countSubarrays(self, nums: List[int], mink: int, maxK: int) -> int:

        last_invalid, small, big, out = -1, -1, -1, 0

        for i, num in enumerate(nums):
            if not mink <= num <= maxK:
                last_invalid = i

            if num == mink:
                small = i

            if num == maxK:
                big = i

            out += max(0, min(small, big) - last_invalid)

        return out