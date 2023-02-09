const hamburger=document.querySelector(".hamburger");
const navList=document.querySelector(".nav-list");
const li=document.querySelector(".ul-list");
const side=document.querySelector(".sidebar");
const logo=document.querySelector(".logo-in-menu");




hamburger.addEventListener("click", function(){
    // navList.classList.toggle("show-list");
    navList.classList.add("show-list");
    li.classList.add("ul-show");
    logo.classList.add("logo-show");

    // side.classList.toggle("sidebar-show");
    side.classList.add("sidebar-show");


   
})
side.addEventListener("click", function(){
    navList.classList.remove("show-list");
    side.classList.remove("sidebar-show");
    li.classList.remove("ul-show");
    logo.classList.remove("logo-show");



})

//animation for product page
const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('product-1-animation');

      }
    });
  });
  
  observer.observe(document.querySelector('.product-1'));


  const observer2 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('product-2-animation');
      }
    });
  });
  
  observer2.observe(document.querySelector('.product-2'));


  const observer3 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('reasons-animation');
      }
    });
  });
  
  observer3.observe(document.querySelector('.reasons'));


  const observer4 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('title-slidein-animation');
      }
    });
  });
  
  observer4.observe(document.querySelector('.statistics-1'));
  observer4.observe(document.querySelector('.blog-title'));










