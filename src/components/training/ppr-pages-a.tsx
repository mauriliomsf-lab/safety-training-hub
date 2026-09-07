import { useEffect, useMemo, useState } from "react";

import {
  AdvanceButton,
  BackToStartButton,
  Bullets,
  CircleItem,
  Figure,
  PageShell,
  Panel,
  SectionTitle,
  SubTitle,
  useReadingTimer,
  type PageProps,
} from "./kit";

import pintura from "@/assets/pintura-solvente.jpg";
import eprFacialInteira from "@/assets/epr-facial-inteira.svg";
import eprSemifacial from "@/assets/epr-semifacial.svg";
import eprPff from "@/assets/epr-pff.svg";
import eprCartuchoQuimico from "@/assets/epr-cartucho-quimico.svg";
import eprFiltroMecanico from "@/assets/epr-filtro-mecanico.svg";
import respiradores from "@/assets/ppr-respiradores.svg";
import solda from "@/assets/manutencao-solda.jpg";
import icoRiscoBiologico from "@/assets/ico-risco-biologico.png";
import icoRiscoErgonomico from "@/assets/ico-risco-ergonomico.png";
import icoRiscoFisico from "@/assets/ico-risco-fisico.png";
import icoRiscoMecanico from "@/assets/ico-risco-mecanico.png";
import icoRiscoQuimico from "@/assets/ico-risco-quimico.png";
import icoRostoRespirador from "@/assets/ico-rosto-respirador.png";
import agPoeiras from "@/assets/ag-poeiras.jpg";
import agFumos from "@/assets/ag-fumos.jpg";
import agNevoas from "@/assets/ag-nevoas.jpg";
import agNeblina from "@/assets/ag-neblina.jpg";
import agGases from "@/assets/ag-gases.jpg";
import agVapores from "@/assets/ag-vapores.jpg";

const TITLE = "Treinamento de proteção respiratória";

/* ------------------------------- Página 6 ------------------------------- */
/** Seta diagonal grande, em tom cinza-azulado, usada no diagrama Perigo/controle. */
function SetaDiagonal({ sentido }: { sentido: "cima-direita" | "baixo-esquerda" }) {
  return (
    <svg
      viewBox="0 0 120 120"
      role="img"
      aria-label={
        sentido === "cima-direita"
          ? "Seta grande apontando para cima e para a direita"
          : "Seta grande apontando para baixo e para a esquerda"
      }
      className="size-20 shrink-0 sm:size-24"
    >
      <g
        transform={sentido === "cima-direita" ? undefined : "rotate(180 60 60)"}
        fill="none"
        stroke="oklch(0.58 0.04 250)"
        strokeWidth={14}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M26 94 L92 28" />
        <path d="M56 28 L92 28 L92 64" />
      </g>
    </svg>
  );
}

export const RISCOS_OCUPACIONAIS = [
  {
    nome: "Mecânicos / Acidentários",
    exemplo: "Exemplo: cortes, queda de superfícies, prensamento.",
    ico: icoRiscoMecanico,
    alt: "Ícone de engrenagem com chave de boca",
  },
  {
    nome: "Físicos",
    exemplo: "Exemplo: ruído, calor, vibração.",
    ico: icoRiscoFisico,
    alt: "Ícone de ondas sonoras e temperatura",
  },
  {
    nome: "Ergonômicos",
    exemplo: "Exemplo: levantamento de peso, mobiliário inadequado.",
    ico: icoRiscoErgonomico,
    alt: "Ícone de pessoa levantando carga",
  },
  {
    nome: "Biológicos",
    exemplo: "Exemplo: atividades médicas.",
    ico: icoRiscoBiologico,
    alt: "Ícone de símbolo de risco biológico",
  },
  {
    nome: "Químicos",
    exemplo: "Exemplo: agentes químicos.",
    ico: icoRiscoQuimico,
    alt: "Ícone de frasco com símbolo de risco químico",
  },
];

