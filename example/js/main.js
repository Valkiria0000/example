
//программа для перевода долларов в рубли
/*
let sum = prompt('Введите сумму перевода в долларах');
const usd = 76.5;
let exchenge = (sum * usd);

alert('Сумма в рублях: ' + exchenge + ' рублей');
*/


//задание 1 Задание 1.

/*Напишите программу, которая работала бы следующим образом: в prompt вводится значение. 
С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, 
затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
Если это число, то вывести в консоль чётное оно или нечётное.
Если передано не число, выведите: «Упс, кажется, вы ошиблись».
*NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.



let a = prompt('Введите значение');
a = +a;
console.log(typeof a);
if (Number.isNaN(a)) {
   console.log('не число');
} else if (a % 2 === 0) {
   console.log('четное число');
} else if (a % 1 === 0) {
   console.log('нечетное число');
} 
else {
   console.log('Упс, кажется вы ошиблись');
 }
*/
//задание 2
/*Дана переменная Х, которая может принимать любое значение. Написать программу, которая в зависимости 
от типа данных Х выводит в консоль сообщение вида: «X — число».Опишите три случая: 
когда х = числу, строке или логическому типу. 
В других случаях выводите сообщение: «Тип x не определён».*/


/*let a = 10>12;
if (Number.isNaN(a)) {
  console.log('не число');
} else if (typeof(a) === 'string') {
    console.log(a + ' - строка');
} else if (typeof(a) === 'number') {
  console.log(a + ' - число');
} else if (typeof(a) === 'boolean') {
  console.log(a + ' - логический тип');
}
else {
    console.log('Тип а не определен');
}

*/

//задание 3 
//Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".
/*
a = prompt('Введите слово или число');
function reverse(a){
    return a.split('').reverse().join('');
}
console.log(reverse(a));
*/
//задание 4 
//Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.
/*function  getRandomRange(min, max) {
   return Math.floor(Math.random() * (max-min));
 }
 
 alert(getRandomRange(0, 100));
*/

//задание 5 
//Дан произвольный массив. Необходимо вывести количество элементов массива, затем 
//перебрать его и вывести в консоль каждый элемент массива.
/*let arr = ['1', '2', '3', '4', '5', '6'];
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}*/


//задание 6
//Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
 //Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. 
 //Проверить, все ли элементы в массиве одинаковые.
/*let arr = [2, 2, 2];
let a = true;
for(let i = 0; i < arr.length; i++) {
  if(arr[i] !== arr[0]) {
    a = false;
  }
}
console.log(a);
*/
//задание 7
//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
//Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
//При выполнении задания необходимо учесть, что массив может содержать не только числа, 
//но и, например, знаки, null и так далее.
/*let arr = [10, 0.5, 9, null, 2, 0.8, 67,undefined, 0, 2, 6 ];
let zerocount = 0;
let numbercount = 0;
let evencount = 0;
let oddcount = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" || !isNaN(arr[i])) {
        numbercount += 1;
        if (arr[i] === 0) {
            zerocount += 1;
        } else if (arr[i] % 2 === 0) {
            evencount += 1;
        } else {
            oddcount += 1;
        }
    }
}
console.log(`В массиве: ${numbercount} цифр, ${zerocount} нулей, ${evencount} чётных, ${oddcount} нечётных!`);
*/

//задание 8 
//Создайте произвольный массив Map. 
//Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
/*let myMap = new Map()
myMap.set('name', 'irina');
myMap.set('age', 32);
myMap.set(25, true);
myMap.forEach((value, key) => {
  console.log(`Ключ - ${key}, значение - ${value}`);
});*/

//Задание 1 из 6 модуля
//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
//Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
//При выполнении задания необходимо учесть, что массив может содержать не только числа, 
//но и, например, знаки, null и так далее.
//На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, 
//вызовите функцию, проанализируйте синтаксис.
/*function numberElements() {
let arr = [10, 0.5, 9, null, 2, 0.8, 67,undefined, 0, 2, 6 ];
let zerocount = 0;
let numbercount = 0;
let evencount = 0;
let oddcount = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" || !isNaN(arr[i])) {
        numbercount += 1;
        if (arr[i] === 0) {
            zerocount += 1;
        } else if (arr[i] % 2 === 0) {
            evencount += 1;
        } else {
            oddcount += 1;
        }
    }
}
console.log(`В массиве: ${numbercount} цифр, ${zerocount} нулей, ${evencount} чётных, ${oddcount} нечётных!`);
}
numberElements();
*/


//Задание 2 из 6 модуля
//Написать функцию, которая принимает на входе любое число (но не больше 1 000), 
//определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000,
//то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
//Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.
/*function primeNumber(num) {
  let natural = 'простое число'
  let composite = 'составное число'
  let invalid = 'данные неверны'
  let one = 'это единица - ни простое, ни составное'
  let zero = 'это ноль'

  if (num === 0) {
    return zero;
  } else if (num > 1000) {
    return invalid;
  } else if (num === 1) {
    return one;
  } 
  for (let i = 2; i <= num / 2; i++) {
    if(num % i === 0) {
      return composite;
    }
  }
  return natural;
}

console.log(primeNumber(523));

*/
//Задание 3.из 6 модуля

