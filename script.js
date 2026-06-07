// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    const elem = document.getElementById("panzoom-element");
    const viewport = document.getElementById("viewport");

    // Inicializar Panzoom
    const panzoom = Panzoom(elem, {
        maxScale: 5,
        minScale: 0.1,
        startScale: 0.35, // Ajusta esto según qué tan pequeño quieras que inicie en el celular
        contain: 'outside' // Evita que se pierda el contenido fuera de la pantalla
    });

    // Forzar un centrado inicial aproximado
    panzoom.pan(-200, -100);

    // Zoom con la rueda del ratón (PC)
    viewport.addEventListener("wheel", panzoom.zoomWithWheel);

    // Eventos de los botones de la barra de herramientas
    document.getElementById("zoomIn").addEventListener("click", () => panzoom.zoomIn());
    document.getElementById("zoomOut").addEventListener("click", () => panzoom.zoomOut());
    document.getElementById("reset").addEventListener("click", () => {
        panzoom.reset();
        panzoom.zoom(0.35);
        panzoom.pan(-200, -100);
    });
});
