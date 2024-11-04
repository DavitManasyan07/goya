// 1
// function foo(a) {
//   return function baz(b) {
//     console.log(a);
//   };
// }

// foo(0)(1);

// it will output 0

//   2.
// let count = 0;
// function foo() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count);
//   }
//   console.log(count);
// }

// foo();

// it will output 1, 0

//   3.
// for (var i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i);
//   }, 1000);
// }

// in 1 second it will output 3, 3, 3

//   4.
// function createIncrement() {
//   let count = 0;
//   function increment() {
//     count++;
//     console.log(count);

//   }

//   let message = `Count is ${count}`;
//   function log() {
//     console.log(message);
//   }

//   return [increment, log];
// }

// const [increment, log] = createIncrement();
// increment(); // log 1
// increment(); // log 2
// increment(); // log 3
// log(); // log Count is 0

// it will output 1,2,3,Cout is 0

//////////////

// 1.

// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.diameter()); // log 20
// console.log(shape.perimeter()); // log NaN

// it will output 20,NaN

//   2.
// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b); // log true
// console.log(a === b); // log false
// console.log(b === c); // log false

// it will output true,false,false

//   3.
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const lydia = new Person("Lydia", "Hallie");
// const sarah = Person("Sarah", "Smith");

// console.log(lydia); // object
// console.log(sarah); // undefined

// it will output object {firstName: "Lydia", lastName: "Hallie"}, undefined

//   4.
// function checkAge(data) {
//   if (data === { age: 18 }) {
//     console.log("You are an adult!");
//   } else if (data == { age: 18 }) {
//     console.log("You are still an adult.");
//   } else {
//     console.log(`Hmm.. You don't have an age I guess`);
//   }
// }

// checkAge({ age: 18 }); // log `Hmm.. You don't have an age I guess`

// // it will output `Hmm.. You don't have an age I guess`

//   5.
// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]); // log 456

// // it whil output 456

//   6.
// class Counter {
//   constructor() {
//     this.count = 0;
//   }

//   increment() {
//     this.count++;
//   }
// }

// const counterOne = new Counter();
// counterOne.increment();
// counterOne.increment();

// const counterTwo = counterOne;
// counterTwo.increment();

// console.log(counterOne.count); // log 3

// // it will output 3

//   7.
// const object = {
//   message: "Hello, World!",
//   getMessage() {
//     const message = "Hello, Earth!";
//     return this.message;
//   },
// };
// console.log(object.getMessage()); // log "Hello, World!"

// // it will output "Hello, World!"

//   8.
// function Pet(name) {
//   this.name = name
//   this.getName = function (){
//     return this.name
// }
// }
// const cat = new Pet("Fluffy");
// console.log(cat.getName()); // log "Fluffy"
// const { getName } = cat;
// console.log(getName()); // log undefined

// // it will output "Fluffy", undefined

//   9.
// const object = {
//   message: "Hello, World!",
//   logMessage() {
//     console.log(this.message); // What is logged?
//   },
// };
// setTimeout(object.logMessage, 1000); // log undefined

// it will output undefined

//   10.
// const object = {
//   who: "World",
//   greet() {
//     return `Hello, ${this.who}!`;
//   },
//   farewell: () => {
//     return `Goodbye, ${this.who}!`;
//   },
// };
// console.log(object.greet()); // log Hello, World!
// console.log(object.farewell()); // log Goodbye, undefined!

// // it will output Hello, World!, Goodbye, undefined!

//   11.

// var length = 4;

// function callback() {
//   console.log(this.length);
// }
// const object = {
//   length: 5,
//   method(callback) {
//     callback();
//   },
// };
// object.method(callback, 1, 2); // log 4

// // it will output 4

//   12.
// const call = {
//   caller: "mom",
//   says: function () {
//     console.log(`Hey, ${this.caller} just called.`);
//   },
// };

// let newCall = call.says;

// newCall(); // log Hey, undefined just called.

// // it will output Hey, undefined just called.

//   13.
// function logThis() {
//   console.log(this);
// }

// const myObj = {
//   logThis,
// };

// myObj.logThis(); // log myObj

// // it will output myObj

//   14. +
// function logThis() {
//   console.log(this);
// }

