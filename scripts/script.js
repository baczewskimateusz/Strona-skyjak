document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;


    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-bar-links");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
    });


    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;

        const items = document.querySelectorAll('.items-name-footer');
        items.forEach(item => {
            item.addEventListener('click', function() {
                const isActive = this.classList.contains('active');
                items.forEach(i => {
                    i.classList.remove('active');
                    i.nextElementSibling.style.display = "none";
                });

                if (!isActive) {
                    this.nextElementSibling.style.display = "flex";
                    this.classList.add('active');
                }
            });
        });
    });
});

