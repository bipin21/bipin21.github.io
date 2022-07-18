/**
 * @author BIPIN
 */

function myFunctionTest(expected, result) {
    var response;
    if (Array.isArray(expected)) {
        response = JSON.stringify(expected) === JSON.stringify(result);
    } else {
        response = expected === result;
    }
    return response ? "TEST SUCCEEDED" : "TEST FAILED." + " Expected " + expected + " found " + result;
}

// check sum using reduce
function sum(arr) {
    return arr.reduce(function (sum, elem) {
        return sum + elem;
    })
}

// check reverse using map
function reverse([...str]) {
    return str.map((elem, i, arr) => arr[arr.length - 1 - i]).join("");
}


// filterLongWords using filter
function filterLongWords(words, number) {
    return words.filter(function (elem) {
        return elem.length > number;
    })
}

console.log("Expected output of sum([1,2,3,4]) is 10 : " + myFunctionTest(10, sum([1, 2, 3, 4])));
console.log("Expected output of reverse('jag testar') is 'ratset gaj' : " + myFunctionTest("ratset gaj", reverse("jag testar")));
console.log("Expected output of filterLongWords(['ram','bipinkarki','krishna'], 6) is ['bipinkarki','krishna'] : " + myFunctionTest(['bipinkarki', 'krishna'], filterLongWords(['ram', 'bipinkarki', 'krishna'], 6)));
