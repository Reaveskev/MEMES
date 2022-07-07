const url = "https://api.imgflip.com/get_memes";
const div = document.querySelector(".meme-container");

window.addEventListener("load", (event) => {
  $.get(url, (data) => {
    const memes = data.data.memes;
    for (var i = 0; i < memes.length; i++) {
      // Create stuff
      const memeSquare = document.createElement("div");
      let img = document.createElement("img");
      let memeName = document.createElement("div");
      let buttons = document.createElement("div");
      let span = document.createElement("span");
      const seeMemes = document.createElement("button");
      const makeMemes = document.createElement("button");

      //Set Text
      seeMemes.innerText = "See Examples";
      makeMemes.innerText = "Create Meme";

      // Make class
      memeSquare.classList.add("memeSquare");
      seeMemes.classList.add("seeMemes");
      makeMemes.classList.add("makeMemes");
      buttons.classList.add("buttons");
      memeName.classList.add("memeName");

      // Assign image, fix span
      const url = memes[i].url;
      img.src = url;
      const name = memes[i].name;
      span = name.replaceAll(" ", "-");

      // Add it all together
      div.append(memeSquare);
      memeSquare.append(buttons);
      memeSquare.append(img);
      img.append(span);
      memeSquare.append(memeName);
      buttons.append(seeMemes);
      buttons.append(makeMemes);
      memeName.append(name);

      // Go to page to create, or see examples
      img.addEventListener("mouseenter", () => {
        console.log(span);
      });
      seeMemes.addEventListener("click", () => {
        console.log(window.open(`https://imgflip.com/meme/${span}`));
      });
      makeMemes.addEventListener("click", () => {
        console.log(window.open(`https://imgflip.com/memegenerator/${span}`));
      });
    }
  });
});
