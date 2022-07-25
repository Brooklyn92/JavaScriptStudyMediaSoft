//===Прототипное наследование===
// let animal = {
//     eats:true,
//     walk() {
//             console.log("i'm animal");
//     }

// };
// let rabbit = {
//     jumps:true,
//     __proto__ : animal
// };
// console.log(rabbit.eats); // => undefined
// rabbit.__proto__ = animal;
// console.log(rabbit.eats); // => true
// console.log(rabbit.jumps); // => true
// rabbit.walk = function() {
// console.log("hi, i'm rabbit");  // => перезаписываем метод walk у объекта animal
// }
// rabbit.walk(); // => hi, i'm rabbit

// let user = {
//     name: "Make",
//     surname: "Loury",

//     set fullName(value1) {
//         [this.name, this.surname] = value1.split(" ");
//     },

//     get fullName() {
//         return this.name + " " +  this.surname;
//     }
// };
// console.log(user.fullName); // => Make Loury

// let admin = {
//     __proto__ : user,
//     isAdmin:true
// };
// console.log(admin.fullName); // => Make Loury

// admin.fullName = "Garry Potter";
// console.log(admin.name); // => Garry
// console.log(admin.surname); // => Potter
//============F.prototype===================
// let animal = {
//     eats: true
// };

// function Rabbit(name) {
//     this.name = name;
// }
// Rabbit.prototype = animal;

// let rabbit = new Rabbit("Write animal");

// console.log(rabbit.eats); // => true
//============Изменение встроенных прототипов============
// String.prototype.show = function() {
// console.log(this);
// };
// "BOOM!".show();
//========Методы прототипов=======
let animal = {
    eats: true
};
let rabbit = Object.create(animal); // => создаём новый объект с прототипом animal.
console.log(rabbit.eats); // => true