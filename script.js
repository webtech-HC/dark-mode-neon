document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// testimonial slider
$(document).ready(function() {
  let index = 0;
  const testimonials = $('.testimonial');
  setInterval(function() {
    testimonials.eq(index).removeClass('active');
    index = (index + 1) % testimonials.length;
    testimonials.eq(index).addClass('active');
  }, 4000);
});


// Scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('open');
});

