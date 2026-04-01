// menu.js
function cargarMenu() {
    const sidebarHTML = `
    <aside class="w-64 bg-[#161616] border-r border-[#262626] flex flex-col shrink-0 h-screen sticky top-0">
        <div class="p-6">
            <h2 class="text-lg font-semibold tracking-tight text-white">
                Mi espacio <span class="text-[#636363] font-normal">personal</span>
            </h2>
        </div>
        <nav class="flex-1 px-3 space-y-1">
            <a href="index.html" id="nav-index" class="nav-link flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#a3a3a3] hover:bg-[#1f1f1f] hover:text-white transition-all text-sm">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                <span>Dashboard</span>
            </a>
            <a href="tareas.html" id="nav-tareas" class="nav-link flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#a3a3a3] hover:bg-[#1f1f1f] hover:text-white transition-all text-sm">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Tareas</span>
            </a>
            <a href="notas.html" id="nav-notas" class="nav-link flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#a3a3a3] hover:bg-[#1f1f1f] hover:text-white transition-all text-sm">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                <span>Notas</span>
            </a>
            <a href="finanzas.html" id="nav-finanzas" class="nav-link flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#a3a3a3] hover:bg-[#1f1f1f] hover:text-white transition-all text-sm">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Finanzas</span>
            </a>
        </nav>
        <div class="p-4 border-t border-[#262626]">
            <p class="text-[10px] text-[#444] text-center uppercase tracking-widest">Búnker v1.0</p>
        </div>
    </aside>
    `;
    
    // Inyectamos el HTML en el contenedor con id "sidebar-container"
    document.getElementById('sidebar-container').innerHTML = sidebarHTML;

    // Lógica para marcar la sección activa automáticamente
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const activeLink = document.querySelector(`a[href="${currentPath}"]`);
    if (activeLink) {
        activeLink.classList.add('bg-[#262626]', 'text-white', 'border-l-2', 'border-white');
        activeLink.classList.remove('text-[#a3a3a3]');
    }
}

// Ejecutar cuando cargue la página
document.addEventListener('DOMContentLoaded', cargarMenu);