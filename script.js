// Base de dados estruturada com as mensagens reais do NOC UltraTelecom
const categoriesData = [
    {
        id: 'bom-dia',
        name: 'BOM DIA / BOA TARDE / BOA NOITE',
        icon: 'fa-sun',
        messages: [
            {
                title: 'Bom dia',
                text: 'Bom dia, tudo bem? Sou Alysson e estarei à disposição para atendê-lo da melhor forma possível.'
            },
            {
                title: 'Boa tarde ',
                text: 'Boa tarde, tudo bem? Sou Alysson e estarei à disposição para atendê-lo da melhor forma possível.'
            },
            {
                title: 'Boa tarde para retomar atendimento',
                text: 'Boa tarde, tudo bem? Podemos retomar o atendimento agora? Fico à disposição.'
            },
            {
                title: 'Boa noite ',
                text: 'Boa noite, tudo bem? Sou Alysson e estarei à disposição para atendê-lo da melhor forma possível.'
            }
        ]
    },
    {
        id: 'comprovante',
        name: 'COMPROVANTE',
        icon: 'fa-receipt',
        messages: [
            {
                title: 'Comprovante - Manhã',
                text: 'Bom dia! Obrigado pelo comprovante. Caso precise de alguma ajuda, estaremos à disposição. Tenha uma ótima semana!!'
            },
            {
                title: 'Comprovante - Tarde',
                text: 'Boa tarde! Obrigado pelo comprovante. Caso precise de alguma ajuda, estaremos à disposição. Tenha uma ótima semana!!'
            },
            {
                title: 'Comprovante - Noite',
                text: 'Boa noite! Obrigado pelo comprovante. Caso precise de alguma ajuda, estaremos à disposição. Tenha uma ótima semana!!'
            }
        ]
    },
    {
        id: 'prazos',
        name: 'PRAZOS',
        icon: 'fa-clock',
        messages: [
            {
                title: 'Prazo 48h - Sem acesso à internet (Prioridade)',
                text: 'Prazo padrão para a visita é de até 48 horas. No entanto, entendemos que você está sem acesso à internet no momento, o que impacta diretamente seu uso do serviço. Por isso, sua solicitação receberá prioridade especial para que possamos resolver o quanto antes.'
            },
            {
                title: 'Prazo 48h - Instabilidade (Prioridade)',
                text: 'O prazo padrão para a visita é de até 48 horas. No entanto, entendemos que você está enfrentando instabilidade no serviço, o que impacta diretamente seu uso da internet. Por isso, sua solicitação receberá prioridade especial para que possamos resolver o quanto antes.'
            },
            {
                title: 'Encaminhado para técnicos sem horário exato',
                text: 'Assim que possível, os técnicos irão até o local, ok? No momento, não tenho acesso à agenda deles para verificar os horários disponíveis, mas já deixei registrado para que o atendimento seja feito com a maior agilidade possível.'
            }
        ]
    },
    {
        id: 'agendamentos',
        name: 'AGENDAMENTOS',
        icon: 'fa-calendar-days',
        messages: [
            {
                title: 'Abertura de agendamento (Feminino)',
                text: 'Estarei abrindo agora a solicitação de agendamento para a senhora, tudo certo?'
            },
            {
                title: 'Abertura de agendamento (Masculino)',
                text: 'Estarei abrindo agora a solicitação de agendamento para o senhor, tudo certo?'
            },
            {
                title: 'Transferência para Controladoria',
                text: 'Vou estar transferindo você para o setor da Controladoria, assim podem verificar um horário para a visita.'
            }
        ]
    },
    {
        id: 'reajuste',
        name: 'REAJUSTE',
        icon: 'fa-percent',
        messages: [
            {
                title: 'Explicação sobre reajuste e custos',
                text: 'Devido ao aumento bastante significativo nos custos de prestação de serviços e produtos que vem acontecendo em nosso setor, e para continuar mantendo a qualidade na prestação de serviço da sua internet, estamos atualizando os planos que por vários anos não tiveram seus respectivos reajustes.'
            },
            {
                title: 'Alternativas e planos melhores',
                text: 'Gostaríamos que compreendesse nosso desejo de não ter que estar aplicando as taxas de correções monetárias, a qual seguramos até o último momento. Estamos à disposição até para planos maiores ou melhores, com telefone fixo, telefone móvel 5G e Aplicativos de TV.'
            },
            {
                title: 'Manutenção de parceria antiga',
                text: 'Se precisar é só me falar que faço o melhor que puder para manter essa parceria de muito tempo.'
            }
        ]
    },
    {
        id: 'finalizacao',
        name: 'FINALIZAÇÃO',
        icon: 'fa-circle-check',
        messages: [
            {
                title: 'Encerramento com pedido de nota (Semana)',
                text: 'Muito obrigado pelo seu contato! Desejo a você uma ótima semana. Se puder me avaliar com uma nota EXCELENTE, ficarei imensamente grato!! 😀'
            },
            {
                title: 'Encerramento com pedido de nota (Fim de semana)',
                text: 'Muito obrigado pelo seu contato! Desejo a você um ótimo final de semana. Se puder me avaliar com uma nota EXCELENTE, ficarei imensamente grato!! 😀'
            },
            {
                title: 'Aviso de término de expediente',
                text: 'Estou encerrando meu expediente no momento. Retornarei amanhã a partir das 09:00 horas (Horário de Brasília) para dar continuidade ao seu atendimento. Desejo-lhe uma ótima noite e até logo! 😃'
            }
        ]
    },
    {
        id: 'troca-senha',
        name: 'TROCA DE SENHA',
        icon: 'fa-key',
        messages: [
            {
                title: 'Aviso sobre desconexão dos dispositivos',
                text: 'Informo que, ao realizar a troca, todos os dispositivos conectados à rede serão desconectados. Após essa alteração, será necessário reconectar utilizando a nova senha.'
            },
            {
                title: 'Aviso de taxa por troca em menos de 60 dias',
                text: 'Informamos que, como a troca de senha da sua rede foi realizada há menos de 60 dias (xx/xx/xx), haverá um custo de R$ 15,00 para efetuar uma nova alteração. Se desejar prosseguir, podemos realizar a alteração imediatamente.'
            }
        ]
    },
    {
        id: 'rompimento',
        name: 'ROMPIMENTO',
        icon: 'fa-triangle-exclamation',
        messages: [
            {
                title: 'Aviso formal de rompimento de fibra',
                text: 'Prezado(a) {{nome_cliente}},\n\nDevido a um rompimento em um dos nossos cabos principais próximo à sua região, sua conexão pode apresentar instabilidade ou interrupção.\n\nNossa equipe técnica já está ciente da situação e atuando na manutenção para a normalização dos serviços. Assim que o reparo for concluído, sua internet voltará a funcionar normalmente.\n\nAgradecemos a sua paciência e compreensão.\n\nAtenciosamente,\nEquipe UltraTelecom'
            }
        ]
    },
    {
        id: 'tv-box',
        name: 'TV BOX / IPTV',
        icon: 'fa-tv',
        messages: [
            {
                title: 'Explicação sobre IPTV e teste alternativo',
                text: 'Infelizmente não podemos prestar suporte para o seu equipamento de canais, pois o qual utiliza sinais não-oficiais de transmissão, onde podem ocorrer travamentos por conta do servidor da IPTV, e não um problema propriamente da internet. O senhor conseguiria realizar o teste em um serviço como YouTube ou Netflix, por gentileza?'
            },
            {
                title: 'Detalhes técnicos sobre servidores IPTV',
                text: 'O IPTV é como um aplicativo que pega sinais de TV de lugares que não são oficiais. Como ele não é um serviço autorizado, esses sinais não vêm de forma direta e segura. Eles ficam alternando de servidores espalhados pelo mundo. Por isso, quando chegam na sua casa, podem travar, ficar lentos ou até sair do ar. Diferente de uma TV oficial, que tem servidores fixos e estáveis, o IPTV sempre vai ter esse risco de instabilidade.'
            }
        ]
    },
    {
        id: 'celular-teste',
        name: 'CELULAR / TESTE DE VELOCIDADE',
        icon: 'fa-gauge-high',
        messages: [
            {
                title: 'Diferença entre Wi-Fi e Cabo no Teste',
                text: 'Para testar corretamente a velocidade da internet, o ideal é realizar o teste em um computador conectado por cabo de rede.\n\nTestes feitos via Wi-Fi (celular ou notebook) podem sofrer variações, pois o sinal sem fio é influenciado por distância, paredes e interferências.\n\nO teste cabeado mostra a velocidade real entregue no aparelho que está sendo testado, enquanto no Wi-Fi o resultado pode ser inferior mesmo com a conexão normal.'
            }
        ]
    },
    {
        id: 'sem-interacao',
        name: 'SEM INTERAÇÃO',
        icon: 'fa-comment-slash',
        messages: [
            {
                title: 'Encerramento por inatividade',
                text: 'Como não houve seguimento, estamos finalizando este protocolo. Se precisar de ajuda ainda, pode nos contatar, que estaremos sempre à disposição. Tenha uma ótima semana!'
            },
            {
                title: 'Aviso aos 30 minutos',
                text: 'Olá! Somente para avisar que estou no aguardo do seu retorno. Assim que conseguir realizar o procedimento, me avisa, tá bem?'
            },
            {
                title: 'Aviso à 1h30',
                text: 'Olá! Sua demanda já foi solucionada? Qualquer coisa, me avisa. Estou aqui à disposição, ok?'
            },
            {
                title: 'Aviso às 3 horas (Disponibilidade)',
                text: 'Pode me avisar o horário em que vai estar disponível para conversarmos? Ficarei no aguardo.'
            }
        ]
    },
    {
        id: 'speedtest',
        name: 'SPEEDTEST',
        icon: 'fa-network-wired',
        messages: [
            {
                title: 'Instruções para acessar e printar Speedtest',
                text: 'Acesse o site https://www.speedtest.net/pt e clique no botão "Iniciar". Quando o teste terminar, tire um print do resultado e me envie.'
            }
        ]
    },
    {
        id: 'conectividade',
        name: 'CONECTIVIDADE',
        icon: 'fa-signal',
        messages: [
            {
                title: 'Diferença entre 2.4 GHz e 5 GHz',
                text: '• 2.4 GHz: tem alcance maior e atravessa paredes melhor, mas a velocidade é menor e sofre mais interferências.\n• 5 GHz: tem velocidade maior, ideal para vídeos e jogos online, mas o alcance é menor e perde força com obstáculos.'
            }
        ]
    }
];

