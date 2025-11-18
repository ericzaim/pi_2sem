const form = document.getElementById("form");

form.addEventListener("submit", async function(event){
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    if(response.status !== 200){
        if(response.status === 401){
            alert("Credenciais inválidas");
            return;
        }else{
            alert("Erro no servidor");
            return;
        }
    }
    const json = await response.json();

    localStorage.setItem('sessao', JSON.stringify(json));

    window.location.href = "userlist.html";
});

function Cadastrar(){
    window.location.href = "cadastrar.html";
}


