Função Promise

Descrição
Uma Promise é um recurso essencial no JavaScript para trabalhar com operações assíncronas de forma mais organizada e legível. Ela representa um valor que pode estar disponível agora, no futuro ou nunca. As Promises facilitam a manipulação de código assíncrono, tornando-o mais compreensível e evitando o "callback hell".

Sintaxe
const minhaPromise = new Promise((resolve, reject) => {
    // Lógica assíncrona
    if (condicao) {
        resolve(valorDeSucesso);
    } else {
        reject(motivoDoErro);
    }
});

minhaPromise.then(resultado => {
    // Manipula o resultado bem-sucedido
}).catch(erro => {
    // Manipula o erro, se ocorrer
});

Exemplo de Uso
Um exemplo prático envolve a leitura de um arquivo de texto de forma assíncrona:

const fs = require('fs');

const lerArquivo = caminho => {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, 'utf-8', (erro, dados) => {
            if (erro) {
                reject(erro);
            } else {
                resolve(dados);
            }
        });
    });
};

lerArquivo('arquivo.txt')
    .then(dados => {
        console.log('Conteúdo do arquivo:', dados);
    })
    .catch(erro => {
        console.error('Erro ao ler o arquivo:', erro);
    });

    Encadeamento de Promises
As Promises podem ser encadeadas para executar operações assíncronas em sequência:

const obterDadosOnline = () => {
    return fetch('https://exemplo.com/api/dados');
};

obterDadosOnline()
    .then(response => response.json())
    .then(dados => {
        console.log('Dados obtidos:', dados);
    })
    .catch(erro => {
        console.error('Erro ao obter dados:', erro);
    });

    Conclusão
As Promises são uma ferramenta poderosa para lidar com operações assíncronas no JavaScript. Elas melhoram a legibilidade do código e simplificam o tratamento de erros, permitindo um fluxo mais claro e controlado para operações que não podem ser executadas imediatamente.

