import { useEffect, useState } from "react";

import {
  AdvanceButton,
  BackToStartButton,
  Bullets,
  Figure,
  PageShell,
  Panel,
  SectionTitle,
  SubTitle,
  useReadingTimer,
  type PageProps,
} from "./kit";
import { NR6_ITENS, TermoPage } from "./pca-pages";

import pulmoes from "@/assets/pulmoes.svg";
import respiradores from "@/assets/ppr-respiradores.svg";
import colocacaoDescartavel from "@/assets/ppr-colocacao-descartavel.svg";
import retirada from "@/assets/ppr-retirada.svg";
import tirantePadrao from "@/assets/ppr-manutencao-tirante-padrao.svg";
import tiranteDeslizante from "@/assets/ppr-manutencao-tirante-deslizante.svg";
import testeNegativa from "@/assets/teste-pressao-negativa.svg";
import testePositiva from "@/assets/teste-pressao-positiva.svg";
import ensaioQualitativo from "@/assets/ensaio-vedacao-qualitativo.svg";
import ensaioQuantitativo from "@/assets/ensaio-vedacao-quantitativo.svg";
import hig1 from "@/assets/hig-1-remover-filtros.svg";
import hig2 from "@/assets/hig-2-lavar.svg";
import hig3 from "@/assets/hig-3-verificar.svg";
import hig4 from "@/assets/hig-4-remontar.svg";

const TITLE = "Treinamento de proteção respiratória";

/* ------------------------------ Página 11 ------------------------------- */
export function Page11({ onNext, onBackToStart }: PageProps) {
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
      <SectionTitle>Adequações a serem observados para escolha do EPR</SectionTitle>
      <div className="grid gap-4 sm:grid-cols-3">
        <Panel tone="ppr">
          <SubTitle>Tarefa</SubTitle>
          <Bullets
            items={[
              "Qual a frequência e duração ?",
              "Qual o nível de esforço?",
              "Exigida muita comunicação?",
              "Muita mobilidade?",
            ]}
          />
        </Panel>
        <Panel tone="ppr">
          <SubTitle>Usuário</SubTitle>
          <Bullets
            items={[
              "EPR confortável?",
              "Características faciais que influenciam a vedação?",
              "Usa outros EPIs junto?",
            ]}
          />
        </Panel>
        <Panel tone="ppr">
          <SubTitle>Ambiente de trabalho</SubTitle>
          <Bullets
            items={[
              "Uso em condições climáticas extremas? condições de temperatura e umidade, por exemplo;",
              "Outros riscos não respiratórios: ambiente com fagulhas, abrasão, entre outros.",
            ]}
          />
        </Panel>
      </div>

      <Panel tone="warn" className="mt-4">
        Antes do uso, o usuário deve ter sido avaliado quanto à aptidão para o uso do respirador.
        Durante o uso, se o usuário sinalizar sintomas como tonturas, enjoos, qualquer outro tipo de
        mal-estar, ou ainda perceber o &apos;cheiro ou gosto&apos; do contaminante, o uso deve ser
        interrompido e a situação comunicada.
      </Panel>

      <SectionTitle>Vida útil do EPR</SectionTitle>
      <Panel>
        A vida útil do EPR varia consideravelmente dependendo do nível de concentração, temperatura,
        umidade, frequência respiratória do usuário, entre outros.
      </Panel>
      <Panel tone="warn" className="mt-4">
        Em apenas alguns casos, a literatura específica, sinaliza que para algumas substâncias podem
        possuem um “nível” de odor que pode ser um indicativo “claro” para a troca. Por ser algo
        mais restrito e limitado, não é um indicador que é recomandado ser seguido.
      </Panel>
      <SubTitle>Então quando trocar?</SubTitle>
      <Panel>
        Para um usuário que já saiba usar corretamente o EPR, a indicação é que haja troca quando
        detectado qualquer gosto ou odor, pois há fortes indícios de que o equipamento já esteja
        saturado e necessite de troca.
      </Panel>

      <SectionTitle>Colocação e retirada do EPR</SectionTitle>
      <SubTitle>Modelos descartáveis</SubTitle>
      <div className="grid items-start gap-4 sm:grid-cols-[1fr_1fr]">
        <Panel>
          <Bullets
            items={[
              "Segurar o respirador com a pinça nasal próxima à ponta dos dedos, deixando tirantes pendentes.",
              "Encaixar o respirador sob o queixo.",
              "Posicionar o tirante inferior na nuca e o superior sobre a cabeça, tomando cuidado para não os cruzar",
              "Ajustar a pinça nasal no nariz",
            ]}
          />
        </Panel>
        <Figure
          src={colocacaoDescartavel}
          alt="Sequência A, B, C e D de colocação do respirador descartável"
          caption="Colocação do respirador descartável: A, B, C e D"
        />
      </div>

      <SectionTitle>Verificação da Vedação</SectionTitle>
      <div className="grid items-start gap-4 sm:grid-cols-[1fr_220px]">
        <Panel tone="ppr">
          <SubTitle>Teste de Pressão Positiva</SubTitle>
          Cubra a maior parte do respirador e expire. Se houver vazamento de ar em volta do nariz,
          reajuste o grampo nasal. Se houver vazamento de ar pelas bordas do respirador, reajuste
          sua posição.
        </Panel>
        <Figure
          src={testePositiva}
          alt="Mão espalmada sobre a válvula de exalação do respirador"
          caption="Teste de Pressão Positiva"
        />
      </div>
    </PageShell>
  );
}

