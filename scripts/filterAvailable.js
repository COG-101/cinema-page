document.getElementById('filter-button').addEventListener('click', filterAvailable);

function filterAvailable() {
    
    toggleBool = !toggleBool;

    var filmCard, filmButtons, coverImage, overlayText, filterButton;
    
    filmCard = document.querySelectorAll('.cover-image, .card-info');
    overlayText = document.querySelectorAll('.overlay-text');
    filmButtons = document.querySelectorAll('.card-buttons')
    filterButton = document.getElementById('filter-button');
    coverImage = document.getElementsByClassName('cover-image');

    if (toggleBool === true) {
        filterButton.style.backgroundColor = '#142A98';

        for (i = 0; i < 6; i++) {
            filmCard[i].style.cssText = 'opacity: 0.18; transition-property: opacity; transition-duration: .3s';
        }

        for (i = 0; i < 3; i++) {
            overlayText[i].innerHTML = 'Fully Booked';
            coverImage[i].classList.remove('image-available');
            filmButtons[i].classList.remove('button-available');
            filmButtons[i].style.pointerEvents = 'none'
        }

    } else {
        filterButton.style.backgroundColor = '#2345F3';

        for (i = 0; i < 6; i++) {
            filmCard[i].style.cssText = 'opacity: 1; transition-property: opacity; transition-duration: .3s';
        }

        for (i = 0; i < 3; i++) {
            overlayText[i].innerHTML = '';
            coverImage[i].classList.add('image-available');
            filmButtons[i].classList.add('button-available');
            filmButtons[i].style.pointerEvents = 'auto';
        }
    }
} 



// Just a couple of things to clarify:

// 1. The first loop runs for 6 iterations as I've split the films cards into 2 parts: the image and the card info. This is because I did not want the opacity change to affect the overlay text.
// Hence the double iteration count and also the use of 2 for loops. I tried using :not, however it seems this does not work with the nested content structure I have in my HMTL.
// 2. The toggle bool is so that the function can be toggled on and off.  
