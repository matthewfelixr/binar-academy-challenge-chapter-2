/* Chapter 2 - Soal 7*/

const dataPenjualanPakAldi = [ //assign array of object dataPenjualanPakAldi
    {
        namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
        hargaSatuan: 760000,
        kategori: "Sepatu Sport",
        totalTerjual: 90,
    },
    {
        namaProduct: 'Sepatu Warrior Tristan Black Brown High',
        hargaSatuan: 960000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 37,
    },
    {
        namaProduct: 'Sepatu Warrior Tristan Maroon High ',
        kategori: "Sepatu Sneaker",
        hargaSatuan: 360000,
        totalTerjual: 90,
    },
    {
        namaProduct: 'Sepatu Warrior Rainbow Tosca Corduroy',
        hargaSatuan: 120000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 90,
    }
]

function hitungTotalPenjualan(dataPenjualan) {
    /*Assign totalPenjualan dengan map , totalPenjualan menjadi array baru dari dataPenjualanPakAldi
    berisikan item dengan item diperoleh dari item.totalTerjual dari array awaldan dalam pembentukan array baru, 
    digunakan reduce dengan parameter array sebelum, dan array saat ini ,digunakan operasi penambahan
    dari data sebelumnya ditambah data array sekarang, diakumulasi dan disimpan di totalPenjualan dengan
    nilai awal adalah 0. */
    const totalPenjualan = dataPenjualanPakAldi.map(item => item.totalTerjual).reduce((prev, curr) => prev + curr, 0);
    return totalPenjualan; //me return nilai totalPenjualan yang tadi sudah dihitung
}

console.log(hitungTotalPenjualan(dataPenjualanPakAldi))