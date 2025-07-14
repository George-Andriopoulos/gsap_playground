import gsap from "gsap";

gsap.to(".box", {
  x: 100,
  y: 100,
  opacity: 1,
  rotation: 360,
  background: "#ff6f61",
  borderRadius: "50%",
  scale: 1.25,
  duration: 3,
  delay: 2,
  ease: "bounce",
});
