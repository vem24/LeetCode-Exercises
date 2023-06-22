// Counter Function
var createCounter = function(n) {
    return function() {
        return n++;
    };
};


const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12

/************************************/

// Expect To Be or Not To Be
var expect = function(val) {
    return {
        toBe: (value) => {
            if (val !== value) {
                throw new Error("Not Equal");
            } else {
                return true;
            }
        },
        notToBe: (value) => {
            if (val === value) {
                throw new Error("Equal");
            } else {
                return true;
            }
        }
    }
};


expect(5).toBe(5); // true
expect(5).notToBe(5); // throws "Equal"

/*****************************************/
//Counter II
var createCounter = function(init) {
        let num = init;
    return {
        increment: () => {
            return num+=1;
        },
        decrement: () => {
            return num-=1;
        },
        reset: () => {
            num = init
            return num;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

/**********************************/
/** Element Transformed **/
const map = (arr, fn) => {

    for (let x = 0; x > arr.length; x++) {
        arr[x] = fn(arr[x], x);
    }
    return arr;
}

/**********************************/
/** Filter Elements **/

var filter = function(arr, fn) {
    let arr2 = [];
    for (let x = 0; x < arr.length; x++) {
        if (fn(arr[x], x)) {
            arr2.push(arr[x]);
        }
    }
    return arr2;
};