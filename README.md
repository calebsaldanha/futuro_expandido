Claro! Vou adicionar botões com links ao `README.md`. Aqui está o atualizado com os botões clicáveis:
# Futuro Expandido

Bem-vindo ao **Futuro Expandido**! Este projeto foi desenvolvido como parte da imersão Alura com foco em front-end, utilizando HTML, CSS e JavaScript. A aplicação oferece uma interface simples e interativa para pesquisa e visualização de temas relacionados a Ciência de Dados.

## Estrutura do Projeto

### 1. `index.html`

O arquivo principal HTML define a estrutura da página. Ele inclui:

- **Cabeçalho (`header`)**: Contém o título do projeto.
- **Corpo (`main`)**: Contém uma caixa de pesquisa e uma área para exibição dos resultados.
- **Rodapé (`footer`)**: Contém uma mensagem de copyright.
- **Scripts**: Referência aos arquivos `dados.js` e `app.js` para carregar a lógica e os dados necessários.

### 2. `app.js`

O arquivo JavaScript contém a lógica principal da aplicação. As principais funções são:

- **criarCard(dado)**: Cria e adiciona um card à área de resultados. Cada card pode incluir uma imagem, título, descrição e um botão para mostrar/ocultar detalhes adicionais.
- **mostrarDetalhes(id, botao)**: Alterna a visibilidade dos detalhes de um card quando o botão correspondente é clicado.
- **filtrarCards()**: Filtra os cards com base no texto inserido na caixa de pesquisa e exibe os resultados correspondentes.
- **Eventos**: Adiciona eventos para a funcionalidade de pesquisa, tanto ao clicar no botão quanto ao pressionar a tecla Enter.

### 3. `style.css`

O arquivo CSS (não fornecido aqui, mas deve ser incluído no projeto) é responsável pelo estilo visual da página. Inclua estilos para:

- Layout e design dos cards
- Estilização da caixa de pesquisa e botões
- Aparência geral da página

## Como Usar

1. **Clone o Repositório**:
   ```bash
   git clone <URL do repositório>
   cd <nome-do-repositório>
   ```

2. **Abra o Arquivo HTML**:
   Abra o arquivo `index.html` em seu navegador para visualizar a aplicação.

3. **Explore a Funcionalidade**:
   - Use a caixa de pesquisa para encontrar temas.
   - Clique no botão "Mostrar Detalhes" para visualizar mais informações sobre um card.
   - Utilize a tecla Enter para realizar a pesquisa.

## Dados

Os dados utilizados na aplicação são carregados a partir do arquivo `dados.js`, que deve conter um array de objetos representando os temas e categorias. Cada objeto deve seguir a estrutura esperada pelo JavaScript para correta exibição dos cards.

## Contribuições

Se você deseja contribuir com o projeto, siga estas etapas:

1. **Fork o Repositório**.
2. **Crie uma Branch**:
   ```bash
   git checkout -b minha-nova-funcionalidade
   ```
3. **Faça suas Alterações e Commit**:
   ```bash
   git commit -am 'Adiciona nova funcionalidade'
   ```
4. **Push para o Repositório**:
   ```bash
   git push origin minha-nova-funcionalidade
   ```
5. **Crie um Pull Request**.


## Contato

Desenvolvido por Caleb Works. Para mais informações, entre em contato pelo e-mail: [calebsaldanhawork@gmail.com](mailto:caleb.works@example.com).

## Links Úteis

- [Visite o Site](https://futuro-expandido.vercel.app/)
- [Perfil no LinkedIn](https://www.linkedin.com/in/mariana-saldanha-9a704119b)

---

Obrigado por visitar o **Futuro Expandido**!
```
