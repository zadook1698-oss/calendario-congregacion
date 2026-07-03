const wrapper = document.getElementById("sheet-wrapper");
const viewport = document.getElementById("viewport");
let scale = 0.4;

function clampScale(s) {
    return Math.min(3, Math.max(0.2, s));
}

function updateZoom() {
    wrapper.style.transform = `scale(${scale})`;
    wrapper.style.width = `${100 / scale}vw`;
    wrapper.style.height = `${100 / scale}vh`;
}

document.getElementById("zoom-in").addEventListener("click", () => {
    scale = clampScale(scale + 0.2);
    updateZoom();
});

document.getElementById("zoom-out").addEventListener("click", () => {
    scale = clampScale(scale - 0.2);
    updateZoom();
});

// --- Pinch to zoom ---
let initialDistance = null;
let initialScale = 1;

function getDistance(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
}

viewport.addEventListener("touchstart", (e) => {
    if (e.touches.length === 2) {
        initialDistance = getDistance(e.touches);
        initialScale = scale;
    }
}, { passive: true });

viewport.addEventListener("touchmove", (e) => {
    if (e.touches.length === 2 && initialDistance) {
        e.preventDefault(); // evita el zoom nativo del navegador

        const newDistance = getDistance(e.touches);
        const ratio = newDistance / initialDistance;
        const newScale = clampScale(initialScale * ratio);

        // Punto medio entre los dos dedos, relativo al viewport
        const rect = viewport.getBoundingClientRect();
        const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left;
        const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top;

        // Coordenadas dentro del wrapper (sin escalar) antes del cambio
        const unscaledX = (viewport.scrollLeft + midX) / scale;
        const unscaledY = (viewport.scrollTop + midY) / scale;

        scale = newScale;
        updateZoom();

        // Reajusta el scroll para que el punto pellizcado se mantenga fijo
        viewport.scrollLeft = unscaledX * scale - midX;
        viewport.scrollTop = unscaledY * scale - midY;
    }
}, { passive: false });

viewport.addEventListener("touchend", (e) => {
    if (e.touches.length < 2) {
        initialDistance = null;
    }
});

updateZoom();
