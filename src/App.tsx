import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  Dumbbell, 
  Trophy, 
  Users, 
  Calendar, 
  ChevronRight, 
  Instagram, 
  Twitter, 
  Facebook, 
  MapPin, 
  Phone, 
  Mail,
  Clock,
  Zap,
  Target,
  Shield,
  X,
  MessageCircle
} from "lucide-react";
import { useRef, useState } from "react";

const JoinModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const whatsappNumber = "+94 763723131";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-zinc-900 border border-white/10 p-8 rounded-3xl shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="font-display text-3xl uppercase mb-2">Join the Tribe</h3>
              <p className="text-zinc-400 mb-8">
                Ready to start your transformation? Message us on WhatsApp to get started today.
              </p>

              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-emerald-500 text-black py-4 rounded-xl font-black text-lg uppercase tracking-wider hover:bg-emerald-400 transition-all mb-4"
              >
                <MessageCircle className="w-6 h-6" />
                Message Us
              </a>
              
              <div className="text-zinc-500 font-mono text-sm tracking-widest">
                {whatsappNumber}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Navbar = ({ onJoinClick }: { onJoinClick: () => void }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-500 rounded flex items-center justify-center">
            <Dumbbell className="text-black w-6 h-6" />
          </div>
          <span className="font-display text-2xl tracking-tighter uppercase">GymJunkies</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-zinc-400">
          <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
          <a href="#programs" className="hover:text-emerald-400 transition-colors">Programs</a>
          <a href="#trainers" className="hover:text-emerald-400 transition-colors">Trainers</a>
          <a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing</a>
        </div>

        <button 
          onClick={onJoinClick}
          className="bg-emerald-500 text-black px-6 py-2.5 rounded font-bold text-sm uppercase tracking-wider hover:bg-emerald-400 transition-all active:scale-95"
        >
          Join Now
        </button>
      </div>
    </nav>
  );
};

