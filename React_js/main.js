<<<<<<< HEAD
// Update the features array with the new icon classes
const features = [
  {
    icon: `<svg class="icon-base icon-blue">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
      <rect x="9" y="9" width="6" height="6"></rect>
      <line x1="9" y1="1" x2="9" y2="4"></line>
      <line x1="15" y1="1" x2="15" y2="4"></line>
      <line x1="9" y1="20" x2="9" y2="23"></line>
      <line x1="15" y1="20" x2="15" y2="23"></line>
      <line x1="20" y1="9" x2="23" y2="9"></line>
      <line x1="20" y1="14" x2="23" y2="14"></line>
      <line x1="1" y1="9" x2="4" y2="9"></line>
      <line x1="1" y1="14" x2="4" y2="14"></line>
    </svg>`,
    title: "AI Style Analysis",
    description: "Our advanced neural networks analyze your wardrobe and provide personalized style recommendations based on your preferences and current trends."
  },
  {
    icon: `<svg class="icon-base icon-blue">
      <line x1="12" y1="2" x2="12" y2="22"></line>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>`,
    title: "Virtual Wardrobe",
    description: "Digitize your entire wardrobe and experiment with different combinations using our sophisticated virtual try-on technology."
  },
  {
    icon: `<svg class="icon-base icon-blue">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>`,
    title: "Smart Suggestions",
    description: "Receive daily outfit recommendations based on weather, occasions, and your schedule, all powered by contextual AI."
  }
];

// Update techSpecs array with new icon classes
const techSpecs = [
  {
    icon: `<svg class="icon-base icon-blue">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
      <circle cx="12" cy="13" r="4"></circle>
    </svg>`,
    title: "Camera",
    value: "4K Ultra HD with HDR"
  },
  {
    icon: `<svg class="icon-base icon-blue">
      <path d="M6 9l6 6 6-6"/>
    </svg>`,
    title: "Processor",
    value: "Neural Engine Chip"
  },
  {
    icon: `<svg class="icon-base icon-blue">
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>`,
    title: "Storage",
    value: "256GB SSD"
  },
  {
    icon: `<svg class="icon-base icon-blue">
      <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
      <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
      <line x1="12" y1="20" x2="12.01" y2="20"></line>
    </svg>`,
    title: "Connectivity",
    value: "WiFi 6 + Bluetooth 5.0"
  }
];

// Update the footer logo with new icon classes
const footerLogo = `<svg class="icon-base icon-blue">
  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
  <line x1="8" y1="21" x2="16" y2="21"></line>
  <line x1="12" y1="17" x2="12" y2="21"></line>
</svg>`;

// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
let isMenuOpen = false;

mobileMenuBtn.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  mobileMenu.style.maxHeight = isMenuOpen ? '300px' : '0';
  mobileMenu.style.opacity = isMenuOpen ? '1' : '0';
});

// Header scroll functionality
let lastScrollY = 0;
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  const currentScrollY = window.scrollY;
  
  if (currentScrollY < lastScrollY || currentScrollY < 100) {
    header.style.top = '0';
  } else {
    header.style.top = '-100%';
  }
  
  lastScrollY = currentScrollY;
});

// Features section
const featuresSection = document.getElementById('features');
featuresSection.innerHTML = `
  <div class="container mx-auto px-6">
    <div class="text-center mb-20">
      <h2 class="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
        Advanced Features
      </h2>
      <p class="text-xl text-gray-400 max-w-2xl mx-auto">
        Discover how Smart Mirror AI transforms your daily routine
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      ${features.map((feature, index) => `
        <div class="p-8 rounded-2xl glass-effect hover:scale-105 transition-all duration-500">
          <div class="w-14 h-14 mb-6 text-blue-400 bg-blue-500/10 rounded-xl p-3 neon-border">
            ${feature.icon}
          </div>
          <h3 class="text-2xl font-semibold mb-4">${feature.title}</h3>
          <p class="text-gray-400 leading-relaxed">${feature.description}</p>
        </div>
      `).join('')}
    </div>
  </div>
`;

