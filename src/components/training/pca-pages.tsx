import { useEffect, useState } from "react";

import {
  AdvanceButton,
  BackToStartButton,
  Bullets,
  Figure,
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
import colocacao from "@/assets/colocacao-abafador-nuca.svg";
import higiene from "@/assets/higiene-auditiva.jpg";
import higienePlugs from "@/assets/higiene-plugs.jpg";
import protetores from "@/assets/pca-protetores.jpg";
import plugSequencia from "@/assets/plug-sequencia.jpg";
import protArco from "@/assets/prot-arco.jpg";
import protCapacete from "@/assets/prot-capacete.jpg";
import protPlug from "@/assets/prot-plug.jpg";
import icoDbAlto from "@/assets/ico-db-alto.png";
import icoDbExtremo from "@/assets/ico-db-alto-extremo.png";
import icoDbLigeiro from "@/assets/ico-db-ligeiro.png";
import icoDoencas from "@/assets/ico-doencas.png";
import icoMedicamentos from "@/assets/ico-medicamentos.png";
import icoTraumatismo from "@/assets/ico-traumatismo.png";

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
          <AdvanceButton onClick={onNext} />
        </>
      }
    >
      <SectionTitle>Introdução</SectionTitle>
      <Panel>
        O treinamento dos elementos do Programa de Conservação Auditiva (PCA) busca implementar
        ações planejadas e coordenadas que visem melhorar a qualidade de vida do trabalhador,
        evitando a perda auditiva e reduzindo os efeitos extra auditivos, causados pela exposição
        ocupacional a agentes otoagressores da audição.
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
          <img
            src={icoTraumatismo}
            alt="Ícone de cotonete próximo à orelha"
            width={512}
            height={512}
            loading="lazy"
            className="mx-auto mb-2 size-16 object-contain"
          />
          <SubTitle>Traumatismo</SubTitle>
          Coçar as orelhas com objetos e cotonetes.
        </Panel>
        <Panel tone="warn">
          <img
            src={icoMedicamentos}
            alt="Ícone de frasco de medicamentos com sinal de alerta"
            width={512}
            height={512}
            loading="lazy"
            className="mx-auto mb-2 size-16 object-contain"
          />
          <SubTitle>Medicamentos</SubTitle>
          Exagero e uso incorreto
        </Panel>
        <Panel tone="warn">
          <img
            src={icoDoencas}
            alt="Ícone de cartela de comprimidos"
            width={512}
            height={512}
            loading="lazy"
            className="mx-auto mb-2 size-16 object-contain"
          />
          <SubTitle>Doenças</SubTitle>
          Diabetes, hipertensão arterial, doenças de tireoide, infecciosas ou virais.
        </Panel>
      </div>

      <SectionTitle>A exposição inadequada ao ruído</SectionTitle>
      <Panel tone="pca">
        A exposição prolongada a níveis de pressão sonora intensos (acima de 85 dB(A), em horas de
        trabalho diário) é muitas vezes comum nas atividades profissionais. Neste cenário, a
        proteção auditiva individual ou coletiva é essencial para proteção à saúde.
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

const ESCALA_ICONES: Record<number, { src: string; alt: string }> = {
  120: { src: icoDbExtremo, alt: "Ícone de avião, sirene e fogos de artifício" },
  80: { src: icoDbAlto, alt: "Ícone de máquina de lavar, helicóptero e trombone" },
  40: { src: icoDbLigeiro, alt: "Ícone de pássaros e sussurro" },
};

const ATENUACOES = [16, 20, 21];

const ATENUACAO_IMG: Record<number, { src: string; alt: string; legenda: string }> = {
  16: { src: protPlug, alt: "Protetor auditivo tipo plug", legenda: "Plug" },
  20: { src: protArco, alt: "Abafador auditivo tipo arco", legenda: "Abafador tipo arco" },
  21: {
    src: protCapacete,
    alt: "Abafador auditivo acoplado ao capacete",
    legenda: "Abafador no capacete",
  },
};

