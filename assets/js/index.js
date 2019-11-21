'use strict';


// ООП в JS . Белисимо. Классы. (которых нет)


function FunctionAnimal(name){
    this.name = name;
}

function FCat(){

}

FCat.prototype = new FunctionAnimal();

class Animal{
    constructor(name){
        this.name = name;
    }

    getVoice(){
        console.log(this.voice);
    }
};


class Cat extends Animal{
    constructor(name, voice){
        super(name); //вызов родительского конструктора
        this.voice = voice;
    }

    voice(){

    }
}


const fCat = new FCat();
const animal = new Animal("chepushilo");
const cat = new Cat("Murzik", "Mew-mew");


//палиндром функция

/*let str1 = "а роза упала на лапу, Азора.";



    function checkPalindrom(str){
    str = str.toLowerCase().replace(/[^а-яa-z]|\s/gi,"");

    let str2 = str.split("").reverse().join("");

    if (str === str2) {
        return true;
    }
    return false;
    }


console.log(checkPalindrom(str1));

    */

// замыкание и лексическое окружение.
/*

function counterCreator(){


    //инициализация переменных в замкнутом лексическом окружении
    let count = 0;

    return function(){
        //разные действия которые будут выполняться потом с разными данными
        return ++count;
    }
}


function counterCreator2(){

    let count = 0;

    return {
        increment(){
            count++;
        },
        decrement(){
            count--;
        },
    }
}

const counter1 = counterCreator();
const counter2 = counterCreator();


*/



/*


let first = [
    45,
    ,
    2354,
    57,
    7,8,456,,43,
  [2,43,456,7,87,],
    [56,3,241,,34,"dsaf"],
    [
        45,34,1234,5, [134,534,56,34,]
    ],
    [43,55,6,632,4,56]
];


function isArrayDisplay(first) {
    for (let i = 0; i < first.length; i++) {
        if (Array.isArray(first[i])) {
            console.log(first[i]);
            isArrayDisplay(first[i]);
            }
    }
}

isArrayDisplay(first);


*/

/*


function User(name, age){
    this.name = name;
    this.age = age;
}

let i = 0;

const users = [];

while (i++ < 20){

    users.push( new User( `User #${i}`, 15+i));
}


const isEveryUserAdult = users.every/!*some*!/( checkEveryArrayItem );


function checkEveryArrayItem(currentValue/!*, index, arr*!/){
    return currentValue.age >= 18;
}
*/









/*
const arr = [12,21,45,123,43,12];

console.log(arr);

arr.forEach( (currentValue, index, arr) => {arr[index] *= 2});

console.log(arr);






const arr2 = [{name: 'Vasya'},{name: 'Leha'},{name: 'Pasha'}];


console.log(arr2);

arr2.forEach( currentValue => currentValue.name = "foreach");

console.log(arr2);

*/




/*



function MyArray(){
    this.length = 0;

    for (let i = 0 ; i< arguments.length; i++)
    {
        this.push(arguments[i]);
    }

}




MyArray.prototype = {
    push(){
        for (value of arguments) {
            this[this.length++] = value;
        }
        return this.length;
    },
    pop() {
        if (this.length > 0) {
            const buf = this[--this.length];
            delete this[this.length];
            return buf;
        }
    },

    every(callback){
        for (let i = 0; i < this.length; i++){
            if ( ! callback(this[i], i, this) ){
                return false;
            }
        }
        return true;
    }
};



const arr = new MyArray();

arr.push(45);
arr.push(455);


*/








/*

const car = {
    _color: "white",
    _isRepained: false,

    get color(){
        return this._color;
    },

set color(value){
        this._color = value;
        this._isRepained = true;
},
}

console.log(car);
car.color = "black";
console.log(car);
*/

/*
function Person (name , surname, age){

    this.name = name;
    this.surname = surname;
    this.age = age;

    this.sayHi = function sayHi(){
        alert(`Hi, my name is ${this.name}`);
    }
}

function Employee(name,surname, age, salary){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.salary = salary;
}

Employee.prototype = new Person();


const employees = [];

for (let i = 0 ; i < 10; i++){
    employees.push(new Employee(`Test${i}`, `Testovich${i}`, 18 + i, 1000 + i));
}

console.log(employees);
employees[3].sayHi();*/
