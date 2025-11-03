document.querySelector('#armazenar').addEventListener('click', () => {
    const chave = document.querySelector('#chave').value
    const valor = document.querySelector('#valor').value

    localStorage.setItem(chave, valor)
})

document.querySelector('#remover').addEventListener('click', () => {
    const chave = document.querySelector('#chave').value

    localStorage.removeItem(chave)
})