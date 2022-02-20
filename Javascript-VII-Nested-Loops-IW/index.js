for(var i = 1; i <= 12; i++) {
    var days = 31;
    if (i == 2) {
      days = 28;
    } else if ((i == 4) || (i == 6) || (i == 9) || (i == 11)) {
      days = 30;
    }
    
    console.log("============");
    for (var j = 1; j <= days; j++) {
      console.log(j + "-" + i);
    }
    console.log("============");
  }
  
  
  console.log("============");
  console.log("============");
  
  
  var limit = 100;
  for(var num = 1; num <= 100; num++) {
    var div_count = 0;
    for(var i = 1; i <= num; i++) {
      if (num % i == 0) {
        div_count++;
      }
    }
    if (div_count == 2) {
      console.log(num);
    }
  }
  
  
  console.log("============");
  console.log("============");
  
  
  for(var i = 1; i <= 10; i++) {
    var output = "";
    for (var j = 1; j <= 10; j++) {
      if ((i == 1) || (i == 10)) {
        output = output + "*";
      }
      else {
        if((j==1) || (j==10)) {
          output = output + "*";
        } else {
          output = output + " ";
        }
      }
    }
    console.log(output);
  }