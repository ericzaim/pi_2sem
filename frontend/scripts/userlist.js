async function loadUsers() {
    try {
        const response = await fetch("https://pi-2sem.onrender.com/api/users");
        const users = await response.json();

        const tbody = document.getElementById("user-table-body");
        tbody.innerHTML = ""; // limpa a tabela antes de inserir

        users.forEach(user => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${user.nome}</td>
                <td>${user.email}</td>
            `;

            tbody.appendChild(row);
        });

    } catch (error) {
        console.error("Erro ao carregar usuários:", error);
    }
}

loadUsers();
