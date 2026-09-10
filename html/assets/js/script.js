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
    console.log("Hari tidak valid");
    break;
}

for (let i = 0; i <= 5; i++) {
  console.log("Kamu sedang mengulang..." + i);
}

for (let i = 10; i >= 1; i--) {
  console.log("Kamu sedang menghitung mundur..." + i);
}

// continue = melewati
// break = paksa berenti.

for (let i = 0; i <= 20; i++) {
  if (i === 11) {
    continue;
  }
  console.log("Kamu sedang mengulang...", i);
}

for (let i = 0; i <= 20; i++) {
  if (i === 11) {
    break;
  }
  console.log("Kamu sedang mengulang...", i);
}

// offline :
// 1 - 30 => ganjil

// online : 1 - 30 = > genap

for (let i = 0; i <= 30; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log("Bilangan Ganjil", i);
}

for (let i = 0; i <= 30; i++) {
  if (i % 2 != 0) {
    continue;
  }
  console.log("Bilangan Genap", i);
}

let buah = ["apel", "nanas", "jeruk", "strawberry", "pisang", "salak"];

for (b = 0; b < buah.length; b++) {
  console.log("data semua buah : ", buah[b]);
}

buah.forEach((list) => console.log(list));

function auth() {
  let inputPassword = prompt("Masukan Password : ");
  let password = "belajarjs";

  while (password !== inputPassword) {
    alert("Password salah");
    inputPassword = prompt("masukan password..");
  }
  console.log("Password sesuai!");
}

// function classic
function namaFunction() {
  // block code yang mau digunakan
}

// function expression
let exFuction = function () {
  // masukan kode disini
};

let arrFunction = () => {
  // Masukan kode disini
};

function hello(nama, tempat) {
  console.log(`hallo selamat datang mas/mba ${nama} di ${tempat} `);
}

hello("asep", "IDNetworkers");

let persegiPanjang = function (panjang, lebar) {
  return panjang * lebar;
};

console.log(persegiPanjang(10, 5));

// silakan buat rumus luas segitiga menggunakan function expression a * t / 2

let segitiga = function (alas, tinggi) {
  rumus = (alas * tinggi) / 2;
  return rumus;
};
console.log(segitiga(10, 15));

let penjumlahan = (a, b) => {
  return a + b;
};

let pengurangan = (a, b) => {
  return a - b;
};

let kali = (a, b) => {
  return a * b;
};

let pembagian = (a, b) => {
  return a / b;
};

function calc() {
  let input1 = Number(prompt("masukan angka pertama"));
  let input2 = Number(prompt("masukan angka kedua"));
  let opr = prompt("masukan operator (+, -, *, /)");

  let hasil;

  if (opr === "+") {
    hasil = penjumlahan(input1, input2);
  } else if (opr === "-") {
    hasil = pengurangan(input1, input2);
  }  else if (opr === "*") {
    hasil = perkalian(input1, input2);
  } else if (opr === "/") {
    hasil = pembagian(input1, input2);
  } else {
    alert("input kurang tepat")
  }

  alert(`Hasil dari ${input1} ${opr} ${input2} adalah ${hasil} `)

}

// DOM -> Document Object Model

const title = document.getElementById('judul-halaman')
const subTitle = document.querySelector('.sub-judul')


console.log(subTitle)

title.textContent = "Ini adalah judul yang sudah diubah"
title.style.color = "#0088cc"

subTitle.classList.add('text-red')

// elemen array untuk elemen baru

buah.forEach((list) => console.log(list));

let listMobil = ['bmw', 'mercedes', 'toyota', 'suzuki', 'daihatsu']

const cars = document.getElementById('cars')

listMobil.forEach((mobil) => {
    const daftar = document.createElement("li");
    daftar.textContent = mobil

    cars.appendChild(daftar)
})

async function loadProject() {
    const url = "https://6aa261a6ccb3db9689a66bc0.mockapi.io/api-latihan/v1/project"
    const respon = await fetch(url)
    const data = await respon.json()

    console.log(data);
}



