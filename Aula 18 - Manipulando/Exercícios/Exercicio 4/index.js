// Faça uma página com 2 campos para número, um botão e um parágrafo. Ao clicar no botão, os valores de cada campo devem ser somados e o resultado apresentado no parágrafo.

document.querySelector('#soma').addEventListener('click', () => {
    const num1 = parseFloat(document.querySelector('#num1').value)
    const num2 = document.querySelector('#num2').valueAsNumber

    const paragrafo = document.querySelector('p');
    paragrafo.textContent = `Resultado: ${num1 + num2}`
    
})



