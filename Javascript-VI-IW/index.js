console.log("Problem1 :")
console.log(" ")
var starting = 10;
var ending = 25;
while (starting <= ending) {
  console.log(starting);
  starting++;
}
console.log(" ")
console.log(" ")
console.log(" ---- ")
console.log(" ")
console.log(" ")
console.log("Problem2 :")
console.log(" ")
var limit2 = 10;
var start2 = 0;
while (start2 <= limit2) {
  if (start2 % 2 != 0) {
  console.log(start2);
  }
  start2++;
}
console.log(" ")
console.log(" ")
console.log(" ---- ")
console.log(" ")
console.log(" ")
console.log("Problem3 :")
console.log(" ")
var limit3 = 10;
var sum3 = 0;
while (limit3 > 0){
  if (limit3 % 3 == 0){
    sum3 = sum3 + limit3;
  }
  limit3--;
}
console.log(sum3);
console.log(" ")
console.log(" ")
console.log(" ---- ")
console.log(" ")
console.log(" ")
console.log("Problem4 :")
console.log(" ")
var start4 = 1;
var end4 = 100;
var sum4 = 0;
var qty4 = 0;
while(start4 <= end4) {
  if (start4 %2 == 0) {
    sum4 = sum4 + start4;
    qty4++;
  }
  start4++;
}
console.log(sum4);
console.log(qty4);
console.log(sum4/qty4);