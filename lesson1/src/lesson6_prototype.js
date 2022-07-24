//===Прототипное наследование===
let animal = {
    eats:true
};
let rabbit = {
    jumps:true
};

//console.log(rabbit.eats); // => undefined

rabbit.__proto__ = animal;
console.log(rabbit.eats); // => true
console.log(rabbit.jumps); // => true


