document.addEventListener("DOMContentLoaded", () => {
    const btnModo = document.getElementById("btn-modo");
    const body = document.body;

    btnModo.addEventListener("click", () => {
        // Si estamos en modo mover, pasamos a modo links
        if (body.classList.contains("modo-mover")) {
            body.classList.remove("modo-mover");
            body.classList.add("modo-links");
            btnModo.innerHTML = "🔗 Modo: Hacer Clic";
        } 
        // Si estamos en modo links, volvemos a modo mover
        else {
            body.classList.remove("modo-links");
            body.classList.add("modo-mover");
            btnModo.innerHTML = "✋ Modo: Mover";
        }
    });
});
