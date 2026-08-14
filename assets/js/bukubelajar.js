let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
let currentPage = 1;
let itemsPerPage = 3; // Default number of items per page for PC
let totalPages;

let listProducts = [
{
    id: 1,
    name: 'Kelas I Tema 1 Diriku',
    image: 'assets/coverbuku/diriku.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'satu'
    },
    link: 'bukubelajar/Kelas I Tema 1 Diriku.html'
},
{
    id: 2,
    name: 'Kelas I Tema 2 Kegemaranku',
    image: 'assets/coverbuku/kegemaranku.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'satu'
    },
    link: 'bukubelajar/Kelas I Tema 2 Kegemaranku.html'
},
{
    id: 3,
    name: 'Kelas I Tema 3 Kegiatanku',
    image: 'assets/coverbuku/kegiatanku.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'satu'
    },
    link: 'bukubelajar/Kelas I Tema 3 Kegiatanku.html'
},
{
    id: 4,
    name: 'Kelas I Tema 4 Keluargaku',
    image: 'assets/coverbuku/keluargaku.jpg',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'satu'
    },
    link: 'bukubelajar/Tema 4 Keluargaku Kelas I.html'
},
{
    id: 5,
    name: 'Kelas I Tema 5 Pengalamanku',
    image: 'assets/coverbuku/pengalamanku1.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'satu'
    },
    link: 'bukubelajar/Kelas I Tema 5 Pengalamanku.html'
},
{
    id: 6,
    name: 'Kelas I Tema 6 Lingkungan Bersih, Sehat, dan Asri',
    image: 'assets/coverbuku/lingkunganbersih.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'satu'
    },
    link: 'bukubelajar/Kelas I Tema 6 Lingkungan Bersih, Sehat, dan Asri.html'
},
{
    id: 7,
    name: 'Kelas I Tema 7 Benda, Hewan, dan Tanaman di Sekitarku',
    image: 'assets/coverbuku/bendahewantanaman.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'satu'
    },
    link: 'bukubelajar/Kelas I Tema 7 Benda, Hewan, dan Tanaman di Sekitarku.html'
},
{
    id: 8,
    name: 'Kelas I Tema 8 Peristiwa Alam',
    image: 'assets/coverbuku/peristiwaalam.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'satu'
    },
    link: 'bukubelajar/Kelas I Tema 8 Peristiwa Alam.html'
},
{
    id: 9,
    name: 'Pendidikan Agama Khonghucu dan Budi Pekerti Kelas I',
    image: 'assets/coverbuku/khonghucu1.jpg',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['khonghucu'],
        kelas: 'satu'
    },
    link: 'bukubelajar/Pendidikan Agama Khonghucu dan Budi Pekerti Kelas I.html'
},
{
    id: 10,
    name: 'Pendidikan Agama Kristen dan Budi Pekerti Kelas I',
    image: 'assets/coverbuku/kristen1.jpg',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['kristen'],
        kelas: 'satu'
    },
    link: 'bukubelajar/Pendidikan Agama Kristen dan Budi Pekerti Kelas I.html'
},
{
    id: 11,
    name: 'Pendidikan Agama Hindu dan Budi Pekerti Kelas I',
    image: 'assets/coverbuku/hindu1.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['hindu'],
        kelas: 'satu'
    },
    link: 'bukubelajar/Pendidikan Agama Hindu dan Budi Pekerti Kelas I.html'
},
{
    id: 12,
    name: 'Pendidikan Agama Islam dan Budi Pekerti Kelas I',
    image: 'assets/coverbuku/islam1.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['islam'],
        kelas: 'satu'
    },
    link: 'bukubelajar/Pendidikan Agama Islam dan Budi Pekerti Kelas I.html'
},
{
    id: 13,
    name: 'Pendidikan Agama Katolik dan Budi Pekerti Kelas I',
    image: 'assets/coverbuku/katolik1.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['katolik'],
        kelas: 'satu'
    },
    link: 'bukubelajar/Pendidikan Agama Katolik dan Budi Pekerti Kelas I.html'
},
{
    id: 14,
    name: 'Pendidikan Agama Buddha dan Budi Pekerti Kelas I',
    image: 'assets/coverbuku/buddha1.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['buddha'],
        kelas: 'satu'
    },
    link: 'bukubelajar/Pendidikan Agama Buddha dan Budi Pekerti Kelas I.html'
},
{
    id: 15,
    name: 'Kelas II Tema 1 Hidup Rukun',
    image: 'assets/coverbuku/rukun.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'dua'
    },
    link: 'bukubelajar/Kelas II Tema 1 Hidup Rukun.html'
},
{
    id: 16,
    name: 'Kelas II Tema 2 Bermain di Lingkunganku',
    image: 'assets/coverbuku/bermain.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'dua'
    },
    link: 'bukubelajar/Kelas II Tema 2 Bermain di Lingkunganku.html'
},
{
    id: 17,
    name: 'Kelas II Tema 3 Tugasku Sehari-hari',
    image: 'assets/coverbuku/tugasku.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'dua'
    },
    link: 'bukubelajar/Kelas II Tema 3 Tugasku Sehari-hari.html'
},
{
    id: 18,
    name: 'Kelas II Tema 4 Hidup Bersih dan Sehat',
    image: 'assets/coverbuku/hidupbersih.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'dua'
    },
    link: 'bukubelajar/Kelas II Tema 4 Hidup Bersih dan Sehat.html'
},
{
    id: 19,
    name: 'Kelas II Tema 5 Pengalamanku',
    image: 'assets/coverbuku/pengalamanku.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'dua'
    },
    link: 'bukubelajar/Kelas II Tema 5 Pengalamanku.html'
},
{
    id: 20,
    name: 'Kelas II Tema 6 Merawat Hewan dan Tumbuhan',
    image: 'assets/coverbuku/merawat.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'dua'
    },
    link: 'bukubelajar/Kelas II Tema 6 Merawat Hewan dan Tumbuhan.html'
},
{
    id: 21,
    name: 'Kelas II Tema 7 Kebersamaan',
    image: 'assets/coverbuku/kebersamaan.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'dua'
    },
    link: 'bukubelajar/Kelas II Tema 7 Kebersamaan.html'
},
{
    id: 22,
    name: 'Kelas II Tema 8 Keselamatan di Rumah dan Perjalanan',
    image: 'assets/coverbuku/keselamatan.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'dua'
    },
    link: 'bukubelajar/Kelas II Tema 8 Keselamatan di Rumah dan Perjalanan.html'
},
{
    id: 23,
    name: 'Pendidikan Agama Islam dan Budi Pekerti Kelas II',
    image: 'assets/coverbuku/islam2.jpg',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['islam'],
        kelas: 'dua'
    },
    link: 'bukubelajar/Pendidikan Agama Islam dan Budi Pekerti Kelas II.html'
},
{
    id: 24,
    name: 'Pendidikan Agama Hindu dan Budi Pekerti Kelas II',
    image: 'assets/coverbuku/hindu2.jpg',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['hindu'],
        kelas: 'dua'
    },
    link: 'bukubelajar/Pendidikan Agama Hindu dan Budi Pekerti Kelas II.html'
},
{
    id: 25,
    name: 'Pendidikan Agama Katolik dan Budi Pekerti Kelas II',
    image: 'assets/coverbuku/katolik2.jpg',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['katolik'],
        kelas: 'dua'
    },
    link: 'bukubelajar/Pendidikan Agama Katolik dan Budi Pekerti Kelas II.html'
},
{
    id: 26,
    name: 'Pendidikan Agama Khonghucu dan Budi Pekerti Kelas II',
    image: 'assets/coverbuku/khonghucu2.jpg',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['khonghucu'],
        kelas: 'dua'
    },
    link: 'bukubelajar/Pendidikan Agama Khonghucu dan Budi Pekerti Kelas II.html'
},
{
    id: 27,
    name: 'Pendidikan Agama Kristen dan Budi Pekerti Kelas II',
    image: 'assets/coverbuku/kristen2.jpg',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['kristen'],
        kelas: 'dua'
    },
    link: 'bukubelajar/Pendidikan Agama Kristen dan Budi Pekerti Kelas II.html'
},
{
    id: 28,
    name: 'Pendidikan Agama Buddha dan Budi Pekerti Kelas II',
    image: 'assets/coverbuku/buddha2.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['buddha'],
        kelas: 'dua'
    },
    link: 'bukubelajar/Pendidikan Agama Buddha dan Budi Pekerti Kelas II.html'
},
{
    id: 29,
    name: 'Kelas III Tema 1 Pertumbuhan dan Perkembangan Makhluk Hidup',
    image: 'assets/coverbuku/makhlukhidup.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'tiga'
    },
    link: 'bukubelajar/Kelas III Tema 1 Pertumbuhan dan Perkembangan Makhluk Hidup.html'
},
{
    id: 30,
    name: 'Kelas III Tema 2 Menyayangi Hewan dan Tumbuhan',
    image: 'assets/coverbuku/menyayangihewan.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'tiga'
    },
    link: 'bukubelajar/Kelas III Tema 2 Menyayangi Hewan dan Tumbuhan.html'
},
{
    id: 31,
    name: 'Kelas III Tema 3 Benda di Sekitarku',
    image: 'assets/coverbuku/bendasekitar.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'tiga'
    },
    link: 'bukubelajar/Kelas III Tema 3 Benda di Sekitarku.html'
},
{
    id: 32,
    name: 'Kelas III Tema 4 Kewajiban dan Hakku',
    image: 'assets/coverbuku/kewajiban.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'tiga'
    },
    link: 'bukubelajar/Kelas III Tema 4 Kewajiban dan Hakku.html'
},
{
    id: 33,
    name: 'Kelas III Tema 5 Cuaca',
    image: 'assets/coverbuku/cuaca.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'tiga'
    },
    link: 'bukubelajar/Kelas III Tema 5 Cuaca.html'
},
{
    id: 34,
    name: 'Kelas III Tema 6 Energi dan Perubahannya',
    image: 'assets/coverbuku/energiperubahan.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'tiga'
    },
    link: 'bukubelajar/Kelas III Tema 6 Energi dan Perubahannya.html'
},
{
    id: 35,
    name: 'Kelas III Tema 7 Perkembangan Teknologi',
    image: 'assets/coverbuku/teknologi.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'tiga'
    },
    link: 'bukubelajar/Kelas III Tema 7 Perkembangan Teknologi.html'
},
{
    id: 36,
    name: 'Kelas III Tema 8 Praja Muda Karana',
    image: 'assets/coverbuku/pramuka.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'tiga'
    },
    link: 'bukubelajar/Kelas III Tema 8 Praja Muda Karana.html'
},
{
    id: 37,
    name: 'Pendidikan Agama Hindu dan Budi Pekerti Kelas III',
    image: 'assets/coverbuku/hindu3.jpg',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['hindu'],
        kelas: 'tiga'
    },
    link: 'bukubelajar/Pendidikan Agama Hindu dan Budi Pekerti Kelas III.html'
},
{
    id: 38,
    name: 'Pendidikan Agama Islam dan Budi Pekerti Kelas III',
    image: 'assets/coverbuku/islam3.jpg',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['islam'],
        kelas: 'tiga'
    },
    link: 'bukubelajar/Pendidikan Agama Islam dan Budi Pekerti Kelas III.html'
},
{
    id: 39,
    name: 'Pendidikan Agama Kristen dan Budi Pekerti Kelas III',
    image: 'assets/coverbuku/kristen3.jpg',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['kristen'],
        kelas: 'tiga'
    },
    link: 'bukubelajar/Pendidikan Agama Kristen dan Budi Pekerti Kelas III.html'
},
{
    id: 40,
    name: 'Pendidikan Agama Khonghucu dan Budi Pekerti Kelas III',
    image: 'assets/coverbuku/khonghucu3.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['khonghucu'],
        kelas: 'tiga'
    },
    link: 'bukubelajar/Pendidikan Agama Khonghucu dan Budi Pekerti Kelas III.html'
},
{
    id: 41,
    name: 'Pendidikan Agama Katolik dan Budi Pekerti Kelas III',
    image: 'assets/coverbuku/katolik3.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['katolik'],
        kelas: 'tiga'
    },
    link: 'bukubelajar/Pendidikan Agama Katolik dan Budi Pekerti Kelas III.html'
},
{
    id: 42,
    name: 'Pendidikan Agama Buddha dan Budi Pekerti Kelas III',
    image: 'assets/coverbuku/buddha3.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['buddha'],
        kelas: 'tiga'
    },
    link: 'bukubelajar/Pendidikan Agama Buddha dan Budi Pekerti Kelas III.html'
},
{
    id: 43,
    name: 'Kelas IV Tema 1 Indahnya Kebersamaan',
    image: 'assets/coverbuku/kebersamaan.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Kelas IV Tema 1 Indahnya Kebersamaan.html'
},
{
    id: 44,
    name: 'Kelas IV Tema 2 Selalu Berhemat Energi',
    image: 'assets/coverbuku/energi.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Kelas IV Tema 2 Selalu Berhemat Energi.html'
},
{
    id: 45,
    name: 'Kelas IV Tema 3 Peduli Terhadap Makhluk Hidup',
    image: 'assets/coverbuku/peduli.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Kelas IV Tema 3 Peduli Terhadap Makhluk Hidup.html'
},
{
    id: 46,
    name: 'Kelas IV Tema 4 Berbagi Pekerjaan',
    image: 'assets/coverbuku/berbagi.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Kelas IV Tema 4 Berbagi Pekerjaan.html'
},
{
    id: 47,
    name: 'Kelas IV Tema 5 Pahlawanku',
    image: 'assets/coverbuku/pahlawanku.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Kelas IV Tema 5 Pahlawanku.html'
},
{
    id: 48,
    name: 'Kelas IV Tema 6 Cita-Citaku',
    image: 'assets/coverbuku/citacitaku.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Kelas IV Tema 6 Cita-Citaku.html'
},
{
    id: 49,
    name: 'Kelas IV Tema 7 Indahnya Keragaman di Negeriku',
    image: 'assets/coverbuku/keragaman.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Kelas IV Tema 7 Indahnya Keragaman di Negeriku.html'
},
{
    id: 50,
    name: 'Kelas IV Tema 8 Daerah Tempat Tinggalku',
    image: 'assets/coverbuku/tinggalku.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Kelas IV Tema 8 Daerah Tempat Tinggalku.html'
},
{
    id: 51,
    name: 'Kelas IV Tema 9 Kayanya Negeriku',
    image: 'assets/coverbuku/kayanya.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Kelas IV Tema 9 Kayanya Negeriku.html'
},
{
    id: 52,
    name: 'Pendidikan Agama Hindu dan Budi Pekerti Kelas IV',
    image: 'assets/coverbuku/hindu4.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['hindu'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Pendidikan Agama Hindu dan Budi Pekerti Kelas IV.html'
},
{
    id: 53,
    name: 'Pendidikan Agama Katolik dan Budi Pekerti Kelas IV',
    image: 'assets/coverbuku/katolik4.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['katolik'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Pendidikan Agama Katolik dan Budi Pekerti Kelas IV.html'
},
{
    id: 54,
    name: 'Pendidikan Agama Khonghucu dan Budi Pekerti Kelas IV',
    image: 'assets/coverbuku/khonghucu4.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['khonghucu'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Pendidikan Agama Khonghucu dan Budi Pekerti Kelas IV.html'
},
{
    id: 55,
    name: 'Pendidikan Agama Kristen dan Budi Pekerti Kelas IV',
    image: 'assets/coverbuku/kristen4.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['kristen'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Pendidikan Agama Kristen dan Budi Pekerti Kelas IV.html'
},
{
    id: 56,
    name: 'Pendidikan Agama Islam dan Budi Pekerti Kelas IV',
    image: 'assets/coverbuku/islam4.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['islam'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Pendidikan Agama Islam dan Budi Pekerti Kelas IV.html'
},
{
    id: 57,
    name: 'Pendidikan Agama Buddha dan Budi Pekerti Kelas IV',
    image: 'assets/coverbuku/buddha4.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['buddha'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Pendidikan Agama Buddha dan Budi Pekerti Kelas IV.html'
},
{
    id: 58,
    name: 'Kelas V Tema 1 Organ Gerak Hewan dan Manusia',
    image: 'assets/coverbuku/organ.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Kelas V Tema 1 Organ Gerak Hewan dan Manusia.html'
},
{
    id: 59,
    name: 'Kelas V Tema 2 Udara Bersih Bagi Kesehatan',
    image: 'assets/coverbuku/udara.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Kelas V Tema 2 Udara Bersih Bagi Kesehatan.html'
},
{
    id: 60,
    name: 'Kelas V Tema 3 Makanan Sehat',
    image: 'assets/coverbuku/makanan.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Kelas V Tema 3 Makanan Sehat.html'
},
{
    id: 61,
    name: 'Kelas V Tema 4 Sehat itu Penting',
    image: 'assets/coverbuku/sehatpenting.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Kelas V Tema 4 Sehat itu Penting.html'
},
{
    id: 62,
    name: 'Kelas V Tema 5 Ekosistem',
    image: 'assets/coverbuku/ekosistem.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Kelas V Tema 5 Ekosistem.html'
},
{
    id: 63,
    name: 'Kelas V Tema 6 Panas dan Perpindahannya',
    image: 'assets/coverbuku/panas.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Tema 6 Panas dan Perpindahannya Kelas V.html'
},
{
    id: 64,
    name: 'Kelas V Tema 7 Peristiwa Dalam Kehidupan',
    image: 'assets/coverbuku/peristiwakehidupan.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Kelas V Tema 7 Peristiwa Dalam Kehidupan.html'
},
{
    id: 65,
    name: 'Kelas V Tema 8 Lingkungan Sahabat Kita',
    image: 'assets/coverbuku/lingkungan.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Kelas V Tema 8 Lingkungan Sahabat Kita.html'
},
{
    id: 66,
    name: 'Kelas V Tema 9 Benda Benda di Sekitar Kita',
    image: 'assets/coverbuku/benda.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Kelas V Tema 9 Benda Benda di Sekitar Kita.html'
},
{
    id: 67,
    name: 'Pendidikan Agama Khonghucu dan Budi Pekerti Kelas V',
    image: 'assets/coverbuku/khonghucu5.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['khonghucu'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Pendidikan Agama Khonghucu dan Budi Pekerti Kelas V.html'
},
{
    id: 68,
    name: 'Pendidikan Agama Hindu dan Budi Pekerti Kelas V',
    image: 'assets/coverbuku/hindu5.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['hindu'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Pendidikan Agama Hindu dan Budi Pekerti Kelas V.html'
},
{
    id: 69,
    name: 'Pendidikan Agama Islam dan Budi Pekerti Kelas V',
    image: 'assets/coverbuku/islam5.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['islam'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Pendidikan Agama Islam dan Budi Pekerti Kelas V.html'
},
{
    id: 70,
    name: 'Pendidikan Agama Katolik dan Budi Pekerti Kelas V',
    image: 'assets/coverbuku/katolik5.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['katolik'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Pendidikan Agama Katolik dan Budi Pekerti Kelas V.html'
},
{
    id: 71,
    name: 'Pendidikan Agama Kristen dan Budi Pekerti Kelas V',
    image: 'assets/coverbuku/kristen5.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['kristen'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Pendidikan Agama Kristen dan Budi Pekerti Kelas V.html'
},
{
    id: 72,
    name: 'Pendidikan Agama Buddha dan Budi Pekerti Kelas V',
    image: 'assets/coverbuku/buddha5.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['buddha'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Pendidikan Agama Buddha dan Budi Pekerti Kelas V.html'
},
{
    id: 73,
    name: 'Kelas VI Tema 1 Selamatkan Makhluk Hidup',
    image: 'assets/coverbuku/makhluk.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Kelas VI Tema 1 Selamatkan Makhluk Hidup.html'
},
{
    id: 74,
    name: 'Kelas VI Tema 2 Persatuan dan Perbedaan',
    image: 'assets/coverbuku/persatuan.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Kelas VI Tema 2 Persatuan dan Perbedaan.html'
},
{
    id: 75,
    name: 'Kelas VI Tema 3 Tokoh dan Penemuan',
    image: 'assets/coverbuku/tokoh.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Kelas VI Tema 3 Tokoh dan Penemuan.html'
},
{
    id: 76,
    name: 'Kelas VI Tema 4 Globalisasi',
    image: 'assets/coverbuku/globalisasi.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Kelas VI Tema 4 Globalisasi.html'
},
{
    id: 77,
    name: 'Kelas VI Tema 5 Wirausaha',
    image: 'assets/coverbuku/wirausaha.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Kelas VI Tema 5 Wirausaha.html'
},
{
    id: 78,
    name: 'Kelas VI Tema 6 Menuju Masyarakat Sejahtera',
    image: 'assets/coverbuku/menuju.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Kelas VI Tema 6 Menuju Masyarakat Sejahtera.html'
},
{
    id: 79,
    name: 'Kelas VI Tema 7 Kepemimpinan',
    image: 'assets/coverbuku/kepemimpinan.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Kelas VI Tema 7 Kepemimpinan.html'
},
{
    id: 80,
    name: 'Kelas VI Tema 8 Bumiku',
    image: 'assets/coverbuku/bumiku.jpg',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Tema 8 Bumiku Kelas VI.html'
},
{
    id: 81,
    name: 'Kelas VI Tema 9 Menjelajah Angkasa Luar',
    image: 'assets/coverbuku/menjelajah.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Kelas VI Tema 9 Menjelajah Angkasa Luar.html'
},
{
    id: 82,
    name: 'Pendidikan Agama Hindu dan Budi Pekerti Kelas VI',
    image: 'assets/coverbuku/hindu6.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['hindu'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Pendidikan Agama Hindu dan Budi Pekerti Kelas VI.html'
},
{
    id: 83,
    name: 'Pendidikan Agama Islam dan Budi Pekerti Kelas VI',
    image: 'assets/coverbuku/islam6.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['islam'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Pendidikan Agama Islam dan Budi Pekerti Kelas VI.html'
},
{
    id: 84,
    name: 'Pendidikan Agama Katolik dan Budi Pekerti Kelas VI',
    image: 'assets/coverbuku/katolik6.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['katolik'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Pendidikan Agama Katolik dan Budi Pekerti Kelas VI.html'
},
{
    id: 85,
    name: 'Pendidikan Agama Kristen dan Budi Pekerti Kelas VI',
    image: 'assets/coverbuku/kristen6.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['kristen'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Pendidikan Agama Kristen dan Budi Pekerti Kelas VI.html'
},
{
    id: 86,
    name: 'Pendidikan Agama Khonghucu dan Budi Pekerti Kelas VI',
    image: 'assets/coverbuku/khonghucu6.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['khonghucu'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Pendidikan Agama Khonghucu dan Budi Pekerti Kelas VI.html'
},
{
    id: 87,
    name: 'Pendidikan Agama Buddha dan Budi Pekerti Kelas VI',
    image: 'assets/coverbuku/buddha6.png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['buddha'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Pendidikan Agama Buddha dan Budi Pekerti Kelas VI.html'
},
{
    id: 189,
    name: 'Buku Guru Kelas I Tema 1 Diriku',
    image: 'assets/coverbuku/diriku(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'satu'
    },
    link: 'bukubelajar/Buku Guru Kelas I Tema 1 Diriku.html'
},
{
    id: 190,
    name: 'Buku Guru Kelas I Tema 2 Kegemaranku',
    image: 'assets/coverbuku/kegemaranku(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'satu'
    },
    link: 'bukubelajar/Buku Guru Kelas I Tema 2 Kegemaranku.html'
},
{
    id: 191,
    name: 'Buku Guru Kelas I Tema 3 Kegiatanku',
    image: 'assets/coverbuku/kegiatanku(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'satu'
    },
    link: 'bukubelajar/Buku Guru Kelas I Tema 3 Kegiatanku.html'
},
{
    id: 192,
    name: 'Buku Guru Kelas I Tema 4 Keluargaku',
    image: 'assets/coverbuku/keluargaku(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'satu'
    },
    link: 'bukubelajar/Buku Guru Kelas I Tema 4 Keluargaku.html'
},
{
    id: 193,
    name: 'Buku Guru Kelas I Tema 5 Pengalamanku',
    image: 'assets/coverbuku/pengalamanku1(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'satu'
    },
    link: 'bukubelajar/Buku Guru Kelas I Tema 5 Pengalamanku.html'
},
{
    id: 194,
    name: 'Buku Guru Kelas I Tema 6 Lingkungan Bersih, Sehat, dan Asri',
    image: 'assets/coverbuku/lingkunganbersih(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'satu'
    },
    link: 'bukubelajar/Buku Guru Kelas I Tema 6 Lingkungan Bersih, Sehat, dan Asri.html'
},
{
    id: 195,
    name: 'Buku Guru Kelas I Tema 7 Benda, Hewan, dan Tanaman di Sekitarku',
    image: 'assets/coverbuku/bendahewantanaman(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'satu'
    },
    link: 'bukubelajar/Buku Guru Kelas I Tema 7 Benda, Hewan, dan Tanaman di Sekitarku.html'
},
{
    id: 196,
    name: 'Buku Guru Kelas I Tema 8 Peristiwa Alam',
    image: 'assets/coverbuku/peristiwaalam(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'satu'
    },
    link: 'bukubelajar/Buku Guru Kelas I Tema 8 Peristiwa Alam.html'
},
{
    id: 197,
    name: 'Buku Guru Pendidikan Agama Khonghucu dan Budi Pekerti Kelas I',
    image: 'assets/coverbuku/khonghucu1(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['khonghucu'],
        kelas: 'satu'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Khonghucu dan Budi Pekerti Kelas I.html'
},
{
    id: 198,
    name: 'Buku Guru Pendidikan Agama Kristen dan Budi Pekerti Kelas I',
    image: 'assets/coverbuku/kristen1(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['kristen'],
        kelas: 'satu'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Kristen dan Budi Pekerti Kelas I.html'
},
{
    id: 199,
    name: 'Buku Guru Pendidikan Agama Hindu dan Budi Pekerti Kelas I',
    image: 'assets/coverbuku/hindu1(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['hindu'],
        kelas: 'satu'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Hindu dan Budi Pekerti Kelas I.html'
},
{
    id: 200,
    name: 'Buku Guru Pendidikan Agama Islam dan Budi Pekerti Kelas I',
    image: 'assets/coverbuku/islam1(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['islam'],
        kelas: 'satu'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Islam dan Budi Pekerti Kelas I.html'
},
{
    id: 201,
    name: 'Buku Guru Pendidikan Agama Katolik dan Budi Pekerti Kelas I',
    image: 'assets/coverbuku/katolik1(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['katolik'],
        kelas: 'satu'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Katolik dan Budi Pekerti Kelas I.html'
},
{
    id: 202,
    name: 'Buku Guru Pendidikan Agama Buddha dan Budi Pekerti Kelas I',
    image: 'assets/coverbuku/buddha1(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['buddha'],
        kelas: 'satu'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Buddha dan Budi Pekerti Kelas I.html'
},
{
    id: 203,
    name: 'Buku Guru Kelas II Tema 1 Hidup Rukun',
    image: 'assets/coverbuku/rukun(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'dua'
    },
    link: 'bukubelajar/Buku Guru Kelas II Tema 1 Hidup Rukun.html'
},
{
    id: 204,
    name: 'Buku Guru Kelas II Tema 2 Bermain di Lingkunganku',
    image: 'assets/coverbuku/bermain(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'dua'
    },
    link: 'bukubelajar/Buku Guru Kelas II Tema 2 Bermain di Lingkunganku.html'
},
{
    id: 205,
    name: 'Buku Guru Kelas II Tema 3 Tugasku Sehari-hari',
    image: 'assets/coverbuku/tugasku(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'dua'
    },
    link: 'bukubelajar/Buku Guru Kelas II Tema 3 Tugasku Sehari-hari.html'
},
{
    id: 206,
    name: 'Buku Guru Kelas II Tema 4 Hidup Bersih dan Sehat',
    image: 'assets/coverbuku/hidupbersih(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'dua'
    },
    link: 'bukubelajar/Buku Guru Kelas II Tema 4 Hidup Bersih dan Sehat.html'
},
{
    id: 207,
    name: 'Buku Guru Kelas II Tema 5 Pengalamanku',
    image: 'assets/coverbuku/pengalamanku(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'dua'
    },
    link: 'bukubelajar/Buku Guru Kelas II Tema 5 Pengalamanku.html'
},
{
    id: 208,
    name: 'Buku Guru Kelas II Tema 6 Merawat Hewan dan Tumbuhan',
    image: 'assets/coverbuku/merawat(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'dua'
    },
    link: 'bukubelajar/Buku Guru Kelas II Tema 6 Merawat Hewan dan Tumbuhan.html'
},
{
    id: 209,
    name: 'Buku Guru Kelas II Tema 7 Kebersamaan',
    image: 'assets/coverbuku/kebersamaan(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'dua'
    },
    link: 'bukubelajar/Buku Guru Kelas II Tema 7 Kebersamaan.html'
},
{
    id: 210,
    name: 'Buku Guru Kelas II Tema 8 Keselamatan di Rumah dan Perjalanan',
    image: 'assets/coverbuku/keselamatan(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'dua'
    },
    link: 'bukubelajar/Buku Guru Kelas II Tema 8 Keselamatan di Rumah dan Perjalanan.html'
},
{
    id: 211,
    name: 'Buku Guru Pendidikan Agama Islam dan Budi Pekerti Kelas II',
    image: 'assets/coverbuku/islam2(guru).jpg',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['islam'],
        kelas: 'dua'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Islam dan Budi Pekerti Kelas II.html'
},
{
    id: 212,
    name: 'Buku Guru Pendidikan Agama Hindu dan Budi Pekerti Kelas II',
    image: 'assets/coverbuku/hindu2(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['hindu'],
        kelas: 'dua'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Hindu dan Budi Pekerti Kelas II.html'
},
{
    id: 213,
    name: 'Buku Guru Pendidikan Agama Katolik dan Budi Pekerti Kelas II',
    image: 'assets/coverbuku/katolik2(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['katolik'],
        kelas: 'dua'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Katolik dan Budi Pekerti Kelas II.html'
},
{
    id: 214,
    name: 'Buku Guru Pendidikan Agama Khonghucu dan Budi Pekerti Kelas II',
    image: 'assets/coverbuku/khonghucu2(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['khonghucu'],
        kelas: 'dua'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Khonghucu dan Budi Pekerti Kelas II.html'
},
{
    id: 215,
    name: 'Buku Guru Pendidikan Agama Kristen dan Budi Pekerti Kelas II',
    image: 'assets/coverbuku/kristen2(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['kristen'],
        kelas: 'dua'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Kristen dan Budi Pekerti Kelas II.html'
},
{
    id: 216,
    name: 'Buku Guru Pendidikan Agama Buddha dan Budi Pekerti Kelas II',
    image: 'assets/coverbuku/buddha2(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['buddha'],
        kelas: 'dua'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Buddha dan Budi Pekerti Kelas II.html'
},
{
    id: 217,
    name: 'Buku Guru Kelas III Tema 1 Pertumbuhan dan Perkembangan Makhluk Hidup',
    image: 'assets/coverbuku/makhlukhidup(guru).png ',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'tiga'
    },
    link: 'bukubelajar/Buku Guru Kelas III Tema 1 Pertumbuhan dan Perkembangan Makhluk Hidup.html'
},
{
    id: 218,
    name: 'Buku Guru Kelas III Tema 2 Menyayangi Hewan dan Tumbuhan',
    image: 'assets/coverbuku/menyayangihewan(guru).png ',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'tiga'
    },
    link: 'bukubelajar/Buku Guru Kelas III Tema 2 Menyayangi Hewan dan Tumbuhan.html'
},
{
    id: 219,
    name: 'Buku Guru Kelas III Tema 3 Benda di Sekitarku',
    image: 'assets/coverbuku/bendasekitar(guru).png ',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'tiga'
    },
    link: 'bukubelajar/Buku Guru Kelas III Tema 3 Benda di Sekitarku.html'
},
{
    id: 220,
    name: 'Buku Guru Kelas III Tema 4 Kewajiban dan Hakku',
    image: 'assets/coverbuku/kewajiban(guru).png ',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'tiga'
    },
    link: 'bukubelajar/Buku Guru Kelas III Tema 4 Kewajiban dan Hakku.html'
},
{
    id: 221,
    name: 'Buku Guru Kelas III Tema 5 Cuaca',
    image: 'assets/coverbuku/cuaca(guru).png ',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'tiga'
    },
    link: 'bukubelajar/Buku Guru Kelas III Tema 5 Cuaca.html'
},
{
    id: 222,
    name: 'Buku Guru Kelas III Tema 6 Energi dan Perubahannya',
    image: 'assets/coverbuku/energiperubahan(guru).png ',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'tiga'
    },
    link: 'bukubelajar/Buku Guru Kelas III Tema 6 Energi dan Perubahannya.html'
},
{
    id: 223,
    name: 'Buku Guru Kelas III Tema 7 Perkembangan Teknologi',
    image: 'assets/coverbuku/teknologi(guru).png ',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'tiga'
    },
    link: 'bukubelajar/Buku Guru Kelas III Tema 7 Perkembangan Teknologi.html'
},
{
    id: 224,
    name: 'Buku Guru Kelas III Tema 8 Praja Muda Karana',
    image: 'assets/coverbuku/pramuka(guru).png ',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'tiga'
    },
    link: 'bukubelajar/Buku Guru Kelas III Tema 8 Praja Muda Karana.html'
},
{
    id: 225,
    name: 'Buku Guru Pendidikan Agama Hindu dan Budi Pekerti Kelas III',
    image: 'assets/coverbuku/hindu3(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['hindu'],
        kelas: 'tiga'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Hindu dan Budi Pekerti Kelas III.html'
},
{
    id: 226,
    name: 'Buku Guru Pendidikan Agama Islam dan Budi Pekerti Kelas III',
    image: 'assets/coverbuku/islam3(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['islam'],
        kelas: 'tiga'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Islam dan Budi Pekerti Kelas III.html'
},
{
    id: 227,
    name: 'Buku Guru Pendidikan Agama Kristen dan Budi Pekerti Kelas III',
    image: 'assets/coverbuku/kristen3(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['kristen'],
        kelas: 'tiga'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Kristen dan Budi Pekerti Kelas III.html'
},
{
    id: 228,
    name: 'Buku Guru Pendidikan Agama Khonghucu dan Budi Pekerti Kelas III',
    image: 'assets/coverbuku/khonghucu3(guru).png ',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['khonghucu'],
        kelas: 'tiga'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Khonghucu dan Budi Pekerti Kelas III.html'
},
{
    id: 229,
    name: 'Buku Guru Pendidikan Agama Katolik dan Budi Pekerti Kelas III',
    image: 'assets/coverbuku/katolik3(guru).png ',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['katolik'],
        kelas: 'tiga'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Katolik dan Budi Pekerti Kelas III.html'
},
{
    id: 230,
    name: 'Buku Guru Pendidikan Agama Buddha dan Budi Pekerti Kelas III',
    image: 'assets/coverbuku/buddha3(guru).png ',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['buddha'],
        kelas: 'tiga'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Buddha dan Budi Pekerti Kelas III.html'
},
{
    id: 231,
    name: 'Buku Guru Kelas IV Tema 1 Indahnya Kebersamaan',
    image: 'assets/coverbuku/kebersamaan(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Buku Guru Kelas IV Tema 1 Indahnya Kebersamaan.html'
},
{
    id: 232,
    name: 'Buku Guru Kelas IV Tema 2 Selalu Berhemat Energi',
    image: 'assets/coverbuku/energi(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Buku Guru Kelas IV Tema 2 Selalu Berhemat Energi.html'
},
{
    id: 233,
    name: 'Buku Guru Kelas IV Tema 3 Peduli Terhadap Makhluk Hidup',
    image: 'assets/coverbuku/peduli(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Buku Guru Kelas IV Tema 3 Peduli Terhadap Makhluk Hidup.html'
},
{
    id: 234,
    name: 'Buku Guru Kelas IV Tema 4 Berbagi Pekerjaan',
    image: 'assets/coverbuku/berbagi(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Buku Guru Kelas IV Tema 4 Berbagi Pekerjaan.html'
},
{
    id: 235,
    name: 'Buku Guru Kelas IV Tema 5 Pahlawanku',
    image: 'assets/coverbuku/pahlawanku(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Buku Guru Kelas IV Tema 5 Pahlawanku.html'
},
{
    id: 236,
    name: 'Buku Guru Kelas IV Tema 6 Cita-Citaku',
    image: 'assets/coverbuku/citacitaku(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Buku Guru Kelas IV Tema 6 Cita-Citaku.html'
},
{
    id: 237,
    name: 'Buku Guru Kelas IV Tema 7 Indahnya Keragaman di Negeriku',
    image: 'assets/coverbuku/keragaman(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Buku Guru Kelas IV Tema 7 Indahnya Keragaman di Negeriku.html'
},
{
    id: 238,
    name: 'Buku Guru Kelas IV Tema 8 Daerah Tempat Tinggalku',
    image: 'assets/coverbuku/tinggalku(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Buku Guru Kelas IV Tema 8 Daerah Tempat Tinggalku.html'
},
{
    id: 239,
    name: 'Buku Guru Kelas IV Tema 9 Kayanya Negeriku',
    image: 'assets/coverbuku/kayanya(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Buku Guru Kelas IV Tema 9 Kayanya Negeriku.html'
},
{
    id: 240,
    name: 'Buku Guru Pendidikan Agama Hindu dan Budi Pekerti Kelas IV',
    image: 'assets/coverbuku/hindu4(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['hindu'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Hindu dan Budi Pekerti Kelas IV.html'
},
{
    id: 241,
    name: 'Buku Guru Pendidikan Agama Katolik dan Budi Pekerti Kelas IV',
    image: 'assets/coverbuku/katolik4(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['katolik'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Katolik dan Budi Pekerti Kelas IV.html'
},
{
    id: 242,
    name: 'Buku Guru Pendidikan Agama Khonghucu dan Budi Pekerti Kelas IV',
    image: 'assets/coverbuku/khonghucu4(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['khonghucu'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Khonghucu dan Budi Pekerti Kelas IV.html'
},
{
    id: 243,
    name: 'Buku Guru Pendidikan Agama Kristen dan Budi Pekerti Kelas IV',
    image: 'assets/coverbuku/kristen4(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['kristen'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Kristen dan Budi Pekerti Kelas IV.html'
},
{
    id: 244,
    name: 'Buku Guru Pendidikan Agama Islam dan Budi Pekerti Kelas IV',
    image: 'assets/coverbuku/islam4(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['islam'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Islam dan Budi Pekerti Kelas IV.html'
},
{
    id: 245,
    name: 'Buku Guru Pendidikan Agama Buddha dan Budi Pekerti Kelas IV',
    image: 'assets/coverbuku/buddha4(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['buddha'],
        kelas: 'empat'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Buddha dan Budi Pekerti Kelas IV.html'
},
{
    id: 246,
    name: 'Buku Guru Kelas V Tema 1 Organ Gerak Hewan dan Manusia',
    image: 'assets/coverbuku/organ(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Buku Guru Kelas V Tema 1 Organ Gerak Hewan dan Manusia.html'
},
{
    id: 247,
    name: 'Buku Guru Kelas V Tema 2 Udara Bersih Bagi Kesehatan',
    image: 'assets/coverbuku/udara(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Buku Guru Kelas V Tema 2 Udara Bersih Bagi Kesehatan.html'
},
{
    id: 248,
    name: 'Buku Guru Kelas V Tema 3 Makanan Sehat',
    image: 'assets/coverbuku/makanan(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Buku Guru Kelas V Tema 3 Makanan Sehat.html'
},
{
    id: 249,
    name: 'Buku Guru Kelas V Tema 4 Sehat itu Penting',
    image: 'assets/coverbuku/sehatpenting(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Buku Guru Kelas V Tema 4 Sehat itu Penting.html'
},
{
    id: 250,
    name: 'Buku Guru Kelas V Tema 5 Ekosistem',
    image: 'assets/coverbuku/ekosistem(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Buku Guru Kelas V Tema 5 Ekosistem.html'
},
{
    id: 251,
    name: 'Buku Guru Kelas V Tema 6 Panas dan Perpindahannya',
    image: 'assets/coverbuku/panas(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Buku Guru Kelas V Tema 6 Panas dan Perpindahannya.html'
},
{
    id: 252,
    name: 'Buku Guru Kelas V Tema 7 Peristiwa Dalam Kehidupan',
    image: 'assets/coverbuku/peristiwakehidupan(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Buku Guru Kelas V Tema 7 Peristiwa Dalam Kehidupan.html'
},
{
    id: 253,
    name: 'Buku Guru Kelas V Tema 8 Lingkungan Sahabat Kita',
    image: 'assets/coverbuku/lingkungan(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Buku Guru Kelas V Tema 8 Lingkungan Sahabat Kita.html'
},
{
    id: 254,
    name: 'Buku Guru Kelas V Tema 9 Benda Benda di Sekitar Kita',
    image: 'assets/coverbuku/benda(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Buku Guru Kelas V Tema 9 Benda Benda di Sekitar Kita.html'
},
{
    id: 255,
    name: 'Buku Guru Pendidikan Agama Khonghucu dan Budi Pekerti Kelas V',
    image: 'assets/coverbuku/khonghucu5(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['khonghucu'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Khonghucu dan Budi Pekerti Kelas V.html'
},
{
    id: 256,
    name: 'Buku Guru Pendidikan Agama Hindu dan Budi Pekerti Kelas V',
    image: 'assets/coverbuku/hindu5(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['hindu'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Hindu dan Budi Pekerti Kelas V.html'
},
{
    id: 257,
    name: 'Buku Guru Pendidikan Agama Islam dan Budi Pekerti Kelas V',
    image: 'assets/coverbuku/islam5(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['islam'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Islam dan Budi Pekerti Kelas V.html'
},
{
    id: 258,
    name: 'Buku Guru Pendidikan Agama Katolik dan Budi Pekerti Kelas V',
    image: 'assets/coverbuku/katolik5(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['katolik'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Katolik dan Budi Pekerti Kelas V.html'
},
{
    id: 259,
    name: 'Buku Guru Pendidikan Agama Kristen dan Budi Pekerti Kelas V',
    image: 'assets/coverbuku/kristen5(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['kristen'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Kristen dan Budi Pekerti Kelas V.html'
},
{
    id: 260,
    name: 'Buku Guru Pendidikan Agama Buddha dan Budi Pekerti Kelas V',
    image: 'assets/coverbuku/buddha5(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['buddha'],
        kelas: 'lima'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Buddha dan Budi Pekerti Kelas V.html'
},
{
    id: 261,
    name: 'Buku Guru Kelas VI Tema 1 Selamatkan Makhluk Hidup',
    image: 'assets/coverbuku/makhluk(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Buku Guru Kelas VI Tema 1 Selamatkan Makhluk Hidup.html'
},
{
    id: 262,
    name: 'Buku Guru Kelas VI Tema 2 Persatuan dan Perbedaan',
    image: 'assets/coverbuku/persatuan(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Buku Guru Kelas VI Tema 2 Persatuan dan Perbedaan.html'
},
{
    id: 263,
    name: 'Buku Guru Kelas VI Tema 3 Tokoh dan Penemuan',
    image: 'assets/coverbuku/tokoh(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Buku Guru Kelas VI Tema 3 Tokoh dan Penemuan.html'
},
{
    id: 264,
    name: 'Buku Guru Kelas VI Tema 4 Globalisasi',
    image: 'assets/coverbuku/globalisasi(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Buku Guru Kelas VI Tema 4 Globalisasi.html'
},
{
    id: 265,
    name: 'Buku Guru Kelas VI Tema 5 Wirausaha',
    image: 'assets/coverbuku/wirausaha(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Buku Guru Kelas VI Tema 5 Wirausaha.html'
},
{
    id: 266,
    name: 'Buku Guru Kelas VI Tema 6 Menuju Masyarakat Sejahtera',
    image: 'assets/coverbuku/menuju(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Buku Guru Kelas VI Tema 6 Menuju Masyarakat Sejahtera.html'
},
{
    id: 267,
    name: 'Buku Guru Kelas VI Tema 7 Kepemimpinan',
    image: 'assets/coverbuku/kepemimpinan(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Buku Guru Kelas VI Tema 7 Kepemimpinan.html'
},
{
    id: 268,
    name: 'Buku Guru Kelas VI Tema 8 Bumiku',
    image: 'assets/coverbuku/bumiku(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Buku Guru Kelas VI Tema 8 Bumiku.html'
},
{
    id: 269,
    name: 'Buku Guru Kelas VI Tema 9 Menjelajah Angkasa Luar',
    image: 'assets/coverbuku/menjelajah(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['tema'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Buku Guru Kelas VI Tema 9 Menjelajah Angkasa Luar.html'
},
{
    id: 270,
    name: 'Buku Guru Pendidikan Agama Hindu dan Budi Pekerti Kelas VI',
    image: 'assets/coverbuku/hindu6(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['hindu'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Hindu dan Budi Pekerti Kelas VI.html'
},
{
    id: 271,
    name: 'Buku Guru Pendidikan Agama Islam dan Budi Pekerti Kelas VI',
    image: 'assets/coverbuku/islam6(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['islam'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Islam dan Budi Pekerti Kelas VI.html'
},
{
    id: 272,
    name: 'Buku Guru Pendidikan Agama Katolik dan Budi Pekerti Kelas VI',
    image: 'assets/coverbuku/katolik6(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['katolik'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Katolik dan Budi Pekerti Kelas VI.html'
},
{
    id: 273,
    name: 'Buku Guru Pendidikan Agama Kristen dan Budi Pekerti Kelas VI',
    image: 'assets/coverbuku/kristen6(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['kristen'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Kristen dan Budi Pekerti Kelas VI.html'
},
{
    id: 274,
    name: 'Buku Guru Pendidikan Agama Khonghucu dan Budi Pekerti Kelas VI',
    image: 'assets/coverbuku/khonghucu6(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['khonghucu'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Khonghucu dan Budi Pekerti Kelas VI.html'
},
{
    id: 275,
    name: 'Buku Guru Pendidikan Agama Buddha dan Budi Pekerti Kelas VI',
    image: 'assets/coverbuku/buddha6(guru).png',
    nature: {
        jenjang: ['sd'],
        pelajaran: ['buddha'],
        kelas: 'enam'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Buddha dan Budi Pekerti Kelas VI.html'
},
{
    id: 88,
    name: 'Pendidikan Jasmani, Olahraga, dan Kesehatan Kelas VII',
    image: 'assets/coverbuku/pjok7.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['pjok'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Pendidikan Jasmani, Olahraga, dan Kesehatan Kelas VII.html'
},
{
    id: 89,
    name: 'Prakarya Semester 1 Kelas VII',
    image: 'assets/coverbuku/prakarya71.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['prakarya'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Prakarya Semester 1 Kelas VII.html'
},
{
    id: 90,
    name: 'Prakarya Semester 2 Kelas VII',
    image: 'assets/coverbuku/prakarya72.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['prakarya'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Prakarya Semester 2 Kelas VII.html'
},
{
    id: 91,
    name: 'Seni Budaya Kelas VII',
    image: 'assets/coverbuku/senibudaya7.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['senibudaya'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Seni Budaya Kelas VII.html'
},
{
    id: 92,
    name: 'Pendidikan Pancasila dan Kewarganegaraan Kelas VII',
    image: 'assets/coverbuku/pkn7.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['pkn'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Pendidikan Pancasila dan Kewarganegaraan Kelas VII.html'
},
{
    id: 93,
    name: 'Bahasa Inggris Kelas VII',
    image: 'assets/coverbuku/inggris7.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['inggris'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Bahasa Inggris Kelas VII.html'
},
{
    id: 94,
    name: 'Ilmu Pengetahuan Alam Semester 1 Kelas VII',
    image: 'assets/coverbuku/ipa71.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['ipa'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Ilmu Pengetahuan Alam Semester 1 Kelas VII.html'
},
{
    id: 95,
    name: 'Ilmu Pengetahuan Alam Semester 2 Kelas VII',
    image: 'assets/coverbuku/ipa72.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['ipa'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Ilmu Pengetahuan Alam Semester 2 Kelas VII.html'
},
{
    id: 96,
    name: 'Ilmu Pengetahuan Sosial Kelas VII',
    image: 'assets/coverbuku/ips7.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['ips'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Ilmu Pengetahuan Sosial Kelas VII.html'
},
{
    id: 97,
    name: 'Matematika Semester 1 Kelas VII',
    image: 'assets/coverbuku/matematika71.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['matematika'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Matematika Semester 1 Kelas VII.html'
},
{
    id: 98,
    name: 'Matematika Semester 2 Kelas VII',
    image: 'assets/coverbuku/matematika72.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['matematika'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Matematika Semester 2 Kelas VII.html'
},
{
    id: 99,
    name: 'Bahasa Indonesia Kelas VII',
    image: 'assets/coverbuku/indonesia7.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['indonesia'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Bahasa Indonesia Kelas VII.html'
},
{
    id: 100,
    name: 'Pendidikan Agama Hindu dan Budi Pekerti Kelas VII',
    image: 'assets/coverbuku/hindu7.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['hindu'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Pendidikan Agama Hindu dan Budi Pekerti Kelas VII.html'
},
{
    id: 101,
    name: 'Pendidikan Agama Katolik dan Budi Pekerti Kelas VII',
    image: 'assets/coverbuku/katolik7.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['katolik'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Pendidikan Agama Katolik dan Budi Pekerti Kelas VII.html'
},
{
    id: 102,
    name: 'Pendidikan Agama Khonghucu dan Budi Pekerti Kelas VII',
    image: 'assets/coverbuku/khonghucu7.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['khonghucu'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Pendidikan Agama Khonghucu dan Budi Pekerti Kelas VII.html'
},
{
    id: 103,
    name: 'Pendidikan Agama Kristen dan Budi Pekerti Kelas VII',
    image: 'assets/coverbuku/kristen7.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['kristen'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Pendidikan Agama Kristen dan Budi Pekerti Kelas VII.html'
},
{
    id: 104,
    name: 'Pendidikan Agama Islam dan Budi Pekerti Kelas VII',
    image: 'assets/coverbuku/islam7.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['islam'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Pendidikan Agama Islam dan Budi Pekerti Kelas VII.html'
},
{
    id: 105,
    name: 'Pendidikan Agama Buddha dan Budi Pekerti Kelas VII',
    image: 'assets/coverbuku/buddha7.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['buddha'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Pendidikan Agama Buddha dan Budi Pekerti Kelas VII.html'
},
{
    id: 106,
    name: 'Pendidikan Jasmani, Olahraga, dan Kesehatan Kelas VIII',
    image: 'assets/coverbuku/pjok8.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['pjok'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Pendidikan Jasmani, Olahraga, dan Kesehatan Kelas VIII.html'
},
{
    id: 107,
    name: 'Prakarya Semester 1 Kelas VIII',
    image: 'assets/coverbuku/prakarya81.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['prakarya'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Prakarya Semester 1 Kelas VIII.html'
},
{
    id: 108,
    name: 'Prakarya Semester 2 Kelas VIII',
    image: 'assets/coverbuku/prakarya82.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['prakarya'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Prakarya Semester 2 Kelas VIII.html'
},
{
    id: 109,
    name: 'Seni Budaya Kelas VIII',
    image: 'assets/coverbuku/senibudaya8.jpg',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['senibudaya'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Seni Budaya Kelas VIII.html'
},
{
    id: 110,
    name: 'Pendidikan Pancasila dan Kewarganegaraan Kelas VIII',
    image: 'assets/coverbuku/pkn8.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['pkn'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Pendidikan Pancasila dan Kewarganegaraan Kelas VIII.html'
},
{
    id: 111,
    name: 'Bahasa Inggris Kelas VIII',
    image: 'assets/coverbuku/inggris8.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['inggris'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Bahasa Inggris Kelas VIII.html'
},
{
    id: 112,
    name: 'Ilmu Pengetahuan Alam Semester 1 Kelas VIII',
    image: 'assets/coverbuku/ipa81.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['ipa'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Ilmu Pengetahuan Alam Semester 1 Kelas VIII.html'
},
{
    id: 113,
    name: 'Ilmu Pengetahuan Alam Semester 2 Kelas VIII',
    image: 'assets/coverbuku/ipa82.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['ipa'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Ilmu Pengetahuan Alam Semester 2 Kelas VIII.html'
},
{
    id: 114,
    name: 'Ilmu Pengetahuan Sosial Kelas VIII',
    image: 'assets/coverbuku/ips8.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['ips'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Ilmu Pengetahuan Sosial Kelas VIII.html'
},
{
    id: 115,
    name: 'Matematika Semester 1 Kelas VIII',
    image: 'assets/coverbuku/matematika81.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['matematika'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Matematika Semester 1 Kelas VIII.html'
},
{
    id: 116,
    name: 'Matematika Semester 2 Kelas VIII',
    image: 'assets/coverbuku/matematika82.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['matematika'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Matematika Semester 2 Kelas VIII.html'
},
{
    id: 117,
    name: 'Bahasa Indonesia Kelas VIII',
    image: 'assets/coverbuku/indonesia8.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['indonesia'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Bahasa Indonesia Kelas VIII.html'
},
{
    id: 118,
    name: 'Pendidikan Agama Hindu dan Budi Pekerti Kelas VIII',
    image: 'assets/coverbuku/hindu8.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['hindu'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Pendidikan Agama Hindu dan Budi Pekerti Kelas VIII.html'
},
{
    id: 119,
    name: 'Pendidikan Agama Katolik dan Budi Pekerti Kelas VIII',
    image: 'assets/coverbuku/katolik8.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['katolik'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Pendidikan Agama Katolik dan Budi Pekerti Kelas VIII.html'
},
{
    id: 120,
    name: 'Pendidikan Agama Khonghucu dan Budi Pekerti Kelas VIII',
    image: 'assets/coverbuku/khonghucu8.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['khonghucu'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Pendidikan Agama Khonghucu dan Budi Pekerti Kelas VIII.html'
},
{
    id: 121,
    name: 'Pendidikan Agama Kristen dan Budi Pekerti Kelas VIII',
    image: 'assets/coverbuku/kristen8.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['kristen'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Pendidikan Agama Kristen dan Budi Pekerti Kelas VIII.html'
},
{
    id: 122,
    name: 'Pendidikan Agama Islam dan Budi Pekerti Kelas VIII',
    image: 'assets/coverbuku/islam8.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['islam'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Pendidikan Agama Islam dan Budi Pekerti Kelas VIII.html'
},
{
    id: 123,
    name: 'Pendidikan Agama Buddha dan Budi Pekerti Kelas VIII',
    image: 'assets/coverbuku/buddha8.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['buddha'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Pendidikan Agama Buddha dan Budi Pekerti Kelas VIII.html'
},
{
    id: 124,
    name: 'Pendidikan Jasmani, Olahraga, dan Kesehatan Kelas IX',
    image: 'assets/coverbuku/pjok9.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['pjok'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Pendidikan Jasmani, Olahraga, dan Kesehatan Kelas IX.html'
},
{
    id: 125,
    name: 'Prakarya Semester 1 Kelas IX',
    image: 'assets/coverbuku/prakarya91.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['prakarya'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Prakarya Semester 1 Kelas IX.html'
},
{
    id: 126,
    name: 'Prakarya Semester 2 Kelas IX',
    image: 'assets/coverbuku/prakarya92.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['prakarya'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Prakarya Semester 2 Kelas IX.html'
},
{
    id: 127,
    name: 'Seni Budaya Kelas IX',
    image: 'assets/coverbuku/senibudaya9.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['senibudaya'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Seni Budaya Kelas IX.html'
},
{
    id: 128,
    name: 'Pendidikan Pancasila dan Kewarganegaraan Kelas IX',
    image: 'assets/coverbuku/pkn9.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['pkn'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Pendidikan Pancasila dan Kewarganegaraan Kelas IX.html'
},
{
    id: 129,
    name: 'Bahasa Inggris Kelas IX',
    image: 'assets/coverbuku/inggris9.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['inggris'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Bahasa Inggris Kelas IX.html'
},
{
    id: 130,
    name: 'Ilmu Pengetahuan Alam Semester 1 Kelas IX',
    image: 'assets/coverbuku/ipa91.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['ipa'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Ilmu Pengetahuan Alam Semester 1 Kelas IX.html'
},
{
    id: 131,
    name: 'Ilmu Pengetahuan Alam Semester 2 Kelas IX',
    image: 'assets/coverbuku/ipa92.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['ipa'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Ilmu Pengetahuan Alam Semester 2 Kelas IX.html'
},
{
    id: 132,
    name: 'Ilmu Pengetahuan Sosial Kelas IX',
    image: 'assets/coverbuku/ips9.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['ips'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Ilmu Pengetahuan Sosial Kelas IX.html'
},
{
    id: 133,
    name: 'Matematika Kelas IX',
    image: 'assets/coverbuku/matematika9.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['matematika'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Matematika Kelas IX.html'
},
{
    id: 134,
    name: 'Bahasa Indonesia Kelas IX',
    image: 'assets/coverbuku/indonesia9.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['indonesia'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Bahasa Indonesia Kelas IX.html'
},
{
    id: 135,
    name: 'Pendidikan Agama Hindu dan Budi Pekerti Kelas IX',
    image: 'assets/coverbuku/hindu9.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['hindu'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Pendidikan Agama Hindu dan Budi Pekerti Kelas IX.html'
},
{
    id: 136,
    name: 'Pendidikan Agama Katolik dan Budi Pekerti Kelas IX',
    image: 'assets/coverbuku/katolik9.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['katolik'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Pendidikan Agama Katolik dan Budi Pekerti Kelas IX.html'
},
{
    id: 137,
    name: 'Pendidikan Agama Khonghucu dan Budi Pekerti Kelas IX',
    image: 'assets/coverbuku/khonghucu9.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['khonghucu'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Pendidikan Agama Khonghucu dan Budi Pekerti Kelas IX.html'
},
{
    id: 138,
    name: 'Pendidikan Agama Kristen dan Budi Pekerti Kelas IX',
    image: 'assets/coverbuku/kristen9.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['kristen'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Pendidikan Agama Kristen dan Budi Pekerti Kelas IX.html'
},
{
    id: 139,
    name: 'Pendidikan Agama Islam dan Budi Pekerti Kelas IX',
    image: 'assets/coverbuku/islam9.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['islam'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Pendidikan Agama Islam dan Budi Pekerti Kelas IX.html'
},
{
    id: 140,
    name: 'Pendidikan Agama Buddha dan Budi Pekerti Kelas IX',
    image: 'assets/coverbuku/buddha9.png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['buddha'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Pendidikan Agama Buddha dan Budi Pekerti Kelas IX.html'
},
{
    id: 276,
    name: 'Buku Guru Pendidikan Jasmani, Olahraga, dan Kesehatan Kelas VII',
    image: 'assets/coverbuku/pjok7(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['pjok'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Jasmani, Olahraga, dan Kesehatan Kelas VII.html'
},
{
    id: 277,
    name: 'Buku Guru Prakarya Kelas VII',
    image: 'assets/coverbuku/prakarya7(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['prakarya'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Buku Guru Prakarya Kelas VII.html'
},
{
    id: 278,
    name: 'Buku Guru Seni Budaya Kelas VII',
    image: 'assets/coverbuku/senibudaya7(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['senibudaya'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Buku Guru Seni Budaya Kelas VII.html'
},
{
    id: 279,
    name: 'Buku Guru Pendidikan Pancasila dan Kewarganegaraan Kelas VII',
    image: 'assets/coverbuku/pkn7(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['pkn'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Pancasila dan Kewarganegaraan Kelas VII.html'
},
{
    id: 280,
    name: 'Buku Guru Bahasa Inggris Kelas VII',
    image: 'assets/coverbuku/inggris7(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['inggris'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Buku Guru Bahasa Inggris Kelas VII.html'
},
{
    id: 281,
    name: 'Buku Guru Ilmu Pengetahuan Alam Kelas VII',
    image: 'assets/coverbuku/ipa7(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['ipa'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Buku Guru Ilmu Pengetahuan Alam Kelas VII.html'
},
{
    id: 282,
    name: 'Buku Guru Ilmu Pengetahuan Sosial Kelas VII',
    image: 'assets/coverbuku/ips7(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['ips'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Buku Guru Ilmu Pengetahuan Sosial Kelas VII.html'
},
{
    id: 283,
    name: 'Buku Guru Matematika Kelas VII',
    image: 'assets/coverbuku/matematika7(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['matematika'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Buku Guru Matematika Kelas VII.html'
},
{
    id: 284,
    name: 'Buku Guru Bahasa Indonesia Kelas VII',
    image: 'assets/coverbuku/indonesia7(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['indonesia'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Buku Guru Bahasa Indonesia Kelas VII.html'
},
{
    id: 285,
    name: 'Buku Guru Pendidikan Agama Hindu dan Budi Pekerti Kelas VII',
    image: 'assets/coverbuku/hindu7(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['hindu'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Hindu dan Budi Pekerti Kelas VII.html'
},
{
    id: 286,
    name: 'Buku Guru Pendidikan Agama Katolik dan Budi Pekerti Kelas VII',
    image: 'assets/coverbuku/katolik7(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['katolik'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Katolik dan Budi Pekerti Kelas VII.html'
},
{
    id: 287,
    name: 'Buku Guru Pendidikan Agama Khonghucu dan Budi Pekerti Kelas VII',
    image: 'assets/coverbuku/khonghucu7(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['khonghucu'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Khonghucu dan Budi Pekerti Kelas VII.html'
},
{
    id: 288,
    name: 'Buku Guru Pendidikan Agama Kristen dan Budi Pekerti Kelas VII',
    image: 'assets/coverbuku/kristen7(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['kristen'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Kristen dan Budi Pekerti Kelas VII.html'
},
{
    id: 289,
    name: 'Buku Guru Pendidikan Agama Islam dan Budi Pekerti Kelas VII',
    image: 'assets/coverbuku/islam7(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['islam'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Islam dan Budi Pekerti Kelas VII.html'
},
{
    id: 290,
    name: 'Buku Guru Pendidikan Agama Buddha dan Budi Pekerti Kelas VII',
    image: 'assets/coverbuku/buddha7(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['buddha'],
        kelas: 'tujuh'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Buddha dan Budi Pekerti Kelas VII.html'
},
{
    id: 291,
    name: 'Buku Guru Pendidikan Jasmani, Olahraga, dan Kesehatan Kelas VIII',
    image: 'assets/coverbuku/pjok8(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['pjok'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Jasmani, Olahraga, dan Kesehatan Kelas VIII.html'
},
{
    id: 292,
    name: 'Buku Guru Prakarya Kelas VIII',
    image: 'assets/coverbuku/prakarya8(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['prakarya'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Buku Guru Prakarya Kelas VIII.html'
},
{
    id: 293,
    name: 'Buku Guru Seni Budaya Kelas VIII',
    image: 'assets/coverbuku/senibudaya8(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['senibudaya'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Buku Guru Seni Budaya Kelas VIII.html'
},
{
    id: 294,
    name: 'Buku Guru Pendidikan Pancasila dan Kewarganegaraan Kelas VIII',
    image: 'assets/coverbuku/pkn8(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['pkn'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Pancasila dan Kewarganegaraan Kelas VIII.html'
},
{
    id: 295,
    name: 'Buku Guru Bahasa Inggris Kelas VIII',
    image: 'assets/coverbuku/inggris8(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['inggris'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Buku Guru Bahasa Inggris Kelas VIII.html'
},
{
    id: 296,
    name: 'Buku Guru Ilmu Pengetahuan Alam Kelas VIII',
    image: 'assets/coverbuku/ipa8(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['ipa'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Buku Guru Ilmu Pengetahuan Alam Kelas VIII.html'
},
{
    id: 297,
    name: 'Buku Guru Ilmu Pengetahuan Sosial Kelas VIII',
    image: 'assets/coverbuku/ips8(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['ips'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Buku Guru Ilmu Pengetahuan Sosial Kelas VIII.html'
},
{
    id: 298,
    name: 'Buku Guru Matematika Kelas VIII',
    image: 'assets/coverbuku/matematika8(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['matematika'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Buku Guru Matematika Kelas VIII.html'
},
{
    id: 299,
    name: 'Buku Guru Bahasa Indonesia Kelas VIII',
    image: 'assets/coverbuku/indonesia8(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['indonesia'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Buku Guru Bahasa Indonesia Kelas VIII.html'
},
{
    id: 300,
    name: 'Buku Guru Pendidikan Agama Hindu dan Budi Pekerti Kelas VIII',
    image: 'assets/coverbuku/hindu8(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['hindu'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Hindu dan Budi Pekerti Kelas VIII.html'
},
{
    id: 301,
    name: 'Buku Guru Pendidikan Agama Katolik dan Budi Pekerti Kelas VIII',
    image: 'assets/coverbuku/katolik8(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['katolik'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Katolik dan Budi Pekerti Kelas VIII.html'
},
{
    id: 302,
    name: 'Buku Guru Pendidikan Agama Khonghucu dan Budi Pekerti Kelas VIII',
    image: 'assets/coverbuku/khonghucu8(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['khonghucu'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Khonghucu dan Budi Pekerti Kelas VIII.html'
},
{
    id: 303,
    name: 'Buku Guru Pendidikan Agama Kristen dan Budi Pekerti Kelas VIII',
    image: 'assets/coverbuku/kristen8(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['kristen'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Kristen dan Budi Pekerti Kelas VIII.html'
},
{
    id: 304,
    name: 'Buku Guru Pendidikan Agama Islam dan Budi Pekerti Kelas VIII',
    image: 'assets/coverbuku/islam8(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['islam'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Islam dan Budi Pekerti Kelas VIII.html'
},
{
    id: 305,
    name: 'Buku Guru Pendidikan Agama Buddha dan Budi Pekerti Kelas VIII',
    image: 'assets/coverbuku/buddha8(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['buddha'],
        kelas: 'delapan'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Buddha dan Budi Pekerti Kelas VIII.html'
},
{
    id: 306,
    name: 'Buku Guru Pendidikan Jasmani, Olahraga, dan Kesehatan Kelas IX',
    image: 'assets/coverbuku/pjok9(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['pjok'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Jasmani, Olahraga, dan Kesehatan Kelas IX.html'
},
{
    id: 307,
    name: 'Buku Guru Prakarya Kelas IX',
    image: 'assets/coverbuku/prakarya9(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['prakarya'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Buku Guru Prakarya Kelas IX.html'
},
{
    id: 308,
    name: 'Buku Guru Seni Budaya Kelas IX',
    image: 'assets/coverbuku/senibudaya9(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['senibudaya'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Buku Guru Seni Budaya Kelas IX.html'
},
{
    id: 309,
    name: 'Buku Guru Pendidikan Pancasila dan Kewarganegaraan Kelas IX',
    image: 'assets/coverbuku/pkn9(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['pkn'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Pancasila dan Kewarganegaraan Kelas IX.html'
},
{
    id: 310,
    name: 'Buku Guru Bahasa Inggris Kelas IX',
    image: 'assets/coverbuku/inggris9(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['inggris'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Buku Guru Bahasa Inggris Kelas IX.html'
},
{
    id: 311,
    name: 'Buku Guru Ilmu Pengetahuan Alam Kelas IX',
    image: 'assets/coverbuku/ipa9(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['ipa'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Buku Guru Ilmu Pengetahuan Alam Kelas IX.html'
},
{
    id: 312,
    name: 'Buku Guru Ilmu Pengetahuan Sosial Kelas IX',
    image: 'assets/coverbuku/ips9(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['ips'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Buku Guru Ilmu Pengetahuan Sosial Kelas IX.html'
},
{
    id: 313,
    name: 'Buku Guru Matematika Kelas IX',
    image: 'assets/coverbuku/matematika9(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['matematika'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Buku Guru Matematika Kelas IX.html'
},
{
    id: 314,
    name: 'Buku Guru Bahasa Indonesia Kelas IX',
    image: 'assets/coverbuku/indonesia9(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['indonesia'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Buku Guru Bahasa Indonesia Kelas IX.html'
},
{
    id: 315,
    name: 'Buku Guru Pendidikan Agama Hindu dan Budi Pekerti Kelas IX',
    image: 'assets/coverbuku/hindu9(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['hindu'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Hindu dan Budi Pekerti Kelas IX.html'
},
{
    id: 316,
    name: 'Buku Guru Pendidikan Agama Katolik dan Budi Pekerti Kelas IX',
    image: 'assets/coverbuku/katolik9(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['katolik'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Katolik dan Budi Pekerti Kelas IX.html'
},
{
    id: 317,
    name: 'Buku Guru Pendidikan Agama Khonghucu dan Budi Pekerti Kelas IX',
    image: 'assets/coverbuku/khonghucu9(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['khonghucu'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Khonghucu dan Budi Pekerti Kelas IX.html'
},
{
    id: 318,
    name: 'Buku Guru Pendidikan Agama Kristen dan Budi Pekerti Kelas IX',
    image: 'assets/coverbuku/kristen9(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['kristen'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Kristen dan Budi Pekerti Kelas IX.html'
},
{
    id: 319,
    name: 'Buku Guru Pendidikan Agama Islam dan Budi Pekerti Kelas IX',
    image: 'assets/coverbuku/islam9(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['islam'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Islam dan Budi Pekerti Kelas IX.html'
},
{
    id: 320,
    name: 'Buku Guru Pendidikan Agama Buddha dan Budi Pekerti Kelas IX',
    image: 'assets/coverbuku/buddha9(guru).png',
    nature: {
        jenjang: ['smp'],
        pelajaran: ['buddha'],
        kelas: 'sembilan'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Buddha dan Budi Pekerti Kelas IX.html'
},
{
    id: 141,
    name: 'Pendidikan Jasmani, Olahraga, dan Kesehatan Kelas X',
    image: 'assets/coverbuku/pjok10.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['pjok'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Pendidikan Jasmani, Olahraga, dan Kesehatan Kelas X.html'
},
{
    id: 142,
    name: 'Prakarya dan Kewirausahaan Semester 1 Kelas X',
    image: 'assets/coverbuku/prakarya101.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['prakarya'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Prakarya dan Kewirausahaan Semester 1 Kelas X.html'
},
{
    id: 143,
    name: 'Prakarya dan Kewirausahaan Semester 2 Kelas X',
    image: 'assets/coverbuku/prakarya102.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['prakarya'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Prakarya dan Kewirausahaan Semester 2 Kelas X.html'
},
{
    id: 144,
    name: 'Sejarah Indonesia Kelas X',
    image: 'assets/coverbuku/sejindo10.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['prakarya'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Sejarah Indonesia Kelas X.html'
},
{
    id: 145,
    name: 'Seni Budaya Semester 1 Kelas X',
    image: 'assets/coverbuku/senibudaya101.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['senibudaya'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Seni Budaya Semester 1 Kelas X.html'
},
{
    id: 146,
    name: 'Seni Budaya Semester 2 Kelas X',
    image: 'assets/coverbuku/senibudaya102.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['senibudaya'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Seni Budaya Semester 2 Kelas X.html'
},
{
    id: 147,
    name: 'Pendidikan Pancasila dan Kewarganegaraan Kelas X',
    image: 'assets/coverbuku/pkn10.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['pkn'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Pendidikan Pancasila dan Kewarganegaraan Kelas X.html'
},
{
    id: 148,
    name: 'Bahasa Inggris Kelas X',
    image: 'assets/coverbuku/inggris10.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['inggris'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Bahasa Inggris Kelas X.html'
},
{
    id: 149,
    name: 'Matematika Kelas X',
    image: 'assets/coverbuku/matematika10.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['matematika'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Matematika Kelas X.html'
},
{
    id: 150,
    name: 'Bahasa Indonesia Kelas X',
    image: 'assets/coverbuku/indonesia10.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['indonesia'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Bahasa Indonesia Kelas X.html'
},
{
    id: 151,
    name: 'Pendidikan Agama Hindu dan Budi Pekerti Kelas X',
    image: 'assets/coverbuku/hindu10.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['hindu'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Pendidikan Agama Hindu dan Budi Pekerti Kelas X.html'
},
{
    id: 152,
    name: 'Pendidikan Agama Katolik dan Budi Pekerti Kelas X',
    image: 'assets/coverbuku/katolik10.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['katolik'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Pendidikan Agama Katolik dan Budi Pekerti Kelas X.html'
},
{
    id: 153,
    name: 'Pendidikan Agama Khonghucu dan Budi Pekerti Kelas X',
    image: 'assets/coverbuku/khonghucu10.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['khonghucu'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Pendidikan Agama Khonghucu dan Budi Pekerti Kelas X.html'
},
{
    id: 154,
    name: 'Pendidikan Agama Kristen dan Budi Pekerti Kelas X',
    image: 'assets/coverbuku/kristen10.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['kristen'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Pendidikan Agama Kristen dan Budi Pekerti Kelas X.html'
},
{
    id: 155,
    name: 'Pendidikan Agama Islam dan Budi Pekerti Kelas X',
    image: 'assets/coverbuku/islam10.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['islam'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Pendidikan Agama Islam dan Budi Pekerti Kelas X.html'
},
{
    id: 156,
    name: 'Pendidikan Agama Buddha dan Budi Pekerti Kelas X',
    image: 'assets/coverbuku/buddha10.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['buddha'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Pendidikan Agama Buddha dan Budi Pekerti Kelas X.html'
},
{
    id: 157,
    name: 'Pendidikan Jasmani, Olahraga, dan Kesehatan Kelas XI',
    image: 'assets/coverbuku/pjok11.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['pjok'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Pendidikan Jasmani, Olahraga, dan Kesehatan Kelas XI.html'
},
{
    id: 158,
    name: 'Prakarya dan Kewirausahaan Semester 1 Kelas XI',
    image: 'assets/coverbuku/prakarya111.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['prakarya'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Prakarya dan Kewirausahaan Semester 1 Kelas XI.html'
},
{
    id: 159,
    name: 'Prakarya dan Kewirausahaan Semester 2 Kelas XI',
    image: 'assets/coverbuku/prakarya112.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['prakarya'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Prakarya dan Kewirausahaan Semester 2 Kelas XI.html'
},
{
    id: 160,
    name: 'Sejarah Indonesia Semester 1 Kelas XI',
    image: 'assets/coverbuku/sejindo111.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['prakarya'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Sejarah Indonesia Semester 1 Kelas XI.html'
},
{
    id: 161,
    name: 'Sejarah Indonesia Semester 2 Kelas XI',
    image: 'assets/coverbuku/sejindo112.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['prakarya'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Sejarah Indonesia Semester 2 Kelas XI.html'
},
{
    id: 162,
    name: 'Seni Budaya Semester 1 Kelas XI',
    image: 'assets/coverbuku/senibudaya111.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['senibudaya'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Seni Budaya Semester 1 Kelas XI.html'
},
{
    id: 163,
    name: 'Seni Budaya Semester 2 Kelas XI',
    image: 'assets/coverbuku/senibudaya112.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['senibudaya'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Seni Budaya Semester 2 Kelas XI.html'
},
{
    id: 164,
    name: 'Pendidikan Pancasila dan Kewarganegaraan Kelas XI',
    image: 'assets/coverbuku/pkn11.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['pkn'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Pendidikan Pancasila dan Kewarganegaraan Kelas XI.html'
},
{
    id: 165,
    name: 'Bahasa Inggris Kelas XI',
    image: 'assets/coverbuku/inggris11.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['inggris'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Bahasa Inggris Kelas XI.html'
},
{
    id: 166,
    name: 'Matematika Kelas XI',
    image: 'assets/coverbuku/matematika11.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['matematika'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Matematika Kelas XI.html'
},
{
    id: 167,
    name: 'Bahasa Indonesia Kelas XI',
    image: 'assets/coverbuku/indonesia11.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['indonesia'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Bahasa Indonesia Kelas XI.html'
},
{
    id: 168,
    name: 'Pendidikan Agama Hindu dan Budi Pekerti Kelas XI',
    image: 'assets/coverbuku/hindu11.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['hindu'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Pendidikan Agama Hindu dan Budi Pekerti Kelas XI.html'
},
{
    id: 169,
    name: 'Pendidikan Agama Katolik dan Budi Pekerti Kelas XI',
    image: 'assets/coverbuku/katolik11.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['katolik'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Pendidikan Agama Katolik dan Budi Pekerti Kelas XI.html'
},
{
    id: 170,
    name: 'Pendidikan Agama Khonghucu dan Budi Pekerti Kelas XI',
    image: 'assets/coverbuku/khonghucu11.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['khonghucu'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Pendidikan Agama Khonghucu dan Budi Pekerti Kelas XI.html'
},
{
    id: 171,
    name: 'Pendidikan Agama Kristen dan Budi Pekerti Kelas XI',
    image: 'assets/coverbuku/kristen11.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['kristen'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Pendidikan Agama Kristen dan Budi Pekerti Kelas XI.html'
},
{
    id: 172,
    name: 'Pendidikan Agama Islam dan Budi Pekerti Kelas XI',
    image: 'assets/coverbuku/islam11.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['islam'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Pendidikan Agama Islam dan Budi Pekerti Kelas XI.html'
},
{
    id: 173,
    name: 'Pendidikan Agama Buddha dan Budi Pekerti Kelas XI',
    image: 'assets/coverbuku/buddha11.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['buddha'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Pendidikan Agama Buddha dan Budi Pekerti Kelas XI.html'
},
{
    id: 174,
    name: 'Pendidikan Jasmani, Olahraga, dan Kesehatan Kelas XII',
    image: 'assets/coverbuku/pjok12.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['pjok'],
        kelas: 'duabelas'
    },
    link: 'bukubelajar/Pendidikan Jasmani, Olahraga, dan Kesehatan Kelas XII.html'
},
{
    id: 175,
    name: 'Prakarya dan Kewirausahaan Kelas XII',
    image: 'assets/coverbuku/prakarya12.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['prakarya'],
        kelas: 'duabelas'
    },
    link: 'bukubelajar/Prakarya dan Kewirausahaan Kelas XII.html'
},
{
    id: 176,
    name: 'Sejarah Indonesia Kelas XII',
    image: 'assets/coverbuku/sejindo12.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['prakarya'],
        kelas: 'duabelas'
    },
    link: 'bukubelajar/Sejarah Indonesia Kelas XII.html'
},
{
    id: 177,
    name: 'Seni Budaya Semester 1 Kelas XII',
    image: 'assets/coverbuku/senibudaya121.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['senibudaya'],
        kelas: 'duabelas'
    },
    link: 'bukubelajar/Seni Budaya Semester 1 Kelas XII.html'
},
{
    id: 178,
    name: 'Seni Budaya Semester 2 Kelas XII',
    image: 'assets/coverbuku/senibudaya122.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['senibudaya'],
        kelas: 'duabelas'
    },
    link: 'bukubelajar/Seni Budaya Semester 2 Kelas XII.html'
},
{
    id: 179,
    name: 'Pendidikan Pancasila dan Kewarganegaraan Kelas XII',
    image: 'assets/coverbuku/pkn12.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['pkn'],
        kelas: 'duabelas'
    },
    link: 'bukubelajar/Pendidikan Pancasila dan Kewarganegaraan Kelas XII.html'
},
{
    id: 180,
    name: 'Bahasa Inggris Kelas XII',
    image: 'assets/coverbuku/inggris12.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['inggris'],
        kelas: 'duabelas'
    },
    link: 'bukubelajar/Bahasa Inggris Kelas XII.html'
},
{
    id: 181,
    name: 'Matematika Kelas XII',
    image: 'assets/coverbuku/matematika12.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['matematika'],
        kelas: 'duabelas'
    },
    link: 'bukubelajar/Matematika Kelas XII.html'
},
{
    id: 182,
    name: 'Bahasa Indonesia Kelas XII',
    image: 'assets/coverbuku/indonesia12.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['indonesia'],
        kelas: 'duabelas'
    },
    link: 'bukubelajar/Bahasa Indonesia Kelas XII.html'
},
{
    id: 183,
    name: 'Pendidikan Agama Hindu dan Budi Pekerti Kelas XII',
    image: 'assets/coverbuku/hindu12.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['hindu'],
        kelas: 'duabelas'
    },
    link: 'bukubelajar/Pendidikan Agama Hindu dan Budi Pekerti Kelas XII.html'
},
{
    id: 184,
    name: 'Pendidikan Agama Katolik dan Budi Pekerti Kelas XII',
    image: 'assets/coverbuku/katolik12.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['katolik'],
        kelas: 'duabelas'
    },
    link: 'bukubelajar/Pendidikan Agama Katolik dan Budi Pekerti Kelas XII.html'
},
{
    id: 185,
    name: 'Pendidikan Agama Khonghucu dan Budi Pekerti Kelas XII',
    image: 'assets/coverbuku/khonghucu12.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['khonghucu'],
        kelas: 'duabelas'
    },
    link: 'bukubelajar/Pendidikan Agama Khonghucu dan Budi Pekerti Kelas XII.html'
},
{
    id: 186,
    name: 'Pendidikan Agama Kristen dan Budi Pekerti Kelas XII',
    image: 'assets/coverbuku/kristen12.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['kristen'],
        kelas: 'duabelas'
    },
    link: 'bukubelajar/Pendidikan Agama Kristen dan Budi Pekerti Kelas XII.html'
},
{
    id: 187,
    name: 'Pendidikan Agama Islam dan Budi Pekerti Kelas XII',
    image: 'assets/coverbuku/islam12.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['islam'],
        kelas: 'duabelas'
    },
    link: 'bukubelajar/Pendidikan Agama Islam dan Budi Pekerti Kelas XII.html'
},
{
    id: 188,
    name: 'Pendidikan Agama Buddha dan Budi Pekerti Kelas XII',
    image: 'assets/coverbuku/buddha12.png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['buddha'],
        kelas: 'duabelas'
    },
    link: 'bukubelajar/Pendidikan Agama Buddha dan Budi Pekerti Kelas XII.html'
},
{
    id: 321,
    name: 'Buku Guru Pendidikan Jasmani, Olahraga, dan Kesehatan Kelas X',
    image: 'assets/coverbuku/pjok10(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['pjok'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Jasmani, Olahraga, dan Kesehatan Kelas X.html'
},
{
    id: 322,
    name: 'Buku Guru Prakarya dan Kewirausahaan Kelas X',
    image: 'assets/coverbuku/prakarya10(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['prakarya'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Buku Guru Prakarya dan Kewirausahaan Kelas X.html'
},
{
    id: 323,
    name: 'Buku Guru Sejarah Indonesia Kelas X',
    image: 'assets/coverbuku/sejindo10(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['sejarah'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Buku Guru Sejarah Indonesia Kelas X.html'
},
{
    id: 324,
    name: 'Buku Guru Seni Budaya Kelas X',
    image: 'assets/coverbuku/senibudaya10(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['senibudaya'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Buku Guru Seni Budaya Kelas X.html'
},
{
    id: 325,
    name: 'Buku Guru Pendidikan Pancasila dan Kewarganegaraan Kelas X',
    image: 'assets/coverbuku/pkn10(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['pkn'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Pancasila dan Kewarganegaraan Kelas X.html'
},
{
    id: 326,
    name: 'Buku Guru Bahasa Inggris Kelas X',
    image: 'assets/coverbuku/inggris10(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['inggris'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Buku Guru Bahasa Inggris Kelas X.html'
},
{
    id: 327,
    name: 'Buku Guru Matematika Kelas X',
    image: 'assets/coverbuku/matematika10(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['matematika'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Buku Guru Matematika Kelas X.html'
},
{
    id: 328,
    name: 'Buku Guru Bahasa Indonesia Kelas X',
    image: 'assets/coverbuku/indonesia10(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['indonesia'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Buku Guru Bahasa Indonesia Kelas X.html'
},
{
    id: 329,
    name: 'Buku Guru Pendidikan Agama Hindu dan Budi Pekerti Kelas X',
    image: 'assets/coverbuku/hindu10(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['hindu'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Hindu dan Budi Pekerti Kelas X.html'
},
{
    id: 330,
    name: 'Buku Guru Pendidikan Agama Katolik dan Budi Pekerti Kelas X',
    image: 'assets/coverbuku/katolik10(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['katolik'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Katolik dan Budi Pekerti Kelas X.html'
},
{
    id: 331,
    name: 'Buku Guru Pendidikan Agama Khonghucu dan Budi Pekerti Kelas X',
    image: 'assets/coverbuku/khonghucu10(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['khonghucu'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Khonghucu dan Budi Pekerti Kelas X.html'
},
{
    id: 332,
    name: 'Buku Guru Pendidikan Agama Kristen dan Budi Pekerti Kelas X',
    image: 'assets/coverbuku/kristen10(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['kristen'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Kristen dan Budi Pekerti Kelas X.html'
},
{
    id: 333,
    name: 'Buku Guru Pendidikan Agama Islam dan Budi Pekerti Kelas X',
    image: 'assets/coverbuku/islam10(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['islam'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Islam dan Budi Pekerti Kelas X.html'
},
{
    id: 334,
    name: 'Buku Guru Pendidikan Agama Buddha dan Budi Pekerti Kelas X',
    image: 'assets/coverbuku/buddha10(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['buddha'],
        kelas: 'sepuluh'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Buddha dan Budi Pekerti Kelas X.html'
},
{
    id: 335,
    name: 'Buku Guru Pendidikan Jasmani, Olahraga, dan Kesehatan Kelas XI',
    image: 'assets/coverbuku/pjok11(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['pjok'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Jasmani, Olahraga, dan Kesehatan Kelas XI.html'
},
{
    id: 336,
    name: 'Buku Guru Prakarya dan Kewirausahaan Kelas XI',
    image: 'assets/coverbuku/prakarya11(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['prakarya'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Buku Guru Prakarya dan Kewirausahaan Kelas XI.html'
},
{
    id: 337,
    name: 'Buku Guru Sejarah Indonesia Kelas XI',
    image: 'assets/coverbuku/sejindo11(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['sejarah'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Buku Guru Sejarah Indonesia Kelas XI.html'
},
{
    id: 338,
    name: 'Buku Guru Seni Budaya Kelas XI',
    image: 'assets/coverbuku/senibudaya11(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['senibudaya'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Buku Guru Seni Budaya Kelas XI.html'
},
{
    id: 339,
    name: 'Buku Guru Pendidikan Pancasila dan Kewarganegaraan Kelas XI',
    image: 'assets/coverbuku/pkn11(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['pkn'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Pancasila dan Kewarganegaraan Kelas XI.html'
},
{
    id: 340,
    name: 'Buku Guru Bahasa Inggris Kelas XI',
    image: 'assets/coverbuku/inggris11(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['inggris'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Buku Guru Bahasa Inggris Kelas XI.html'
},
{
    id: 341,
    name: 'Buku Guru Matematika Kelas XI',
    image: 'assets/coverbuku/matematika11(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['matematika'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Buku Guru Matematika Kelas XI.html'
},
{
    id: 342,
    name: 'Buku Guru Bahasa Indonesia Kelas XI',
    image: 'assets/coverbuku/indonesia11(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['indonesia'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Buku Guru Bahasa Indonesia Kelas XI.html'
},
{
    id: 343,
    name: 'Buku Guru Pendidikan Agama Hindu dan Budi Pekerti Kelas XI',
    image: 'assets/coverbuku/hindu11(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['hindu'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Hindu dan Budi Pekerti Kelas XI.html'
},
{
    id: 344,
    name: 'Buku Guru Pendidikan Agama Katolik dan Budi Pekerti Kelas XI',
    image: 'assets/coverbuku/katolik11(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['katolik'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Katolik dan Budi Pekerti Kelas XI.html'
},
{
    id: 345,
    name: 'Buku Guru Pendidikan Agama Khonghucu dan Budi Pekerti Kelas XI',
    image: 'assets/coverbuku/khonghucu11(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['khonghucu'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Khonghucu dan Budi Pekerti Kelas XI.html'
},
{
    id: 346,
    name: 'Buku Guru Pendidikan Agama Kristen dan Budi Pekerti Kelas XI',
    image: 'assets/coverbuku/kristen11(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['kristen'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Kristen dan Budi Pekerti Kelas XI.html'
},
{
    id: 347,
    name: 'Buku Guru Pendidikan Agama Islam dan Budi Pekerti Kelas XI',
    image: 'assets/coverbuku/islam11(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['islam'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Islam dan Budi Pekerti Kelas XI.html'
},
{
    id: 348,
    name: 'Buku Guru Pendidikan Agama Buddha dan Budi Pekerti Kelas XI',
    image: 'assets/coverbuku/buddha11(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['buddha'],
        kelas: 'sebelas'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Buddha dan Budi Pekerti Kelas XI.html'
},
{
    id: 349,
    name: 'Buku Guru Pendidikan Jasmani, Olahraga, dan Kesehatan Kelas XII',
    image: 'assets/coverbuku/pjok12(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['pjok'],
        kelas: 'duabelas'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Jasmani, Olahraga, dan Kesehatan Kelas XII.html'
},
{
    id: 350,
    name: 'Buku Guru Prakarya dan Kewirausahaan Kelas XII',
    image: 'assets/coverbuku/prakarya12(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['prakarya'],
        kelas: 'duabelas'
    },
    link: 'bukubelajar/Buku Guru Prakarya dan Kewirausahaan Kelas XII.html'
},
{
    id: 351,
    name: 'Buku Guru Sejarah Indonesia Kelas XII',
    image: 'assets/coverbuku/sejindo12(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['sejarah'],
        kelas: 'duabelas'
    },
    link: 'bukubelajar/Buku Guru Sejarah Indonesia Kelas XII.html'
},
{
    id: 352,
    name: 'Buku Guru Seni Budaya Kelas XII',
    image: 'assets/coverbuku/senibudaya12(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['senibudaya'],
        kelas: 'duabelas'
    },
    link: 'bukubelajar/Buku Guru Seni Budaya Kelas XII.html'
},
{
    id: 353,
    name: 'Buku Guru Pendidikan Pancasila dan Kewarganegaraan Kelas XII',
    image: 'assets/coverbuku/pkn12(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['pkn'],
        kelas: 'duabelas'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Pancasila dan Kewarganegaraan Kelas XII.html'
},
{
    id: 354,
    name: 'Buku Guru Bahasa Inggris Kelas XII',
    image: 'assets/coverbuku/inggris12(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['inggris'],
        kelas: 'duabelas'
    },
    link: 'bukubelajar/Buku Guru Bahasa Inggris Kelas XII.html'
},
{
    id: 355,
    name: 'Buku Guru Matematika Kelas XII',
    image: 'assets/coverbuku/matematika12(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['matematika'],
        kelas: 'duabelas'
    },
    link: 'bukubelajar/Buku Guru Matematika Kelas XII.html'
},
{
    id: 356,
    name: 'Buku Guru Bahasa Indonesia Kelas XII',
    image: 'assets/coverbuku/indonesia12(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['indonesia'],
        kelas: 'duabelas'
    },
    link: 'bukubelajar/Buku Guru Bahasa Indonesia Kelas XII.html'
},
{
    id: 357,
    name: 'Buku Guru Pendidikan Agama Hindu dan Budi Pekerti Kelas XII',
    image: 'assets/coverbuku/hindu12(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['hindu'],
        kelas: 'duabelas'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Hindu dan Budi Pekerti Kelas XII.html'
},
{
    id: 358,
    name: 'Buku Guru Pendidikan Agama Katolik dan Budi Pekerti Kelas XII',
    image: 'assets/coverbuku/katolik12(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['katolik'],
        kelas: 'duabelas'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Katolik dan Budi Pekerti Kelas XII.html'
},
{
    id: 359,
    name: 'Buku Guru Pendidikan Agama Khonghucu dan Budi Pekerti Kelas XII',
    image: 'assets/coverbuku/khonghucu12(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['khonghucu'],
        kelas: 'duabelas'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Khonghucu dan Budi Pekerti Kelas XII.html'
},
{
    id: 360,
    name: 'Buku Guru Pendidikan Agama Kristen dan Budi Pekerti Kelas XII',
    image: 'assets/coverbuku/kristen12(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['kristen'],
        kelas: 'duabelas'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Kristen dan Budi Pekerti Kelas XII.html'
},
{
    id: 361,
    name: 'Buku Guru Pendidikan Agama Islam dan Budi Pekerti Kelas XII',
    image: 'assets/coverbuku/islam12(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['islam'],
        kelas: 'duabelas'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Islam dan Budi Pekerti Kelas XII.html'
},
{
    id: 362,
    name: 'Buku Guru Pendidikan Agama Buddha dan Budi Pekerti Kelas XII',
    image: 'assets/coverbuku/buddha12(guru).png',
    nature: {
        jenjang: ['sma'],
        pelajaran: ['buddha'],
        kelas: 'duabelas'
    },
    link: 'bukubelajar/Buku Guru Pendidikan Agama Buddha dan Budi Pekerti Kelas XII.html'
},
];

