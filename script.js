document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".faixa-1 ul, .faixa-principal ul, .faixa-2 ul")
    .forEach((ul) => {
      ul.innerHTML += ul.innerHTML; // duplica os <li> para efeito de loop
    });
});

// manipulando parte do faq
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

// manipulando card-sinopse
document.addEventListener("DOMContentLoaded", function () {
  const imagens = document.querySelectorAll(".catalogo img");
  const modal = document.getElementById("modal-sinopse");
  const fechar = document.querySelector(".fechar-modal");

  imagens.forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
    });
  });

  fechar.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
