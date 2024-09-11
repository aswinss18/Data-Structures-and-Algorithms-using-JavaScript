function isPrimeNumber(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrimeNumber(5));
// Big -O -O(n)

// More Optimal Solution

//Logic - "If a number is composite,you will find a number which is less than its square root"

function isPrimeNumber(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrimeNumber(5));
// Big -O -O(sqrt(n))
