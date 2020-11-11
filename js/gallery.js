const image = document.querySelector('.main-image');
const left = document.querySelector('.fa-angle-left');
const right = document.querySelector('.fa-angle-right');

// creating image counter variable
let i = 1;

// event listener that displays next image
right.addEventListener('click', () => {
    if( i === 6 ) {
        i = 0;
    }

    image.src = `images/img-onama/img-${++i}.jpg`;

    // giving opacity to all images that are not shown in the main frame
    // this is checked when user clicks on right arrow
    images.forEach((value) => {
        if(value.src !== image.src) {
            value.style.opacity = '0.5';
        } else {
            value.style.opacity = '1';
        }
    })
});

// event listener that displays previous image
left.addEventListener('click', () => {
    if( i === 1 ) {
        i = 7;
    }

    image.src = `images/img-onama/img-${--i}.jpg`;

    // giving opacity to all images that are not shown in the main frame
    // this is checked when user clicks on left arrow
    images.forEach((value) => {
        if(value.src !== image.src) {
            value.style.opacity = '0.5';
        } else {
            value.style.opacity = '1';
        }
    })
});

const images = document.querySelectorAll('.gallery > img');
console.log(images);

// giving all the images bellow the main one event listener that displays them in the main frame on click
images.forEach((value) => {
    if(value.src !== image.src) {
        value.style.opacity = '0.5';
    }

    // giving listener to every img
    value.addEventListener('click', () => {
        image.src = value.src;

        // giving opacity to all images that are not shown in the main frame
        // this check is activated when user clicks on one of the images below
        images.forEach((value) => {
            if(value.src !== image.src) {
                value.style.opacity = '0.5';
            } else {
                value.style.opacity = '1';
            }
        })
    })
})