# 3. 无重复字符的最长子串

[题目链接](https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/)

给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:
输入: s = "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

示例 2:
输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

示例 3:
输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

## 题解

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0; // Store the length of the longest substring
  let start = 0; // Starting index of the current substring
  let charMap = new Map(); // Map to store the index of each character

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (charMap.has(char) && charMap.get(char) >= start) {
      // If the character is already present in the current substring
      // Update the start to the next position after the repeated character
      start = charMap.get(char) + 1;
    }

    // Update the index of the character in the map
    charMap.set(char, i);

    // Update the maximum length if the current substring is longer
    maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength;
};

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
```

函数 lengthOfLongestSubstring(s) 的实现思路是使用滑动窗口的方法来找到最长的没有重复字符的子串。
下面是具体的实现思路：
- 定义一个变量 maxLength 来保存最长子串的长度。
- 定义一个变量 start 来表示当前子串的起始索引。
- 使用 Map 数据结构来存储字符和对应的索引。
- 遍历字符串 s：
- 对于每个字符 char，检查它是否已经存在于当前子串中，并且它的索引大于等于 start。
- 如果是，则说明遇到了重复字符，更新 start 到重复字符的下一个位置。
- 更新 char 在 Map 中的索引为当前索引。
- 更新 maxLength，如果当前子串比之前的子串更长，则更新为当前子串的长度（i - start + 1）。
- 返回 maxLength。
- 实现中使用了 Map 数据结构来存储字符和对应的索引，因为 Map 允许我们快速查找和更新每个字符的索引。通过维护子串的起始索引和字符的索引信息，我们可以确定是否存在重复字符，并在遇到重复字符时更新子串的起始索引。
- 通过使用滑动窗口的方法，我们只需遍历一次字符串 s，并在遇到重复字符时更新子串的起始索引，从而在线性时间复杂度内解决了问题。