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