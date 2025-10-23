const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(form)
    const { nome, email, idade, cidade } = Object.fromEntries(formData.entries())

    const card = document.createElement('div')
    card.classList.add('card')
    const pnome = document.createElement('p')
    pnome.textContent = `Nome: ${nome}`
    const pemail = document.createElement('p')
    pemail.textContent = `Email: ${email}`
    const pidade = document.createElement('p')
    pidade.textContent = `Idade: ${idade}`
    const pcidade = document.createElement('p')
    pcidade.textContent = `Cidade: ${cidade}`

    const button = document.createElement('button')
    button.textContent = 'Remover'
    button.addEventListener('click', (e) => {
        const card = e.target.parentElement
        card.remove()
    })

    card.append(pnome, pemail, pidade, pcidade, button)

    document.querySelector('.info').append(card)
})