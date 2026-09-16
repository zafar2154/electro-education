interface PdfViewerProps {
  title: string;
  src: string | null;
  heightClass?: string;
}

export function PdfViewer({ title, src, heightClass = 'h-[75vh]' }: PdfViewerProps) {
  if (!src) {
    return (
      <div className="flex h-64 flex-col items-center justify-center border border-dashed border-ink/30 bg-white/50 text-center">
        <p className="font-medium text-ink">PDF belum tersedia</p>
        <p className="mt-1 max-w-sm text-sm text-ink-soft">
          Sumber PDF untuk "{title}" tidak ditemukan atau rusak di file aslinya. Cek kembali berkas
          sumbernya lalu tautkan ulang di data.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-ink/10 bg-white">
      <div className="flex items-center justify-between border-b border-ink/10 px-4 py-2">
        <p className="truncate text-sm font-medium text-ink-soft">{title}</p>
        <a
          href={src}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 text-sm font-medium text-chalkboard hover:underline"
        >
          Buka di tab baru ↗
        </a>
      </div>
      <iframe src={src} title={title} className={`w-full ${heightClass}`} />
    </div>
  );
}
