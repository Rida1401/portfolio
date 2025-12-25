document.querySelectorAll('.sidebar nav a').forEach(link => {
  link.addEventListener('click', e => {
    const target = link.getAttribute('href');

    if (target.startsWith('#')) {
      e.preventDefault();
      document.querySelector(target)
        .scrollIntoView({ behavior: 'smooth' });
    }
  });
});



const allCards = document.querySelectorAll('.edu-card, .project-card, .skill-card, .certi-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

allCards.forEach(card => observer.observe(card));

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.sidebar nav a');

window.addEventListener('scroll', () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (
      window.pageYOffset >= sectionTop &&
      window.pageYOffset < sectionTop + sectionHeight
    ) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

const menuBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.sidebar nav');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}
