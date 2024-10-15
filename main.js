document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário

    // Obter os valores dos inputs
    const timeThisWeek = parseInt(document.getElementById('time-this-week').value, 10);
    const timeNextWeek = parseInt(document.getElementById('time-next-week').value, 10);

    // Verificar se o valor da primeira pergunta é menor que o da segunda
    if (timeThisWeek < timeNextWeek) {
        alert('Obrigado! Suas respostas foram registradas.');
        // Aqui você pode adicionar lógica para enviar os dados ou realizar outras ações
    } else {
        alert('O número de horas estudadas esta semana deve ser menor que o número de horas que você pretende estudar na próxima semana.');
    }
});