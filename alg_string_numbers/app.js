var fs = require('fs');
var text = fs.readFileSync('INPUT.txt', 'utf8');
console.log(text); // original string
var str_ln = text.length;

var length = 0;
var focus = 0;
var temp = 0;

for (var i = 0; i < str_ln; i++) {
  
  if(text[i] === '1') {
    focus = i;
    
    while(text[focus] === '1') {
      focus++;
    }
    temp = focus - i;
    
    //console.log('Temp:', temp);
    if(temp>length)
      length=temp;
    i = focus;   
  }
}

console.log('Maximum length of substring of 1: ', length); // answer


fs.writeFileSync('OUTPUT.txt', length); // write file with answer