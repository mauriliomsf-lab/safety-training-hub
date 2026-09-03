import { useEffect, useMemo, useState } from "react";

import {
  AdvanceButton,
  BackToStartButton,
  Bullets,
  CircleItem,
  Figure,
  PageNumber,
  PageShell,
  Panel,
  SectionTitle,
  SubTitle,
  useReadingTimer,
  type PageProps,
} from "./kit";

import agentes from "@/assets/agentes-quimicos.jpg";
import modelos from "@/assets/modelos-epr.jpg";
import pintura from "@/assets/pintura-solvente.jpg";
import solda from "@/assets/manutencao-solda.jpg";
import respiradores from "@/assets/ppr-respiradores.jpg";

const TITLE = "Treinamento de proteção respiratória";

/* ------------------------------- Página 6 ------------------------------- */
export function Page06({ onNext, onBackToStart }: PageProps) {
  const podeVoltar = useReadingTimer(6000);
  return (
    <PageShell
      title={TITLE}
      track="PPR"
      footer={
        <>
          <BackToStartButton enabled={podeVoltar} onClick={onBackToStart} />
          <PageNumber n={6} />
          <AdvanceButton onClick={onNext} />
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
        <Panel>
          <SubTitle>+ Riscos Ocupacionais</SubTitle>
          <p className="text-sm">Operação e Atividades com</p>
          <p className="font-display text-base font-semibold text-destructive">Perigo - controle</p>
        </Panel>
        <Panel>
          <SubTitle>Riscos Ocupacionais ‘compatíveis’</SubTitle>
          <p className="text-sm">Operação e Atividades com</p>
          <p className="font-display text-base font-semibold text-ok">Perigo + controle</p>
        </Panel>
      </div>
      <Panel tone="warn" className="mt-4 text-center font-semibold">
        O PERIGO É INERENTE A ATIVIDADE- OPERAÇÃO, MAS O RISCO PODE SER CONTROLADO
      </Panel>

      <SectionTitle>Riscos Ocupacionais</SectionTitle>
      <div className="flex flex-wrap justify-center gap-3">
        {["Mecânicos / Acidentários", "Físicos", "Ergonômicos", "Biológicos", "Químicos"].map((r) => (
          <CircleItem key={r} label={r} />
        ))}
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
  },
  {
    nome: "Fumos",
    texto:
      "Aerodispersóides sólidos formados pela condensação de vapores metálicos, típicos de processos de solda.",
  },
  {
    nome: "Névoas",
    texto:
      "Aerodispersóides líquidos gerados por ruptura mecânica de líquidos, como na pulverização de tintas.",
  },
  {
    nome: "Neblina",
    texto: "Aerodispersóides líquidos formados pela condensação de vapores de substâncias líquidas.",
  },
  {
    nome: "Gases",
    texto:
      "Substâncias que, nas condições normais de temperatura e pressão, se apresentam no estado gasoso.",
  },
  {
    nome: "Vapores",
    texto:
      "Fase gasosa de substâncias que, nas condições normais de temperatura e pressão, são líquidas ou sólidas.",
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
          <PageNumber n={7} />
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
          >
            {revelado === a.nome ? (
              <span className="px-1 text-[10px] leading-snug font-medium sm:text-xs">{a.texto}</span>
            ) : (
              <span className="relative z-10">{a.nome}</span>
            )}
          </CircleItem>
        ))}
      </div>
      <Panel className="mt-4">
        A forma como o agente químico é apresentado no ambiente de trabalho servirá como base para a
        adoção das medidas de proteção.
      </Panel>

      <SectionTitle>Alguns riscos da exposição a agentes químicos</SectionTitle>
      <div className="grid gap-4 sm:grid-cols-[1fr_1fr]">
        <Panel>
          <Bullets
            items={[
              "Riscos pela exposição dérmica (contaminação e queimadura)",
              "Riscos pela ingestão (intoxicação)",
              "Riscos relacionados a exposição por vias respiratórias, definido no PPR como “riscos respiratórios”",
            ]}
          />
        </Panel>
        <Figure src={agentes} alt="Gases e vapores em ambiente industrial" />
      </div>
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
          <PageNumber n={8} />
          <AdvanceButton onClick={onNext} />
        </>
      }
    >
      <SectionTitle>Hierarquia das medidas de proteção</SectionTitle>
      <div className="grid gap-4 sm:grid-cols-3">
        <Panel tone="ppr">
          <SubTitle>Equipamentos de proteção coletiva</SubTitle>
          <Bullets
            items={["Eliminam ou reduzam o risco", "Que previnam a disseminação", "Que reduzam os níveis"]}
          />
        </Panel>
        <Panel tone="ppr">
          <SubTitle>Medidas de caráter administrativo</SubTitle>
          Ou medidas de organização de trabalho
        </Panel>
        <Panel tone="ppr">
          <SubTitle>EPI</SubTitle>
          O equipamento de proteção individual é última medida adotada, quando as outras medidas -
          coletivas e de organização do trabalho - não forem suficientes.
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
      <Panel tone="warn" className="mt-4">
        <SubTitle>Posso usar fora desses casos?</SubTitle>
        Fora desses casos é permitido o uso, considerando o ato voluntário, ou seja, quando mesmo não
        existindo condições para exigência, o uso do EPI dá mais sensação de segurança ao usuário para
        seguir nas suas atividades.
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
  "Facial inteira: cobre olhos, nariz e boca, oferecendo maior fator de proteção e também proteção ocular, indicada para maiores concentrações e para gases e vapores irritantes.";