//Написать функцию, которая принимает число как аргумент и возвращает функцию, 
//которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
//Выведите в консоль результат.
/*
function summ(a) {
  return function (b) {
    return a + b;
  }
}
console.log(summ(8)(5));*/

//задание 4 из 6 модуля
//Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, 
//начиная от первого и заканчивая вторым. Используйте setInterval.
//Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, 
//начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).
/*
function intervalNumber(a, b) {
  let i = a;
  let timer = setInterval(function() {
  console.log(i);
  if (i === b) {
  clearInterval(timer)
  }
  i++;
  }, 1000);
}
intervalNumber(6, 25);*/

//Задание 5 из 6  модуля
//Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. 
//Иначе говоря, умножает x на себя n раз и возвращает результат.
//Используйте Arrow Function синтаксис.
//Протестируйте функцию на любых значениях и выведите результат в консоль.
/*function pow(x,n) {
  if (n > 1) {
      let newX = x;
      for (let i = 1; i < n; i++) {
        newX *= x;
      }
      return newX;
  } else {
    console.log('неправильные данные');
  }
}
console.log(pow(2, 6));*/

//Напишите программу, которая спрашивает у пользователя его имя и фамилию с помощью prompt 
//и отвечает Привет, {имя} {фамилия}! с помощью alert
/* name = prompt('Введите ваше имя');
lastName = prompt('Введите вашу фамилию');
fullName = name + ' ' + lastName;
alert('Привет, ' + fullName + '!');*/

//Напишите программу, которая переводит температуру по Цельсию в температуру по Фаренгейту. 
//Она должна спросить у пользователя количество градусов по Цельсию с помощью prompt 
//и ответить: "{X} градусов по Цельсию равны {Y} градусам по Фаренгейту."
/*celsius = prompt('Введите количество градусов по Цельсию')
fahrenheit = celsius * 9 / 5 + 32;
alert(celsius + ' градусов по Цельсию равны ' + fahrenheit + ' градусам по Фаренгейту') */

//Напишите программу, которая запрашивает у пользователя три числа: Катет A, Катет B, и Гипотенуза C. 
//Проверяет по теореме Пифагора эти стороны треугольника и пишет в консоль "Это прямоугольный треугольник!"
// или "Это не прямоугольный треугольник!". Используйте if/else для проверки условия.

/*const a = prompt('Введите катет А')
const b = prompt('Введите катет B')
const c = prompt('Введите гипотенузу C')

if (a ** 2 + b ** 2 === c ** 2) {
	alert('Это прямоугольный треугольник!')
} else {
	alert('Это не прямоугольный треугольник!')
} */

//Напишите программу, которая запрашивает у пользователя три числа и выводит максимальное из них,
// используйте if/else/else if. Попытайтесь не использовать &&
/* const a = prompt('Введите A')
const b = prompt('Введите B')
const c = prompt('Введите C')

if (a > b) {
	if (a > c) {
  	alert(a)
  } else {
  	alert(c)
  }
} else if (b > c) {
	alert(b)
} else {
	alert(c)
}*/

//Напишите программу, которая запрашивает у пользователя число N и отвечает "Число {N} четное!" 
//или "Число {N} нечетное!" Например 3 ⇒ Число 3 нечетное!
//P.S. Четные числа делятся на 2 без остатка

/*const n = prompt('Введите N')
if (n % 2 === 0) {
	alert('Число ' + n + ' четное!')
} else {
	alert('Число ' + n + ' нечетное!')
}*/

//Напишите программу, которая выводит в консоль нечетные числа от 0 до 5, 
//потом четные числа от 5 до 10

/*for (let i = 1; i <= 11; i += 2) {
	if (i > 5) {
	  console.log(i - 1);
  } else {
    console.log(i)
  }
}
*/

//Напишите программу, которая много раз запрашивает у пользователя число, пока он не введет 0, 
//потом выводит сумму этих чисел.
/*let sum = 0;
let a;
do {
  a = prompt('Введите число для суммирования. 0 - остановить');
  sum += +a;
} while (a != 0);
alert(sum);*/

//Напишите программу, которая говорит пользователю "Введите 10", пока он не введет 10, 
//потом говорит "Введите 20", потом 40 и т.д. если пользователь вводит другое число, нужно 
//спросить его еще раз, пока не введет нужное. Когда пользователь введет больше 100, напишите "Спасибо!"
// и остановите программу.
/*let neededNumber = 10;
let currentNumber;

do {
  while(currentNumber != neededNumber) {
    currentNumber = prompt('Введите число ' + neededNumber);
  }
  neededNumber *= 2;
} while (currentNumber < 100);
alert('Спасибо!')*/


