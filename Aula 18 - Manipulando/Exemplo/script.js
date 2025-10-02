const form = document.querySelector('#formulario')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    const dadosMensagem = { name, email, message };
    
    const resultado = document.querySelector('#resultado')

    resultado.textContent = `Nome: ${name} | Email: ${email} | Mensagem: ${message}`
})




