// let dan const

let isi = "ini isi saya";
isi = "ini isi yang sudah diubah";

const permanen = "isi ini gabisa diubah";
// permanen = "Saya coba ngubah" //ini akan error karena mengganti nilai

console.log(permanen);

let nama = "Asep";
let umur = 40;
let statusNikah = true;
let hobi = ["mancing", "masak", "berenang"];
let pendidikan = {
  instansi: "Universitas Jakarta",
  jurusan: "Teknik Informatika",
  semester: 2,
  ipk: {
    semester1: 3.5,
    semester2: 3.3,
  },
};

// concat operator
let output = "Hallo nama saya " + nama + ", Umur saya adalah " + umur;
let template = `Hallo nama saya ${nama}, umur saya adalah ${umur}, saya kuliah jurusan 
${pendidikan.jurusan}, saya semester ${pendidikan.semester} dengan IPK ${pendidikan.ipk.semester2}`;

console.log(template);

let angka1 = 20;
let angka2 = 30;
let angka3 = "20";

console.log(typeof angka1);
console.log(angka1 * angka3);

console.log(angka1 >= angka2);
console.log(angka1 == angka3);
console.log(angka1 != angka2);
console.log(angka1 === angka3);
console.log(angka1 !== angka3);

let gajian = false;
let hiling = true;
let libur = false;
let kasbon = true;

console.log(kasbon && hiling);
console.log(libur || hiling);

let nilai = 30;
if (nilai > 100) {
  console.log("Nilai tidak valid");
} else if (nilai >= 85 || nilai <= 100) {
  console.log("Predikat kamu adalah Baik Sekali");
} else if (nilai >= 75) {
  console.log("Predikat kamu adalah Baik");
} else if (nilai >= 70) {
  console.log("Predikat kamu adalah Cukup");
} else if (nilai < 70 && nilai >= 0) {
  console.log("Kamu perlu remedial");
} else {
  console.log("Input yang kamu masukan salah.");
}

let day = "senin";

switch (day.toLocaleLowerCase()) {
  case "senin":
    console.log("Hari masuk kerja");
    break;

  case "selasa":
    console.log("Masuk Kerja");
    break;

  case "rabu":
  case "kamis":
  case "jumat":
  case "sabtu":
  case "minggu":
    console.log("Hari WFH dan Libur");
    break;
  default:
    console.log("Hari tidak valid")
    break;
}

for(let i = 0; i <= 5; i++){
    console.log("Kamu sedang mengulang..." + i)
}

for(let i = 10; i >= 1; i--){
    console.log("Kamu sedang menghitung mundur..." + i)
}

// continue = melewati
// break = paksa berenti.

for(let i = 0; i <= 20; i++){
    if(i === 11){
        continue;
    }
    console.log("Kamu sedang mengulang...", i)
}

for(let i = 0; i <= 20; i++){
    if(i === 11){
        break;
    }
    console.log("Kamu sedang mengulang...", i)
}

// offline : 
// 1 - 30 => ganjil

// online : 1 - 30 = > genap

for(let i = 0; i <= 30; i++){
    if(i % 2 == 0){
        continue;
    }
    console.log("Bilangan Ganjil", i)
}

for(let i = 0; i <= 30; i++){
    if(i % 2 != 0){
        continue;
    }
    console.log("Bilangan Genap", i)
}