// Timeline section
const timelineSection = document.getElementById('timeline');
timelineSection.innerHTML = `
  <div class="container mx-auto px-6">
    <h2 class="text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
      Your Smart Mirror Journey
    </h2>
    <div class="timeline-container">
      ${timeline.map((item, index) => `
        <div class="timeline-item mb-32">
          <div class="flex items-center gap-12 timeline-content ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          }">
            <div class="flex-1">
              <img 
                src="${item.image}" 
                alt="${item.title}"
                class="rounded-2xl neon-border w-full h-[400px] object-cover"
              />
            </div>
            <div class="flex-1">
              <div class="glass-effect p-8 rounded-2xl">
                <span class="text-blue-400 text-sm font-semibold mb-2 block">
                  Step ${index + 1}
                </span>
                <h3 class="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
                  ${item.title}
                </h3>
                <p class="text-gray-400 leading-relaxed text-lg mb-6">
                  ${item.description}
                </p>
                <ul class="space-y-3">
                  ${item.benefits.map(benefit => `
                    <li class="flex items-center gap-3">
                      <div class="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <svg class="icon-sm icon-blue">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-300">${benefit}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
`;

// Pricing section
const pricingSection = document.getElementById('pricing');
pricingSection.innerHTML = `
  <div class="container mx-auto px-6">
    <h2 class="text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
      Choose Your Plan
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      ${pricingPlans.map(plan => `
        <div class="glass-effect rounded-2xl p-8 ${
          plan.id === 'premium' ? 'pricing-popular' : ''
        }">
          <h3 class="text-2xl font-semibold mb-2">${plan.name}</h3>
          <div class="flex items-end gap-2 mb-6">
            <span class="text-4xl font-bold">$${plan.price}</span>
            <span class="text-gray-400 mb-1">/month</span>
          </div>
          <ul class="space-y-4 mb-8">
            ${plan.features.map(feature => `
              <li class="flex items-center gap-3">
                <svg class="icon-sm icon-blue">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span class="text-gray-300">${feature}</span>
              </li>
            `).join('')}
          </ul>
          <button 
            class="w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
              plan.id === 'premium'
                ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white neon-border'
                : 'border border-gray-700 hover:border-blue-500/50'
            }"
          >
            Pre-order Now
          </button>
        </div>
      `).join('')}
    </div>
  </div>
`;

// Testimonials section
const testimonialsSection = document.getElementById('testimonials');
testimonialsSection.innerHTML = `
  <div class="container mx-auto px-6">
    <div class="text-center mb-20">
      <h2 class="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
        Loved by Thousands
      </h2>
      <p class="text-xl text-gray-400 max-w-2xl mx-auto">
        Join our growing community of satisfied customers who have transformed their daily routines
      </p>
    </div>

    <!-- Featured Testimonial -->
    <div class="mb-16">
      <div class="glass-effect rounded-2xl p-8 md:p-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="relative">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" 
              alt="Sarah Johnson"
              class="rounded-xl w-full object-cover aspect-[4/3]"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-4 left-4">
              <h4 class="text-xl font-semibold">Sarah Johnson</h4>
              <p class="text-gray-300">Fashion Influencer</p>
            </div>
          </div>
          <div class="space-y-6">
            <svg class="icon-lg icon-blue opacity-50">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
            </svg>
            <p class="text-2xl font-medium leading-relaxed text-gray-200">
              "The Smart Mirror has completely transformed my morning routine. The AI recommendations are spot-on, and I love how it learns my style preferences. It's like having a personal stylist at home!"
            </p>
            <div class="flex items-center gap-2">
              ${Array(5).fill().map(() => `
                <svg class="icon-sm icon-yellow">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonial Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      ${testimonials.map(testimonial => `
        <div class="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
          <div class="flex items-start gap-4 mb-6">
            <img 
              src="${testimonial.image}" 
              alt="${testimonial.name}"
              class="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h4 class="font-semibold">${testimonial.name}</h4>
              <p class="text-gray-400 text-sm">${testimonial.title}</p>
            </div>
          </div>
          <p class="text-gray-300 mb-6">${testimonial.quote}</p>
          <div class="flex items-center gap-1">
            ${Array(5).fill().map((_, i) => `
              <svg class="icon-sm ${i < testimonial.rating ? 'icon-yellow' : 'icon-gray'}">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  </div>
`;

=======
const faqItems = [
  {
    question: "How does the mirror protect my privacy?",
    answer: "Our Smart Mirror processes all data locally on the device, ensuring your personal information never leaves your home. We use state-of-the-art encryption and don't store any images or sensitive data in the cloud."
  },
  {
    question: "Is it compatible with my devices?",
    answer: "Yes! The Smart Mirror is compatible with both iOS and Android devices. It connects via Bluetooth and WiFi, and our app is available on both the App Store and Google Play Store."
  },
  {
    question: "What's the warranty and return policy?",
    answer: "We offer a minimum 1-year warranty on all models, with our Ultimate plan including a lifetime warranty. You can try the Smart Mirror risk-free with our 30-day money-back guarantee."
  },
  {
    question: "How is the AI trained?",
    answer: "Our AI is pre-trained on millions of fashion combinations and continues to learn from your preferences. It uses advanced computer vision and machine learning to understand your style and make personalized recommendations."
  },
  {
    question: "Do I need an internet connection?",
    answer: "While the core features work offline, an internet connection is recommended for software updates and accessing additional features like weather-based recommendations and style trends."
  }
];

>>>>>>> da882db065f7815b32e67f8ea1b2635286f473ce
// FAQ section
const faqSection = document.getElementById('faq');
faqSection.innerHTML = `
  <div class="container mx-auto px-6">
    <h2 class="text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
      Frequently Asked Questions
    </h2>
    <div class="max-w-3xl mx-auto space-y-6">
      ${faqItems.map((item, index) => `
        <div class="glass-effect rounded-xl overflow-hidden">
          <button
            class="w-full p-6 flex items-center justify-between text-left faq-button"
            data-index="${index}"
          >
            <span class="text-lg font-semibold">${item.question}</span>
<<<<<<< HEAD
            <svg class="icon-sm icon-blue transition-transform">
=======
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform">
>>>>>>> da882db065f7815b32e67f8ea1b2635286f473ce
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="faq-answer overflow-hidden transition-all duration-300 max-h-0">
            <p class="text-gray-400 p-6 pt-0">${item.answer}</p>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
`;

<<<<<<< HEAD
// FAQ functionality
document.querySelectorAll('.faq-button').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const icon = button.querySelector('svg');
    const isOpen = answer.style.maxHeight !== '0px' && answer.style.maxHeight !== '';
    
    // Close all other answers
    document.querySelectorAll('.faq-answer').forEach(el => {
      el.style.maxHeight = '0px';
      el.previousElementSibling.querySelector('svg').style.transform = 'rotate(0deg)';
    });
    
    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      icon.style.transform = 'rotate(180deg)';
    }
  });
});

