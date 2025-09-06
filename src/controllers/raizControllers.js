module.exports = {
    async raiz(req, res){
        const result = await console.log('Servidor Requisitado');

        const html = `
                        <!DOCTYPE html>
                        <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <title>Servidor Backend - NodeJs</title>
                            </head>
                            <body>
                                <h1>Servidor Requisitado !!!</h1>
                                <h3 style="color:#1976d2;font-weight:bold;">Rotas</h3>
                                <h3>/  - raiz</h3>
                                <h3>/user  - listar todos os usuários (get)  </h3>
                                <h3>/user  - Criar usuários (post) </h3>
                                <h3>/userauth  - autenticação de usuário (post)</h3>
                                <h3 style="color:#1976d2;font-weight:bold;">Rotas para imagens</h3>
                                <h3>/images  - Criar imagens (post) </h3>
                                <h3>/images  - Listar todas as imagens (get)</h3>
                                <img src="https://img.icons8.com/?size=100&id=64097&format=png&color=000000" alt="">
                            </body>
                        </html>

                     `
        return res.send(html);
    }
}