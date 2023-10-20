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
