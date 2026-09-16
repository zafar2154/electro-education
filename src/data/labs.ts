// Data lab maya masih dikurasi manual (bukan hasil parsing), karena file asli di
// assets/Vlab .../ adalah salinan utuh simulasi PhET pihak ketiga.
// Rekomendasi: jangan re-host file itu di repo baru — arahkan ke sumber resmi PhET
// lewat iframe, seperti pola url di bawah. Lengkapi daftar ini sesuai kebutuhan.

export type LabSubject = 'Fisika' | 'Kimia' | 'Biologi' | 'Matematika' | 'Geografi';

export interface LabEntry {
  id: string;
  title: string;
  subject: LabSubject;
  description: string;
  /** slug resmi PhET, dipakai untuk membangun url iframe */
  phetSlug: string;
  url: string;
}

const phetUrl = (slug: string, lang: 'en' | 'in' = 'en') =>
  `https://phet.colorado.edu/sims/html/${slug}/latest/${slug}_${lang}.html`;

export const labs: LabEntry[] = [
  {
    id: 'ohms-law',
    title: "Hukum Ohm",
    subject: 'Fisika',
    description: 'Eksplorasi hubungan tegangan, arus, dan hambatan secara interaktif.',
    phetSlug: 'ohms-law',
    url: phetUrl('ohms-law'),
  },
  {
    id: 'circuit-construction-kit-dc',
    title: 'Rangkaian Listrik DC',
    subject: 'Fisika',
    description: 'Rangkai komponen elektronik dan amati aliran arus secara langsung.',
    phetSlug: 'circuit-construction-kit-dc-virtual-lab',
    url: phetUrl('circuit-construction-kit-dc-virtual-lab'),
  },
  {
    id: 'wave-on-a-string',
    title: 'Gelombang pada Tali',
    subject: 'Fisika',
    description: 'Visualisasi perambatan gelombang transversal dengan parameter yang bisa diubah.',
    phetSlug: 'wave-on-a-string',
    url: phetUrl('wave-on-a-string'),
  },
  {
    id: 'ph-scale',
    title: 'Skala pH',
    subject: 'Kimia',
    description: 'Uji tingkat keasaman berbagai larutan dan pahami skala pH.',
    phetSlug: 'ph-scale',
    url: phetUrl('ph-scale', 'in'),
  },
  {
    id: 'build-an-atom',
    title: 'Membangun Atom',
    subject: 'Kimia',
    description: 'Susun proton, neutron, dan elektron untuk membentuk berbagai unsur.',
    phetSlug: 'build-an-atom',
    url: phetUrl('build-an-atom'),
  },
  {
    id: 'natural-selection',
    title: 'Seleksi Alam',
    subject: 'Biologi',
    description: 'Simulasikan bagaimana sifat populasi kelinci berubah antar generasi.',
    phetSlug: 'natural-selection',
    url: phetUrl('natural-selection'),
  },
  {
    id: 'gene-expression-essentials',
    title: 'Dasar Ekspresi Gen',
    subject: 'Biologi',
    description: 'Amati proses transkripsi dan translasi di dalam sel secara visual.',
    phetSlug: 'gene-expression-essentials',
    url: phetUrl('gene-expression-essentials'),
  },
  {
    id: 'graphing-lines',
    title: 'Menggambar Garis',
    subject: 'Matematika',
    description: 'Latihan interaktif memahami gradien dan persamaan garis lurus.',
    phetSlug: 'graphing-lines',
    url: phetUrl('graphing-lines'),
  },
  {
    id: 'area-model-multiplication',
    title: 'Model Luas untuk Perkalian',
    subject: 'Matematika',
    description: 'Pahami konsep perkalian bilangan lewat visualisasi model luas.',
    phetSlug: 'area-model-multiplication',
    url: phetUrl('area-model-multiplication'),
  },
  {
    id: 'gravity-and-orbits',
    title: 'Gravitasi dan Orbit',
    subject: 'Geografi',
    description: 'Simulasikan gaya gravitasi antar benda langit dan bentuk orbitnya.',
    phetSlug: 'gravity-and-orbits',
    url: phetUrl('gravity-and-orbits', 'in'),
  },
];
