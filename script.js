const tabs = document.querySelectorAll('.menu-tabs button');
const cards = document.querySelectorAll('.food-card');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
    const category = tab.dataset.category;
    cards.forEach((card) => {
      if (category === 'all' || card.classList.contains(category)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Clean Lightbox Menu Modal Logic
const modal = document.getElementById('fullMenuModal');
const openModalBtns = document.querySelectorAll('.open-menu-modal');
const closeModalBtn = document.getElementById('closeMenuModalBtn');
const modalOverlay = document.getElementById('menuModalOverlay');
const lightboxImg = document.getElementById('lightboxImg');
const prevCardBtn = document.getElementById('prevCardBtn');
const nextCardBtn = document.getElementById('nextCardBtn');

const cardImages = ['card-1.jpg', 'card-2.jpg', 'card-3.jpg', 'card-4.jpg'];
let currentCardIndex = 0;

function updateLightboxImage(index) {
  currentCardIndex = (index + cardImages.length) % cardImages.length;
  if (lightboxImg) {
    lightboxImg.src = cardImages[currentCardIndex];
  }
}

function openModal(index = 0) {
  if (modal) {
    updateLightboxImage(index);
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

openModalBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const cardIndex = parseInt(btn.dataset.cardIndex || '0', 10);
    openModal(cardIndex);
  });
});

if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

if (prevCardBtn) {
  prevCardBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    updateLightboxImage(currentCardIndex - 1);
  });
}

if (nextCardBtn) {
  nextCardBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    updateLightboxImage(currentCardIndex + 1);
  });
}

document.addEventListener('keydown', (e) => {
  if (modal && modal.classList.contains('open')) {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') updateLightboxImage(currentCardIndex - 1);
    if (e.key === 'ArrowRight') updateLightboxImage(currentCardIndex + 1);
  }
});

// Testimonials Slider
const quotes = [
  ['“The burger was mind blowing, each bite was juicy and tender. The bun was soft and the sauces were just awesome.”', 'ABDUL R.'],
  ['“I highly recommend their Chicken Fillet Burger, wraps, and fries. Everything was neat, fresh, and served on time.”', 'IMRAN I.'],
  ['“The Fillet Wrap is full of flavor and the Chicken Thrill Burger is crispy, juicy, and super satisfying.”', 'SULEMAN A.'],
  ['“I have never had a wrap & pizza this good before. The unique sauces set them apart from everyone else.”', 'RAFAY T.']
];
let quoteIndex = 0;
const quote = document.querySelector('#quote');
const quoteBy = document.querySelector('#quoteBy');

function showQuote(direction) {
  quoteIndex = (quoteIndex + direction + quotes.length) % quotes.length;
  if (quote && quoteBy) {
    quote.style.opacity = '0';
    setTimeout(() => {
      quote.textContent = quotes[quoteIndex][0];
      quoteBy.innerHTML = `${quotes[quoteIndex][1]} <span>● verified sauce fan</span>`;
      quote.style.opacity = '1';
    }, 180);
  }
}

const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#previous');
if (nextBtn) nextBtn.addEventListener('click', () => showQuote(1));
if (prevBtn) prevBtn.addEventListener('click', () => showQuote(-1));
if (quote) quote.style.transition = 'opacity .18s ease';

const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) navLinks.classList.toggle('open');
  });
}