import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrainCircuit, Twitter, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // CTA Section animation
      gsap.from(ctaRef.current, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 1,
        ease: 'power3.out',
      });

      // Footer links animation
      const footerSections = footerRef.current?.querySelectorAll('.footer-section');
      gsap.from(footerSections, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* CTA Section */}
      <div ref={ctaRef} className="relative py-20 px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute inset-0 backdrop-blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <span className="text-white/90">🚀 Limited Time Offer</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Ready to Transform Your
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Educational Platform?
            </span>
          </h2>
          
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Join over team and organizations already using AI to revolutionize learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-white text-black rounded-full hover:shadow-2xl hover:shadow-white/20 transition-all hover:scale-105">
              Get Started Free
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full border border-white/20 hover:bg-white/20 transition-all">
              Learn & Explore
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div ref={footerRef} className="relative py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand */}
            <div className="footer-section lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                  <BrainCircuit className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl text-white">LearnAI</span>
              </div>
              <p className="text-white/60 mb-6 max-w-xs">
                Empowering the future of education through artificial intelligence.
                Create smarter, learn faster, achieve more.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <Twitter className="w-5 h-5 text-white/60 hover:text-white transition-colors" />
                </a>
                <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <Linkedin className="w-5 h-5 text-white/60 hover:text-white transition-colors" />
                </a>
                <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <Github className="w-5 h-5 text-white/60 hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Product */}
            <div className="footer-section">
              <h3 className="text-white mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Integration</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Roadmap</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="footer-section">
              <h3 className="text-white mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Press Kit</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Partners</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-section">
              <h3 className="text-white mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-white/60">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>support@learnai.com</span>
                </li>
                <li className="flex items-start gap-2 text-white/60">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start gap-2 text-white/60">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2025 LearnAI. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/40 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
    </footer>
  );
}