//Напишите функцию countDown(n), которая получает число {n} в качестве аргумента и печатает
// в консоль обратный отсчет начиная с этого числа. Например countDown(3) напечатает: 3 2 1
/*function countDown(n) {
	for (let i = n; i >= 1; --i) {
  	console.log(i);
  } 
}

countDown(3);*/

//Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.
/*function getPercents(percent, number) {
	return number / 100 * percent;
}

alert( getPercents(30, 200) );*/

//Напишите функцию repeatWord(word, count), которая принимает слово и количество раз для повторения, 
//Например если вызвать repeatWord('слово', 3) функция напечатает "слово1, слово2, слово3, " на одной строке.

/*function repeatWord(word, count) {
	let words = '';
  for (let i = 1; i <= count; ++i) {
  	words += word + i + ', ';
  }
  alert(words);
}

repeatWord('слово', 3)*/

//Напишите функцию createAdder(a), которая возвращает функцию addA, которая принимает b и возвращает a + b.

/*function createAdder(a) {
	return function addA(b) {
  	return a + b;
  }
}

const add5 = createAdder(5);
alert( add5(5) ) // Должно получиться 10
alert( add5(12) ) // Должно получиться 17*/

//Напишите функцию getMonth(n), которая принимает номер месяца и возвращает его название. 
//Например getMonth(12) ⇒ 'декабрь'. Используйте if/else
/*
function getMonth(n) {
	if (n === 1) return 'январь';
	if (n === 2) return 'февраль';
	if (n === 3) return 'март';
	if (n === 4) return 'апрель';
	if (n === 5) return 'май';
	if (n === 6) return 'июнь';
	if (n === 7) return 'июль';
	if (n === 8) return 'август';
	if (n === 9) return 'сентябрь';
	if (n === 10) return 'октябрь';
	if (n === 11) return 'ноябрь';
	if (n === 12) return 'декабрь';
  return 'неизвестно';
}

alert( getMonth(3) )*/


/*Напишите функцию sayHello(name, surname, age, greeting), которая принимает в качестве аргументов имя, фамилию, 
возраст и приветствие. Каждый аргумент должен иметь дефолтное значение, функция должна быть стрелочной и не иметь 
ключевого слова return.
Например, при вызове sayHello('Дима') функция должна вернуть строку "Привет, Дима Иванов, тебе 10 лет",
 а при вызове sayHello('Евгений', 'Петров', 25, 'Здравствуйте, ') функция должна вернуть 
 строку "Здравствуйте, Евгений Петров, тебе 25 лет". А при вызове без аргументов она должна
  вернуть "Привет, Иван Иванов, тебе 10 лет".*/
/*const sayHello = () => 'Привет, Иван Иванов, тебе 10 лет'

alert( sayHello() );
alert( sayHello('Дима') );
alert( sayHello('Евгений', 'Петров', 25, 'Здравствуйте, ') );*/

/*const sayHello = (
	name = 'Иван',
  surname = 'Иванов',
  age = 10,
  greeting = 'Привет, ',
 ) => (
 	greeting + name + ' ' + surname + ', тебе ' + age + ' лет.'
)

alert( sayHello() );
alert( sayHello('Дима') );
alert( sayHello('Евгений', 'Петров', 25, 'Здравствуйте, ') );*/

/*const sayHello = (
	name = 'Иван',
  surname = 'Иванов',
  age = 10,
  greeting = 'Привет, ',
 ) => (
 	greeting + name + ' ' + surname + ', тебе ' + age + ' лет.'
)

alert( sayHello() );
alert( sayHello('Дима') );
alert( sayHello('Евгений', 'Петров', 25, 'Здравствуйте, ') );*/
/*const sayHello = (
	name = 'Иван',
  surname = 'Иванов',
  age = 10,
  greeting = 'Привет, ',
 ) => (
 	`${greeting}${name} ${surname}, тебе ${age} лет.`
);

alert( sayHello() );
alert( sayHello('Дима') );
alert( sayHello('Евгений', 'Петров', 25, 'Здравствуйте, ') );*/

//Напишите функцию match, которая принимает 2 строки и возвращает true, если эти строки равны без учета регистра.
// Например match('hEllO', 'HELLo') должен вернуть true
/*const match = (str1, str2) => {
	return str1.toLowerCase() == str2.toLowerCase();
}

alert( match('hEllO', 'hellO') )*/

//На сайте reddit ссылки на разделы (сабреддиты) формируются следующим образом: https://reddit.com/r/название_раздела/ 
//Напишите функцию, которая принимает ссылку на раздел и возвращает название раздела.
/*const getSubredditName = (link) => {
	const rIndex = link.indexOf('/r/');
  const nameStartIndex = rIndex + 3;
  return link.slice(nameStartIndex, -1);
}

alert( getSubredditName('https://reddit.com/r/dankmemes/') )*/