let productFilter = listProducts;
showProduct(productFilter);

filter.addEventListener('submit', function (event) {
  event.preventDefault();
  let valueFilter = event.target.elements;
  productFilter = listProducts.filter(item => {
    if(valueFilter.jenjang.value != ''){
      if(!item.nature.jenjang.includes(valueFilter.jenjang.value)){
        return false;
      }
    }
    if(valueFilter.kelas.value != ''){
      if(!item.nature.kelas.includes(valueFilter.kelas.value)){
        return false;
      }
    }
    if(valueFilter.pelajaran.value != ''){
      if(!item.nature.pelajaran.includes(valueFilter.pelajaran.value)){
        return false;
      }
    }
    if (valueFilter.name.value !== '') {
      if (!item.name.toLowerCase().includes(valueFilter.name.value.toLowerCase())) {
        return false;
      }
    }
    return true;
  });
  currentPage = 1;
  adjustItemsPerPage(); // Update the number of items per page
});

function showProduct(productFilter, currentPage, itemsPerPage) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  count.innerText = productFilter.length;
  list.innerHTML = '';
  productFilter.slice(startIndex, endIndex).forEach(item => {
    let productLink = document.createElement('a');
    productLink.href = item.link; // Use the 'link' property for the product's URL.

    let newItem = document.createElement('div');
    newItem.classList.add('item');

    // create image
    let newImage = new Image();
    newImage.src = item.image;
    productLink.appendChild(newImage);

    // create name product
    let newTitle = document.createElement('div');
    newTitle.classList.add('title');
    newTitle.innerText = item.name;
    productLink.appendChild(newTitle);

    newItem.appendChild(productLink);
    list.appendChild(newItem);
  });
}

