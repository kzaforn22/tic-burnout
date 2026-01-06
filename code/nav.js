
async function loadSection(section){
  const target = document.getElementById("content");
  target.innerHTML = `<div class="card"><p class="small">Loading…</p></div>`;
  try{
    const res = await fetch(`sections/${section}.html`);
    const html = await res.text();
    target.innerHTML = html;
    window.location.hash = "content";
    // highlight active
    document.querySelectorAll(".tabs button").forEach(b => b.classList.remove("active"));
  }catch(e){
    target.innerHTML = `<div class="card"><h2>Oops</h2><p>Could not load this section.</p></div>`;
  }
}

// Default landing section
window.addEventListener("DOMContentLoaded", ()=>{
  const hash = (window.location.hash || "").replace("#","");
  const known = ["overview","research","evidence","literature","framework","methods","outcomes","implications","limitations","references","download"];
  if(known.includes(hash)){
    loadSection(hash);
  } else {
    // keep the executive summary card already on page
  }
});
