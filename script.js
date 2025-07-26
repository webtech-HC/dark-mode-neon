document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const testimonials = document.querySelectorAll('.testimonial');
let index = 0;

setInterval(() => {
  testimonials[index].classList.remove('active');
  index = (index + 1) % testimonials.length;
  testimonials[index].classList.add('active');
}, 4000);
