import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { questionBank } from '../data/banksoal';
import { PdfViewer } from '../components/PdfViewer';

export function SoalDetail() {
  const { id } = useParams();
  const entry = questionBank.find((q) => q.id === id);
  const [showAnswer, setShowAnswer] = useState(false);

  if (!entry) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-14 text-center">
        <p className="text-ink">Paket soal tidak ditemukan.</p>
        <Link to="/bank-soal" className="mt-2 inline-block text-chalkboard hover:underline">
          Kembali ke Bank Soal
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <Link to="/bank-soal" className="text-sm text-chalkboard hover:underline">
        ← Bank Soal
      </Link>
      <h1 className="mt-2 text-2xl font-bold text-ink">
        {entry.examType}
        {entry.term ? ` ${entry.term}` : ''} — {entry.subject}
      </h1>
      <p className="mt-1 text-sm text-ink-soft">Kelas {entry.grade}</p>

      <div className="mt-6">
        <PdfViewer title={`Soal — ${entry.title}`} src={entry.pdfUrl} />
      </div>

      <div className="mt-6">
        <button
          onClick={() => setShowAnswer((v) => !v)}
          className="border border-chalkboard bg-chalkboard px-4 py-2 text-sm font-medium text-chalk transition-colors hover:bg-chalkboard-dark"
        >
          {showAnswer ? 'Sembunyikan Jawaban' : 'Lihat Jawaban'}
        </button>
      </div>

      {showAnswer && (
        <div className="mt-4">
          <PdfViewer title={`Kunci Jawaban — ${entry.title}`} src={entry.answerPdfUrl} />
        </div>
      )}
    </div>
  );
}
