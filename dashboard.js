/* ── dashboard.js ────────────────────────────────────── */

/* --- Sidebar toggle ----------------------------------- */
const sidebar      = document.getElementById('sidebar');
const toggleBtn    = document.getElementById('toggleSidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  const isCollapsed = sidebar.classList.contains('collapsed');
  toggleBtn.setAttribute('aria-label', isCollapsed ? 'Abrir menú' : 'Cerrar menú');
});

/* --- Active nav items --------------------------------- */
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    navItems.forEach(n => n.classList.remove('active'));
    item.classList.add('active');

    /*
     * Aquí puedes agregar lógica para cambiar el contenido
     * según la página seleccionada.
     * Ejemplo:
     *   const page = item.dataset.page;
     *   loadPage(page);
     */
  });
});

/* --- Imagen de obra: recarga si falla ----------------- */
const obraImg = document.querySelector('.obra-img');
if (obraImg) {
  obraImg.addEventListener('error', () => {
    obraImg.closest('figure').classList.add('img-fallback');
  });
}