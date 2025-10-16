const lista = document.querySelector('#lista-tarefas');

lista.addEventListener('click', function(e) {
  // Verifica se o elemento clicado tem a classe 'btn-excluir'
  if (e.target.classList.contains('btn-excluir')) {
    // Remove o elemento pai do botão (o <li>)
    e.target.parentElement.remove();
  }
});