// const myObj = {
//   foo: function () {
//     logThis();
//   },
// };

//   myObj.foo(); //log global obj

// // it will output global obj

//  15.
// const logThis = () => {
//   console.log(this);
// };

// const myObj = {
//   foo: logThis,
// };

// myObj.foo(); // log foo

// // it will output foo

//   16.
// function logThis() {
//   console.log(this);
// }

// const someObj = new logThis(); // log new logThis obj someObj

// // it will output new logThis obj someObj

///////////

// Տրված է՝

// class Person {}
// class Employee extends Person {}
// class Developer extends Employee {}
// const tom = new Developer();

// Ի՞նչ արժեք կունենան հետևյալ տողերը, ինչու՞

// Object.getPrototypeOf(tom) === Developer.prototype; // A
// Object.getPrototypeOf(tom) === Employee.prototype; // B
// Developer.isPrototypeOf(tom); // C
// Developer.prototype.isPrototypeOf(tom); // D
// Employee.prototype.isPrototypeOf(tom); // E
// Person.prototype.isPrototypeOf(tom); // F
// Object.prototype.isPrototypeOf(tom); // G

// A - true
// B - flase
// C - false
// D - true
// E - true
// F - true
// G - true

// 2. Տրված է՝
// const a = () => {};
// function B() {}

// Ի՞նչ արժեք կունենան հետևյալ տողերը, ինչու՞
// typeof a; // A
// typeof B; // A
// Object.getPrototypeOf(a); // B
// Object.getPrototypeOf(B); // B
// a.prototype; // C
// B.prototype; // C

//A - a => function
//A - B => function
//B - a => f()
//B - B => f()
//C - a => undefined
//C - B => object

// 3.

// Ինչպես է աշխատում new keyword-ը ? Ի՞նչ գործողություններ է այն կատարում։

// new keyword-ը թույլ է տալիս ստեղծել նոր օբյեկտներ կոնստրուկտոր ֆունկցիաների միջոցով,
//  կապելով դրանց հատկություններն ու մեթոդները ստեղծված օբյեկտին,
//  և վերջում վերադարձնում է այդ օբյեկտը, եթե կոնստրուկտորը չի վերադարձնում այլ օբյեկտ:

// 4.
// Թարգմանեք հետևյալ կոդը ES5-ի (օգտագործեք function-ներ class-ի փոխարեն):
// class Person {
//  constructor(name) {
//    this.name = name;
//  }

//  sayHello() {
//    console.log(`Hello from ${this.name}`);
//  }
// }

//function Person (name){
//    this.name = name;

//  this.sayHello = () => {
//    console.log(`Hello from ${this.name}`);
//  }
// }
//

// 5. Ստեղծեք object, որը չունի prototype:
//
// let obj = Object.create(null)
// obj.asd = 111
// obj.dsa = 222
//
// or
//
// let obj = {
//     asd:111,
//     dsa:222,
// }
//
// obj.__proto__ =  null

// 6.
// Ներքևում գրված կոդն աշխատում է առանց խնդիրների, սակայն այն կարելի է ավելի լավացնել (օպտիմիզացնել): Գտե՛ք “խնդիրը” և ուղղե՛ք այն։

// function Hopar(name) {
//   this.name = name;
//   this.speak = function () {
//     console.log('Speaking:', this.name);
//   }
// }

// the answer

// function Hopar(name) {
//   this.name = name;
// }

// Hopar.prototype.speak = function() {
//     console.log("Speaking:", this.name);
//   };

// const a = new Hopar('a');
// const b = new Hopar('b');

// console.log(a.speak());
// console.log(b.speak());

// Ստորև բոլոր խնդիրները գրեք և՛ class-ներով, և՛ Function Constructor-ներով

// 7.
// Ստեղծեք Airplane class / կոնստրուկտոր ֆունկցիա, որը ստանում է name արգումենտ։

//   Բոլոր airplane–ները (instance-ները) պետք է ունենան սեփական “isFlying” անունով property․ որի արժեքը նախնական “false” է
//   Բոլոր airplane-ները պետք է ունենան “takeOff()” և “land()” մեթոդներ - Երբ ինքնաթիռը օդ է բարձրանում (takeOff), “isFlying”-ը պետք է դառնա true - Երբ ինքնաթիռը վայրէջք է կատարում (land), “isFlying”-ը պետք է դառնա false

