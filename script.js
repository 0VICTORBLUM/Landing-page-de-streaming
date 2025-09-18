document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".faixa-1 ul, .faixa-principal ul, .faixa-2 ul")
    .forEach((ul) => {
      ul.innerHTML += ul.innerHTML; // duplica os <li> para efeito de loop
    });
});
