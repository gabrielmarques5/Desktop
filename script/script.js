function entrar() {
    var mysql = require ('mysql')

    // Minha conexão com o banco
    var connection = mysql.createConnection({
        host: 'localhost', 
        user: 'root',
        password: null,
        database: 'mydb'
    })

    // Teste de conexão com o banco
    connection.connect(function(err) {
        // caso de erro
        if (err) {
            console.log(err)
        } else {
            console.log('sucesso')
        }
    })

    // Dados do index
    var email = document.getElementById('inputEmail').value
    var senha = document.getElementById('inputSenha').value

    // Validar seu usuário existe
    $validateUser = 'SELECT * FROM `login_registro` WHERE `email` = "' + email + '" and `senha` = "' + senha + '"'

    connection.query($validateUser, function (err, rows){
        if (err) {
            console.log(err)
            return;
        }
        if (rows.length === 0){
            window.alert('Usuário ou senha incorretos.')
            return;
        } else {
            window.location.href = 'cadastro.html'
        }

    })

}