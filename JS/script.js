const presente = document.querySelector("#present")
const x = document.querySelector("#destiny")

const statsTimer = document.querySelector("#stats-timer")
const statsPresents = document.querySelector("#stats-presents")

const modal = {
    background: document.querySelector(".modal-background"),
    title: document.querySelector("#title"),
    text: document.querySelector("#text"),
    share: document.querySelector("#share"),
    button: document.querySelector("#button")
}

let min = 1;
let sec = 0;

let count = 0

function sortearPosicao() {
    let xValue = Math.floor(Math.random() * 92)
    let yValue = Math.floor(Math.random() * 92)
    x.style.top = `${yValue}%`
    x.style.left = `${xValue}%`
}

x.addEventListener("mouseenter", (e) => {
    count++;
    statsPresents.innerText = `Presentes ${count}`
    sortearPosicao()
})

document.addEventListener("mousemove", (e) => {

    presente.style.left = (e.clientX - 25.5) + "px"
    presente.style.top = (e.clientY - 22.5) + "px"

})

function timer() {
    if (sec == 0 && min > 0) {
        min--;
        sec = 59;
        statsTimer.innerText = `${min}:${sec < 10 ? "0" + sec : sec}`
        setTimeout(() => {
            timer()
        }, 1000)
    } else if (sec > 0) {
        sec--
        statsTimer.innerText = `${min}:${sec < 10 ? "0" + sec : sec}`
        setTimeout(() => {
            timer()
        }, 1000)
    } if (sec == 0 && min == 0) {
        statsTimer.innerText = `${min}:${sec < 10 ? "0" + sec : sec}`

        endGame()
    }
}

function start() {
    min = 1;
    sec = 0;

    count = 0
    modal.background.style.display = "none"
    presente.style.display = "inherit"
    x.style.display = "inherit"

    timer()
}

async function share(){
    const data = {

        title: 'Feliz Natal!',
        text: `Consegui salvar o Natal de ${count} famílias! Será que você consegue me superar? Clique no link abaixo, jogue e descubra!`,
        url: 'https://react-dev-victor-landing-page.netlify.app/'

    }

    if(navigator.canShare && navigator.canShare(data)){

        await navigator.share(data);

    }
}

function endGame(){
    presente.style.display = "none"
    x.style.display = "none"
    modal.background.style.display = "flex"

    modal.title.innerText = "Parabéns!"
    modal.text.innerHTML = `Você entregou ${count} presentes! <br> Salvando o natal de ${count} famílias!!`
    modal.share.style.display = "inherit"
    modal.button.innerText = "Restart!"
}