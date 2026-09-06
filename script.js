// Simple Category Filtering
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-btn');
  const rows = document.querySelectorAll('.work-row');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      rows.forEach(row => {
        if (filter === 'all' || row.getAttribute('data-cat') === filter) {
          row.style.display = 'flex';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });
});

// Lightbox Modal
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

function openLightbox(el) {
  const imgSrc = el.querySelector('img').src;
  lightboxImg.src = imgSrc;
  lightbox.classList.add('active');
}

function closeLightbox() {
  lightbox.classList.remove('active');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});
