import type { TeamMember } from '../data/team';

interface TeamMemberCardProps {
  member: TeamMember;
  size?: 'default' | 'large';
}

export function TeamMemberCard({ member, size = 'default' }: TeamMemberCardProps) {
  const photoSize = size === 'large' ? 'h-36 w-36' : 'h-28 w-28';

  return (
    <div className="border border-ink/10 bg-white/70 p-5 text-center">
      <div className="relative mx-auto w-fit">
        {/* Selotip kecil, seperti foto ditempel di papan mading */}
        <span
          aria-hidden="true"
          className="absolute -top-2 left-1/2 h-4 w-10 -translate-x-1/2 -rotate-3 bg-chalk-yellow/60"
        />
        <img
          src={member.photo}
          alt={member.name}
          loading="lazy"
          className={`relative mx-auto ${photoSize} rounded-full border-2 border-chalkboard/20 object-cover`}
        />
      </div>
      <h3 className={`mt-4 font-semibold text-ink ${size === 'large' ? 'text-lg' : 'text-base'}`}>
        {member.name}
      </h3>
      <p className="font-hand text-lg leading-tight text-chalkboard">{member.role}</p>
      {member.description && <p className="mt-2 text-sm text-ink-soft">{member.description}</p>}
    </div>
  );
}