export function Page06({ onNext, onBackToStart }: PageProps) {
  const podeVoltar = useReadingTimer(6000);
  const [revelado, setRevelado] = useState<string | null>(null);
  const [liberado, setLiberado] = useState(false);

  useEffect(() => {
    if (!revelado) return;
    const id = setTimeout(() => setLiberado(true), 4000);
    return () => clearTimeout(id);
  }, [revelado]);

  return (
    <PageShell
      title={TITLE}
      track="PPR"
      footer={
        <>
          <BackToStartButton enabled={podeVoltar} onClick={onBackToStart} />
          <AdvanceButton onClick={onNext} disabled={!liberado} />
        </>
      }
    >
      <SectionTitle>O que é o PPR?</SectionTitle>
      <Panel tone="ppr">
        O Programa de proteção respiratória - PPR - é um plano de medidas para adequar a utilização
        dos equipamentos de proteção respiratória que, em conjunto com outras medidas preventivas no
        ambiente de trabalho, buscam garantir uma completa proteção ao trabalhador contra os riscos
        respiratórios existentes.
      </Panel>

      <SectionTitle>Conceitos Iniciais</SectionTitle>
      <p className="font-display mb-3 text-center text-sm font-semibold tracking-wide text-brand-deep">
        PERIGOS - RISCOS - CONTROLES
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        <Panel tone="ppr">
          <SubTitle>Perigo ou fator de risco ocupacional</SubTitle>
          Elemento ou situação que, isoladamente ou em combinação, tem o potencial de dar origem a
          lesões ou agravos à saúde
        </Panel>
        <Panel tone="ppr">
          <SubTitle>Risco ocupacional</SubTitle>
          Combinação da probabilidade de ocorrer lesão ou agravo à saúde causados por um evento
          perigoso, exposição a agente nocivo ou exigência da atividade de trabalho e da severidade
          dessa lesão ou agravo à saúde.
        </Panel>
        <Panel tone="ppr">
          <SubTitle>Controle</SubTitle>
          Medidas de equipamentos ou procedimentos que tornam os riscos ocupacionais dentro de
          condições seguras para realização.
        </Panel>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="flex items-center gap-3">
          <Panel className="flex-1">
            <SubTitle>+ Riscos Ocupacionais</SubTitle>
            <p className="text-sm">Operação e Atividades com</p>
            <p className="font-display text-base font-semibold text-destructive">
              Perigo - controle
            </p>
          </Panel>
          <SetaDiagonal sentido="cima-direita" />
        </div>
        <div className="flex items-center gap-3">
          <SetaDiagonal sentido="baixo-esquerda" />
          <Panel className="flex-1">
            <SubTitle>Riscos Ocupacionais ‘compatíveis’</SubTitle>
            <p className="text-sm">Operação e Atividades com</p>
            <p className="font-display text-base font-semibold text-ok">Perigo + controle</p>
          </Panel>
        </div>
      </div>
      <Panel tone="warn" className="mt-4 text-center font-semibold">
        O PERIGO É INERENTE A ATIVIDADE- OPERAÇÃO, MAS O RISCO PODE SER CONTROLADO
      </Panel>

      <SectionTitle>Riscos Ocupacionais</SectionTitle>
      <p className="mb-3 text-center text-xs text-muted-foreground">
        Clique em um dos círculos para ver um exemplo. Clique novamente para esconder.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {RISCOS_OCUPACIONAIS.map((r) => {
          const aberto = revelado === r.nome;
          return (
            <CircleItem
              key={r.nome}
              label={r.nome}
              active={aberto}
              onClick={() => setRevelado((atual) => (atual === r.nome ? null : r.nome))}
            >
              <span
                aria-hidden={aberto ? true : undefined}
                className={`absolute inset-0 flex flex-col items-center justify-center gap-1 p-3 transition-opacity duration-500 ${
                  aberto ? "opacity-0" : "opacity-100"
                }`}
              >
                <img
                  src={r.ico}
                  alt={r.alt}
                  width={512}
                  height={512}
                  loading="lazy"
                  className="size-10 object-contain sm:size-14"
                />
                <span className="leading-tight">{r.nome}</span>
              </span>
              <span
                aria-hidden={aberto ? undefined : true}
                className={`absolute inset-0 flex items-center justify-center p-4 text-[10px] leading-snug font-medium transition-opacity duration-500 sm:text-xs ${
                  aberto ? "opacity-100" : "opacity-0"
                }`}
              >
                {r.exemplo}
              </span>
            </CircleItem>
          );
        })}
      </div>
    </PageShell>
  );
}

