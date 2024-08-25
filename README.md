# Calculadora de Investimentos

## Como rodar o projeto

1. **Instalação de dependências**:
   - Execute o comando `$ npm install` para instalar todas as dependências necessárias.

2. **Modo de desenvolvimento**:
   - Use o comando `$ npm run dev` para iniciar a aplicação em modo de desenvolvimento. Isso geralmente inicia um servidor local onde você pode visualizar a aplicação em tempo real enquanto desenvolve.

3. **Rodando testes**:
   - Para executar os testes, utilize o comando `$ npm run test`.

## Estrutura do Projeto

```plaintext
src/
│
├── assets/
├── components/
├── helpers/
├── tests/
├── utils/
└── views/
```

**`assets/`**

Diretório destinado a armazenar recursos estáticos, como imagens e logos, que são utilizados na aplicação. Este diretório serve como um ponto centralizado para esses arquivos, facilitando o acesso e a manutenção.


**`components/`**

Diretório que contém todos os componentes Vue da aplicação. A abordagem utilizada aqui é a de um diretório 'flat', ou seja, sem subpastas para componentes, facilitando a navegação e organização.

**Regras para nomenclatura de componentes:**

* **PascalCase:** Os nomes dos componentes devem seguir o formato `PascalCase` (e.g., `CalculatorResult`).
* **Componentes reutilizáveis:** Devem começar com App (e.g., AppButton), sinalizando que são reutilizáveis em várias partes do projeto.
* **Nomes compostos:** Sempre usar nomes compostos para evitar conflitos com elementos HTML nativos ou futuros.
* **Componentes filhos:** Devem ter como prefixo o nome do componente pai, seguido do seu nome específico (e.g., CalculatorResultCard).
* **Estrutura de nomes:** Iniciar o nome com as palavras mais gerais e terminar com as específicas.


**`helpers/`**

Contém funções utilitárias que podem ser reutilizadas em várias partes do projeto. Atualmente, todas as funções estão em um único arquivo `index.js`. Conforme o projeto cresce, é recomendado dividir essas funções em diferentes arquivos para melhor organização.


**`tests/`**

Diretório onde estão localizados todos os testes da aplicação. A estrutura é segmentada para facilitar o entendimento:

* **Testes funcionais:** Estão na raiz da pasta e recebem o nome da funcionalidade que estão testando, como Calculator.test.js.
* **Testes de componentes:** Estão na subpasta components, com nomes correspondentes ao componente testado (e.g., CalculatorSimulation.test.js).
* **Testes de helpers:** Estão na subpasta helpers, e o nome do arquivo é o mesmo do helper que está sendo testado (e.g., index.test.js).
* **Testes de snapshot:** Estão na subpasta interface, também com o nome correspondente ao componente (e.g., CalculatorSimulation.test.js).

Todos os arquivos de teste seguem o padrão de extensão `.test.js`.


**`utils/`**

Diretório que armazena elementos utilitários, como constantes ou funções auxiliares. Por exemplo, o arquivo `yieldRates.js` que armazena taxas de rendimento usadas em vários pontos do projeto.


**`views/`**

Contém as páginas da aplicação. Cada página é um componente Vue (.vue) e deve terminar com o sufixo `View` para diferenciá-la de outros componentes (e.g., `CalculatorView.vue`).
