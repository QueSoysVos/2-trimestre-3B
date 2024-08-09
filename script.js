// Seleciona os elementos do DOM
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Definindo as perguntas e alternativas
const perguntas = [
    {
        enunciado: "Você encontrou um novo aplicativo de redes sociais que promete conectar pessoas com interesses semelhantes. Qual a sua reação inicial?",
        alternativas: [
            {
                texto: "Parece interessante, mas vou esperar para ver como ele se sai.",
                afirmacao: "Você decidiu acompanhar o aplicativo por algum tempo para avaliar sua utilidade e popularidade."
            },
            {
                texto: "Preciso baixar agora mesmo e ver como funciona!",
                afirmacao: "Você se empolgou e decidiu explorar todas as funcionalidades do aplicativo imediatamente."
            }
        ]
    },
    {
        enunciado: "Durante uma discussão em sala de aula, seu professor pede para escrever um ensaio sobre o impacto das redes sociais na comunicação moderna. Qual abordagem você escolheria?",
        alternativas: [
            {
                texto: "Utilizaria uma plataforma de pesquisa para encontrar artigos e dados recentes sobre o impacto das redes sociais.",
                afirmacao: "Você conseguiu encontrar informações detalhadas e atualizadas sobre o tema, contribuindo para um ensaio bem fundamentado."
            },
            {
                texto: "Escreveria com base em experiências pessoais e observações, além de pesquisas básicas na internet.",
                afirmacao: "Você optou por um ensaio mais pessoal e direto, refletindo suas próprias experiências e perspectivas."
            }
        ]
    },
    {
        enunciado: "Após entregar o ensaio, há uma discussão na turma sobre como as redes sociais podem influenciar a vida profissional. Como você se posiciona?",
        alternativas: [
            {
                texto: "Acredito que as redes sociais podem criar novas oportunidades de networking e desenvolvimento profissional.",
                afirmacao: "Você vê as redes sociais como uma ferramenta valiosa para a criação de conexões e avanço na carreira."
            },
            {
                texto: "Estou preocupado com o impacto negativo que elas podem ter na privacidade e segurança dos profissionais.",
                afirmacao: "Você se preocupa com os riscos associados às redes sociais e defende a importância de proteger a privacidade dos usuários."
            }
        ]
    },
    {
        enunciado: "Você precisa criar um gráfico para um projeto sobre o uso de redes sociais em diferentes faixas etárias. Como você procede?",
        alternativas: [
            {
                texto: "Utiliza um software de design gráfico para criar um gráfico personalizado.",
                afirmacao: "Você decidiu criar um gráfico visualmente atraente usando suas habilidades em design gráfico."
            },
            {
                texto: "Usa uma ferramenta online de geração de gráficos que simplifica o processo.",
                afirmacao: "Você acelerou o processo utilizando uma ferramenta online, permitindo uma criação rápida e eficiente do gráfico."
            }
        ]
    },
    {
        enunciado: "Seu grupo de trabalho está atrasado com a pesquisa sobre o impacto das redes sociais. Um dos membros sugere usar um gerador de texto automático para agilizar. O que você faz?",
        alternativas: [
            {
                texto: "Aceita a sugestão e usa o gerador para acelerar o processo, mesmo sabendo que pode precisar revisar o conteúdo.",
                afirmacao: "Você optou por uma solução rápida, mas depois precisou revisar o conteúdo gerado para garantir precisão."
            },
            {
                texto: "Prefere dedicar mais tempo revisando e compilando as informações manualmente para garantir a qualidade e a originalidade do trabalho.",
                afirmacao: "Você priorizou a qualidade do trabalho e preferiu revisar manualmente as informações para assegurar que fossem precisas e relevantes."
            }
        ]
    },
];

let atual = 0;
let historiaFinal = "";

// Função principal para iniciar a exibição da pergunta atual
function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = ""; // Limpa alternativas anteriores
    mostraAlternativas(perguntaAtual.alternativas);
}

// Função para exibir alternativas
function mostraAlternativas(alternativas) {
    alternativas.forEach(alternativa => {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    });
}

// Função para tratar a seleção da resposta
function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

// Função para mostrar o resultado final
function mostraResultado() {
    caixaPerguntas.textContent = "Sua jornada através das redes sociais...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.innerHTML = ""; // Limpa alternativas finais
}

// Inicializa a aplicação
mostraPergunta();