const Hero = ({ onJoinClick }: { onJoinClick: () => void }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym Hero" 
          className="w-full h-full object-cover opacity-40 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-emerald-500 font-mono text-sm tracking-[0.3em] uppercase mb-6">
            Push Your Limits
          </span>
          <h1 className="font-display text-[12vw] md:text-[10rem] leading-[0.85] uppercase tracking-tighter mb-8">
            No Pain<br />
            <span className="text-stroke-bold">No Gain</span>
          </h1>
          <p className="max-w-xl mx-auto text-zinc-400 text-lg md:text-xl mb-10 leading-relaxed">
            The ultimate destination for those who live for the grind. 
            Premium equipment, elite trainers, and a community of warriors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onJoinClick}
              className="w-full sm:w-auto bg-emerald-500 text-black px-10 py-4 rounded font-black text-lg uppercase tracking-wider hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              Start Your Journey
            </button>
            <a 
              href="#programs"
              className="w-full sm:w-auto border border-white/20 px-10 py-4 rounded font-black text-lg uppercase tracking-wider hover:bg-white/10 transition-all flex items-center justify-center"
            >
              View Programs
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-px h-12 bg-white" />
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Active Members", value: "2.5K+", icon: Users },
    { label: "Expert Trainers", value: "40+", icon: Trophy },
    { label: "Modern Equipment", value: "150+", icon: Dumbbell },
    { label: "Weekly Classes", value: "60+", icon: Calendar },
  ];

  return (
    <section className="py-24 border-y border-white/5 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 text-emerald-500 mx-auto mb-4 opacity-50" />
              <div className="font-display text-5xl mb-2">{stat.value}</div>
              <div className="text-zinc-500 text-xs uppercase tracking-widest font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  const programs = [
    {
      title: "Bodybuilding",
      desc: "Hypertrophy focused training for maximum muscle growth and definition.",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop",
      tag: "Strength"
    },
    {
      title: "Powerlifting",
      desc: "Master the big three: Squat, Bench, and Deadlift. Pure raw strength.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
      tag: "Power"
    },
    {
      title: "CrossFit",
      desc: "High-intensity functional movements to build a versatile, athletic engine.",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2070&auto=format&fit=crop",
      tag: "Endurance"
    },
    {
      title: "HIIT",
      desc: "Short bursts of intense exercise followed by rest. Burn fat, fast.",
      image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2070&auto=format&fit=crop",
      tag: "Cardio"
    }
  ];

  return (
    <section id="programs" className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4 block">Our Expertise</span>
            <h2 className="font-display text-6xl md:text-8xl uppercase leading-none">Training<br />Programs</h2>
          </div>
          <p className="max-w-md text-zinc-500 text-lg">
            We offer specialized programs designed to push your body to its absolute limits. 
            Choose your path and start grinding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative h-[400px] overflow-hidden rounded-2xl border border-white/5"
            >
              <img 
                src={p.image} 
                alt={p.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="inline-block px-3 py-1 bg-emerald-500 text-black font-bold text-[10px] uppercase tracking-wider rounded mb-4">
                  {p.tag}
                </span>
                <h3 className="font-display text-4xl uppercase mb-2">{p.title}</h3>
                <p className="text-zinc-400 text-sm max-w-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {p.desc}
                </p>
                <button className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-widest group/btn">
                  Learn More <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Trainers = () => {
  const trainers = [
    {
      name: "Marcus 'The Tank' Reed",
      role: "Head Strength Coach",
      specialty: "Powerlifting & Hypertrophy",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop",
      ig: "@marcus_tank"
    },
    {
      name: "Sarah Jenkins",
      role: "Elite Performance Coach",
      specialty: "CrossFit & Mobility",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop",
      ig: "@sarah_fit"
    },
    {
      name: "David Chen",
      role: "Conditioning Specialist",
      specialty: "HIIT & Athletic Engine",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop",
      ig: "@dchen_coach"
    },
    {
      name: "Elena Rodriguez",
      role: "Nutrition & Lifestyle",
      specialty: "Body Recomposition",
      image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop",
      ig: "@elena_nutri"
    }
  ];

  return (
    <section id="trainers" className="py-32 bg-zinc-900/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4 block">The Squad</span>
          <h2 className="font-display text-6xl md:text-8xl uppercase leading-none mb-6">Master<br />Trainers</h2>
          <p className="max-w-2xl mx-auto text-zinc-500 text-lg">
            Our coaches aren't just trainers—they're practitioners. They live the lifestyle 
            and have the track record to prove it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/5 mb-6">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                  <a href="#" className="w-10 h-10 rounded-full bg-emerald-500 text-black flex items-center justify-center hover:bg-emerald-400 transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-display text-2xl uppercase mb-1 tracking-tight">{t.name}</h3>
                <p className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em] mb-3">{t.role}</p>
                <div className="w-8 h-px bg-white/10 mx-auto mb-3" />
                <p className="text-zinc-500 text-xs uppercase tracking-widest">{t.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = ({ onJoinClick }: { onJoinClick: () => void }) => {
  const plans = [
    {
      name: "Starter",
      price: "29",
      features: ["Standard Gym Access", "Locker Room", "1 Free PT Session", "Mobile App Access"],
      recommended: false
    },
    {
      name: "Pro",
      price: "59",
      features: ["24/7 Full Access", "All Group Classes", "Personalized Plan", "Nutrition Guide", "Priority Support"],
      recommended: true
    },
    {
      name: "Elite",
      price: "99",
      features: ["Unlimited PT Sessions", "Recovery Zone Access", "Guest Passes", "Supplements Discount", "Private Locker"],
      recommended: false
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-zinc-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4 block">Membership</span>
          <h2 className="font-display text-6xl md:text-8xl uppercase leading-none mb-6">Choose Your<br />Battle Plan</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i}
              className={`relative p-10 rounded-3xl border ${plan.recommended ? 'border-emerald-500 bg-emerald-500/5' : 'border-white/5 bg-zinc-950'} flex flex-col`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display">$</span>
                  <span className="text-7xl font-display">{plan.price}</span>
                  <span className="text-zinc-500 font-medium">/mo</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-zinc-400">
                    <Zap className="w-4 h-4 text-emerald-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button 
                onClick={onJoinClick}
                className={`w-full py-4 rounded font-black text-sm uppercase tracking-widest transition-all ${plan.recommended ? 'bg-emerald-500 text-black hover:bg-emerald-400' : 'bg-white/5 text-white hover:bg-white/10'}`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-emerald-500 rounded flex items-center justify-center">
                <Dumbbell className="text-black w-6 h-6" />
              </div>
              <span className="font-display text-3xl tracking-tighter uppercase">GymJunkies</span>
            </div>
            <p className="text-zinc-500 max-w-md text-lg leading-relaxed mb-8">
              We are more than just a gym. We are a brotherhood of iron, 
              dedicated to pushing the human potential to its absolute limit.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl uppercase mb-8 tracking-wider">Quick Links</h4>
            <ul className="space-y-4 text-zinc-500 text-sm uppercase tracking-widest font-bold">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-emerald-400 transition-colors">Our Programs</a></li>
              <li><a href="#trainers" className="hover:text-emerald-400 transition-colors">Trainers</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Membership</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl uppercase mb-8 tracking-wider">Contact Us</h4>
            <ul className="space-y-6 text-zinc-500 text-sm">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>123 Iron Street, Muscle District<br />New York, NY 10001</span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>+1 (555) 000-IRON</span>
              </li>
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>grind@gymjunkies.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 text-[10px] uppercase tracking-[0.2em] font-bold">
          <p>© 2026 GymJunkies. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop" 
                alt="Gym Interior" 
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-emerald-500/30 rounded-tl-3xl" />
            
            <div className="absolute bottom-8 right-8 bg-zinc-900/90 backdrop-blur-md p-6 rounded-xl border border-white/10 max-w-[200px]">
              <div className="font-display text-4xl text-emerald-500 mb-1">10+</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Years of Building Champions</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4 block">The Philosophy</span>
            <h2 className="font-display text-6xl md:text-7xl uppercase leading-none mb-8">Where Iron<br />Meets Will</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Founded in 2015, GymJunkies started as a small garage setup with a single squat rack and a vision. 
              Today, we are the premier destination for serious athletes who understand that results aren't given—they're earned.
            </p>
            <p className="text-zinc-500 mb-10 leading-relaxed">
              We don't believe in shortcuts, fancy juice bars, or "fitness influencers." 
              We believe in the sound of clanking plates, the smell of chalk, and the relentless pursuit of self-improvement. 
              Our mission is to provide the environment, the tools, and the community you need to break your plateaus.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Hardcore Culture", desc: "No egos, just hard work and mutual respect." },
                { title: "Science-Based", desc: "Our programs are built on proven physiological principles." },
                { title: "Results Driven", desc: "We track progress, not just attendance." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wider text-sm mb-1">{item.title}</h4>
                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "Elite Coaching",
      desc: "Our trainers are world-class athletes with years of professional experience.",
      icon: Target
    },
    {
      title: "Premium Gear",
      desc: "Top-of-the-line equipment from Rogue, Hammer Strength, and Eleiko.",
      icon: Shield
    },
    {
      title: "24/7 Access",
      desc: "The grind never stops. Train whenever inspiration strikes, day or night.",
      icon: Clock
    }
  ];

  return (
    <section className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((f, i) => (
            <div key={i} className="group">
              <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-500 transition-colors duration-500">
                <f.icon className="w-8 h-8 text-emerald-500 group-hover:text-black transition-colors duration-500" />
              </div>
              <h3 className="font-display text-3xl uppercase mb-4 tracking-tight">{f.title}</h3>
              <p className="text-zinc-500 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans selection:bg-emerald-500 selection:text-black">
      <Navbar onJoinClick={() => setIsJoinModalOpen(true)} />
      <Hero onJoinClick={() => setIsJoinModalOpen(true)} />
      <Stats />
      <About />
      <Features />
      <Programs />
      <Trainers />
      <Pricing onJoinClick={() => setIsJoinModalOpen(true)} />
      <Footer />
      
      <JoinModal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
    </div>
  );
}
