// Voltar para tela de login
function home() {
    window.location.href= "index.html"
}

// Ir para tela de consulta
function consulta() {
    window.location.href= "consulta.html"
}

// Cadastrar produtos
function cadastrar() {
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
        if (err) {
            console.log(err)
        } else {
            console.log('sucesso')
        }
    })

    // Dados do index
    var nome = document.getElementById('inputNome').value
    var categoria = document.getElementById('inputCategoria').value
    var descricao = document.getElementById('inputDescricao').value

    $saveProduct = 'INSERT INTO `cadastro_consulta` (`nome`, `categoria`, `descricao`) VALUES ("' + nome + '", "'+ categoria + '", "' + descricao + '")'

    connection.query($saveProduct, function(err, rows){
        if (err) {
            console.log(err)
            return;
        }
        if (rows.length === 0){
            window.alert('Algum campo não foi preenchido.')
            return;
        } else {
            window.alert('Produto cadastrado com sucesso!')
        }
    })
}

// Cancelar cadastro de produto
function cancelar() {
    window.location.href= "cadastro.html"
}