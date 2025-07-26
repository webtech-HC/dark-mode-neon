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


// jquery
$(document).ready(function() {
    // Smooth scroll
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800);
    });

    // Fade-in sections as they appear
    $('.section').css('opacity', 0);
    $(window).on('scroll', function() {
        $('.section').each(function() {
            if($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
                $(this).animate({'opacity': 1}, 1000);
            }
        });
    });

    // Hamburger toggle
    $('#menu-toggle').on('click', function() {
        $('.nav-links').toggleClass('active');
        $(this).toggleClass('open');
    });
});
