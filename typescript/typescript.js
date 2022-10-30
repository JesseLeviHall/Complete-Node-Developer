//TYPES: 
var sum = function (a, b) {
    return a + b;
};
var answer = sum(4, 5);
//boolean 
var isCool = true;
//number
var age = 56;
//string
var eyeColor = 'brown';
var favoriteQuote = "Im not old im only ".concat(age);
//array
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
//object
var wizard = {
    a: 'Gandalf'
};
//null and undefined
var meh = undefined;
var noo = null;
//Tuple 
var basket;
basket = ['basketball', 5];
//Enum stands for 
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2]; //sizeName = Medium
var sizeName2 = Size.Small; //sizeName2 = 1
//Any - !!!!!!! BE CAREFUL
//******************************function stypes */
//void
var sing = function () {
    console.log('lalalala'); //function that returns nothing
};
//never = function never returns. a variable under typegaurd is never true
var error = function () {
    throw Error('oops');
};
var fightRobotArmy = function (robots) {
    console.log('FIGHT!');
};
