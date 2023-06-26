function toggleMode() {
    const html =document.documentElement
    html.classList.toggle("Light")
    
    //pegar a tag img
    //pegar imagem para fazer a substiução quando o tema mudar
    const img = document.querySelector ("#profile img")

    if(html.classList.contains ("Light")) {
    // se tiver ligth mode, adcionar a imagem ligth
    img.setAttribute("src","./assets/avatar-2.png")
    } else {
        img.setAttribute("src", "./assets/avatar.png")
    }
//se tiver sem ligth mode, manter a imagem normal
}

    