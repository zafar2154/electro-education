import { Link } from 'react-router-dom';
import { questionBank } from '../data/banksoal';
import { textbooks } from '../data/bukubelajar';
import { labs } from '../data/labs';

const sections = [
  {
    to: '/buku-belajar',
    title: 'Buku Belajar',
    count: textbooks.length,
    unit: 'buku',
    Icon: '/images/coverbuku/bahasa-indonesia-kelas-xi.png',
    description: 'Buku siswa dan buku guru dari kelas 1 SD sampai 12 SMA, lengkap dengan materi dan latihan soal.',
  },
  {
    to: '/bank-soal',
    title: 'Bank Soal',
    count: questionBank.length,
    unit: 'paket soal',
    Icon: '/images/coversoal/pas-1-bahasa-indonesia-kelas-11.png',
    description: 'Soal latihan PTS, PAS, PAT, UTS, dan UAS lengkap dengan kunci jawaban.',
  },
  {
    to: '/lab-maya',
    title: 'Lab Maya',
    count: labs.length,
    unit: 'simulasi',
    Icon: '/images/lab.jpeg',
    description: 'Simulasi interaktif fisika, kimia, biologi, dan matematika dari PhET.',
  },
];

export function Home() {
  return (
    <div>
      <section className="chalk-texture relative overflow-hidden bg-chalkboard text-chalk">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
            Carilah materi yang kamu sukai
          </h1>
          <svg
            width="320"
            height="14"
            viewBox="0 0 320 14"
            className="mt-1 text-chalk-yellow"
            aria-hidden="true"
          >
            <path
              d="M4 8c60-6 200-6 312 2"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              className="chalk-underline"
            />
          </svg>
          <p className="mt-4 max-w-xl text-chalk/80">
            Buku pelajaran, bank soal, dan laboratorium virtual dalam satu tempat — gratis untuk semua jenjang, dari SD sampai SMA.
          </p>

          {/* Rak kapur: tiga "batang kapur" menampilkan jumlah konten asli per kategori */}
          <div className="mt-10 flex flex-wrap gap-3">
            {sections.map((s) => (
              <div
                key={s.to}
                className="flex items-center gap-2 border border-chalk/25 bg-chalk/5 px-4 py-2"
              >
                <span className="font-hand text-2xl leading-none text-chalk-yellow">{s.count}</span>
                <span className="text-sm text-chalk/80">{s.unit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-6 sm:grid-cols-3">
          {sections.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group border border-ink/10 bg-white/60 p-6 transition-colors hover:border-chalkboard hover:bg-white"
            >
              <img src={s.Icon} alt="" />
              <h2 className="rule-dashed mt-4 pb-3 text-lg font-semibold text-ink group-hover:text-chalkboard">
                {s.title}
              </h2>
              <p className="mt-3 text-sm text-ink-soft">{s.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
