import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge animation
      gsap.from(badgeRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        ease: 'back.out(1.7)',
      });

      // Title animation with split text effect
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll('.word');
        gsap.from(words, {
          opacity: 0,
          y: 100,
          rotationX: -90,
          stagger: 0.1,
          duration: 1,
          ease: 'power4.out',
          delay: 0.3,
        });
      }

      // Subtitle animation
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.8,
        ease: 'power3.out',
      });

      // CTA button animation
      gsap.from(ctaRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        delay: 1.2,
        ease: 'back.out(1.7)',
      });

      // Floating animation for CTA
      gsap.to(ctaRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-full object-cover"
>
  <source src="/backgroundvideo.mp4" type="video/mp4" />
</video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div>
          <div
            ref={badgeRef}
            className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
          >
            <span className="text-white/90">🤖 Powered by Advanced AI Technology</span>
          </div>

          <h1 ref={titleRef} className="text-6xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight">
            <span className="word inline-block">Transform</span>{' '}
            <span className="word inline-block">Your</span>
            <br />
            <span className="word inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI-Powered
            </span>{' '}
            <span className="word inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Learning
            </span>
          </h1>

          <p ref={subtitleRef} className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto">
            Revolutionize education with AI-driven course generation, intelligent learning assistants,
            and automated quiz creation. Experience the future of learning management.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://edupluse.aftabmadni.me"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full transition-all hover:shadow-2xl hover:shadow-white/20 font-semibold text-lg"
            >
              Learning Assistant
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://edunovaai.aftabmadni.me"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full transition-all hover:shadow-2xl hover:shadow-white/20 font-semibold text-lg"
            >
              EduNova AI
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://learnaiquiz.aftabmadni.me"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full transition-all hover:shadow-2xl hover:shadow-white/20 font-semibold text-lg"
            >
              Learn AI Quiz
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
