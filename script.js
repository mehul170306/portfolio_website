/**
 * Futuristic Portfolio Interactivity Engine
 * Author: Mehul Gaikwad
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. System Initialization ---
    initLoader();
    initCustomCursor();
    initNavbar();
    initTypingAnimation();
    initScrollReveal();
    init3DTilt();
    initDashboard();
    initModals();
    initContactForm();
    initProjectFilter();
    initThemeSwitch();

    // --- 2. Custom Cursor ---
    function initCustomCursor() {
        const cursor = document.getElementById('cursor');
        const blur = document.getElementById('cursor-blur');

        document.addEventListener('mousemove', (e) => {
            cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            
            // Slightly delayed effect for the blur ring
            setTimeout(() => {
                blur.style.transform = `translate3d(${e.clientX - 20}px, ${e.clientY - 20}px, 0)`;
            }, 50);
        });

        // Hover effects for interactive elements
        const interactives = document.querySelectorAll('a, button, .project-card, .dash-widget');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => {
                blur.style.width = '60px';
                blur.style.height = '60px';
                blur.style.backgroundColor = 'rgba(253, 232, 211, 0.1)';
            });
            el.addEventListener('mouseleave', () => {
                blur.style.width = '40px';
                blur.style.height = '40px';
                blur.style.backgroundColor = 'transparent';
            });
        });
    }

    // --- 3. Typing Animation ---
    function initTypingAnimation() {
        const textElement = document.querySelector('.typing-text');
        const words = [
            "Electronics & Computer Science Student",
            "IoT Enthusiast",
            "Embedded Systems Developer",
            "Smart System Architect"
        ];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function type() {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                textElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50;
            } else {
                textElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                typeSpeed = 2000; // Pause at end
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }

        type();
    }

    // --- 4. 3D Tilt Effect ---
    function init3DTilt() {
        const cards = document.querySelectorAll('.profile-card-3d, .project-card, .about-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
            });
        });
    }

    // --- 5. Scroll Reveal ---
    function initScrollReveal() {
        const reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.1 });

        reveals.forEach(reveal => observer.observe(reveal));
    }

    // --- 6. Dashboard Live Simulation ---
    function initDashboard() {
        const tempVal = document.getElementById('temp-val');
        const loadVal = document.getElementById('load-val');
        const loadCircle = document.getElementById('load-circle');
        const signalVal = document.getElementById('signal-val');
        const bars = document.querySelectorAll('.bar');

        setInterval(() => {
            // Update Temperature
            const temp = (40 + Math.random() * 5).toFixed(1);
            tempVal.textContent = `${temp}°C`;

            // Update System Load
            const load = Math.floor(Math.random() * 80) + 10;
            loadVal.textContent = `${load}%`;
            const offset = 283 - (283 * load / 100);
            loadCircle.style.strokeDashoffset = offset;

            // Update Signal
            const signal = -(60 + Math.floor(Math.random() * 15));
            signalVal.textContent = `${signal} dBm`;

            // Randomize Bars
            bars.forEach(bar => {
                bar.style.height = `${30 + Math.random() * 70}%`;
            });
        }, 3000);
    }

    // --- 7. Modals for Projects ---
    function initModals() {
        const modal = document.getElementById('project-modal');
        const modalBody = document.getElementById('modal-body');
        const closeBtn = document.querySelector('.close-modal');
        const projectBtns = document.querySelectorAll('.btn-view');

        const projectDetails = {
            '3d-product': {
                title: '3D Product Showcase',
                tech: 'Vanilla JS, CSS 3D Transforms',
                desc: 'A cinematic product gallery that leverages hardware-accelerated 3D transforms for a high-end luxury feel. Features immersive zoom and depth tracking.'
            },
            'smart-desk': {
                title: 'Smart Desk Control',
                tech: 'ESP32, WebSockets, JavaScript',
                desc: 'A full-stack control panel for physical desk automation. Manage RGB lighting, monitor height sensors, and control peripheral power states.'
            },
            'workbench': {
                title: 'Electronic Workbench Assistant',
                tech: 'React (Concept), SQL, IoT',
                desc: 'Digital companion for electronics engineering. Integrates real-time component tracking, automated datasheet fetching, and project management.'
            },
            'pcb-analyzer': {
                title: 'AI PCB Analyzer',
                tech: 'OpenCV (Simulated), WebGL',
                desc: 'A conceptual tool using vision algorithms to detect circuit faults. The UI simulates a high-speed scanning process over high-res PCB images.'
            },
            'greenhouse': {
                title: 'Greenhouse OS',
                tech: 'Arduino, ESP32, MQTT, ChartJS',
                desc: 'Autonomous agricultural monitoring system. Provides detailed analytics on soil moisture, light levels, and environmental stability.'
            },
            'bio-signal': {
                title: 'Neural Visualizer',
                tech: 'SVG Animation, Web Audio API',
                desc: 'Visualizing the invisible. A simulation of brain-wave patterns and heart-rate variability using cinematic pulsing SVG paths.'
            }
        };

        projectBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const projectId = btn.closest('.project-card').dataset.project;
                const data = projectDetails[projectId];
                
                modalBody.innerHTML = `
                    <h2 style="font-family: var(--font-heading); color: var(--peach); font-size: 2.5rem; margin-bottom: 20px;">${data.title}</h2>
                    <p style="color: var(--beige); margin-bottom: 20px; font-weight: 600;">Technologies: ${data.tech}</p>
                    <div style="width: 100%; height: 300px; background: var(--glass); border-radius: 20px; margin-bottom: 30px; display: flex; justify-content: center; align-items: center; font-size: 5rem; color: var(--glass-border);">
                        <i class="fas fa-microchip"></i>
                    </div>
                    <p style="font-size: 1.1rem; line-height: 1.8; opacity: 0.8;">${data.desc}</p>
                    <button class="btn-primary" style="margin-top: 30px;">Launch Prototype</button>
                `;
                
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        window.onclick = (event) => {
            if (event.target == modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        };
    }

    // --- 8. Contact Form ---
    function initContactForm() {
        const form = document.getElementById('contact-form');
        const notification = document.getElementById('notification');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulation of sending
            const btn = form.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<span>TRANSCEIVING...</span> <i class="fas fa-sync fa-spin"></i>';
            
            setTimeout(() => {
                btn.innerHTML = '<span>MESSAGE SENT</span> <i class="fas fa-check"></i>';
                showNotification('Transmission Successful: Connection Established.');
                form.reset();
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                }, 3000);
            }, 2000);
        });
    }

    function showNotification(msg) {
        const notification = document.getElementById('notification');
        notification.textContent = msg;
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 5000);
    }

    // --- 9. Navbar, Loader & Progress ---
    function initNavbar() {
        const navbar = document.querySelector('.navbar');
        const mobileToggle = document.querySelector('.mobile-toggle');
        const navLinks = document.querySelector('.nav-links');
        const progressBar = document.getElementById('scroll-progress');

        window.addEventListener('scroll', () => {
            // Navbar Scrolled State
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Scroll Progress
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + "%";
        });

        // Mobile Toggle
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileToggle.querySelector('i').classList.toggle('fa-bars');
            mobileToggle.querySelector('i').classList.toggle('fa-times');
        });

        // Close mobile menu on link click
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileToggle.querySelector('i').classList.add('fa-bars');
                mobileToggle.querySelector('i').classList.remove('fa-times');
            });
        });
    }

    function initLoader() {
        const loader = document.querySelector('.loader-wrapper');
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.visibility = 'hidden';
                }, 1000);
            }, 1500);
        });
    }

    // --- 10. Project Filtering ---
    function initProjectFilter() {
        const filters = document.querySelectorAll('.filter-btn');
        const projects = document.querySelectorAll('.project-card');

        filters.forEach(filter => {
            filter.addEventListener('click', () => {
                // Update active button
                filters.forEach(f => f.classList.remove('active'));
                filter.classList.add('active');

                const filterValue = filter.dataset.filter;

                projects.forEach(project => {
                    if (filterValue === 'all' || project.classList.contains(`category-${filterValue}`)) {
                        project.classList.remove('hide');
                        setTimeout(() => {
                            project.style.opacity = '1';
                            project.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        project.style.opacity = '0';
                        project.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            project.classList.add('hide');
                        }, 500);
                    }
                });
            });
        });
    }

    // --- 11. Theme Switching ---
    function initThemeSwitch() {
        const toggle = document.getElementById('theme-toggle');
        const body = document.body;
        const icon = toggle.querySelector('i');

        toggle.addEventListener('click', () => {
            body.classList.toggle('neon-theme');
            
            if (body.classList.contains('neon-theme')) {
                icon.classList.replace('fa-moon', 'fa-sun');
                showNotification('System Protocol Alpha: Midnight Neon Theme Activated.');
            } else {
                icon.classList.replace('fa-sun', 'fa-moon');
                showNotification('System Protocol Beta: Bordeaux Velvet Theme Activated.');
            }
        });
    }
});
