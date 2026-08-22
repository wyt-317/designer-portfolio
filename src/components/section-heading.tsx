interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : '';
  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-white/35">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.7rem] md:leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-white/50 sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
