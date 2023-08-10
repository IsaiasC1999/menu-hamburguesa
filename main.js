const btnToggle = document.getElementById('menu-toggle');
const menuNavToggle = document.getElementById('menu-nav-conteiner')
const btnCloseNav = document.getElementById('menu-btn-close');

btnToggle.onclick = () => {

  menuNavToggle.classList.toggle('toggle')


}

btnCloseNav.onclick = () => {

  console.log("Cerrando")
  menuNavToggle.classList.toggle('toggle')

}


