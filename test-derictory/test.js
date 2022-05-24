// Типы данных

// Number = 5
// String = "string"
// Boolean = true / false
// null
// undefined
// Symbol
// BigInt = 1234567818838383838n
// Object

// a = 5
// let = 5
// var = 5
// const =5

// forEach() просто для перебора елементов массива, ничего не возвращает
// Map() filter()  возвращают новый массив
// const arr = [1, 2, 3, 4];
// const b = arr.map((el) => el + 1);
// const filter = arr.filter((el) => el > 3);

// const a = arr.reduce((prev, number) => prev + number);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// const likes = tweets.reduce((ollTags, tweet) => {
//   //   ollTags.push(...tweet.tags);
//   return tweet;
// });

// console.log(likes); // 32

// '', null, undefined, Nan, false,0

// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(Boolean(false));
// console.log(Boolean(0));
// console.log(Boolean([]));
// console.log(Boolean({}));

//  Замыкание
// const greetings = (name) => {
//   const message = "Hello " + name;

//   return function () {
//     console.log(message);
//   };
// };

// const sayHelloToRoman = greetings("Roman");

// sayHelloToRoman();

// const manager = () => {
//   const arr = ["react", "js"];

//   return {
//     print: () => console.log(arr),
//     add: (framework) => arr.push(framework),
//   };
// };
// const addFramework = manager();
// addFramework.print();
// addFramework.add("Node.js");
// addFramework.print();

// const fib = [1, 2, 5, 8, 13];

// for (var i = 0; i < fib.length; i++) {
//   ((j) => {
//     setTimeout(() => {
//       console.log(`Fib [${j}] = ${fib[j]}`);
//     }, 1500);
//   })(i);
// }

// test(5);
// const arr = [1, 2, 3];

// const c = arr.concat();
// c.push(5);

// console.log(c);

// Context this

// const person = {
//   surname: "Stark",
//   whatKnows: function (what, name) {
//     console.log(`What do you know about ${what}, ${name} ${this.surname} ?`);
//   },
// };
// const jon = { surname: "Snow" };
// const aria = { surname: "Stark" };

// person.whatKnows("Film", "Rob");
// person.whatKnows.call(jon, "Trip", "Jon");
// person.whatKnows.apply(jon, ["Trip", "Jon"]);
// person.whatKnows.bind(aria, "Trip", "Aria")();
// const testBind = person.whatKnows.bind(aria, "Trip", "Aria");
// testBind();

// function Cat(name, color) {
//   this.name = name;
//   this.color = color;
// }

// Cat.prototype.voice = function () {
//   console.log(`Cat ${this.name} is ${this.color} color, say myay`);
// };

// const cat = new Cat("Tom", "Red");
// console.log(Cat.prototype);
// console.log(cat);
// console.log(Cat.prototype === cat.__proto__);

// cat.voice();
