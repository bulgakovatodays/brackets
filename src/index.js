module.exports = function check(str, config) {
 // console.log('Length of string is ' + str.length);
 // console.log('Length of argument is ' + config.length);

  function checkString() {
  for (let i = 0; i < str.length; i++){
 //   console.log('Interation #' + (i + 1));
    let check = config[i];
 //   console.log('Word for check ' + check);
    checkStr = String(check).replace(',', '');
 //   console.log('StringWord is ' + checkStr);
 //   console.log(str.length);
 //   console.log(str.includes(checkStr));
    str = str.replace(checkStr, '');
 //   console.log('New string is "' + str + '"');
    }
  }
    for (let i = 0; i < str.length; i++){
      //console.log('Interation #' + (i + 1));
      checkString()
      checkString()
    }
   
    for (let i = 0; i < str.length; i++){
      //console.log('Check: ' + (i + 1));
      checkString()
      checkString()
    }

 
  if (str === '') {
    return(true);
  } else {
    return(false);
  }
}
