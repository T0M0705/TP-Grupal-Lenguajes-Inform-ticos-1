const buscador = document.getElementById("buscador");
const tarjetas = document.querySelectorAll(".lugar-card");
const sinResultados = document.getElementById("sinResultados");

if (buscador) {

    buscador.addEventListener("input", () => {
        const texto = buscador.value.trim().toLowerCase();
        let hayResultados = false;

        tarjetas.forEach(tarjeta => {

            const titulo = tarjeta.querySelector(".card-title").textContent.trim().toLowerCase();
            const coincide = titulo.includes(texto);

            tarjeta.style.display = coincide ? "" : "none";

            if (coincide) {
                hayResultados = true;
            }

        });

        if (sinResultados) {
            sinResultados.hidden = hayResultados;
        }
    });

}


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