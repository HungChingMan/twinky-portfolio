const header = document.querySelector('.header');
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
header.classList.add('has-js');
menu.hidden = false;
function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});
const disciplines = [...document.querySelectorAll('.discipline')];
disciplines.forEach(button => {
  button.addEventListener('pointerleave', event => {
    if (event.pointerType === 'mouse') button.setAttribute('aria-pressed', 'false');
  });
  button.addEventListener('click', () => {
    const selected = button.getAttribute('aria-pressed') !== 'true';
    disciplines.forEach(item => item.setAttribute('aria-pressed', String(item === button && selected)));
  });
});

// Observe the Hero boundary independently of future narrative animations.
const hero = document.querySelector('.hero');
let heroObserver;
const headerObserver = new ResizeObserver(() => {
  const headerHeight = header.getBoundingClientRect().height;
  heroObserver?.disconnect();
  const updateHeader = () => header.classList.toggle('is-past-hero', hero.getBoundingClientRect().bottom <= headerHeight + 1);
  updateHeader();
  heroObserver = new IntersectionObserver(updateHeader, {
    rootMargin: `-${headerHeight + 1}px 0px 0px 0px`,
    threshold: 0
  });
  heroObserver.observe(hero);
});
headerObserver.observe(header);
