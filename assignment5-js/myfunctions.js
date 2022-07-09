function myFunctionTest(expected, result) {
    var response;
    if (Array.isArray(expected)) {
        response = JSON.stringify(expected) === JSON.stringify(result);
    } else {
        response = expected === result;
    }
    return response ? "TEST SUCCEEDED" : "TEST FAILED." + " Expected " + expected + " found " + result;
}

// check max
function max(x, y) {
    return x > y ? x : y;
}

console.log("Expected output of max(20,10) is 10 : " + myFunctionTest(10, max(20, 10)));

// check maxOfThree
function maxOfThree(x, y, z) {
    return max(max(x, y), z);
}


// check isVowel
function isVowel(x) {
    x = x.toLowerCase();
    return x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u';
}

// check sum
function sum(arr) {
    let sum = 0;
    let len = arr.length;
    if (len > 0) {
        for (let i = 0; i < len; i++) {
            sum += arr[i];
        }
    }
    return sum;
}

// check multiply
function multiply(arr) {
    var multiple = 1;
    let len = arr.length;
    if (len > 0) {
        for (let i = 0; i < len; i++) {
            multiple *= arr[i];
        }
    }
    return multiple;
}

// check reverse
function reverse(str) {
    var reverseStr = "";
    for (let i = str.length; i > 0; i--) {
        reverseStr += str[i - 1];
    }
    return reverseStr;
}

// check findLongestWord
function findLongestWord(words) {
    var ln = 0;
    for (let i = 0; i < words.length; i++) {
        ln = words[i].length > ln ? words[i].length : ln;
    }
    return ln;
}

// filterLongWords
function filterLongWords(words, number) {
    var result = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > number) {
            result.push(words[i]);
        }
    }
    return result.toString();
}

// const a = [1,3,5,3,3];
// const b = a.map(function(elem, i, array) {
//     return elem * 10;
// })
// console.log(b);
// const c = a.filter(function(elem, i, array){
//     return elem === 3;});
// console.log(c);
// const d = a.reduce(function(prevValue, elem, i, array){
//     return prevValue * elem;
// });
// console.log(d);

// multiply each element by 10;
function multiplyEachElementBy10(a) {
    return a.map(function (elem, i, array) {
        return elem * 10;
    });
}

// return array with all elements equal to 3;
function getArrayWithOnlyNumber3(a) {
    return a.filter(function (elem, i, array) {
        return elem === 3;
    });
}

// return the product of all elements;
function getProductOfArray(a) {
    return a.reduce(function (prevValue, elem, i, array) {
        return prevValue * elem;
    });
}

console.log("Expected output of maxOfThree(20, 10, 30) is 30 : " + myFunctionTest(30, maxOfThree(20, 10, 30)));
console.log("Expected output of maxOfThree(5,4,44) is 44 : " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55 : " + myFunctionTest(55, maxOfThree(55, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 4 : " + myFunctionTest(4, maxOfThree(55, 4, 44)));
console.log("Expected output of isVowel(E) is true : " + myFunctionTest(true, isVowel('E')));
console.log("Expected output of isVowel(m) is true : " + myFunctionTest(true, isVowel('m')));
console.log("Expected output of sum([1,2,3,4]) is 10 : " + myFunctionTest(10, sum([1, 2, 3, 4])));
console.log("Expected output of multiply([1,2,3,4]) is 24 : " + myFunctionTest(24, multiply([1, 2, 3, 4])));
console.log("Expected output of reverse('jag testar') is 'ratset gaj' : " + myFunctionTest("ratset gaj", reverse("jag testar")));
console.log("Expected output of findLongestWord(['ram','hari','krishna']) is 7 : " + myFunctionTest(7, findLongestWord(['ram', 'hari', 'krishna'])));
console.log("Expected output of filterLongWords(['ram','bipinkarki','krishna'], 6) is ['bipinkarki','krishna'] : " + myFunctionTest('bipinkarki,krishna', filterLongWords(['ram', 'bipinkarki', 'krishna'], 6)));
console.log("Expected output of multiplyEachElementBy10([1,3,5,3,3]) is [10,30,50,30,30] : " + myFunctionTest([10, 30, 50, 30, 30], multiplyEachElementBy10([1, 3, 5, 3, 3])));
console.log("Expected output of getArrayWithOnlyNumber3([1,3,5,3,3]) is [3,3,3] : " + myFunctionTest([3, 3, 3], getArrayWithOnlyNumber3([1, 3, 5, 3, 3])));
console.log("Expected output of getProductOfArray([1,3,5,3,3]) is 135 : " + myFunctionTest(135, getProductOfArray([1, 3, 5, 3, 3])));