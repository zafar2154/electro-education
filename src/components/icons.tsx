interface IconProps {
  className?: string;
}

/** Buku terbuka dengan lipatan halaman — dipakai untuk Buku Belajar */
export function BookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 12c-3-2.5-7-3.5-11-3v20c4-0.5 8 0.5 11 3 3-2.5 7-3.5 11-3V9c-4-0.5-8 0.5-11 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M20 12v20" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

/** Kertas dengan tanda tanya — dipakai untuk Bank Soal */
export function QuestionPaperIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M10 6h14l6 6v22a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M24 6v6h6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path
        d="M16.5 20c0-2 1.6-3 3.2-3s3.3 0.9 3.3 2.8c0 1.6-1.4 2.1-2.4 2.9-0.7 0.5-1.1 1-1.1 1.9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="19.5" cy="29" r="1.1" fill="currentColor" />
    </svg>
  );
}

/** Labu erlenmeyer dengan gelembung — dipakai untuk Lab Maya */
export function FlaskIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M17 7h6v9.5l7 13.5a2 2 0 0 1-1.8 2.9H11.8A2 2 0 0 1 10 29.9l7-13.4V7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M15.5 7h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M14.5 24h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="20" cy="28.5" r="1.1" fill="currentColor" />
      <circle cx="23.5" cy="27" r="0.7" fill="currentColor" />
    </svg>
  );
}
