const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector("nav .container ul");
const navItems = menu.querySelectorAll("li");

// show menu
menuBtn.addEventListener("click", () => {
  menu.style.display = "block";
  menuBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
});
// hide menu
closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  menuBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
});

const changeActiveItem = () => {
  navItems.forEach((item) => {
    const link = item.querySelector("a");
    link.classList.remove("active");
  });
};

navItems.forEach((item) => {
  const link = item.querySelector("a");
  link.addEventListener("click", () => {
    changeActiveItem();
    link.classList.add("active");
  });
});

// red more about
const readMoreBtn = document.querySelector(".read-more");
const readMoreContent = document.querySelector(".read-more-content");

readMoreBtn.addEventListener("click", () => {
  readMoreContent.classList.toggle("show-content");
  if (readMoreContent.classList.contains("show-content")) {
    readMoreBtn.textContent = "Show less";
  } else {
    readMoreBtn.textContent = "Show more";
  }
});
// show or hide skills items
const skillsItems = document.querySelectorAll("section.skills .skill");

skillsItems.forEach((skill) => {
  skill.querySelector(".head").addEventListener("click", () => {
    skill.querySelector(".items").classList.toggle("show-items");
  });
});

//add box shadow nav bar
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("show-box-shadow", window.scrollY > 0);
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or use system preference
const currentTheme = localStorage.getItem('theme') || 
    (prefersDarkScheme.matches ? 'dark' : 'light');

// Apply the theme
document.documentElement.setAttribute('data-theme', currentTheme);

// Theme toggle click handler
themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' 
        ? 'light' 
        : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

document.addEventListener('DOMContentLoaded', function() {
  // Modal for graphic project previews
  const modal = document.getElementById('graphic-modal');
  const modalImg = document.getElementById('modal-img');
  const modalBehance = document.getElementById('modal-behance');
  const closeModal = document.getElementById('close-modal');

  // Attach click listeners to gallery images (flexbox version)
  document.querySelectorAll('.graphic-gallery-item img').forEach((img) => {
    img.addEventListener('click', function(e) {
      e.preventDefault();
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modalBehance.href = img.getAttribute('data-behance') || '#';
      modal.style.display = 'flex';
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside modal-content
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