//Напишите функцию reverseAndNegate(arr), которая принимает массив чисел и возвращает перевернутый отрицательный массив.
//Например [1, -2, 5, 4] ⇒ [-4, -5, 2, -1]
/*const reverseAndNegate = (arr) => {
	return arr.reverse().map(value => -value);
}

alert( reverseAndNegate([1, -2, 5, 4]) );*/

/*Напишите функцию, которая принимает массив чисел, и сначала к каждому четному числу прибавляет 4, у каждого 
нечетного отнимает 2, потом убирает из массива числа, делящиеся на 13 без остатка и возвращает сумму оставшихся чисел.*/

/*const calculate = (arr) => {
  return arr
    .map(v => v % 2 === 0 ? v + 4 : v - 2)
    .filter(v => !(v % 13 === 0))
    .reduce((a, b) => a + b, 0)
}

alert(calculate([15, 2, 3, 5, 6]))

В качестве проверки: calculate([15, 2, 3, 5, 6]) должна вернуть 20.*/

//Напишите функцию transformUpvotes(arr), которая принимает массив сокращенных записей количества 
//лайков ['10k', '2.3k', '5k', '32', '28.4k'] и возвращает массив чисел [10000, 2300, 5000, 32, 28400].

/*const transformUpvote = strVal => {
	const hasK = strVal.toLowerCase().includes('k');
  if (hasK) {
  	const numPart = strVal.slice(0, -1);
    return numPart * 1000;
  }
  return Number(strVal);
}

const transformUpvotes = arr => arr.map(transformUpvote);

alert( transformUpvotes(['10k', '2.3k', '5k', '32', '28.4k']) )*/

//Напишите функцию getInfo(persons), которая принимает массив объектов, описывающих человека, 
//имеющих поля {name, age} и возвращает объект со средним возрастом и именем самого старшего человека
/*const getInfo = persons => {
	const ages = persons.map(person => person.age);
  const averageAge = ages.reduce((a, b) => a + b, 0) / ages.length;
  const maxAge = Math.max(...ages);
  const oldestPerson = persons.find(person => person.age === maxAge);
  return {
  	averageAge,
    oldestPerson: oldestPerson.name,
  }
}

console.log( getInfo([
  {
  	name: 'Kaya',
    age: 10,
  },
  {
  	name: 'Vitya',
    age: 20,
  },
  {
  	name: 'Kolya',
    age: 30,
  }
]) )*/

//2.1.1 Напишите функцию, которая принимает массив массивов вида [['ключ1', 'значение1'], ['ключ2', 'значение2']] и
// возвращает объект вида { ключ1: 'значение1', ключ2: 'значение2' }.
/*const fromEntries = entries => {
	const obj = {};
  entries.forEach(entry => {
  	obj[entry[0]] = entry[1];
  })
  return obj;
}

console.log( fromEntries([
	['key2', 3],
  ['key1', 'hello'],
]) )*/

//Напишите функцию countChars(str), которая принимает строку и возвращает количество букв в этой строке.
// Например countChars('Арарат') должен вернуть { а: 3, р: 2, т: 1 }
/*const countChars = str => {
	const chars = {};
  str.split('').forEach(char => {
  	const lowerChar = char.toLowerCase();
  	if (chars[lowerChar] === undefined) {
    	chars[lowerChar] = 0;
    }
    ++chars[lowerChar];
  })
  return chars;
}

console.log( countChars('Арарат') )*/

//Перепишите функцию так, чтобы она писала 'Hello, {name}' в консоль только при первых трёх вызовах, начиная с 4го 
//ничего не делала. Используйте замыкания.
/*const sayHello = (() => {
	let countCalls = 0;

	return name => {
    if (countCalls >= 3) return;
    console.log(`Hello, ${name}`);
    ++countCalls;
  }
})();

sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')*/

//Переменная объявленная с помощью var всплывает и видная на уровне функции, даже если объявлена внутри цикла for.
// Перепишите программу так, чтобы она печатала от 1 до 10 в консоль. Используйте замыкания.
/*
for (var i = 0; i < 10; ++i) {
	((i) => {
	  setTimeout(() => console.log(i), 0);
  })(i)
}*/

//Напишите функцию countEverySecond(n), которая каждую секунду печатает в консоль цифру начиная с 1 и заканчивая {n}

/*const countEverySecond = n => {
	let count = 0;
	const interval = setInterval(() => {
  	console.log(++count);
    if (count === n) {
    	clearInterval(interval);
    }
  }, 1000);
};

countEverySecond(5);*/

//Напишите функцию countEverySecond(n), которая каждую секунду печатает в консоль цифру начиная с 1 и заканчивая {n}
/*const countEverySecond = n => {
	let count = 0;
	setTimeout(function go() {
  	console.log(++count)
    if (count < n) {
    	setTimeout(go, 1000);
    }
  }, 1000);
};

countEverySecond(5);*/

//Напишите функцию random(min, max), которая принимает минимальное и максимальное значение и возвращает целое случайное число n, такое что min ≤ n ≤ max. Эта функция понадобится нам для следующих заданий.
//P. S. Используйте Math.random(), умножение и сложение.
/*const random = (min, max) => {
	return 5;
};

alert( random(0, 1) )*/
/*const random = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

alert( random(0, 1) )*/

