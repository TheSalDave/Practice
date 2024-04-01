class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        out = s.strip().split()

        if not out:
            return 0

        return len(out[-1])