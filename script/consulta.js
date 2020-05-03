// Voltar pra tela de cadastro
function cadastro() {
    window.location.href = "cadastro.html"
}

// Tabela
(function () {
    var mysql = require('mysql')

    // Minha conexão com o banco
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: null,
        database: 'mydb'
    })

    // Teste de conexão com o banco
    connection.connect(function (err) {
        // caso de erro
        if (err) {
            console.log(err)
        } else {
            console.log('sucesso')
        }
    })

    $Consulta = 'SELECT * FROM cadastro_consulta'

    connection.query($Consulta, function (err, rows) {
        if (err) {
            console.log(err)
            return
        }
        var html = ''

        rows.forEach(function (row) {
            html += '<tr>'
            html += '<th scope="row">'
            html += row.nome
            html += '</th>'
            html += '<td>'
            html += row.categoria
            html += '</td>'
            html += '<td>'
            html += row.descricao
            html += '</td>'
            html += '</tr>'
        })

        document.querySelector('#retornaCadastro > tbody').innerHTML = html
    })
})()
