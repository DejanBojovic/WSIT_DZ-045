const ham = document.querySelector('.ham');
const menu = document.querySelector('.nav');

// event listener for showing hamburger menu on click
const dropdown = document.querySelector('.hamburger-menu');
ham.addEventListener('click', () => {
    if(dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
})

// we check if we need to display hamburger menu or regular menu
if(window.innerWidth < 1000) {
    menu.style.display = 'none';
    ham.style.display = 'block';
} else {
    menu.style.display = 'block';
    ham.style.display = 'none';
    dropdown.style.display = 'none';
}

// event listener that fires every time user resizes screen
// then we check if screen is apropriate size for hamburger menu or not
window.addEventListener('resize', () => {
    if(window.innerWidth < 1000) {
        menu.style.display = 'none';
        ham.style.display = 'block';
    } else {
        menu.style.display = 'block';
        ham.style.display = 'none';
        dropdown.style.display = 'none';
    }
})