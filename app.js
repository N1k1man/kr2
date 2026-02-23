var pointsTest = Number(prompt("Введи количество баллов за тест (50)"));
console.log('Ваши баллы');

if (Number.isNaN(pointsTest) || pointsTest < 0 || pointsTest > 50) {
  console.log("Ошибка ввода баллов за тест");
} else {
  var pointsHw = Number(prompt("Введи количество баллов за дз (30)"));
  if (Number.isNaN(pointsHw) || pointsHw < 0 || pointsHw > 30) {
    console.log("Ошибка ввода баллов за дз");
  } else {
    var pointsAtt = Number(prompt("Введи количество баллов за посещаемость (20)"));
    if (Number.isNaN(pointsAtt) || pointsAtt < 0 || pointsAtt > 20) {
      console.log("Ошибка ввода баллов за посещаемость");
    } else {
      var sum = pointsTest + pointsHw + pointsAtt;
      if (sum > 100) {
        console.log("Ошибка: общий балл не может быть больше 100");
      } else {
        console.log("Итоговый балл:", sum);
        if (sum >= 90) {
          console.log("Оценка: Отлично");
        } else if (sum >= 75) {
          console.log("Оценка: Хорошо");
        } else if (sum >= 60) {
          console.log("Оценка: Удовлетворительно");
        } else {
          console.log("Оценка: Неудовлетворительно");
        }
      }
    }
  }
}

console.log('-----------------------------------------------------------------');


//////////////////////////////////////////////////////////////

var numbers = [5, 12, 8, 130, 44, 2, 9];
var counter = 0;
var maxNum = numbers[0];
var minNum = numbers[0];
var numGreaterTen = 0;

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  counter += number;

  if (number > 10) {
    numGreaterTen++;
    console.log("Число > 10:", number);
  }

  if (number > maxNum) {
    maxNum = number;
  }

  if (number < minNum) {
    minNum = number;
  }
}

console.log("Сумма всех чисел:", counter);
console.log("Максимальное число массива:", maxNum);
console.log("Минимальное число массива:", minNum);
console.log("Количество чисел > 10:", numGreaterTen);