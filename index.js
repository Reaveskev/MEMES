const yes = document.querySelector(".Yes");
const no = document.querySelector(".No");
const memes = document.querySelector(".memes");
const url = "https://api.imgflip.com/get_memes";
const body = document.body;

yes.addEventListener("click", () => {
  window.open((href = "index2.html"));
});

// yes.addEventListener("click", () => {
//   document.body.innerHTML = "";

//   $.get(url, (data) => {
//     const memes = data.data.memes;
//     for (var i = 0; i < memes.length; i++) {
//       // Create stuff
//       // const newBody = document.createElement("body");
//       const newHeader = document.createElement("div");
//       const h1 = document.createElement("h1");
//       const memeContainer = document.createElement("div");
//       const memeSquare = document.createElement("div");
//       let img = document.createElement("img");
//       let memeName = document.createElement("div");
//       let buttons = document.createElement("div");
//       let span = document.createElement("span");
//       const seeMemes = document.createElement("button");
//       const makeMemes = document.createElement("button");

//       //Set Text
//       h1.innerText = "Top 100 Meme Templates";
//       seeMemes.innerText = "See Examples";
//       makeMemes.innerText = "Create Meme";

//       // Make class
//       newHeader.classList.add("newHeader");
//       memeContainer.classList.add("meme-container");
//       memeSquare.classList.add("memeSquare");
//       seeMemes.classList.add("seeMemes");
//       makeMemes.classList.add("makeMemes");
//       buttons.classList.add("buttons");
//       memeName.classList.add("memeName");

//       // Assign image, fix span
//       const url = memes[i].url;
//       img.src = url;
//       const name = memes[i].name;
//       span = name.replaceAll(" ", "-");

//       // Add it all together
//       // body.append(newBody);
//       newBody.append(newHeader);
//       newHeader.append(h1);
//       body.append(memeContainer);
//       memeContainer.append(memeSquare);
//       memeSquare.append(buttons);
//       memeSquare.append(img);
//       img.append(span);
//       memeSquare.append(memeName);
//       buttons.append(seeMemes);
//       buttons.append(makeMemes);
//       memeName.append(name);

//       // Go to page to create, or see examples
//       img.addEventListener("mouseenter", () => {
//         console.log(span);
//       });
//       seeMemes.addEventListener("click", () => {
//         console.log(window.open(`https://imgflip.com/meme/${span}`));
//       });
//       makeMemes.addEventListener("click", () => {
//         console.log(window.open(`https://imgflip.com/memegenerator/${span}`));
//       });
//     }
//   });
// });

no.addEventListener("click", () => {
  window.close();
  window.open("Picture/Car.jpg", "Window Title", "width=500, height=450");

  // window.close();
});
