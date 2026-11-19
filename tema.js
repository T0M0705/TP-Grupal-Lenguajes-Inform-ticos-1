document.addEventListener('DOMContentLoaded', () => {
  const btnTema = document.getElementById('btn-tema');
  if (!btnTema) return;

  const htmlElement = document.documentElement;

  if (htmlElement.classList.contains('modo-claro')) {
    btnTema.textContent = '🌙 Modo Oscuro';
  }

  btnTema.addEventListener('click', () => {
    htmlElement.classList.toggle('modo-claro');

    if (htmlElement.classList.contains('modo-claro')) {
      localStorage.setItem('tema', 'claro');
      btnTema.textContent = '🌙 Modo Oscuro';
    } else {
      localStorage.setItem('tema', 'oscuro');
      btnTema.textContent = '☀️ Modo Claro';
    }
  });
});