document.addEventListener("DOMContentLoaded", () => {
  const countdown = () => {
    const dataFesta = new Date("July 19, 2025 17:00:00").getTime();
    const agora = new Date().getTime();
    const diferenca = dataFesta - agora;
    if (diferenca < 0) {
      document.getElementById("cronometro").innerHTML = "<h3 style='color: #4b0082;'>A festa já começou!</h3>";
      clearInterval(intervalo);
      return;
    }
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    document.getElementById("dias").innerText = String(dias).padStart(2, '0');
    document.getElementById("horas").innerText = String(horas).padStart(2, '0');
    document.getElementById("minutos").innerText = String(minutos).padStart(2, '0');
    document.getElementById("segundos").innerText = String(segundos).padStart(2, '0');
  };
  const intervalo = setInterval(countdown, 1000);
  countdown();

  const carouselContainer = document.querySelector(".carousel-container");
  const slides = document.querySelectorAll(".carousel-container img");
  const dotsContainer = document.querySelector(".carousel-dots");
  if (carouselContainer && slides.length > 0 && dotsContainer) {
    let currentSlide = 0;
    let autoSlideInterval;
    slides.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        goToSlide(index);
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 5000);
      });
      dotsContainer.appendChild(dot);
    });
    const dots = document.querySelectorAll(".dot");
    const goToSlide = (slideIndex) => {
      carouselContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
      dots.forEach(dot => dot.classList.remove("active"));
      dots[slideIndex].classList.add("active");
      currentSlide = slideIndex;
    };
    const nextSlide = () => {
      const newIndex = (currentSlide + 1) % slides.length;
      goToSlide(newIndex);
    };
    autoSlideInterval = setInterval(nextSlide, 4000);
  }

  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
  });

  document.getElementById("gifCinderela")?.addEventListener("click", () => {
    document.getElementById("listaPresentes")?.classList.remove("hidden");
    document.getElementById("gifCinderela").style.display = "none";
  });
const casteloTrigger = document.getElementById('casteloTrigger');
  const casteloWrapper = document.getElementById('casteloWrapper');
  if(casteloTrigger && casteloWrapper) {
    casteloTrigger.addEventListener('click', () => {
      casteloWrapper.classList.add('revealed');
    });
  }
const carruagemTrigger = document.getElementById('carruagemTrigger');
  const carruagemWrapper = document.getElementById('carruagemWrapper');
  if (carruagemTrigger && carruagemWrapper) {
    carruagemTrigger.addEventListener('click', () => {
      carruagemWrapper.classList.add('revealed');
    });
  }
const btnVoltarTopo = document.getElementById("voltarTopo");
  if (btnVoltarTopo) {
    window.addEventListener("scroll", () => {
      btnVoltarTopo.classList.toggle("hidden", window.scrollY <= 300);
    });
    btnVoltarTopo.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.getElementById("listaPresentes")?.classList.add("hidden");
      document.getElementById("gifCinderela").style.display = "block";
      document.getElementById('casteloWrapper')?.classList.remove('revealed');
      document.getElementById('carruagemWrapper')?.classList.remove('revealed');
    });
  }
});