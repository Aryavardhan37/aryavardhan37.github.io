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