/* ------------------------------- Página 7 ------------------------------- */
export const AGENTES = [
  {
    nome: "Poeiras",
    texto:
      "Aerodispersóides sólidos gerados por ruptura mecânica de materiais, como corte, moagem ou lixamento.",
    foto: agPoeiras,
    fotoAlt: "Poeira suspensa gerada por corte e lixamento de material",
  },
  {
    nome: "Fumos",
    texto:
      "Aerodispersóides sólidos formados pela condensação de vapores metálicos, típicos de processos de solda.",
    foto: agFumos,
    fotoAlt: "Fumos metálicos gerados em processo de solda",
  },
  {
    nome: "Névoas",
    texto:
      "Aerodispersóides líquidos gerados por ruptura mecânica de líquidos, como na pulverização de tintas.",
    foto: agNevoas,
    fotoAlt: "Névoa de tinta gerada por pulverização",
  },
  {
    nome: "Neblina",
    texto:
      "Aerodispersóides líquidos formados pela condensação de vapores de substâncias líquidas.",
    foto: agNeblina,
    fotoAlt: "Neblina formada por condensação de vapores",
  },
  {
    nome: "Gases",
    texto:
      "Substâncias que, nas condições normais de temperatura e pressão, se apresentam no estado gasoso.",
    foto: agGases,
    fotoAlt: "Liberação de gases em ambiente industrial",
  },
  {
    nome: "Vapores",
    texto:
      "Fase gasosa de substâncias que, nas condições normais de temperatura e pressão, são líquidas ou sólidas.",
    foto: agVapores,
    fotoAlt: "Vapores desprendidos de líquido em recipiente industrial",
  },
];

export function Page07({ onNext }: PageProps) {
  const [revelado, setRevelado] = useState<string | null>(null);
  const [liberado, setLiberado] = useState(false);

  useEffect(() => {
    if (!revelado) return;
    const id = setTimeout(() => setLiberado(true), 4000);
    return () => clearTimeout(id);
  }, [revelado]);

  return (
    <PageShell
      title={TITLE}
      track="PPR"
      footer={
        <>
          <AdvanceButton onClick={onNext} disabled={!liberado} />
        </>
      }
    >
      <SectionTitle>Agentes químicos</SectionTitle>
      <Panel tone="ppr">
        Substâncias, compostos ou produtos que possam penetrar no organismo pela via respiratória,
        nas formas de <strong>poeiras</strong>, <strong>fumos</strong>, <strong>névoas</strong>,{" "}
        <strong>neblinas</strong>, <strong>gases</strong> ou <strong>vapores</strong>, ou que, pela
        natureza da atividade de exposição, possam ter contato ou ser absorvidos pelo organismo
        através da pele ou por ingestão.
      </Panel>

      <SectionTitle>Como os agentes químicos existem no ambiente de trabalho?</SectionTitle>
      <div className="flex flex-wrap justify-center gap-3">
        {AGENTES.map((a) => (
          <CircleItem
            key={a.nome}
            label={a.nome}
            active={revelado === a.nome}
            onClick={() => setRevelado(a.nome)}
            bgImage={a.foto}
            bgAlt={a.fotoAlt}
          >
            {revelado === a.nome ? (
              <span className="relative z-10 px-1 text-[10px] leading-snug font-medium sm:text-xs">
                {a.texto}
              </span>
            ) : (
              <span className="relative z-10 rounded-full bg-background/85 px-2 py-1 text-brand-deep">
                {a.nome}
              </span>
            )}
          </CircleItem>
        ))}
      </div>
      <Panel className="mt-4">
        A forma como o agente químico é apresentado no ambiente de trabalho servirá como base para a
        adoção das medidas de proteção.
      </Panel>

      <SectionTitle>Alguns riscos da exposição a agentes químicos</SectionTitle>
      <Panel>
        <Bullets
          items={[
            "Riscos pela exposição dérmica (contaminação e queimadura)",
            "Riscos pela ingestão (intoxicação)",
            "Riscos relacionados a exposição por vias respiratórias, definido no PPR como “riscos respiratórios”",
          ]}
        />
      </Panel>
    </PageShell>
  );
}

