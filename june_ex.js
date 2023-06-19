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
