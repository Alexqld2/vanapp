const app = document.getElementById('app');

async function loadVans() {
  const response = await fetch('/api/vans');
  const vans = await response.json();
  
  app.innerHTML = '<h1>Vans disponibles</h1>' + vans.map(v => `
    <div style="margin-bottom:20px;">
      <img src="${v.image}" width="200" /><br/>
      <strong>${v.name}</strong><br/>
      Lieu: ${v.location} - Places: ${v.seats} - Prix: $${v.pricePerDay}/jour
    </div>
  `).join('');
}

loadVans();
