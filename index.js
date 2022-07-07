const yes = document.querySelector(".Yes");
const no = document.querySelector(".No");

yes.addEventListener("click", () => {
  window.open((href = "index2.html"));
});

no.addEventListener("click", () => {
  window.close();
  window.open("Picture/Car.jpg", "Window Title", "width=500, height=450");
});
