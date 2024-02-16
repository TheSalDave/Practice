class Solution:
    def largestPerimeter(self, nums: List[int]) -> int:
        nums.sort(reverse = True)

        numsum = sum(nums)

        for num in nums:
            if numsum > 2*num:
                return numsum
            else:
                numsum -= num

        return -1
