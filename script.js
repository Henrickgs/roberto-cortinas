document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.gallery-item').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.innerHTML = `<button aria-label="Fechar">×</button><img src="${link.href}" alt="Trabalho Roberto Cortinas">`;
    Object.assign(overlay.style,{position:'fixed',inset:'0',background:'rgba(0,0,0,.88)',zIndex:'100',display:'grid',placeItems:'center',padding:'30px'});
    const img=overlay.querySelector('img');
    Object.assign(img.style,{maxWidth:'95vw',maxHeight:'90vh',objectFit:'contain',borderRadius:'8px'});
    const btn=overlay.querySelector('button');
    Object.assign(btn.style,{position:'absolute',right:'22px',top:'12px',background:'transparent',border:'0',color:'#fff',fontSize:'42px',cursor:'pointer'});
    const close=()=>overlay.remove();
    btn.addEventListener('click',close);
    overlay.addEventListener('click',e=>{if(e.target===overlay)close()});
    document.body.appendChild(overlay);
  });
});
