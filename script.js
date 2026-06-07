document.addEventListener("DOMContentLoaded", () => {
    const elem = document.getElementById("panzoom-element");
    const viewport = document.getElementById("viewport");

    const panzoom = Panzoom(elem, {
        maxScale: 3,
        minScale: 0.15,
        startScale: 0.38, // Escala inicial pequeña para que entre casi todo en el celular
        contain: 'outside'
    });

    // Centrado inicial para móviles
    panzoom.pan(-450, -50);

    // Zoom con la rueda del ratón (PC)
    viewport.addEventListener("wheel", panzoom.zoomWithWheel);

    // Botones de control
    document.getElementById("zoomIn").addEventListener("click", () => panzoom.zoomIn());
    document.getElementById("zoomOut").addEventListener("click", () => panzoom.zoomOut());
    document.getElementById("reset").addEventListener("click", () => {
        panzoom.reset();
        panzoom.zoom(0.38);
        panzoom.pan(-450, -50);
    });
});
