import { Link, useParams } from 'react-router-dom';
import { textbooks } from '../data/bukubelajar';
import { PdfViewer } from '../components/PdfViewer';

export function BukuDetail() {
  const { id } = useParams();
  const book = textbooks.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-14 text-center">
        <p className="text-ink">Buku tidak ditemukan.</p>
        <Link to="/buku-belajar" className="mt-2 inline-block text-chalkboard hover:underline">
          Kembali ke Buku Belajar
        </Link>
      </div>
    );
  }

  const heading =
    book.category === 'Tematik' ? `Tema ${book.temaNumber}: ${book.subject}` : book.subject;

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <Link to="/buku-belajar" className="text-sm text-chalkboard hover:underline">
        ← Buku Belajar
      </Link>
      <h1 className="mt-2 text-2xl font-bold text-ink">{heading}</h1>
      <p className="mt-1 text-sm text-ink-soft">
        Buku {book.bookType} · Kelas {book.gradeRoman}
        {book.semester ? ` · Semester ${book.semester}` : ''}
      </p>

      <div className="mt-6">
        <PdfViewer title={book.title} src={book.pdfUrl} />
      </div>
    </div>
  );
}
