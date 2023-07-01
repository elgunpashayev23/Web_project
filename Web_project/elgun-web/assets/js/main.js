const goToAboutUs = document.querySelector(".about-us-btn");
const goToFeatured = document.querySelector(".featured-btn");
const goToProjects = document.querySelector(".project-btn");
const goToContactUS = document.querySelector(".contact-btn");
const li1 = document.querySelector("#element-1");
const li2 = document.querySelector("#element-2");
const li3 = document.querySelector("#element-3");
const li4 = document.querySelector("#element-4");
const li5 = document.querySelector("#element-5");

goToAboutUs.addEventListener("click",function(){
  li1.classList.remove("selected")
  li2.classList.add("selected")
})



goToFeatured.addEventListener("click",function(){
  li2.classList.remove("selected")
  li3.classList.add("selected") 
    
})

goToProjects.addEventListener("click",function(){
  li3.classList.remove("selected")
  li4.classList.add("selected") 

})

goToContactUS.addEventListener("click",function(){
  li4.classList.remove("selected")
  li5.classList.add("selected")
})


