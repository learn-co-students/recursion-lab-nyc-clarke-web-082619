// Code your solution here!
function printString(s) {
    console.log(s.charAt(0));
    if (s.length > 1) {
        printString(s.substring(1)); 
    }
    else {
        return true;
    }
}
 
function reverseString(s) {
    if (s !== "") {
       return reverseString(s.substring(1)) + s.charAt(0);
    }
    return "";
}

function isPalindrome(s) {
    if (s === "" || s.length === 1) {
        return true;
    }
    else if (s.charAt(0) === s.charAt(s.length-1)) {
        return isPalindrome(s.substring(1, s.length-1));
    }
    else {
        return false;
    }
}

function addUpTo(numbers, index) {
    if (index === 0) {
        return numbers[0];
    }
    return numbers[index] + addUpTo(numbers, index -1);
}

function maxOf(numbers) {
    return numbers.length === 1 ? numbers[0] : Math.max(numbers[0], maxOf(numbers.slice(1)));
}

function includesNumber(numbers, num) {
    if (numbers.length <= 0) {
        return false;
    }
    if (num === numbers[0]) {
        return true;
    }
    return includesNumber(numbers.slice(1),num);
}