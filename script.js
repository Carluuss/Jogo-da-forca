c2 = document.getElementById("c2");
c3 = document.getElementById("c3");
c4 = document.getElementById("c4");
c5 = document.getElementById("c5");

// função para adicionar mais cards
function adicionarPalavra(botao) {
  if (botao.id == "b1") c2.classList.remove("d-none");
  if (botao.id == "b2") c3.classList.remove("d-none");
  if (botao.id == "b3") c4.classList.remove("d-none");
  if (botao.id == "b4") c5.classList.remove("d-none");
}

let chaveApoio = "";
listaChaves = [];
cont = 0;

// função para iniciar o jogo
function iniciar() {
  if (cont == 0) {
    for (i = 1; i < 5; i++) {
      chave = document.getElementById("chave" + i).value;
      if (chave != "") {
        listaChaves.push(chave);
        cont++;
      }
    }
  }
  if(cont){
    chaveApoio = "";
    posicao = Math.floor(Math.random() * cont);
    chave = listaChaves[posicao];
    alert(listaChaves.splice(posicao,1));
    cont--;
    
    for(i = 0; i < chave.length; i++)
    chaveApoio += "?";

    palavra = document.getElementById("palavra");
    palavra.innerHTML = chaveApoio;
    jogo = document.getElementById("cardJogo");
    jogo.classList.remove("d-none");
    cardIniciar = document.getElementById("cardInicio");
    cardIniciar.classList.add("d-none");
  }
}

qtdTentativas = 6;
letrasDigitadas = [];

//função para verificar quantidade de tentativas
function verificar() {
  letra = document.getElementById("letra");
  letrasDigitadas.push(letra.value);
  encontrou = false;

  for (i = 0; i < chave.length; i++) {
    if (letra.value == chave[i]) {
      encontrou = true;
      chaveApoio =
        chaveApoio.substring(0, i) + letra.value + chaveApoio.substring(i + 1);
    }
  }
  if (!encontrou) {
    qtdTentativas--;
    mudarImagem();
  }
  palavra = document.getElementById("palavra");
  palavra.innerHTML = chaveApoio;
  tentativas = document.getElementById("tentativas");
  tentativas.innerHTML = "Quantidade de tentativas " + qtdTentativas;
  letra.value = "";
  letra.focus();
  funLetrasDigitadas();
  finalizar();
}

//função para verificar palavra digitada
function funLetrasDigitadas() {
  frase = "Letras Digitadas:";
  pLetrasDigitas = document.getElementById("letrasDigitadas");
  for (i = 0; i < letrasDigitadas.length-1; i++) {
    frase += letrasDigitadas[i] + ",";
  }
  frase += letrasDigitadas[i];
  pLetrasDigitas.innerHTML = frase;
}

//função para trocar a palavra
function finalizar() {
  if (!qtdTentativas) {
    jogo.classList.add("d-none");
    alert("Fim de jogo, você perdeu!");
    if (cont) {
      qtdTentativas = 6;
      mudarImagem();
      tentativas = document.getElementById("tentativas");
      tentativas.innerHTML = "Quantidade de tentativas: " + qtdTentativas;
      letrasDigitadas = [];
      frase = "";
      pLetrasDigitas = document.getElementById("letrasDigitadas");
      pLetrasDigitas.innerHTML = "Letras Digitadas";
      iniciar();
    } else {
      location.reload(true);
    }
  }
  if(chaveApoio == chave){
    jogo.classList.add("d-none");
    alert("Fim de jogo, você ganhou!");
    if (cont) {
      qtdTentativas = 6;
      mudarImagem();
      tentativas = document.getElementById("tentativas");
      tentativas.innerHTML = "Quantidade de tentativas: " + qtdTentativas;
      letrasDigitadas = [];
      frase = "";
      pLetrasDigitas = document.getElementById("letrasDigitadas");
      pLetrasDigitas.innerHTML = "Letras Digitadas:";
      iniciar();
    }else {
      location.reload(true);
    }
  }
}

//função para reiniciar a página
function reiniciar() {
  location.reload(true);
}


let img = document.getElementById("imagem");

//função para troca de imagens
function mudarImagem() {
  switch (qtdTentativas) {
    case 6:
      img.src = "./image/jogo-da-forca6.png";
      break;
    case 5:
      img.src = "./image/jogo-da-forca5.png";
      break;
    case 4:
      img.src = "./image/jogo-da-forca4.png";
      break;
    case 3:
      img.src = "./image/jogo-da-forca3.png";
      break;
    case 2:
      img.src = "./image/jogo-da-forca2.png";
      break;
    case 1:
      img.src = "./image/jogo-da-forca1.png";
      break;
    case 0:
      img.src = "./image/jogo-da-forca.png";
      break;
  }
}

