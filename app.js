// Task 1
let count = 0
let tmp = prompt("Хто є президентом України?")
console.log(tmp);

if (tmp == "Зеленський") {count = count + 1;}
//     alert( "Чудово, ви відповіли правильно!" );

// }
// else {
//     alert("Ви відповіли не правильно!");

// }
tmp = prompt("Скільки всього областей в Україні?")
console.log(tmp);

if (tmp == "24") {count = count + 1;}
//     alert( "Чудово, ви відповіли правильно!" );

// }
// else {
//     alert("Ви відповіли не правильно!");
// }

tmp = prompt("Яка національна українська страва?")
console.log(tmp);

if (tmp == "Борщ") {count = count + 1;}
//     alert( "Чудово, ви відповіли правильно!" );

// }
// else {
//     alert("Ви відповіли не правильно!");
// }

tmp = prompt("Якого кольору прапор України?")
console.log(tmp);

if (tmp == "синьо-жовтого") {count = count + 1;}
//     alert( "Чудово, ви відповіли правильно!" );

// }
// else {
//     alert("Ви відповіли не правильно!");
// }
if(count <=2) {
    console.log("Ви відповіли на", count, "запитань з 4 можливих");
    alert("Не задовільно");
}else if ((count >2, count <=3)){
    console.log("Ви відповіли на", count, "запитань з 4 можливих");
    alert("Чудово");
}else if (count == 4) {
    console.log("Ви відповіли на", count, "запитань з 4 можливих");
alert("Прекрасно");}

// Task 2

let month = prompt("Просимо вас ввести число місяця від 1 до 12");
    switch (+month) {
    case 1:
        alert("Cічень");
    break;
    case 2:
        alert("Лютий");
    break;
    case 3:
        alert("Березень");
    break;
    case 4:
        alert("Квітень");
    break;
    case 5:
        alert("Травень");
    break;
    case 6:
        alert("Червень");
    break;
    case 7:
        alert("Липень");
    break;
    case 8:
        alert("Серпень");
    break;
    case 9:
        alert("Вересень");
    break;
    case 10:
        alert("Жовтень");
    break;
    case 11:
        alert("Листопад");
    break;
    case 12:
        alert("Грудень");
    break;
    default:
        alert("Ви не ввели число");
    break;
    }