// Estado da aplicação
let currentCategory = 'all';
let searchQuery = '';

// Elementos do DOM
const categoryListEl = document.getElementById('categoryList');
const messagesGridEl = document.getElementById('messagesGrid');
const activeCategoryTitleEl = document.getElementById('activeCategoryTitle');
const activeCategorySubtitleEl = document.getElementById('activeCategorySubtitle');
const messageCountEl = document.getElementById('messageCount');
const noResultsEl = document.getElementById('noResults');
const searchInputEl = document.getElementById('searchInput');
const searchInputMobileEl = document.getElementById('searchInputMobile');
const clearSearchBtn = document.getElementById('clearSearch');
const sidebarEl = document.getElementById('sidebar');
const sidebarToggleBtn = document.getElementById('sidebarToggle');
const closeSidebarBtn = document.getElementById('closeSidebar');
const sidebarOverlayEl = document.getElementById('sidebarOverlay');
const toastEl = document.getElementById('toast');
const toastMessageEl = document.getElementById('toastMessage');

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderMessages();
    setupEventListeners();
});

// Configurar ouvintes de eventos
function setupEventListeners() {
    searchInputEl.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        searchInputMobileEl.value = e.target.value;
        toggleClearButton();
        renderMessages();
    });

    searchInputMobileEl.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        searchInputEl.value = e.target.value;
        toggleClearButton();
        renderMessages();
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInputEl.value = '';
        searchInputMobileEl.value = '';
        searchQuery = '';
        toggleClearButton();
        renderMessages();
        searchInputEl.focus();
    });

    sidebarToggleBtn.addEventListener('click', () => {
        sidebarEl.classList.remove('-translate-x-full');
        sidebarOverlayEl.classList.remove('hidden');
    });

    closeSidebarBtn.addEventListener('click', closeSidebar);
    sidebarOverlayEl.addEventListener('click', closeSidebar);
}