/* ------------------------------ Página 12 ------------------------------- */
export function Page12({ onNext }: PageProps) {
  return (
    <PageShell
      title={TITLE}
      track="PPR"
      footer={
        <>
          <AdvanceButton onClick={onNext} />
        </>
      }
    >
      <SectionTitle>Retirada</SectionTitle>
      <div className="grid items-start gap-4 sm:grid-cols-[1fr_1fr]">
        <Panel>
          <Bullets
            items={[
              "não tocar na parte frontal da PFF segurar e remover o tirante inferior, e prosseguir mesmo procedimento com o tirante superior.",
              "remover a máscara segurando-a pelos tirantes, sem tocar em sua parte frontal externa",
            ]}
          />
        </Panel>
        <Figure
          src={retirada}
          alt="Sequência A, B e C de retirada do respirador segurando pelos tirantes, sem tocar na parte frontal"
          caption="Retirada: A, B e C"
        />
      </div>

      <SectionTitle>Modelos de Manutenção</SectionTitle>
      <div className="space-y-4">
        <div className="grid items-start gap-4 sm:grid-cols-[1fr_1fr]">
          <Panel>
            <SubTitle>Tirante padrão</SubTitle>
            <Bullets
              items={[
                "Coloque o respirador cobrindo o nariz e a boca, depois puxe o suporte para cima da cabeça.",
                "Enquanto segura a extremidade dos tirantes com as mãos, deslize a peça facial para encaixar no seu rosto.",
                "Encaixe as presilhas atrás do pescoço e ajuste os tirantes até obter um encaixe firme.",
              ]}
            />
          </Panel>
          <Figure
            src={tirantePadrao}
            alt="Sequência A, B e C de colocação do respirador de manutenção com tirante padrão"
            caption="Tirante padrão: A, B e C"
          />
        </div>
        <div className="grid items-start gap-4 sm:grid-cols-[1fr_1fr]">
          <Panel>
            <SubTitle>Tirante deslizante</SubTitle>
            <Bullets
              items={[
                "Encaixe as presilhas atrás do pescoço.",
                "Ajuste os tirantes, puxando as extremidades dos elásticos até obter um encaixe firme.",
                "A tensão dos tirantes pode ser diminuída empurrando as presilhas para fora: uso correto.",
              ]}
            />
          </Panel>
          <Figure
            src={tiranteDeslizante}
            alt="Sequência A, B e C de colocação do respirador de manutenção com tirante deslizante"
            caption="Tirante deslizante: A, B e C"
          />
        </div>
      </div>

      <SectionTitle>Verificação da vedação</SectionTitle>
      <div className="grid gap-4 sm:grid-cols-2">
        <Panel tone="ppr">
          <SubTitle>Teste de Pressão Negativa</SubTitle>
          <Figure
            className="mx-auto mb-3 max-w-[260px]"
            src={testeNegativa}
            alt="As duas mãos cobrindo as faces dos dois cartuchos do respirador"
          />
          Coloque a palma da mão de modo a cobrir a face do filtro ou cartucho. Inale levemente. Se
          você sentir que a peça facial contraiu levemente e chegou mais perto da sua face sem
          vazamentos entre a face e a peça, uma vedação apropriada foi obtida. Se for detectado
          vazamento de ar na vedação facial, reposicione o respirador na face e/ou reajuste a tensão
          dos tirantes.
        </Panel>
        <Panel tone="ppr">
          <SubTitle>Teste de Pressão Positiva</SubTitle>
          <Figure
            className="mx-auto mb-3 max-w-[260px]"
            src={testePositiva}
            alt="Palma da mão sobre a válvula de exalação do respirador"
          />
          Coloque a palma da mão sobre a válvula de exalação e exale suavemente. Se a peça facial
          estiver selada e não houver vazamento de ar entre seu rosto e a peça, é sinal de que uma
          vedação apropriada foi obtida. Se for detectado vazamento de ar na vedação facial,
          reposicione o respirador na face e/ou reajuste a tensão dos tirantes.
        </Panel>
      </div>
      <Panel className="mt-4">
        Os procedimentos para retirada do EPR, tanto de manutenção, quanto descartáveis, são
        similares. Leia-os em RETIRADA.
      </Panel>

      <SectionTitle>Fatores que causam interferência</SectionTitle>
      <div className="grid gap-4 sm:grid-cols-3">
        <Panel tone="warn">OUTROS EPIS SIMULTÂNEOS</Panel>
        <Panel tone="warn">LOÇÕES/ CREMES FACIAIS</Panel>
        <Panel tone="warn">CICATRIZES PROFUNDAS/ RUGAS</Panel>
      </div>
      <Panel tone="warn" className="mt-4 text-center font-semibold">
        É PROIBIDO USO DE JOIAS FACIAIS E ROSTO NÃO BARBEADO!
      </Panel>

      <SectionTitle>Inspeção, Manutenção e guarda</SectionTitle>
      <div className="space-y-4">
        <Panel>
          A inspeção deve ser realizada: a) depois da limpeza e higienização; b) para constatar se o
          EPR está em condição apropriada, ou se necessita da substituição de peças. (caso os
          respiradores ou seus componentes não estejam em boas condições, devem ser substituídos ou
          descartados)
        </Panel>
        <Panel>
          A manutenção do EPR sempre deverá ser feita: a) seguindo as instruções do fabricante; b)
          quando constatada eventuais falhas/avarias no EPR e peças de reposição, ou peças de
          reposição; c) quando a vida útil terminar e d) quando necessário, por não possuir
          desempenho adequado.
        </Panel>
        <Panel>
          Os EPRs devem serem guardados em locais protegidos de outros agentes agressivos (espaço
          sem calor, frio excessivo, umidade elevada ou contaminantes) e que não sejam improvisados.
        </Panel>
      </div>
    </PageShell>
  );
}