//Сверстайте 5 параграфов с текстом. С помощью js меняйте цвет фона каждого параграфа на случайный каждую секунду. 
//Создайте массив с названиями цветов ['blue', 'cyan', ...] и с помощью функции из предыдущего задания выбирайте
// случайный цвет из массива.

/*const random = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};*/
/*const random = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const colors = ['red', 'green', 'blue', 'yellow', 'cyan', 'purple'];

const getRandomColor = () => {
	return colors[random(0, colors.length - 1)]
};

const paragraphs = document.querySelectorAll('p');

setInterval(() => {
  paragraphs.forEach(p => {
  	p.style.backgroundColor = getRandomColor();
  })
}, 1000);*/

//Напишите функцию, которая принимает html в виде строки и возвращает html без элементов div (и всего что внутри),
// все остальные элементы сохраняются. Используйте createElement, querySelectorAll и innerHTML.
/*const removeDivs = html => {
	return html;
}

const html = '<div></div>Hello<div><div><p>Hello world</p></div></div> <b>World!</b>';

alert( removeDivs(html));
alert( removeDivs(html) === 'Hello <b>World!</b>'); // Должно быть true*/
/*const removeDivs = html => {
	const root = document.createElement('span');
  root.innerHTML = html;
  const divs = root.querySelectorAll('div');
  divs.forEach(div => {
  	div.parentNode.removeChild(div);
  })
  return root.innerHTML;
}

const html = '<div></div>Hello<div><div><p>Hello world</p></div></div> <b>World!</b>';

alert( removeDivs(html));
alert( removeDivs(html) === 'Hello <b>World!</b>'); // Должно быть true*/

//Создайте кнопку, которая при клике создает другую кнопку, которая в свою очередь создает другую кнопку, и т.д.

/*const createNewButton = (text) => {
  const newButton = document.createElement('button');
  newButton.innerHTML = text;
  newButton.type = 'button';
  newButton.addEventListener('click', () => createNewButton(text));

	const container = document.querySelector('.buttons');
  container.appendChild(newButton);
};

const [button] = document.getElementsByTagName('button');
button.addEventListener('click', () => createNewButton('Клонировать!'));*/

//Создайте раскрывающийся блок (accordion). Сверху блок с заголовком, при нажатии на который снизу 
//показывается блок с текстом, при повторном нажатии блок с текстом скрывается.

/*const initAccordion = element => {
  const panel = element.querySelector('.panel');
  const header = element.querySelector('.header');
  header.addEventListener('click', () => {
    panel.classList.toggle('panel--opened');
  });
}

const accordions = document.querySelectorAll('.accordion');
accordions.forEach(initAccordion);*/

//Напишите игру: в центре экрана появляется кнопка "Нажми меня". Когда юзер наводит на нее курсор, 
//она сразу перемещается на случайные координаты.
/*const random = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};*/
/*const random = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const button = document.querySelector('button');
button.addEventListener('mouseenter', () => {
	button.style.left = `${random(10, 90)}%`;
  button.style.top = `${random(5, 95)}%`;
})*/

//Выведите на экран надпись "Ширина экрана {width} пикселей" и обновляйте ее при изменении ширины.
/*const button = document.querySelector('button');

const updateWidthLabel = () => {
	const currentWidth = window.innerWidth;
	button.innerHTML = `Ширина экрана ${currentWidth} пикселей`
}

updateWidthLabel();
window.addEventListener('resize', updateWidthLabel);*/


/*Создайте иерархию классов животных, используйте ES5 (прототипы и функции-конструкторы). Создайте класс 
Существо, с методом born() - родиться, от него наследуется Животное, от которого наследуется Человек, Птица, Рыба. 
От человека наследуется Китаец. Придумайте для каждого класса методы и поля.*/
/*function Thing(name) {
	this.name = name;
}
Thing.prototype.born = function() {
	console.log(`${this.name} родился`);
}


function Animal(name, maxAge) {
	Thing.call(this, name);

	this.maxAge = maxAge;
}
Animal.prototype = Object.create(Thing.prototype);
Animal.prototype.constructor = Animal;


function Bird(name, maxAge) {
	Animal.call(this, name, maxAge);
}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Bird.prototype.fly = function(distance) {
	console.log(`Птица по имени ${this.name} пролетает ${distance} метров!`)
}


function Fish(name, maxAge, isSeaFish) {
	Animal.call(this, name, maxAge);
  
  this.isSeaFish = isSeaFish;
}
Fish.prototype = Object.create(Animal.prototype);
Fish.prototype.constructor = Fish;
Fish.prototype.swim = function(distance) {
	console.log(`Рыба по имени ${this.name} проплывает ${distance} метров!`)
}


function Human(name, maxAge, height) {
	Animal.call(this, name, maxAge);
  
  this.height = height;
  this.inventions = [];
}
Human.prototype = Object.create(Animal.prototype);
Human.prototype.constructor = Human;
Human.prototype.invent = function(item) {
	this.inventions.push(item);
	console.log(`Я, ${this.name}, изобрел ${item.name}`);
}


function Chinese(name, maxAge, height) {
  Human.call(this, name, maxAge, height);
}
Chinese.prototype = Object.create(Human.prototype);
Chinese.prototype.constructor = Chinese;
Chinese.prototype.buildWall = function() {
	console.log(`Я, ${this.name}, помогаю строить Великую Китайскую Стену!`)
}

const ying = new Chinese('Ying', 72, 167);
ying.born();
ying.invent({ name: 'Кирка' } );
ying.buildWall();

console.log(ying instanceof Thing) // Должно быть true
console.log(ying instanceof Animal) // Должно быть true
console.log(ying instanceof Human) // Должно быть true
console.log(ying instanceof Chinese) // Должно быть true
console.log(ying instanceof Fish) // Должно быть false
console.log(ying instanceof Bird) // Должно быть false*/

