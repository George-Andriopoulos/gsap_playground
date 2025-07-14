import gsap from "gsap";

const button = document.querySelector(".scroll-to-top");

let isFloating = true;

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    button.classList.add("show");

    if (isFloating) {
      gsap.to(button, {
        y: -10,
        duration: 1.5,
        ease: "sine.out",
        repeat: -1,
        yoyo: true,
      });
      isFloating = true;
    }
  } else {
    button.classList.remove("show");
  }
});
