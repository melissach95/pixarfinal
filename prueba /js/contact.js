`use strict`
const inputText = document.querySelector (`.Formulario-texto `)
console.log (`inputText`)
const avisoMouse = document.querySelector('.Aviso-mouse'); 
console.log (`avisoMouse`)
const btn = document.querySelector (`.Formulario-enviar`) 
console.log (`btn`)
const pop = document.querySelector (`.Main-pop`)
console.log (`pop`)
const popClose = document.querySelector (`.Pop-close`)

// cuando mousemove en inputText
  // avisoMouse translate con el cursor
inputText.addEventListener(`mousemove`, (e)=>{
    console.clear()
    avisoMouse.style.translate = `${e.clientX}px ${e.clientY}px`
})
// cuando mouseover en inputText,
  // avisoMouse se le añade la clase isActive
  // avisoMouse le remove la clase isActive 
inputText.addEventListener('mouseover', () => {
  avisoMouse.classList.add('isActive');
});
inputText.addEventListener('mouseout', () => {
  avisoMouse.classList.remove('isActive');
});

// cuando haga click en btn
// pop le add la clase isActive

btn.addEventListener(`click`,()=>{
    pop.classList.add(`isActive`)
})
// cuando haga click en popClose 
// pop le remove la clase isActive

popClose.addEventListener(`click`,()=>{
    pop.classList.remove (`isActive`)
})