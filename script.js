function abrirCarta() {
    const inicio = document.getElementById("inicio");
    const pagina = document.getElementById("pagina");

    inicio.style.display = "none";
    pagina.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}