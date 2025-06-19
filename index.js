
//HamburgerBarNav
function showbar(){
    document.querySelector('#firtsnav').style.display = 'block'
    document.querySelector('#cerrarmenu').style.display = 'block'
}
function hidenav(){
        document.querySelector('#firtsnav').style.display = 'none'

}

//Cambio de Lenguaje
function changeLanguage(){
    let language = document.querySelector('#language')
    let title = document.querySelector('#saludo')


    if(language.innerHTML == 'Change to English'){
        language.innerHTML = 'Cambiar a Español'

        if( title.innerHTML = 'BIENVENIDO A MI PORTAFOLIO'){
            title.innerHTML = 'WELCOME! IT IS MY PORTFOLIO'
        } 
        let allenglish = document.querySelectorAll('.english')
        allenglish.forEach(item =>item.style.display = 'block')
        let allspanish = document.querySelectorAll('.spanish')
        allspanish.forEach(item=> item.style.display='none')
    }
    else{
        language.innerHTML = 'Change to English'
        title.innerHTML = 'BIENVENIDO A MI PORTAFOLIO'
        let allenglish = document.querySelectorAll('.english')
        allenglish.forEach(item =>item.style.display = 'none')
        let allspanish = document.querySelectorAll('.spanish')
        allspanish.forEach(item=> item.style.display='block')

    }
}

//Funciones de Botones
//Estudios Functions

function estudios(){
    document.querySelector('.myinfo').style.display = 'flex'
    document.querySelector('.myinfo2').style.display = 'none'
    document.querySelector('.myinfo3').style.display = 'none'



}
//Agrega el hover before al div


//Herramientas Function
function skills(){
    document.querySelector('.myinfo').style.display = 'none'
    document.querySelector('.myinfo3').style.display = 'none'
    document.querySelector('.myinfo2').style.display = 'flex'
    
}
function webs(){
    document.querySelector('.myinfo').style.display = 'none'
    document.querySelector('.myinfo2').style.display = 'none'
    document.querySelector('.myinfo3').style.display = 'flex'

}
