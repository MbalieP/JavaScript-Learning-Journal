// Student object representing academic details and behavior
const student = {
    firstName: "Zanele",
    lastName: "Mokoena",
    age: 19,
    studentID: "ST10293",
    subjects: [
        { name: "Mathematics", marks: [75, 82, 91] },
        { name: "English", marks: [68, 74, 70] },
        { name: "Computer Science", marks: [90, 85, 95] }
    ],

    // Method to get full name
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },

    // Method to calculate average for a specific subject
    getAverageForSubject: function (subjectName) {
        const subject = this.subjects.find(subj => subj.name === subjectName);
        if (subject) {
            const sum = subject.marks.reduce((total, mark) => total + mark, 0);
            return (sum / subject.marks.length).toFixed(2);
        } else {
            return `Subject ${subjectName} not found.`;
        }
    },

    // Method to add a new subject
    addSubject: function (subjectName, initialMarks = []) {
        this.subjects.push({ name: subjectName, marks: initialMarks });
        console.log(`Subject "${subjectName}" added.`);
    },

    // Method to display report
    printReport: function () {
        console.log(`📘 Report for ${this.getFullName()} (${this.studentID}):`);
        this.subjects.forEach(subj => {
            const avg = this.getAverageForSubject(subj.name);
            console.log(`- ${subj.name}: Avg = ${avg}`);
        });
    }
};

// Usage
console.log(student.getFullName()); // Output: Zanele Mokoena

student.printReport();
/*
📘 Report for Zanele Mokoena (ST10293):
- Mathematics: Avg = 82.67
- English: Avg = 70.67
- Computer Science: Avg = 90.00
*/
// Student object representing academic details and behavior
const student = {
    firstName: "Zanele",
    lastName: "Mokoena",
    age: 19,
    studentID: "ST10293",
    subjects: [
        { name: "Mathematics", marks: [75, 82, 91] },
        { name: "English", marks: [68, 74, 70] },
        { name: "Computer Science", marks: [90, 85, 95] }
    ],

    // Method to get full name
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },

    // Method to calculate average for a specific subject
    getAverageForSubject: function (subjectName) {
        const subject = this.subjects.find(subj => subj.name === subjectName);
        if (subject) {
            const sum = subject.marks.reduce((total, mark) => total + mark, 0);
            return (sum / subject.marks.length).toFixed(2);
        } else {
            return `Subject ${subjectName} not found.`;
        }
    },

    // Method to add a new subject
    addSubject: function (subjectName, initialMarks = []) {
        this.subjects.push({ name: subjectName, marks: initialMarks });
        console.log(`Subject "${subjectName}" added.`);
    },

    // Method to display report
    printReport: function () {
        console.log(`📘 Report for ${this.getFullName()} (${this.studentID}):`);
        this.subjects.forEach(subj => {
            const avg = this.getAverageForSubject(subj.name);
            console.log(`- ${subj.name}: Avg = ${avg}`);
        });
    }
};

// Usage
console.log(student.getFullName()); // Output: Zanele Mokoena

student.printReport();
/*
📘 Report for Zanele Mokoena (ST10293):
- Mathematics: Avg = 82.67
- English: Avg = 70.67
- Computer Science: Avg = 90.00
*/

student.addSubject("Life Orientation", [65, 70, 68]);
student.printReport(); // Now includes Life Orientation


