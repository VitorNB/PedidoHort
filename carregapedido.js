document.getElementById('loginButton').addEventListener('click', function() {
  const userId = document.getElementById('userId').value;

  // Aqui você pode adicionar uma verificação de ID de usuário se necessário
  if (userId) {
      const ordersSection = document.getElementById('ordersSection');
      const ordersTableBody = document.getElementById('ordersTable').querySelector('tbody');
      ordersTableBody.innerHTML = ''; // Limpa qualquer conteúdo anterior

      const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];

      pedidos.forEach(pedido => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td><a href="${pedido.csv}" download>${pedido.csv}</a></td>
              <td>${pedido.horario}</td>
              <td>${pedido.idLoja}</td>
          `;
          ordersTableBody.appendChild(row);
      });

      ordersSection.style.display = 'block';
  } else {
      alert('Por favor, insira um ID de usuário válido.');
  }
});
