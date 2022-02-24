function isPrime(num) {
    var factors = 0;
    for(var i = 1; i <= num; i++) {
      if (num % i == 0) {
        factors++;
      }
    }
    if (factors == 2) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log("Primes");
  var limit = 100
  for(var i=2; i <= limit; i++) {
    var p = isPrime(i);
    if(p) {
      console.log(i);
    }
  }
  
  console.log("Non-Primes");
  var limit = 100
  for(var i=2; i <= limit; i++) {
    var p = isPrime(i);
    if(!p) {
      console.log(i);
    }
  }
  
  
  
  console.log(" ");
  console.log(" *********** ");
  console.log(" ");
  
  
  
  function isSmallCase(char) {
    var lower = 'abcdefghijklmnopqrstuvwxyz';
    for(var i = 0; i < lower.length; i++) {
      if(char == lower[i]) {
        return true;
      }
    }
  
    return false;
  }
  
  console.log(isSmallCase('c'));
  
  
  
  console.log(" ");
  console.log(" *********** ");
  console.log(" ");
  
  
  
  function changeString(input, r) {
    var output = "";
    for(var i = 0; i < input.length; i++) {
      if (input[i] == " ") {
        output = output + r
      } else {
        output = output + input[i];
      }
    }
    return output;
  }
  
  console.log(changeString("A School", "-"));
  console.log(changeString("A B C D E F", "_"));
  console.log(changeString("A B C", "#"));