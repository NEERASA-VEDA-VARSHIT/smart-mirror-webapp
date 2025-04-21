import { useState, useEffect } from 'react';
import { Camera, Cpu, Database, Wifi, ChevronDown, Quote, Star, Twitter, Github, Instagram, Monitor, Check, ArrowRight, Play } from 'lucide-react';
import './style.css';

const features = [
  {
    icon: <Camera className="w-6 h-6" />,
    title: "AI Style Analysis",
    description: "Our advanced neural networks analyze your wardrobe and provide personalized style recommendations based on your preferences and current trends."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Virtual Wardrobe",
    description: "Digitize your entire wardrobe and experiment with different combinations using our sophisticated virtual try-on technology."
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Smart Suggestions",
    description: "Receive daily outfit recommendations based on weather, occasions, and your schedule, all powered by contextual AI."
  }
];

const timeline = [
  {
    title: "Smart Morning Routine",
    description: "Transform your morning routine with AI-powered outfit suggestions tailored to your schedule, weather, and style preferences.",
    image: "https://images.unsplash.com/photo-1595257841889-eca2678454e2?auto=format&fit=crop&q=80",
    benefits: [
      "Personalized outfit recommendations",
      "Weather-appropriate suggestions",
      "Schedule-based styling"
    ]
  },
  {
    title: "AI Style Learning",
    description: "Our advanced AI learns your preferences and adapts to your style over time, providing increasingly personalized recommendations.",
    image: "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?auto=format&fit=crop&q=80",
    benefits: [
      "Continuous style learning",
      "Preference adaptation",
      "Trend integration"
    ]
  },
  {
    title: "Virtual Wardrobe",
    description: "Digitize your entire wardrobe and experiment with different combinations without physically changing clothes.",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80",
    benefits: [
      "Digital clothing inventory",
      "Mix and match suggestions",
      "Outfit history tracking"
    ]
  }
];

const pricingPlans = [
  {
    id: "basic",
    name: "Basic",
    price: "999",
    features: [
      "AI Style Analysis",
      "Basic Virtual Wardrobe",
      "Weather Integration",
      "1-Year Warranty",
      "Standard Support"
    ]
  },
  {
    id: "premium",
    name: "Premium",
    price: "1499",
    features: [
      "Everything in Basic",
      "Advanced Virtual Try-On",
      "Occasion-based Recommendations",
      "Priority Support",
      "2-Year Warranty"
    ]
  },
  {
    id: "ultimate",
    name: "Ultimate",
    price: "1999",
    features: [
      "Everything in Premium",
      "Personal Style Consultant",
      "Exclusive Early Features",
      "Lifetime Warranty",
      "24/7 Priority Support",
      "Custom Installation"
    ]
  }
];

const techSpecs = [
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Camera",
    value: "4K Ultra HD with HDR"
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Processor",
    value: "Neural Engine Chip"
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Storage",
    value: "256GB SSD"
  },
  {
    icon: <Wifi className="w-6 h-6" />,
    title: "Connectivity",
    value: "WiFi 6 + Bluetooth 5.0"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Fashion Influencer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    quote: "The Smart Mirror has completely transformed my morning routine. The AI recommendations are spot-on, and I love how it learns my style preferences. It's like having a personal stylist at home!",
    rating: 5
  },
  {
    name: "Michael Chen",
    title: "Tech Enthusiast",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    quote: "Incredible technology that actually works! The AI suggestions are surprisingly accurate.",
    rating: 5
  },
  {
    name: "Emma Wilson",
    title: "Professional Stylist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
    quote: "As a stylist, I'm impressed by the accuracy of the style recommendations.",
    rating: 4
  }
];

