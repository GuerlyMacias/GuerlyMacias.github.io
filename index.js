document.addEventListener('DOMContentLoaded',()=>{
        document.addEventListener('mousemove',(event)=>{
        Creator(event.clientX,event.clientY)
    })
})
function change(but){
    but.style.boxShadow = '1px 4px 10px 2px rgb(127, 125, 125)'


}
function changeback(but){
    but.style.boxShadow = '0.2px 2px 5px 1px rgb(127, 125, 125)'


}
function showes(mybut){


    let div = document.querySelector('#muetreo')
    div.innerHTML = ' '
    div.style.visibility = 'visible'

    let institution = ["CS50"
    ,"Servicio Nacional de Aprendizaje"
    ,"Fundacion Universitaria San Martin"]
    
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
        mybut.style.backgroundColor = 'white'
        mybut.style.color = 'black'
    
        let buttwo = document.querySelector('#media2')
        buttwo.style.backgroundColor='black'
        buttwo.style.color = 'white'
    
        let butthree = document.querySelector('#experiences')
        butthree.style.backgroundColor= 'black'
        butthree.style.color = 'white'
}
function profiles(but){
    let div = document.querySelector('#muetreo')
    div.innerHTML = ' '
    div.style.visibility = 'visible'
    let mymedia=["https://github.com/GuerlyMacias","https://www.linkedin.com/in/guerly-macias-9b14b1285/"]
    mymedia.forEach((element,index)=>{
        let icon = ['fa-brands fa-github','fa-brands fa-linkedin']
        let header = document.createElement('i')
        let lin = document.createElement('a')
        lin.href = element
        header.setAttribute("class", icon[index])
        header.innerHTML = `&nbsp  <a href='${element}' style="color: white; text-decoration: none"; target="_blank">${element}<\a>`
        header.style.marginTop = '15px'
        spa = document.createElement('br')
        div.appendChild(header)
        div.append(spa)
        div.append(spa)

    })
    but.style.backgroundColor = 'white'
    but.style.color = 'black'

    let buttwo = document.querySelector('#studies')
    buttwo.style.backgroundColor='black'
    buttwo.style.color = 'white'

    let butthree = document.querySelector('#experiences')
    butthree.style.backgroundColor= 'black'
    butthree.style.color = 'white'

    

}
function proyects(but){
    let div = document.querySelector('#muetreo')
    div.innerHTML = ' '
    div.style.visibility = 'visible'
    let a = document.createElement('a')
    a.href = 'http://tesorosdivertidos.net'
    a.innerHTML = '<h4>www.tesorosdivertidos.net</h4>'
    a.style.color = 'white'
    a.style.letterSpacing = '0.3rem'
    a.style.textDecoration = 'none'
    div.append(a)
    but.style.backgroundColor = 'white'
    but.style.color = 'black'
    

    let buttwo = document.querySelector('#studies')
    buttwo.style.backgroundColor='black'
    buttwo.style.color = 'white'

    let butthree = document.querySelector('#media2')
    butthree.style.backgroundColor= 'black'
    butthree.style.color = 'white'

}
function Creator(x,y){
    x= x+50
    y = y+50
    let mover = document.querySelector('#mover')
    mover.style.visibility = 'visible'
    mover.style.position = 'absolute'
    mover.style.top = y+'px'
    mover.style.left = x+'px'

}
