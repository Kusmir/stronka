const counters = document.querySelectorAll(".animate-counter");
let animatedCounters = 0;

function throttle(fn, wait) {
  return fn;
  let time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}

function animateCounters() {
  counters.forEach((counter) => {
    if (counter.getAttribute("data-activated") === "true") return;

    const rect = counter.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      counter.innerText = 0;
      const target = parseInt(counter.dataset.target, 10);
      let count = 0;
      const increment = Math.max(1, Math.floor(target / 35));

      function update() {
        if (count < target - increment) {
          count += increment;
          counter.innerText = Math.min(count, target);
          requestAnimationFrame(update); 
        } else {
          counter.innerText = target;
        }
      }

      update();
      counter.setAttribute("data-activated", "true");
      animatedCounters++;
      if (animatedCounters == counters.length)
        window.removeEventListener("scroll", animateCounters);
    }
  });
}

const texts = document.querySelectorAll(".animate-text");
let animatedTexts = 0;

function animateTexts() {
  function generateRandomText(length) {
    const characters = "abcdefghijklmnopqrstuvwxyz";
    result = "";

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * characters.length);
      result += characters[index];
    }

    return result;
  }

  texts.forEach((text) => {
    if (text.getAttribute("data-activated") === "true") return;

    const rect = text.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const target = text.innerText;
      const length = target.length;
      const iterations = 2 * target.length;
      let currentIteration = 0;

      function update() {
        currentIteration++;
        if (currentIteration >= iterations) {
          text.innerText = target;
          return;
        }

        if (currentIteration <= length) {
          text.innerText = generateRandomText(currentIteration);
        } else if (currentIteration < iterations - length) {
          text.innerText = generateRandomText(length);
        } else {
          suffixLength = length - (iterations - currentIteration);
          suffix = target.substring(length - suffixLength);
          prefix = generateRandomText(length - suffixLength);

          text.innerText = prefix.concat(suffix);
        }

        setTimeout(update, 50);
      }

      update();
      animatedTexts++;
      if (animatedTexts == texts.length) 
        window.removeEventListener("scroll", animateTexts);
      text.setAttribute("data-activated", "true");
    }
  });
}

const circles = document.querySelectorAll('.timeline-circle');
let currentCircleId = 0;
let currentCircle = circles[0];
circles[0].style.background = 'rgb(133, 16, 16)';

function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  return (rect.top >= 0 && rect.bottom
    <= (window.innerHeight || document.documentElement.clientHeight));
}

function updateLastVisibleCircle(color) {
  const nextCircleId = currentCircleId + 1;
  if (nextCircleId >= circles.length) {
    window.removeEventListener("scroll", updateLastVisibleCircle);
    return;
  }

  const nextCircle = circles[nextCircleId];
  if (isElementVisible(nextCircle)) {
    if (currentCircle)
      currentCircle.style.background = 'white';
    nextCircle.style.background = 'rgb(133, 16, 16)';

    currentCircle = nextCircle;
    currentCircleId++;
  }
}

window.addEventListener("scroll", () => {
  throttle(animateCounters(), 100);
  animateTexts();
  updateLastVisibleCircle();
});

window.addEventListener("load", () => {
  animateCounters();
  animateTexts();
  updateLastVisibleCircle();
});

