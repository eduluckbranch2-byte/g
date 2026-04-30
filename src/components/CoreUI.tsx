import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, BookOpen, Users, ArrowRight, X, Clock, BarChart, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Course } from '../types.tsx';

const WelcomeScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 5500); 
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 1.5, ease: [0.7, 0, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 overflow-hidden"
    >
      {/* High-Tech Background: Binary Rain and Data Streams */}
      <div className="absolute inset-0 z-0">
        {/* Binary Rain */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`binary-${i}`}
            initial={{ y: -100, x: `${Math.random() * 100}%`, opacity: 0 }}
            animate={{ y: "110vh", opacity: [0, 0.4, 0] }}
            transition={{
              duration: 8 + Math.random() * 12,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
            className="absolute text-[10px] font-mono text-indigo-500/30 select-none whitespace-nowrap"
            style={{ writingMode: "vertical-rl" }}
          >
            {Array(25).fill(0).map(() => Math.round(Math.random())).join("")}
          </motion.div>
        ))}

        {/* Horizontal Data Streams */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            initial={{ x: "-20%", y: `${Math.random() * 100}%`, opacity: 0 }}
            animate={{ x: "120%", opacity: [0, 0.3, 0] }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
            className="absolute h-px w-64 bg-gradient-to-r from-transparent via-indigo-400 to-transparent shadow-[0_0_15px_rgba(99,102,241,0.5)]"
          />
        ))}

        {/* Ambient Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.15)_0%,transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center justify-center text-center">
        
        {/* Animated Greeting Character */}
        <motion.div 
          initial={{ y: 20, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative w-40 h-40 md:w-56 md:h-56 shrink-0 mb-8"
        >
          {/* Energy Core Glow */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-indigo-500/30 blur-[50px] rounded-full" 
          />
          
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_20px_rgba(79,70,229,0.3)]">
            {/* Robot Head */}
            <circle cx="100" cy="55" r="28" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />
            <motion.rect 
              animate={{ opacity: [1, 0, 1] }} 
              transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 4 }}
              x="85" y="50" width="10" height="3" fill="#818cf8" rx="1.5" 
            />
            <motion.rect 
              animate={{ opacity: [1, 0, 1] }} 
              transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 4 }}
              x="105" y="50" width="10" height="3" fill="#818cf8" rx="1.5" 
            />
            
            {/* Shoulders/Torso */}
            <path d="M60,140 Q100,120 140,140 L155,180 Q100,170 45,180 Z" fill="#6366f1" opacity="0.9" />
            
            {/* Namaste Hands */}
            <motion.g
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.path 
                initial={{ d: "M70,105 Q55,120 65,145" }}
                animate={{ d: "M75,100 Q90,105 100,125" }}
                transition={{ duration: 1.5, delay: 1, ease: "backOut" }}
                stroke="#818cf8" strokeWidth="8" strokeLinecap="round" fill="none"
              />
              <motion.path 
                initial={{ d: "M130,105 Q145,120 135,145" }}
                animate={{ d: "M125,100 Q110,105 100,125" }}
                transition={{ duration: 1.5, delay: 1, ease: "backOut" }}
                stroke="#818cf8" strokeWidth="8" strokeLinecap="round" fill="none"
              />
              <motion.circle 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5 }}
                cx="100" cy="130" r="7" fill="white" className="blur-[1px]"
              />
            </motion.g>
          </svg>
        </motion.div>

        {/* Welcome Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="max-w-2xl"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="p-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full"
            >
              <Sparkles className="w-6 h-6 text-indigo-400" />
            </motion.div>
          </div>

          <h1 className="text-4xl md:text-7xl font-display font-bold tracking-tighter text-white mb-4 leading-tight">
            Namaste, <br />
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">EduSphere</span>
          </h1>
          
          <p className="text-slate-400 text-base md:text-xl font-light tracking-wide mb-10 max-w-lg mx-auto">
            "Your pursuit of specialized education ends here. Step into the future."
          </p>

          <motion.div 
            className="w-48 md:w-64 h-1 bg-slate-900 mx-auto rounded-full overflow-hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div 
              className="h-full bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 4, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-6 text-[10px] font-mono text-slate-700 uppercase tracking-[0.3em]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        Initializing Premium Environment v2.0.6
      </motion.div>
    </motion.div>
  );
};

const CourseCube = ({ courses, onCourseSelect }: { courses: Course[], onCourseSelect: (course: Course) => void }) => {
  const faces = ['front', 'back', 'right', 'left', 'top', 'bottom'];
  
  const faceTransforms: Record<string, string> = {
    front: 'rotateY(0deg) translateZ(150px)',
    back: 'rotateY(180deg) translateZ(150px)',
    right: 'rotateY(90deg) translateZ(150px)',
    left: 'rotateY(-90deg) translateZ(150px)',
    top: 'rotateX(90deg) translateZ(150px)',
    bottom: 'rotateX(-90deg) translateZ(150px)',
  };

  return (
    <div className="perspective-1000 flex items-center justify-center">
      <div className="cube-container animate-cube">
        {faces.map((face, index) => {
          const course = courses[index % courses.length];
          return (
            <motion.div 
              key={face} 
              onClick={() => onCourseSelect(course)}
              style={{ transform: faceTransforms[face] }}
              className="cube-face absolute w-[300px] h-[300px] flex flex-col p-8 text-center border-indigo-500/30 cursor-pointer hover:border-indigo-400 hover:bg-slate-900/95 group rounded-xl bg-slate-900/90 backdrop-blur-md transition-colors"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="flex flex-col h-full items-center justify-center"
              >
                <div className={`mb-4 ${course.color} transform group-hover:scale-110 transition-transform duration-500`}>
                  {course.icon}
                </div>
                <h3 className="text-2xl font-display font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-slate-400 leading-snug">
                  {course.description}
                </p>
                <div className="mt-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-1">
                    View Details <ArrowRight size={12} />
                  </span>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const CourseDetailModal = ({ course, isOpen, onClose, onMoreDetails }: { course: Course | null, isOpen: boolean, onClose: () => void, onMoreDetails: () => void }) => {
  if (!course) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-slate-950/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-full max-w-xl p-8 bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-2xl"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors">
              <X size={24} />
            </button>

            <div className={`w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center ${course.color} mb-6`}>
              {course.icon}
            </div>

            <h2 className="text-4xl font-display font-bold text-white mb-4">{course.title}</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              {course.fullDescription}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-indigo-400">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Duration</p>
                  <p className="text-white font-medium">{course.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-indigo-400">
                  <BarChart size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Level</p>
                  <p className="text-white font-medium">{course.level}</p>
                </div>
              </div>
            </div>

            <button 
              onClick={onMoreDetails}
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl flex items-center justify-center gap-2 group transition-all shadow-xl shadow-indigo-600/20 active:scale-95"
            >
              Explore Full Syllabus <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export { WelcomeScreen, CourseCube, CourseDetailModal };
