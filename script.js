const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (event) => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menu.addEventListener('click', () => {
  const open = nav.style.display === 'flex';
  nav.style.display = open ? '' : 'flex';
  nav.style.position = open ? '' : 'absolute';
  nav.style.top = open ? '' : '72px';
  nav.style.right = open ? '' : '7vw';
  nav.style.flexDirection = open ? '' : 'column';
  nav.style.alignItems = open ? '' : 'flex-end';
  nav.style.background = open ? '' : '#111412';
  nav.style.padding = open ? '' : '16px';
});
