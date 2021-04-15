// const containerImg            = document.getElementsByClassName('container-img');
// const containerAboult         = document.getElementsByClassName('container-aboult');
// const containerSectionProyect = document.getElementsByClassName('container-section-proyect');
// const containerContact        = document.getElementsByClassName('container-contact');

const inicio                  = document.getElementById('inicio')
const aboult                  = document.getElementById('aboult')
const proyect                 = document.getElementById('proyect')
const contact                 = document.getElementById('contact')




const inicioHide = () => {

    document.classList.remove('hide')
   
}




inicio.addEventListener('click', inicioHide)