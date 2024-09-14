function Fibanacci(n) {
  if (n < 2) return n;

  return Fibanacci(n - 1) + Fibanacci(n - 2);
}

console.log(Fibanacci(7));

// Big O - O(2^n)
