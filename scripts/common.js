const getCSS = (variavel) => {
    const bodyStyles = getComputedStyle(document.body);
    return bodyStyles.getPropertyValue(variavel);
}

const tickConfig = {
    family: getCSS('--font'),
    size: 16,
    color: getCSS('--primary-color')
}

// Função para visualizar informações globais
const urlGlobal = 'https://api.coingecko.com/api/v3/global';

async function vizualizarInformacoesGlobais() {
    const res = await fetch(urlGlobal);
    const dados = await res.json();

    const marketCapTotal = (dados.data.total_market_cap.usd / 1e12).toFixed(2);
    const totalCriptomoedas = dados.data.active_cryptocurrencies;
    const bitcoinDominance = dados.data.market_cap_percentage.btc.toFixed(2); 

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML = `O mercado de criptomoedas possui atualmente uma capitalização total de <span>$${marketCapTotal} trilhões</span>, com um total de <span>${totalCriptomoedas} criptomoedas ativas</span> no mercado. 
    O Bitcoin domina <span>${bitcoinDominance}%</span> do valor total de mercado.`;

    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);
}

// Função para visualizar a quantidade de usuários (exemplo fictício)
const urlUsuarios = 'https://api.exemplo.com/usuarios';

async function vizualizarQuantidadeUsuarios() {
    const res = await fetch(urlUsuarios);
    const dados = await res.json();

    const totalUsuarios = dados.total; // Supondo que o JSON retorne um campo total

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML = `Atualmente, há <span>${totalUsuarios}</span> usuários registrados na plataforma.`;

    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);
}

// Chamar as funções
vizualizarInformacoesGlobais();
vizualizarQuantidadeUsuarios();
