const tabs = document.querySelectorAll('.menu-tabs button');
const cards = document.querySelectorAll('.food-card');
tabs.forEach((tab) => tab.addEventListener('click', () => {
  tabs.forEach((item) => item.classList.remove('active'));
  tab.classList.add('active');
  const category = tab.dataset.category;
  cards.forEach((card) => card.classList.toggle('hidden', category !== 'all' && !card.classList.contains(category)));
}));
const quotes = [['“The burger was mind blowing, each bite was juicy and tender. The bun was soft and the sauces were just awesome.”', 'ABDUL R.'], ['“I highly recommend their Chicken Fillet Burger, wraps, and fries. Everything was neat, fresh, and served on time.”', 'IMRAN I.'], ['“The Tortilla Wrap is full of flavor and the Wehshi Burger is crispy, juicy, and super satisfying.”', 'SULEMAN A.'], ['“I have never had a wrap this good before. The unique sauces set them apart from everyone else.”', 'RAFAY T.']];
let quoteIndex = 0;
const quote = document.querySelector('#quote');
const quoteBy = document.querySelector('#quoteBy');
function showQuote(direction) { quoteIndex = (quoteIndex + direction + quotes.length) % quotes.length; quote.style.opacity = '0'; setTimeout(() => { quote.textContent = quotes[quoteIndex][0]; quoteBy.innerHTML = `${quotes[quoteIndex][1]} <span>● verified sauce fan</span>`; quote.style.opacity = '1'; }, 180); }
document.querySelector('#next').addEventListener('click', () => showQuote(1));
document.querySelector('#previous').addEventListener('click', () => showQuote(-1));
quote.style.transition = 'opacity .18s ease';
document.querySelector('.menu-toggle').addEventListener('click', () => document.querySelector('.nav-links').classList.toggle('open'));