function adjustItemsPerPage() {
  if (window.innerWidth < 768) {
    itemsPerPage = 12; // Set to 2 items per page for phones
  } else {
    itemsPerPage = 12; // Set to 3 items per page for PC
  }

  totalPages = Math.ceil(productFilter.length / itemsPerPage); // Update the global totalPages variable

  // Re-render the current page with the new items per page value
  currentPage = 1;
  showProduct(productFilter, currentPage, itemsPerPage);
  showPagination(totalPages, currentPage);
}

// ... (previous code remains unchanged)

// Listen for window resize event to adjust the items per page dynamically
window.addEventListener('resize', adjustItemsPerPage);

// Call the function once on initial page load
adjustItemsPerPage();

function showPagination(totalPages, currentPage) {
  const paginationContainer = document.getElementById('pagination');

  paginationContainer.innerHTML = '';

  // Calculate the range of pagination numbers to show (max 4)
  let startPage;
  let endPage;

if (totalPages <= 4) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= 2) {
      startPage = 1;
      endPage = 4;
    } else if (currentPage >= totalPages - 1) {
      startPage = totalPages - 3;
      endPage = totalPages;
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 1;
    }
  } // Set to 2 items per page for phones

    for (let i = startPage; i <= endPage; i++) {
    let pageLink = document.createElement('a');
    pageLink.href = '#';
    pageLink.innerText = i;
    pageLink.addEventListener('click', function (event) {
      event.preventDefault();
      currentPage = i;
      showProduct(productFilter, currentPage, itemsPerPage);
      showPagination(totalPages, currentPage);
      
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Add smooth scrolling effect
      });
    });

    if (i === currentPage) {
      pageLink.classList.add('active');
    }

    paginationContainer.appendChild(pageLink);
  }

  // Add "Prev" and "Next" buttons

  const prevButton = document.createElement('button');
  prevButton.classList.add('paginationButton');
  prevButton.innerText = 'Prev';
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener('click', function () {
      if (currentPage > 1) {
        currentPage--;
        showProduct(productFilter, currentPage, itemsPerPage);
        showPagination(totalPages, currentPage);

        // Scroll to the top of the page
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Add smooth scrolling effect
        });
      }
    });

  const nextButton = document.createElement('button');
    nextButton.classList.add('paginationButton');
    nextButton.innerText = 'Next';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', function () {
      if (currentPage < totalPages) {
        currentPage++;
        showProduct(productFilter, currentPage, itemsPerPage);
        showPagination(totalPages, currentPage);
        prevButton.removeAttribute('disabled');
        if (currentPage === totalPages) {
          nextButton.setAttribute('disabled', 'disabled');
        }

        // Scroll to the top of the page
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Add smooth scrolling effect
        });
      }
    });

  paginationContainer.insertBefore(prevButton, paginationContainer.firstChild);
  paginationContainer.appendChild(nextButton);
}