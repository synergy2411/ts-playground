// var x : string = "Some string";

// console.log(typeof x);

// x =123;

// npm install typescript -g

// Arrow functions : () =>
// - short syntax
// - no 'this' keyword

// var numbers = [1,2,3,4,5];

// ES5 ways
// var doubleValue = numbers.map(function(value){
//     return value * 2;
// })

// ES6 way
// var doubleValue = numbers.map(value => value * 2);

// console.log(doubleValue);           // [2,4,6,8,10]

// Destructuring - splitting the collection
// - Array - ordered collection
// - Objects - unordered collections

// var friends = ["foo", "bar", "baz", "bam"];

// var [f1, f2, f3, f4] = friends;

// console.log(f3);        // ?

// var draw = {
//     drawText : text => console.log("Drawing ", text),
//     drawCircle : r => console.log(Math.PI * r *r ),
//     drawRect : (w,l) => console.log(2* w * l)
// }

// var {drawRect : dr, drawText: dt, drawCircle : dc} = draw;

// dt("New Text");
// dc(5);
// drawText("Sample Text");
// drawCircle(3);

// Nested Destructuring
// var user = {
//   firstName: "Foo",
//   lastName: "Bar",
//   friends: ["bam", "baz"],
//   address: {
//     city: "Bengaluru",
//     street: "201, Main Road",
//   },
// };

// var users = [
//     {name : "foo", age : 32},
//     {name : "bar", age : 33}
// ]

// var {
//   firstName: fn,
//   lastName: ln,
//   friends: [f1, f2],
//   address: { city: ct, street: st },
// } = user;

// console.log(fn, ln, f2, ct, st);


// Block scoping - restrict the scope of variable to the nearest curly braces
//  - let
//  - const

// function demo(arr){
//     if(arr.length > 2){
//         let FLASH = "FLASHING";
//         console.log(LOAD);              // undefined - variable hoisting
//     }else{
//         let LOAD = "LOADING";
//     }
// }

// demo([1,2,3,4]);

// const USERNAME = "FOO";

// USERNAME = "Bar";

// const USER = {
//     name : "Foo"
// }

// // 
// USER = {
//     name1 : "BAZ"
// }

// // no change in reference
// USER.name = "BAR";
// USER.name1 = "BAZ";

// console.log(USER);      // ?

// Reference Types - Objects, Arrays, Functions 


// Spread & Rest Operators (...)
    // - Spread : spreads the collection
    // let names = ["foo", "bar", "baz"];
    // let friends = ["F1", "f2", ...names, "F3"];
    // let myFriends = ["F1", "f2", names, "F3"];
    // console.log(friends);           // ?
    // console.log(myFriends);           // ?

    // - Rest : creates the collection

    // function display(email, ...args){
    //     console.log(args[0]);           // ?
    // }
    // display("test@test.com", true, 32)

    // display("test@test.com", true)
    // display("test@test.com")





    // Template String Syntax - back tick (` `) ( ' ' ) ( " " )
        // - embedded variable
        //  - multiline operations

    // const username = "Foo";
    // const age = 32;

    // const str = `
    
    // Hello, I am ${username}. 
    // I'm ${age} years old!
    
    // `

    // console.log(str);





    // Classes

    import { Person, MAGIC_NUMBER, MyClass } from './person';

    class Student extends MyClass{
        // private firstName : string;
        // private lastName : string;
        // private age : number;

        // constructor(fname : string, lname: string, age : number){
        //     this.firstName = fname;
        //     this.lastName = lname;
        //     this.age = age;
        // }

        // constructor(private firstName : string, private lastName : string, private age : number){}

        constructor(private person : Person){
            super();
        }

        public getDetails() : string{
            // return this.firstName + " " + this.lastName;
            return `${this.person.firstName}, ${this.person.lastName}`;
        }
        getMyLuckyNumber(){
            return MAGIC_NUMBER;
        }
    }
    let personObj : Person = {
        firstName : "John",
        lastName : "Doe",
        isAdmin : true
    }
    let foo = new Student(personObj);
    console.log(foo.getDetails());
    console.log(foo.getMyLuckyNumber());



    // Decorators - simple functions with configurable objects
    // - Class
        // - Component -> ES6 class + @Component({})
        // - Directive -> ES6 class + @Directive({})
        // - Pipe -> ES6 class + @Pipe({})
        // - Service -> ES6 class + @Injectable({})
        // - Module -> ES6 class + @NgModule({})
    // - Method
        // - @HostListener({})
    // - Property
        // - @Input() / @Output()
    // - Parameter
        // - @Inject()



        // Type System - 
            // - void
            // - any
            // - enum


        class A{}
        class B{}
        class C{
            constructor(private a : A, private b : B){}
        }

        new C(new A(), new B());
