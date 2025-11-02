'use strict'

const loadButton = document.querySelector(`.Prehome-button`)
console.log(`loadButton`)
const letterMove = document.querySelectorAll(`.Prehome-letras`)
console.log(`letterMove`)
const MAX = 10;
const preHome = document.querySelector (`.Prehome`)
console.log(`preHome`)
const home = document.querySelector (`.Home`)
console.log (`home`)
const bloques = document.querySelectorAll('.Main-acordeon');
console.log (`bloques`)
const titulos = document.querySelectorAll('.Main-h3');
console.log (`titulos`)
const parrafos = document.querySelectorAll('.Main-p');
console.log (`parrafos`)
const subtitulos = document.querySelectorAll('.Main-h4');
console.log (`subtitulos`)


//cuando hago click en loadButton
//le add la clase isActive a prehome
//le add la clase isActive a home

loadButton.addEventListener('click',()=>{
  preHome.classList.add(`isActive`);
  home.classList.add (`isActive`);
})

// cuando load la ventana
  // le add la clase isActive a loadButton
window.addEventListener('load', () => {
  loadButton.classList.add(`isActive`)
})

// código para que las letras se muevan con el mouse hecho con chatgpt 
window.addEventListener('mousemove', (e) => {
  const nx = (e.clientX / window.innerWidth) - 0.5;
  const ny = (e.clientY / window.innerHeight) - 0.5;

  const tx = nx * MAX * 2;
  const ty = ny * MAX * 2;

  letterMove.forEach((el) => {
    el.style.transform = `translate(${tx}px, ${ty}px)`;
  });
});

//cuando le click en algun titulo 
//le remove la clase isActive a todos los parrafos, titulos y subtitulos
titulos.forEach((_, i) => {
  titulos[i].addEventListener('click', () => {

    parrafos.forEach((_, j) => {
      parrafos[j].classList.remove('isActive');
    });

    titulos.forEach((_, j) => {
      titulos[j].classList.remove('isActive');
    });

    subtitulos.forEach((_, j) => {
      subtitulos[j].classList.remove('isActive');
    });


    // Mostramos solo los párrafos que están dentro del bloque correspondiente
    // esta parte se busco con IA para que los p y h4 de cada h3 aparecieran
    const bloque = bloques[i];
    const p = bloque.querySelectorAll('.Main-p');
    const h4 = bloque.querySelectorAll('.Main-h4');

      // cuando hago click en un titulo
        // los p dentro de ese titulo isActive
      
    p.forEach((_, k) => {
      p[k].classList.add('isActive');
    });

    // cuando hago click en un titulo 
      // los h4 dentro de ese titulo isActive
    h4.forEach((_, k) => {
      h4[k].classList.add('isActive');
    });
  });
});


