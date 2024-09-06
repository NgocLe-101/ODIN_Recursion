function fibs(n) {
  if (n - 1 < 0) {
    return [];
  }
  if (n - 1 === 0) {
    return [0];
  }
  if (n - 1 === 1) {
    return [0, 1];
  }
  let fibsSeq = [0, 1];
  for (let i = 2; i < n; i++) {
    fibsSeq.push(fibsSeq[i - 1] + fibsSeq[i - 2]);
  }
  return fibsSeq;
}

function fibsRec(n) {
  if (n - 1 < 0) {
    return [];
  }
  if (n - 1 === 0) {
    return [0];
  }
  if (n - 1 === 1) {
    return [0, 1];
  }
  const resultFib = fibsRec(n - 1);
  resultFib.push(resultFib[n - 2] + resultFib[n - 3]);
  return resultFib;
}
document.querySelector(".fib-result").textContent = fibsRec(10);
