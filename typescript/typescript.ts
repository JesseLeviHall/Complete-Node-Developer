/* 
//TYPES: 

const sum = (a: number, b: number) => {
    return a + b;
}

const answer = sum(4, 5);

//boolean 
let isCool: boolean = true;

//number
let age: number = 56;

//string
let eyeColor: string = 'brown';
let favoriteQuote: string = `Im not old im only ${age}`

//array
let pets: string[] = ['cat', 'dog', 'pig'];
let pets2: Array<string> = ['lion', 'dragon', 'lizard'];

//object
let wizard: object = {
    a: 'Gandalf'
}

//null and undefined
let meh: undefined = undefined;
let noo: null = null; 


//Tuple 
let basket: [string, number];
basket = ['basketball', 5];

//Enum stands for 
enum Size { Small = 1, Medium = 2, Large = 3}
let sizeName: string = Size[2];//sizeName = Medium
let sizeName2: number = Size.Small;//sizeName2 = 1

//Any - !!!!!!! BE CAREFUL



//void
let sing = (): void => {
    console.log('lalalala'); //function that returns nothing
}

//never = function never returns. a variable under typegaurd is never true
let error = (): never => {
    throw Error('oops');
}

//interface - make sure certain object have certain property types. used alot in react, and the type keyword also works. 
interface RobotArmy {
    count: number,
    type: string,
    magic: string
}

let fightRobotArmy = (robots: RobotArmy) => { //this parameter needs  all three types. 
    console.log('FIGHT!');
}

//type assertion 
interface CatArmy {
    count: number,
    type: string,
    magic: string
}

let dog = {} as CatArmy; //this is a type assertion.
dog.count; //this is dangerous but can be utilized carefully



//function 
let fightRobotArmy2 = (robots: RobotArmy): void => {
    console.log('FIGHT!');
}

//class
class Animal {
    private sing: string = 'lalala';
    constructor(sound: string) {
        this.sing = sound;
    }

    greet() {
        return `Hello ${this.sing}`;
    }
}

 */