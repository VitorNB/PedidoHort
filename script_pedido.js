document.addEventListener('DOMContentLoaded', async function() {
    const itemListBody = document.querySelector('#itemList tbody');
    const submitOrderButton = document.getElementById('submitOrder');

    // Itens fixos (Exemplo de itens)
    const fixedItems = [
        { idProduto: 25640 },
        { idProduto: 25642 },
        { idProduto: 28318 },
        { idProduto: 25643 },
        { idProduto: 25644 },
        { idProduto: 25645 },
        { idProduto: 25646 },
        { idProduto: 65145 },
        { idProduto: 33863 },
        { idProduto: 31670 },
        { idProduto: 25647 },
        { idProduto: 28315 },
        { idProduto: 25648 },
        { idProduto: 38901 },
        { idProduto: 53354 },
        { idProduto: 42543 },
        { idProduto: 25650 },
        { idProduto: 31366 },
        { idProduto: 31683 },
        { idProduto: 25652 },
        { idProduto: 25653 },
        { idProduto: 31682 },
        { idProduto: 31264 },
        { idProduto: 25656 },
        { idProduto: 25657 },
        { idProduto: 25659 },
        { idProduto: 25681 },
        { idProduto: 25683 },
        { idProduto: 25684 },
        { idProduto: 25685 },
        { idProduto: 32781 },
        { idProduto: 40905 },
        { idProduto: 25686 },
        { idProduto: 39821 },
        { idProduto: 28319 },
        { idProduto: 40230 },
        { idProduto: 43838 },
        { idProduto: 25687 },
        { idProduto: 31181 },
        { idProduto: 55954 },
        { idProduto: 32244 },
        { idProduto: 25688 },
        { idProduto: 25690 },
        { idProduto: 32261 },
        { idProduto: 25694 },
        { idProduto: 33949 },
        { idProduto: 25696 },
        { idProduto: 25695 },
        { idProduto: 33853 },
        { idProduto: 25697 },
        { idProduto: 45281 },
        { idProduto: 39585 },
        { idProduto: 25609 },
        { idProduto: 33852 },
        { idProduto: 31213 },
        { idProduto: 38657 },
        { idProduto: 32045 },
        { idProduto: 31210 },
        { idProduto: 27682 },
        { idProduto: 27719 },
        { idProduto: 34667 },
        { idProduto: 27714 },
        { idProduto: 27677 },
        { idProduto: 27716 },
        { idProduto: 34665 },
        { idProduto: 27709 },
        { idProduto: 27691 },
        { idProduto: 27701 },
        { idProduto: 25662 },
        { idProduto: 25664 },
        { idProduto: 32044 },
        { idProduto: 41764 },
        { idProduto: 25666 },
        { idProduto: 25667 },
        { idProduto: 25668 },
        { idProduto: 31204 },
        { idProduto: 31211 },
        { idProduto: 33862 },
        { idProduto: 25669 },
        { idProduto: 45414 },
        { idProduto: 25672 },
        { idProduto: 41765 },
        { idProduto: 25673 },
        { idProduto: 25675 },
        { idProduto: 25677 },
        { idProduto: 25679 },
        { idProduto: 25701 },
        { idProduto: 25702 },
        { idProduto: 25711 },
        { idProduto: 32245 },
        { idProduto: 25714 },
        { idProduto: 31200 },
        { idProduto: 31212 },
        { idProduto: 25724 },
        { idProduto: 25726 },
        { idProduto: 28320 },
        { idProduto: 28342 },
        { idProduto: 50029 },
        { idProduto: 50028 },
        { idProduto: 63368 },
        { idProduto: 52738 },
        { idProduto: 50303 },
        { idProduto: 33893 },
        { idProduto: 31105 },
        { idProduto: 50233 },
        { idProduto: 33893 },
        { idProduto: 31771 },
        { idProduto: 31861 },
        { idProduto: 34943 },
        { idProduto: 31207 },
        { idProduto: 31206 },
        { idProduto: 25661 },
        { idProduto: 31209 },
        { idProduto: 59964 },
        { idProduto: 39624 },
        { idProduto: 40348 },
        { idProduto: 25670 },
        { idProduto: 39605 },
        { idProduto: 25707 },
        { idProduto: 39546 },
        { idProduto: 25712 },
        { idProduto: 39604 },
        { idProduto: 38404 },
        { idProduto: 31202 },
        { idProduto: 39876 },
        { idProduto: 35022 },
        { idProduto: 25727 },
        { idProduto: 45283 },
        { idProduto: 45282 },
        { idProduto: 55952 },
        { idProduto: 32263 },
        { idProduto: 31205 },
        { idProduto: 43874 },
        { idProduto: 33851 },
        { idProduto: 25691 },
        { idProduto: 55949 },
        { idProduto: 33861 },
        { idProduto: 55951 },
        { idProduto: 25699 },
        { idProduto: 40425 },
        { idProduto: 41864 },
        { idProduto: 40904 },
        { idProduto: 33950 },
        { idProduto: 31668 },
        { idProduto: 40049 },
        { idProduto: 31681 },
        { idProduto: 25742 },
        { idProduto: 36188 },
        { idProduto: 57529 },
        { idProduto: 56549 },
        { idProduto: 25649 },
        { idProduto: 56522 },
        { idProduto: 58149 }
    ];

    // Função para buscar a descrição completa do produto
    async function fetchProductDetails(idProduto) {
        const token = window.localStorage.getItem('token'); // Obtém o token armazenado
        const apiUrl = `http://186.248.191.226:8343/SMProdutosAPI/api/v4/produtos/dados-cadastrais?modelo.idProduto=${idProduto}`;
        
        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`, // Adiciona o token no cabeçalho
                    'Content-Type': 'application/json' // Define o tipo de conteúdo
                }
            });
            if (!response.ok) {
                throw new Error(`Erro ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();
            console.log(`Dados retornados da API para ${idProduto}:`, data); // Log da resposta da API

            // Verifique se o retorno da API é o que você espera
            if (Array.isArray(data) && data.length > 0) {
                return data[0]; // Retorna o primeiro produto da lista
            } else {
                console.warn(`Nenhum produto encontrado para o ID ${idProduto}.`);
                return null; // Retorna null se não encontrar o produto
            }
        } catch (error) {
            console.error(`Erro ao buscar dados do produto ${idProduto}:`, error);
            throw error; // Re-lança o erro para ser tratado na chamada
        }
    }

    // Preencher a tabela com os itens fixos
    for (const item of fixedItems) {
        try {
            const productDetails = await fetchProductDetails(item.idProduto);
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.idProduto}</td> <!-- Usa o ID do produto da lista fixa -->
                <td>${productDetails ? productDetails.DescricaoCompleta : 'Descrição não encontrada'}</td>
                <td><input type="number" placeholder="Quantidade" min="1" required></td>
                <td><textarea placeholder="Observação"></textarea></td>
            `;
            itemListBody.appendChild(row);
        } catch (error) {
            console.error(`Erro ao buscar detalhes do produto ${item.idProduto}:`, error);
            alert(`Não foi possível carregar os detalhes do produto ${item.idProduto}.`);
        }
    }

    // Lógica para enviar o pedido
    submitOrderButton.addEventListener('click', function() {
        const pedido = [];

        // Coleta os dados dos itens e suas quantidades e observações
        const itemElements = document.querySelectorAll('#itemList tbody tr');
        itemElements.forEach(itemElement => {
            const idProduto = itemElement.cells[0].textContent; // Mantém o ID do produto
            const descricaoProduto = itemElement.cells[1].textContent; // Mantém a descrição do produto
            const quantidade = itemElement.querySelector('input[type="number"]').value;
            const observacao = itemElement.querySelector('textarea').value;
            if (quantidade > 0) { // Somente adiciona se a quantidade for maior que 0
                pedido.push({
                    idProduto: idProduto,
                    descricao: descricaoProduto,
                    quantidade: quantidade,
                    observacao: observacao
                });
            }
        });

        if (pedido.length > 0) {
            // Gera o arquivo CSV
            const userName = localStorage.getItem('userName') || 'Nome do Usuário';
            const company = localStorage.getItem('company') || 'Nome da Empresa';
            const csvContent = generateCSV(pedido, userName, company);
            downloadCSV(csvContent, `pedido-${new Date().toLocaleDateString()}.csv`);

            // Salva o pedido no localStorage
            const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
            const pedidoInfo = {
                csv: `pedido-${new Date().toLocaleDateString()}.csv`,
                horario: new Date().toLocaleString(),
                idLoja: 'ID da Loja' // Deve ser ajustado para pegar o valor correto
            };
            pedidos.push(pedidoInfo);
            localStorage.setItem('pedidos', JSON.stringify(pedidos));

            alert('Pedido enviado com sucesso!');
            window.location.href = 'carrega_pedido.html'; // Redireciona para a página de pedidos
        } else {
            alert('Por favor, adicione itens ao pedido.');
        }
    });

    // Função para gerar o conteúdo do CSV
    function generateCSV(pedido, userName, company) {
        const header = ['Nome do Usuário', 'Nome da Empresa', 'ID Produto', 'Descrição Produto', 'Quantidade', 'Observação'];
        const rows = pedido.map(item => [userName, company, item.idProduto, item.descricao, item.quantidade, item.observacao]);

        const csvContent = [
            header,
            ...rows
        ].map(e => e.join(',')).join('\n');

        return csvContent;
    }

    // Função para baixar o arquivo CSV
    function downloadCSV(csvContent, fileName) {
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', fileName);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});