// function Airplane() {
//     this.isFlying = false;
// }

// Airplane.prototype.takeOff = function (){
// this.isFlying = true;
// }
// Airplane.prototype.land = function (){
// this.isFlying = false;
// }

// 8.
// Ստեղծեք Person class / կոնստրուկտոր ֆունկցիա, որը ստանում է name և age արգումենտներ։
//   Բոլոր person-ները պետք է ունենան դատարկ զանգված (empty array)` “stomach”
//   Ավելացրեք “eat” մեթոդ՝ eat(“uteliq”). - ուտել (eat) մեթոդը պետք է “uteliq”-ը ավելացնի “stomach”-ում - ամենաշատը կարելի է ուտել 10 ուտելիք (stomach.length)
//   Ավելացրեք “clear” մեթոդ՝ clear(). - clear-ը պետք է դատարկի stomach-ի պարունակությունը

// function Person(name,age){
//     this.name = name;
//     this.age = age;
//     this.stomach = []
// }

// Person.prototype.eat = function(food){
//     if(this.stomach.length <= 10){
//         this.stomach.push(food)
//     }else{
//         console.log("stomach is full")
//     }
// }

// Person.prototype.clear = function() {
//     this.stomach = []
// }

// 9 (8.1).
// Եթե այս կետում գրենք՝
// const person1 = new Person('Person1', 14);
// console.log(person1.toString());
// Ի՞նչ կտեսնենք console-ում։ Ինչու՞։
// Գրե՛ք կոդ, որից հետո console.log(person1.toString()); արտահայտությունը console-ում կտպի տվյալ person-ի անունը և տարիքը, օր․՝ “Person1, 14”:

// Person.prototype.toString = function() {
//     return this.name + ", " + this.age
// }

// 10 (8.2):
// Ստեղծեք Baby class / կոնստրուկտոր ֆունկցիա, որը ժառանգում է Person class-ը։
//   Baby-ի կոնստրուկտորը, Person-ի հետ համեմատած, պետք է ստանա 1 ավել արգումենտ՝ “favoriteToy”։
//   Person-ի մեթոդներից բացի, Baby-ն պետք է ունենա “play()” մեթոդ, որը կանչվելուց պետք է վերադարձնի string` “Playing with x”, որտեղ x-ը favoriteToy-ն է տվյալ instance-ի համար։

// function Baby(name, age, favoriteToy) {
//     Person.call(this, name,age);
//     this.favoriteToy = favoriteToy;
// }
// Baby.prototype = Object.create(Person.prototype)
// Baby.prototype.constructor = Baby

// Baby.prototype.play = function () {
//     return `Playing with ${this.favoriteToy}`
// }

///////////////////////////////////////////////////////////

// What will be the output, why ?

// 1.

// console.log(10);

// setTimeout(function () {
//   console.log(20);
// }, 1000);

// setTimeout(function () {
//   console.log(30);
// }, 0);

// console.log(40);

// it will output 10, 40, 30, 20
// first it will output 10 and 40 because it’s a regular synchronous call
// then it will output 30 because it’s a macrotask and interval less than in 20
// and in the end 20

// 2.
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve("success");
// });

// promise1.then(() => {
//   console.log(3);
// });

// console.log(4);

// it will output 1, 4, 3
// first it will output 1 and 4 because it’s a regular synchronous call
// then it will output 3 because .then passes through the microtask queue, and runs after the current code.

// 3.
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
// });
// promise1.then(() => {
//   console.log(3);
// });
// console.log(4);

// it will output 1, 4 because it’s a regular synchronous call and in Promise  was no call "resolve"

// 4. +
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1); // *1
//   resolve("resolve1");
// });

// const promise2 = promise1.then((res) => {
//   console.log(res); // *2
// });

// console.log("promise1:", promise1); // *3
// console.log("promise2:", promise2); // *4

// it will output 1, "promise1:" Promise { 'resolve1' }, "promise2:" Promise { <pending> }, resolve1,
// in *1 will output 1 because it’s a regular synchronous call, then in *3 it will output  "promise1:" Promise { 'resolve1' },
// because it’s also a regular synchronous call and there was call "resolve" with an argument,
// then in *4 it will output "promise2:" Promise { <pending> } because it’s also a regular synchronous call ,
// but there "then" in promise2  passes through the microtask queue and for this reason the Promise is <pending>,
// and in the end , in *2 , it will output resolve1 because .then passes through the microtask queue, and runs after the current code.