//Перепишите иерархию из предыдущего задания, используя ES6-классы (extends, super).

/*function Thing(name) {
	this.name = name;
}
Thing.prototype.born = function() {
	console.log(`${this.name} родился`);
}


function Animal(name, maxAge) {
	Thing.call(this, name);

	this.maxAge = maxAge;
}
Animal.prototype = Object.create(Thing.prototype);
Animal.prototype.constructor = Animal;


function Bird(name, maxAge) {
	Animal.call(this, name, maxAge);
}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Bird.prototype.fly = function(distance) {
	console.log(`Птица по имени ${this.name} пролетает ${distance} метров!`)
}


function Fish(name, maxAge, isSeaFish) {
	Animal.call(this, name, maxAge);
  
  this.isSeaFish = isSeaFish;
}
Fish.prototype = Object.create(Animal.prototype);
Fish.prototype.constructor = Fish;
Fish.prototype.swim = function(distance) {
	console.log(`Рыба по имени ${this.name} проплывает ${distance} метров!`)
}


function Human(name, maxAge, height) {
	Animal.call(this, name, maxAge);
  
  this.height = height;
  this.inventions = [];
}
Human.prototype = Object.create(Animal.prototype);
Human.prototype.constructor = Human;
Human.prototype.invent = function(item) {
	this.inventions.push(item);
	console.log(`Я, ${this.name}, изобрел ${item.name}`);
}


function Chinese(name, maxAge, height) {
  Human.call(this, name, maxAge, height);
}
Chinese.prototype = Object.create(Human.prototype);
Chinese.prototype.constructor = Chinese;
Chinese.prototype.buildWall = function() {
	console.log(`Я, ${this.name}, помогаю строить Великую Китайскую Стену!`)
}

const ying = new Chinese('Ying', 72, 167);
ying.born();
ying.invent({ name: 'Кирка' } );
ying.buildWall();

console.log(ying instanceof Thing) // Должно быть true
console.log(ying instanceof Animal) // Должно быть true
console.log(ying instanceof Human) // Должно быть true
console.log(ying instanceof Chinese) // Должно быть true
console.log(ying instanceof Fish) // Должно быть false
console.log(ying instanceof Bird) // Должно быть false*/
/*class Thing {
  constructor(name) {
    this.name = name;
  }

  born() {
    console.log(`${this.name} родился`);
  }
}

class Animal extends Thing {
  constructor(name, maxAge) {
    super(name);
    this.maxAge = maxAge;
  }
}


class Bird extends Animal {
  fly(distance) {
    console.log(`Птица по имени ${this.name} пролетает ${distance} метров!`)
  }
}

class Fish extends Animal {
  swim(distance) {
    console.log(`Рыба по имени ${this.name} проплывает ${distance} метров!`)
  }
}


class Human extends Animal {
  constructor(name, maxAge, height) {
    super(name, maxAge);
    this.height = height;
    this.inventions = [];
  }

  invent(item) {
    this.inventions.push(item);
    console.log(`Я, ${this.name}, изобрел ${item.name}`);
  }
}


class Chinese extends Human {
  buildWall() {
    console.log(`Я, ${this.name}, помогаю строить Великую Китайскую Стену!`)
  }
}

const ying = new Chinese('Ying', 72, 167);
ying.born();
ying.invent({ name: 'Кирка' } );
ying.buildWall();

console.log(ying instanceof Thing) // Должно быть true
console.log(ying instanceof Animal) // Должно быть true
console.log(ying instanceof Human) // Должно быть true
console.log(ying instanceof Chinese) // Должно быть true
console.log(ying instanceof Fish) // Должно быть false
console.log(ying instanceof Bird) // Должно быть false*/

