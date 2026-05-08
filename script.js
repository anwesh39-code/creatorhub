const buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {

  btn.addEventListener('mouseenter', () => {

    btn.style.transform = 'translateY(-3px) scale(1.03)';
    btn.style.transition = '0.3s ease';
    btn.style.boxShadow = '0 10px 30px rgba(77,163,255,0.35)';

  });

  btn.addEventListener('mouseleave', () => {

    btn.style.transform = 'translateY(0px) scale(1)';
    btn.style.boxShadow = 'none';

  });

});


window.addEventListener('scroll', () => {

  const header = document.querySelector('header');

  if(window.scrollY > 20){

    header.style.background = 'rgba(5,8,22,0.85)';
    header.style.backdropFilter = 'blur(20px)';
    header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';

  } else {

    header.style.background = 'rgba(5,8,22,0.7)';
    header.style.boxShadow = 'none';

  }

});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function (e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if(target){

      target.scrollIntoView({
        behavior: 'smooth'
      });

    }

  });

});


const contactBtn = document.querySelector('.contact button');

if(contactBtn){

  contactBtn.addEventListener('click', () => {

    alert('Message Sent Successfully 🚀');

  });

}


const buyButtons = document.querySelectorAll('.product-bottom button');

buyButtons.forEach((btn) => {

  btn.addEventListener('click', () => {

    alert('Checkout system coming soon 💳');

  });

});


console.log('CreatorHub Premium Loaded ⚡');