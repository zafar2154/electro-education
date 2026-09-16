import { useMemo, useState } from 'react';
import { labs } from '../data/labs';
import { ContentCard } from '../components/ContentCard';
import { FilterBar } from '../components/FilterBar';
import { FlaskIcon } from '../components/icons';

const ALL = 'Semua';

export function LabMaya() {
  const [subject, setSubject] = useState(ALL);

  const subjects = useMemo(
    () => [ALL, ...Array.from(new Set(labs.map((l) => l.subject))).sort()],
    [],
  );

  const filtered = labs.filter((l) => subject === ALL || l.subject === subject);

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-2xl font-bold text-ink">Lab Maya</h1>
      <p className="mt-1 text-ink-soft">
        Simulasi interaktif dari PhET Interactive Simulations, dibuka langsung dari sumber resmi.
      </p>

      <div className="mt-6">
        <FilterBar
          filters={[
            {
              key: 'subject',
              label: 'Mata Pelajaran',
              value: subject,
              options: subjects.map((v) => ({ value: v, label: v })),
              onChange: setSubject,
            },
          ]}
        />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((l) => (
          <ContentCard
            key={l.id}
            title={l.title}
            badge={l.subject}
            description={l.description}
            href={l.url}
            external
            coverBasePath={`/covers/labmaya/${l.id}`}
            coverAspect="video"
            FallbackIcon={FlaskIcon}
          />
        ))}
      </div>
    </div>
  );
}
