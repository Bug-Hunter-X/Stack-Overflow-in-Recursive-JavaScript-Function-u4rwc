# Stack Overflow Bug in JavaScript

This repository demonstrates a common error in recursive JavaScript functions: stack overflow. The `foo` function recursively calls itself without a proper base case, leading to excessive function calls that exceed the call stack limit.

## Bug Description
The `foo` function intends to perform a conditional check. However, the logic is flawed; the base case is never reached when calling `foo(3,0)`, as the condition `a == 1` will only be met if the initial value of `a` is 1, or the condition `b == 2` is met, but this condition is never satisfied either.  This causes infinite recursion.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js`.
3. Run the code in a JavaScript environment (e.g., Node.js, browser console).
4. Observe the stack overflow error.

## Solution
The solution involves adding a proper base case that will stop the recursion and prevent the stack overflow.  This can be achieved by adding a check to see if the recursion depth exceeds a certain threshold or by changing the logic to stop based on a variable.