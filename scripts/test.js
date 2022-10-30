let menu = document.getElementById("test2");
let paths = document.getElementsByClassName("shard");

const test = () => {
  let status = menu.style.opacity;
    console.log(status);
  for (let i = 0; i < 6; i++) {
    paths[i].style.opacity = status ? 0.5 : 0;
  }

  menu.style.width = status ? 0 : "100vw";
  menu.style.height = status ? 0 : "100vh";
  menu.style.opacity = status ? 0 : 1;
};
