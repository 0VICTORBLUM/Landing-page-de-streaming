document.addEventListener("DOMContentLoaded", () => {
  // DUPLICAÇÃO DE CATÁLOGO PARA LOOP
  document
    .querySelectorAll(".faixa-1 ul, .faixa-principal ul, .faixa-2 ul")
    .forEach((ul) => {
      ul.innerHTML += ul.innerHTML;
    });

  // FAQ INTERATIVO
  const perguntas = document.querySelectorAll(".faq-perguntas");
  perguntas.forEach((item) => {
    const span = item.querySelector("span");
    const dd = item.querySelector("dd");
    const img = span.querySelector("img");

    dd.style.display = "none";

    span.addEventListener("click", () => {
      const isOpen = dd.style.display === "block";

      perguntas.forEach((otherItem) => {
        const otherDd = otherItem.querySelector("dd");
        const otherImg = otherItem.querySelector("span img");
        otherDd.style.display = "none";
        otherImg.style.transform = "rotate(180deg)";
      });

      if (!isOpen) {
        dd.style.display = "block";
        img.style.transform = "rotate(0deg)";
      } else {
        dd.style.display = "none";
        img.style.transform = "rotate(180deg)";
      }
    });
  });

  // MODAL DE SINOPSE
  const imagens = document.querySelectorAll(".catalogo img");
  const modalSinopse = document.getElementById("modal-sinopse");
  const fecharSinopse = document.querySelector(".fechar-sinopse");
  const overlay = document.getElementById("overlay");

  imagens.forEach((img) => {
    img.addEventListener("click", () => {
      modalSinopse.style.display = "block";
      overlay.style.display = "block";
    });
  });

  fecharSinopse.addEventListener("click", () => {
    modalSinopse.style.display = "none";
    overlay.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === overlay) {
      modalSinopse.style.display = "none";
      modalInscricao.style.display = "none";
      overlay.style.display = "none";
    }
  });

  // MODAL DE INSCRIÇÃO
  const links = document.querySelectorAll("a.buttom");
  const modalInscricao = document.getElementById("modal-inscricao");
  const fecharInscricao = modalInscricao.querySelector(".fechar-modal");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      modalInscricao.style.display = "flex";
      overlay.style.display = "block";
    });
  });

  fecharInscricao.addEventListener("click", () => {
    modalInscricao.style.display = "none";
    overlay.style.display = "none";
  });

  // FECHAR MODAIS AO CLICAR NO FUNDO ESCURECIDO
  window.addEventListener("click", (e) => {
    if (e.target === overlay) {
      modalSinopse.style.display = "none";
      modalInscricao.style.display = "none";
      overlay.style.display = "none";
    }
  });
});
