document.querySelectorAll(".faixa-1 ul, .faixa-2 ul").forEach((ul) => {
  const items = ul.innerHTML; // pega os <li>
  ul.innerHTML += items; // duplica
});
