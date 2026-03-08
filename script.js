// Tailwind Configuration
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
            colors: {
                devops: {
                    dark: '#0f172a',
                    light: '#1e293b',
                    accent: '#38bdf8', // Sky blue
                    green: '#10b981', // Emerald
                    cmd: '#1e1e1e'
                }
            },
            animation: {
                'blob': 'blob 7s infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                }
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Contact Form Handling (Mock)
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button[type="submit"]');
            const btnText = document.getElementById('btn-text');
            const btnIcon = document.getElementById('btn-icon');
            const statusDiv = document.getElementById('form-status');
            const originalText = btnText.innerText;
            
            btn.disabled = true;
            btnText.innerText = 'Sending...';
            btnIcon.classList.remove('fa-paper-plane');
            btnIcon.classList.add('fa-spinner', 'fa-spin');
            btn.classList.add('opacity-75', 'cursor-not-allowed');
            
            setTimeout(() => {
                btnText.innerText = 'Sent!';
                btnIcon.classList.remove('fa-spinner', 'fa-spin');
                btnIcon.classList.add('fa-check');
                btn.classList.remove('bg-devops-accent', 'text-slate-900', 'hover:bg-sky-400');
                btn.classList.add('bg-green-500', 'text-white');
                statusDiv.classList.remove('hidden');
                contactForm.reset();
                setTimeout(() => {
                    btn.disabled = false;
                    btnText.innerText = originalText;
                    btnIcon.classList.remove('fa-check');
                    btnIcon.classList.add('fa-paper-plane');
                    btn.classList.remove('opacity-75', 'cursor-not-allowed', 'bg-green-500', 'text-white');
                    btn.classList.add('bg-devops-accent', 'text-slate-900', 'hover:bg-sky-400');
                    statusDiv.classList.add('hidden');
                }, 3000);
            }, 2000);
        });
    }
});