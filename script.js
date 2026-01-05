(function () {
  const menuBtn = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-menu]');
  const page = document.body;

  if (!menuBtn || !menu) return;

  function closeMenu() {
    menu.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  function toggleMenu() {
    const isOpen = menu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  }

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close menu when clicking outside
  page.addEventListener('click', () => closeMenu());

  // Keep clicks inside menu from closing it
  menu.addEventListener('click', (e) => e.stopPropagation());

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Highlight current page in menu
  const current = window.location.pathname.split('/').pop() || 'index.html';
  menu.querySelectorAll('a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current) a.classList.add('active');
  });
})();