// Tech specs section
const techSpecsSection = document.querySelector('section:nth-last-child(2)');
techSpecsSection.innerHTML = `
  <div class="container mx-auto px-6">
    <h2 class="text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
      Technical Specifications
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      ${techSpecs.map(spec => `
        <div class="glass-effect p-8 rounded-2xl text-center">
          <div class="w-16 h-16 mx-auto mb-6 rounded-xl bg-blue-500/20 flex items-center justify-center">
            ${spec.icon}
          </div>
          <h3 class="text-xl font-semibold mb-2">${spec.title}</h3>
          <p class="text-gray-400">${spec.value}</p>
        </div>
      `).join('')}
    </div>
  </div>
`;

// Footer section
const footer = document.querySelector('footer');
footer.innerHTML = `
  <div class="container mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
      <div>
        <div class="flex items-center gap-2 mb-6">
          ${footerLogo}
          <span class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
            Smart Mirror
          </span>
        </div>
        <p class="text-gray-400 mb-6">
          Transform your daily routine with AI-powered style recommendations.
        </p>
        <div class="flex gap-4">
          ${['Twitter', 'GitHub', 'Instagram'].map(platform => `
            <a
              href="#"
              class="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400 transition-colors"
            >
              <svg class="icon-sm">
                ${platform === 'Twitter' 
                  ? '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>'
                  : platform === 'GitHub'
                  ? '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>'
                  : '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>'}
              </svg>
            </a>
          `).join('')}
        </div>
      </div>
      <div>
        <h4 class="text-lg font-semibold mb-6">Product</h4>
        <ul class="space-y-4">
          <li><a href="#features" class="text-gray-400 hover:text-blue-400 transition-colors">Features</a></li>
          <li><a href="#pricing" class="text-gray-400 hover:text-blue-400 transition-colors">Pricing</a></li>
           <li><a href="#faq" class="text-gray-400 hover:text-blue-400 transition-colors">FAQ</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-lg font-semibold mb-6">Company</h4>
        <ul class="space-y-4">
          <li><a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">About Us</a></li>
          <li><a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">Careers</a></li>
          <li><a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-lg font-semibold mb-6">Legal</h4>
        <ul class="space-y-4">
          <li><a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
          <li><a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a></li>
          <li><a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">Cookie Policy</a></li>
        </ul>
      </div>
    </div>
    <div class="pt-8 border-t border-gray-800 text-center text-gray-400">
      <p>&copy; ${new Date().getFullYear()} Smart Mirror AI. All rights reserved.</p>
    </div>
  </div>
`;

// Intersection Observer for animations
const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0');
      entry.target.classList.remove('opacity-0', 'translate-y-10');
    }
  });
};

const observer = new IntersectionObserver(observerCallback, {
  threshold: 0.1
});

// Apply animations to all sections
document.querySelectorAll('section > div').forEach(element => {
  element.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-500');
  observer.observe(element);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Close mobile menu if open
      if (isMenuOpen) {
        mobileMenuBtn.click();
      }
    }
  });
});

// Initialize counters and animations
const initializeCounters = () => {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  });
};

// Call initialization functions
document.addEventListener('DOMContentLoaded', () => {
  initializeCounters();
});
=======
document.querySelectorAll('.faq-button').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const icon = button.querySelector('svg');
      const isOpen = answer.style.maxHeight !== '0px' && answer.style.maxHeight !== '';

      // Close all other answers
      document.querySelectorAll('.faq-answer').forEach(el => {
        el.style.maxHeight = '0px';
        el.previousElementSibling.querySelector('svg').style.transform = 'rotate(0deg)';
      });

      // If the clicked one isn't open, open it
      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
      }
    });
  });
>>>>>>> da882db065f7815b32e67f8ea1b2635286f473ce
