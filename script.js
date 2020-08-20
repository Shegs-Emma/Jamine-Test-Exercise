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
}

// ============================================ TEST CODES =================================================================
describe('Testing the case in replaceWith()', function(){
    it('the argumeents in lowercase must match', function(){
        expect(replaceWith('awesome', 'e', 'z')).toMatch('awzsomz');
    });
    it('the arguments in uppercase must match', function(){
        expect(replaceWith("Foo", "F", "B")).toMatch('Boo');
    });
});

// ========================================================================================================================

// 2. Write a function called expand which takes an array and a number and returns a copy of the array with as many numbers as specified

function expand(arr, num){
    let newArr = [];
    for(i = 0; i < num; i++){
        newArr.push(arr.slice());
    }
    return [].concat(...newArr);
};

// ================================================ TEST Code 2 ============================================================
describe('Ensuring the expand returns the right amount of arrays', function(){
    it('should return triple the array', function(){
        expect(expand([1,2,3],3)).toEqual([1,2,3,1,2,3,1,2,3]);
    });
    it('should return a single array', function(){
        expect(expand(["foo", "test"], 1)).toEqual(["foo", "test"]);
    });
});


// =========================================================================================================================



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

// =================================== TEST Code 3 ==================================================================

describe('The acceptNumbersOnly() returns true if all the arguments are numbers', function(){
    it('should return false if all items in the arguments are not numbers', function(){
        expect(acceptNumbersOnly(1, "foo")).toBe(false);
    });
    it('should return true if all items in the argument are numbers', function(){
        expect(acceptNumbersOnly(1,2,3,4,5,5,6)).toBe(true);
    })
})

// ==================================================================================================================


// 4. Write a function called mergeArrays which takes in two arrays and returns one array with the values sorted
function mergeArrays(arr1, arr2){
    var combinedArr = arr1.concat(arr2);
    return combinedArr.sort();
};

// ===================================== Test Code 4 =================================================================
describe('The mergeArrays() should take in arrays and return a combination of the arrays that is sorted correctly', function(){
    it('should return a sorted merged array', function(){
        expect(mergeArrays([2,1], [4,3])).toEqual([1,2,3,4]);
    });
});
// ===================================================================================================================


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

var obj1= {
    name: "Foo",
    num: 33
}
var obj2 = {
    test: "thing",
    num: 55
}

// ===================================================== Test Code 5 ========================================================
describe('The mergeObjects() should return an object consisting of the objects passed to it as arguments', function(){
    it('should returned a combined object', function(){
        expect(mergeObjects(obj1, obj2)).toEqual({name: "Foo", num: 55, test: "thing"});
    });
});
// ==========================================================================================================================