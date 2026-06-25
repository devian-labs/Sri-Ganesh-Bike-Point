const ownerVideo = document.getElementById('owner-video');
const ownerOverlay = document.getElementById('owner-overlay');

ownerOverlay.addEventListener('click', () => {
  ownerVideo.play();
});
ownerVideo.addEventListener('click', () => {
  ownerVideo.paused ? ownerVideo.play() : ownerVideo.pause();
});
ownerVideo.addEventListener('play', () => ownerOverlay.classList.add('hidden'));
ownerVideo.addEventListener('pause', () => ownerOverlay.classList.remove('hidden'));
ownerVideo.addEventListener('ended', () => ownerOverlay.classList.remove('hidden'));

const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('nav-solid', window.scrollY > 10);
}, { passive: true });

function toggleMobileNav() {
  document.getElementById('mobile-nav').classList.toggle('open');
}
function closeMobileNav() {
  document.getElementById('mobile-nav').classList.remove('open');
}
