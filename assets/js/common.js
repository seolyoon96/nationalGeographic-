// header
const headerEl = document.querySelector('#header');

document.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        headerEl.classList.add('active');
    } else {
        headerEl.classList.remove('active');
    }
});
