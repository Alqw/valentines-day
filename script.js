let hearts_active = false;

const heart_element = document.querySelector(".heart");
const click_me = document.querySelector(".click_me");
const valentine = document.querySelector(".valentine");

heart_element.addEventListener("click", () => {
  heart_element.classList.add("active");
  click_me.classList.add("active");
  setTimeout(() => {
    valentine.classList.add("active");
  }, 500);
  hearts_active = true;
  if (hearts_active === true) {
    setTimeout(() => {
      setInterval(hearts, 30);
    }, 500);
  }
});

function hearts() {
  const hearts_container = document.querySelector(".hearts_container");

  const heart = document.createElement("div");
  heart.classList.add("heart_emoji");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";

  heart.addEventListener("animationend", () => {
    heart.remove();
  });

  hearts_container.appendChild(heart);
}