/* ------------------------------ Página 13 ------------------------------- */
/** As quatro etapas ilustradas da higienização do respirador de manutenção. */
export const ETAPAS_HIGIENIZACAO = [
  {
    ico: hig1,
    alt: "Ícone de respirador com os filtros e o diafragma de voz sendo removidos",
    texto:
      "Antes de limpar e higienizar remova os filtros mecânicos químicos, além do diafragma de voz (se houver) e a membrana das válvulas.",
  },
  {
    ico: hig2,
    alt: "Ícone de peça do respirador sendo lavada com escova e sabão",
    texto:
      "Lave as partes com sabão neutro e água à vontade. Use uma escova com cerdas macias para remover a sujeira. Os filtros e cartuchos nunca devem ser.",
  },
  {
    ico: hig3,
    alt: "Ícone de lupa inspecionando uma peça com defeito e a peça de reposição",
    texto:
      "Verifique as peças e troque aquelas que apresentam defeitos (se for preciso, substituir filtros).",
  },
  {
    ico: hig4,
    alt: "Ícone de respirador remontado com os filtros recolocados",
    texto: "Monte as partes no respirador e recoloque os filtros.",
  },
];

/** Os dois tipos de ensaio de vedação, com o texto explicativo revelado ao clicar. */
export const ENSAIOS_VEDACAO = [
  {
    nome: "Ensaio de Vedação Qualitativo",
    ico: ensaioQualitativo,
    icoAlt: "Pessoa com touca de teste e agente aplicado próximo ao rosto",
    texto:
      "Utiliza a própria percepção do usuário a um agente de teste (como sacarina, Bitrex ou fumaça irritante) borrifado dentro de uma touca. Se o usuário não perceber o gosto, odor ou irritação, considera-se a vedação satisfatória. É um método subjetivo, que não depende de equipamento de medição.",
  },
  {
    nome: "Ensaio de Vedação Quantitativo",
    ico: ensaioQuantitativo,
    icoAlt: "Manequim com respirador conectado por mangueira a um aparelho de medição",
    texto:
      "Utiliza equipamento de medição (como um contador de partículas) que compara a concentração de partículas no ar ambiente e dentro da peça facial, calculando numericamente o fator de vedação obtido. É um método objetivo, mais preciso que o qualitativo.",
  },
];

