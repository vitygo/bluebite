
import { useState } from "react";
import { Monitor, LayoutDashboard, PenTool } from "lucide-react";

import { ChevronDown, ChevronUp } from "lucide-react";
function App() {
  const [active, setActive] = useState("Landing Pages");
  const [openIndex, setOpenIndex] = useState(null);

  const categories = [
    { name: "Landing Pages", icon: <Monitor className="w-5 h-5" /> },
    { name: "SPA", icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: "UI/UX Design", icon: <PenTool className="w-5 h-5" /> },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a Landing Page?",
      answer:
        "A Landing Page is a standalone web page designed specifically for a marketing or advertising campaign. It's focused on driving a single action from visitors.",
    },
    {
      question: "How long does it take to build a SPA?",
      answer:
        "The development time varies based on complexity, but typically a SPA can be delivered in 3-6 weeks with a small team of developers and designers.",
    },
    {
      question: "Do you provide UI/UX design services?",
      answer:
        "Yes! We offer full UI/UX design services, from wireframes and prototypes to complete visual design for web and mobile applications.",
    },
    {
      question: "Can you optimize for SEO?",
      answer:
        "Absolutely! All our projects are optimized for search engines, ensuring faster loading times, proper meta tags, and best SEO practices.",
    },
  ];

 

  return (

    





    <>
<div className="min-h-screen w-full bg-[#f8fafc] relative">
  {/* Top Fade Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
      `,
      backgroundSize: "20px 30px",
      WebkitMaskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
      maskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
    }}
  />

     {/* Your Content/Components */}


    <header className="bg-none  fixed w-full top-0 z-50">
  <div className="container mx-auto flex items-center justify-between py-3 px-6">
    
    {/* Logo */}
    <a href="#" className="flex items-center">
      <img src="./1.png" alt="Logo" className="h-10 w-auto"/>
    </a>

    {/* Menu items */}
    <nav className="hidden lg:flex space-x-8 text-gray-800 font-medium">
      <a href="#about" className="hover:text-yellow-500 transition-colors">About Us</a>
      <a href="#portfolio" className="hover:text-yellow-500 transition-colors">Portfolio</a>
      <a href="#cases" className="hover:text-yellow-500 transition-colors">Case Studies</a>
      <a href="#pricing" className="hover:text-yellow-500 transition-colors">Pricing</a>
      <a href="#services" className="hover:text-yellow-500 transition-colors">Services</a>
      <a href="#faq" className="hover:text-yellow-500 transition-colors">FAQ</a>
      <a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a>
    </nav>

    {/* Buttons */}
    <div className="hidden sm:flex items-center space-x-4">
  <a href="#" className="px-5 py-2 border border-gray-300 rounded-lg text-gray-800 hover:bg-gray-100 transition">
    Contact Us
  </a>
  <a href="#" className="px-5 py-2 bg-gradient-to-r from-amber-200 to-yellow-400 text-white rounded-lg hover:opacity-90 transition">
    View Portfolio
  </a>
</div>

    {/* Mobile menu toggle */}
    <div className="lg:hidden">
      <button className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    
  </div>
</header>

{/* next-section */}

<div className="flex justify-center pt-25 relative z-20">
      <div className="bg-white rounded-xl flex shadow-md h-15 p-2">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActive(cat.name)}
            className={`relative px-6 py-2 rounded-3xl font-medium transition-all duration-300
              ${
                active === cat.name
                  ? "bg-gradient-to-r from-amber-200 to-yellow-400 text-white"
                  : "text-gray-600 hover:text-gray-800"
              }`}
          >
            <span className="flex items-center space-x-2">
              {cat.icon}
              <span>{cat.name}</span>
            </span>
          </button>
        ))}
      </div>
    </div>

    <section className="bg-none py-20 relative z-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
          We craft <span className="text-yellow-500">Landing Pages</span> & <span className="text-yellow-400">SPAs</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-xl mx-auto">
          Helping businesses convert visitors into customers with modern, responsive, and fast web experiences.
        </p>
        <button className="bg-gradient-to-r from-amber-200 to-yellow-400 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-600 transition">
          Get Started
        </button>
      </div>
      <div className="mt-12 flex justify-center">
        {/* Можеш вставити ілюстрацію чи 3D-модель тут */}
        {/* <img src="/hero-illustration.png" alt="Hero illustration" className="w-full max-w-xl" /> */}
      </div>
    </section>


    <div className="min-h-50 w-full relative ">
  {/* Warm Orange Glow Right */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#ffffff",
      backgroundImage: `
        radial-gradient(
          circle at top right,
          transparent 70%
        )
      `,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    }}
  />
     {/* Your Content/Components */}


    <section id="portfolio" className="py-20 bg-none relative z-10 ">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
      Our <span className="text-yellow-500">Portfolio</span>
    </h2>
    <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
      Take a look at some of our recent projects in landing pages, SPAs, and UI/UX design. Each project is crafted with attention to detail and performance.
    </p>

    {/* Portfolio Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Example Portfolio Card */}
      {[1,2,3,4,5,6].map((item) => (
        <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300">
          <div className="h-48 bg-gradient-to-r from-amber-200 to-yellow-400 flex items-center justify-center text-white text-2xl font-bold relative">
          <img src="./localhost_5176_ (3).png" className="absolute bottom-[-5]"/>
          </div>
          <div className="p-6 text-left bg-white relative z-50">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Project Title {item}</h3>
            <p className="text-gray-600 text-sm">
              Short description of the project highlighting features, design, and technology used.
            </p>
            <a href="#" className="mt-4 inline-block text-yellow-500 font-medium hover:underline">
              View Case Study →
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
</div>

<section id="pricing" className="py-20 bg-none relative z-10">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
      Pricing Plans
    </h2>
    <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
      Choose the perfect plan for your business. All plans are tailored to create high-converting landing pages.
    </p>

    {/* Pricing Cards */}
    <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
      {/* Basic Plan */}
      <div className="flex-1 bg-white rounded-xl shadow-md p-8 transform hover:scale-105 transition-all duration-300">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">Basic</h3>
        <p className="text-gray-600 mb-6">For small projects or personal landing pages.</p>
        <span className="text-4xl font-bold text-gray-900 mb-6 block">$49</span>
        <ul className="text-gray-600 mb-6 space-y-2">
          <li>1 Landing Page</li>
          <li>Basic Support</li>
          <li>Responsive Design</li>
        </ul>
        <button className="w-full bg-gradient-to-r from-amber-200 to-yellow-400 text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition">
          Choose Plan
        </button>
      </div>

      {/* Most Popular Plan */}
      <div className="flex-1 bg-white rounded-xl shadow-2xl p-10 relative transform scale-105 z-10">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-white px-4 py-1 rounded-full font-medium text-sm">
          Most Popular
        </div>
        <h3 className="text-3xl font-bold mb-4 text-gray-900">Professional</h3>
        <p className="text-gray-600 mb-6">Perfect for growing businesses and marketing teams.</p>
        <span className="text-5xl font-bold text-gray-900 mb-6 block">$99</span>
        <ul className="text-gray-600 mb-6 space-y-2">
          <li>Up to 5 Landing Pages</li>
          <li>Priority Support</li>
          <li>Advanced Analytics</li>
        </ul>
        <button className="w-full bg-gradient-to-r from-amber-200 to-yellow-400 text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition">
          Choose Plan
        </button>
      </div>

      {/* Enterprise Plan */}
      <div className="flex-1 bg-white rounded-xl shadow-md p-8 transform hover:scale-105 transition-all duration-300">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">Enterprise</h3>
        <p className="text-gray-600 mb-6">For large-scale projects and custom landing page solutions.</p>
        <span className="text-4xl font-bold text-gray-900 mb-6 block">$199</span>
        <ul className="text-gray-600 mb-6 space-y-2">
          <li>Unlimited Landing Pages</li>
          <li>Dedicated Support</li>
          <li>Custom Integrations</li>
        </ul>
        <button className="w-full bg-gradient-to-r from-amber-200 to-yellow-400 text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition">
          Choose Plan
        </button>
      </div>
    </div>
  </div>
</section>

<section id="contact" className="py-20  relative z-10">
  <div className="container mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
        Contact Us
      </h2>
      <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mt-4">
        Have a project in mind? Send us a message and we’ll get back to you as soon as possible.
      </p>
    </div>

    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
      <form className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="Your message..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-amber-200 to-yellow-400 text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition font-medium"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>


<section className="bg-none py-20 relative z-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 cursor-pointer transition hover:shadow-lg"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-medium text-gray-800">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-yellow-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-yellow-400" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>


<footer className="bg-[#1f2937] text-gray-200 py-12 relative z-10">
  <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
    
    {/* Logo */}
    <a href="#" className="flex items-center mb-6 md:mb-0">
      <img src="./4.svg" alt="Logo" className="h-10 w-auto" />
    </a>

    {/* Social Media */}
    <div className="flex space-x-6">
      <a href="#" className="hover:text-yellow-400 transition">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.88-2.36 8.48 8.48 0 01-2.7 1.03 4.25 4.25 0 00-7.26 3.87A12.07 12.07 0 013 4.9a4.25 4.25 0 001.32 5.67 4.24 4.24 0 01-1.93-.53v.05a4.25 4.25 0 003.41 4.17 4.27 4.27 0 01-1.92.07 4.25 4.25 0 003.97 2.95A8.53 8.53 0 012 19.54a12.06 12.06 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.68 8.68 0 0024 4.56a8.38 8.38 0 01-2.54.7z"/>
        </svg>
      </a>
      <a href="#" className="hover:text-yellow-400 transition">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.4 2.87 8.12 6.84 9.45v-6.68H7.9V12h1.98V9.84c0-1.96 1.17-3.04 2.96-3.04.86 0 1.76.15 1.76.15v1.94h-1c-.99 0-1.3.62-1.3 1.26V12h2.22l-.35 2.77h-1.87v6.68c3.97-1.33 6.84-5.05 6.84-9.45 0-5.5-4.46-9.96-9.96-9.96z"/>
        </svg>
      </a>
      <a href="#" className="hover:text-yellow-400 transition">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.24 2.22.4.54.21.93.46 1.34.87.41.41.66.8.87 1.34.16.42.35 1.05.4 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.8-.4 2.22-.21.54-.46.93-.87 1.34-.41.41-.8.66-1.34.87-.42.16-1.05.35-2.22.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.24-2.22-.4a3.61 3.61 0 01-1.34-.87 3.62 3.62 0 01-.87-1.34c-.16-.42-.35-1.05-.4-2.22-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.24-1.8.4-2.22.21-.54.46-.93.87-1.34.41-.41.8-.66 1.34-.87.42-.16 1.05-.35 2.22-.4C8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.52.01-4.76.07-1.03.04-1.58.22-1.95.36-.49.18-.84.39-1.21.76-.37.37-.58.72-.76 1.21-.14.37-.32.92-.36 1.95-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.04 1.03.22 1.58.36 1.95.18.49.39.84.76 1.21.37.37.72.58 1.21.76.37.14.92.32 1.95.36 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.03-.04 1.58-.22 1.95-.36.49-.18.84-.39 1.21-.76.37-.37.58-.72.76-1.21.14-.37.32-.92.36-1.95.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.04-1.03-.22-1.58-.36-1.95-.18-.49-.39-.84-.76-1.21-.37-.37-.72-.58-1.21-.76-.37-.14-.92-.32-1.95-.36-1.24-.06-1.61-.07-4.76-.07zm0 4.4a5.4 5.4 0 105.4 5.4 5.4 5.4 0 00-5.4-5.4zm0 8.9a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm6.4-9.7a1.26 1.26 0 11-2.52 0 1.26 1.26 0 012.52 0z"/>
        </svg>
      </a>
    </div>

  </div>

  <div className="mt-12 text-center text-gray-400 text-sm">
    &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
  </div>
</footer>

      

    </div>


    </>
  )
}

export default App
