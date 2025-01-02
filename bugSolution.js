function foo(x){
  if (Array.isArray(x) && x.length > 0){
    return x.map(item => item * 2);
  } else {
    return [];
  }
}

console.log(foo([1,2,3])); // Output: [2,4,6]
console.log(foo(null)); // Output: []
console.log(foo(undefined)); // Output: []
console.log(foo([])); // Output: []
console.log(foo({})); // Output: []