//Напишите функцию multiply(a, b) которая умножает a на b с помощью сложения и рекурсии.
/*const multiply = function mult(a, b) {
  if (a === 0 || b ===0) {
    return 0
  }
  if (b < 0) {
    return -1 * mult(a, -1 * b);
  }

  if (b === 1) {
    return a;
  } else {
    return a + mult(a, b - 1)
  }
}

console.log(
	multiply(3, 5),
  multiply(-3, 5),
  multiply(3, -5),
  multiply(-3, -5),
)*/

//Напишите функцию pow(a, b), которая возводит a в степень b с помощью умножения и рекурсии.
/*const pow = function power(a, b) {
  if (a === 0) {
    return 0
  }
  if (b === 0) {
    return 1;
  }
  if (b < 0) {
    return 1 / power(a, -1 * b);
  }

  if (b === 1) {
    return a;
  } else {
    return a * power(a, b - 1)
  }
}

console.log(
	pow(2, 2),
  pow(-2, 2),
  pow(2, -2),
  pow(-2, -2),
)*/

//Числа Фибоначчи - последовательность в которой первые два числа равны 1 и 1, а каждое последующее число 
//равно сумме двух предыдущих чисел. 
//1, 1, (1 + 1 = 2), (1 + 2 = 3), (2 + 3 = 5), 8, 13, 21, (21 + 13 = 34), 55, 89, 144...
//Напишите функцию fib(n), которая возвращает n-ое число Фибонначи..
/*const fib = function fibonacci(n) {
	if (n <= 2) return 1;
  return fibonacci(n - 2) + fibonacci(n - 1);
}

console.log(
	fib(3),
  fib(5),
  fib(10),
  fib(12),
)*/

//Напишите функцию len(str), которая принимает строку и рекурсивно считает её длину, свойство str.length использовать нельзя.
/*const len = function length(str, n = 0) {
	if (str === '') return n;
  return length(str.slice(1), n + 1);
}

console.log(
	len('hello'),
  len(''),
  len('111111111111'),
)*/

//Переверните строку с помощью рекурсии.
/*const reverse = function rev(str) {
	if (str === '') return str;
  const lastIdx = str.length -1;
  return str[lastIdx] + rev( str.slice(0, lastIdx) )
}

console.log(
	reverse('hello'),
  reverse(''),
  reverse('1234567890'),
)*/

//Факториал от n (обозначается n!) - это 1 * 2 * 3 ... * n, напишите функцию fac(n)
/*const fac = function factorial(n) {
	if (n <= 1) {
  	return n;
  }
  return n * factorial(n - 1);
}

console.log(
	fac(3),
  fac(1),
  fac(5),
  fac(10),
)*/

//Напишите функцию containsDigit(str), которая возвращает true, если {str} содержит хотя бы одну цифру. 
//Используйте регулярные выражения.
/*const containsDigit = (str) => {
  
}

alert(containsDigit('sdlfjsdlfj'))
alert(containsDigit('adlkfja;lkdfjg3'))*/
/*const containsDigit = (str) => {
	return Boolean(str.match(/\d/));
}

alert(containsDigit('sdlfjsdlfj'))
alert(containsDigit('adlkfja;lkdfjg3'))*/
//Напишите регулярное выражение, которое валидирует только четные числа. Создайте функцию isEven(n) 
//принимающую Number {n} и возвращающую true если n - четное.
/*const isEven = (n) => {
  const nStr = String(n);
  return Boolean( nStr.match(/-?\d*[24680]$/) );
}

console.log(
	isEven(0),
  isEven(1),
	isEven(2),
	isEven(-13),
	isEven(-14),
	isEven(13),
	isEven(14),
 )*/

 //Напишите функцию validatePhoneNumber(str) которая возвращает true, если str - это номер телефона в формате +7 (987) 654-32-10
 //или +7 (4212) 53-53-53
 /*const validatePhoneNumber = (str) => {
  const mobile = /^\+\d \(\d{3}\) \d{3}-\d{2}-\d{2}$/.source;
  const home = /^\+\d \(\d{4}\) (\d{2}-){2}\d{2}$/.source;
  const phoneRegexp = new RegExp(`(${mobile})|(${home})`, 'g');
  return Boolean( str.match(phoneRegexp) );
}

console.log(
	validatePhoneNumber('+7 (987) 654-32-10'),
  validatePhoneNumber('+7 (4212) 53-53-53'),
  validatePhoneNumber('  +7 (4212) 53-53-53'),
  validatePhoneNumber('+7 (4212) 53-53-53  '),
  validatePhoneNumber('+7(4212) 53-53-53'),
  validatePhoneNumber('+7(4212) 523'),
)*/

/*Для подключения к базе данных используется адрес типа 
//jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=12345 
//Напишите функцию, которая принимает этот адрес в виде строки и возвращает ту же строку,
// но со звёздочками вместо пароля. Пароль находится после password=
/*const hideDBPassword = jdbcAddr => {
	const passRegex = /password=(\S+)/g;
  const passMatch = passRegex.exec(jdbcAddr);
  if (!passMatch) {
  	return jdbcAddr;
  }
  const pass = passMatch[1];
  const stars = Array.from({ length: pass.length }).fill('*').join('');
  const censuredAddr = jdbcAddr.replace(pass, stars);
  return censuredAddr;
}

console.log( hideDBPassword('jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=12345') );*/

