/* Chapter 2 Soal 5*/

function getSplitName(personName) {

    let person = { //assign object person
        firstName: "null", //karena akan dibagi menjadi 3, object punya 3 atribut, first,middle,last Name, semua di assign null.
        middleName: "null",
        lastName: "null"
    };

    if (typeof personName == 'string') //check apabila personName adalah string
    {
        const splitName = personName.split(" ") //buat variable baru untuk memisahkan string menjadi array, ditandai dengan spasi
        switch (splitName.length) //buat case berdasarkan berapa banyak kata di array splitName
        {
            case 1:
                person.firstName = splitName[0]; //case 1 kata: kata pertama di assign ke person.firstName
                break;
            case 2:
                person.firstName = splitName[0]; //case 2 kata: kata pertama di assign ke person.firstName
                person.lastName = splitName[1]; // kata kedua di assign ke person.lastName
                break;
            case 3:
                person.firstName = splitName[0]; //case 3 kata: kata pertama di assign ke person.firstName
                person.middleName = splitName[1]; // kata kedua di assign ke person.middleName
                person.lastName = splitName[2]; // kata ketiga di assign ke person.lastName
                break;
            default: //case default: case tanpa kondisi, diluar kondisi akan mengeluarkan kalimat dibawah
                return "This Function Won't Work with Names More Than 3 words"
                break;
        }
        return person; //mengembalikan data object person

    } else {
        return "Invalid Parameter" //kalau parameter kosong, diberi error Invalid Parameter
    }
}

console.log(getSplitName("Aldi Daniela Pranata"))
console.log(getSplitName("Dwi Kuncoro"))
console.log(getSplitName("Aurora"))
console.log(getSplitName("Aurora Aureliya Sukma Darma"))
console.log(getSplitName(0))