/* TYPES */
// Union types - type OR type

// let val: number | string;

// give it a name too! ("type alias")
// type NoS = number | string;
// let val2: NoS;

// type Card = {
//   value: number;
//   suit: string;
// };

// const card: Card = {
//   value: 1,
//   suit: 'H',
// };

// const cards: Card[] = [
//   { value: 1, suit: 'H' },
//   { value: 2, suit: 'H' },
// ];

// literal type
// function contact(type: "email" | "phone") {

// }

// contact(type: "pigeon");

// Type Assertion

// const drawCanvas = document.getElementById('my_canvas'); // HTMLElement
// const drawCanvas = document.getElementById('my_canvas') as HTMLCanvasElement; // HTMLCanvasElement
// const drawCanvas = <HTMLCanvasElement>document.getElementById('my_canvas'); // HTMLCanvasElement

/* INTERFACES */
// interface Login {
//   isAdmin: boolean;
//   login: string;
// }

// interface Car {
//   make: string;
//   model: string;
// }

// interface Truck {
//   make: string;
//   wheels: number;
// }

/* Legit question: what's the difference between Type and Interface? They are very similar, but ... types can't be changed once the yare created /*

// let vehicle: Car | Truck =
//   Math.random() > 0.5
//     ? {
//         make: 'Volvo',
//         model: 'XC40',
//       }
//     : {
//         make: 'Volvo',
//         wheels: 18,
//       };

// vehicle.

// intersection types
// let vehicle: Car & Truck = {
//   make: 'Volvo',
//   model: 'XC40',
//   wheels: 4,
// };

// The never type is assignable to every type; however, no type is assignable to never (except never itself). This means you can use narrowing and rely on never turning up to do exhaustive checking in a switch statement.

// type Card = 'club' | 'heart';

// function playCard(card: Card) {
//   switch (card) {
//     case 'club': {
//       return '♣';
//     }
//     case 'heart': {
//       return '♥';
//     }
//     default: {
//       const shouldNeverHappen: never = card;
//       return shouldNeverHappen;
//     }
//   }
// }

// interface Person {
//   name: string;
// }

// interface Superhero extends Person {
//   power: string;
//   attack(value: number): void;
// }

// let batman: Superhero = {
//   name: 'Bruce',
//   power: 'rich',
//   attack(value: 10) {
//     console.log(`Batman attacks for ${value}`);
//   },
// };

// interface AddressDictionary {
//   [property: string]: {
//     houseNumber: number;
//     street: string;
//   };
// }

// interface AddressDictionary {
//   home: {
//     houseNumber: number;
//     street: string;
//   };
// }

// const a: AddressDictionary = {
//   home: {
//     houseNumber: 1,
//     street: 'Main St',
//   },
//   work: {
//     houseNumber: 2,
//     street: 'Office St',
//   },
// };

// a.home;
// a.work;

interface Person {
  readonly name: string;
}

const p: Person = {
  name: 'John',
};

p.name = 'J';
