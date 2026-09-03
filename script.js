const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: '0px 0px -40px 0px'
  }
);

revealItems.forEach((item) => revealObserver.observe(item));
