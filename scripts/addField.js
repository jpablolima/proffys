// Procurar botão

//Quando clicar no botão
document.querySelector("#add-time").addEventListener('click', cloneField);


// Executar uma ação
function cloneField() {
    // duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    // limpar os campos
    const fields = newFieldContainer.querySelectorAll('input');

    //limpar cada campo
    fields.forEach(function(field) {
        field.value = '';
    });

    //Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}