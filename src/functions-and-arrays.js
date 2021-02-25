// exercise 1

function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// function maxOfTwoNumbers(num1, num2) {
//     return Math.max(num1, num2)
// }

// exercise 2

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
    let wordItem = '';

    if (words.length === 0) {
        return null;
    }

    for(let i = 0; i < words.length; i ++) {
        if (words[i].length > wordItem.length) {
            wordItem = words[i];
        } 
    }

    return wordItem;
}

// exercise 3

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sumAllNumbers = 0;

    for(let i = 0; i < numbers.length; i++) {
        sumAllNumbers += numbers[i];
    }

    return sumAllNumbers;
}

// exercise 3 BONUS!!!

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sum(array) {

    let sumMixedArr = 0;

    for(let i = 0; i < array.length; i++) {

        if (typeof array[i] === 'number') {
            sumMixedArr += array[i];
        } else if (array[i] === true) {
            sumMixedArr += 1;
        } else if (array[i] === false) {
            sumMixedArr += 0;
        } else if (typeof array[i] === 'string') {
            sumMixedArr += array[i].length;
        } else if (typeof array[i] === 'object') {
            throw Error("Unsupported data type sir or ma'am");
        }
    }

    return sumMixedArr;
}

// exercise 4

function averageNumbers(array) {

    let totalNumbers = 0;

    for(let i = 0; i < array.length; i++) {

        totalNumbers += array[i];

    }

    if (totalNumbers / array.length) {

        return (totalNumbers / array.length);

    } else return null
}

//exercise 4 level 2

function averageWordLength(array) {
    let totalLengths = 0;

    for (let i = 0; i < array.length; i++) {
        totalLengths += array[i].length
    }

    if (totalLengths / array.length) {
        return (totalLengths / array.length)
    } else return null
}

//exercise 4 BONUS

// const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function avg(arr) {
    let legnthOfAnything = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) legnthOfAnything += 1;
        else if (arr[i] === false) legnthOfAnything +=0;
        else if (typeof arr[i] === 'string') legnthOfAnything += arr[i].length;
        else if (typeof arr[i] === 'number') legnthOfAnything += arr[i];
    }

    if (legnthOfAnything / arr.length) {
        arrayAverage = legnthOfAnything / arr.length;
        return parseFloat(arrayAverage.toFixed(2));
    } else return null

}