// Voltar para a tela de login
function home() {
    window.location.href= "index.html"
}

// Registrar
function registrar() {
    var mysql = require ('mysql')

    // Minha conexão com o banco
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: null,
        database: "mydb"
    })

    // Teste de conexão com o banco
    connection.connect(function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log('sucesso')
        }
    })

    // Dados do index
    var nome = document.getElementById('inputName').value
    var nascimento = document.getElementById('inputNascimento').value
    var email = document.getElementById('inputEmail').value
    var telefone = document.getElementById('inputTelefone').value
    var senha = document.getElementById('inputSenha').value

    $registerUser = 'INSERT INTO `login_registro` (`email`, `senha`, `nome`, `nascimento`, `telefone`) VALUES ("' + email + '", "' + senha + '", "' + nome + '", "' + nascimento + '", "' + telefone + '" )'

    connection.query($registerUser, function(err, rows) {
        if (err) {
            console.log(err)
            return
        }
        if (rows.length === 0) {
            window.alert('Algum campo não foi preenchido.')
        } else {
            window.location.href = 'cadastro.html'
        }
    })
}