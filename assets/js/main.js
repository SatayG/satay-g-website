const toggle = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-mobile-nav]');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '×' : '☰';
  });
}
