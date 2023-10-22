# 242.有效的字母异位词
[题目链接](https://leetcode.cn/problems/valid-anagram/description/)

给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
示例 1:
输入: s = "anagram", t = "nagaram"
输出: true

示例 2:
输入: s = "rat", t = "car"
输出: false


## 题解
```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let s1 = {};
  let t1 = {};
  for (let i of s.split("")) {
    if (s1[i]) {
      s1[i] += 1;
    } else {
      s1[i] = 1;
    }
  }
  for (let j of t.split("")) {
    if (t1[j]) {
      t1[j] += 1;
    } else {
      t1[j] = 1;
    }
  }
  if (s.length === t.length) {
    for (let m in t1) {
      if (t1[m] !== s1[m]) {
        return false;
      }
    }
  } else {
    return false;
  }

  return true;
};

let flag = isAnagram("anagram", "nagaram")
console.log(flag)
```

## 题解2
```js
function isAnagram(s, t) {
  // Check if the lengths of the two strings are equal
  if (s.length !== t.length) {
    return false;
  }

  // Create arrays to store the count of each character in the strings
  const sCharCount = new Array(26).fill(0);
  const tCharCount = new Array(26).fill(0);

  // Increment the count of each character in string s
  for (let i = 0; i < s.length; i++) {
    sCharCount[s.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  // Increment the count of each character in string t
  for (let i = 0; i < t.length; i++) {
    tCharCount[t.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  // Compare the character counts in both arrays
  for (let i = 0; i < 26; i++) {
    if (sCharCount[i] !== tCharCount[i]) {
      return false;
    }
  }

  return true;
}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car")); // Output: false

```