export const TEXTO_SEMI_DESCARTAVEL =
  "Semi-facial e descartável: cobrem nariz e boca. A semi-facial é de manutenção, com filtros substituíveis; a descartável (peça facial filtrante) é de uso limitado e, em regra, não é compatível com gases e vapores.";
export const TEXTO_MANUTENCAO_INFO =
  "Manutenção: os respiradores de manutenção possuem peças de reposição (filtros mecânicos, cartuchos químicos, válvulas, tirantes e diafragma de voz) que devem ser substituídas conforme a indicação do fabricante e sempre que apresentarem defeito.";

function useTimedFlag(ativo: boolean, ms: number) {
  const [pronto, setPronto] = useState(false);
  useEffect(() => {
    if (!ativo) return;
    const id = setTimeout(() => setPronto(true), ms);
    return () => clearTimeout(id);
  }, [ativo, ms]);
  return pronto;
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
          <PageNumber n={9} />
          <AdvanceButton onClick={onNext} disabled={!podeAvancar} />
        </>
      }
    >
      <SectionTitle>Escolha do EPR — Modelo</SectionTitle>
      <Panel tone="ppr">
        Existem os modelos de manutenção e os descartáveis. A escolha de cada um é feitas, de acordo
        com a forma do risco respiratório (normalmente, EPR que são respiradores descartáveis não são
        compatíveis para proteção de gases e vapores), com a demanda-custo-tempo de uso (os de
        manutenção duram mais, mas são mais caros) e adaptação ao trabalhador (quanto ao tamanho e
        modelo disponível).
      </Panel>

      <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_1fr]">
        <Figure src={modelos} alt="Modelos de EPR: facial inteira, semi-facial e descartável" />
        <div className="flex flex-wrap items-center justify-center gap-3">
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
      </div>

      <SectionTitle>EPR e a forma do risco respiratório</SectionTitle>
      <p className="mb-2 text-xs font-semibold tracking-wide text-muted-foreground">
        AINDA NA ESCOLHA DO EPR..
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        <Panel>
          <SubTitle>Aerodispersóides</SubTitle>
          Descartáveis / Manutenção
        </Panel>
        <Panel>
          <SubTitle>Gases e vapores</SubTitle>
          Apenas em casos bem específicos, de acordo com a indicação do fabricante, alguns modelos
          descartáveis são compatíveis para o uso em ambientes com baixa concentração de
          contaminantes.
        </Panel>
        <Panel>
          <SubTitle>Aerodispersóides + Gases e vapores</SubTitle>
          Existem situações que em o processo gera riscos respiratórios na forma de aerodisperssóides
          e gases, de maneira simultânea. Nesses casos, apenas o respirador de manutenção (com o
          conjunto de filtro mecânico e cartucho químico adequado) fornece a proteção.
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

export function Page10({ onNext }: PageProps) {
  return (
    <PageShell
      title={TITLE}
      track="PPR"
      footer={
        <>
          <BackToStartButton />
          <PageNumber n={10} />
          <AdvanceButton onClick={onNext} />
        </>
      }
    >
      <SectionTitle>FPMR — Fator de proteção mínimo requerido</SectionTitle>
      <Panel tone="ppr">
        O Fator de Proteção Atribuído (FPA) indicado pelo fabricante é um item fundamental para
        garantir que a escolha foi adequada a proteção do usuário. Os valores do FPA são comparados ao
        FPMR (Fator Proteção Mínimo Requerido).
      </Panel>

      <SectionTitle>Qual o valor do FPMR?</SectionTitle>
      <Panel>
        <p>
          Para definir o valor do FPMR precisamos considerar um nos contextos de uso descritos para
          indicação do EPR: Em concentrações medidas, acima dos níveis indicados
        </p>
        <p className="font-display mt-3 text-center text-sm font-semibold text-brand-deep">
          FPMR = CONCENTRAÇÃO MEDIDA / NÍVEIS-LIMITES
        </p>
      </Panel>

      <SectionTitle>Simulador e validador da Proteção Mínima Requerida.</SectionTitle>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-3">
          <Figure src={pintura} alt="Pintura com tintas à base de solvente" caption="Pintura com tintas à Base de Solvente" />
          <div className="flex gap-2">
            {SUBSTANCIAS.pintura.map((s) => (
              <span
                key={s.nome}
                className="rounded-full border border-ppr/40 bg-card px-3 py-1.5 text-xs font-semibold"
              >
                {s.nome} {s.limite} {s.unidade}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <Figure src={solda} alt="Manutenção e reparos com solda" caption="Manutenção-reparos com solda" />
          <div className="flex gap-2">
            {SUBSTANCIAS.solda.map((s) => (
              <span
                key={s.nome}
                className="rounded-full border border-ppr/40 bg-card px-3 py-1.5 text-xs font-semibold"
              >
                {s.nome} {s.limite} {s.unidade}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Panel tone="brand">
          <SubTitle>Digite uma concentração</SubTitle>
          <input
            type="text"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </Panel>
        <Panel tone="brand">
          <SubTitle>FPMR calculado</SubTitle>
          <input
            readOnly
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
          <span className="rounded-full border border-border px-4 py-2 text-xs font-semibold">
            Semifacial PFF2 - PFF3
          </span>
          <span className="rounded-full border border-border px-4 py-2 text-xs font-semibold">
            Facial inteira PFF2 - PFF3
          </span>
          <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-circle">
            ⚙
          </span>
          <span className="text-sm text-muted-foreground">Calcular</span>
        </div>
      </Panel>

      <Figure
        className="mt-4"
        src={respiradores}
        alt="Respirador descartável e semifacial de manutenção"
      />
    </PageShell>
  );
}
