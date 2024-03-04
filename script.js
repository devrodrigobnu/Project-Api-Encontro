function fuja() {
    var botaoNao = document.getElementById("nao")

    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;

    var maxX = larguraJanela - botaoNao.offsetWidth;
    var maxY = alturaJanela - botaoNao.offsetHeight;

    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioY = Math.floor(Math.random() * maxY);

    botaoNao.style.left = aleatorioX + "px";
    botaoNao.style.top = aleatorioY + "px";
}

// Funções para o modal
function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Função para enviar os dados selecionados
function sendData() {
    var selectedDate = document.getElementById("date").value;
    var selectedTime = document.getElementById("time").value;
    var selectedDateTime = selectedDate + " " + selectedTime;

    // Armazenar os dados em uma variável
    var dataToSave = {
        dateTime: selectedDateTime
    };

    // Chamar a função para enviar os dados para o servidor
    sendDataToServer(dataToSave);
}

// Função para enviar os dados para o servidor
function sendDataToServer(data) {
    axios.post('http://localhost:4000/postRequest', data)
        .then(function (response) {
            // Exibir mensagem de sucesso
            var statusMessage = document.getElementById("statusMessage");
            statusMessage.style.display = "block";
            statusMessage.textContent = "Dados enviados com sucesso!";
        })
        .catch(function (error) {
            // Exibir mensagem de erro
            var statusMessage = document.getElementById("statusMessage");
            statusMessage.style.display = "block";
            statusMessage.textContent = "Erro ao enviar os dados: " + error.message;
        });
}

// Fechar o modal quando clicar fora dele
window.onclick = function (event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
