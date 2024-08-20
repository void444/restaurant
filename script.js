
const textContainer = document.getElementById('addtocart1');
const underlineItems = document.querySelectorAll('.addtocart1');

underlineItems.forEach(item => {
    const redEffect = document.createElement('div');
    redEffect.classList.add('red-underline');
    item.appendChild(redEffect);

    item.addEventListener('mouseover', () => {
        const textWidth = item.clientWidth;
        redEffect.style.width = `${textWidth}px`;
        item.style.color = 'red'; 
    });

    item.addEventListener('mouseout', () => {
        redEffect.style.width = '0';
        item.style.color = ''; 
    });
});


  
  
  