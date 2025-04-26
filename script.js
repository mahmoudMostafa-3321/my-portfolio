// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.textContent = '☰';
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typed.js for Header
var typed = new Typed('#typed', {
    strings: ['Mahmoud Mustafa Fotoh', 'Web Developer', 'Backend Enthusiast'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Scroll-to-Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
        scrollTopBtn.style.opacity = '1';
    } else {
        scrollTopBtn.style.opacity = '0';
        setTimeout(() => scrollTopBtn.style.display = 'none', 300);
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    themeToggle.querySelector('i').classList.toggle('fa-moon');
    themeToggle.querySelector('i').classList.toggle('fa-sun');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
});

// Load Theme from Local Storage
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}

// Skills Progress Bars Animation
const progressBars = document.querySelectorAll('.progress');
const skillsSection = document.getElementById('skills');

const animateProgressBars = () => {
    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = `${progress}%`;
    });
};

const skillsObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        animateProgressBars();
        skillsObserver.unobserve(skillsSection);
    }
}, { threshold: 0.5 });

skillsObserver.observe(skillsSection);

// Project Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter projects
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                setTimeout(() => card.style.opacity = '1', 50);
            } else {
                card.style.opacity = '0';
                setTimeout(() => card.style.display = 'none', 300);
            }
        });
    });
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
const inputs = contactForm.querySelectorAll('input, textarea');

contactForm.addEventListener('submit', e => {
    e.preventDefault();
    let isValid = true;

    inputs.forEach(input => {
        const errorMessage = input.nextElementSibling;
        errorMessage.textContent = '';
        input.classList.remove('error');

        if (!input.value.trim()) {
            errorMessage.textContent = `${input.placeholder} is required`;
            input.classList.add('error');
            isValid = false;
        } else if (input.type === 'email' && !/\S+@\S+\.\S+/.test(input.value)) {
            errorMessage.textContent = 'Please enter a valid email';
            input.classList.add('error');
            isValid = false;
        }
    });

    if (isValid) {
        alert('Form submitted successfully! (This is a demo - no backend yet)');
        contactForm.reset();
    }
});

// Lazy Load Sections with Intersection Observer
const sections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.classList.add('hidden');
    sectionObserver.observe(section);
}); 
VanillaTilt.init(document.querySelectorAll('.tilt'), {
    max: 15,
    speed: 400,
    glare: true,
    'max-glare': 0.5
});