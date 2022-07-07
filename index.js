const yes = document.querySelector(".Yes");
const no = document.querySelector(".No");
const memes = document.querySelector(".memes");
const url = "https://api.imgflip.com/get_memes";
const body = document.body;

yes.addEventListener("click", () => {
  window.open((href = "index2.html"));
});

no.addEventListener("click", () => {
  window.close();
  window.open("Picture/Car.jpg", "Window Title", "width=500, height=450");

  // window.close();
});
