let scrollpos = window.scrollY;
let navbar = document.getElementById("navbar");

function add_class_on_scroll() {
    navbar.classList.add("navbar-small");
}

function remove_class_on_scroll() {
    navbar.classList.remove("navbar-small");
}

window.addEventListener('scroll', function () {
    scrollpos = this.window.scrollY;
    if (scrollpos > 10) {
        add_class_on_scroll();
    }
    else {
        remove_class_on_scroll();
    }
});


document.querySelector('#year').innerHTML = new Date().getFullYear();