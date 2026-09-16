console.log("Conexão com o arquivo emenda.js estabelecida com sucesso!");

const containerEmendas = document.getElementById("emendas");

async function carregarEmendas() {
    try {
        const resposta = await fetch("emendas.json");

        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }

        const emendas = await resposta.json();
        containerEmendas.innerHTML = "";

        for (const numero in emendas) {
            const emenda = emendas[numero];

            containerEmendas.innerHTML += `
                <div class="emenda" id="${numero}">
                    <h2>${emenda.nome}</h2>
                    <p>${emenda.descricao}</p>
                </div>
            `;
        }
    } 
    
    catch (erro) {
        console.error("Erro ao carregar as emendas:", erro);
        containerEmendas.innerHTML = `
            <div class="erro">
                <h2>Erro ao carregar as emendas constitucionais</h2>
                <p>Não foi possível conectar-se ao banco de dados.</p>
            </div>
        `;
    }
}

carregarEmendas();

    const pesquisaInput = document.getElementById('pesquisa');
    
    pesquisaInput.addEventListener('input', (event) => {
            
        const value = normalizador(event.target.value);
        const emendas = document.querySelectorAll('.emendas .emenda');

        // ==========================================
        // Verifia se tem "NUMERO" ou "N"
        // ==========================================
        if(value.startsWith('numero') || value.startsWith('n')) {

            let numero;

            if(value.startsWith('numero')) {
                numero = value.replace('numero', '').trim();
            }
            else {
                numero = value.replace('n', '').trim();
            }

            emendas.forEach((emenda) => {

                if(value.startsWith('numero')) {
                    emenda.style.display = 'flex';
                }
                else {
                    emenda.style.display = 'none';
                }

            });

            return;
        }

        // ==========================================
        // Pesquisa apenas pelo número que sobrou
        // ==========================================
        if(/^\d+$/.test(value)) {

            emendas.forEach((emenda) => {

                if(emenda.id.startsWith(value)) {
                    emenda.style.display = 'flex';
                }
                else {
                    emenda.style.display = 'none';
                }

            });

            return;
        }

        // ==========================================
        // PESQUISA NORMAL
        // ==========================================
        emendas.forEach((emenda) => {
            if(normalizador(emenda.textContent).indexOf(value) !== -1){
                emenda.style.display = 'flex';
            }
            else{
                emenda.style.display = 'none';
            }
        });
    });


function normalizador(texto) {
    //ele aqui tira os espaços antes de digitar e deixa em minusculo
    return texto.toLowerCase().trim();
}