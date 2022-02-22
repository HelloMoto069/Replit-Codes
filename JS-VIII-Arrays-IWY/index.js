var char = "a";

var lower = ["a" , "b", "c", "d", "e", "f", "g", "h", "i", "j"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

for(var i = 0; i < lower.length; i++) {
  if(lower[i] == char) {
    console.log(upper[i]);
    break;
  }
}



console.log(" ");
console.log("***********");
console.log(" ");



var numbers = [12, 9, 4, 3, 1, 89, 46, 2];
var sum = 0;
var count = 0;
var evens = [];

for(var i = 0; i < numbers.length; i++) {
  
  if(numbers[i] % 2 == 0) {
    sum = sum + numbers[i];
    count++;
    evens.push(numbers[i]);
   
  }
}

console.log("Average - " + (sum/count));
console.log(evens);