//Напишите функцию, принимающую строку и заменяющую все гласные на их индекс в строке. 
//Например "Здравствуйте ребята" ⇒ "Здр3вств8йт11 р14б16т18!"
/*const replaceVowels = str => {
	const vowelRegexp = /[уеыаоэёяию]/gi
  const chars = str.split('');
  const vowels = chars.reduce((vowels, char, idx) => {
  	if (char.match(vowelRegexp)) {
    	vowels.push({ char, idx });
    }
    return vowels;
  }, [])

  let newStr = str;
  vowels.forEach(({ char, idx }) => {
  	newStr = newStr.replace(char, idx);
  })
  return newStr;
}

console.log( replaceVowels('Здравствуйте Ребята!') );*/

//Задание 1 модуля 7
//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения 
//только собственных свойств. Данная функция не должна возвращать значение.
/*const SKILLFACTORY = {
  courses: 'fronted',
  city: 'Moscow'
}
const STUDENT = Object.create(SKILLFACTORY);
STUDENT.name = 'Irina';
STUDENT.surname = 'Ignatenko';


function printObj(obj) {
  for(let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key}: ${obj[key]}`);
    } 
  }
}
printObj(STUDENT);
*/
//Задание 2 модуля 7
//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у 
//переданного объекта свойство с данным именем. Функция должна возвращать true или false.
/*
function printObj(string, obj) {
  return obj.hasOwnProperty(string);
}
const student = {
  name: 'Irina',
  surname: 'Ignatenko',
  age: 32,
  city: 'Moscow'
}
console.log(printObj('age', student));*/

//Задание 3 модуля 7
//Написать функцию, которая создает пустой объект, но без прототипа.
/*const STUDENT = {
  name: 'Irina',
  surname: 'Ignatenko',
  city: 'Moscow'
}
function createObj() {
  let student = Object.create(null);
  console.log(student); 
}
createObj(STUDENT);
*/

// Задание 4.модуля 7
//Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
//Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
//Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, 
//какими свойствами он обладает.
//План:
//Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
//Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
//У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
//Создать экземпляры каждого прибора;
//Вывести в консоль и посмотреть результаты работы, гордиться собой :)
//Общие требования:

//Имена функций, свойств и методов должны быть информативными
//Соблюдать best practices:
//использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
//информативные имена (а не a, b);
//четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
//использование синтаксиса es6 (кроме функции-конструкторов) и т.д.


//Задание 5.модуля 7

//Переписать консольное приложение из предыдущего юнита на классы.
//Общие требования:
//Имена классов, свойств и методов должны быть информативными;
//Соблюдать best practices;
//Использовать синтаксис ES6.

//console.warn("Это последнее предупреждение");
//console.error("Вы совершили ошибку");
/*
let a = 3;
if (a > 3) {
  console.log("Введеное число больше 3");
} else if (a < 3 ) {
  console.log("Введеное число меньше 3");
} else {
  console.log("Введеное число равно 3");
}*/

/*1. Попросить пользователя ввести текущее время
через prompt/ если время с 9 до 18, то вывести что мазагин открыт, иначе закрыт

let time = +prompt("Введите текущее время");
if (time >= 9 && time <=18) {
  console.log("Магазин открыт");
} else {
  console.log("Магазин закрыт");
}*/

/*Попросить пользователя ввести число через prompt 
Если введенное число больше 0, вывести "Больше нуля"
если меньше 0 то "меньше нуля", если равно 0 то "равно нулю"
если введено не число то "ошибка! введите число"

let num = +prompt("Введите число ");
if (isNaN(num)){
  console.log("ошибка! введите число");
} else { 
  if (num < 0) {
  console.log("меньше нуля");
} else if (num > 0) {
  console.log("больше нуля");
} else {
  console.log("равно нулю");
}
}
*/
const buttonModal = document.querySelector('.button-modal');
const red = document.querySelector('.red');
const button = document.querySelector('.button');
const menu = document.querySelector('.menu');
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
console.log(menu);
buttonModal.addEventListener('click', function(event) {
 red.classList.add('close')
});

button.addEventListener('click', function(event) {
  red.classList.remove('close')
 });

blue.addEventListener('click', function(e) {
  menu.insertAdjacentHTML (
    'beforebegin',
   `<li class="link">liiiiiink</li>` 
  );
  
})


yellow.addEventListener('mouseover', function(e) {
     green.classList.toggle('close');
     
})



const block = document.querySelector('.wrapper')
block.addEventListener('mouseover', function(event) {
  let target = event.target.closest('span');
  if(!target) return;
  target.style.cssText=`background: red;`;
});
block.addEventListener('mouseout', function(event) {
  let target = event.target.closest('span');
  if(!target) return;
  target.style.cssText=``;
});

