// primitive types: string, number, boolean

let message: string = 'hi';
let age: number = 22;
let isAdmin: boolean = true;

// TS infers type
let firstName = 'John';

firstName = 'Jack';
firstName = 192;

// let vs const
const surname = 'Smith';
surname = 'Brown';

// any type with intelligent(?) type inference
let n; // any, top type
n = 12;
n = 'Yo';

// explicit type
let m: number;
m = 12;
m = 'yo!';

let numbers: number[] = [];
numbers.push(1);
numbers.push('hi');

// inferring works on anonymous functions too!
const characters = ['Luke', 'Leia', 'Darth Vader'];
characters.map((c) => c.toUppercase());

// tuple
let t: [string, number] = ['John', 32];
// t = [1, 2];
// t.push(1, 2, 3, 4);

// optional parameters, use '?'
let obj: { isAdmin: boolean; login: string };
obj = {
  isAdmin: false,
  login: 'admin@example.com',
};

// any - literally holds any value
let test: any;
test = 12;
test = 'john';
test = false;
