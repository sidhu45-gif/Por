// Initialize EmailJS
(function() {
    emailjs.init("XDFcH490Lm11vYHzR");
})();

// Typing Effect
const typingText = document.getElementById('typingText');
const textToType = 'Pottabathini Sidhu';
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!isDeleting && charIndex < textToType.length) {
        typingText.textContent = textToType.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeEffect, 150);
    } else if (isDeleting && charIndex > 0) {
        typingText.textContent = textToType.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeEffect, 100);
    } else if (charIndex === textToType.length) {
        setTimeout(() => {
            isDeleting = true;
            typeEffect();
        }, 2000);
    } else if (charIndex === 0) {
        isDeleting = false;
        setTimeout(typeEffect, 500);
    }
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    setTimeout(typeEffect, 500);
});

// Hamburger Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const menuClose = document.getElementById('menuClose');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

menuClose.addEventListener('click', () => {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// Theme Toggle (Dark/Light)
const themeToggleBtn = document.getElementById('themeToggleBtn');
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-theme');
    themeToggleBtn.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const icon = themeToggleBtn.querySelector('i');
    
    if (body.classList.contains('light-theme')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    }
});

// Color Picker
const colorPickerBtn = document.getElementById('colorPickerBtn');
const colorPickerDropdown = document.getElementById('colorPickerDropdown');
const colorOptions = document.querySelectorAll('.color-option');

colorPickerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    colorPickerDropdown.classList.toggle('active');
});

// Close color picker when clicking outside
document.addEventListener('click', (e) => {
    if (!colorPickerDropdown.contains(e.target) && !colorPickerBtn.contains(e.target)) {
        colorPickerDropdown.classList.remove('active');
    }
});

// Color theme options
colorOptions.forEach(option => {
    option.addEventListener('click', () => {
        const color = option.getAttribute('data-color');
        
        // Remove all theme classes
        body.classList.remove('theme-teal', 'theme-purple', 'theme-blue', 'theme-orange', 'theme-pink', 'theme-emerald');
        
        // Add selected theme
        if (color !== 'teal') {
            body.classList.add(`theme-${color}`);
        }
        
        // Save to localStorage
        localStorage.setItem('colorTheme', color);
        
        // Close dropdown
        colorPickerDropdown.classList.remove('active');
    });
});

// Load saved color theme
const savedColorTheme = localStorage.getItem('colorTheme');
if (savedColorTheme && savedColorTheme !== 'teal') {
    body.classList.add(`theme-${savedColorTheme}`);
}

// Scroll Progress Indicator
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Add scroll reveal to sections
window.addEventListener('load', () => {
    // Skills section
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.classList.add('scroll-reveal');
        category.style.animationDelay = `${index * 0.1}s`;
        observer.observe(category);
    });

    // Projects section
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.classList.add('scroll-reveal');
        card.style.animationDelay = `${index * 0.15}s`;
        observer.observe(card);
    });

    // Timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.classList.add('scroll-reveal');
        item.style.animationDelay = `${index * 0.1}s`;
        observer.observe(item);
    });

    // Education cards
    const educationCards = document.querySelectorAll('.education-card');
    educationCards.forEach((card, index) => {
        card.classList.add('scroll-reveal');
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Certification cards
    const certCards = document.querySelectorAll('.cert-card');
    certCards.forEach((card, index) => {
        card.classList.add('scroll-reveal');
        card.style.animationDelay = `${(index % 3) * 0.1}s`;
        observer.observe(card);
    });

    // Achievement cards
    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach((card, index) => {
        card.classList.add('scroll-reveal');
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // About section
    const aboutTexts = document.querySelectorAll('.about-text');
    aboutTexts.forEach((text, index) => {
        text.classList.add('scroll-reveal');
        text.style.animationDelay = `${index * 0.2}s`;
        observer.observe(text);
    });
});

// Certifications Filter
const certFilterBtns = document.querySelectorAll('.cert-filter-btn');
const certCardsAll = document.querySelectorAll('.cert-card');

certFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        certFilterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const category = btn.getAttribute('data-category');
        
        certCardsAll.forEach(card => {
            if (category === 'all') {
                card.classList.remove('hidden');
                setTimeout(() => {
                    card.style.animation = 'fadeIn 0.5s ease forwards';
                }, 50);
            } else {
                const cardCategory = card.getAttribute('data-category');
                if (cardCategory === category) {
                    card.classList.remove('hidden');
                    setTimeout(() => {
                        card.style.animation = 'fadeIn 0.5s ease forwards';
                    }, 50);
                } else {
                    card.classList.add('hidden');
                }
            }
        });
    });
});

