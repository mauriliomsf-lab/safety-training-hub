import { useEffect, useState } from "react";

import {
  AdvanceButton,
  BackToStartButton,
  Bullets,
  Figure,
  PageNumber,
  PageShell,
  Panel,
  SectionTitle,
  SignatureCanvas,
  SubTitle,
  useReadingTimer,
  useSignaturePad,
  type PageProps,
} from "./kit";

import anatomia from "@/assets/anatomia-ouvido.jpg";
import colocacao from "@/assets/colocacao-abafador.jpg";
import higiene from "@/assets/higiene-auditiva.jpg";
import protetores from "@/assets/pca-protetores.jpg";

const TITLE = "Treinamento - Programa Conservação auditiva";

/* ------------------------------- Página 2 ------------------------------- */
export function Page02({ onNext, onBackToStart }: PageProps) {
  const podeVoltar = useReadingTimer(6000);
  return (
    <PageShell
      title={TITLE}
      track="PCA"
      footer={
        <>
          <BackToStartButton enabled={podeVoltar} onClick={onBackToStart} />
          <PageNumber n={2} />
          <AdvanceButton onClick={onNext} />
        </>
      }
    >
      <SectionTitle>Introdução</SectionTitle>
      <Panel>
        O treinamento dos elementos do Programa de Conservação Auditiva (PCA) busca implementar ações
        planejadas e coordenadas que visem melhorar a qualidade de vida do trabalhador, evitando a
        perda auditiva e reduzindo os efeitos extra auditivos, causados pela exposição ocupacional a
        agentes otoagressores da audição.
      </Panel>

      <SectionTitle>Agente de Risco</SectionTitle>
      <Panel tone="pca">
        <p className="font-display text-center text-sm font-semibold tracking-wide text-brand-deep sm:text-base">
          SOM &gt;&gt; RUÍDO &gt;&gt; NÍVEIS DE PRESSÃO SONORA.
        </p>
        <p className="mt-3">
          O som é uma variação da pressão atmosférica capaz de sensibilizar nossos ouvidos.
        </p>
        <p className="mt-2">
          o ruído é um som complexo, uma mistura de diferentes frequências, com características de
          variações de pressão que podem, ou não, dependendo de sua intensidade, provocar danos à
          saúde do trabalhador durante sua vida laboral.
        </p>
      </Panel>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Panel>
          <SubTitle>O ruído pode:</SubTitle>
          <Bullets
            items={[
              "Perturbar a comunicação;",
              "provocar irritação;",
              "ser fonte de fadiga;",
              "aumentar o risco de acidentes;",
              "lesar os órgãos auditivos.",
            ]}
          />
        </Panel>
        <Panel>
          O ruído é aferido considerando os níveis de pressão sonora – NPS – existentes, ou seja,
          verificando a quantidade de energia sonora que é transmitida pelo ar. A unidade de medida
          do NPS é o decibel (dB).
        </Panel>
      </div>

      <SectionTitle>Fisiologia da audição</SectionTitle>
      <Figure src={anatomia} alt="Anatomia do ouvido humano" caption="Anatomia da audição" />

      <SectionTitle>Perda da audição</SectionTitle>
      <div className="grid gap-4 sm:grid-cols-3">
        <Panel tone="warn">
          <SubTitle>Traumatismo</SubTitle>
          Coçar as orelhas com objetos e cotonetes.
        </Panel>
        <Panel tone="warn">
          <SubTitle>Medicamentos</SubTitle>
          Exagero e uso incorreto
        </Panel>
        <Panel tone="warn">
          <SubTitle>Doenças</SubTitle>
          Diabetes, hipertensão arterial, doenças de tireoide, infecciosas ou virais.
        </Panel>
      </div>

      <SectionTitle>A exposição inadequada ao ruído</SectionTitle>
      <Panel tone="pca">
        A exposição prolongada a níveis de pressão sonora intensos (acima de 85 dB(A), em horas de
        trabalho diário) é muitas vezes comum nas atividades profissionais. Neste cenário, a proteção
        auditiva individual ou coletiva é essencial para proteção à saúde.
      </Panel>
    </PageShell>
  );
}

/* ------------------------------- Página 3 ------------------------------- */
const ESCALA: Array<[number, string]> = [
  [140, "Limiar da dor"],
  [130, ""],
  [120, "Extremamente alto"],
  [110, ""],
  [100, "Muito alto"],
  [90, ""],
  [80, "Alto"],
  [70, ""],
  [60, "Moderado"],
  [50, ""],
  [40, "Ligeiro"],
  [30, ""],
  [20, ""],
  [10, ""],
];

