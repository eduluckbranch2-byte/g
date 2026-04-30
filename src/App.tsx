/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { WelcomeScreen, CourseCube, CourseDetailModal } from './components/CoreUI';
import { Navbar, TeachersSection, RegistrationForm, BlogSection } from './components/Sections';
import { ChevronDown, ArrowUpRight, Award, Search, X } from 'lucide-react';
import { ALL_COURSES, Course } from './types.tsx';
import CourseDetailPage from './components/CourseDetailPage';

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [viewingDetails, setViewingDetails] = useState<Course | null>(null);

  const filteredCourses = useMemo(() => {
    if (!searchQuery.trim()) return ALL_COURSES;
    return ALL_COURSES.filter(c => 
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // If search matches one exactly, show it on all faces maybe? 
  // User asked "search kre to wo course cube ka har section ma show kre"
  const cubeCourses = useMemo(() => {
    if (searchQuery.trim() && filteredCourses.length > 0) {
      // If we have search results, repeat the leading ones on the cube
      return Array(6).fill(null).map((_, i) => filteredCourses[i % filteredCourses.length]);
    }
    return ALL_COURSES;
  }, [filteredCourses, searchQuery]);

  if (viewingDetails) {
    return <CourseDetailPage course={viewingDetails} onBack={() => setViewingDetails(null)} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-indigo-500/30">
      <AnimatePresence>
        {showWelcome && (
          <WelcomeScreen onComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          
          <main>
            {/* Hero Section */}
            <header className="relative pt-32 pb-20 px-6 overflow-hidden">
               <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 -z-10" />
               <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2 -z-10" />

               <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
                 <div className="text-center lg:text-left">
                   <div className="flex flex-col items-center lg:items-start">
                     <motion.div 
                       initial={{ opacity: 0, y: 30 }}
                       animate={{ opacity: 1, y: 0 }}
                       className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-bold uppercase tracking-widest mb-6"
                     >
                       <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                       Admissions Open for Winter 2026
                     </motion.div>
                     
                     <motion.div
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.1 }}
                       className="relative w-full max-w-md mb-8 group"
                     >
                       <div className="absolute inset-0 bg-indigo-500/10 blur-xl group-focus-within:bg-indigo-500/20 transition-all rounded-2xl" />
                       <div className="relative flex items-center bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 group-focus-within:border-indigo-500 transition-colors shadow-inner">
                         <Search className="text-slate-500 group-focus-within:text-indigo-400 transition-colors" size={24} />
                         <input 
                           type="text" 
                           placeholder="Search your future course..."
                           value={searchQuery}
                           onChange={(e) => setSearchQuery(e.target.value)}
                           className="bg-transparent border-none focus:outline-none text-white w-full px-4 text-lg placeholder:text-slate-600"
                         />
                         {searchQuery && (
                           <button onClick={() => setSearchQuery('')} className="text-slate-500 hover:text-white transition-colors">
                             <X size={20} />
                           </button>
                         )}
                       </div>
                     </motion.div>
                   </div>

                   <motion.h1 
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.2 }}
                     className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter leading-[0.9] mb-8"
                   >
                     Shape the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Future</span> of Learning.
                   </motion.h1>
                   
                   <motion.p 
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.3 }}
                     className="text-slate-400 text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-12"
                   >
                     Experience education redefined. Our premium programs combine cutting-edge technology with industry-leading mentorship.
                   </motion.p>
                   
                   <motion.div 
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.4 }}
                     className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                   >
                     <button className="w-full sm:w-auto px-8 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition-all shadow-2xl shadow-indigo-600/30 active:scale-95 flex items-center justify-center gap-3">
                       Get Started Now <ArrowUpRight className="w-5 h-5" />
                     </button>
                     <button className="w-full sm:w-auto px-8 py-5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl transition-all border border-white/10 active:scale-95">
                       Download Prospectus
                     </button>
                   </motion.div>
                 </div>

                 <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="relative flex justify-center py-10"
                 >
                    <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full scale-50" />
                    <CourseCube courses={cubeCourses} onCourseSelect={setSelectedCourse} />
                 </motion.div>
               </div>

               <div className="pt-20 flex justify-center">
                 <motion.div
                   animate={{ y: [0, 10, 0] }}
                   transition={{ repeat: Infinity, duration: 2 }}
                   className="text-slate-600"
                 >
                   <ChevronDown className="w-8 h-8" />
                 </motion.div>
               </div>
            </header>

            <CourseDetailModal 
              course={selectedCourse} 
              isOpen={!!selectedCourse} 
              onClose={() => setSelectedCourse(null)} 
              onMoreDetails={() => {
                setViewingDetails(selectedCourse);
                setSelectedCourse(null);
                window.scrollTo(0, 0);
              }}
            />

            {/* Main Content Sections... */}
            <RegistrationForm />
            <TeachersSection />
            <BlogSection />
            {/* Same Footer... */}
            <footer className="py-20 px-6 border-t border-white/5 bg-slate-950">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                <div className="col-span-1 md:col-span-1">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-2xl font-display font-bold text-white uppercase tracking-tighter">EduSphere</span>
                  </div>
                  <p className="text-slate-500 mb-8 max-w-xs">Empowering the next generation of digital leaders through premium education and elite mentorship.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-8">Platform</h4>
                  <ul className="space-y-4 text-slate-500 font-medium">
                    <li><a href="#" className="hover:text-indigo-400 transition-colors">Courses Catalog</a></li>
                    <li><a href="#" className="hover:text-indigo-400 transition-colors">Faculty Directory</a></li>
                    <li><a href="#" className="hover:text-indigo-400 transition-colors">Student Portal</a></li>
                    <li><a href="#" className="hover:text-indigo-400 transition-colors">Admissions 2026</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-8">Resources</h4>
                  <ul className="space-y-4 text-slate-500 font-medium">
                    <li><a href="#" className="hover:text-indigo-400 transition-colors">Tech Blog</a></li>
                    <li><a href="#" className="hover:text-indigo-400 transition-colors">Design Lab</a></li>
                    <li><a href="#" className="hover:text-indigo-400 transition-colors">Research Papers</a></li>
                    <li><a href="#" className="hover:text-indigo-400 transition-colors">Events</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-8">Newsletter</h4>
                  <p className="text-slate-500 mb-6 font-medium">Subscribe to get the latest tech insights and admission updates.</p>
                  <div className="flex gap-2">
                    <input type="text" placeholder="Your email" className="bg-slate-900 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none w-full" />
                    <button className="bg-indigo-600 p-2 rounded-xl text-white hover:bg-indigo-700 transition-all">
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-slate-600 text-sm font-medium italic">© 2026 EduSphere Institute. All Rights Reserved. Crafted for Excellence.</p>
                <div className="flex gap-8 text-slate-600 font-medium text-sm">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
              </div>
            </footer>
          </main>
        </motion.div>
      )}
    </div>
  );
}

