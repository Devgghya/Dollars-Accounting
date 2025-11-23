document.addEventListener('DOMContentLoaded',function(){
  // mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  navToggle && navToggle.addEventListener('click', ()=>{
    if(mainNav.style.display === 'block') mainNav.style.display = '';
    else mainNav.style.display = 'block';
  });

  // set year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // fade-in on scroll
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
      }
    });
  },{threshold:0.12});

  document.querySelectorAll('.card, .service-card, .testimonial, .post-card, .team-member').forEach(el=>{
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // simple contact form handler (dummy)
  const form = document.querySelector('.contact-form');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      alert('Thanks — this is a demo contact form. Replace with your form handler.');
      form.reset();
    });
  }
});
