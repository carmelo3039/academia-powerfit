 // Mobile Menu Toggle
 const menuToggle = document.querySelector('.menu-toggle');
 const navLinks = document.querySelector('.nav-links');

 menuToggle.addEventListener('click', () => {
     navLinks.classList.toggle('active');
     const icon = menuToggle.querySelector('i');
     icon.classList.toggle('fa-bars');
     icon.classList.toggle('fa-times');
 });

 // Smooth Scrolling
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         const target = document.querySelector(this.getAttribute('href'));
         if (target) {
             target.scrollIntoView({
                 behavior: 'smooth',
                 block: 'start'
             });
             
             // Close mobile menu if open
             navLinks.classList.remove('active');
             const icon = menuToggle.querySelector('i');
             icon.classList.add('fa-bars');
             icon.classList.remove('fa-times');
         }
     });
 });

 // Header Background on Scroll
 window.addEventListener('scroll', () => {
     const header = document.querySelector('header');
     if (window.scrollY > 100) {
         header.style.background = 'rgba(33, 33, 33, 0.98)';
     } else {
         header.style.background = 'rgba(33, 33, 33, 0.95)';
     }
 });

 // Form Submission
 document.querySelector('.contact-form').addEventListener('submit', (e) => {
     e.preventDefault();
     
     // Get form data
     const formData = new FormData(e.target);
     const data = Object.fromEntries(formData);
     
     // Simulate form submission
     alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
     e.target.reset();
 });

 // Gallery Item Click (Simulate Lightbox)
 document.querySelectorAll('.gallery-item').forEach(item => {
     item.addEventListener('click', () => {
         alert('Lightbox da galeria seria aberto aqui com a imagem em tamanho real');
     });
 });

 // CTA Button Tracking
 document.querySelectorAll('.btn-primary, .cta-nav').forEach(button => {
     button.addEventListener('click', (e) => {
         // Simulate analytics tracking
         console.log('CTA clicked:', e.target.textContent);
         
         if (e.target.textContent.includes('Experimente') || 
             e.target.textContent.includes('Agende') || 
             e.target.textContent.includes('Matricule')) {
             
             // Redirect to WhatsApp or contact form
             if (e.target.textContent.includes('Agende')) {
                 e.preventDefault();
                 window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma aula experimental.', '_blank');
             }
         }
     });
 });

 // Intersection Observer for Animations
 const observerOptions = {
     threshold: 0.1,
     rootMargin: '0px 0px -50px 0px'
 };

 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.style.opacity = '1';
             entry.target.style.transform = 'translateY(0)';
         }
     });
 }, observerOptions);

 // Observe elements for animation
 document.querySelectorAll('.about-card, .service-card, .pricing-card, .testimonial-card').forEach(el => {
     el.style.opacity = '0';
     el.style.transform = 'translateY(30px)';
     el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
     observer.observe(el);
 });

 // Pricing Cards Hover Effect Enhancement
 document.querySelectorAll('.pricing-card').forEach(card => {
     card.addEventListener('mouseenter', () => {
         card.style.transform = card.classList.contains('popular') ? 
             'scale(1.05) translateY(-10px)' : 'translateY(-10px)';
     });
     
     card.addEventListener('mouseleave', () => {
         card.style.transform = card.classList.contains('popular') ? 
             'scale(1.05)' : 'translateY(0)';
     });
 });

 // Testimonials Auto-rotation (if needed)
 let currentTestimonial = 0;
 const testimonials = document.querySelectorAll('.testimonial-card');
 
 function rotateTestimonials() {
     testimonials.forEach((testimonial, index) => {
         testimonial.style.opacity = index === currentTestimonial ? '1' : '0.7';
         testimonial.style.transform = index === currentTestimonial ? 'scale(1)' : 'scale(0.95)';
     });
     
     currentTestimonial = (currentTestimonial + 1) % testimonials.length;
 }

 // Auto-rotate testimonials every 5 seconds
 setInterval(rotateTestimonials, 5000);

 // Initialize first testimonial
 rotateTestimonials();

 // Phone number formatting
 const phoneInput = document.getElementById('telefone');
 phoneInput.addEventListener('input', (e) => {
     let value = e.target.value.replace(/\D/g, '');
     value = value.replace(/(\d{2})(\d)/, '($1) $2');
     value = value.replace(/(\d{5})(\d)/, '$1-$2');
     e.target.value = value;
 });

 // Simple loading animation for form
 document.querySelector('.contact-form').addEventListener('submit', function(e) {
     const submitBtn = this.querySelector('button[type="submit"]');
     const originalText = submitBtn.textContent;
     
     submitBtn.textContent = 'Enviando...';
     submitBtn.disabled = true;
     
     setTimeout(() => {
         submitBtn.textContent = originalText;
         submitBtn.disabled = false;
     }, 2000);
 });