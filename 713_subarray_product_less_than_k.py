class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        if k <= 1:
            return 0
        
        solution_counter, lower, upper, prod, n = 0, 0, 0, 1, len(nums)

        while upper < n:
            prod *= nums[upper]
            while prod >= k:
                prod //= nums[lower]
                lower += 1
            solution_counter += upper - lower + 1
            upper += 1

        return solution_counter