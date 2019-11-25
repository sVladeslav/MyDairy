'use strict';



/*Деструктуризация
*
*
* теперь есть такие переменные как test1 , test2, test4
* */


const testArr = ["FirstValue", "SecondValue", "ThirdValue", "FourthValue"];

const [test1, test2, , test4] = testArr;

const [test11, test22, , test44] = ["FirstValue", "SecondValue", "ThirdValue", "FourthValue"];

const [test111, test222,  ...test444] = ["FirstValue", "SecondValue", "ThirdValue", "FourthValue"];
//в test444 придет весь оставшийся массив


const result = [...testArr, ...testArr];
//будет склейка двух массивов

const result2 = [ ...(new Set( [ ...testArr, ...testArr ])) ];
//получит массив с уникальными значениями из двух массивов


const sum = (a,b,...rest) =>{
    console.log(rest);
}

function sum2(a,b){
    console.log(arguments); // НООООО !!!! в аргументы попадут все значения включая a,b
                            // console.log([...arguments]); в первом случае
                            // это были обьекты итерируемые, а в данном
                            // случае преобразируем в массив
}

const obj = {
    name: "Test",
    surname: "Testovich",
    age: 18,
    isMale: true,
    car: {
        engine:{
            volume: 2.0,
        },
        doorCount: 5,
    },
}

let {surname : myPerfectNameOfVariable, age} = obj;
// первое свойство переименуеться , а второе будет age. но и то
    // и другое это просто переменные

let { car: { engine : { volume: userCarEngineVolume }} , name : userName} = obj;





const user = {
    id: 21,
    role: "USER",

    email: "useremail@gmail.com",
    firstName: "Name",

};


const checkPermission = (req,res, next) => {
    const {user: {id: userId, role: userRole}} = req;

    userId;
    userRole;
};

const reqObj = {} ;
reqObj.user = user;

function logUserFullName(user){
    console.log(`${user.name} ${user.surname}` );
}

function logUserFullName2({name, surname, ...rest}){ //расчленит юзера и сразу его по переменным

    console.log(`${name} ${surname}` );
}


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
