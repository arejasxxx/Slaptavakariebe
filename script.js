document.getElementById('res-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('res-message').innerText =
    'Ačiū! Jūsų rezervacija gauta 🎉';
  this.reset();
});
