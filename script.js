// Mobile Menu Logic
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const mobileMenuItems = document.querySelector(".mobile-menu-items");
const allMobileMenuLinks = document.querySelectorAll(".mobile-menu-items a");

if(menuIcon && closeIcon && mobileMenuItems) {
  menuIcon.addEventListener("click", () => { 
      mobileMenuItems.classList.add("active"); 
  });
  
  closeIcon.addEventListener("click", () => { 
      mobileMenuItems.classList.remove("active"); 
  });
  
  allMobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => { 
        mobileMenuItems.classList.remove("active"); 
    });
  });
}
