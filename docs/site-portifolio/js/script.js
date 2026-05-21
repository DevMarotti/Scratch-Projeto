const buttons = document.querySelectorAll(".menu-item");
const projects = document.querySelectorAll(".project");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    // REMOVE ACTIVE
    buttons.forEach(btn => btn.classList.remove("active"));
    projects.forEach(project => project.classList.remove("active"));

    // ADICIONA ACTIVE
    button.classList.add("active");

    const projectId = button.dataset.project;

    document
      .getElementById(projectId)
      .classList.add("active");

  });

});
