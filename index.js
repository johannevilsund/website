document.addEventListener("DOMContentLoaded", function () {
  // Hent undertekst og TIKI MEDIA elementer
  const subtitle = document.querySelector(".subtitle");
  const tiki = document.querySelector(".tiki");
  const media = document.querySelector(".media");

  // Tjek om elementerne eksisterer
  if (subtitle && tiki && media) {
    subtitle.addEventListener("mouseenter", function () {
      // Ændr farve for underteksten til hvid
      subtitle.classList.add("hovered");
      tiki.classList.add("dimmed");
      media.classList.add("dimmed");
    });

    subtitle.addEventListener("mouseleave", function () {
      // Fjern hover-effekter
      subtitle.classList.remove("hovered");
      tiki.classList.remove("dimmed");
      media.classList.remove("dimmed");
    });
  } else {
    console.warn("Nødvendige elementer blev ikke fundet.");
  }
});
