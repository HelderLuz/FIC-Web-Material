// Faça uma página com 5 parágrafos e um botão. Ao clicar no botão, ele deve atribuir os valores do 1 ao 5 respectivamente em cada parágrafo.

document.querySelector('#acao').addEventListener('click', () => {
    const paragrafos = document.querySelectorAll('p')

    for(let i = 0; i < paragrafos.length; i++) {
        paragrafos[i].textContent = `${i + 1}`
    }
})