/*3) Use this array that contains a list of some countries names
   const countries = [ "Portugal", "France", "Egypt", "Ethiopia", "Canada", "England" ];
   Your task is to find the index of country "France" and use that index to remove the 
   item from the array. Then create a new array called eCountries that should
    contain only countries starting with the letter "E"Loop through the 
    eCountries array and console log each country with its index 
    (e.g. England country is at index x) */





let countries=['portugar','france','egypt','ethiopia','canada','england'];
var x=countries.indexOf('france');
console.log(x);

const removeElement=countries.splice(2,2);
console.log('arry after remove ellement :', removeElement)

/*const ecou=countries.filter(function(value){
    return value==;
});
console.log(ecou)*/

let eCountries=['england','Ethiopia','Egypt','Ecuador'];
for(var x=0; x<eCountries.length; x++){
    console.log(eCountries[x]+ " country is at index " + x);
}
/* eCountries.forEach(eCountries=>{
    console.log(eCountries + 'country is at index');
}) */
