function vowel(str){
   var vowelCounter=0;
   const arr=str.split("");
   for(let i=0; i<arr.length; i++){
       switch(arr[i]){
           case "a":
            vowelCounter ++;  
            break;
            case "i":
            vowelCounter ++;  
            break;
            case "u":
            vowelCounter ++;  
            break;
            case "o":
            vowelCounter ++;  
            break;
            case "e":
            vowelCounter ++;  
            break;
       }

   }
   return vowelCounter
}
console.log(vowel("abana bamama"));
