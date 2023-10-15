'use strict';

// 0 is sunday
function checkDayOfWeek(number) {
    let day;
    switch (number) {
        case 0:
            day = 'sunday';
            break;
        case 1:
            day = 'monday';
            break;
        case 2:
            day = 'tuesday';
            break;
        case 3:
            day = 'wednesday';
            break;
        case 4:
            day = 'thursday';
            break;
        case 5:
            day = 'friday';
            break;
        case 6:
            day = 'saturday';
            break;
        default:
            console.log('invalid entry');
    }
    return day;
}

console.log(checkDayOfWeek(1));