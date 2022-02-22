var tagline = "anurudh hello moto";

var count = 0;

if (tagline.length > 0) {
  for(var i = 0; i < tagline.length; i++) {
    if(tagline[i] == " ") {
      count++;
    }
  }
  console.log((count+1) + " words");
} else {
  console.log(0 + " words");
}



console.log(" ");
console.log(" *********** ");
console.log(" ");


var name = "hello moto";
var lower = "abcdefghijklmnopqrstuvwxyz ";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
var output = "";

for(var i = 0; i < name.length; i++) {
   
  for (var j = 0; j < lower.length; j++) {
    if(lower[j] == name[i]) {
      output = output + upper[j];
    }
  }
}

console.log(output);



console.log(" ");
console.log(" *********** ");
console.log(" ");



var names = ["Anurudh", "Hello", "Moto", "Priyanka", "Suzuka"];
var total_char = 0;

for(var i = 0; i < names.length; i++) {
  var name = names[i];
  total_char = total_char + name.length;
}

console.log(total_char);