export function Page03({ onNext }: PageProps) {
  const [medido, setMedido] = useState("");
  const [atenuacao, setAtenuacao] = useState<number | null>(null);
  const medidoNum = Number(medido.replace(",", "."));
  const medidoValido = medido.trim() !== "" && Number.isFinite(medidoNum);
  const atenuado =
    medidoValido && atenuacao !== null
      ? String(Math.round((medidoNum - atenuacao) * 100) / 100)
      : "";
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
          <AdvanceButton onClick={onNext} disabled={!podeAvancar} />
        </>
      }
    >
      <SectionTitle>Proteção auditiva - laborais e extra-laborais.</SectionTitle>

      <div className="grid gap-4 sm:grid-cols-[260px_1fr]">
        <Panel>
          <SubTitle>dB — Escala de nível de ruído</SubTitle>
          <table className="w-full text-xs">
            <tbody>
              {ESCALA.map(([db, label]) => {
                const ico = ESCALA_ICONES[db];
                return (
                  <tr key={db} className="border-b border-border/60 last:border-0">
                    <td className="py-1 pr-2 font-semibold text-brand-deep">{db}</td>
                    <td className="py-1 text-muted-foreground">{label}</td>
                    <td className="w-10 py-1">
                      {ico ? (
                        <img
                          src={ico.src}
                          alt={ico.alt}
                          width={512}
                          height={512}
                          loading="lazy"
                          className="size-9 object-contain"
                        />
                      ) : null}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Panel>
        <div className="space-y-4">
          <Panel tone="pca">
            Além das medidas de proteção coletiva (que devem ser periodicamente discutidas,
            revisadas e implementadas pelos responsáveis nas empresas), é fundamental que o
            trabalhador saiba das ações de monitoramento periódico exigidas pela NR-07 (PCMSO) —
            realização de exames audiométricos admissional, periódicos e demissional — e as
            orientações sobre uso correto e cuidados necessários, sobre seu EPI – equipamento de
            proteção individual – para proteção auditiva.
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
        possua o fator de eficiência para atenuação, compatível às exposições ao ruído que
        trabalhador possa estar exposto no seu trabalho.
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
          <div className="grid grid-cols-3 gap-2">
            {ATENUACOES.map((v) => {
              const img = ATENUACAO_IMG[v]!;
              return (
                <button
                  key={v}
                  type="button"
                  disabled={!medidoValido}
                  aria-pressed={atenuacao === v}
                  onClick={() => setAtenuacao(v)}
                  className={`flex flex-col items-center gap-1 rounded-lg border p-2 text-center text-xs font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
                    atenuacao === v
                      ? "border-brand bg-brand text-brand-foreground"
                      : "border-brand/40 bg-card text-brand-deep"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={768}
                    height={768}
                    loading="lazy"
                    className="size-14 rounded-md bg-background object-contain p-0.5"
                  />
                  <span>{v} dB</span>
                  <span className="text-[10px] leading-tight font-normal opacity-80">
                    {img.legenda}
                  </span>
                </button>
              );
            })}
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
        <Figure
          src={colocacao}
          alt="Pessoa ajustando abafador auditivo tipo arco, vista da nuca"
          caption="Ajuste do abafador tipo arco"
        />
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
        <div className="space-y-4">
          <Figure
            src={plugSequencia}
            alt="Sequência A, B, C e D de colocação do plug no canal auditivo, com indicação de certo e errado"
            caption="Colocação do plug: A, B, C e D (certo e errado)"
          />
          <Figure
            src={protetores}
            alt="Protetores auditivos tipo plug"
            caption="Colocação do plug"
          />
        </div>
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

function SimNao({
  pergunta,
  valor,
  onSelect,
  enabled,
}: {
  pergunta: string;
  valor?: boolean | undefined;
  onSelect: (v: boolean) => void;
  enabled: boolean;
}) {
  return (
    <div className="flex items-start gap-3 border-b border-border/60 py-3 last:border-0">
      <div className="flex gap-2">
        <button
          type="button"
          disabled={!enabled}
          aria-pressed={valor === true}
          onClick={() => onSelect(true)}
          aria-label="Sim"
          className={`inline-flex size-8 items-center justify-center rounded-full border transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
            valor === true ? "border-ok bg-ok text-brand-foreground" : "border-ok/50 text-ok"
          }`}
        >
          ✓
        </button>
        <button
          type="button"
          disabled={!enabled}
          aria-pressed={valor === false}
          onClick={() => onSelect(false)}
          aria-label="Não"
          className={`inline-flex size-8 items-center justify-center rounded-full border transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
            valor === false
              ? "border-destructive bg-destructive text-brand-foreground"
              : "border-destructive/50 text-destructive"
          }`}
        >
          ✕
        </button>
      </div>
      <p className="text-sm leading-relaxed">{pergunta}</p>
    </div>
  );
}

export function Page04({ onNext }: PageProps) {
  const liberado = useReadingTimer(6000);
  const [respostas, setRespostas] = useState<Record<string, boolean>>({});
  const [resultado, setResultado] = useState<string | null>(null);
  const todas = [...PCA_TESTE, ...PCA_PARECER];
  const completo = todas.every((p) => respostas[p] !== undefined);
  const marcar = (p: string) => (v: boolean) => setRespostas((r) => ({ ...r, [p]: v }));

  return (
    <PageShell
      title={TITLE}
      track="PCA"
      footer={
        <>
          <AdvanceButton onClick={onNext} disabled={!completo} />
        </>
      }
    >
      <SectionTitle>Inspeção e Manutenção</SectionTitle>
      <div className="grid gap-4 sm:grid-cols-[1fr_1fr]">
        <div className="space-y-4">
          <Figure
            src={higiene}
            alt="Mãos limpando o abafador auditivo com pano úmido"
            caption="Limpeza do abafador"
          />
          <Figure
            src={higienePlugs}
            alt="Mãos lavando plugs de silicone em água corrente"
            caption="Lavagem dos plugs de silicone"
          />
        </div>
        <div className="space-y-4">
          <Panel>
            Retire com cuidado, as almofadas externas (se forem removíveis). Limpe com um pano
            úmido, as partes externas do abafador e as almofadas, delicadamente. Seque com papel
            toalha.
          </Panel>
          <Panel>
            Lave e enxágue os plugs de silicone em água fria. Remova o excesso de umidade com uma
            folha de papel-toalha para acelerar o processo de secagem. Deixe os protetores secarem
            ao ar livre.
          </Panel>
        </div>
      </div>

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

      <SectionTitle>Teste de conhecimento</SectionTitle>
      <Panel tone="pca">
        <p className="mb-2 text-sm">
          Conhecendo bem meu(s) protetor (s) auditivo(s) marcarei (✓) para “sim” e (✕) para “não”:
        </p>
        {PCA_TESTE.map((p) => (
          <SimNao
            key={p}
            pergunta={p}
            valor={respostas[p]}
            onSelect={marcar(p)}
            enabled={liberado}
          />
        ))}
        <p className="mt-3 mb-2 text-sm">
          Meu protetor foi selecionado por mim durante este treinamento, sendo concluído que:
        </p>
        {PCA_PARECER.map((p) => (
          <SimNao
            key={p}
            pergunta={p}
            valor={respostas[p]}
            onSelect={marcar(p)}
            enabled={liberado}
          />
        ))}
      </Panel>

      <SectionTitle>Parecer seleção EPI</SectionTitle>
      <Panel>
        <SubTitle>Resultado</SubTitle>
        <div role="radiogroup" aria-label="Resultado" className="space-y-2 text-sm">
          {PCA_RESULTADO.map((r) => (
            <button
              key={r}
              type="button"
              role="radio"
              aria-checked={resultado === r}
              onClick={() => setResultado(r)}
              className="flex w-full items-center gap-3 rounded-lg px-1 py-1.5 text-left transition-colors hover:bg-brand-soft/60"
            >
              <span
                className={`flex size-5 shrink-0 items-center justify-center rounded-full border ${
                  resultado === r ? "border-brand" : "border-brand/50"
                }`}
              >
                {resultado === r ? <span className="size-2.5 rounded-full bg-brand" /> : null}
              </span>
              <span>{r}</span>
            </button>
          ))}
        </div>
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
  onNext,
  onNomeChange,
  onMatriculaChange,
}: {
  track: "PCA" | "PPR";
  paragrafos: string[];
  imagem: string;
  imagemAlt: string;
  nome: string;
  matricula: string;
  onNext: () => void;
  onNomeChange?: ((v: string) => void) | undefined;
  onMatriculaChange?: ((v: string) => void) | undefined;
}) {
  const [assinado, setAssinado] = useState(false);
  const [concluido, setConcluido] = useState(false);
  const pad = useSignaturePad({ onChange: setAssinado });

  useEffect(() => {
    if (!concluido) return;
    const id = setTimeout(onNext, 3000);
    return () => clearTimeout(id);
  }, [concluido, onNext]);

  if (concluido) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-panel px-6">
        <p className="font-display text-center text-xl font-semibold text-brand-deep sm:text-3xl">
          conclusão do treinamento
        </p>
      </div>
    );
  }

  return (
    <PageShell
      title={track === "PCA" ? TITLE : "Treinamento de proteção respiratória"}
      track={track}
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
          {onNomeChange ? (
            <input
              value={nome}
              onChange={(e) => onNomeChange(e.target.value)}
              aria-label="Nome"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          ) : (
            <p className="text-sm text-muted-foreground">{nome || "—"}</p>
          )}
        </Panel>
        <Panel>
          <SubTitle>Matrícula</SubTitle>
          {onMatriculaChange ? (
            <input
              value={matricula}
              onChange={(e) => onMatriculaChange(e.target.value)}
              aria-label="Matrícula"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          ) : (
            <p className="text-sm text-muted-foreground">{matricula || "—"}</p>
          )}
        </Panel>
      </div>

      <SectionTitle>Assinatura</SectionTitle>
      <Panel>
        <SignatureCanvas pad={pad} />
        <div className="mt-3 flex flex-wrap gap-3">
          <button
            type="button"
            disabled={!assinado}
            onClick={pad.clear}
            className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground disabled:cursor-not-allowed disabled:opacity-40"
          >
            LIMPAR ASSINATURA
          </button>
          <button
            type="button"
            disabled={!assinado}
            onClick={() => setConcluido(true)}
            className="rounded-full bg-brand px-4 py-2 text-xs font-semibold text-brand-foreground disabled:cursor-not-allowed disabled:opacity-40"
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
  onNomeChange,
  onMatriculaChange,
}: {
  nome: string;
  matricula: string;
  onNext: () => void;
  onNomeChange: (v: string) => void;
  onMatriculaChange: (v: string) => void;
}) {
  return (
    <TermoPage
      track="PCA"
      paragrafos={TERMO_PCA}
      imagem={protetores}
      imagemAlt="Equipamentos de proteção auditiva"
      nome={nome}
      matricula={matricula}
      onNext={onNext}
      onNomeChange={onNomeChange}
      onMatriculaChange={onMatriculaChange}
    />
  );
}