const faqItems = [
  {
    question: "How does the AI style analysis work?",
    answer: "Our AI uses computer vision to analyze your wardrobe items and learn your style preferences over time. It considers factors like color coordination, occasion appropriateness, and current fashion trends."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we take data security seriously. All your data is encrypted and stored securely. We never share your personal information with third parties."
  },
  {
    question: "Can I integrate it with my smart home?",
    answer: "Yes! Smart Mirror is compatible with major smart home platforms including Google Home, Amazon Alexa, and Apple HomeKit."
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header id="header" className="fixed w-full z-50 transition-all duration-300 header-glass">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Monitor className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-gradient">
                Smart Mirror
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {['features', 'timeline', 'pricing', 'faq'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`nav-link capitalize ${
                    activeSection === item ? 'text-blue-400' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
              <button className="px-6 py-2 button-gradient rounded-lg text-white">
                Pre-order
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <ChevronDown className={`w-6 h-6 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-4 space-y-4">
              {['features', 'timeline', 'pricing', 'faq'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`block w-full text-left nav-link capitalize ${
                    activeSection === item ? 'text-blue-400' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
              <button className="w-full px-6 py-2 button-gradient rounded-lg text-white">
                Pre-order
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"
          ></div>
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-[#0a0a0a]"
          ></div>

          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"
              style={{ top: '10%', left: '20%' }}
            ></div>
            <div
              className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"
              style={{ top: '40%', right: '20%', animationDelay: '2s' }}
            ></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8 relative">
                <div className="inline-block">
                  <span className="text-sm font-semibold px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400">
                    Pre-order Now Available
                  </span>
                </div>
              </div>
              <h1 className="text-7xl md:text-8xl font-bold mb-6 text-gradient text-glow">
                Smart Mirror AI
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
                Experience the perfect blend of artificial intelligence and personal styling. 
                Your wardrobe will never be the same.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="group px-8 py-4 button-gradient rounded-xl text-lg shadow-lg shadow-blue-500/25 neon-border flex items-center gap-2">
                  Pre-order Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group px-8 py-4 rounded-xl text-lg font-semibold border border-gray-700 hover:border-blue-500/50 transition-colors duration-300 glass-effect flex items-center gap-2">
                  Watch Demo
                  <Play className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6 text-gradient">
                Advanced Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Discover how Smart Mirror AI transforms your daily routine
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl glass-effect hover:scale-105 transition-all duration-500"
                >
                  <div className="w-14 h-14 mb-6 text-blue-400 bg-blue-500/10 rounded-xl p-3 neon-border">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold text-center mb-20 text-gradient">
              Your Smart Mirror Journey
            </h2>
            <div className="timeline-container">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item mb-32">
                  <div className={`flex items-center gap-12 timeline-content ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}>
                    <div className="flex-1">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="rounded-2xl neon-border w-full h-[400px] object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="glass-effect p-8 rounded-2xl">
                        <span className="text-blue-400 text-sm font-semibold mb-2 block">
                          Step {index + 1}
                        </span>
                        <h3 className="text-3xl font-bold mb-4 text-gradient">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-lg mb-6">
                          {item.description}
                        </p>
                        <ul className="space-y-3">
                          {item.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                                <Check className="w-4 h-4 text-blue-400" />
                              </div>
                              <span className="text-gray-300">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold text-center mb-20 text-gradient">
              Choose Your Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`glass-effect rounded-2xl p-8 ${
                    plan.id === 'premium' ? 'pricing-popular' : ''
                  }`}
                >
                  <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                  <div className="flex items-end gap-2 mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-400 mb-1">/month</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-blue-400" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.id === 'premium'
                        ? 'button-gradient text-white neon-border'
                        : 'border border-gray-700 hover:border-blue-500/50'
                    }`}
                  >
                    Pre-order Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold text-center mb-20 text-gradient">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="glass-effect rounded-xl overflow-hidden">
                  <button
                    className="w-full p-6 flex items-center justify-between text-left"
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  >
                    <span className="text-lg font-semibold">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-blue-400 transition-transform ${
                        openFaqIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaqIndex === index ? 'max-h-48' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-400 p-6 pt-0">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Specs Section */}
        <section id="tech-specs" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold text-center mb-20 text-gradient">
              Technical Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {techSpecs.map((spec, index) => (
                <div key={index} className="glass-effect p-8 rounded-2xl text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    {spec.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{spec.title}</h3>
                  <p className="text-gray-400">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Monitor className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold text-gradient">
                  Smart Mirror
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Transform your daily routine with AI-powered style recommendations.
              </p>
              <div className="flex gap-4">
                {[
                  { Icon: Twitter, href: "#twitter" },
                  { Icon: Github, href: "#github" },
                  { Icon: Instagram, href: "#instagram" }
                ].map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "FAQ"]
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "Contact"]
              },
              {
                title: "Legal",
                links: ["Privacy Policy", "Terms of Service", "Cookie Policy"]
              }
            ].map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Smart Mirror AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;