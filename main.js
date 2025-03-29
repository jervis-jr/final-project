// intro slider

let introSlider = 1;
let introSliderImg = this.document.querySelector(".intro-img");
function slider() {
  let src = `images/intros/intro-${introSlider}.jpg`;
  introSliderImg.setAttribute("src", src);

  if (introSlider > 2) {
    introSlider = 0;
  }
  introSlider++;
}
setInterval(slider, 5000);

// skills auto filler

window.addEventListener("scroll", () => {
  const expandableDesign = document.querySelector(".skill-design");
  const expandablePhotography = document.querySelector(".skill-photography");
  const expandableMarking = document.querySelector(".skill-marking");
  const expandablePhotoshopy = document.querySelector(".skill-photoshopy");

  if (window.scrollY > 700) {
    const designNewWidth = Math.min(0.8 * 250);
    const photographyNewWidth = Math.min(0.65 * 200);
    const MarkingNewWidth = Math.min(0.5 * 200);
    const PhotoshopyNewWidth = Math.min(0.3 * 200);

    expandableDesign.style.width = `${designNewWidth}px`;
    expandablePhotography.style.width = `${photographyNewWidth}px`;
    expandableMarking.style.width = `${MarkingNewWidth}px`;
    expandablePhotoshopy.style.width = `${PhotoshopyNewWidth}px`;
  }
});
