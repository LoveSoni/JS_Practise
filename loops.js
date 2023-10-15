const students = ['love', 'ash', 'peter'];
console.log(students);

for (let index = 0; index < students.length; index++) {
    console.log(students[index]);

}

console.log("*******************")

students.forEach(student => {
    console.log(student);
});

console.log("*******************")

for (const i of students) {
    console.log(i);

}

console.log("*******************")

for (const key in students) {
    console.log(students[key]);
}

console.log("*******************")
let i = 0;
while (i <= 2) {
    console.log(students[i]);
    i++;
}

console.log("*******************")
let j = 0;
do {
    console.log(students[j])
    j++;
} while (j <= 2);

let number = 1;
while (number <= 100) {
    console.log(number);
    if (number % 5 == 0) {
        console.log('hii'); break;
    }
    number++;
}


const employee = {
    name: 'love',
    age: 23
}

for (const key in employee) {
    console.log(key + ":" + employee[key]);
}