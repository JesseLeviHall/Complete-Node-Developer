
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

//Enum
enum Size { Small = 1, Medium = 2, Large = 3}
let sizeName: string = Size[2];
let sizeName2: number = Size.Small;
