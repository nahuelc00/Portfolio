function addLinksToImages() {
  const $logos = document.querySelectorAll(".cont-logos__logo");
  $logos.forEach((logo) => {
    logo.addEventListener("click", () => {
      if (logo.className.includes("linkedin")) {
        window.open("https://www.linkedin.com/in/nahuel-lorenzo");
      }
      if (logo.className.includes("github")) {
        window.open("https://github.com/nahuelc00");
      }
      if (logo.className.includes("cv")) {
        window.open(
          "https://drive.google.com/file/d/1772oHRPEpXTQddE-5tD6hHU9J6XZ_zlm/view?usp=share_link"
        );
      }
    });
  });
}

(function main() {
  addLinksToImages();
})();
