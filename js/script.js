const projetos = [
  {
    nome: "Órbita Circular",
    arquivo: "projetos/orbitaCircular.html"
  },
  {
    nome: "Órbita Eliptica",
    arquivo: "projetos/orbitaEliptica.html"
  }
];

const menu = document.getElementById("menu");
const viewer = document.getElementById("viewer");

projetos.forEach((projeto, index) => {

  const item = document.createElement("button");

  item.classList.add("menu-item");

  item.textContent = projeto.nome;

  item.addEventListener("click", () => {

    document
      .querySelectorAll(".menu-item")
      .forEach(el => el.classList.remove("active"));

    item.classList.add("active");

    viewer.src = projeto.arquivo;

  });

  menu.appendChild(item);

  if(index === 0){
    item.classList.add("active");
    viewer.src = projeto.arquivo;
  }

});