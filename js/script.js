/*============= toggle icon navbar =============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*============= scroll sections active link =============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
           navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
           }); 
        };
    });
    /*===== sticky navbar =====*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*============= remove toggle icon and navbar when click navbar link (scroll) =============*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*===== scroll reveal =====*/
ScrollReveal({ 
    // reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*===== typed js =====*/
const typed = new Typed('.multiple-text', {
    strings: ['Student at PKN STAN', 'Cyber Security Analyst'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

/*===== response contact me =====*/
function sendMessage() {
    const fullName = document.getElementById("fullName").value;
    const emailAddress = document.getElementById("emailAddress").value;
    const mobileNumber = document.getElementById("mobileNumber").value;
    const emailSubject = document.getElementById("emailSubject").value;
    const message = document.getElementById("message").value
    ;

    const url="https://api.whatsapp.com/send?phone=6281211885418&text=Halo%20Admin%2C%0ASaya%20*"+ fullName +"*%0AEmail%20saya%20*"+ emailAddress +"*%0ANo.Hp%20saya%20*"+ mobileNumber +"*%0ATujuan%20saya%20ngirim%20pesan%20untuk%20*"+ emailSubject +"*%0A%0A*"+ message +"*";

    window.open(url);
}
