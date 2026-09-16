export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  photo: string;
  tier: 'pimpinan' | 'dosen' | 'mahasiswa';
}

export const team: TeamMember[] = [
  {
    id: 'achmad-zuchriadi',
    name: 'Achmad Zuchriadi',
    role: 'Kaprodi Teknik Elektro',
    description:
      'Arsitek Solusi ICT, Pengembangan Bisnis, IoT, Pemasaran Internet dan Pengembangan UMKM.',
    photo: '/images/team/pakachmad.jpg',
    tier: 'pimpinan',
  },
  {
    id: 'fajar-rahayu',
    name: 'Fajar Rahayu',
    role: 'Dosen Teknik Elektro',
    description:
      'Komunikasi Nirkabel, Jaringan Telekomunikasi dan Telekomunikasi Teknologi Baru.',
    photo: '/images/team/bufajar.jpeg',
    tier: 'dosen',
  },
  {
    id: 'sigit-pradana',
    name: 'Sigit Pradana',
    role: 'Dosen Teknik Mesin',
    description: '',
    photo: '/images/team/paksigit.jpeg',
    tier: 'dosen',
  },
  {
    id: 'jati-kinsela',
    name: 'Jati Kinsela B.',
    role: 'S1 Teknik Elektro',
    description:
      'Program Studi S1-Teknik Elektro dengan penjurusan Elektronika Kendali. Berkompetensi di bidang SCADA, Internet of Things, dan UI/UX Design.',
    photo: '/images/team/jati.JPG',
    tier: 'mahasiswa',
  },
  {
    id: 'mutiara-putri',
    name: 'Mutiara Putri R.D',
    role: 'S1 Teknik Elektro',
    description:
      'Program Studi S1-Teknik Elektro dengan penjurusan Elektronika Kendali. Senang mempelajari hal baru dan tertarik dengan perkembangan teknologi.',
    photo: '/images/team/Muti.jpg',
    tier: 'mahasiswa',
  },
  {
    id: 'dimas-pratama',
    name: 'Dimas Pratama',
    role: 'S1 Teknik Elektro',
    description: '',
    photo: '/images/team/dimas.jpeg',
    tier: 'mahasiswa',
  },
  {
    id: 'zahid-faqih',
    name: 'Zahid Faqih Alim Rabbani',
    role: 'S1 Teknik Elektro',
    description: '',
    photo: '/images/team/zahid.jpg',
    tier: 'mahasiswa',
  },
];
