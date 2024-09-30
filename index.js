document.addEventListener('DOMContentLoaded',()=>{
    console.log("here")
})

function school(){
    let div = document.querySelector('#shows')
    div.innerHTML = ' '

    let institution = ["CS50","Servicio Nacional de Aprendizaje","Fundacion Universitaria San Martin"]
    
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
    a.href = '#'
    a.target = '_blank'
    a.innerHTML = 'Soon . . .'
    a.style.letterSpacing = '0.3rem'
    div.append(a)

}