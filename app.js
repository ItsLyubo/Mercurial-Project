const card = document.querySelector('.card');
const container = document.querySelector('.container');


const sneaker = document.querySelector('.sneaker img');


container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


container.addEventListener('mouseleave', e => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.transition = '1.5s ease';
    sneaker.style.transform = 'scale(1)';
})

container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';
    sneaker.style.transform = 'translateZ(100px) rotateZ(15deg)';

})