// 5.
// const fn = () => new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success");
// });

// fn().then((res) => {
//   console.log(res);
// });

// console.log(2);

// it will output 1, 2, success,
// first it will output 1 because function fn was called and it’s a regular synchronous call,
// then 2 because it’s a regular synchronous call,
// and in the end it will output success because .then passes through the microtask queue, and runs after the current code

// 6.
// console.log("start");

// setTimeout(() => {
//   console.log("setTimeout");
// });

// Promise.resolve().then(() => {
//   console.log("resolve");
// });

// console.log("end");

// it will output start, end, resolve, setTimeout,
// first it will output  start and end because it’s a regular synchronous call,
// then resolve because .then passes through the microtask queue, and runs after the current code,
// and in the end it will output setTimeout because it’s a macrotask

// 7.
// const promise = new Promise((resolve, reject) => {
//   console.log(1);

//   setTimeout(() => {
//     console.log("timerStart");

//     resolve("success");

//     console.log("timerEnd");
//   }, 0);

//   console.log(2);
// });

// promise.then((res) => {
//   console.log(res);
// });

// console.log(4);

// it will output 1, 2, 4, timerStart, timerEnd, success,
// first it will output 1, 2, 4 because it’s a regular synchronous call,
// then it will output timerStart and timerEnd because it’s a macrotask,
// and in the end it will output success because the "resolve" was called in setTimeout

// 8.

// const timer1 = setTimeout(() => {
//   console.log("timer1");

//   const timer3 = setTimeout(() => {
//     console.log("timer3");
//   }, 0);

// }, 0);

// const timer2 = setTimeout(() => {
//   console.log("timer2");
// }, 0);

// console.log("start");

// it will output start, timer1, timer2, timer3,
// first it will output start because it’s a regular synchronous call,
// then it will output timer1 and timer2 because it’s a macrotask,
// and in the end it will output timer3 because the setTimeout was called in an another setTimeout

// 9.
// const timer1 = setTimeout(() => {
//   console.log("timer1");
//   const promise1 = Promise.resolve().then(() => {
//     console.log("promise1");
//   });
// }, 0);

// const timer2 = setTimeout(() => {
//   console.log("timer2");
// }, 0);

// console.log("start");

// it will output start, timer1, promise1, timer2,
// first it will output start because it’s a regular synchronous call,
// then it will output timer1 because it’s a macrotask,
// then it will output promise1 because it was resolved in the setTimeout and .then passes through the microtask queue,
// and in the end it will output timer2 because it’s a macrotask

// 10.
// const promise1 = Promise.resolve().then(() => {
//   console.log("promise1");
//   const timer2 = setTimeout(() => {
//     console.log("timer2");
//   }, 0);
// });
// const timer1 = setTimeout(() => {
//   console.log("timer1");
//   const promise2 = Promise.resolve().then(() => {
//     console.log("promise2");
//   });
// }, 0);
// console.log("start");

// it will output start, promise1, timer1, promise2, timer2,
// first it will output start because it’s a regular synchronous call,
// then it will output promise1 because .then passes through the microtask queue,
// then promise1 put setTtimeout(in timer2) in macrotask queue
// then it will output timer1 because it’s a macrotask and first in the macrotask queue
// then timer1 put promise2 in the microtask queue
// then it will output promise2
// and in the end it will output timer2 because it’s last in the macrotask queue

// 11.
// const promise1 = new Promise((resolve, reject) => {
//   const timer1 = setTimeout(() => {
//     resolve("success");
//   }, 1000);
// });
// const promise2 = promise1.then(() => {
//   throw new Error("error!!!");
// })
// console.log("promise1", promise1);
// console.log("promise2", promise2);

// const timer2 = setTimeout(() => {
//   console.log("promise1", promise1);
//   console.log("promise2", promise2);
// }, 2000);

