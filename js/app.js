const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const fundoConteinerClinicasElements = document.querySelectorAll(".fundoconteinerclinicas");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  if (nav.classList.contains("active")) {
    fundoConteinerClinicasElements.forEach(element => {
      element.style.display = "none";
    });
  } else {
    setTimeout(() => {
      fundoConteinerClinicasElements.forEach(element => {
        element.style.display = "block";
      });
    }, 800); // 2 segundos de atraso
  }
});





