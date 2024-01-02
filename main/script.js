const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  const navImg = document.querySelectorAll('.nav-links img');
  burger.addEventListener('click', ()=>{
    nav.classList.toggle('nav-active');
    navLinks.forEach((link, index)=>{
      if(link.style.animation){
        link.style.animation = ''
      }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
      }
    });
    navImg.forEach((img, index)=>{
      if(img.style.animation){
        img.style.animation = ''
      }else{
            img.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });
   
    burger.classList.toggle('toggle');
  });  
}
navSlide();

const apprBtn = document.querySelector('.appr-btn');
const blocksDiv = document.querySelector('.blocks-fnd-div');

apprBtn.addEventListener('click', (e) => {
    blocksDiv.classList.toggle('active');
});

function openNav() {
  document.getElementById("containerSidebar").style.width = "300px";
  document.getElementById("contentSidebar").style.width = "260px";
  document.getElementById("closeBtn").style.visibility = "visible";
  document.getElementById("openBtn").style.visibility = "hidden";
}

function closeNav() {
  document.getElementById("containerSidebar").style.width = "40px";
  document.getElementById("contentSidebar").style.width = "0px";
  document.getElementById("closeBtn").style.visibility = "hidden";
  setTimeout(function show() {
    document.getElementById("openBtn").style.visibility = "visible";
  }, 400);
} 