// it will output promise1 Promise { <pending> }, promise2 Promise { <pending> }, and then it will throw new error
// first it will output promise1 Promise { <pending> }, promise2 Promise { <pending> },
// because it’s a regular synchronous call,
// than after 1 second promise1 will resolved and after that promise2 throw new error and currnet code will stop

///////////////////////////////////////////////////////////////////////////////////

//1. Write iterator function for an array that returns each value of the array when called, one element at a time

// function* retArrElem(arr){
//  for(let i = 0;i < arr.length; i++){
//      yield arr[i]
//  }
// }
// let arr = [1,2,3,4,5,6]
// let generator = retArrElem(arr)

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

//2.
// Create an iterator that returns each word from a string of words on the call of its .next method (hint: use regex!)
// Then attach it as a method to the prototype of a constructor Words. Hint: research Symbol.iterator!

// function Words(string) {
//   this.str = string.split(" ");
// }
// Words.prototype[Symbol.iterator] = function () {

//   let ind = 0;

//   return {
//     next: () => {
//       if (ind < this.str.length) {
//         return {
//           value: this.str[ind++],
//           done: false,
//         };
//       } else {
//         return {
//           done: true,
//         };
//       }
//     },
//   };
// };
// let str = new Words("Hello World, Assds");
// for (let i of str) {
//   console.log(i);
// }

// 3.
// Write a function that will console.log "hello there", or "bye",
// every three seconds depending on if the word passed into the function is 'english'.
// Do not use any type of loop constructor and only make the call to createConversation once.

// function createConversation(word) {
//   if (word == "english") {
//     setInterval(() => {
//       console.log("hello there");
//     }, 3000);
//   } else {
//     setInterval(() => {
//       console.log("bye");
//     }, 3000);
//   }
// }

// createConversation("english");

// 4.
// Write a generator function which takes 3 arguments` start, end, step, 
// and gives back values in range [start, end], incrementing by "step".

// function* rangeGenerator(start, end, step) {
//     let i = start;
//     while (i <= end) {
//       yield i;
//       i += step;
//     }
//   }
//
//   const range = rangeGenerator(1, 10, 2);  
//   for (let value of range) {
//     console.log(value);
//   }

// 5. Write a function which takes an array as argument and removes duplicates from that array

// function remDuplic(arr){
//   let newSet = new Set(arr)
//   let newArr = []
//   for(let i of newSet.values()){
//     newArr.push(i)
//   }
//   return newArr
// }

// let arr = [1,1,1,2,2,2,4,4,3,4,4,5,3,3,3,2,2]

// console.log(remDuplic(arr));

// Ex: [1, 2, 2, 3] --> [1, 2, 3]
// [1, 1, 1] --> [1]

// 6.
//  Write a function which takes an array with length "n" as argument and swaps 1st and nth, 2nd and (n-1)th and so on items.

// function swapsArrItems(arr, n){
//   let newArr = [...arr];
//   for(let i = 0; i < n / 2;i++){
//     let helperProp = newArr[i];
//     newArr[i] = newArr[n - i - 1];
//     newArr[n - i - 1] = helperProp;
//   }
//   return newArr;
// }

// let arr = [1,2,3,4,5,6];

// console.log(swapsArrItems(arr, 7), arr);

//7. what will be the output, why ?
// async function getData() {
//   return await Promise.resolve("I made it!");
// }

// const data = getData();
// console.log(data);

// it will output Promise { <pending> } 
// When getData() is called, it returns a promise immediately because it is an async function. 
// However, the await inside getData does not affect the function's return value — it only delays the resolution within the function.
// Since getData() is asynchronous, const data = getData(); will assign a pending Promise to data,
//  not the resolved value of "I made it!".



// 8. what will be the output, why ?
// const myPromise = () => Promise.resolve("I have resolved!");

// function firstFunction() {
//   myPromise().then((res) => console.log(1, res));
//   console.log("first");
// }

// async function secondFunction() {
//   console.log(2, await myPromise());
//   console.log("second");
// }

// firstFunction();
// secondFunction();

// it will output first, 1 I have resolved!, 2 I have resolved!, second because in firstFunction for Promise it use .then and it
// go in macrotask queue and first it will output "first" , then 1 I have resolved!
// in secondFunction for Promise it use async function and await keyword wich pause until the following asynchronous operation is run
// and then it run the rest code 
