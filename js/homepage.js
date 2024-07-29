const timeout = 50;

function getOpacity(element) {
    return parseFloat(window.getComputedStyle(element).getPropertyValue('opacity'));
}

function fadeOut(element, duration = 200) {
    var op = getOpacity(element);  
    console.log(op);
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= 1 / (duration / timeout);
    }, timeout);

    return timer;
}

function fadeIn(element, duration = 200) {
    var op = getOpacity(element);
    console.log('fadeIn', op);
    element.style.display='block';
    var timer = setInterval(function () {
        if (op >= 0.9){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += 1 / (duration / timeout)
    }, timeout);

    return timer;
}

const arrowEmpty = '.bi-arrow-right-circle';
const arrowFill = '.bi-arrow-right-circle-fill';

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.offer-card');

    cards.forEach(card => {
        const iconEmpty = card.querySelector(arrowEmpty);
        const iconFill = card.querySelector(arrowFill);

        var iconInterval, newIconInterval;

        card.addEventListener('mouseenter', function() {
            if (newIconInterval) clearInterval(newIconInterval);
            if (iconInterval) clearInterval(iconInterval);

            iconInterval = fadeOut(iconEmpty);
            newIconInterval = fadeIn(iconFill);
        });

        card.addEventListener('mouseleave', function() {
            if (newIconInterval) clearInterval(newIconInterval);
            if (iconInterval) clearInterval(iconInterval);

            newIconInterval = fadeOut(iconFill);
            iconInterval = fadeIn(iconEmpty);
        });
    });
});