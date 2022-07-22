function getCursor(event) {
    let x = event.clientX;
    let y = event.clientY;
    let _position = `<div id="spanner"> X:</div> ${x}<br><div id="spanner"> Y:</div> ${y} `;

    const infoElement = document.getElementById('info');
    infoElement.innerHTML = _position;
    infoElement.style.top = y + "px";
    infoElement.style.left = (x + 20) + "px";
}