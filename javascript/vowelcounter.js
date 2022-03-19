function countervowel(arr){
    let countervowel=0;
    arr.split("");
    for(var i=0; i<arr.length; i++){
        switch(arr[i]){
            case "a":
                countervowel++;
                break;
                case "i":
                    countervowel++;
                    break;
                    case "e":
                        countervowel++;
                        break;
                        case "u":
                            countervowel++;
                            break;
                            case "o":
                                countervowel++;
                                break;
        }
    }
    return countervowel;

}
console.log(countervowel("amagambo"));