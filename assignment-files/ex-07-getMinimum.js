/**
 * getMinimum()
 * ------------------------------------------------------
 * Write a function called `getMinimum()` that takes 4 numbers as arguments
 * and returns the one with the lowest value.
 *
 **/

// ++ YOUR Code below (write the 'makeGreeting' function): ++

function getMinimum (a, b, c, d) {
	if (a<=b && a<=c && a<=d) {
		return a;
	} else if (b<=a && b<=c && b<=d) {
	 		return b;
	 	} else if (c<=a && c<=b && c<=d) {
	 				return c;
	 			} else {
	 				return d;
	 			}

	}



// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


/*-------------------TEST-1-------------------------*/
// function receives 4 number inputs
//    and returns the minimum value
/*--------------------------------------------------*/
console.log("==== ex-07-getMinimum : TEST 1 ====");


console.assert( getMinimum(1,2,4,0) === 0 )
console.assert( getMinimum(1,2,4,0) !== 1 )

console.assert( getMinimum(4,8,4,20) === 4 )

console.assert( getMinimum(300,-2,-99,0) === -99 )

console.assert( getMinimum(-5,-11,4,-5) === -11 )
