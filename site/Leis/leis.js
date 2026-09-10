const pesquisaInput = document.getElementById('pesquisa');

pesquisaInput.addEventListener('input', (event) => {
    const value = normalizador(event.target.value);
    const items = document.querySelectorAll('.emendas .emenda');

    emendas.forEach((emenda) => {
        if(normalizador(emenda.textcontent.indexOf(value)) !== -1) {
            emenda.style.display = 'flex';
        }
        else{
            emenda.style.display = 'none';
        }

    });
});

function normalizador(texto) {
    return texto.toLowerCase().trim();
}