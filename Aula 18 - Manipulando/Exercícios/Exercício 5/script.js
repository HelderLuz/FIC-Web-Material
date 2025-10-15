// 5. Crie uma página com uma <textarea> e um parágrafo logo abaixo que servirá como contador. Usando o evento input, atualize o parágrafo em tempo real para mostrar quantos caracteres o usuário já digitou. Ex: "Caracteres: 75".

const textarea = document.querySelector('#texto')
textarea.addEventListener('input', () => {
    const texto = textarea.value
    
    const numCharacteres = texto.length

    document.querySelector('#numChar').textContent = numCharacteres
})