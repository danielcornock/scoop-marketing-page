function mobileMenu() {
  const button = document.querySelector('.Header-menuButton');
  const nav = document.querySelector('.Header-nav');

  button.addEventListener('click', () => {
    if (nav.classList.contains('mobile-active')) {
      nav.classList.remove('mobile-active');
    } else {
      nav.classList.add('mobile-active');
    }
  });
}

mobileMenu();
