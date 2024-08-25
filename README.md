# Calculadora de Investimentos - VueJs

#### Como rodar:
Para rodar este projeto basta utilizar o comando `$ npm install` para instalar as dependências e o comando `$ npm run dev` para rodar a aplicação em modo de desenvolvimento.

Para rodar os testes deve-se utilizar o comando `$ npm run test`.

## Estrutura do projeto:
Este projeto foi desenvolvido utilizando VueJs e JavaScript, abaixo você verá mais detalhes sobre a organização do projeto

Esta é a estrutura da source do projeto
![image](https://github.com/user-attachments/assets/eb97bfdf-dea8-4ff6-8338-6f3a9ca27c04)

A pasta **assets** serve para guardar imagens, logos e derivados que são utilizadas na aplicação.

A pasta **components** é um diretório 'flat', ou seja, possui todos os componentes do projeto diretamente em sua raiz, a nomenclatura destes componentes seguem alguns padrões:
* Os componentes devem ser nomeado usando PascalCase
* Componentes que podem ser reutilizados em toda aplicação devem ter seu nome iniciado com `App`
* Os nomes do componentes devem sempre ser compostos de mútiplas palavras, evitando conflitos com elementos HTML presentes ou futuros
* Componentes filhos devem ter como prefixo o nome do componente pai. Exemplo: `CalculatorResult` e `CalculatorResultCard`
* Os nomes do componentes devem começar com as palavras mais gerais e terminar com as mais específicas.
Utilizando as regras acima dentro de um diretório 'flat' conseguimos facilmente achar os componentes que estamos procurando, ver componentes que são de uso geral da aplicação, quais componentes são relacionados uns com os outros,
evitamos aninhamento de diretórios e nomes repetidos entres pastas e componentes, evitamos o uso de componentes nomeados com uma única palavra (ocorrência comum principalmente quando há o aninhamento com pastas), e eliminamos a necessidade de ficar navegando entre pastas para achar o componente que estamos procurando.

A pasta **helpers** tem funções que recebem e devolvem um valor e podem vir a ser reutilizadas no projeto. Como possuímos poucas funções, aqui estamos utilizando apenas um `index.js`, 
mas conforme um projeto vai expandindo seria ideal separar estas funções em diferentes arquivos js.

Como o nome sugere, na **tests** estão todos os testes da aplicação, os testes funcionais ficam na raiz da pasta, dentro da pasta components estão os testes unitários dos componentes, 
dentro da pasta helpers estão os testes unitários dos helpers e por fim na pasta interface estão os testes de snapshot.

A **utils** carrega alguns elementos utilitários que auxiliam no desenvolvimento, como é o caso do arquivo `yieldRates.js` que guarda em consts as taxas utilizadas em alguns pontos do projeto.

No diretório **Views** estão as páginas da aplicação.
