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

// Hero → About travel. The three Hero forms move (transform only) from their Hero
// boxes onto their matching Venn circles — matched by the shared blue/pink/green
// palette — driven purely by scroll position, so it is reversible and can't get
// stuck or need to replay. The "reveal" (travelling form fading out as the sharp
// Venn circle fades in) is also a direct function of scroll progress, not a timed
// CSS transition — so the shape itself stays glued to however fast or slow the
// visitor is scrolling, with nothing left to keep animating once they stop. Only
// once fully arrived does a short, one-off staggered entrance play for the three
// labels (a small reward for reaching the destination, not something scroll itself
// has to keep driving) — see the .is-merged rules in styles.css.
// Below 801px the stacked layout keeps the About section's own static entrance.
const about = document.querySelector('.about');
const venn = document.querySelector('.venn');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const travelConfig = {
  minWidth: 801,
  start: 0,       // travel begins at this scroll offset, in viewport heights
  end: .55,       // travel ends when the Venn's centre sits this far down the viewport
  ease: t => t * t * (3 - 2 * t), // ease-in-out, for the forms' position/scale
  revealFrom: .9  // reveal ramps linearly from this progress up to 1 (matches how late it lands in the travel)
};
if (hero && about && venn && !reducedMotion) {
  const travelPairs = [
    ['.form-blue', '.data'],
    ['.form-green', '.technology'],
    ['.form-pink', '.product']
  ].map(([form, circle]) => ({ form: hero.querySelector(form), circle: about.querySelector(circle) }));

  if (travelPairs.every(pair => pair.form && pair.circle)) {
    const travelMedia = window.matchMedia(`(min-width: ${travelConfig.minWidth}px)`);
    let travelGeometry = null;
    let travelFrame = 0;
    let travelMerged = false;

    // Untransformed boxes (offset*), so the travel itself never skews the measurement.
    function measureTravel() {
      const heroBox = hero.getBoundingClientRect();
      const vennBox = venn.getBoundingClientRect();
      const heroLeft = heroBox.left + window.scrollX, heroTop = heroBox.top + window.scrollY;
      const vennLeft = vennBox.left + window.scrollX, vennTop = vennBox.top + window.scrollY;
      const boxes = travelPairs.map(({ form, circle }) => {
        const from = { x: heroLeft + form.offsetLeft + form.offsetWidth / 2, y: heroTop + form.offsetTop + form.offsetHeight / 2 };
        const to = { x: vennLeft + circle.offsetLeft + circle.offsetWidth / 2, y: vennTop + circle.offsetTop + circle.offsetHeight / 2 };
        return { dx: to.x - from.x, dy: to.y - from.y, scale: circle.offsetWidth / form.offsetWidth, toY: to.y };
      });
      travelGeometry = { boxes, vennY: boxes.reduce((sum, box) => sum + box.toY, 0) / boxes.length };
    }

    function clearTravel() {
      hero.classList.remove('is-traveling');
      about.classList.remove('is-travel', 'is-merged');
      document.documentElement.style.removeProperty('--reveal');
      travelMerged = false;
      travelPairs.forEach(({ form }) => ['--tx', '--ty', '--s'].forEach(name => form.style.removeProperty(name)));
    }

    function updateTravel() {
      travelFrame = 0;
      if (!travelMedia.matches || !travelGeometry) {
        if (hero.classList.contains('is-traveling')) clearTravel();
        return;
      }

      const y = window.scrollY;
      hero.classList.toggle('is-traveling', y > 0);
      about.classList.add('is-travel');

      const viewport = window.innerHeight;
      const startY = travelConfig.start * viewport;
      const endY = Math.max(startY + 1, travelGeometry.vennY - travelConfig.end * viewport);
      const progress = Math.min(1, Math.max(0, (y - startY) / (endY - startY)));
      const eased = travelConfig.ease(progress);

      // A focused circle is always fully revealed so keyboard users never land on
      // an unlabelled one; otherwise reveal rides the same scroll progress as the travel.
      const focused = document.activeElement?.closest('.venn');
      const reveal = focused ? 1 : Math.min(1, Math.max(0, (progress - travelConfig.revealFrom) / (1 - travelConfig.revealFrom)));
      document.documentElement.style.setProperty('--reveal', String(reveal));
      // Edge-triggered, not continuous: the label stagger is a fixed-length entrance,
      // not something to keep recomputing every frame while merged stays true. It starts
      // partway through the reveal (while the circle is still visibly solidifying), not
      // only once fully merged — hysteresis (0.45 vs 0.3) keeps it from flickering
      // if the visitor lingers right around the threshold.
      if (focused || reveal >= .45) travelMerged = true;
      else if (reveal < .3) travelMerged = false;
      about.classList.toggle('is-merged', travelMerged);

      travelPairs.forEach((pair, index) => {
        const box = travelGeometry.boxes[index];
        pair.form.style.setProperty('--tx', `${eased * box.dx}px`);
        pair.form.style.setProperty('--ty', `${eased * box.dy}px`);
        pair.form.style.setProperty('--s', String(1 + eased * (box.scale - 1)));
      });
    }
    function scheduleTravel() {
      if (!travelFrame) travelFrame = requestAnimationFrame(updateTravel);
    }
    function refreshTravel() {
      measureTravel();
      scheduleTravel();
    }
    window.addEventListener('scroll', scheduleTravel, { passive: true });
    const travelResize = new ResizeObserver(refreshTravel);
    [hero, about, venn].forEach(element => travelResize.observe(element));
    travelMedia.addEventListener('change', refreshTravel);
    venn.addEventListener('focusin', scheduleTravel);
    venn.addEventListener('focusout', scheduleTravel);
    document.fonts.ready.then(refreshTravel);
    refreshTravel();
  }
}
