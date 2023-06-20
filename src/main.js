var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Gamer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "assets/sun.png";
  } else {
    icon.src = "assets/moon.png";
  }
};
