// sinopse.js
window.animes = [
  {
    titulo: "One Piece",
    descricao:
      "Embarque em uma jornada com One Piece. A épica série de anime criada pelo renomado Eiichiro Oda é um fenômeno, cativando corações de fãs de várias gerações ao longo de seus 25 anos de existência. Esta aventura em alto-mar é repleta de amizades inabaláveis, batalhas pela liberdade e a incessante busca pelos sonhos. Junte-se a Monkey D. Luffy e sua tripulação de piratas enquanto eles descobrem o verdadeiro significado de poder e justiça nesta grande era dos piratas.",
    temporadas: "14 Temporadas - Ação, aventura, Shounen",
    imagem: "./img/onepiece.jpg",
  },
  {
    titulo: "Bleach",
    descricao:
      "Ichigo Kurosaki, é um adolescente que ganha os poderes de um Shinigami (Ceifador de Almas) após um encontro com a Shinigami Rukia Kuchiki. Com essas novas habilidades, Ichigo passa a combater Hollows — espíritos malignos que atacam as almas e humanos — e a guiar almas para o mundo dos mortos, a Sociedade das Almas. A história acompanha sua jornada como um shinigami substituto e os desafios que ele enfrenta ao proteger o mundo humano e se aprofundar no mundo espiritual. ",
    temporadas: "10 Temporadas - Ação, sobrenatural, Shounen",
    imagem: "./img/bleach.jpg",
  },
  {
    titulo: "Naruto Shippuden",
    descricao:
      "Uzumaki Naruto quer ser o melhor ninja de todos. Ele está indo muito bem, mas com o perigo iminente imposto pela misteriosa Akatsuki, Naruto percebe que ele deve treinar mais que nunca e deixa sua vila para um intenso treinamento que o pressiona contra seus limites.",
    temporadas: "20 Temporadas - Ação, drama, Shounen",
    imagem: "./img/naruto.jpg",
  },
];

const imagens = document.querySelectorAll(".catalogo img");
const modalSinopse = document.getElementById("modal-sinopse");
const fecharSinopse = document.querySelector(".fechar-sinopse");
const overlay = document.getElementById("overlay");

imagens.forEach((img) => {
  img.addEventListener("click", () => {
    const index = parseInt(img.dataset.index);
    const anime = animes[index];

    modalSinopse.querySelector(".banner-sinopse img").src = anime.imagem;
    modalSinopse.querySelector(".banner-txt h2").textContent = anime.titulo;
    modalSinopse.querySelector(".sinopse-info p").textContent =
      anime.temporadas;
    modalSinopse.querySelector(".sinopse-txt p.font-card").textContent =
      anime.descricao;

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
    overlay.style.display = "none";
  }
});
