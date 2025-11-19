document.getElementById('form-cadastro').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const response = await fetch('https://pi-2sem.onrender.com/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, email, senha })
    });
    
    if (response.ok) {
        alert('Usuário cadastrado com sucesso!');
        document.getElementById('form-cadastro').reset();
        window.location.href = 'login.html';
    } else {
        alert('Erro ao cadastrar usuário. Tente novamente.');
    }
});