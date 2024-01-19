// Удвоение элементов массива:
// 1.Условие: Создайте массив чисел и используйте метод map, чтобы удвоить каждый элемент.
// Преобразование строк в верхний регистр:
const arr = [3,5,7,9,11];
const doubledArr = arr.map(number => number * 2);
console.log("Оригинальный массив: " + arr);
console.log("Новый массив: " + doubledArr);

// Условие: Создайте массив строк и используйте метод map, 
//чтобы преобразовать все строки в верхний регистр.
// Вычисление суммы элементов:
const stringArr = ["Hello, how are you?", "JavaScript is powerful."];
const uppercaseStringArr = stringArr.map(str =>str.toUpperCase());
console.log(stringArr);
console.log(uppercaseStringArr);

// Вычисление суммы элементов:
// Условие: Создайте массив чисел и используйте метод forEach, чтобы вычислить сумму всех элементов.
const myArr =[12,13,1,4,45,65];
let sum =0;
myArr.forEach(elem => sum +=elem);
console.log(sum);

// Удаление отрицательных чисел:
// Условие: Создайте массив чисел и используйте метод filter, 
//чтобы удалить все отрицательные числа.

const array = [12,-13,1,-4,-45,65];
console.log(array.filter(x => x > 0));
//const res = array.filter(x => x > 0);
//console.log(res);


//----------------------------------------------------//
//дополнительно:



// Map (Преобразование элементов массива):
// Создайте массив чисел и используйте map, чтобы умножить каждый элемент на 2.
const exampl =[1,2,3,4,5,6,35,-60]
const result = exampl.map(x => x * 2 );
console.log(result);


// Создайте массив строк и используйте map, чтобы добавить в конец каждой строки восклицательный знак.
const st = [ 'jfjh','fjvm','JavaScript','cbc','JavaScript'];
console.log(st.map(x => x + '!'));

// Filter (Отбор элементов массива):
// Создайте массив чисел и используйте filter, чтобы получить только четные числа.
console.log(exampl.filter(x => x % 2 === 0));

// Создайте массив строк и используйте filter, чтобы получить только строки, содержащие слово "JavaScript".
const words = ["JavaScript", "Python", "Java"];
const jsLanguages = words.filter(word => word.includes("JavaScript"));
console.log(jsLanguages);

// ForEach (Итерация по массиву):
// Создайте массив чисел и используйте forEach, чтобы вывести каждый элемент в консоль.
const array_2 = [12,-13,1,-4,-45,65];
console.log(array_2.join(' '));
array_2.forEach(number => console.log(number));

// const array_2 = [12, -13, 1, -4, -45, 65];
// let result = '';
// array_2.forEach(number => result += number + ' ');
// console.log(result.trim()); // trim() используется для удаления возможного пробела в конце строки

// Создайте массив строк и используйте forEach, чтобы создать новый массив, содержащий длины каждой строки.
// Исходный массив строк
const words_1 = ["JavaScript", "Python", "Java"];

// Новый массив для хранения длин строк
const lengthsArray = [];

// forEach для обхода массива и добавления длин каждой строки в новый массив
words_1.forEach(word => lengthsArray.push(word.length));

// Выводим новый массив в консоль
console.log(lengthsArray)