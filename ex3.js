console.log("Victoria Tate's Output from Example 3");

//Declare studentList Array
const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];
// TO DO - Write higher order functions / There are many solutions


//Declare cLastNameResults.  Use functional programming (filter, map, reduce, and pure functions) to generate a new array of objects (don’t use a traditional loop)
const cLastNameResults = studentList
    .filter(student => student.lastName.startsWith('C'))
    .map(student => {
        const minMaxAvg = student.scores.reduce(
            (acc, score) => {
                if (score < acc.min) acc.min = score;
                if (score > acc.max) acc.max = score;
                acc.total += score;
                return acc;
            },
            { min: student.scores[0], max: student.scores[0], total: 0 }
        );
        minMaxAvg.avg = minMaxAvg.total / student.scores.length;

        return {
            firstName: student.firstName,
            lastName: student.lastName,
            minScore: minMaxAvg.min,
            maxScore: minMaxAvg.max,
            avgScore: minMaxAvg.avg.toFixed(2)
        };
    });

//Output
console.log(cLastNameResults);

