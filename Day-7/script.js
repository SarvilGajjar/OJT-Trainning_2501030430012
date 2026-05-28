const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const contactForm = document.getElementById('contactForm');
const formNotice = document.getElementById('formNotice');
menuBtn?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  formNotice.classList.remove('hidden');
  contactForm.reset();
  setTimeout(() => formNotice.classList.add('hidden'), 4000);
});
