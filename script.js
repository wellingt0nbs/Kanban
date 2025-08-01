let cursos = [...document.querySelectorAll('.cursos')];
const botaoD = document.querySelector('#botao');
const botaoE = document.querySelector('#botaoE')
const direito = document.querySelector('.direito');
const esquerdo = document.querySelector('.esquerdo');



cursos.map((curso)=>{
    curso.addEventListener('click', () =>{
     curso.classList.toggle('selecionado')  
    })

})

botaoD.addEventListener('click', ()=>{
    const cursosSele = [...document.querySelectorAll('.selecionado')];
    cursosSele.map( (cursoSelecionado)=>{
        cursoSelecionado.classList.remove('selecionado')
        direito.appendChild(cursoSelecionado)
    })    

})

botaoE.addEventListener('click', ()=>{
    const cursosSele = [...document.querySelectorAll('.selecionado')];
    cursosSele.map( (cursoSelecionado)=>{
        cursoSelecionado.classList.remove('selecionado')
        esquerdo.appendChild(cursoSelecionado)
    })    

})