/* ------------------------------- Página 8 ------------------------------- */
export function Page08({ onNext, onBackToStart }: PageProps) {
  const podeVoltar = useReadingTimer(6000);
  return (
    <PageShell
      title={TITLE}
      track="PPR"
      footer={
        <>
          <BackToStartButton enabled={podeVoltar} onClick={onBackToStart} />
          <AdvanceButton onClick={onNext} />
        </>
      }
    >
      <SectionTitle>Hierarquia das medidas de proteção</SectionTitle>
      <div className="grid gap-4 sm:grid-cols-3">
        <Panel tone="ppr">
          <SubTitle>Equipamentos de proteção coletiva</SubTitle>
          <Bullets
            items={[
              "Eliminam ou reduzam o risco",
              "Que previnam a disseminação",
              "Que reduzam os níveis",
            ]}
          />
        </Panel>
        <Panel tone="ppr">
          <SubTitle>Medidas de caráter administrativo</SubTitle>
          Ou medidas de organização de trabalho
        </Panel>
        <Panel tone="ppr">
          <SubTitle>EPI</SubTitle>O equipamento de proteção individual é última medida adotada,
          quando as outras medidas - coletivas e de organização do trabalho - não forem suficientes.
        </Panel>
      </div>

      <SectionTitle>Medidas de controle</SectionTitle>
      <Panel>
        <Bullets
          items={[
            "Equipamentos de proteção coletiva (exaustores)",
            "Medidas de organização do trabalho (baseada nos resultados de medição ambiental, diminuir o tempo de exposição ao agente)",
            "Equipamentos de proteção individual (máscaras de proteção)",
          ]}
        />
      </Panel>

      <SectionTitle>Quando usar?</SectionTitle>
      <div className="grid items-center gap-4 sm:grid-cols-[1fr_auto]">
        <div className="grid gap-4 sm:grid-cols-2">
          <Panel tone="brand">
            De maneira complementar as medidas de proteção coletivas e organização do trabalho
          </Panel>
          <Panel tone="brand">
            Enquanto são implementadas as medidas de proteção coletivas e organização do trabalho
          </Panel>
          <Panel tone="brand">Em concentrações medidas, acima dos níveis indicados</Panel>
          <Panel tone="brand">Em casos emergenciais</Panel>
        </div>
        <img
          src={icoRostoRespirador}
          alt="Ícone de rosto de perfil usando respirador"
          width={512}
          height={512}
          loading="lazy"
          className="mx-auto size-28 object-contain sm:size-36"
        />
      </div>
      <Panel tone="warn" className="mt-4">
        <SubTitle>Posso usar fora desses casos?</SubTitle>
        Fora desses casos é permitido o uso, considerando o ato voluntário, ou seja, quando mesmo
        não existindo condições para exigência, o uso do EPI dá mais sensação de segurança ao
        usuário para seguir nas suas atividades.
      </Panel>

      <SectionTitle>EPR - Equipamento de Proteção Respiratória</SectionTitle>
      <Panel>
        Para a proteção dos riscos respiratórios, são definidos os equipamentos de proteção
        individual são chamados de EPR.
      </Panel>

      <SectionTitle>A escolha do EPR</SectionTitle>
      <Panel>
        Um EPR não é capaz de oferecer a proteção contra todos os agentes que podem causar riscos
        respiratórios no ambiente de trabalho. O tipo de substância química e a forma como é
        apresentada no ambiente são o primeiro passo para escolha do EPR adequado.
      </Panel>

      <SectionTitle>Precauções gerais na escolha do EPR</SectionTitle>
      <Panel tone="ppr">
        <p className="mb-2">
          Algumas orientações de ordem geral quanto ao uso do EPR, devem sempre serem observadas:
        </p>
        <Bullets
          items={[
            "Seguir as instruções de uso do EPR escolhido;",
            "Considerar se o usuário do EPR, já foi treinado antes (se o treinamento é inicial ou de reciclagem)",
            "Se o usuário já sinalizou sintomas ao usar o EPR que possam indicar não estar adequado ao mesmo, como sentir tonturas, enjoos, qualquer outro tipo de mal-estar, ou ainda, perceba o ‘cheiro ou gosto’ do contaminante",
          ]}
        />
      </Panel>
    </PageShell>
  );
}

/* ------------------------------- Página 9 ------------------------------- */
export const TEXTO_FACIAL_INTEIRA =
  "A cobertura das vias respiratórias com vedação facial que cobre a face inteira.";
export const TEXTO_SEMI_DESCARTAVEL =
  "A cobertura das vias respiratórias com vedação facial que cobre a boca e o nariz e se apoia embaixo do queixo.";
export const TEXTO_MANUTENCAO_INFO =
  "Para respiradores de manutenção, existem peças de reposição adequadas ao risco de exposição: cartuchos químicos para proteção à gases e vapores e filtros mecânicos a aerodispersóides. Há também a opção de filtros combinados, quando a exposição é simultânea.";

