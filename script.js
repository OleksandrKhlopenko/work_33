"use strict"


for ( let i=20; i<=30; i=i+0.5) {
  document.write(  ` ${i}, `)
}

 let dollar = 27;
 for ( let i=10; i<=100; i=i+10) {
  document.write(   ` <br> ${i * dollar}, `)
}


 let n = prompt(`enter a number`);
 if(n<=50){
for ( let i=1; i*2<=n ; i++ ) {
  document.write(   ` <br> ${i }, `)
}
  }else if(n>=50){
    for ( let i=1; i*2<=100 ; i++ ) {
     document.write(   ` <br> ${i }, `)  }
    }


    function primeNumb(num) {
      if (num > 1) {
        for (let i = 2; i < num; i++) {
          }
        return "Просте число";
      } else {
        return "Число має бути більше 1";
      }
    }
    
    document.write (`<br>${primeNumb(2)}`);

    function isPowerOfThree(num) {
      while (num % 3 == 0) {
        num /= 3;
      }
      return num == 1;
    }
    document.write (`<br>${(isPowerOfThree(81))}`);