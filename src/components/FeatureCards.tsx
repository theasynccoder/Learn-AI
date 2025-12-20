import { motion } from 'motion/react';
import { BrainCircuit, Sparkles, ClipboardCheck } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    id: 1,
    title: 'AI Learning Assistant',
    description: 'Your personal AI tutor available 24/7. Get instant answers, personalized study plans, and adaptive learning paths tailored to your unique learning style and pace.',
    icon: BrainCircuit,
    gradient: 'from-blue-500 to-cyan-500',
    link: 'https://edupluse.aftabmadni.me',
    features: ['Natural language Q&A', 'Personalized recommendations', 'Progress tracking'],
  },
  {
    id: 2,
    title: 'AI Course Generator',
    description: 'Generate comprehensive courses in minutes. Our AI analyzes your topic and creates structured curricula with lessons, objectives, and multimedia content automatically.',
    icon: Sparkles,
    gradient: 'from-purple-500 to-pink-500',
    link: 'https://edunovaai.aftabmadni.me',
    features: ['One-click course creation', 'Auto-generated content', 'Multi-format support'],
  },
  {
    id: 3,
    title: 'Smart Quiz Builder',
    description: 'Create intelligent assessments effortlessly. AI generates contextual questions, provides instant grading, and offers detailed analytics on student performance and knowledge gaps.',
    icon: ClipboardCheck,
    gradient: 'from-orange-500 to-red-500',
    link: 'https://learnaiquiz.aftabmadni.me',
    features: ['Auto-question generation', 'Adaptive difficulty', 'Real-time analytics'],
  },
];

export function FeatureCards() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative py-32 px-6">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.1),transparent_50%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl text-white mb-6">
            AI-Powered Features for
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Next-Gen Learning
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Harness the power of artificial intelligence to create, deliver, and optimize
            educational experiences like never before
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={card.id}
                href={card.link}
                whileHover={{ scale: 1.02 }}
                className="group relative block"
              >
                {/* Card Background */}
                <div className="relative h-full p-8 bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden transition-all duration-300 group-hover:border-white/20 group-hover:shadow-2xl">
                  {/* Gradient Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${card.gradient} mb-6 relative`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                    {/* Pulse effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.gradient} animate-ping opacity-20`}></div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 group-hover:bg-clip-text transition-all duration-300">
                    {card.title}
                  </h3>
                  <p className="text-white/60 mb-6">
                    {card.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-white/50">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${card.gradient}`}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-white/40 group-hover:text-white transition-colors">
                    <span className="text-sm">Explore Feature</span>
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </div>

                  {/* Animated Border Gradient */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} blur-xl opacity-20`}></div>
                  </div>
                </div>

                {/* Floating Particles Effect */}
                <motion.div
                  className="absolute -z-10 inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${card.gradient}`}
                      style={{
                        top: `${20 + i * 15}%`,
                        left: `${10 + i * 15}%`,
                      }}
                      animate={{
                        y: [-10, -30, -10],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
}