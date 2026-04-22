// Toggle mobile menu
function toggleMenu() {
  const menu = document.getElementById('menu');
  const burger = document.querySelector('.burger');
  menu.classList.toggle('show');
  burger.classList.toggle('active');
}
// Close menu when a link is clicked
document.querySelectorAll('.nav-links li a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('menu').classList.remove('show');
    document.querySelector('.burger').classList.remove('active');
  });
});
// Close menu when clicking outside
document.addEventListener('click', (e) => {
  const navbar = document.querySelector('.navbar');
  const menu = document.getElementById('menu');
  const burger = document.querySelector('.burger');
  if (!navbar.contains(e.target) && menu.classList.contains('show')) {
    menu.classList.remove('show');
    burger.classList.remove('active');
  }
});
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
document.querySelectorAll('.device-tab').forEach(button => {
  button.addEventListener('click', () => {
    // Update active button state
    document.querySelectorAll('.device-tab').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const target = button.getAttribute('data-device');
    const groups = document.querySelectorAll('.pricing-group');
    groups.forEach(group => {
      if (target === 'all') {
        group.classList.add('active'); // Show everything
      } else {
        group.classList.remove('active'); // Hide others
      }
    });
    if (target !== 'all') {
      document.getElementById('plans-' + target).classList.add('active');
    }
  });
});




