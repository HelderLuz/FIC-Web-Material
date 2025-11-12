const form = document.querySelector('form')

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const cep = form.querySelector('#cep').value

    console.log(cep)
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const dados = await res.json()
    console.log(dados)
    adicionarEndereco(dados)
})

function adicionarEndereco({ logradouro, bairro, estado, localidade }) {
    const divResultado = document.querySelector('#resultado')

    const p = document.createElement('p')
    p.textContent = `Cidade: ${localidade} | Estado: ${estado} | Bairro: ${bairro} | Logradouro: ${logradouro}`

    divResultado.innerHTML = ''
    divResultado.append(p)
}