// console.log("hello Aleksandr")
// alert('Hi')
// console.log(typeof "hello"); // возращает тип аргумента
// console.log(typeof Number("123"));

const arr = ["s","f", "g"]; // объявление массива
// const a = arr[0]; // присваиваем элемент массива с индексом 0 переменной а
// const [b] = arr; // объявление переменных в массиве
// const [d,x,c, ...rest] = arr; // объявление множество переменных и присваивание их к массиву arr, т.е. d = s, x=f и c=g. Если массив будет больше 3х элементов, то эти элементы присвоются переменной rest
// console.log(arr.length);
//==================Перебор массива через цикл for=================
// for(let i; i<arr.length; i++) { 
//     const element = arr[i];
//     console.log(element);
// }
//=================Перебор массива через forEach===============
// const res = arr.forEach((el,index) => {
//     console.log(el,index);
//     return el;
// });
// console.log(res)
//=================Перебор массива через map===============
// const res = arr.map((el, index) => {
//     console.log(el, index);
//     return "->" + el;
// });
// console.log(res);
//=================Перебор массива через reduce===============
// const arr2 = [1,2,3,4,5];
// const res = arr2.reduce((preValue, value, index) => {
// console.log(`value: sum=${preValue} + arr[${index}]=${value}`);
// return preValue + value;
// }, 0);
// console.log(res);
//=================Методы поиска в массиве======================
// const f = arr.find((el) => el==="s");
// console.log(f);

// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
//   ];
//   let someUsers = users.filter(item => item.id < 3);  // возвращает массив, состоящий из двух первых пользователей
//   console.log(someUsers);
  //==============Добавление и удаление элементов в массиве======================
  // const p = arr.push("Y"); // добавляем в конец массива значение "Y"
  // console.log(arr); // -> [ 's', 'f', 'g', 'Y' ]
  // console.log(p);  // выдаёт длину = 4
  // arr.push("🚜");
  // console.log(arr);
  //============Созданеие объекта============
  //let user = new Objeck(); // создание объекта через конструктор
  //let user = {}; // литерал объекта
//   let user = {
//     name: "Jon",
//     age: 30
//   };
// const age = user.age;
// const {name,age:userAge} = user;

// user.isAdmin = true;
// console.log(user); // { name: 'Jon', age: 30, isAdmin: true }

// delete user.isAdmin;
// console.log(user); // { name: 'Jon', age: 30 }
//=========Копирование объектов==================
// let user = {name:"Иван"};
// let admin  = user; // переменная admin ссылается на тот же объект, что и user
// console.log(admin); // { name: 'Иван' }
// admin.name = 'Петя';
// console.log(user.name); // Петя
//========Копирование объектов без ссылания переменной на один и тот же объект===========
// let user1 = {name:"Иван"};
// let user2 = {age: 30};
// let newUser = {};
// Object.assign(newUser, user1, user2); // копирование через метод assign
// //console.log(newUser); // -> { name: 'Иван', age: 30 }
// let newUser2 = {...user1, ...user2};
// console.log(newUser2); // -> { name: 'Иван', age: 30 }
//=====================================================================================

// let user = {
//   name: "Jon",
//   age: 30
// };
//==============Перебор объектов===========================
//==Цикл for...in===
// for(let key in user) {
//   //console.log(key); // -> name, age
//   console.log(user[key]); // -> Jon, 30
// }

//===Object.keys, values, entries====
// const keys = Object.keys(user); // возвращает массив ключей
// console.log(keys); // -> [ 'name', 'age' ]
// const values = Object.values(user); // Возвращает массив значений
// console.log(values); // -> [ 'Jon', 30 ]
// const entries = Object.entries(user); // возвращает массив ключей и массив значений внутри массива
// console.log(entries); // -> [ [ 'name', 'Jon' ], [ 'age', 30 ] ]

// //===fromEntries===
// const fromEntries = Object.fromEntries(entries); // форматирует массив массивов из entries и преобразует их в объект
// console.log(fromEntries); // -> { name: 'Jon', age: 30 }
//===================================================================================================================

//================Объявление метода объект=================================
// function sayHi() {
//   console.log("Привет!");
// }

// let user = {
//   name: "Jon",
//   age: 30,
//   sayName: function sayName() { // cоздание метода объекта
//     console.log('Name: ' + this.name);
//   },
//   sayAge() {
//     console.log('Age: ' + this.age);
//   },
//   sayHi:sayHi
// };
// user.sayName(); // -> Name: Jon
// user.sayAge(); // => Age: 30
// user.sayHi(); // => Привет!
//===========================================================================================

//==============Конструкторы, "New" ===================================================
function User(name) { // создание конструктура User
  this.name = name;
  this.isAdmin = false;
  this.sayHi = function () {
    console.log("Меня зовут " + this.name);
  };
}

let user = new User("Вася"); // создание объекта User
 console.log(user.name); // => Вася
 console.log(user.isAdmin); // => false
 user.sayHi(); // => Меня зовут Вася
