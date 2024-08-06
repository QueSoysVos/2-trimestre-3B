const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".perguntas");
const caixaAlternativas = document.querySelector(".caixa-palternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola voce se depara com uma nova tecnologia, um chat que consegue responder todas as duvidas que uma pessoa pode ter, ele tambem gera imagens e audios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            "Isso e assustador!",
            "Isso e maravilhoso!"
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligencia Artificial, uma professora de tecnologia da escola decidiu fazer uma sequencia de aulas sobre esta tecnologia. No fim de uma aula ela pede que voce escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude voce toma?",
        alternativas: [
            "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informacoes relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
            "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos proprios sobre o tema."
        ]
    },
    {
        enunciado: "Apos a elaboracao do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa tambem foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como voce se posiciona?",
        alternativas: [
            "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
            "Me preocupo com as pessoas que perderao seus empregos para maquinas e defendem a importancia de proteger os trabalhadores."
        ]
    },
    {
        enunciado: "Ao final da discussao, voce precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            "Criar uma imagem utilizando uma plataforma de design como o Paint.",
            "Criar uma imagem utilizando um gerador de imagem de IA."
        ]
    },
    {
        enunciado: "Voce tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho esta um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema e que o trabalho esta totalmente igual ao do chat. O que voce faz? ",
        alternativas: [
            "Escrever comandos para o chat e uma forma de contribuir com o trabalho, por isso nao e um problema utilizar o texto inteiro.",
            "O chat pode ser uma tecnologia muito avancada, mas e preciso manter a atencao pois toda maquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais e essencial."
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta()
