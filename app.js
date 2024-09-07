document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('resultados');
    const campoPesquisa = document.getElementById('campo-pesquisa');
    const btnPesquisar = document.getElementById('btn-pesquisar');
    

    // Função para criar um card
    function criarCard(dado) {
        const card = document.createElement('div');
        card.className = 'item-resultado';
        card.id = `card-${dado.id}`; // Adiciona um id para facilitar a pesquisa

        card.innerHTML = 
            `<img src="${dado.imagem}" alt="${dado.titulo}" />
            <h3>${dado.titulo}</h3>
            <p>${dado.descricaoMeta}</p>
            ${dado.detalhes ? `<button onclick="mostrarDetalhes('${dado.id}', this)">Mostrar Detalhes</button>` : ''}
            <div id="detalhes-${dado.id}" class="detalhes" style="display: none;">
                ${dado.detalhes || ''}
            </div>`;

        container.appendChild(card);
    }

    // Função para mostrar/ocultar detalhes dos cards
    window.mostrarDetalhes = function(id, botao) {
        const detalhes = document.getElementById(`detalhes-${id}`);
        if (detalhes) {
            if (detalhes.style.display === 'none' || detalhes.style.display === '') {
                detalhes.style.display = 'block';
                botao.textContent = 'Ocultar Detalhes';
            } else {
                detalhes.style.display = 'none';
                botao.textContent = 'Mostrar Detalhes';
            }
        }
    }

    // Função para filtrar cards com base na pesquisa
    function filtrarCards() {
        // Limpa os resultados atuais
        container.innerHTML = '';

        const textoPesquisa = campoPesquisa.value.toLowerCase();

        dados.forEach(dado => {
            if (dado.id === 'card4') {
                // Para o card4, cria um card separado para cada categoria
                dado.categorias.forEach(categoria => {
                    const categoriaCard = {
                        id: categoria.id,
                        imagem: categoria.imagem,
                        titulo: categoria.titulo,
                        descricaoMeta: '',
                        detalhes: categoria.sentimentos.map(sentimento => 
                            `<div class="sentimento">
                                <h5>${sentimento.tipo}</h5>
                                <p>${sentimento.descricao}</p>
                            </div>`
                        ).join('')
                    };
                    if (categoriaCard.titulo.toLowerCase().includes(textoPesquisa) || 
                        categoriaCard.detalhes.toLowerCase().includes(textoPesquisa)) {
                        criarCard(categoriaCard);
                    }
                });
            } else {
                if (dado.titulo.toLowerCase().includes(textoPesquisa) || 
                    dado.descricaoMeta.toLowerCase().includes(textoPesquisa)) {
                    criarCard(dado);
                }
            }
        });
    }

    // Adiciona o evento de pesquisa
    btnPesquisar.addEventListener('click', filtrarCards);

    // Adiciona o evento de pesquisa ao pressionar a tecla Enter
    campoPesquisa.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            filtrarCards();
        }
    });
});
