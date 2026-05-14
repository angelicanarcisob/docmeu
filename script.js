// Configurações e Variáveis
const ADMIN_PASSWORD = atob('d2VuZHlhZA=='); // wendyad
let isAdminLoggedIn = false;
let allGuests = [];

const defaultConfig = {
    party_title: "Aniversário da Wendy",
    party_date: "16 de Agosto",
    party_time: "15h às 19h",
    party_location: "Rua Goiás 2680"
};

// Inicialização de Ícones
lucide.createIcons();

// --- Lógica de Abas ---
document.getElementById('convite-tab').addEventListener('click', () => {
    document.getElementById('convite-content').classList.remove('hidden');
    document.getElementById('admin-content').classList.add('hidden');
});

document.getElementById('admin-tab').addEventListener('click', () => {
    document.getElementById('convite-content').classList.add('hidden');
    document.getElementById('admin-content').classList.remove('hidden');
});

// --- Funções de RSVP e Admin (Copie as funções do script original aqui) ---
// ... (Ex: formSim.addEventListener, updateAdminStats, etc.)