function foo(a, b) {  if (a <= 0) { // Base case: a becomes 0 or less
    return false; // Return false if the base case is reached
  } else if (b >= 2) { // Base case: b reaches 2 or more
    return true; // Return true if the base case is reached
  } else {    return foo(a - 1, b + 1);  } } console.log(foo(3, 0)); // Should now work correctly without a stack overflow