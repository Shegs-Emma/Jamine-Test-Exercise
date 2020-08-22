describe('Testing the case in replaceWith()', function(){
    it('the argumeents in lowercase must match', function(){
        expect(replaceWith('awesome', 'e', 'z')).toMatch('awzsomz');
    });
    it('the arguments in uppercase must match', function(){
        expect(replaceWith("Foo", "F", "B")).toMatch('Boo');
    });
});


describe('Ensuring the expand returns the right amount of arrays', function(){
    it('should return triple the array', function(){
        expect(expand([1,2,3],3)).toEqual([1,2,3,1,2,3,1,2,3]);
    });
    it('should return a single array', function(){
        expect(expand(["foo", "test"], 1)).toEqual(["foo", "test"]);
    });
});



describe('The acceptNumbersOnly() returns true if all the arguments are numbers', function(){
    it('should return false if all items in the arguments are not numbers', function(){
        expect(acceptNumbersOnly(1, "foo")).toBe(false);
    });
    it('should return true if all items in the argument are numbers', function(){
        expect(acceptNumbersOnly(1,2,3,4,5,5,6)).toBe(true);
    })
})


describe('The mergeArrays() should take in arrays and return a combination of the arrays that is sorted correctly', function(){
    it('should return a sorted merged array', function(){
        expect(mergeArrays([2,1], [4,3])).toEqual([1,2,3,4]);
    });
});


describe('The mergeObjects() should return an object consisting of the objects passed to it as arguments', function(){
    it('should returned a combined object', function(){
        
    var obj1= {
        name: "Foo",
        num: 33
    }
    var obj2 = {
        test: "thing",
        num: 55
    }

        expect(mergeObjects(obj1, obj2)).toEqual({name: "Foo", num: 55, test: "thing"});
    });
});