document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".faixa-1 ul, .faixa-principal ul, .faixa-2 ul")
    .forEach((ul) => {
      ul.innerHTML += ul.innerHTML; // duplica os <li> para efeito de loop
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const perguntas = document.querySelectorAll(".faq-perguntas");

  perguntas.forEach((item) => {
    const span = item.querySelector("span");
    const dd = item.querySelector("dd");
    const img = span.querySelector("img");

    dd.style.display = "none"; // Esconde todos inicialmente

    span.addEventListener("click", () => {
      const isOpen = dd.style.display === "block";

      // Fecha todos os outros
      perguntas.forEach((otherItem) => {
        const otherDd = otherItem.querySelector("dd");
        const otherImg = otherItem.querySelector("span img");
        otherDd.style.display = "none";
        otherImg.style.transform = "rotate(180deg)";
      });

      // Alterna o atual
      if (!isOpen) {
        dd.style.display = "block";
        img.style.transform = "rotate(0deg)";
      } else {
        dd.style.display = "none";
        img.style.transform = "rotate(180deg)";
      }
    });
  });
});
