// Script for navigation bar
const bars = document.getElementById('bar');
const nav = document.getElementById('navbar');

if(bars) {
    bars.addEventListener('click', () => {
        nav.classList.add('active');
    })
}