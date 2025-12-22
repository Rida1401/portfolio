document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

const eduCards = document.querySelectorAll('.edu-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

eduCards.forEach(card => observer.observe(card));

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => observer.observe(card));

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.sidebar nav a');

window.addEventListener('scroll', () => {
  let current = "";

  sections.forEach(section => {
    const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.sidebar nav a');

window.addEventListener('scroll', () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (
      pageYOffset >= sectionTop &&
      pageYOffset < sectionTop + sectionHeight
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
  });
});