/** Os três tipos de EPR apresentados no bloco superior da Página 9. */
export const TIPOS_EPR = [
  {
    nome: "Facial inteira",
    img: eprFacialInteira,
    alt: "Respirador de peça facial inteira, com visor e cartucho frontal",
  },
  {
    nome: "Semi-facial",
    img: eprSemifacial,
    alt: "Respirador semi-facial de manutenção, com dois cartuchos laterais",
  },
  {
    nome: "Peça facial filtrante (descartável)",
    img: eprPff,
    alt: "Peça facial filtrante descartável, com clipe nasal e tirantes elásticos",
  },
];

function useTimedFlag(ativo: boolean, ms: number) {
  const [pronto, setPronto] = useState(false);
  useEffect(() => {
    if (!ativo) return;
    const id = setTimeout(() => setPronto(true), ms);
    return () => clearTimeout(id);
  }, [ativo, ms]);
  return pronto;
}

/** Foto de apoio das linhas do diagrama "EPR e a forma do risco respiratório". */
function FotoRisco({ src, alt, legenda }: { src: string; alt: string; legenda: string }) {
  return (
    <figure className="w-28 shrink-0 sm:w-32">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full rounded-lg border border-border bg-background object-contain shadow-panel"
      />
      <figcaption className="mt-1 text-center text-[10px] leading-tight text-muted-foreground">
        {legenda}
      </figcaption>
    </figure>
  );
}

