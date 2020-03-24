// Code your solution here!

function printString(string) {

    console.log(string[0]);

    if(string.length > 1){
        let mySubString = string.substring(1, string.length);
        printString(mySubString);
    }else{
        return true;
    }
}

function reverseString(string){
    // let array = string.split("");
    // let reverseArray = array.reverse();
    // let reverseString = reverseArray.join("");
    // return reverseString;

    if(string === ''){
        return '';
    }else{
        return reverseString(string.substring(1)) + string.charAt(0);
    }
}

function isPalindrome(string){
    if ( string.length === 1){
        return true;
    }else if (string.charAt(0) === string.charAt(string.length-1)) {
        return (isPalindrome(string.substring(1, string.length-1)));
    }else{
        return false;
    }
}

function addUpTo(array, index){
    if (index === 0){
        return array[0];
    }else{
        return array[index] + addUpTo(array, index-1);
    }
}

function maxOf(array){
    if (array.length===1){
        return array[0]
    }else{
        return Math.max(array[0], maxOf(array.slice(1)));
    }
}

function includesNumber(array, num){
    if (array.length <= 0){
        return false;
    } 

    if (num === array[0]){
        return true;
    }
    return includesNumber(array.slice(1), num);
    
}