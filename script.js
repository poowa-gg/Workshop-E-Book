// Progress Bar
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';
});

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
});

// Reading Companion Messages
const companion = document.getElementById('companion');
const companionMessage = document.getElementById('companionMessage');

const messages = [
    "Let's explore together! 🌍",
    "Great insights ahead! 💡",
    "You're doing great! 📚",
    "Keep reading! 🌱",
    "Almost there! 🎯",
    "Excellent progress! ⭐"
];

let messageIndex = 0;

// Change companion message on scroll through chapters
const chapters = document.querySelectorAll('.chapter');
const chapterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            messageIndex = (messageIndex + 1) % messages.length;
            companionMessage.textContent = messages[messageIndex];
            companionMessage.classList.add('show');
            
            setTimeout(() => {
                companionMessage.classList.remove('show');
            }, 3000);
        }
    });
}, { threshold: 0.5 });

chapters.forEach(chapter => {
    chapterObserver.observe(chapter);
});

// Companion click interaction
companion.addEventListener('click', () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    companionMessage.textContent = randomMessage;
    companionMessage.classList.add('show');
    
    companion.style.animation = 'none';
    setTimeout(() => {
        companion.style.animation = 'float 3s ease-in-out infinite';
    }, 10);
    
    setTimeout(() => {
        companionMessage.classList.remove('show');
    }, 3000);
});

// Smooth Scrolling for TOC links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile Menu Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Highlight active nav item
const sectionsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, { threshold: 0.3 });

chapters.forEach(chapter => {
    sectionsObserver.observe(chapter);
});

// Add scrolled class to navbar
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add reading time estimation
const calculateReadingTime = () => {
    const text = document.querySelector('.ebook-content').innerText;
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wordsPerMinute);
    return time;
};

// Animate feature cards on hover
document.querySelectorAll('.feature-card, .risk-card, .stakeholder-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add parallax effect to hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / hero.offsetHeight);
    }
});

// Animate numbers or stats if any
const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

// Add entrance animation to interactive boxes
const boxObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.interactive-box, .case-study-box, .insight-box').forEach(box => {
    boxObserver.observe(box);
});

// Easter egg: Konami code for special message
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        companionMessage.textContent = "🎉 You found the secret! You're a true climate champion!";
        companionMessage.classList.add('show');
        companion.style.animation = 'pulse 0.5s ease infinite';
        
        setTimeout(() => {
            companionMessage.classList.remove('show');
            companion.style.animation = 'float 3s ease-in-out infinite';
        }, 5000);
    }
});

// Print-friendly formatting
window.addEventListener('beforeprint', () => {
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        el.classList.add('visible');
    });
});

// Add fade-in animation to page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Track reading progress in localStorage
const saveReadingProgress = () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    localStorage.setItem('climatovate_reading_progress', scrollPercent);
};

const loadReadingProgress = () => {
    const savedProgress = localStorage.getItem('climatovate_reading_progress');
    if (savedProgress && savedProgress > 10) {
        const shouldResume = confirm('Would you like to continue from where you left off?');
        if (shouldResume) {
            const scrollPosition = (savedProgress / 100) * (document.documentElement.scrollHeight - window.innerHeight);
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        }
    }
};

// Save progress every 5 seconds while reading
setInterval(saveReadingProgress, 5000);

// Load progress on page load
window.addEventListener('load', () => {
    setTimeout(loadReadingProgress, 1000);
});

console.log('🌍 Welcome to Climatovate Ltd\'s Hyperlocal Data Workshop!');
console.log('📚 Enjoy your reading journey!');
