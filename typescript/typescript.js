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
//Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
var sizeName2 = Size.Small;
