function calculateCircleArea(radius) {
  return Math.PI * radius * radius;
}

function generateFibonacci(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

// Display results
let radius = 5;
let area = calculateCircleArea(radius);
document.getElementById("circle-area").innerHTML = `<p>Area of circle with radius ${radius}: ${area.toFixed(2)}</p>`;

let fib = generateFibonacci(16);
document.getElementById("fibonacci-sequence").innerHTML = `<p>Fibonacci sequence (first 16 terms): ${fib.join(", ")}</p>`;