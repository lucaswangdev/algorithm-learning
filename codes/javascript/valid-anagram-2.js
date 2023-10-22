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