export function Page13({ onNext, onBackToStart }: PageProps) {
  const podeVoltar = useReadingTimer(6000);
  const [ensaioAberto, setEnsaioAberto] = useState<number | null>(null);
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
      <SectionTitle>Higienização</SectionTitle>
      <p className="mb-3 text-xs font-semibold tracking-wide text-muted-foreground">
        QUANDO SELECIONADO UM RESPIRADOR DE MANUTENÇÃO
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ETAPAS_HIGIENIZACAO.map((etapa, i) => (
          <Panel key={etapa.alt} tone="ppr">
            <img
              src={etapa.ico}
              alt={etapa.alt}
              width={512}
              height={512}
              loading="lazy"
              className="mx-auto mb-2 size-24 object-contain"
            />
            <p className="mb-1 text-center text-xs font-semibold text-brand-deep">Etapa {i + 1}</p>
            {etapa.texto}
          </Panel>
        ))}
      </div>

      <SectionTitle>Ensaio de Vedação</SectionTitle>
      <Panel>
        Além da verificação da vedação, deve-se realizar o ensaio de vedação em todos os usuários de
        máscaras. O ensaio de vedação, é uma forma de comprovar que o respirador é adequado ao
        usuário e que garante uma boa vedação. Existem dois tipos de ensaio - os quantitativos e
        qualitativos - abaixo alguns exemplos que existem no mercado.
      </Panel>
      <div className="mt-3 grid gap-4 sm:grid-cols-2">
        {ENSAIOS_VEDACAO.map((ensaio, i) => {
          const aberto = ensaioAberto === i;
          return (
            <Panel key={ensaio.nome} tone="brand">
              <img
                src={ensaio.ico}
                alt={ensaio.icoAlt}
                width={400}
                height={400}
                loading="lazy"
                className="mx-auto mb-2 size-28 object-contain"
              />
              <button
                type="button"
                aria-expanded={aberto}
                onClick={() => setEnsaioAberto((atual) => (atual === i ? null : i))}
                className="flex w-full items-center justify-between gap-2 text-left"
              >
                <span className="font-semibold">{ensaio.nome}</span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-brand-deep transition-transform ${aberto ? "rotate-180" : ""}`}
                >
                  ▾
                </span>
              </button>
              {aberto ? <p className="mt-2 text-xs leading-relaxed">{ensaio.texto}</p> : null}
            </Panel>
          );
        })}
      </div>

      <SectionTitle>Situações de emergência e o uso de respiradores</SectionTitle>
      <Panel tone="warn">
        <p className="mb-3">
          Em uma situação de emergência com presença ou possibilidade de contaminantes no ar, a
          prioridade é proteger-se e sair da área de risco o mais rapidamente possível, seguindo a
          rota de evacuação definida pela empresa.
        </p>
        <Bullets
          items={[
            "Reconheça a emergência e proteja-se: mantenha a calma e siga as orientações da equipe local.",
            "Não combata a emergência sem treinamento específico",
            "Siga as orientações e procedimentos definidos pela equipe treinada: necessidade sobre respiradores adequados, rota de fuga e ponto de encontro são definidos por esquipe com treinamento especializado. Siga estas orientações e não atue em combates a emergência e resgates de forma autônoma.",
          ]}
        />
      </Panel>
    </PageShell>
  );
}

/* --------------------- Páginas 14 e 15 — conteúdo comum --------------------- */
export type Pergunta = { numero: number; enunciado: string; opcoes: string[]; correta: number };

export const PERGUNTAS_PPR: Pergunta[] = [
  {
    numero: 1,
    enunciado: "Qual é a finalidade do uso do respirador?",
    opcoes: [
      "Substituir todas as demais medidas de controle dos riscos respiratórios.",
      "Proporcionar proteção adequada ao usuário contra o risco respiratório identificado",
      "Permitir que o trabalhador permaneça em qualquer ambiente contaminado, independentemente do tipo de respirador.",
    ],
    correta: 1,
  },
  {
    numero: 2,
    enunciado:
      "Por que é importante verificar a vedação do respirador antes de iniciar a atividade?",
    opcoes: [
      "Porque a verificação serve apenas para avaliar o conforto do respirador.",
      "Porque a verificação substitui o ensaio de vedação.",
      "Porque permite verificar se o respirador está corretamente adaptado ao rosto e se a vedação está adequada",
    ],
    correta: 2,
  },
  {
    numero: 3,
    enunciado: "Se ocorrer um problema com o uso do respirador, o que deve ser feito?",
    opcoes: [
      "Informar o problema ao supervisor.",
      "Resolver o problema individualmente e não comunicar ninguém.",
      "Continuar utilizando o respirador normalmente, desde que não haja dano visível.",
    ],
    correta: 0,
  },
  {
    numero: 4,
    enunciado:
      "Por que a presença de barba pode ser um problema para quem utiliza respirador com vedação facial?",
    opcoes: [
      "Porque a barba aumenta o peso do respirador.",
      "Porque os pelos na área de selagem podem impedir o ajuste adequado do respirador ao rosto e comprometer a vedação.",
      "Porque a barba reduz a vida útil dos filtros.",
    ],
    correta: 1,
  },
  {
    numero: 5,
    enunciado: "Por que o usuário precisa conhecer as limitações do respirador que utiliza?",
    opcoes: [
      "Para saber em quais condições o respirador selecionado proporciona a proteção esperada e reconhecer situações em que ele não deve ser utilizado.",
      "Para escolher sozinho qualquer outro respirador disponível na empresa.",
      "Para decidir quando o respirador pode ser utilizado sem necessidade de avaliação do risco.",
    ],
    correta: 0,
  },
  {
    numero: 6,
    enunciado:
      "Se o usuário sentir cheiro, sabor ou irritação provocada por um contaminante enquanto estiver usando o respirador, o que deve fazer?",
    opcoes: [
      "Permanecer no local até concluir a atividade",
      "Retirar o respirador para verificar se o contaminante está realmente presente.",
      "Deixar imediatamente a área contaminada.",
    ],
    correta: 2,
  },
];

function UsoIncorretoBlocos() {
  return (
    <>
      <SectionTitle>Uso incorreto e consequências</SectionTitle>
      <Panel tone="ppr">
        Uma substância química inalada pode gerar diversos efeitos a saúde, sejam em sintomas mais
        imediatos, como náuseas, dores de cabeça, vômitos, desmaios entre outros, seja a aparição, a
        longo prazo, de doenças pulmonares.
      </Panel>
      <Figure
        className="mt-4"
        src={pulmoes}
        alt="Pulmão normal, pulmão com pneumoconiose e raio X de pulmão com pneumonite"
      />

      <SectionTitle>Omissão do Uso</SectionTitle>
      <p className="mb-3 text-sm">De acordo com as normativas nacionais a</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <Panel tone="brand">
          <SubTitle>EMPRESA</SubTitle>
          Deve fornecer aos empregados, EPI o adequado ao risco e em perfeito estado de conservação
          e funcionamento, bem como treinar os trabalhadores sobre o uso dos mesmos.
        </Panel>
        <Panel tone="brand">
          <SubTitle>O TRABALHADOR</SubTitle>
          <Bullets
            items={[
              "Usar o EPI, utilizando-o apenas para a finalidade a que se destina;",
              "Responsabilizar-se pela guarda, conservação e higienização;",
              "Comunicar ao empregador qualquer alteração que o torne impróprio para uso; e ,",
              "Cumprir as determinação do empregador sobre o uso adequado.",
            ]}
          />
        </Panel>
      </div>
      <Panel tone="warn" className="mt-4">
        Constitui ato faltoso do empregado a recusa injustificada: ao uso dos equipamentos de
        proteção individual fornecidos pela empresa.
      </Panel>
    </>
  );
}

function PerguntaTeste({
  p,
  resposta,
  onSelect,
  enabled,
}: {
  p: Pergunta;
  resposta?: number | undefined;
  onSelect: (i: number) => void;
  enabled: boolean;
}) {
  return (
    <Panel className="mb-3">
      <SubTitle>
        {p.numero}. {p.enunciado}
      </SubTitle>
      <ul className="space-y-2 text-sm">
        {p.opcoes.map((o, i) => (
          <li key={o}>
            <button
              type="button"
              disabled={!enabled}
              aria-pressed={resposta === i}
              onClick={() => onSelect(i)}
              className="flex w-full items-start gap-3 text-left disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span
                className={`mt-0.5 size-5 shrink-0 rounded-full border ${
                  resposta === i ? "border-brand bg-brand" : "border-brand/50"
                }`}
              />
              <span>{o}</span>
            </button>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

export type TesteProps = {
  respostas: Record<number, number>;
  onResponder: (numero: number, opcao: number) => void;
};

export function Page14({ onNext, respostas, onResponder }: PageProps & TesteProps) {
  const liberado = useReadingTimer(6000);
  const perguntas = PERGUNTAS_PPR.slice(0, 3);
  const completo = perguntas.every((p) => respostas[p.numero] !== undefined);

  return (
    <PageShell
      title={TITLE}
      track="PPR"
      footer={
        <>
          <AdvanceButton onClick={onNext} disabled={!completo} />
        </>
      }
    >
      <UsoIncorretoBlocos />
      <SectionTitle>Teste de conhecimento</SectionTitle>
      {perguntas.map((p) => (
        <PerguntaTeste
          key={p.numero}
          p={p}
          resposta={respostas[p.numero]}
          onSelect={(i) => onResponder(p.numero, i)}
          enabled={liberado}
        />
      ))}
    </PageShell>
  );
}

export function Page15({
  onNext,
  respostas,
  onResponder,
  onReiniciarTeste,
}: PageProps & TesteProps & { onReiniciarTeste: () => void }) {
  const liberado = useReadingTimer(6000);
  const perguntas = PERGUNTAS_PPR.slice(3);
  const completo = PERGUNTAS_PPR.every((p) => respostas[p.numero] !== undefined);
  const acertos = PERGUNTAS_PPR.filter((p) => respostas[p.numero] === p.correta).length;
  const aprovado = completo && acertos >= 5;
  const reprovado = completo && acertos < 5;

  useEffect(() => {
    if (!reprovado) return;
    const id = setTimeout(onReiniciarTeste, 3000);
    return () => clearTimeout(id);
  }, [reprovado, onReiniciarTeste]);

  if (reprovado) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-panel px-6">
        <p className="font-display text-center text-lg font-semibold text-brand-deep sm:text-2xl">
          Algumas opções ainda precisam ser melhor assimiladas! Vamos recomeçar?
        </p>
      </div>
    );
  }

  return (
    <PageShell
      title={TITLE}
      track="PPR"
      footer={
        <>
          <AdvanceButton onClick={onNext} disabled={!aprovado} />
        </>
      }
    >
      <UsoIncorretoBlocos />
      <SectionTitle>Teste de conhecimento</SectionTitle>
      {perguntas.map((p) => (
        <PerguntaTeste
          key={p.numero}
          p={p}
          resposta={respostas[p.numero]}
          onSelect={(i) => onResponder(p.numero, i)}
          enabled={liberado}
        />
      ))}
      <SectionTitle>Resultado final</SectionTitle>
      <Panel tone="brand">
        {aprovado
          ? `Nota obtida: ${acertos} de 6 acertos.`
          : "Responda às 6 perguntas do teste de conhecimento."}
      </Panel>
    </PageShell>
  );
}

/* ------------------------------ Página 16 ------------------------------- */
export const TERMO_PPR = [
  "Recebi meu treinamento periódico do Programa de Proteção Respiratória.",
  "Reforcei meus conhecimentos sobre higienização, guarda e tempo de vida útil dos protetores.",
  "Fui informado sobre a inspeção diária e sua importância para a eficácia de proteção, e sobre as condições de troca das peças de reposição, guardadas as recomendações expressas trazidas de fabricantes do mercado.",
  "Também estou ciente das obrigações descritas na NR-6:",
];

export { NR6_ITENS };

export function Page16({
  nome,
  matricula,
  onNext,
  onNomeChange,
  onMatriculaChange,
}: {
  nome: string;
  matricula: string;
  onNext: () => void;
  onNomeChange?: ((v: string) => void) | undefined;
  onMatriculaChange?: ((v: string) => void) | undefined;
}) {
  return (
    <TermoPage
      track="PPR"
      paragrafos={TERMO_PPR}
      imagem={respiradores}
      imagemAlt="Respiradores de proteção respiratória"
      nome={nome}
      matricula={matricula}
      onNext={onNext}
      onNomeChange={onNomeChange}
      onMatriculaChange={onMatriculaChange}
    />
  );
}
