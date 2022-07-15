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
let user = {name:"Иван"};
let admin  = user; // переменная admin ссылается на тот же объект, что и user
console.log(admin); // { name: 'Иван' }
  
