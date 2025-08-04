const tudo = document.querySelector('body')
const cursos = [...document.querySelectorAll('.cursos')];
const btnVaiAndamento = document.querySelector('.vaiAndamento');
const bntVoltaComecar = document.querySelector('.voltaComecar');
const paiAndamento = document.querySelector('.paiAndamento');
const paiComecar = document.querySelector('.paiComecar');
const paiConcluido = document.querySelector('.paiConcluido');
const btnVaiConcluido = document.querySelector('.vaiConcluido');
const bntVoltaAndamento = document.querySelector('.voltaAndamento');
const btnEnviar = document.querySelector('#btnTarefa');



tudo.addEventListener('click', (e) => { // usei a delagacao de eventos para o body, para que as tarefas adicionadas também tenha o evento de click.
    if (e.target.classList.contains('cursos')) { // se no body for clicado e tiver a classe cursos ele faz a linha de baixo.
        e.target.classList.toggle('selecionado');
    }
});

tudo.addEventListener('click',(e) =>{
    if(e.target.classList.contains('btnApagar')){
        const selecionados=[...document.querySelectorAll('.selecionado')].map((selecionado) => {
            selecionado.remove();
            console.log(selecionado)
        })
    }
} )


btnEnviar.addEventListener('click', function(e){
    e.preventDefault();

   let novaTarefa=document.createElement('div');
   novaTarefa.classList.add('cursos', 'comecar');


    let entradaTarefa=document.querySelector('#tarefa');
    novaTarefa.innerHTML=entradaTarefa.value;

    paiComecar.appendChild(novaTarefa)
    entradaTarefa.value='';

} )



function praQueLado (seletor,direcao, oqAdicionar, oqRemover){ 

        const selecionados = [...document.querySelectorAll(`.${seletor}.selecionado`)].map((selecionado)=>{ //percorre todos os elemtos que tenha a classe recebida como atriputo mais a classe selecionado
        document.querySelector(direcao).appendChild(selecionado);
        selecionado.classList.add(oqAdicionar) //adiciona a classe que serve de referencia para saber em qual coluna a div selecionada esta
        selecionado.classList.remove('selecionado')
        selecionado.classList.remove(oqRemover) // remove a classe da coluna anterior
        

    })
}

btnVaiAndamento.addEventListener('click',() => {
    praQueLado('comecar','.paiAndamento','meio', 'comecar')});  //ao clicar no boao vai ou volta passa as coordenadas como para funcao acima.
    
bntVoltaComecar.addEventListener('click',() => {
    praQueLado('meio','.paiComecar','comecar', 'meio')});

btnVaiConcluido.addEventListener('click',() => {
    praQueLado('meio','.paiConcluido','fim', 'meio')});

bntVoltaAndamento.addEventListener('click',() => {
    praQueLado('fim','.paiAndamento','meio', 'fim')});