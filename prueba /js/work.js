'use strict'
const avisoMouse = document.querySelector(`.Aviso-mouse`)
console.log (`avisoMouse`)
const img = document.querySelectorAll (`.Work-imagen`)
console.log (`img`)
const Proyectos = document.querySelector (`.Work-proyectos`)
console.log (Proyectos)
const Proyecto1 = Proyectos.querySelector (`.Work-imagen.uno`)
console.log (Proyecto1)
const Proyecto2 = Proyectos.querySelector (`.Work-imagen.dos`)
console.log (Proyecto2)
const Proyecto3 = Proyectos.querySelector (`.Work-imagen.tres`)
console.log (Proyecto3)
const Proyecto4 = Proyectos.querySelector (`.Work-imagen.cuatro`)
console.log (Proyecto4)
const Proyecto5 = Proyectos.querySelector (`.Work-imagen.cinco`)
console.log (Proyecto5)
const Work = document.querySelector (`.Work`)
console.log (Work)
const imagen = document.querySelector('.Work-imagen.uno');
console.log (imagen)
const imagen2 = document.querySelector('.Work-imagen.dos');
console.log (imagen2)
const imagen3 = document.querySelector('.Work-imagen.tres');
console.log (imagen3)
const imagen4 = document.querySelector('.Work-imagen.cuatro');
console.log (imagen4)
const imagen5 = document.querySelector('.Work-imagen.cinco');
console.log (imagen5)

// cuando muevo el mouse en la ventana.
  // el avisoMouse se traslada con el cursor
window.addEventListener(`mousemove`, (e)=>{
    console.clear()
    avisoMouse.style.translate = `${e.clientX}px ${e.clientY}px`
})
// cuando paso el mouse sobre cualquier img
  // le add la clase isActive de avisoMouse 
  // le remove la clase isActive de avisoMouse
img.forEach((_,i)=>{
    img[i].addEventListener(`mouseover`,()=>{
        avisoMouse.classList.add(`isActive`)
    })
    img[i].addEventListener(`mouseover`,()=>{
        avisoMouse.classList.remove(`isActive`)
    })
})
// cuando paso el mouse sobre proyecto x
  // le agrego un backgroundcolor x a work
Proyecto1.addEventListener (`mouseover`, ()=>{
   Work.style.backgroundColor = `#26113f`
})
Proyecto1.addEventListener (`mouseout`,()=>{
    Work.style.backgroundColor = `white`
})
Proyecto2.addEventListener (`mouseover`, ()=>{
   Work.style.backgroundColor = `yellow`
})
Proyecto2.addEventListener (`mouseout`,()=>{
    Work.style.backgroundColor = `white`
})
Proyecto3.addEventListener (`mouseover`, ()=>{
   Work.style.backgroundColor = `black`
})
Proyecto3.addEventListener (`mouseout`,()=>{
    Work.style.backgroundColor = `white`
})
Proyecto4.addEventListener (`mouseover`, ()=>{
   Work.style.backgroundColor = `orange`
})
Proyecto4.addEventListener (`mouseout`,()=>{
    Work.style.backgroundColor = `white`
})
Proyecto5.addEventListener (`mouseover`, ()=>{
   Work.style.backgroundColor = `#b480ff`
})
Proyecto5.addEventListener (`mouseout`,()=>{
    Work.style.backgroundColor = `white`
})

// cuando hago mouseover sobre imagen
  // le add la clase isActive
  // le remove la clase isActive
imagen.addEventListener('mouseover', () => {
  imagen.classList.add('isActive');
});
imagen.addEventListener('mouseout', () => {
  imagen.classList.remove('isActive');
});

// cuando hago mouseover sobre imagen2
  // le add la clase isActive
  // le remove la clase isActive
imagen2.addEventListener('mouseover', () => {
  imagen2.classList.add('isActive');
});
imagen2.addEventListener('mouseout', () => {
  imagen2.classList.remove('isActive');
});

// cuando hago mouseover sobre imagen3
  // le add la clase isActive
  // le remove la clase isActive
imagen3.addEventListener('mouseover', () => {
  imagen3.classList.add('isActive');
});
imagen3.addEventListener('mouseout', () => {
  imagen3.classList.remove('isActive');
});

// cuando hago mouseover sobre imagen4
  // le add la clase isActive
  // le remove la clase isActive
imagen4.addEventListener('mouseover', () => {
  imagen4.classList.add('isActive');
});
imagen4.addEventListener('mouseout', () => {
  imagen4.classList.remove('isActive');
});

// cuando hago mouseover sobre imagen5
  // le add la clase isActive
  // le remove la clase isActive

imagen5.addEventListener('mouseover', () => {
  imagen5.classList.add('isActive');
});
imagen5.addEventListener('mouseout', () => {
  imagen5.classList.remove('isActive');
});