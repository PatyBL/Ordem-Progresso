const containerEmendas = document.getElementById("emendas");

async function carregarEmendas() {
    try {
        const resposta = await fetch("../../back-end/emendas.json");

        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }

        const emendas = await resposta.json();

        containerEmendas.innerHTML = "";

        for (const numero in emendas) {
            const emenda = emendas[numero];

            containerEmendas.innerHTML += `
                <div class="emenda">
                    <h2>${emenda.nome}</h2>
                    <p>${emenda.descricao}</p>
                </div>
            `;
        }

    } catch (erro) {
        console.error("Erro ao carregar as emendas:", erro);

        containerEmendas.innerHTML = `
            <div class="erro">
                <h2>Erro ao carregar as emendas</h2>
                <p>Não foi possível carregar os dados das emendas.</p>
            </div>
        `;
    }
}

carregarEmendas();