export function Page09({ onNext, onBackToStart }: PageProps) {
  const podeVoltar = useReadingTimer(6000);
  const [facialAberta, setFacialAberta] = useState(false);
  const [duplaAberta, setDuplaAberta] = useState(false);
  const [infoAberta, setInfoAberta] = useState(false);
  const okFacial = useTimedFlag(facialAberta, 4000);
  const okDupla = useTimedFlag(duplaAberta, 4000);
  const okInfo = useTimedFlag(infoAberta, 4000);
  const podeAvancar = okFacial && okDupla && okInfo;

  return (
    <PageShell
      title={TITLE}
      track="PPR"
      footer={
        <>
          <BackToStartButton enabled={podeVoltar} onClick={onBackToStart} />
          <AdvanceButton onClick={onNext} disabled={!podeAvancar} />
        </>
      }
    >
      <SectionTitle>Escolha do EPR — Modelo</SectionTitle>
      <Panel tone="ppr">
        Existem os modelos de manutenção e os descartáveis. A escolha de cada um é feitas, de acordo
        com a forma do risco respiratório (normalmente, EPR que são respiradores descartáveis não
        são compatíveis para proteção de gases e vapores), com a demanda-custo-tempo de uso (os de
        manutenção duram mais, mas são mais caros) e adaptação ao trabalhador (quanto ao tamanho e
        modelo disponível).
      </Panel>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {TIPOS_EPR.map((t) => (
          <figure key={t.nome} className="rounded-xl border border-border bg-card p-3 shadow-panel">
            <img
              src={t.img}
              alt={t.alt}
              loading="lazy"
              className="mx-auto h-32 w-full object-contain sm:h-36"
            />
            <figcaption className="mt-2 text-center text-xs font-semibold text-brand-deep">
              {t.nome}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
        <CircleItem
          label="Facial inteira"
          active={facialAberta}
          onClick={() => setFacialAberta(true)}
        >
          {facialAberta ? (
            <span className="px-1 text-[10px] leading-snug font-medium sm:text-xs">
              {TEXTO_FACIAL_INTEIRA}
            </span>
          ) : (
            "Facial inteira"
          )}
        </CircleItem>
        <CircleItem label="Semi-facial" active={duplaAberta} onClick={() => setDuplaAberta(true)}>
          {duplaAberta ? (
            <span className="px-1 text-[10px] leading-snug font-medium sm:text-xs">
              {TEXTO_SEMI_DESCARTAVEL}
            </span>
          ) : (
            "Semi-facial"
          )}
        </CircleItem>
        <div className="flex items-center gap-2">
          <figure className="w-16 text-center">
            <img
              src={eprCartuchoQuimico}
              alt="Cartucho químico de reposição do respirador de manutenção"
              loading="lazy"
              className="mx-auto size-14 object-contain"
            />
            <figcaption className="mt-1 text-[10px] leading-tight text-muted-foreground">
              Cartucho químico
            </figcaption>
          </figure>
          <figure className="w-16 text-center">
            <img
              src={eprFiltroMecanico}
              alt="Filtro mecânico de reposição do respirador de manutenção"
              loading="lazy"
              className="mx-auto size-14 object-contain"
            />
            <figcaption className="mt-1 text-[10px] leading-tight text-muted-foreground">
              Filtro mecânico
            </figcaption>
          </figure>
        </div>
        <CircleItem label="Descartáveis" active={duplaAberta} onClick={() => setDuplaAberta(true)}>
          {duplaAberta ? (
            <span className="px-1 text-[10px] leading-snug font-medium sm:text-xs">
              {TEXTO_SEMI_DESCARTAVEL}
            </span>
          ) : (
            "Descartáveis"
          )}
        </CircleItem>
        <button
          type="button"
          aria-label="Informações sobre peças de reposição"
          onClick={() => setInfoAberta(true)}
          className="inline-flex size-11 items-center justify-center rounded-full bg-brand text-lg font-bold text-brand-foreground shadow-circle"
        >
          i
        </button>
        {infoAberta ? (
          <Panel tone="ppr" className="w-full">
            {TEXTO_MANUTENCAO_INFO}
          </Panel>
        ) : null}
      </div>

      <SectionTitle>EPR e a forma do risco respiratório</SectionTitle>
      <p className="mb-2 text-xs font-semibold tracking-wide text-muted-foreground">
        AINDA NA ESCOLHA DO EPR..
      </p>
      <div className="space-y-3">
        <Panel>
          <div className="flex flex-wrap items-center gap-4">
            <div className="min-w-[180px] flex-1">
              <SubTitle>Aerodispersóides</SubTitle>
              <p className="text-sm">
                <strong>Manutenção</strong> e <strong>Descartáveis</strong>
              </p>
            </div>
            <div className="flex gap-3">
              <FotoRisco
                src={eprSemifacial}
                alt="Respirador semi-facial de manutenção"
                legenda="Manutenção"
              />
              <FotoRisco
                src={eprPff}
                alt="Peça facial filtrante descartável PFF2"
                legenda="Descartável (PFF2)"
              />
            </div>
          </div>
        </Panel>
        <Panel>
          <div className="flex flex-wrap items-center gap-4">
            <div className="min-w-[180px] flex-1">
              <SubTitle>Gases e vapores</SubTitle>
              <p className="text-sm">
                Apenas <strong className="text-brand-deep">Manutenção</strong>
              </p>
              <p className="mt-2 text-xs leading-snug text-muted-foreground">
                Apenas em casos bem específicos, de acordo com a indicação do fabricante, alguns
                modelos descartáveis são compatíveis para o uso em ambientes com baixa concentração
                de contaminantes.
              </p>
            </div>
            <FotoRisco
              src={eprSemifacial}
              alt="Respirador semi-facial de manutenção"
              legenda="Manutenção"
            />
          </div>
        </Panel>
        <Panel>
          <div className="flex flex-wrap items-center gap-4">
            <div className="min-w-[180px] flex-1">
              <SubTitle>Aerodispersóides + Gases e vapores</SubTitle>
              <p className="text-sm">
                Apenas <strong className="text-brand-deep">Manutenção</strong>
              </p>
              <p className="mt-2 text-sm">
                Existem situações que em o processo gera riscos respiratórios na forma de
                aerodisperssóides e gases, de maneira simultânea. Nesses casos, apenas o respirador
                de manutenção (com o conjunto de filtro mecânico e cartucho químico adequado)
                fornece a proteção.
              </p>
            </div>
            <FotoRisco
              src={eprSemifacial}
              alt="Respirador semi-facial de manutenção"
              legenda="Manutenção"
            />
          </div>
        </Panel>
      </div>

      <SectionTitle>Eficiência do EPR pelo modelo</SectionTitle>
      <p className="mb-2 text-xs font-semibold tracking-wide text-muted-foreground">
        AINDA NA ESCOLHA DO EPR.. — Peça Facial Filtrante
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        <Panel tone="ppr">
          <SubTitle>PFF 1</SubTitle>
          Possuem eficiência mínima de 80% (Penetração máxima de 20%)
        </Panel>
        <Panel tone="ppr">
          <SubTitle>PFF 2</SubTitle>
          Possuem eficiência mínima de 94% (Penetração máxima de 6%)
        </Panel>
        <Panel tone="ppr">
          <SubTitle>PFF 3</SubTitle>
          Possuem eficiência mínima de 99% (Penetração máxima de 1%)
        </Panel>
      </div>
      <Panel className="mt-4">
        Cada uma dessas peças possui um Fator de Proteção Atribuído (FPA) indicado pelo fabricante.
      </Panel>
    </PageShell>
  );
}

/* ------------------------------ Página 10 ------------------------------- */
export const SUBSTANCIAS = {
  pintura: [
    { nome: "ACETATO DE BUTILA", limite: 50, unidade: "ppm" },
    { nome: "XILENO", limite: 20, unidade: "ppm" },
  ],
  solda: [
    { nome: "MANGANÊS", limite: 0.02, unidade: "mg/m³" },
    { nome: "ÓXIDO DE FERRO", limite: 5, unidade: "mg/m³" },
  ],
};

type Lado = "pintura" | "solda";

const CENARIOS: Array<{ id: Lado; img: string; alt: string; legenda: string }> = [
  {
    id: "pintura",
    img: pintura,
    alt: "Pintura com tintas à base de solvente",
    legenda: "Pintura com tintas à Base de Solvente",
  },
  {
    id: "solda",
    img: solda,
    alt: "Manutenção e reparos com solda",
    legenda: "Manutenção-reparos com solda",
  },
];

const NIVEIS_FPMR = [
  "RISCO OCUPACIONAL",
  "RISCOS RESPIRATÓRIOS",
  "CONCENTRAÇÃO MEDIDA",
  "NÍVEIS-LIMITES",
];

/** Símbolo de colchete que conecta dois níveis do diagrama do FPMR. */
function ColcheteConector() {
  return (
    <svg
      viewBox="0 0 160 42"
      width="160"
      height="42"
      aria-hidden="true"
      className="mx-auto text-brand"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 4 L6 20 L154 20 L154 4" />
        <path d="M80 20 L80 30" />
        <path d="M71 29 L80 38 L89 29" />
      </g>
    </svg>
  );
}

/** Diagrama dos 4 elementos do FPMR, em ordem decrescente de abrangência. */
function DiagramaFPMR() {
  const larguras = ["100%", "80%", "62%", "46%"];
  return (
    <div className="my-4 flex flex-col items-center">
      {NIVEIS_FPMR.map((nivel, i) => (
        <div key={nivel} className="flex w-full flex-col items-center">
          <div
            style={{ maxWidth: larguras[i] }}
            className="w-full rounded-lg border border-brand/40 bg-brand-soft px-3 py-2 text-center text-xs font-semibold tracking-wide text-brand-deep sm:text-sm"
          >
            {nivel}
          </div>
          {i < NIVEIS_FPMR.length - 1 ? <ColcheteConector /> : null}
        </div>
      ))}
    </div>
  );
}

const OPCOES_FPA: Array<{ label: string; valor: number; img: string; alt: string }> = [
  {
    label: "Semifacial PFF2 - PFF3",
    valor: 10,
    img: eprSemifacial,
    alt: "Máscara semifacial",
  },
  {
    label: "Facial inteira PFF2 - PFF3",
    valor: 100,
    img: eprFacialInteira,
    alt: "Máscara facial inteira",
  },
];

export function Page10({ onNext, onBackToStart }: PageProps) {
  const podeVoltar = useReadingTimer(6000);
  const [lado, setLado] = useState<Lado | null>(null);
  const [concentracao, setConcentracao] = useState("");
  const [substancia, setSubstancia] = useState<string | null>(null);
  const [fpa, setFpa] = useState<number | null>(null);
  const [resultado, setResultado] = useState<"aprovado" | "reprovado" | null>(null);

  const conc = Number(concentracao.replace(",", "."));
  const concValida = concentracao.trim() !== "" && Number.isFinite(conc);
  const limite = useMemo(() => {
    if (!lado || !substancia) return null;
    return SUBSTANCIAS[lado].find((s) => s.nome === substancia)?.limite ?? null;
  }, [lado, substancia]);
  const fpmr = concValida && limite ? conc / limite : null;

  useEffect(() => {
    setSubstancia(null);
    setResultado(null);
  }, [lado]);
  useEffect(() => {
    setResultado(null);
  }, [concentracao, substancia, fpa]);

  const podeCalcular = concValida && limite !== null && fpa !== null;
  const calcular = () => {
    if (!podeCalcular || fpmr === null || fpa === null) return;
    setResultado(fpmr < fpa ? "aprovado" : "reprovado");
  };

  return (
    <PageShell
      title={TITLE}
      track="PPR"
      footer={
        <>
          <BackToStartButton enabled={podeVoltar} onClick={onBackToStart} />
          <AdvanceButton onClick={onNext} disabled={resultado === null} />
        </>
      }
    >
      <SectionTitle>FPMR — Fator de proteção mínimo requerido</SectionTitle>
      <Panel tone="ppr">
        O Fator de Proteção Atribuído (FPA) indicado pelo fabricante é um item fundamental para
        garantir que a escolha foi adequada a proteção do usuário. Os valores do FPA são comparados
        ao FPMR (Fator Proteção Mínimo Requerido).
      </Panel>

      <SectionTitle>Qual o valor do FPMR?</SectionTitle>
      <Panel>
        <p>
          Para definir o valor do FPMR precisamos considerar um nos contextos de uso descritos para
          indicação do EPR: Em concentrações medidas, acima dos níveis indicados
        </p>
        <DiagramaFPMR />
        <p className="font-display mt-3 text-center text-sm font-semibold text-brand-deep">
          FPMR = CONCENTRAÇÃO MEDIDA / NÍVEIS-LIMITES
        </p>
      </Panel>

      <SectionTitle>Simulador e validador da Proteção Mínima Requerida.</SectionTitle>
      <div className="grid gap-4 sm:grid-cols-2">
        {CENARIOS.map((c) => (
          <div key={c.id} className="space-y-3">
            <button
              type="button"
              aria-pressed={lado === c.id}
              onClick={() => setLado(c.id)}
              className="block w-full text-left"
            >
              <Figure
                src={c.img}
                alt={c.alt}
                caption={c.legenda}
                className={
                  lado === c.id ? "rounded-xl ring-2 ring-brand" : "opacity-70 transition-opacity"
                }
              />
            </button>
            <div className="flex flex-wrap gap-2">
              {SUBSTANCIAS[c.id].map((s) => (
                <button
                  key={s.nome}
                  type="button"
                  disabled={lado !== c.id}
                  aria-pressed={substancia === s.nome}
                  onClick={() => setSubstancia(s.nome)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
                    substancia === s.nome
                      ? "border-ppr bg-ppr text-brand-foreground"
                      : "border-ppr/40 bg-card"
                  }`}
                >
                  {s.nome} {s.limite} {s.unidade}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Panel tone="brand">
          <SubTitle>Digite uma concentração</SubTitle>
          <input
            type="text"
            inputMode="decimal"
            value={concentracao}
            onChange={(e) => setConcentracao(e.target.value)}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </Panel>
        <Panel tone="brand">
          <SubTitle>FPMR calculado</SubTitle>
          <input
            readOnly
            aria-label="FPMR calculado"
            value={fpmr !== null ? String(Math.round(fpmr * 100) / 100) : ""}
            className="w-full rounded-md border border-input bg-muted px-3 py-2 text-sm"
          />
        </Panel>
      </div>

      <SectionTitle>Como saber se é válido?</SectionTitle>
      <Panel>
        <p className="mb-3">
          A norma possibilita aos fabricantes diversos tipos de FPA. Para exemplificar, escolha uma
          opção:
        </p>
        <div className="flex flex-wrap items-center gap-3">
          {OPCOES_FPA.map((o) => (
            <button
              key={o.valor}
              type="button"
              aria-pressed={fpa === o.valor}
              onClick={() => setFpa(o.valor)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                fpa === o.valor ? "border-brand bg-brand text-brand-foreground" : "border-border"
              }`}
            >
              <img
                src={o.img}
                alt={o.alt}
                loading="lazy"
                className="size-9 rounded-full bg-background object-contain p-0.5"
              />
              {o.label}
            </button>
          ))}
          <button
            type="button"
            aria-label="Calcular"
            disabled={!podeCalcular}
            onClick={calcular}
            className="inline-flex size-11 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-circle disabled:cursor-not-allowed disabled:opacity-40"
          >
            ⚙
          </button>
          <span className="text-sm text-muted-foreground">Calcular</span>
        </div>

        {resultado === "aprovado" ? (
          <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-ok">
            <span className="inline-flex size-8 items-center justify-center rounded-full border border-ok">
              ✓
            </span>
            proteção mínima requerida garantida
          </p>
        ) : null}
        {resultado === "reprovado" ? (
          <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-destructive">
            <span className="inline-flex size-8 items-center justify-center rounded-full border border-destructive">
              ✕
            </span>
            respirador não adequado. Necessário trocar
          </p>
        ) : null}
      </Panel>

      <Figure
        className="mx-auto mt-4 max-w-md"
        src={respiradores}
        alt="Respirador descartável e semifacial de manutenção"
      />
    </PageShell>
  );
}
