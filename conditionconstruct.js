function checkAge(age) {
    if (age >= 18) {
        console.log('you are eligible to vote');
    } else {
        console.log('you are not eligible to vote');
    }
}

checkAge(17);


function checkNumber(num) {
    if (num >= 0) {
        console.log('Number is positive')
    }
    else if (num < 0) {
        console.log('Number is negative');
    }
    else {
        console.log('zero number found');
    }
}

checkNumber(23);


// nested if else
function findGrade(marks) {
    let grade;
    if (marks >= 90) {
        grade = 'A';
    }
    else {
        if (marks <= 80) {
            grade = 'B'
        }
        if (marks <= 70) {
            grade = 'C'
        }
    }
    return grade;
}
console.log(findGrade(55));

let browserName = 'chrome';

if (browserName === 'chrome') {
    console.log('launched chrome browser');
}
else if (browserName === 'firefox') {
    console.log('launched firefox browse');
}
else {
    console.log('invalid input');
}