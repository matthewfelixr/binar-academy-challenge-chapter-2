/*Challenge 2 Soal 2*/

/*The goal is to check are the givenNumber ODD(mod 2 !=0) or Even(mod 2 = 0). Even tho this is the only goal,
we still have to validate and make sure if the input is a number, and we need an error
prompt for the invalid data type and undefined parameter. in this case, ill use 
nested conditional statement, for the validate, ill use typeof.*/
const checkTypeNumber = givenNumber => { //Declaring function and parameter
    if (typeof givenNumber !== 'undefined') { //First conditional, if the givenNumber IS NOT undefined, then↓
        if (typeof givenNumber == 'number') { // Second conditional, if the number IS a number, then ↓
            if (givenNumber % 2 == 0) { //if the givenNumber IS a number and resulting zero after mod by 2, then ↓
                return "GENAP" //return result
            } else { //else then resulting 0 after mod by 2 ↓
                return "GANJIL"; //return result
            }
        } else if (typeof givenNumber != 'number') { //Second Conditional,if givenNumber ISNOT a Number data type, then ↓
            return ('ERROR : Invalid data type!');
        }
    } else { //Else of the first conditional, we prompt this funny text ↓
        return 'Bro, Wheres the parameter?'
    }
}
console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());