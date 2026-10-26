function makeGrid(width, height) {
    const container = document.querySelector("#container");
    container.innerHTML = "";
    container.style.setProperty("--width", width);
    container.style.setProperty("--height", height);

    for (let i=0; i<width*height; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);
    }
}
makeGrid(30, 20);

let white = "#fff",
    grey1 = "#eee",
    grey2 = "#ddd";
document.documentElement.style.setProperty("--white", white);
document.documentElement.style.setProperty("--grey1", grey1);
document.documentElement.style.setProperty("--grey2", grey2);