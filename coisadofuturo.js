//
// A Coisa do Futuro
// by Allan Melo
//

let mundo = [ 'continuar em crescimento', 'entrar em colapso', 'sofrer com limitações', 'passar por transformações' ];
let epoca = [ 'Amanhã', 'Em alguns anos', 'Em uma década', 'Em uma geração', 'Em um século', 'Em um milênio' ];
let tema = [ 'agricultura','água','ambiente','animais de estimação','aprendizado','beleza','cidadania','cidades','classe','clima','clonagem','combustíveis','comunicação','comunidade','doenças','economia','educação','energia','entretenimento','envelhecimento','espaço','família','favelas','florestas','futebol','gambiarra','genética','guerra','identidade','igualdade','infância','insetos','inteligência artificial','lar','memória','mercado','mineração','moda','mulher','música','o cérebro','oceanos','pirataria','política','praias','religião','saúde','sexo','tempo livre','trabalho','transporte','tribunais','viagen','zumbis' ];
let sentimento = ['admiração','alegria','alienação','alívio','ansiedade','arrependimento','bem-estar','calma','cansaço','celebração','certeza','contentamento','curiosidade','dignidade','diversão','entusiasmo','esperança','estranheza','expectativa','fascinação','fervor','força','frustração','gentileza','graça','gratidão','inquietação','mal-estar','maravilhamento','medo','melancolia','narcisismo','nojo','nostalgia','orgulho','ostentação','otimismo','comoção','pavor','complexidade','prazer','preocupação','raiva','respeito','ressentimento','satisfação','saudade','choque','surpresa','tesão','tristeza','algo ultrajante','vergonha','algo zen']; 
let objeto = [ 'arma','bandeira','bebida','caixa','camisa','campanha','capa de revista','companhia','dança','ferramenta','fofoca','garrafa','lei','lembrancinha','manchete','máquina','máscara','novela','obra de arte','pílula','planta','propaganda','relíquia','roupa','tatuagem','adesivo','amuleto','aplicativo','brinquedo','dispositivo','doce','documento','edifício','evento','festival','implante','jogo','kit','lanche','livro','logo','mapa','monumento','organismo','panfleto','poster','presente','produto','ritual','robô','símbolo','slogan','veículo','vídeo' ];


function gerarMundo() {
    let caos = Math.floor((Math.random() * mundo.length));
    let meuMundo = mundo[caos];
    return meuMundo;
}

function gerarEpoca() {
    let caos = Math.floor((Math.random() * epoca.length));
    let meuEpoca = epoca[caos];
    return meuEpoca;
}

function gerarTema() {
    let caos = Math.floor((Math.random() * tema.length));
    let meuTema = tema[caos];
    return meuTema;
}

function gerarSentimento() {
    let caos = Math.floor((Math.random() * sentimento.length));
    let meuSentimento = sentimento[caos];
    return meuSentimento;
}

function gerarObjeto() {
    let caos = Math.floor((Math.random() * objeto.length));
    let meuObjeto = objeto[caos];
    // função do Objeto com dois resultados possíveis, para definir o artigo "a" ou "o" corretamente
    // Objetos antes de [24] possuem artigo feminino. Após [25], artigo masculino. "tatuagem" é o último Objeto da lista com artigo feminino.
    if (caos < 25) {
        return "a " + meuObjeto;
    } else {
        return " " + meuObjeto;
    } 
}

/// Gerar cenário
function gerarFuturo() {
    let futuro = [gerarEpoca(), gerarMundo(), gerarObjeto(), gerarTema(), gerarSentimento()];
    return futuro;
}


/// Action!

let start = document.getElementById('text-start'); 
let world = document.getElementById('text-world'); 
let thing = document.getElementById('text-thing');
let bye = document.getElementById('text-bye'); 
let botao = document.getElementById('botao-start');
let rebot = document.getElementById('botao-rebot');

bye.style.display = "none";
rebot.style.display = "none";

botao.addEventListener('click', function() {
  var coisaFuturo = gerarFuturo();
  start.innerText = "Eis o seu cenário futuro: ";
  world.innerText = coisaFuturo[0] + ", se o mundo " + coisaFuturo[1] + ", existirá uma coisa."
  thing.innerText = "Essa coisa será um" + coisaFuturo[2] + " sobre " + coisaFuturo[3] + ", e evocará " + coisaFuturo[4] + " nas pessoas."
  bye.style.display = "block";
  rebot.style.display = "block";
  botao.innerText = "Gerar novo cenário";
});

rebot.addEventListener('click', function() {
  var coisaFuturo = null;
  start.innerText = "Desvende uma nova Coisa do Futuro agora.";
  world.style.display = "none";
  thing.style.display = "none";
  bye.style.display = "none";
  rebot.style.display = "none";
  botao.innerText = "Criar uma Coisa!";
});
