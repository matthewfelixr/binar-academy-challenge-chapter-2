/* Challenge 2 - soal 6 */
const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8] //deklarasi array yang ingin dicari data terbesar kedua

function getAngkaTerbesarKedua(dataAngka) {
    if (typeof dataAngka !== 'undefined') { //check jika dataAngka terdifinisi
        if (dataAngka.length > 1) { //check apabbila dataAngka.length lebih besar dari 1

            const max = Math.max(...dataAngka) //mengalokasikan element terbesar ke variable max
            let secondMax = 0 // assign secondMax sebagai tempat menyimpan elemen terbesar kedua
            let diff = 0 // assign diff sebagai tempat menyimpan selisih max dengan tiap element di array
            for (let i = 0; i <= dataAngka.length; i++) //looping dari i= 0, sebanyak panjang array dataAngka
            {
                diff = max - dataAngka[i] //diff adalah max- data angka di index i
                if (diff > 0 && diff < dataAngka[i] - 1) { //conditional statement untuk cek bila diff lebih besar dari 0, dan diff bukan index di posisi sekarang
                    secondMax = dataAngka[i]
                } //assign secondMax(elemen terbbesar kedua dengan array index i )
            }
            return secondMax //mengembalikan nilai secondMax
        } else return 'Invalid Array Size' //error apabila inputan array yang tidak bisa dibandingkan/ bukan array
    } else return 'Error : Empty Parameter ' //error parameter kosong
}
console.log(getAngkaTerbesarKedua(dataAngka))
console.log(getAngkaTerbesarKedua(0))
console.log(getAngkaTerbesarKedua())