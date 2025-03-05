console.log("Victoria Tate's Output from Example 4");

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

for (let student of studentList) {
    for (let i = 0; i < student.scores.length; i++) {
        student.scores[i] += 5;
    }
}

for (let student of studentList) {
    const averageScore = student.scores.reduce((total, score) => total + score, 0) / student.scores.length;
    student.scores.push(averageScore);
}

for (let student of studentList) {
    console.log(`Student: ${student.firstName} ${student.lastName}`);
    console.log(`Updated scores: ${student.scores}`);
}
