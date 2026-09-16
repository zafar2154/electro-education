import { useMemo, useState } from 'react';
import { textbooks } from '../data/bukubelajar';
import { ContentCard } from '../components/ContentCard';
import { FilterBar } from '../components/FilterBar';
import { BookIcon } from '../components/icons';

const ALL = 'Semua';

export function BukuBelajar() {
  const [bookType, setBookType] = useState(ALL);
  const [grade, setGrade] = useState(ALL);

  const bookTypes = useMemo(
    () => [ALL, ...Array.from(new Set(textbooks.map((b) => b.bookType))).sort()],
    [],
  );
  const grades = useMemo(
    () =>
      [ALL, ...Array.from(new Set(textbooks.map((b) => b.grade)))].sort((a, b) =>
        a === ALL ? -1 : b === ALL ? 1 : Number(a) - Number(b),
      ),
    [],
  );

  const filtered = textbooks.filter(
    (b) =>
      (bookType === ALL || b.bookType === bookType) && (grade === ALL || b.grade === Number(grade)),
  );

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-2xl font-bold text-ink">Buku Belajar</h1>
      <p className="mt-1 text-ink-soft">{filtered.length} dari {textbooks.length} buku</p>

      <div className="mt-6">
        <FilterBar
          filters={[
            {
              key: 'bookType',
              label: 'Jenis Buku',
              value: bookType,
              options: bookTypes.map((v) => ({ value: v, label: v === ALL ? ALL : `Buku ${v}` })),
              onChange: setBookType,
            },
            {
              key: 'grade',
              label: 'Kelas',
              value: String(grade),
              options: grades.map((v) => ({ value: String(v), label: v === ALL ? ALL : `Kelas ${v}` })),
              onChange: (v) => setGrade(v === ALL ? ALL : v),
            },
          ]}
        />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((b) => (
          <ContentCard
            key={b.id}
            title={
              b.category === 'Tematik'
                ? `Tema ${b.temaNumber}: ${b.subject}`
                : `${b.subject}${b.semester ? ` (Semester ${b.semester})` : ''}`
            }
            badge={`Kelas ${b.gradeRoman}`}
            meta={`Buku ${b.bookType} · ${b.category}`}
            href={`/buku-belajar/${b.id}`}
            coverBasePath={`/images/coverbuku/${b.id}`}
            coverAspect="portrait"
            FallbackIcon={BookIcon}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-ink-soft">
          Tidak ada buku yang cocok dengan filter ini. Coba ubah pilihan di atas.
        </p>
      )}
    </div>
  );
}
