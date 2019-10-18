var upper = [ A, B, C, D, E, F, G, H, I , J , K , L, M, N, O , P, Q , R, S, T, U , V, W, X , Y , Z];

var lower = [ a, b, c ,d ,e , f, g , h , i , j , k, l, m, n, o, p, q, r , s, t, u, v, w, x, y, z];

var upperLower = [ a, b, c ,d ,e , f, g , h , i , j , k, l, m, n, o, p, q, r , s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I , J , K , L, M, N, O , P, Q , R, S, T, U , V, W, X , Y , Z];

var num = [0 , 1, 2, 3, 4, 5, 6, 7, 8, 9];


var spec = [~, < , @, #, "$",  % ,  ^,  &,  *,  (,  ),  _, + , -, =];

var upperNumn = [A, B, C, D, E, F, G, H, I , J , K , L, M, N, O , P, Q , R, S, T, U , V, W, X , Y , Z, 0 , 1, 2, 3, 4, 5, 6, 7, 8, 9]


var upperSpec = [A, B, C, D, E, F, G, H, I , J , K , L, M, N, O , P, Q , R, S, T, U , V, W, X , Y , Z, ~, < , @, #, "$",  % ,  ^,  &,  *,  (,  ),  _, + , -, =];

var lowerSpec = [ a, b, c ,d ,e , f, g , h , i , j , k, l, m, n, o, p, q, r , s, t, u, v, w, x, y, z , ~, < , @, #, "$",  % ,  ^,  &,  *,  (,  ),  _, + , -, =];


var numSpec = [0 , 1, 2, 3, 4, 5, 6, 7, 8, 9, ~, < , @, #, "$",  % ,  ^,  &,  *,  (,  ),  _, + , -, =];


var upperLowerSpec = [A, B, C, D, E, F, G, H, I , J , K , L, M, N, O , P, Q , R, S, T, U , V, W, X , Y , Z, ~, < , @, #, "$",  % ,  ^,  &,  *,  (,  ),  _, + , -, =, a, b, c ,d ,e , f, g , h , i , j , k, l, m, n, o, p, q, r , s, t, u, v, w, x, y, z];

var upperLowerNum = a, b, c ,d ,e , f, g , h , i , j , k, l, m, n, o, p, q, r , s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I , J , K , L, M, N, O , P, Q , R, S, T, U , V, W, X , Y , Z, 0 , 1, 2, 3, 4, 5, 6, 7, 8, 9];

var upperNumSpec = [A, B, C, D, E, F, G, H, I , J , K , L, M, N, O , P, Q , R, S, T, U , V, W, X , Y , Z, 0 , 1, 2, 3, 4, 5, 6, 7, 8, 9, ~,  < , @, #, "$",  % ,  ^,  &,  *,  (,  ),  _, + , -, =];


var lowerNumSpec = [ "a", "b", "c" , "d" ,"e" , "f", "g" , "h" , "i" , "j" , "k", "l", "m", "n", "o", "p", "q", "r" , "s", "t", "u", "v", "w", "x", "y", "z", "0" , "1", "2", "3", "4", "5", "6", "7", "8", "9", "~",  "<" , "@", "#", "$",  "%" ,  "^",  "&",  "*",  "(",  ")",  "_", "+" , "-", "="];

var upperLowerNumSpec = [  A, B, C, D, E, F, G, H, I , J , K , L, M, N, O , P, Q , R, S, T, U , V, W, X , Y , Z, a, b, c ,d ,e , f, g , h , i , j , k, l, m, n, o, p, q, r , s, t, u, v, w, x, y, z, 0 , 1, 2, 3, 4, 5, 6, 7, 8, 9, ~,  < , @, #, "$",  % ,  ^,  &,  *,  (,  ),  _, + , -, = ];

var lowerNum = [ a, b, c ,d ,e , f, g , h , i , j , k, l, m, n, o, p, q, r , s, t, u, v, w, x, y, z, 0 , 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


var charsArray = [ upper, lower, num, spec, upperLower, upperNum, upperSpec, lowerNum, lowerSpec, numSpec, upperLowerNum, upperLowerSpec, upperNumSpec, lowerNumSpec, upperLowerNumSpec];




document.getElementById("password-btn").addEventListener("click", function() {


    getPasswordOptions();

    var options = getPasswordOptions();

     alert("your password is" + genPassword(options));
  });
  
  function getPasswordOptions() {
    var length = parseInt(
      prompt("How many characters would you like your password to contain?")
    );
  
    if (isNaN(length)) {
      alert("Password length must be a number");
      return;
    }
  
    if (length < 8) {
      alert("Password length must be greater than 8");
      return;
    }
  
    if (length > 128) {
      alert("Password length must be less than 128");
      return;
    }
  
    var specialChars = confirm("Would you like to use special character?");
  
    var numericChars = confirm("Would you like to use numeric character?");
  
    var uppercaseChars = confirm("Would you like to use uppercase character?");
  
    var lowercaseChars = confirm("Would you like to use lowercase character?");
  
    if (!specialChars && !numericChars && !uppercaseChars && !lowercaseChars) {
      alert("We can't help you, you are to picky...");
      return;
    }
  
    var passwordOptions = {
      length: length,
      specialChars: specialChars,
      numericChars: numericChars,
      uppercaseChars: uppercaseChars,
      lowercaseChars: lowercaseChars
    };
    // var passwordOptions = {
    //   specialChars,
    //   numericChars,
    //   uppercaseChars,
    //   lowercaseChars
    // };
  
    return passwordOptions;
  }




  function generateRandom(max){
    return Math.floor(Math.random()*max)
  }


  function genPassword(options){

    var password;

    // 1000

if ( options["uppercaseChars"] && !options["lowercaseChars"] && !options["numericChars"] && !options["specialChars"]) {


  for (let i = 0; i < options["length"]; i++) {
    password = password + upper[generateRandom(upper.length-1)];
  
    
  }




}

//0100

else if ( !options["uppercaseChars"] && options["lowercaseChars"] && !options"[numericChars"] && !options["specialChars"){

  for (let i = 0; i < options["length"]; i++) {
    password = password + lower[generateRandom(lower.length-1)];
  
    
  }

}

//0010


else if ( !options["uppercaseChars"] && !options["lowercaseChars"] && options"[numericChars"] && !options["specialChars"){

  for (let i = 0; i < options["length"]; i++) {
    password = password + num[generateRandom(num.length-1)];
  
    
  }


  
}

//0001

else if ( !options["uppercaseChars"] && !options["lowercaseChars"] && !options"[numericChars"] && options["specialChars"){

  for (let i = 0; i < options["length"]; i++) {
    password = password + spec[generateRandom(spec.length-1)];
  
    
  }
  
}

//1100

else if ( options["uppercaseChars"] && options["lowercaseChars"] && !options"[numericChars"] && !options["specialChars"){

  for (let i = 0; i < options["length"]; i++) {
    password = password + upperLower[generateRandom(upperLower.length-1)];
  
    
  }

  
}


//1010

else if ( options["uppercaseChars"] && !options["lowercaseChars"] && options"[numericChars"] && !options["specialChars"){

  for (let i = 0; i < options["length"]; i++) {
    password = password + upperNum[generateRandom(upperNum.length-1)];
  
    
  }
  
}


//1001

else if ( options["uppercaseChars"] && !options["lowercaseChars"] && !options"[numericChars"] && options["specialChars"){

  for (let i = 0; i < options["length"]; i++) {
    password = password + upperSpec[generateRandom(upperSpec.length-1)];
  
    
  }
  
}

//0110

else if ( !options["uppercaseChars"] && options["lowercaseChars"] && options"[numericChars"] && !options["specialChars"){

  for (let i = 0; i < options["length"]; i++) {
    password = password + lowerNum[generateRandom(lowerNum.length-1)];
  
    
  }
  
}

//0101

else if ( !options["uppercaseChars"] && options["lowercaseChars"] && !options"[numericChars"] && options["specialChars"){

  for (let i = 0; i < options["length"]; i++) {
    password = password + lowerSpec[generateRandom(lowerSpec.length-1)];
  
    
  }
  
}
////////////////

//0011

else if ( !options["uppercaseChars"] && !options["lowercaseChars"] && options"[numericChars"] && options["specialChars"){

  for (let i = 0; i < options["length"]; i++) {
    password = password + numSpec[generateRandom(numSpec.length-1)];
  
    
  }
  
}

//1110

else if( options["uppercaseChars"] && options["lowercaseChars"] && options"[numericChars"] && !options["specialChars"){

  for (let i = 0; i < options["length"]; i++) {
    password = password + upperLowerNum[generateRandom(upperLowerNum.length-1)];
  
    
  }
  
}

//1101


else if ( options["uppercaseChars"] && options["lowercaseChars"] && !options"[numericChars"] && options["specialChars"){

  for (let i = 0; i < options["length"]; i++) {
    password = password + upperLowerSpec[generateRandom(upperLowerSpec.length-1)];
  
    
  }
  
}

//1011

else if( options["uppercaseChars"] && !options["lowercaseChars"] && options"[numericChars"] && options["specialChars"){

  for (let i = 0; i < options["length"]; i++) {
    password = password + upperNumSpec[generateRandom(upperNumSpec.length-1)];
  
    
  }
  
}

//0111

else if ( !options["uppercaseChars"] && options["lowercaseChars"] && options"[numericChars"] && options["specialChars"){

  for (let i = 0; i < options["length"]; i++) {
    password = password + lowerNumSpec[generateRandom(lowerNumSpec.length-1)];
  
    
  }
  
}

//11111

else if ( options["uppercaseChars"] && options["lowercaseChars"] && options"[numericChars"] && options["specialChars"){

  for (let i = 0; i < options["length"]; i++) {
    password = password + upperLowerNumSpec[generateRandom(upperLowerNumSpec.length-1)];
  
    
  }
  
}


return password;

  }


