document.getElementById('contactForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  const name = this.name?.value || '';
  alert('Thank you, ' + (name || 'friend') + '. Registration will open soon — you will receive scheduling details after you register.');
});
