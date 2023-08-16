//CheckPoint Task
//Test if a word is a palindrome.A word is a palindrome if only if it can be read from left to right or from right to left: gag; kayak; php; radar;....

//Please refer to the README file. It contains detailed step by step application proceedure.

//PALINDROME
//Practical Implementation

function isPalindrome(word) {
  let left = 0;
  let right = word.length - 1;

  while (left <= right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

//You can now use the isPalindrome function to check if a word is a palindrome:

console.log(isPalindrome("gag")); // Output: true
console.log(isPalindrome("kayak")); // Output: true
console.log(isPalindrome("php")); // Output: true
console.log(isPalindrome("radar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("world")); // Output: false

//This function uses two pointers (left and right) to compare characters from both ends of the word. It stops when it finds a mismatch or when the left pointer becomes greater than the right pointer, indicating that the word is a palindrome