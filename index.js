// ===== NAVBAR TOGGLE =====
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ===== SCROLL SECTIONS =====
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                let link = document.querySelector('header nav a[href*=' + id + ']');
                if (link) link.classList.add('active');
            });
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close mobile navbar on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Footer animation
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
};

// ===== READ MORE / READ LESS (ABOUT) =====
function toggleAbout(e) {
    e.preventDefault();
    let extra = document.getElementById('about-extra');
    let btn = document.getElementById('read-more-btn');

    if (extra.classList.contains('about-extra-hidden')) {
        extra.classList.remove('about-extra-hidden');
        extra.classList.add('about-extra-visible');
        btn.textContent = 'Read Less';
    } else {
        extra.classList.remove('about-extra-visible');
        extra.classList.add('about-extra-hidden');
        btn.textContent = 'Read More';
    }
}

// ===== CONTACT FORM — EmailJS =====
// EmailJS yuklanishi
(function () {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.onload = function () {
        // O'zingizning EmailJS Public Key ni shu yerga kiriting
        emailjs.init('YOUR_PUBLIC_KEY');
    };
    document.head.appendChild(script);
})();

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.getElementById('contact-name').value.trim();
    let email = document.getElementById('contact-email').value.trim();
    let phone = document.getElementById('contact-phone').value.trim();
    let subject = document.getElementById('contact-subject').value.trim();
    let message = document.getElementById('contact-message').value.trim();

    let statusEl = document.getElementById('form-status');
    let btnText = document.getElementById('btn-text');
    let btnLoader = document.getElementById('btn-loader');
    let submitBtn = document.getElementById('submit-btn');

    // Show loading state
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline';
    submitBtn.disabled = true;
    statusEl.className = 'form-status';
    statusEl.style.display = 'none';

    // EmailJS template params
    // emailjs.com saytidan SERVICE_ID va TEMPLATE_ID oling
    let templateParams = {
        from_name: name,
        from_email: email,
        phone: phone || 'Not provided',
        subject: subject,
        message: message,
        to_email: 'nekruzweb06@gmail.com'
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function () {
            statusEl.textContent = '✅ Message sent successfully! I will get back to you soon.';
            statusEl.className = 'form-status success';
            document.getElementById('contact-form').reset();
            setTimeout(() => {
                statusEl.style.display = 'none';
            }, 5000);
        })
        .catch(function (error) {
            console.error('EmailJS error:', error);
            // Fallback: mailto link
            let mailtoLink = `mailto:nekruzweb06@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone + '\n\n' + message)}`;
            window.location.href = mailtoLink;
            statusEl.textContent = '📧 Opening your email client to send the message...';
            statusEl.className = 'form-status success';
        })
        .finally(function () {
            btnText.style.display = 'inline';
            btnLoader.style.display = 'none';
            submitBtn.disabled = false;
        });
});