// Contact Form with EmailJS
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Send email using EmailJS
    emailjs.sendForm('service_ykyz4wx', 'template_z7skcqi', contactForm)
        .then(() => {
            // Success
            formStatus.textContent = 'Message sent successfully! I\'ll get back to you soon.';
            formStatus.className = 'form-status success';
            contactForm.reset();
            
            // Reset button
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                formStatus.style.display = 'none';
            }, 5000);
        })
        .catch((error) => {
            // Error
            console.error('EmailJS Error:', error);
            formStatus.textContent = 'Oops! Something went wrong. Please try again or email me directly.';
            formStatus.className = 'form-status error';
            
            // Reset button
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                formStatus.style.display = 'none';
            }, 5000);
        });
});

// Smooth scroll with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add active state to nav links on scroll
const sections = document.querySelectorAll('section[id]');

function activateNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', activateNavOnScroll);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroSection.style.opacity = 1 - scrolled / 700;
    }
});

// Floating Shapes Animation
function createFloatingShapes() {
    const shapesContainer = document.createElement('div');
    shapesContainer.className = 'floating-shapes';
    document.body.appendChild(shapesContainer);
    
    for (let i = 0; i < 10; i++) {
        const shape = document.createElement('div');
        shape.className = 'floating-shape';
        shape.style.left = Math.random() * 100 + '%';
        shape.style.animationDelay = Math.random() * 10 + 's';
        shape.style.animationDuration = (Math.random() * 10 + 10) + 's';
        shapesContainer.appendChild(shape);
    }
}

createFloatingShapes();

// Counter Animation for Achievement Numbers
function animateCounters() {
    const counters = document.querySelectorAll('.achievement-card h3');
    
    counters.forEach(counter => {
        const text = counter.textContent;
        const match = text.match(/(\d+)\+/);
        
        if (match) {
            const target = parseInt(match[1]);
            let current = 0;
            const increment = target / 50;
            const prefix = text.split(match[0])[1];
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target + '+ ' + prefix;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current) + '+ ' + prefix;
                }
            }, 30);
        }
    });
}

// Trigger counter animation when achievements section is visible
const achievementsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            achievementsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const achievementsSection = document.querySelector('.achievements-section');
if (achievementsSection) {
    achievementsObserver.observe(achievementsSection);
}

// Add custom cursor trail effect
let lastX = 0;
let lastY = 0;
let isMoving = false;

document.addEventListener('mousemove', (e) => {
    if (!isMoving) {
        isMoving = true;
        setTimeout(() => {
            isMoving = false;
        }, 50);
        
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.cssText = `
            position: fixed;
            width: 5px;
            height: 5px;
            background: var(--primary-color);
            border-radius: 50%;
            pointer-events: none;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            opacity: 0.6;
            z-index: 9999;
            animation: trailFade 1s ease forwards;
        `;
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
            trail.remove();
        }, 1000);
    }
    
    lastX = e.clientX;
    lastY = e.clientY;
});

// Add CSS for trail animation
const style = document.createElement('style');
style.textContent = `
    @keyframes trailFade {
        to {
            opacity: 0;
            transform: scale(2);
        }
    }
    
    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
        z-index: 9999;
        transition: width 0.2s ease;
    }
    
    .floating-shapes {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
        overflow: hidden;
    }
    
    .floating-shape {
        position: absolute;
        width: 20px;
        height: 20px;
        background: var(--primary-color);
        opacity: 0.1;
        border-radius: 50%;
        animation: floatUp linear infinite;
    }
    
    @keyframes floatUp {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0.1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Easter egg: Konami code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        // Activate party mode!
        document.body.style.animation = 'rainbow 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);

// Performance optimization: Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Text Reveal Animation on Scroll
const textRevealElements = document.querySelectorAll('.about-text, .project-description');
textRevealElements.forEach(element => {
    const text = element.textContent;
    element.innerHTML = '';
    
    text.split(' ').forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word + ' ';
        span.style.opacity = '0';
        span.style.display = 'inline-block';
        span.style.animation = `wordFadeIn 0.5s ease ${index * 0.05}s forwards`;
        element.appendChild(span);
    });
});

const wordFadeStyle = document.createElement('style');
wordFadeStyle.textContent = `
    @keyframes wordFadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
        from {
            opacity: 0;
            transform: translateY(10px);
        }
    }
`;
document.head.appendChild(wordFadeStyle);

// Console Easter Egg
console.log('%c👋 Hello there!', 'font-size: 24px; font-weight: bold; color: #0d9488;');
console.log('%cLooking for something? Feel free to reach out!', 'font-size: 14px; color: #14b8a6;');
console.log('%c📧 pottabathinisidhu45@gmail.com', 'font-size: 12px; color: #22d3ee;');
console.log('%c🎮 Try the Konami code: ↑ ↑ ↓ ↓ ← → ← → B A', 'font-size: 12px; color: #06b6d4;');

// Magnetic Effect on Buttons
const buttons = document.querySelectorAll('.btn, .theme-btn, .cert-filter-btn');
buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = '';
    });
});
