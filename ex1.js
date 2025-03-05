console.log("Victoria Tate's Output from Example 1");

const squares = [
    {side:2},
    {side:2},
    {side:2}
];

const squareResults = [];
for (const square of squares) {
    const perimeter = square.side * 4;
    const area = square.side ** 2;
    const diagonal = Math.sqrt(2) * square.side

    squareResults.push({
        description: `Square with side ${square.side} has perimeter of ${perimeter}, area of ${area}, and diagonal of ${diagonal.toFixed(3)}.`
      });
}
console.log(squareResults);