// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const darkModeToggle = document.getElementById('checkbox');
    const body = document.body;
    const sections = document.querySelectorAll('.section-padding');
    const progressBars = document.querySelectorAll('.progress-bar');
    const typingElement = document.querySelector('.typing-element');
    const typingSubtitle = document.querySelector('.typing-subtitle');
    
    // Create and append hamburger menu
    const navLeft = document.querySelector('.nav-left');
    const navRight = document.querySelector('.nav-right');
    
    const hamburgerMenu = document.createElement('div');
    hamburgerMenu.className = 'hamburger-menu';
    hamburgerMenu.innerHTML = '<span></span><span></span><span></span>';
    navLeft.appendChild(hamburgerMenu);
    
    // Typing effect data
    const typingText = "Full-Stack Web Developer";
    const typingSubText = "Specializing in MERN Stack Development";
    let typingIndex = 0;
    let subtitleIndex = 0;
    
    // Initialize typing effect
    function typeWriter() {
        if (typingIndex < typingText.length) {
            typingElement.textContent += typingText.charAt(typingIndex);
            typingIndex++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(typeSubtitle, 500);
        }
    }
    
    function typeSubtitle() {
        if (subtitleIndex < typingSubText.length) {
            typingSubtitle.textContent += typingSubText.charAt(subtitleIndex);
            subtitleIndex++;
            setTimeout(typeSubtitle, 50);
        }
    }
    
    // Start typing effect
    setTimeout(typeWriter, 1000);
    
    // Dark mode toggle
    darkModeToggle.addEventListener('change', function() {
        body.classList.toggle('dark-mode');
        
        // Save preference to localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
    
    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }
    
    // Hamburger menu toggle
    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('active');
        navRight.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-right ul li a').forEach(item => {
        item.addEventListener('click', function() {
            hamburgerMenu.classList.remove('active');
            navRight.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });
    
    // Scroll animations
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                // Add 'visible' class to elements that are in view
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Animate progress bars when in view
                    if (entry.target.id === 'Skills') {
                        animateProgressBars();
                    }
                }
            });
        },
        {
            threshold: 0.1, // Trigger when 10% of the element is visible
        }
    );
    
    // Observe all sections for fade-in animation
    sections.forEach((section) => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
    
    // Animate progress bars
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.setProperty('--width', width + '%');
        });
    }
    
    // Active navigation link based on scroll position
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                document.querySelectorAll('.nav-right ul li a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Listen for scroll events to update active nav link
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const phone = contactForm.querySelector('input[type="tel"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Basic form validation
        if (!name || !email || !message) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Here you would typically send the form data to a server
        // For now, let's simulate a form submission
        const formData = {
            name,
            email,
            phone,
            message
        };
        
        console.log('Form Data:', formData);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
    
    // Project hover effects for mobile
    const projects = document.querySelectorAll('.project');
    
    if ('ontouchstart' in window) {
        projects.forEach(project => {
            project.addEventListener('click', function() {
                // Reset all projects
                projects.forEach(p => p.classList.remove('active-project'));
                // Toggle active class on clicked project
                this.classList.toggle('active-project');
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            // Skip for popup links
            if (targetId.startsWith('#hidden-img')) {
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Initialize
    updateActiveNavLink();
    
});


    localStorage.setItem("flag", "false")
    function displayInfo(){
        let flag= localStorage.getItem("flag");
        if(flag==="false"){
        p= document.createElement("p");
        p.innerText= "hello"
        document.querySelector(".about-content").appendChild(p);
        console.log(p)
        }
        localStorage.setItem("flag", "true") 
    }