from logging import StringTemplateStyle
import re

def solution(s):
  piece = ''
  for x in range(1, len(s), 1):
    if s[x] == s[0]:
      piece = s[0:x]
      allPieces = re.findall(piece, s)
      if ''.join(allPieces) == s:
        return len(allPieces)
  return 0



solution('abcabcabcabc')
solution('abccbaabccba')