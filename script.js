// Base de dados estruturada de mensagens do NOC UltraTelecom
const categoriesData = [
    {
        id: 'bom-dia',
        name: 'BOM DIA / BOA TARDE / BOA NOITE',
        icon: 'fa-sun',
        messages: [
            {
                title: 'Saudação Padrão Inicial',
                text: 'Bom dia, tudo bem? Sou Alysson e estarei à disposição para atendê-lo da melhor forma possível. Como posso ajudar?'
            },
            {
                title: 'Saudação Boa Tarde',
                text: 'Boa tarde, tudo bem? Sou Alysson do suporte técnico da UltraTelecom e estarei à disposição para atendê-lo. Como posso ajudar?'
            },
            {
                title: 'Saudação Boa Noite',
                text: 'Boa noite, tudo bem? Sou Alysson do suporte técnico da UltraTelecom e estarei à disposição para auxiliá-lo nesta noite.'
            }
        ]
    },
    {
        id: 'comprovante',
        name: 'COMPROVANTE',
        icon: 'fa-receipt',
        messages: [
            {
                title: 'Solicitação de Comprovante de Pagamento',
                text: 'Para que possamos solicitar a baixa ou verificar a regularização do seu sinal, poderia me enviar o comprovante de pagamento em formato de imagem ou PDF?'
            },
            {
                title: 'Confirmação de Recebimento de Comprovante',
                text: 'Recebi o seu comprovante por aqui. Vou encaminhar para o setor responsável para efetuar a verificação e liberação do acesso.'
            }
        ]
    },
    {
        id: 'prazos',
        name: 'PRAZOS',
        icon: 'fa-clock',
        messages: [
            {
                title: 'Prazo de Atendimento Técnico Presencial',
                text: 'O prazo padrão para a visita da nossa equipe técnica no seu endereço é de até 24 horas úteis. Assim que o técnico estiver a caminho, entraremos em contato.'
            },
            {
                title: 'Prazo para Liberação Financeira',
                text: 'Após o envio do comprovante, o prazo estimado para a baixa no sistema e normalização automática do sinal é de até 2 horas em horário comercial.'
            }
        ]
    },
    {
        id: 'agendamentos',
        name: 'AGENDAMENTOS',
        icon: 'fa-calendar-days',
        messages: [
            {
                title: 'Confirmação de Visita Técnica',
                text: 'Gostaria de confirmar o agendamento da visita técnica para o período da [MANHÃ / TARDE]. Por favor, certifique-se de que há alguém maior de idade no local para acompanhar o atendimento.'
            },
            {
                title: 'Reagendamento de Visita',
                text: 'Identificamos que não foi possível realizar o atendimento no período anterior. Qual seria a melhor data e período (manhã ou tarde) para remarcarmos?'
            }
        ]
    },
    {
        id: 'reajuste',
        name: 'REAJUSTE',
        icon: 'fa-percent',
        messages: [
            {
                title: 'Esclarecimento sobre Reajuste Anual',
                text: 'O reajuste anual aplicado na sua fatura segue as diretrizes do contrato de prestação de serviços e é baseado na variação do índice oficial de inflação (IGP-M/IPCA), garantindo a manutenção da qualidade da nossa rede.'
            }
        ]
    },
    {
        id: 'finalizacao',
        name: 'FINALIZAÇÃO',
        icon: 'fa-circle-check',
        messages: [
            {
                title: 'Encerramento de Atendimento Bem-Sucedido',
                text: 'Fico muito feliz em ter ajudado! O seu atendimento será finalizado por aqui, mas a UltraTelecom permanece à disposição sempre que precisar. Tenha um excelente dia!'
            },
            {
                title: 'Pesquisa de Satisfação',
                text: 'Para continuarmos melhorando nossos serviços, ao finalizar o atendimento você poderá receber uma breve pesquisa sobre o suporte prestado. Agradecemos muito o seu feedback!'
            }
        ]
    },
    {
        id: 'troca-senha',
        name: 'TROCA DE SENHA',
        icon: 'fa-key',
        messages: [
            {
                title: 'Orientações para Alterar Senha do Wi-Fi',
                text: 'Para alterar a senha do seu Wi-Fi, acesse o aplicativo do roteador ou digite o endereço de IP padrão no navegador conectado à sua rede. Recomendo utilizar uma senha forte contendo letras e números.'
            },
            {
                title: 'Suporte à Redefinição de Senha',
                text: 'Caso tenha dificuldades para alterar a senha da rede sem fio, posso realizar a alteração por aqui para você. Qual nome (SSID) e senha você gostaria de cadastrar?'
            }
        ]
    },
    {
        id: 'rompimento',
        name: 'ROMPIMENTO',
        icon: 'fa-triangle-exclamation',
        messages: [
            {
                title: 'Aviso de Rompimento de Fibra Óptica',
                text: 'Identificamos um rompimento de fibra óptica na região que afeta o seu setor. Nossa equipe de redes já está em campo realizando a fusão e o reparo emergencial. A previsão de normalização é para as próximas horas.'
            }
        ]
    },
    {
        id: 'tv-box',
        name: 'TV BOX / IPTV',
        icon: 'fa-tv',
        messages: [
            {
                title: 'Verificação de Conexão no Aplicativo de TV',
                text: 'Para verificar o aplicativo de TV/IPTV, certifique-se de que o aparelho está conectado corretamente à internet e tente reiniciar o aplicativo ou limpar o cache nas configurações do dispositivo.'
            }
        ]
    },
    {
        id: 'celular-teste',
        name: 'CELULAR / TESTE DE VELOCIDADE',
        icon: 'fa-gauge-high',
        messages: [
            {
                title: 'Instruções para Teste de Velocidade Confiável',
                text: 'Para realizarmos um teste de velocidade preciso, peço que conecte seu dispositivo na rede Wi-Fi 5GHz (ou via cabo de rede), feche os aplicativos em segundo plano e acesse o site oficial speedtest.net.'
            }
        ]
    },
    {
        id: 'sem-interacao',
        name: 'SEM INTERAÇÃO',
        icon: 'fa-comment-slash',
        messages: [
            {
                title: 'Aviso de Encerramento por Inatividade',
                text: 'Como não houve retorno nas últimas mensagens, estou encerrando este atendimento temporariamente por inatividade. Caso ainda precise de suporte, basta nos chamar novamente. Estamos à disposição!'
            }
        ]
    },
    {
        id: 'speedtest',
        name: 'SPEEDTEST',
        icon: 'fa-network-wired',
        messages: [
            {
                title: 'Solicitação de Print do Speedtest',
                text: 'Poderia realizar um teste de velocidade conectado via cabo direto no roteador e nos enviar um print da tela com os resultados de Download, Upload e Ping?'
            }
        ]
    },
    {
        id: 'conectividade',
        name: 'CONECTIVIDADE',
        icon: 'fa-signal',
        messages: [
            {
                title: 'Solicitação de Foto dos Equipamentos',
                text: 'Bom dia, tudo bem? Sou Alysson e estarei à disposição para atendê-lo da melhor forma possível. Poderia me enviar uma foto dos equipamentos (ONU/Roteador) para verificarmos os LEDs indicadores?'
            },
            {
                title: 'Procedimento Básico de Reinicialização',
                text: 'Para realizarmos um teste inicial de conectividade, por favor retire a fonte de alimentação da tomada do seu roteador/ONU, aguarde 10 segundos e conecte novamente. Aguarde cerca de 2 minutos para estabilizar o sinal.'
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
    // Pesquisa Desktop
    searchInputEl.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        searchInputMobileEl.value = e.target.value;
        toggleClearButton();
        renderMessages();
    });

    // Pesquisa Mobile
    searchInputMobileEl.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        searchInputEl.value = e.target.value;
        toggleClearButton();
        renderMessages();
    });

    // Limpar busca
    clearSearchBtn.addEventListener('click', () => {
        searchInputEl.value = '';
        searchInputMobileEl.value = '';
        searchQuery = '';
        toggleClearButton();
        renderMessages();
        searchInputEl.focus();
    });

    // Sidebar Mobile Toggle
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
    filteredMessages.forEach((msg, index) => {
        // Escapar aspas para uso seguro no atributo onclick
        const escapedText = msg.text.replace(/'/g, "\\'").replace(/"/g, '&quot;');
        
        html += `
            <div class="message-card bg-dark-800/90 border border-dark-700/80 rounded-2xl p-5 flex flex-col justify-between shadow-lg relative group">
                <div>
                    <div class="flex items-center justify-between gap-2 mb-2">
                        <h3 class="font-semibold text-white text-base tracking-tight">${msg.title}</h3>
                        <span class="text-[10px] px-2 py-0.5 rounded-md bg-dark-700/80 text-gray-400 border border-dark-600/50 uppercase tracking-wide truncate max-w-[150px]">${msg.categoryName}</span>
                    </div>
                    <p class="text-gray-300 text-sm leading-relaxed bg-dark-900/50 p-3.5 rounded-xl border border-dark-700/50 select-all mb-4 font-normal">${msg.text}</p>
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
    // Decodificar entidades HTML básicas se houver
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        showToast('Mensagem copiada para a área de transferência!');
        
        // Alterar estado do botão temporariamente
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
