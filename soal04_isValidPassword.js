/* Challenge 2 Soal 4*/
/* yang ini dibuat tnpa regex. menggunakan iterasi dan nested if, juga flag untuk menandai kondisi*/
function isValidPassword(password) {
    let passChar = 0 //pointer buat melihat isi tiap element di array
    let capitalFlag = false // tanda memiliki kapital dibuat false
    let numberFlag = false // tanda memiliki angka dibuat false
    let lowcaseFlag = false // tanda memiliki lowercase dibuat false
    if (typeof password !== 'undefined') { // syarat pertama, kalau inputan terdefinisi maka lanjut
        if (password.length >= 8) //syarat kedua, jika panjang password 8 karakter atau lebih, maka
        {
            for (let i = 0; i <= password.length; i++) //iterasi dimulai dari 0, diulang sebanyak jumlah element dalam password
            {
                passChar = password.charAt(i) //dibuat pointer untuk check elemen 1-1
                if (!isNaN(passChar)) //kondisi kalau passChar di posisi i !isNan (adalah angka)
                    numberFlag = true // numberflagdibuat true
                else if (passChar == passChar.toUpperCase()) //selain angka, cek apabila passChar di i == passChar di i apabila kapital
                    capitalFlag = true // capitalFlag dibuat true
                else if (passChar == passChar.toLowerCase()) //selain angka& kapital, cek apabila passChar di i == passChar di i apabila lowcase
                    lowcaseFlag = true //lowcase flag dibuat true
            }
            if (capitalFlag && numberFlag && lowcaseFlag) //dengan capitalFlag, numberFlag,lowcaseFlag di &&
                return true //hasilnya true
            else
                return false //jika tidak false
        } else { return false }
    } else { return false }
}

// function isValidPassword(password){
//   const regex = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/g); // dibuat dengan regex
//                              //(min 1 kapital)(min 1 lowcase)(min ada angka)(minimum 8 karakter)
//   return (regex.test(password)) //mengembalikan hasil test regex dengan parameter angka
// }

console.log(isValidPassword('Meong2021')) //expected output: true
console.log(isValidPassword('meong2021')) //expected output: false
    // false karena gaada capital 
console.log(isValidPassword('@eong')) //expected output: false
    //false karena tidak ada angka dan hanya 5 karakter
console.log(isValidPassword(0)) //expected output: false
    //false karena : Karakter <8, tidak ada huruf besar, tidak ada huruf
console.log(isValidPassword()) //expected output: false
    //error karena kosong