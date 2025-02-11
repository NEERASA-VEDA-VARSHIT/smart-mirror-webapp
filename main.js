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
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform">
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