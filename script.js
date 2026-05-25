/* ── script.js ───────────────────────────────────────── */
 
/* --- Eye toggle (mostrar/ocultar contraseña) ---------- */
document.querySelectorAll('.eye-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;
    const input    = document.getElementById(targetId);
    const icon     = btn.querySelector('.eye-icon');
 
    if (input.type === 'password') {
      input.type = 'text';
      /* ícono de "ojo cerrado" */
      icon.innerHTML = `
        <path d="M2 2l16 16M6.5 6.6A8.3 8.3 0 001 10s3.5 7 9 7a8.2 8.2 0 004.5-1.4
                 M13.7 13.8A8.3 8.3 0 0019 10s-3.5-7-9-7a8.2 8.2 0 00-3 .55"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="10" cy="10" r="2.5" stroke="currentColor" stroke-width="1.5"/>
      `;
      btn.setAttribute('aria-label', 'Ocultar contraseña');
    } else {
      input.type = 'password';
      /* ícono de "ojo abierto" */
      icon.innerHTML = `
        <path d="M1 10s3.5-7 9-7 9 7 9 7-3.5 7-9 7-9-7-9-7z"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="10" cy="10" r="2.5" stroke="currentColor" stroke-width="1.5"/>
      `;
      btn.setAttribute('aria-label', 'Mostrar contraseña');
    }
  });
});
 
/* --- Login -------------------------------------------- */
const loginBtn = document.getElementById('loginBtn');
const errorMsg = document.getElementById('errorMsg');
 
/*
 * Cambia estas credenciales según tu sistema,
 * o reemplaza esta lógica con una llamada fetch() a tu API.
 */
const VALID_USER = 'admin';
const VALID_PASS = '1234';
 
loginBtn.addEventListener('click', handleLogin);
 
/* También permite hacer login con Enter */
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') handleLogin();
});
 
function handleLogin() {
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value;
 
  errorMsg.textContent = '';
 
  if (!user || !pass) {
    showError('Por favor completa todos los campos.');
    return;
  }
 
  /* --- Validación local (reemplaza con fetch a tu backend) --- */
  if (user === VALID_USER && pass === VALID_PASS) {
    loginBtn.textContent = '✓ Acceso concedido';
    loginBtn.style.background = '#0F6E56';
    loginBtn.disabled = true;
 
    /* Redirige después de 800 ms — ajusta la URL según tu app */
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 800);
 
  } else {
    showError('Usuario o contraseña incorrectos.');
    shake(document.querySelector('.card'));
  }
}
 
/* --- Helpers ------------------------------------------ */
function showError(msg) {
  errorMsg.textContent = msg;
}
 
function shake(el) {
  el.animate(
    [
      { transform: 'translateX(0)'    },
      { transform: 'translateX(-7px)' },
      { transform: 'translateX(7px)'  },
      { transform: 'translateX(-5px)' },
      { transform: 'translateX(5px)'  },
      { transform: 'translateX(0)'    },
    ],
    { duration: 380, easing: 'ease-in-out' }
  );
}