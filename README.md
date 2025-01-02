# TypeError: x.map is not a function

This repository contains a JavaScript code example that demonstrates a common error: `TypeError: x.map is not a function`. This error occurs when you attempt to use the `map` method on a value that is not an array.

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides a corrected version.

## Bug Description

The original code attempts to use the `map` method on a non-array value, resulting in the `TypeError`. The solution involves checking the type of the input before applying the `map` method to prevent this error.

## How to Reproduce

1. Clone the repository.
2. Run `node bug.js` to see the error.
3. Run `node bugSolution.js` to see the corrected output.

## Solution

The solution involves checking if the input is an array before applying the `map` method. This ensures that the `map` method is only called on array-like objects.