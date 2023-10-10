
//Captura o elemento de imput do username

const usernameInput = document.getElementById('login-usuario');

//Captura o elemento do parágrafo de erro do username
const usernameErrorText = document.getElementById('username-error')

//Captura o elemento de input da senha
const passwordInput = document.getElementById('login-senha')

//Captura o elemento de parágrafo de erro da senha
const passwordInputErrorText = document.getElementById('password-error')


//USUÁRIO ERROU USERNAME

//Adiciona ao elemento de input a classe com os estilos pra deixar esse input vermelho
usernameInput.classList.add('error')

//adiciona ao elemento de parágrafo a classe que troca o display none para display block
//para que o texto fique visível
usernameErrorText.classList.add('visible')

//USUÁRIO ACERTOU O USERNAME E ERROU A SENHA

//remover as classes de erro e adicionar a classe de acerto  ao input e parágrafo de username
usernameInput.classList.remove('error')
usernameInput.classList.add('correct')
usernameErrorText.classList.remove('visible')

//adiciona ao elemento de input a classe que deixa com a cor vermelha
passwordInput.classList.add('error')

//adiciona ao elemento de parágrafo a classe que deixa ele visível
passwordInputErrorText.classList.add('visible')