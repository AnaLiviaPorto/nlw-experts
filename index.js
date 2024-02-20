const perguntas = [
    {
      pergunta: "Qual é a função principal do JavaScript?",
      respostas: [
        "Manipulação de bancos de dados",
        "Estilização de páginas web",
        "Programação do lado do cliente",
      ],
      correta: 2
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "let nomeVariavel = valor;",
        "variable nomeVariavel = valor;",
        "var nomeVariavel = valor;",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de comparação estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um callback em JavaScript?",
      respostas: [
        "Uma função que é executada imediatamente",
        "Uma função que é passada como argumento para outra função e executada posteriormente",
        "Uma variável que armazena uma função",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um método de manipulação de strings",
        "Um modelo de objeto para manipulação de documentos HTML e XML",
        "Um tipo de variável em JavaScript",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do comando 'console.log' em JavaScript?",
      respostas: [
        "Realizar operações matemáticas",
        "Imprimir mensagens no console",
        "Criar novas variáveis",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o evento 'click' em JavaScript?",
      respostas: [
        "Uma função interna do JavaScript",
        "Uma ação do usuário, como clicar em um elemento HTML",
        "Um tipo de variável",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "'let' é usado para variáveis que não podem ser reatribuídas, enquanto 'const' pode ser reatribuído",
        "'let' é usado para variáveis que podem ser reatribuídas, enquanto 'const' não pode ser reatribuído",
        "Não há diferença entre 'let' e 'const'",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma Promise em JavaScript?",
      respostas: [
        "Um tipo de variável",
        "Um objeto que representa o eventual sucesso ou falha de uma operação assíncrona",
        "Um método de iteração sobre os elementos de um array",
      ],
      correta: 1
    },
    {
      pergunta: "Como se realiza uma requisição HTTP assíncrona em JavaScript?",
      respostas: [
        "Usando a palavra-chave 'synchronous' antes da requisição",
        "Utilizando a função 'fetch'",
        "Apenas com métodos síncronos",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const totalDeCorretas = document.querySelector('#acertos span')
  totalDeCorretas.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas){
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
     dt.querySelector('span').textContent = resposta
     dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
     dt.querySelector('input').value = item.respostas.indexOf(resposta)
     dt.querySelector('input').onchange = (event) => {
       const estaCorreta = event.target.value == item.correta
  
       corretas.delete(item)
       if (estaCorreta){
         corretas.add(item)
       }
  
       totalDeCorretas.textContent = corretas.size + ' de '  + totalDePerguntas
     }
  
  
  
     quizItem.querySelector('dl').appendChild(dt)
    }
  
  
  
    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem) 
  
  }
  