function closeSidebar() {
    sidebarEl.classList.add('-translate-x-full');
    sidebarOverlayEl.classList.add('hidden');
}

function toggleClearButton() {
    if (searchQuery.length > 0) {
        clearSearchBtn.classList.remove('hidden');
    } else {
        clearSearchBtn.classList.add('hidden');
    }
}

// Renderizar Menu Lateral de Categorias
function renderCategories() {
    let totalMessages = categoriesData.reduce((acc, cat) => acc + cat.messages.length, 0);

    let html = `
        <button onclick="selectCategory('all')" 
            class="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition ${currentCategory === 'all' && !searchQuery ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20' : 'text-gray-300 hover:bg-dark-700/50 hover:text-white'}">
            <div class="flex items-center space-x-3 truncate">
                <i class="fa-solid fa-layer-group w-5 text-center ${currentCategory === 'all' && !searchQuery ? 'text-white' : 'text-brand-light'}"></i>
                <span class="truncate">Todas as Mensagens</span>
            </div>
            <span class="text-xs px-2 py-0.5 rounded-full ${currentCategory === 'all' && !searchQuery ? 'bg-white/20 text-white' : 'bg-dark-700 text-gray-400'}">${totalMessages}</span>
        </button>
        <div class="my-2 border-t border-dark-700/60"></div>
    `;

    categoriesData.forEach(cat => {
        const isActive = currentCategory === cat.id && !searchQuery;
        html += `
            <button onclick="selectCategory('${cat.id}')" 
                class="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition ${isActive ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20' : 'text-gray-300 hover:bg-dark-700/50 hover:text-white'}">
                <div class="flex items-center space-x-3 truncate">
                    <i class="fa-solid ${cat.icon} w-5 text-center ${isActive ? 'text-white' : 'text-brand-light'}"></i>
                    <span class="truncate">${cat.name}</span>
                </div>
                <span class="text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-dark-700 text-gray-400'}">${cat.messages.length}</span>
            </button>
        `;
    });

    categoryListEl.innerHTML = html;
}

