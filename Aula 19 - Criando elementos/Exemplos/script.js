const tbody = document.querySelector('tbody')

// tbody.innerHTML = `<tr><td>Maria</td><td>23</td></tr>`

const linha = document.createElement('tr')
const nome = document.createElement('td')
const idade = document.createElement('td')

nome.textContent = 'Maria'
idade.textContent = '23'

linha.append(nome, idade)
tbody.append(linha)

document.querySelector('tbody').remove()