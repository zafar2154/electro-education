import { useMemo, useState } from 'react';
import { questionBank } from '../data/banksoal';
import { ContentCard } from '../components/ContentCard';
import { FilterBar } from '../components/FilterBar';
import { QuestionPaperIcon } from '../components/icons';

const ALL = 'Semua';

export function BankSoal() {
  const [examType, setExamType] = useState(ALL);
  const [subject, setSubject] = useState(ALL);
  const [grade, setGrade] = useState(ALL);

  const examTypes = useMemo(
    () => [ALL, ...Array.from(new Set(questionBank.map((q) => q.examType))).sort()],
    [],
  );
  const subjects = useMemo(
    () => [ALL, ...Array.from(new Set(questionBank.map((q) => q.subject))).sort()],
    [],
  );
  const grades = useMemo(
    () => [ALL, ...Array.from(new Set(questionBank.map((q) => q.grade))).sort((a, b) => a - b)],
    [],
  );

  const filtered = questionBank.filter(
    (q) =>
      (examType === ALL || q.examType === examType) &&
      (subject === ALL || q.subject === subject) &&
      (grade === ALL || q.grade === Number(grade)),
  );

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-2xl font-bold text-ink">Bank Soal</h1>
      <p className="mt-1 text-ink-soft">{filtered.length} dari {questionBank.length} paket soal</p>

      <div className="mt-6">
        <FilterBar
          filters={[
            {
              key: 'examType',
              label: 'Jenis Ujian',
              value: examType,
              options: examTypes.map((v) => ({ value: v, label: v })),
              onChange: setExamType,
            },
            {
              key: 'subject',
              label: 'Mata Pelajaran',
              value: subject,
              options: subjects.map((v) => ({ value: v, label: v })),
              onChange: setSubject,
            },
            {
              key: 'grade',
              label: 'Kelas',
              value: grade,
              options: grades.map((v) => ({ value: String(v), label: v === ALL ? ALL : `Kelas ${v}` })),
              onChange: setGrade,
            },
          ]}
        />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((q) => (
          <ContentCard
            key={q.id}
            title={`${q.examType}${q.term ? ` ${q.term}` : ''} — ${q.subject}`}
            badge={`Kelas ${q.grade}`}
            meta={q.examType}
            href={`/bank-soal/${q.id}`}
            coverBasePath={`/images/coversoal/${q.id}`}
            coverAspect="portrait"
            FallbackIcon={QuestionPaperIcon}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-ink-soft">
          Tidak ada soal yang cocok dengan filter ini. Coba ubah pilihan di atas.
        </p>
      )}
    </div>
  );
}
