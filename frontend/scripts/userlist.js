async function loadUsers() {
    try {
        const response = await fetch("https://pi-2sem.onrender.com/api/users");
        const users = await response.json();

        const tbody = document.getElementById("user-table-body");
        tbody.innerHTML = ""; // limpa a tabela antes de inserir

        users.forEach(user => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.nome}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>
                <td>
                    <button onclick='openEditForm(${JSON.stringify(user)})'>Alterar</button>
                    <button id="btn-delete" onclick="deleteUser(${user.id})">Delete</button>
                </td>
            `;

            tbody.appendChild(row);
        });

    } catch (error) {
        console.error("Erro ao carregar usuários:", error);
    }
}

loadUsers();

deleteUser = async (id) => {
    try {
        const userId = id;
        const response = await fetch(`https://pi-2sem.onrender.com/api/user/${userId}`, {
            method: "DELETE"
        });

        if (response.ok) {
            alert("Usuário deletado com sucesso!");
            loadUsers();
        } else {
            alert("Erro ao deletar usuário.");
        }
    } catch (error) {
        console.error("Erro ao deletar usuário:", error);
    }
}

function openEditForm(user) {
    document.getElementById("edit-id").value = user.id;
    document.getElementById("edit-name").value = user.nome;
    document.getElementById("edit-email").value = user.email;
    document.getElementById("edit-password").value = user.password;

    document.getElementById("edit-form").style.display = "block";
}

async function submitEdit(event) {
    event.preventDefault();

    const id = document.getElementById("edit-id").value;
    console.log(id)

    const response = await fetch(`https://pi-2sem.onrender.com/api/user`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id: id,
            nome: document.getElementById("edit-name").value,
            email: document.getElementById("edit-email").value,
            password: document.getElementById("edit-password").value
        })
    });

    if (response.ok) {
        alert("Usuário atualizado!");
        document.getElementById("edit-form").style.display = "none";
        location.reload();
    } else {
        alert("Erro ao atualizar.");
    }
}