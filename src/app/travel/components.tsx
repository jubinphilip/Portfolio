import Image from "next/image";
import Link from "next/link";

export const MonoLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">{children}</p>
);

export const Story = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-5 text-xl leading-relaxed text-ink-soft">{children}</p>
);

export const Caption = ({ children }: { children: React.ReactNode }) => (
  <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
    <span className="text-accent">—&nbsp;</span>
    {children}
  </figcaption>
);

export function Photo({
  src,
  alt,
  caption,
  aspect,
  className = "",
  sizes = "(min-width: 768px) 30rem, 100vw",
}: {
  src: string;
  alt: string;
  caption: string;
  aspect: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <figure className={className}>
      <div className={`group relative overflow-hidden rounded-2xl border border-line bg-paper-raise ${aspect}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <Caption>{caption}</Caption>
    </figure>
  );
}

export function Clip({
  src,
  caption,
  aspect,
  className = "",
}: {
  src: string;
  caption: string;
  aspect: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className={`relative overflow-hidden rounded-2xl border border-line bg-paper-raise ${aspect}`}>
        <video
          src={src}
          aria-label={caption}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <Caption>{caption}</Caption>
    </figure>
  );
}

export function TravelTopBar() {
  return (
    <header className="max-w-6xl mx-auto px-6 pt-8 flex items-baseline justify-between gap-6">
      <Link href="/" className="text-xl italic font-medium tracking-tight">
        Jubin&nbsp;Philip<span className="text-accent">.</span>
      </Link>
      <nav className="flex gap-7 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
        <Link href="/" className="hover:text-accent transition-colors">
          ← Back to work
        </Link>
      </nav>
    </header>
  );
}

export function TravelFooter() {
  return (
    <footer className="border-t border-line-strong">
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <p className="text-2xl font-light italic">
          More trips loading<span className="text-accent">…</span>
        </p>
        <Link
          href="/"
          className="font-mono text-[11px] uppercase tracking-[0.2em] border border-line-strong px-4 py-2 rounded-full hover:bg-ink hover:text-paper transition-colors"
        >
          ← Back to portfolio
        </Link>
      </div>
    </footer>
  );
}
