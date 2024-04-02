class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        lib1 = {}
        lib2 = {}

        if len(s) != len(t):
            return False

        for i in range(len(s)):
            if s[i] in lib1:
                if lib1[s[i]] != t[i]:
                    return False
            elif t[i] in lib2:
                return False
            else:
                lib1[s[i]] = t[i]
                lib2[t[i]] = s[i]

        return True