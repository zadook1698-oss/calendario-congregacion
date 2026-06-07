const wrapper = document.getElementById("sheet-wrapper");

let scale = 1;

function updateZoom() {
    wrapper.style.transform = `scale(${scale})`;

    wrapper.style.width = `${100 / scale}vw`;
    wrapper.style.height = `${100 / scale}vh`;
}

document.getElementById("zoom-in").addEventListener("click", () => {
    scale += 0.2;

    if (scale > 3) {
        scale = 3;
    }

    updateZoom();
});

document.getElementById("zoom-out").addEventListener("click", () => {
    scale -= 0.2;

    if (scale < 0.2) {
        scale = 0.2;
    }

    updateZoom();
});

document.getElementById("reset").addEventListener("click", () => {
    scale = 1;
    updateZoom();
});

updateZoom();
