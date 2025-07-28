function getTotalScore(students) {
    if (!Array.isArray(students)) {
        console.log("Invalid input: Expected an array of student objects.");
        return 0;
    }

    return students.reduce((sum, student) => {
        const score = typeof student.score === 'number' ? student.score : 0;
        return sum + score;
    }, 0);
}

const studentArray = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 },
    { name: "David" }
];

const total = getTotalScore(studentArray);
console.log("Total Score:", total);