// Selecionar Categoria
function selectCategory(catId) {
    currentCategory = catId;
    searchQuery = '';
    searchInputEl.value = '';
    searchInputMobileEl.value = '';
    toggleClearButton();
    renderCategories();
    renderMessages();
    closeSidebar();
}

// Filtrar e Renderizar Mensagens
function renderMessages() {
    let filteredMessages = [];

    if (searchQuery) {
        activeCategoryTitleEl.textContent = `Resultados para "${searchQuery}"`;
        activeCategorySubtitleEl.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i> Busca Global`;
        
        categoriesData.forEach(cat => {
            cat.messages.forEach(msg => {
                if (msg.title.toLowerCase().includes(searchQuery) || msg.text.toLowerCase().includes(searchQuery)) {
                    filteredMessages.push({
                        ...msg,
                        categoryName: cat.name,
                        categoryId: cat.id
                    });
                }
            });
        });
    } else {
        if (currentCategory === 'all') {
            activeCategoryTitleEl.textContent = 'Todas as Mensagens';
            activeCategorySubtitleEl.innerHTML = `<i class="fa-solid fa-layer-group"></i> Visão Geral`;
            categoriesData.forEach(cat => {
                cat.messages.forEach(msg => {
                    filteredMessages.push({
                        ...msg,
                        categoryName: cat.name,
                        categoryId: cat.id
                    });
                });
            });
        } else {
            const cat = categoriesData.find(c => c.id === currentCategory);
            if (cat) {
                activeCategoryTitleEl.textContent = cat.name;
                activeCategorySubtitleEl.innerHTML = `<i class="fa-solid ${cat.icon}"></i> Categoria Ativa`;
                filteredMessages = cat.messages.map(msg => ({
                    ...msg,
                    categoryName: cat.name,
                    categoryId: cat.id
                }));
            }
        }
    }

    messageCountEl.textContent = filteredMessages.length;

    if (filteredMessages.length === 0) {
        messagesGridEl.innerHTML = '';
        noResultsEl.classList.remove('hidden');
        noResultsEl.classList.add('flex');
        return;
    }

    noResultsEl.classList.remove('flex');
    noResultsEl.classList.add('hidden');

    let html = '';
    filteredMessages.forEach((msg) => {
        // Formatar quebras de linha reais para <br> na exibição visual do card
        const formattedDisplay = msg.text.replace(/\n/g, '<br>');
        // Texto limpo para cópia exata para a área de transferência
        const escapedText = msg.text.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;');
        
        html += `
            <div class="message-card bg-dark-800/90 border border-dark-700/80 rounded-2xl p-5 flex flex-col justify-between shadow-lg relative group">
                <div>
                    <div class="flex items-center justify-between gap-2 mb-2">
                        <h3 class="font-semibold text-white text-base tracking-tight">${msg.title}</h3>
                        <span class="text-[10px] px-2 py-0.5 rounded-md bg-dark-700/80 text-gray-400 border border-dark-600/50 uppercase tracking-wide truncate max-w-[150px]">${msg.categoryName}</span>
                    </div>
                    <p class="text-gray-300 text-sm leading-relaxed bg-dark-900/50 p-3.5 rounded-xl border border-dark-700/50 select-all mb-4 font-normal whitespace-pre-line">${msg.text}</p>
                </div>
                <div class="flex items-center justify-end pt-2 border-t border-dark-700/40">
                    <button onclick="copyMessage(this, '${escapedText}')" 
                        class="copy-btn bg-brand-primary hover:bg-brand-hover text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition duration-150 flex items-center space-x-2 shadow-md shadow-brand-primary/20 active:scale-95">
                        <i class="fa-solid fa-clipboard"></i>
                        <span>Copiar mensagem</span>
                    </button>
                </div>
            </div>
        `;
    });

    messagesGridEl.innerHTML = html;
}

// Copiar mensagem para a área de transferência
function copyMessage(buttonEl, text) {
    // Decodificar entidades HTML caso necessário para copiar puro
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = text;
    const cleanText = tempDiv.textContent || tempDiv.innerText || text;

    const textArea = document.createElement('textarea');
    textArea.value = cleanText;
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        showToast('Mensagem copiada para a área de transferência!');
        
        const originalHTML = buttonEl.innerHTML;
        buttonEl.innerHTML = `<i class="fa-solid fa-check text-white"></i> <span>✓ Copiado!</span>`;
        buttonEl.classList.remove('bg-brand-primary', 'hover:bg-brand-hover');
        buttonEl.classList.add('bg-emerald-600', 'hover:bg-emerald-500');

        setTimeout(() => {
            buttonEl.innerHTML = originalHTML;
            buttonEl.classList.remove('bg-emerald-600', 'hover:bg-emerald-500');
            buttonEl.classList.add('bg-brand-primary', 'hover:bg-brand-hover');
        }, 2000);
    } catch (err) {
        console.error('Erro ao copiar texto: ', err);
        showToast('Erro ao tentar copiar mensagem.', true);
    }
    
    document.body.removeChild(textArea);
}

// Exibir Toast de feedback
let toastTimeout;
function showToast(message, isError = false) {
    toastMessageEl.textContent = message;
    const toastInner = toastEl.firstElementChild;
    if (isError) {
        toastInner.className = 'bg-rose-600 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center space-x-3 border border-rose-500/50 backdrop-blur-md';
    } else {
        toastInner.className = 'bg-emerald-600 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center space-x-3 border border-emerald-500/50 backdrop-blur-md';
    }

    toastEl.classList.remove('translate-y-20', 'opacity-0');
    toastEl.classList.add('translate-y-0', 'opacity-100');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toastEl.classList.remove('translate-y-0', 'opacity-100');
        toastEl.classList.add('translate-y-20', 'opacity-0');
    }, 2500);
}
