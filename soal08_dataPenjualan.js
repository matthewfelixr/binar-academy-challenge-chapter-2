/* Chapter 2 - Soal 8 */
const dataPenjualanNovel = [{
        idProduct: 'BOOK002421',
        namaProduk: 'Pulang - Pergi',
        penulis: 'Tere Liye',
        hargaBeli: 60000,
        hargaJual: 86000,
        totalTerjual: 150,
        sisaStok: 17,
    },
    {
        idProduct: 'BOOK002351',
        namaProduk: 'Selamat Tinggal',
        penulis: 'Tere Liye',
        hargaBeli: 75000,
        hargaJual: 103000,
        totalTerjual: 171,
        sisaStok: 20,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Garis Waktu',
        penulis: 'Fiersa Besari',
        hargaBeli: 67000,
        hargaJual: 99000,
        totalTerjual: 213,
        sisaStok: 5,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Laskar Pelangi',
        penulis: 'Andrea Hirata',
        hargaBeli: 55000,
        hargaJual: 68000,
        totalTerjual: 20,
        sisaStok: 56,
    },
];

const convertToRupiah = (angka) => {
    return new Intl.NumberFormat("id-ID", { //function mengubah tiap angka menjadi currency Rupiah
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(angka);
};

const getInfoPenjualan = (dataPenjualan) => {
    if (dataPenjualan == null) return `Error: Empty parameter`; // conditional, jika dataPenjualan kosong, return error
    if (typeof dataPenjualan == "object") { //kalau dataPenjualan adalah object
        totalKeuntungan = dataPenjualan //assign totalKeuntungan didapat dari rumus v
            .map((item) => (item.hargaJual - item.hargaBeli) * item.totalTerjual)
            .reduce((prev, curr) => prev + curr, 0); //tambahkan hasil totalKeuntungan untuk tiap object novel.
        totalModal = dataPenjualan.reduce(
            (prev, curr) =>
            prev + curr.hargaBeli * (curr.totalTerjual + curr.sisaStok), //totalModal didapat dari mapping array dari rumus berikut
            0
        );
        persentaseKeuntungan = Math.round((totalKeuntungan / totalModal) * 100); //persentaseKeuntungan didapat dari totalKeuntungan / totalModal * 100, lalu dibulatkan.

        const bukuTerbanyakDijual = dataPenjualan.reduce((prev, curr) =>
            prev.totalTerjual > curr.totalTerjual ? prev : curr //bukuTerbanyakDijual, didapat dari membandingkan totalTerjual dari object novel.
        );

        const penulisTerbanyak = Array.from(
            dataPenjualan.reduce(
                (newObject, { penulis, totalTerjual }) => // menggunakan Array From, mengassign object baru, dengan pembanding penulis dan totalTerjual
                newObject.set(penulis, (newObject.get(penulis) || 0) + totalTerjual),
                new Map() //di mapping menjadi array baru
            ),
            ([penulis, totalTerjual]) => ({ penulis, totalTerjual })
        ).reduce((prev, curr) =>
            prev.totalTerjual > curr.totalTerjual ? prev : curr
        );

        return {
            totalKeuntungan: convertToRupiah(totalKeuntungan),
            totalModal: convertToRupiah(totalModal),
            persentaseKeuntungan: `${persentaseKeuntungan}%`,
            produkBukuTerlaris: bukuTerbanyakDijual.namaProduk,
            penulisTerlaris: penulisTerbanyak.penulis,
        };
    }
    return `Error: Data penjualan must array of object`;
};
console.log(getInfoPenjualan(dataPenjualanNovel));