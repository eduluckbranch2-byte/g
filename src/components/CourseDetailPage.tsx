import { motion } from 'motion/react';
import { Course } from '../types.tsx';
import { ArrowLeft, CheckCircle2, ChevronRight, User, Calendar, BookOpen } from 'lucide-react';

const CourseDetailPage = ({ course, onBack }: { course: Course, onBack: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen bg-slate-950 pt-20"
    >
      <nav className="fixed top-0 left-0 right-0 z-[60] bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Campus
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <div className={`p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl inline-block ${course.color} mb-8`}>
            {course.icon}
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            {course.title} <span className="text-indigo-500">Mastery</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mb-12">
            {course.fullDescription}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-900/50 border border-white/5 p-8 rounded-3xl">
              <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
                <BookOpen className="text-indigo-400" /> Syllabus Overview
              </h3>
              <div className="space-y-4">
                {course.syllabus.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/50 border border-white/5 p-8 rounded-3xl">
              <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
                <User className="text-indigo-400" /> Lead Instructor
              </h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-3xl">🎓</div>
                <div>
                  <h4 className="text-white font-bold">{course.instructor}</h4>
                  <p className="text-slate-500 text-sm">Senior Education Pioneer</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Learn from the best in the field with personalized mentorship and real-world project portfolios.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-32 h-fit">
          <div className="bg-indigo-600 rounded-[2.5rem] p-10 shadow-2xl shadow-indigo-600/20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full" />
            <h3 className="text-3xl font-display font-bold mb-4">Enroll Now</h3>
            <p className="text-indigo-100 mb-8 font-medium">Limited spots available for the 2026 Winter Cohort.</p>
            
            <div className="space-y-4 mb-8">
               <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-indigo-200">Duration</span>
                  <span className="font-bold">{course.duration}</span>
               </div>
               <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-indigo-200">Format</span>
                  <span className="font-bold">Hybrid</span>
               </div>
               <div className="flex justify-between border-b border-white/10 pb-2 text-xl mt-4">
                  <span className="text-indigo-200">Price</span>
                  <span className="font-bold">$1,200</span>
               </div>
            </div>

            <button className="w-full py-4 bg-white text-indigo-600 font-bold rounded-2xl shadow-xl hover:bg-indigo-50 transition-all active:scale-95 flex items-center justify-center gap-2">
               Begin Application <ChevronRight />
            </button>
            <p className="text-center text-[10px] uppercase font-bold tracking-widest mt-6 opacity-60">Full Financial Aid Available</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseDetailPage;
