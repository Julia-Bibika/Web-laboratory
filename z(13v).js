/*Створити функцію, яка для 4 чисел знаходить добуток;*/
//2. анонімні функції
var Product = function (firstNumber, secondNumber,thirdNumber,fourNumber) {
    let result = firstNumber * secondNumber * thirdNumber * fourNumber;
    return result;
}
alert(Product(3, 5,4,1));