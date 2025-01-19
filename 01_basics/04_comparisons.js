// console.log(2 > 1);//results come in boolean
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1); // != stands for not equal

//console.log("2" > 1); // this does not always give predictable results, so do not compare different datatypes as a rule

console.log(null > 0);//false
console.log(null == 0);//false //thiis is a equality check
console.log(null >= 0);//true (comparison converts null to a number, thus, null>=0 is true and null>0 is false)

// equality check in JavaScript is a 
// comparison between two values to determine whether they are equal. JavaScript provides two main ways to perform equality checks:

//
// Loose Equality (`==`)
// - Compares two values for equality **after performing type coercion** (if necessary).
// - If the values are of different types, JavaScript attempts to convert one or both values to a common type before making the comparison.

// #### Example:
// ```javascript
// console.log(5 == "5"); // true, because "5" (string) is coerced to 5 (number).
// console.log(0 == false); // true, because false is coerced to 0.
// console.log(null == undefined); // true, as they are considered loosely equal.
// ```

// ### 2. **Strict Equality (`===`)**
// - Compares two values for equality **without type coercion**.
// - The values must be of the same type and have the same value to be considered equal.

// #### Example:
// ```javascript
// console.log(5 === "5"); // false, because the types are different (number vs. string).
// console.log(0 === false); // false, because the types are different (number vs. boolean).
// console.log(null === undefined); // false, because the types are different.
// console.log(5 === 5); // true, because both the type and value match.
// ```

// ### Key Differences Between `==` and `===`:
// | Feature            | Loose Equality (`==`)                 | Strict Equality (`===`)                |
// |--------------------|---------------------------------------|----------------------------------------|
// | **Type Coercion**   | Yes, values are converted if needed. | No, values must have the same type.    |
// | **Comparison Speed**| Slower due to coercion.              | Faster, as no conversion is involved. |
// | **Usage**           | May lead to unexpected results.      | Safer and more predictable.           |

// ### Best Practice:
// Always prefer **strict equality (`===`)** to avoid unexpected behavior caused by type coercion unless you specifically need loose equality for a particular use case.