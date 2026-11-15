const buscador = document.getElementById("buscador");
const tarjetas = document.querySelectorAll(".lugar-card");
const sinResultados = document.getElementById("sinResultados");


buscador.addEventListener("input", () => { const texto = buscador.value.trim().toLowerCase();
    let hayResultados = false;
    tarjetas.forEach(tarjeta => {

        const titulo = tarjeta.querySelector(".card-title").textContent.trim().toLowerCase();
        const coincide = titulo.includes(texto);

        tarjeta.style.display = coincide ? "" : "none";

        if (coincide) {
            hayResultados = true;
        }

    });

    sinResultados.hidden = hayResultados;
});
