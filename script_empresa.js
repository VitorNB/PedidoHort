document.addEventListener('DOMContentLoaded', async function() {
  const companySelect = document.getElementById('company');

  // URL da API que retorna a lista de empresas
  const apiUrl = 'http://186.248.191.226:8343/CadastrosEstruturaisApi/api/v1/Empresa';

  // Recupera o token do localStorage
  const token = window.localStorage.getItem('token');

  try {
      const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${token}`, // Inclui o token no cabeçalho
              'Content-Type': 'application/json'
          }
      });

      if (!response.ok) {
          throw new Error('Erro ao buscar empresas');
      }

      const data = await response.json();
      const empresas = data.items;

      // Filtrar empresas com nroEmpresa
      const empresasFiltradas = empresas.filter(empresa => 
          [6,7,10,11,14,15,16,17,181,19,20,21,22,24 ].includes(empresa.nroEmpresa)
      );

      empresasFiltradas.forEach(empresa => {
          const option = document.createElement('option');
          option.value = empresa.nroEmpresa; // Mantenha o ID da empresa
          option.textContent = empresa.nomeReduzido; // Use o campo nomeReduzido
          companySelect.appendChild(option);
      });
  } catch (error) {
      console.error('Erro:', error);
      alert('Não foi possível carregar a lista de empresas. Tente novamente mais tarde.');
  }

  document.getElementById('companyForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const selectedCompany = companySelect.value;

      if (selectedCompany) {
          window.localStorage.setItem('selectedCompany', selectedCompany);
          window.location.href = 'pedido.html'; // Redirecionar para a página de pedido
      } else {
          alert('Por favor, selecione uma empresa.');
      }
  });
});
