window.onscroll = function () {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.classList.add("navbar-hidden");
    } else {
        navbar.classList.remove("navbar-hidden");
    }
};

//smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight, // Adjust for the navbar height
                behavior: 'smooth',
                duration: 1000, // Adjust the duration (in milliseconds) for slower scrolling
            });
        }
    });
});

// Add an event listener to hide the preloader when the content is loaded.
// Add an event listener to hide the preloader after a delay (e.g., 6 seconds).
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.querySelector('.preloader').classList.add('hidden');
    }, 3000); // 6000 milliseconds (6 seconds)
});


// Array of feature text
const featureTexts = ["Word Parsing System", "Document To Database", "Template Management System"];

let currentIndex = 0;
let textIndex = 0;
let isDeleting = false;
let delay = 2000; // Time in milliseconds before starting the next word

document.addEventListener('DOMContentLoaded', function () {
    const featureTexts = ["Word Parsing System", "Document to Database", "Template Management System"];
    let textIndex = 0;
    const featureTextElement = document.getElementById("feature-text");
    let text = "";
    let isDeleting = false;
    let typingSpeed = 100; // Typing speed in milliseconds

    function typeText() {
        const currentText = featureTexts[textIndex];
        if (isDeleting) {
            text = currentText.substring(0, text.length - 1);
        } else {
            text = currentText.substring(0, text.length + 1);
        }
        featureTextElement.innerText = text;

        let typingDelay = isDeleting ? typingSpeed / 2 : typingSpeed * 2;

        if (!isDeleting && text === currentText) {
            typingDelay = 1500; // Delay after completing typing
            isDeleting = true;
        } else if (isDeleting && text === "") {
            isDeleting = false;
            textIndex = (textIndex + 1) % featureTexts.length;
            typingDelay = 500; // Delay before typing the next word
        }

        setTimeout(typeText, typingDelay);
    }

    setTimeout(typeText, 500); // Initial delay before typing starts
});



