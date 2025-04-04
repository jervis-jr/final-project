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

// recomendation slider

let recommendations = document.querySelectorAll(".recoWrapper");
let choosers = document.querySelectorAll(".recochooser-div");

choosers.forEach((chooser, i) => {
  chooser.addEventListener("click", () => {
    recommendations[i].classList.remove("dn");
    chooser.classList.add("active");
    removeOtherClasses(i);
  });
});

function removeOtherClasses(index) {
  recommendations.forEach((recommendation, i) => {
    if (i != index) {
      recommendation.classList.add("dn");
    }
  });

  choosers.forEach((chooser, i) => {
    if (i != index) {
      chooser.classList.remove("active");
    }
  });
}

// latest project chooser

let keys = document.querySelectorAll(".aside-p");
let projects = document.querySelectorAll(".project-card");

keys.forEach((key, i) => {
  key.addEventListener("click", () => {
    key.classList.add("active-p");
    if (key.innerHTML == "All") {
      projects.forEach((project, j) => {
        project.classList.remove("dn");
      });
    } else {
      projects.forEach((project, j) => {
        project.classList.remove("dn");
      });
      projects.forEach((project, j) => {
        if (i - 1 != j) {
          project.classList.add("dn");
        }
      });
    }
    keys.forEach((key, z) => {
      if (z != i) {
        key.classList.remove("active-p");
      }
    });
  });
});

// POST HTTP Request
const firstName = document.querySelector("#name");
const email = document.querySelector("#email");
const web = document.querySelector("#web");
const message = document.querySelector("#message");
const btn = document.querySelector("#submit");
const modal = document.querySelector(".modal");
const modalBtn = document.querySelector(".modal-btn");

btn.addEventListener("click", () => {
  const url = "https://borjomi.loremipsum.ge/api/send-message";
  const data = {
    name: firstName.value,
    email: email.value,
    website: web.value,
    message: message.value,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      modal.classList.remove("dn");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

modalBtn.addEventListener("click", () => {
  modal.classList.add("dn");
});
