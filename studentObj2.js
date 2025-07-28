function findSecondHighestStudents(students) {
    if (!Array.isArray(students) || students.length < 2) {
        console.log("Need at least two students to find the second highest.");
        return [];
    }

    const uniqueMarks = [...new Set(students.map(s => s.marks))].sort((a, b) => b - a);

    if (uniqueMarks.length < 2) {
        console.log("All students have the same marks.");
        return [];
    }

    const secondHighest = uniqueMarks[1];

    const secondRankers = students.filter(s => s.marks === secondHighest);

    return secondRankers;
}


const students = [
    { name: "Alice", marks: 92 },
    { name: "Bob", marks: 87 },
    { name: "Charlie", marks: 92 },
    { name: "David", marks: 85 },
    { name: "Eve", marks: 87 }
];

const secondHighest = findSecondHighestStudents(students);

console.log("🎖️ Second Highest Scoring Student(s):");
secondHighest.forEach(s => console.log(`${s.name} - ${s.marks} marks`));
