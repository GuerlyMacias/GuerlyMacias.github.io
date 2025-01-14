document.addEventListener('DOMContentLoaded',()=>{
    console.log("here")
})

function school(){
    let div = document.querySelector('#shows')
    div.innerHTML = ' '

    let institution = ["Harvard Online CS50","Servicio Nacional de Aprendizaje","Fundacion Universitaria San Martin"]
    
    institution.forEach((elemento, index)=>{
        let Grades = [" 'Introduction to Computer Science' - 'Python' - 'DataBases (sqlite, mySQL, PostgreSQL)' ", "Analysis and Development of software", "Business administration"]
        let institute =document.createElement('h4')
        let graded = document.createElement('a')
        graded.style.paddingLeft = '15px'
        graded.innerHTML = Grades[index]
        institute.innerHTML = elemento

        institute.style.background = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 55%, rgba(0,212,255,1) 100%)'

        institute.style.color = 'white'
        institute.style.textAlign = 'center'

        div.appendChild(institute)
        div.appendChild(graded)
        })
}
function store(){
    let div = document.querySelector('#shows')
    div.innerHTML = ' '

    let a = document.createElement('a')
    a.href = 'http://tesorosdivertidos.net'
    a.target = '_blank'
    a.innerHTML = '<h4>www.tesorosdivertidos.net</h4>'
    a.style.letterSpacing = '0.3rem'
    div.append(a)
}
function platform(){
    let div = document.querySelector('#shows')
    div.innerHTML = ' '

    let a = document.createElement('a')
    a.href = 'https://www.tusclases.co/profesores/tecnologia-online/fundamentos-programacion-websites-construccion-2117666?utm_source=mail_recomendacion&utm_medium=mail&utm_campaign=mail_recomendacion&cee=EE19BD541EA579777DA49B712EB3C8546B48B2F3370C8FAB'
    a.target = '_blank'
    a.innerHTML = 'Enroll a Class'
    a.style.letterSpacing = '0.3rem'
    div.append(a)

}
