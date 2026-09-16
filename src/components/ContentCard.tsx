import { useState, type ReactElement } from 'react';
import { Link } from 'react-router-dom';

const COVER_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'];

interface IconComponent {
  (props: { className?: string }): ReactElement;
}

interface CoverImageProps {
  /** Path tanpa ekstensi, mis. "/covers/banksoal/pas-1-bahasa-indonesia-kelas-10". Komponen akan
   *  otomatis coba .jpg, .png, lalu .webp secara berurutan. */
  basePath: string;
  alt: string;
  aspect: 'portrait' | 'video';
  FallbackIcon: IconComponent;
}

function CoverImage({ basePath, alt, aspect, FallbackIcon }: CoverImageProps) {
  const [extIndex, setExtIndex] = useState(0);
  const [failed, setFailed] = useState(false);
  const aspectClass = aspect === 'portrait' ? 'aspect-[3/4]' : 'aspect-video';

  if (failed) {
    return (
      <div className={`flex ${aspectClass} items-center justify-center bg-chalkboard/5`}>
        <FallbackIcon className="h-10 w-10 text-chalkboard/40" />
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${aspectClass} bg-chalkboard/5`}>
      <img
        src={`${basePath}.${COVER_EXTENSIONS[extIndex]}`}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
        onError={() => {
          if (extIndex < COVER_EXTENSIONS.length - 1) {
            setExtIndex((i) => i + 1);
          } else {
            setFailed(true);
          }
        }}
      />
    </div>
  );
}

interface ContentCardProps {
  title: string;
  /** Label kecil ala tulisan tangan di pojok kartu, mis. "Kelas VII" */
  badge?: string;
  meta?: string;
  description?: string;
  href: string;
  external?: boolean;
  /** Path dasar gambar sampul tanpa ekstensi. Kalau tidak diisi, kartu tampil tanpa gambar. */
  coverBasePath?: string;
  coverAspect?: 'portrait' | 'video';
  FallbackIcon?: IconComponent;
}

export function ContentCard({
  title,
  badge,
  meta,
  description,
  href,
  external,
  coverBasePath,
  coverAspect = 'portrait',
  FallbackIcon,
}: ContentCardProps) {
  const cardClass =
    'group flex flex-col justify-between border border-ink/10 bg-white/60 transition-colors hover:border-chalkboard hover:bg-white';

  const inner = (
    <>
      {coverBasePath && FallbackIcon && (
        <CoverImage
          basePath={coverBasePath}
          alt={title}
          aspect={coverAspect}
          FallbackIcon={FallbackIcon}
        />
      )}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-semibold text-ink group-hover:text-chalkboard">{title}</h3>
            {badge && (
              <span className="font-hand shrink-0 text-xl leading-none text-chalkboard/70">
                {badge}
              </span>
            )}
          </div>
          {meta && <p className="mt-1 text-xs uppercase tracking-wide text-ink-soft">{meta}</p>}
          {description && (
            <p className="rule-dashed mt-3 pb-3 text-sm text-ink-soft">{description}</p>
          )}
        </div>
        <span className="mt-3 text-sm font-medium text-chalkboard group-hover:underline">
          Buka {external ? '↗' : '→'}
        </span>
      </div>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cardClass}>
        {inner}
      </a>
    );
  }

  return (
    <Link to={href} className={cardClass}>
      {inner}
    </Link>
  );
}
