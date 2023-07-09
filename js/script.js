function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  window.addEventListener("scroll", function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (window.pageYOffset > 100) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

   // Smooth scrolling
   const navLinks = document.querySelectorAll('.navbar-nav a');

   navLinks.forEach(link => {
     link.addEventListener('click', (event) => {
       event.preventDefault();
       const targetId = link.getAttribute('href').substring(1);
       const targetElement = document.getElementById(targetId);
       targetElement.scrollIntoView({ behavior: 'smooth' });
     });
   });
