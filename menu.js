// menu.js - Búnker v1.1
function cargarMenu() {
    const sidebarHTML = `
    <button id="btn-open-sidebar" class="fixed top-4 left-4 z-50 p-2 bg-[#161616] border border-[#262626] rounded-lg text-white md:hidden hover:bg-[#1f1f1f]">
        <i data-lucide="menu" class="w-5 h-5"></i>
    </button>

    <aside id="main-sidebar" class="w-64 bg-[#161616] border-r border-[#262626] flex flex-col shrink-0 h-screen sticky top-0 transition-transform duration-300 -translate-x-full md:translate-x-0 z-[60]">
        <div class="p-6 flex items-center justify-between">
            <h2 class="text-lg font-semibold tracking-tight text-white">
                Mi espacio <span class="text-[#636363] font-normal">personal</span>
            </h2>
            <button id="btn-close-sidebar" class="md:hidden text-[#444] hover:text-white">
                <i data-lucide="x" class="w-5 h-5"></i>
            </button>
        </div>

        <nav class="flex-1 px-3 space-y-1">
            <a href="index.html" class="nav-link flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#a3a3a3] hover:bg-[#1f1f1f] hover:text-white transition-all text-sm">
                <i data-lucide="layout-dashboard" class="w-5 h-5"></i>
                <span>Dashboard</span>
            </a>

            <div class="pt-4 pb-2 px-4 text-[10px] font-bold text-[#444] uppercase tracking-widest">Módulos</div>

            <a href="tareas.html" class="nav-link flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#a3a3a3] hover:bg-[#1f1f1f] hover:text-white transition-all text-sm">
                <i data-lucide="check-square" class="w-5 h-5"></i>
                <span>Tareas</span>
            </a>

            <a href="notas.html" class="nav-link flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#a3a3a3] hover:bg-[#1f1f1f] hover:text-white transition-all text-sm">
                <i data-lucide="sticky-note" class="w-5 h-5"></i>
                <span>Notas</span>
            </a>

            <a href="habitos.html" class="nav-link flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#a3a3a3] hover:bg-[#1f1f1f] hover:text-white transition-all text-sm">
                <i data-lucide="calendar-check" class="w-5 h-5"></i>
                <span>Hábitos</span>
            </a>

            <a href="finanzas.html" class="nav-link flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#a3a3a3] hover:bg-[#1f1f1f] hover:text-white transition-all text-sm">
                <i data-lucide="wallet" class="w-5 h-5"></i>
                <span>Finanzas</span>
            </a>

            <a href="links.html" class="nav-link flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#a3a3a3] hover:bg-[#1f1f1f] hover:text-white transition-all text-sm">
                <i data-lucide="external-link" class="w-5 h-5"></i>
                <span>Links</span>
            </a>
        </nav>

        <div class="p-4 border-t border-[#262626] bg-[#1a1a1a]">
            <div class="flex items-center gap-3 px-2 py-1">
                <div class="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold text-white">B</div>
                <div class="flex-1 overflow-hidden">
                    <p class="text-xs font-medium text-white truncate">Bruno</p>
                    <p class="text-[10px] text-slate-500 truncate">Sarmiento, Morón</p>
                </div>
            </div>
        </div>
    </aside>

    <div id="sidebar-overlay" class="fixed inset-0 bg-black/50 z-[55] hidden md:hidden"></div>
    `;
    
    document.getElementById('sidebar-container').innerHTML = sidebarHTML;

    // --- Lógica de Interacción ---
    const sidebar = document.getElementById('main-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const btnOpen = document.getElementById('btn-open-sidebar');
    const btnClose = document.getElementById('btn-close-sidebar');

    const toggleSidebar = () => {
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    };

    btnOpen?.addEventListener('click', toggleSidebar);
    btnClose?.addEventListener('click', toggleSidebar);
    overlay?.addEventListener('click', toggleSidebar);

    // --- Lógica de Sección Activa ---
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const activeLink = document.querySelector(`a[href="${currentPath}"]`);
    if (activeLink) {
        activeLink.classList.add('bg-[#262626]', 'text-white', 'border-l-4', 'border-indigo-500');
        activeLink.classList.remove('text-[#a3a3a3]');
    }

    // Inicializar iconos de Lucide (asegúrate de tener el script en el HTML)
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

document.addEventListener('DOMContentLoaded', cargarMenu);