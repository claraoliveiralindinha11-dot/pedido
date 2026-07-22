const nao = document.getElementById("nao");

nao.addEventListener("mouseover", () => {

    // Escolhe uma posição aleatória
    const x = Math.random() * 300;
    const y = Math.random() * 100;

    nao.style.position = "absolute";
    nao.style.left = x + "px";
    nao.style.top = y + "px";

});

const sim = document.getElementById("sim");

sim.addEventListener("click", () => {
    alert("❤️ Eu te amo! ❤️");
});