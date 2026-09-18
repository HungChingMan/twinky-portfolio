const header = document.querySelector('.header');
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
header.classList.add('has-js');
menu.hidden = false;
function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
  header.classList.remove('is-menu-open');
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
  header.classList.toggle('is-menu-open', open);
});
document.addEventListener('click', event => {
  if (!header.contains(event.target)) closeMenu();
});
window.matchMedia('(max-width: 600px)').addEventListener('change', closeMenu);
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

// Keep one quiet, continuous Experience path attached to the chapter headings
// as text wrapping and font loading change the distances between nodes.
const journey = document.querySelector('.experience .journey');
const journeyLine = journey.querySelector('.journey-line');
const journeyPath = journeyLine.querySelector('path');
function alignJourneyPath() {
  const bounds = journeyLine.getBoundingClientRect();
  const points = [...journey.querySelectorAll('.node')].map(node => {
    const rect = node.getBoundingClientRect();
    return { x: rect.left + rect.width / 2 - bounds.left, y: rect.top + rect.height / 2 - bounds.top };
  });
  // Let the broad bends extend into the open gutter, rather than compressing
  // the whole journey into the narrow SVG box. Keep rightward bends off copy.
  const sway = bounds.width * (bounds.width > 54 ? 1.9 : .8);
  const rightBend = bounds.width * .28;
  const first = points[0];
  let path = `M ${first.x + rightBend} 0 C ${first.x - sway} ${first.y * .15}, ${first.x + rightBend} ${first.y * .7}, ${first.x} ${first.y}`;
  points.slice(1).forEach((point, index) => {
    const previous = points[index];
    const gap = (point.y - previous.y) / 3;
    const outgoingBend = index === 0 ? -sway : rightBend;
    path += ` C ${previous.x + outgoingBend} ${previous.y + gap}, ${point.x - sway} ${point.y - gap}, ${point.x} ${point.y}`;
  });
  const last = points[points.length - 1];
  const tail = bounds.height - last.y;
  path += ` C ${last.x + rightBend} ${last.y + tail / 3}, ${last.x + rightBend} ${bounds.height - tail / 3}, ${last.x - sway * .3} ${bounds.height}`;
  journeyLine.setAttribute('viewBox', `0 0 ${bounds.width} ${bounds.height}`);
  journeyPath.setAttribute('d', path);
}
const journeyObserver = new ResizeObserver(alignJourneyPath);
journeyObserver.observe(journey);
journey.querySelectorAll('.chapter').forEach(chapter => journeyObserver.observe(chapter));
document.fonts.ready.then(alignJourneyPath);
