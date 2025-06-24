'use strict'

const Header = document.querySelector (`.Header`)
const HeaderBtn =Header.querySelector (`.Header-btn`)
console.log (HeaderBtn)

const HeaderNav =Header.querySelector (`.Header-nav`)
console.log (HeaderNav)

HeaderBtn.addEventListener (`click`,()=>{
    HeaderNav.classList.toggle (`isActive`)
})
