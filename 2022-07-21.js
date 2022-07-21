// Tribonacci Sequence

function tribonacci(signature, n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return signature.slice(0, 1);
  } else if (n === 2) {
    return signature.slice(0, 2);
  } else {
    for (let i = 3; i < n; i++) {
      signature.push(signature[i - 3] + signature[i - 2] + signature[i - 1]);
    }
  }

  return signature;
}
