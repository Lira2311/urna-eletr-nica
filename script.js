let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0;

function comecarEtapa(){
    let etapa = etapas[etapaAtual];

    let numeroHTML = '';

    for(let i=0;i<etapa.numeros;i++) {
        numeroHTML += '<div class="numero"></div>';
    }

    seuVotoPara.style.display ='none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHTML;

}

function clicou(n) {
    alert("clicou em " +n)
}
function branco(){
    alert("clicou em BRANCO " )
}
function corrige(){
    alert("clicou em CORRIGE" )
}
function confirma(){
    alert("clicou em CONFIRMA" )
}