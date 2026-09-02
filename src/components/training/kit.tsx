import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

export type Track = "PCA" | "PPR";

export type PageProps = {
  onNext: () => void;
  onBackToStart?: () => void;
};

/** Contagem de tempo mínimo de leitura, totalmente invisível ao usuário. */
export function useReadingTimer(ms: number, active = true) {
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (!active) {
      setDone(false);
      return;
    }
    const id = setTimeout(() => setDone(true), ms);
    return () => clearTimeout(id);
  }, [ms, active]);
  return done;
}

/** Campo de assinatura digital (dedo, caneta digital ou mouse). */
export function useSignaturePad({
  onChange,
}: {
  onChange: (hasSignature: boolean) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawing = useRef(false);

  const point = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const r = canvas.getBoundingClientRect();
    return {
      x: ((e.clientX - r.left) / r.width) * canvas.width,
      y: ((e.clientY - r.top) / r.height) * canvas.height,
    };
  };

  const start = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const ctx = canvasRef.current?.getContext("2d");
    const p = point(e);
    if (!ctx || !p) return;
    drawing.current = true;
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#0f172a";
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    onChange(true);
  };

  const move = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current) return;
    const ctx = canvasRef.current?.getContext("2d");
    const p = point(e);
    if (!ctx || !p) return;
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
  };

  const end = () => {
    drawing.current = false;
  };

  const clear = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    onChange(false);
  }, [onChange]);

  return { canvasRef, clear, start, move, end };
}

export function SignatureCanvas({
  pad,
}: {
  pad: ReturnType<typeof useSignaturePad>;
}) {
  return (
    <canvas
      ref={pad.canvasRef}
      width={900}
      height={240}
      onPointerDown={pad.start}
      onPointerMove={pad.move}
      onPointerUp={pad.end}
      onPointerLeave={pad.end}
      className="h-40 w-full touch-none rounded-lg border-2 border-dashed border-brand/40 bg-background"
    />
  );
}

export function PageShell({
  title,
  track,
  children,
  footer,
}: {
  title: string;
  track: Track;
  children: ReactNode;
  footer?: ReactNode;
}) {
  const accent = track === "PCA" ? "bg-pca" : "bg-ppr";
  return (
    <div className="min-h-screen bg-panel">
      <header className={`${accent} px-5 py-4 text-brand-foreground`}>
        <h1 className="font-display text-lg leading-tight font-semibold tracking-tight sm:text-2xl">
          {title}
        </h1>
      </header>
      <main className="mx-auto w-full max-w-5xl px-4 py-6 pb-28">{children}</main>
      <div className="fixed inset-x-0 bottom-0 border-t border-border bg-background/95 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3">
          {footer}
        </div>
      </div>
    </div>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display mt-6 mb-3 border-l-4 border-brand pl-3 text-base font-semibold text-brand-deep sm:text-xl">
      {children}
    </h2>
  );
}

export function SubTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-display mt-4 mb-2 text-sm font-semibold text-foreground sm:text-base">
      {children}
    </h3>
  );
}

export function Panel({
  children,
  tone = "neutral",
  className = "",
}: {
  children: ReactNode;
  tone?: "neutral" | "brand" | "warn" | "pca" | "ppr";
  className?: string;
}) {
  const tones: Record<string, string> = {
    neutral: "bg-card border-border",
    brand: "bg-brand-soft border-brand/30",
    warn: "bg-warn-soft border-warn/40",
    pca: "bg-pca-soft border-pca/30",
    ppr: "bg-ppr-soft border-ppr/30",
  };
  return (
    <div
      className={`rounded-xl border ${tones[tone]} p-4 text-sm leading-relaxed text-foreground shadow-panel ${className}`}
    >
      {children}
    </div>
  );
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2 text-sm leading-relaxed">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Figure({
  src,
  alt,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full rounded-xl border border-border object-cover shadow-panel"
      />
      {caption ? (
        <figcaption className="mt-1 text-center text-xs text-muted-foreground">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

export function AdvanceButton({
  onClick,
  disabled,
  label = "Avançar",
}: {
  onClick: () => void;
  disabled?: boolean;
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="ml-auto inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-circle transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
    >
      {label}
      <span aria-hidden="true">▶</span>
    </button>
  );
}

/** Botão circular azul de retorno à Página 1. Na Fase 1 é apenas estrutural. */
export function BackToStartButton({
  onClick,
  enabled = false,
}: {
  onClick?: () => void;
  enabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={enabled && onClick ? onClick : undefined}
      disabled={!enabled}
      aria-label="Retornar à seleção de módulo"
      className="inline-flex size-11 items-center justify-center rounded-full bg-brand text-lg text-brand-foreground shadow-circle transition-opacity disabled:opacity-30"
    >
      ←
    </button>
  );
}

export function PageNumber({ n }: { n: number }) {
  return (
    <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-deep">
      Página {n} de 16
    </span>
  );
}

export function CircleItem({
  label,
  children,
  onClick,
  active,
}: {
  label: string;
  children?: ReactNode;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex size-32 flex-col items-center justify-center overflow-hidden rounded-full border-2 p-3 text-center text-xs font-semibold shadow-circle transition-colors sm:size-40 ${
        active ? "border-brand bg-brand-soft text-brand-deep" : "border-border bg-card text-foreground"
      }`}
    >
      {children ?? label}
    </button>
  );
}
