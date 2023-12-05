document.addEventListener('DOMContentLoaded', function() {
    // make nav bar small on scroll
    window.addEventListener('scroll', function() {
        var navbar = document.querySelector('.navbar');
        console.log(navbar);
        if (window.scrollY > 20) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });

    // toggle menu/navbar on menu btn click
    document.querySelector('.menu-btn').addEventListener('click', function() {
        console.log("clicked");
        var ActiveToggle = document.getElementsByClassName('menu')[0]
        console.log("ActiveToggle: ", ActiveToggle)
        if (ActiveToggle.classList.contains("active")) {
            ActiveToggle.classList.remove("active");
            document.querySelector('.menu-btn i').classList.remove("active");
        }
        else{
            ActiveToggle.classList.add("active");
            document.querySelector('.menu-btn i').classList.add("active");
        }


    });

    //close menu if active and if menu-btn was clicked
    //smooth navigation transition
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            var ActiveToggle = document.getElementsByClassName('menu')[0]
            if (ActiveToggle.classList.contains("active")) {
                ActiveToggle.classList.remove("active");
                document.querySelector('.menu-btn i').classList.remove("active");
            }
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // rotating text
    function rotatingText() {
        const rotatingText = document.getElementById('rotating-text');
        const texts = ['developer', 'problem sovler', 'humanist'];
        let index = 0;

        function rotateText() {
            rotatingText.style.opacity = 0;
            setTimeout(() => {
                rotatingText.textContent = texts[index];
                rotatingText.style.opacity = 1;
                index = (index + 1) % texts.length;
            }, 300); // Adjust the duration to match the CSS transition duration
        }

        rotateText(); // Initial rotation

        setInterval(rotateText, 1500); // Adjust the interval for changing text
    }
    rotatingText();
});