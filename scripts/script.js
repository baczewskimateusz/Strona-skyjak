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
        console.log(items)
                items.forEach(item => {
                    item.addEventListener('click', function() {
                        const itemsFooter = this.nextElementSibling;
                        if (itemsFooter.style.display === "none" || itemsFooter.style.display === "") {
                            itemsFooter.style.display = "flex";
                            this.classList.add('active');
                        } else {
                            itemsFooter.style.display = "none";
                            this.classList.remove('active');
                        }
                    });
                });
        });

});


