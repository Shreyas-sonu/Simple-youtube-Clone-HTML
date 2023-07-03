let video = document.querySelectorAll("ul video");
let div = document.querySelector("div")
let main = document.querySelector("div>video")
let h3=document.querySelector("h3")
console.log(video);
video.forEach(ind => {
    ind.addEventListener("click", e => {
        let sor = e.target.getAttribute("src");
        main.setAttribute("src", `${sor}`);
        let tag =e.target.parentElement.nextElementSibling.innerText;
        h3.innerText = tag;
    })
})
video.forEach(e => {
  e.addEventListener("mouseenter", e => {
    e.target.style.transform = "scale(1.3)";
    e.target.style.transition = "0.8s all ease";
    e.target.style.zIndex="1";
    e.target.setAttribute("autoplay","true");
    e.target.setAttribute("muted", "");
    e.target.setAttribute("loop", "");
    console.dir(e.target);
    //   e.target.setAttribute("loop", "true");
  });
    e.addEventListener("mouseleave", e => {
        e.target.style.transform = "scale(1)";
        e.target.style.transition = "0.8s all ease";
        e.target.removeAttribute("autoplay");
        e.target.removeAttribute("muted");
        e.target.removeAttribute("loop");
        e.target.style.zIndex = "-1";
      });
});