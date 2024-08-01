document.getElementById('loginForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  const company = document.getElementById('company').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  console.log('Form data:', { company, username, password });

  try {
      const response = await fetch('http://186.248.191.226:8343/api/v1/auth/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ company, username, password })
      });

      console.log('Response status:', response.status);
      console.log('Response OK:', response.ok);

      if (!response.ok) {
          throw new Error('Erro na resposta da rede');
      }

      const data = await response.json();
      console.log('Response data:', data);

      if (data.access_token) {
          window.localStorage.setItem('token', data.access_token);
          window.location.href = 'empresa.html';
      } else {
          alert('Login falhou, entre em contato com o Setor de TI');
      }
  } catch (error) {
      console.error('Erro:', error);
      alert('Ocorreu um erro, por favor tente novamente mais tarde.');
  }
});