const ATENUACOES = [16, 20, 21];

export function Page03({ onNext }: PageProps) {
  const [medido, setMedido] = useState("");
  const [atenuacao, setAtenuacao] = useState<number | null>(null);
  const medidoNum = Number(medido.replace(",", "."));
  const medidoValido = medido.trim() !== "" && Number.isFinite(medidoNum);
  const atenuado =
    medidoValido && atenuacao !== null ? String(Math.round((medidoNum - atenuacao) * 100) / 100) : "";
  const podeAvancar = medidoValido && atenuacao !== null;

  useEffect(() => {
    if (!medidoValido) setAtenuacao(null);
  }, [medidoValido]);

  return (
    <PageShell
      title={TITLE}
      track="PCA"
      footer={
        <>
          <PageNumber n={3} />
          <AdvanceButton onClick={onNext} disabled={!podeAvancar} />
        </>
      }
    >
      <SectionTitle>Proteção auditiva - laborais e extra-laborais.</SectionTitle>

      <div className="grid gap-4 sm:grid-cols-[220px_1fr]">
        <Panel>
          <SubTitle>dB — Escala de nível de ruído</SubTitle>
          <table className="w-full text-xs">
            <tbody>
              {ESCALA.map(([db, label]) => (
                <tr key={db} className="border-b border-border/60 last:border-0">
                  <td className="py-1 pr-2 font-semibold text-brand-deep">{db}</td>
                  <td className="py-1 text-muted-foreground">{label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
        <div className="space-y-4">
          <Panel tone="pca">
            Além das medidas de proteção coletiva (que devem ser periodicamente discutidas, revisadas
            e implementadas pelos responsáveis nas empresas), é fundamental que o trabalhador saiba
            das ações de monitoramento periódico exigidas pela NR-07 (PCMSO) — realização de exames
            audiométricos admissional, periódicos e demissional — e as orientações sobre uso correto
            e cuidados necessários, sobre seu EPI – equipamento de proteção individual – para
            proteção auditiva.
          </Panel>
          <Panel tone="warn">
            Zumbido, ou barulho no ouvido permanente, aumento da intensidade da voz ao falar,
            dificuldade em entender o que é dito, podem ser sinais de que você precisa de ajuda
            especializada.
          </Panel>
        </div>
      </div>

      <SectionTitle>Protetores auditivos</SectionTitle>
      <Panel>
        Todos os protetores auriculares, sejam plug ou abafadores de acoplamento ou de arco, devem
        ser validados pelo setor técnico responsável para garantir o que o equipamento disponível
        possua o fator de eficiência para atenuação, compatível às exposições ao ruído que trabalhador
        possa estar exposto no seu trabalho.
      </Panel>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <Panel tone="brand">
          <SubTitle>Valor medido</SubTitle>
          <input
            type="text"
            inputMode="decimal"
            placeholder="dB(A)"
            value={medido}
            onChange={(e) => setMedido(e.target.value)}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </Panel>
        <Panel tone="brand">
          <SubTitle>Atenuação do protetor</SubTitle>
          <div className="flex flex-wrap gap-2">
            {ATENUACOES.map((v) => (
              <button
                key={v}
                type="button"
                disabled={!medidoValido}
                aria-pressed={atenuacao === v}
                onClick={() => setAtenuacao(v)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
                  atenuacao === v
                    ? "border-brand bg-brand text-brand-foreground"
                    : "border-brand/40 bg-card text-brand-deep"
                }`}
              >
                {v} dB
              </button>
            ))}
          </div>
        </Panel>
        <Panel tone="brand">
          <SubTitle>Valor atenuado</SubTitle>
          <input
            type="text"
            readOnly
            placeholder="dB(A)"
            value={atenuado}
            className="w-full rounded-md border border-input bg-muted px-3 py-2 text-sm"
          />
        </Panel>
      </div>

      <SectionTitle>Uso e colocação</SectionTitle>
      <div className="grid gap-4 sm:grid-cols-2">
        <Figure src={colocacao} alt="Pessoa ajustando abafador auditivo" />
        <div className="space-y-4">
          <Panel>
            <Bullets
              items={[
                "Ajuste o arco no topo da cabeça para dar sustentação firme e equilibrada.",
                "Encaixe as conchas sobre as orelhas de forma que fiquem totalmente isoladas dentro do protetor.",
                "Ajuste a altura das conchas para que fiquem bem firmes contra a cabeça, sem folgas.",
              ]}
            />
          </Panel>
          <Panel>
            <Bullets
              items={[
                "Insira as hastes do abafador nas aberturas laterais do capacete até ouvir o clique de travamento.",
                "Já acoplado ao capacete, ajuste as hastes para cima ou para baixo até que as conchas envolvam toda a orelha sem folgas. Aperte os abafadores, verificando se o ajuste ficou correto.",
              ]}
            />
          </Panel>
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Figure src={protetores} alt="Protetores auditivos tipo plug" caption="Colocação do plug" />
        <Panel>
          <Bullets
            items={[
              "Pressione/aperte, levemente, o plug para adaptá-lo para o encaixe no canal auditivo.",
              "Puxe a orelha, suavemente para cima, para ajustar a entrada do protetor no canal auditivo.",
              "Insira o protetor no canal auditivo.",
            ]}
          />
        </Panel>
      </div>
    </PageShell>
  );
}

/* ------------------------------- Página 4 ------------------------------- */
export const PCA_TESTE = [
  "Deve-se trocar as peças de reposição no máximo a cada 6 meses dos abafadores (concha) ?",
  "O plug de silicone deverá ser sempre limpo, com água e sabão neutro e guardado em compartimento específico , diariamente?",
  "O plug de espuma deve ser descartado diariamente?",
];

export const PCA_PARECER = [
  "O protetor auditivos deve ser confortável, compatível com minha atividade e com os outros epis que utilizo?",
  "Entendi que o programa de conservação auditiva tem como missão proteger minha audição , com o comprometimento de todos os setores da empresa?",
];

export const PCA_RESULTADO = [
  "Aprovado para as condições de uso.",
  "Reprovado, devendo ser trocado imediatamente;",
  "Necessária troca imediata, por peças de reposição inadequadas",
  "Necessária troca imediata, por condição verificada com o usuário",
];

function SimNao({ pergunta }: { pergunta: string }) {
  return (
    <div className="flex items-start gap-3 border-b border-border/60 py-3 last:border-0">
      <div className="flex gap-2">
        <span className="inline-flex size-8 items-center justify-center rounded-full border border-ok/50 text-ok">
          ✓
        </span>
        <span className="inline-flex size-8 items-center justify-center rounded-full border border-destructive/50 text-destructive">
          ✕
        </span>
      </div>
      <p className="text-sm leading-relaxed">{pergunta}</p>
    </div>
  );
}

export function Page04({ onNext }: PageProps) {
  return (
    <PageShell
      title={TITLE}
      track="PCA"
      footer={
        <>
          <BackToStartButton />
          <PageNumber n={4} />
          <AdvanceButton onClick={onNext} />
        </>
      }
    >
      <SectionTitle>Inspeção e Manutenção</SectionTitle>
      <div className="grid gap-4 sm:grid-cols-[1fr_1fr]">
        <Figure src={higiene} alt="Higienização de protetores auditivos" />
        <div className="space-y-4">
          <Panel>
            Retire com cuidado, as almofadas externas (se forem removíveis). Limpe com um pano úmido,
            as partes externas do abafador e as almofadas, delicadamente. Seque com papel toalha.
          </Panel>
          <Panel>
            Lave e enxágue os plugs de silicone em água fria. Remova o excesso de umidade com uma
            folha de papel-toalha para acelerar o processo de secagem. Deixe os protetores secarem ao
            ar livre.
          </Panel>
        </div>
      </div>

      <SectionTitle>Teste de conhecimento</SectionTitle>
      <Panel tone="pca">
        <p className="mb-2 text-sm">
          Conhecendo bem meu(s) protetor (s) auditivo(s) marcarei (✓) para “sim” e (✕) para “não”:
        </p>
        {PCA_TESTE.map((p) => (
          <SimNao key={p} pergunta={p} />
        ))}
      </Panel>

      <SectionTitle>Inspeção, conservação e troca</SectionTitle>
      <Panel>
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>O estado do EPI sempre deve ser verificado, de acordo com sua utilização</li>
          <li>Partes rachadas, ressecadas ou rasgos;</li>
          <li>
            Os EPIs de proteção auditivos devem ser cuidados e, quando for indicado, guardado em
            compartimento adequado ( sem contaminantes, calor ou umidade que os danifiquem);
          </li>
          <li>
            o tempo de vida útil de um EPI pode variar por área operacional, pois a exposição a
            outros agentes (exemplo: locais com calor).
          </li>
        </ol>
      </Panel>

      <SectionTitle>Quando trocar?</SectionTitle>
      <Panel tone="warn">
        Em regra, quando não há avaria, é definido que, nos abafadores, após 6 meses, as peças de
        reposição devem ser trocadas.
      </Panel>

      <SectionTitle>Parecer seleção EPI</SectionTitle>
      <Panel tone="pca">
        <p className="mb-2 text-sm">
          Meu protetor foi selecionado por mim durante este treinamento, sendo concluído que:
        </p>
        {PCA_PARECER.map((p) => (
          <SimNao key={p} pergunta={p} />
        ))}
      </Panel>

      <SectionTitle>Resultado</SectionTitle>
      <Panel>
        <ul className="space-y-2 text-sm">
          {PCA_RESULTADO.map((r) => (
            <li key={r} className="flex items-center gap-3">
              <span className="size-5 shrink-0 rounded-full border border-brand/50" />
              {r}
            </li>
          ))}
        </ul>
      </Panel>
    </PageShell>
  );
}

/* ------------------------------- Página 5 ------------------------------- */
export const TERMO_PCA = [
  "Recebi meu treinamento periódico do Programa de Conservação Auditiva.",
  "Reforcei meus conhecimentos sobre higienização, guarda e tempo de vida útil dos protetores.",
  "Fui informado sobre a inspeção diária e sua importância para a eficácia de proteção, e sobre as condições de troca das peças de reposição, em período de 6 meses ou superior, guardadas as recomendações expressas trazidas de fabricantes do mercado.",
  "Também estou ciente das obrigações descritas na NR-6:",
];

export const NR6_ITENS = [
  "a) usar o fornecido pela organização;",
  "b) utilizar apenas para a finalidade a que se destina;",
  "c) responsabilizar-se pela limpeza, guarda e conservação;",
  "d) comunicar à organização quando extraviado, danificado ou qualquer alteração que o torne impróprio para uso; e",
  "e) cumprir as determinações da organização sobre o uso adequado.",
];

export function TermoPage({
  track,
  paragrafos,
  imagem,
  imagemAlt,
  nome,
  matricula,
  pageNumber,
  onNext,
}: {
  track: "PCA" | "PPR";
  paragrafos: string[];
  imagem: string;
  imagemAlt: string;
  nome: string;
  matricula: string;
  pageNumber: number;
  onNext: () => void;
}) {
  return (
    <PageShell
      title={track === "PCA" ? TITLE : "Treinamento de proteção respiratória"}
      track={track}
      footer={
        <>
          <PageNumber n={pageNumber} />
          <AdvanceButton onClick={onNext} label="Concluir" />
        </>
      }
    >
      <SectionTitle>Termo de Responsabilidade</SectionTitle>
      <div className="grid gap-4 sm:grid-cols-[1fr_260px]">
        <Panel>
          {paragrafos.map((p) => (
            <p key={p} className="mb-3 last:mb-0">
              {p}
            </p>
          ))}
          <ul className="mt-2 space-y-1 pl-1 text-sm">
            {NR6_ITENS.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </Panel>
        <Figure src={imagem} alt={imagemAlt} />
      </div>

      <SectionTitle>Confirme seus dados</SectionTitle>
      <div className="grid gap-4 sm:grid-cols-2">
        <Panel>
          <SubTitle>Nome</SubTitle>
          <p className="text-sm text-muted-foreground">{nome || "—"}</p>
        </Panel>
        <Panel>
          <SubTitle>Matrícula</SubTitle>
          <p className="text-sm text-muted-foreground">{matricula || "—"}</p>
        </Panel>
      </div>

      <SectionTitle>Assinatura</SectionTitle>
      <Panel>
        <div className="h-40 w-full rounded-lg border-2 border-dashed border-brand/40 bg-background" />
        <div className="mt-3 flex flex-wrap gap-3">
          <button
            type="button"
            disabled
            className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground"
          >
            LIMPAR ASSINATURA
          </button>
          <button
            type="button"
            disabled
            className="rounded-full bg-brand px-4 py-2 text-xs font-semibold text-brand-foreground opacity-40"
          >
            Confirmar assinatura
          </button>
        </div>
      </Panel>
    </PageShell>
  );
}

export function Page05({
  nome,
  matricula,
  onNext,
}: {
  nome: string;
  matricula: string;
  onNext: () => void;
}) {
  return (
    <TermoPage
      track="PCA"
      paragrafos={TERMO_PCA}
      imagem={protetores}
      imagemAlt="Equipamentos de proteção auditiva"
      nome={nome}
      matricula={matricula}
      pageNumber={5}
      onNext={onNext}
    />
  );
}
