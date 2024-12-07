let btnNO = document.getElementById("btnNo")
let btnYes = document.getElementById("btnYes")

btnNO.onmouseover = ()=>{

    let innerWidth = window.innerWidth
    let innerHeight = window.innerHeight

    let randomX = Math.floor(Math.random() * (innerWidth - 100));
    let randomY = Math.floor(Math.random() * (innerHeight - 50));

    btnNO.style.left = `${randomX}px`
    btnNO.style.top = `${randomY}px`
}
btnYes.onmouseover = ()=>{

    let innerWidth = window.innerWidth
    let innerHeight = window.innerHeight

    let randomX = Math.floor(Math.random() * (innerWidth - 100));
    let randomY = Math.floor(Math.random() * (innerHeight - 50));

    btnYes.style.left = `${randomX}px`
    btnYes.style.top = `${randomY}px`
}