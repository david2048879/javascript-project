/*2) Use this array that contains string: let greeting = ['Hello', 'class',
 'world!', 'hello', 'hello'];Your task is to remove the last 2 elements of the
  array And convert that array to a string which conversion/value will be 
  stored in a variable called greetingString Also store the length of the 
  array in another variable called greetingLength */



let greeting=['hllo','class','world!','hello','hllo'];
console.log('orginal arry: ', greeting);
greeting.pop();
greeting.pop();
console.log('ofter remove two last element: ',greeting);
var greetingString= greeting.join(" ").toString();
console.log(greetingString);
var greetingLength=greeting.length;

//console.log(greeting.join(" "));
console.log('this the length of arry: ', greetingLength);
