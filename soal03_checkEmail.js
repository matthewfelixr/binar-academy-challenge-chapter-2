/*Challenge 2 Soal 3*/

function checkEmail(email) {
    if (email == null) { //check if the param is null
        return ('ERROR : Empty Parameter') //return error 
    } else // if not null
    {
        //Pattern to check email
        const regex = new RegExp(/\S+@\S+co+(m|.+[a-z]{2,3})/g);
        //regex pattern= (string without space + @ + string without pattern + co+(m or . + any lowcase (min 2 max 3)))

        //Conditional to check is email is valid
        let result = regex.test(email) //returning is Valid or Invalid based on result (true or false)
        if (result) {
            return 'VALID'
        } else {
            return 'INVALID'
        }
    }
}

console.log(checkEmail('apranata@binar.co.id')) //valid
console.log(checkEmail('apranata@binar.com')) //valid
console.log(checkEmail('apranata@binar')) //invalid
console.log(checkEmail('apranata')) //error
console.log(checkEmail(3322)) //error
console.log(checkEmail()); //eror