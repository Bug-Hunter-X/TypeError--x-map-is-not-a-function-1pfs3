function foo(x){
  if (x === null || x === undefined || x.length === 0){
    return [];
  }
  return x.map(item => item * 2);
}

console.log(foo([1,2,3])); // Output: [2,4,6]
console.log(foo(null)); // Output: []
console.log(foo(undefined)); // Output: []
console.log(foo([])); // Output: []
console.log(foo({})); // Output: TypeError: x.map is not a function