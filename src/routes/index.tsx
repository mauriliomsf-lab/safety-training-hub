import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import { Page02, Page03, Page04, Page05 } from "@/components/training/pca-pages";
import { Page06, Page07, Page08, Page09, Page10 } from "@/components/training/ppr-pages-a";
import { Page11, Page12, Page13, Page14, Page15, Page16 } from "@/components/training/ppr-pages-b";
import type { Track } from "@/components/training/kit";

import protetores from "@/assets/select-pca.jpg";
import respiradores from "@/assets/select-ppr.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Treinamentos de Higiene Ocupacional — PCA e PPR" },
      {
        name: "description",
        content:
          "Módulo EAD de treinamentos de Higiene Ocupacional: Programa de Conservação Auditiva (PCA) e Programa de Proteção Respiratória (PPR).",
      },
      { property: "og:title", content: "Treinamentos de Higiene Ocupacional — PCA e PPR" },
      {
        property: "og:description",
        content:
          "Treinamento EAD em duas trilhas: Conservação Auditiva e Proteção Respiratória, com termo de responsabilidade.",
      },
    ],
  }),
  component: TreinamentoApp,
});

const PCA_SEQ = [2, 3, 4, 5];
const PPR_SEQ = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function TreinamentoApp() {
  const [track, setTrack] = useState<Track | null>(null);
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [page, setPage] = useState(1);
  const [respostasPPR, setRespostasPPR] = useState<Record<number, number>>({});

  const seq = track === "PCA" ? PCA_SEQ : PPR_SEQ;

  // Reinicia a rolagem no topo a cada troca de tela. Dependência só em `page`:
  // respostas do teste de conhecimento não estão nessa lista, então responder
  // uma pergunta nunca dispara este efeito — a rolagem do usuário durante o
  // teste fica preservada.
  //
  // Exceção: Página 14 → 15 é a mesma sequência contínua de perguntas do
  // teste de conhecimento do PPR (ambas repetem o mesmo bloco
  // UsoIncorretoBlocos antes das perguntas), então resetar o topo aqui
  // forçaria o usuário a rolar de novo por conteúdo repetido. As duas
  // páginas têm o mesmo conteúdo até o ponto das perguntas, então manter a
  // posição de rolagem atual já o deixa exatamente onde as próximas
  // perguntas começam.
  const paginaAnterior = useRef(page);
  useEffect(() => {
    const anterior = paginaAnterior.current;
    paginaAnterior.current = page;
    const continuacaoDoTeste = anterior === 14 && page === 15;
    if (continuacaoDoTeste) return;
    window.scrollTo({ top: 0 });
  }, [page]);

  const reiniciarSessao = () => {
    setTrack(null);
    setNome("");
    setMatricula("");
    setRespostasPPR({});
    setPage(1);
  };

  const start = () => {
    if (!track || !nome.trim() || !matricula.trim()) return;
    setPage(seq[0] ?? 1);
  };

  const next = () => {
    const i = seq.indexOf(page);
    const proximo = i >= 0 ? seq[i + 1] : undefined;
    if (proximo !== undefined) {
      setPage(proximo);
    } else {
      reiniciarSessao();
    }
  };

  const responder = (numero: number, opcao: number) =>
    setRespostasPPR((r) => ({ ...r, [numero]: opcao }));

  const reiniciarTeste = () => {
    setRespostasPPR({});
    setPage(14);
  };

  if (page === 1) {
    return (
      <SelecaoModulo
        track={track}
        setTrack={setTrack}
        nome={nome}
        setNome={setNome}
        matricula={matricula}
        setMatricula={setMatricula}
        onStart={start}
      />
    );
  }

  switch (page) {
    case 2:
      return <Page02 onNext={next} onBackToStart={reiniciarSessao} />;
    case 3:
      return <Page03 onNext={next} />;
    case 4:
      return <Page04 onNext={next} />;
    case 5:
      return (
        <Page05
          nome={nome}
          matricula={matricula}
          onNext={reiniciarSessao}
          onNomeChange={setNome}
          onMatriculaChange={setMatricula}
        />
      );
    case 6:
      return <Page06 onNext={next} onBackToStart={reiniciarSessao} />;
    case 7:
      return <Page07 onNext={next} />;
    case 8:
      return <Page08 onNext={next} />;
    case 9:
      return <Page09 onNext={next} />;
    case 10:
      return <Page10 onNext={next} />;
    case 11:
      return <Page11 onNext={next} />;
    case 12:
      return <Page12 onNext={next} />;
    case 13:
      return <Page13 onNext={next} />;
    case 14:
      return <Page14 onNext={next} respostas={respostasPPR} onResponder={responder} />;
    case 15:
      return (
        <Page15
          onNext={next}
          respostas={respostasPPR}
          onResponder={responder}
          onReiniciarTeste={reiniciarTeste}
        />
      );
    case 16:
      return (
        <Page16
          nome={nome}
          matricula={matricula}
          onNext={reiniciarSessao}
          onNomeChange={setNome}
          onMatriculaChange={setMatricula}
        />
      );
    default:
      return null;
  }
}

