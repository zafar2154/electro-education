import { team } from '../data/team';
import { TeamCarousel } from '../components/TeamCarousel';

export function Tentang() {
  return (
    <div>
      <div className="bg-chalkboard text-chalk/70">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <h1 className="text-2xl font-bold">Tentang Rumah Belajar</h1>
          <p className="rule-dashed mt-4 pb-4">
            Rumah Belajar adalah rumah belajar yang menyediakan buku pelajaran, bank soal, dan
            laboratorium virtual secara gratis untuk siswa dari kelas 1 SD sampai 12 SMA.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="mt-6">
          <TeamCarousel members={team} />
        </div>
      </section>
    </div>
  );
}
