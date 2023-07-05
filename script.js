function toogleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    const Img = document.querySelector("#avatar img")

    if (html.classList.contains('light')) {
        Img.setAttribute('src', './assets/avatar-light.png')
    } else {
        Img.setAttribute('src', './assets/avatar.png')
    }
}