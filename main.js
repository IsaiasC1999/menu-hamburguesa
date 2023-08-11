const btnToggle = document.getElementById('menu-toggle');
const menuNavToggle = document.getElementById('menu-nav-conteiner');
const btnCloseNav = document.getElementById('menu-btn-close');
const gg = document.getElementById('fondo-opaciti')


btnToggle.onclick = () => {

  menuNavToggle.classList.toggle('toggle')
  gg.classList.toggle('active-div')
  


}

btnCloseNav.onclick = () => {

  console.log("Cerrando")
  menuNavToggle.classList.toggle('toggle')
  gg.classList.toggle('active-div')
  
}

gg.onclick = ()=>{
  menuNavToggle.classList.toggle('toggle')
  gg.classList.toggle('active-div')
}