function SelecaoModulo({
  track,
  setTrack,
  nome,
  setNome,
  matricula,
  setMatricula,
  onStart,
}: {
  track: Track | null;
  setTrack: (t: Track) => void;
  nome: string;
  setNome: (v: string) => void;
  matricula: string;
  setMatricula: (v: string) => void;
  onStart: () => void;
}) {
  const opcoes: Array<{ id: Track; label: string; img: string; alt: string }> = [
    {
      id: "PCA",
      label: "Programa Conservação auditiva",
      img: protetores,
      alt: "Protetores auditivos tipo plug e abafador",
    },
    {
      id: "PPR",
      label: "Programa de Proteção Respiratória",
      img: respiradores,
      alt: "Respiradores descartável e semifacial",
    },
  ];

  return (
    <div className="min-h-screen bg-panel">
      <header className="bg-brand px-5 py-6 text-brand-foreground">
        <h1 className="font-display text-xl leading-tight font-semibold tracking-tight sm:text-3xl">
          MÓDULOS - Treinamentos Higiene Ocupacional
        </h1>
      </header>

      <main className="mx-auto w-full max-w-3xl px-4 py-10">
        <div className="flex flex-wrap items-start justify-center gap-8">
          {opcoes.map((o) => (
            <div key={o.id} className="flex w-40 flex-col items-center gap-3 sm:w-52">
              <button
                type="button"
                onClick={() => setTrack(o.id)}
                aria-pressed={track === o.id}
                className={`relative size-40 overflow-hidden rounded-full border-4 bg-background shadow-circle transition-colors sm:size-52 ${
                  track === o.id ? "border-brand" : "border-border"
                }`}
              >
                <img
                  src={o.img}
                  alt={o.alt}
                  width={768}
                  height={768}
                  loading="lazy"
                  className="size-full scale-95 object-contain p-2 contrast-[1.02] saturate-[0.95]"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_-10px_24px_-12px_rgba(15,23,42,0.35),inset_0_10px_20px_-14px_rgba(255,255,255,0.9)]"
                />
              </button>
              <p className="text-center text-sm font-semibold text-brand-deep">{o.label}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-md space-y-4">
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-foreground">Nome</span>
            <input
              value={nome}
              disabled={!track}
              onChange={(e) => setNome(e.target.value)}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-60"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-foreground">Matrícula</span>
            <input
              value={matricula}
              disabled={!track}
              onChange={(e) => setMatricula(e.target.value)}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-60"
            />
          </label>

          <div className="flex justify-center pt-4">
            <button
              type="button"
              onClick={onStart}
              aria-label="Avançar"
              className="inline-flex size-16 items-center justify-center rounded-full bg-brand text-2xl text-brand-foreground shadow-circle transition-opacity disabled:opacity-40"
              disabled={!track || !nome.trim() || !matricula.trim()}
            >
              ▶
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
