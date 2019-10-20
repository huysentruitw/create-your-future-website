function createNavbarCollapsePixelObserver() {
  const navbarCollapsePixel = document.getElementById('navbar-pixel');

  const observer = new IntersectionObserver(entries => {
    const shouldCollapse = !entries[0].isIntersecting;
    document.querySelector('.navbar.fixed-top').classList.toggle('solid', shouldCollapse);
  });
  observer.observe(navbarCollapsePixel);
}

window.addEventListener('load', (event) => {
  createNavbarCollapsePixelObserver();
});