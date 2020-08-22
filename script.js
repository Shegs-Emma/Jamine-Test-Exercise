// 1. Write a function called replaceWith that takes in a string, a character to replace and a character to replace it with 
// and returns the string with the replacements. Write tests to make sure this is case sensitive

function replaceWith(str, char1, char2){
    let strItems = str.split('');
    
    strItems.map((strItem, index, arr) => {
        if(strItem === char1){
            arr.splice(index, 1, char2);
        }
        return arr;
    });

    return strItems.join("");
};


// 2. Write a function called expand which takes an array and a number and returns a copy of the array with as many numbers as specified

function expand(arr, num){
    let newArr = [];
    for(i = 0; i < num; i++){
        newArr.push(arr.slice());
    }
    return [].concat(...newArr);
};


// 3. Write a function called acceptNumbersOnly which takes in any number of arguments and returns true if all of them are numbers. 
// Watch out for NaN - it is a typeof "number"!

function acceptNumbersOnly(){
    let myArr = [];
    for(i = 0; i < arguments.length; i++){
        myArr.push(arguments[i]);
    };
    
    var allAreNumbers = myArr.every((arg) => {
        return typeof arg === "number";
    });
    return allAreNumbers;
}

// 4. Write a function called mergeArrays which takes in two arrays and returns one array with the values sorted
function mergeArrays(arr1, arr2){
    var combinedArr = arr1.concat(arr2);
    return combinedArr.sort();
};

// 5.  Write a function called mergeObjects which takes in two objects and return an object with the keys and values combined. 
// If the second parameter has the same key - it should override first one. There is a built in function 
// called Object.assign - research it, but do not use it, try to do this on your own!

function mergeObjects(obj1, obj2){
    let newObj = {};
    for(item in obj1){
        newObj[item] = obj1[item];
    }
    for(item in obj2){
        newObj[item] = obj2[item];
    }
    return newObj;
};