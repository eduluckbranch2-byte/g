import { motion } from 'motion/react';
import { UserCheck, Award, Briefcase, Mail, Send, Calendar, Clock, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-950/50 backdrop-blur-md border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
          <Award className="w-5 h-5 text-white" />
        </div>
        <span className="text-2xl font-display font-bold text-white uppercase tracking-tighter">EduSphere</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        {['Courses', 'About', 'Faculty', 'Blog'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
            {item}
          </a>
        ))}
        <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-full transition-all shadow-lg shadow-indigo-500/20 active:scale-95">
          Admissions 2026
        </button>
      </div>
    </div>
  </nav>
);

const TeacherCard = ({ name, role, exp, credentials, image }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-slate-900/50 border border-white/5 rounded-3xl p-8 hover:bg-slate-900 transition-all group overflow-hidden relative"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 blur-3xl rounded-full translate-x-10 -translate-y-10 group-hover:bg-indigo-600/20 transition-all" />
    <div className="flex items-start gap-6 mb-8 relative">
      <img src={image} alt={name} className="w-20 h-20 rounded-2xl object-cover ring-4 ring-indigo-500/20" referrerPolicy="no-referrer" />
      <div>
        <h4 className="text-xl font-display font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">{name}</h4>
        <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">{role}</p>
      </div>
    </div>
    <div className="space-y-4 relative">
      <div className="flex items-center gap-3 text-slate-300">
        <Briefcase className="w-4 h-4 text-indigo-500" />
        <span className="text-sm">{exp} Years of Experience</span>
      </div>
      <div className="flex items-center gap-3 text-slate-300">
        <Award className="w-4 h-4 text-indigo-500" />
        <span className="text-sm">{credentials}</span>
      </div>
      <div className="flex items-center gap-3 text-slate-300">
        <Mail className="w-4 h-4 text-indigo-500" />
        <span className="text-sm">Reach Out directly</span>
      </div>
    </div>
  </motion.div>
);

const TeachersSection = () => {
  const teachers = [
    {
      name: "Dr. Sarah Mitchell",
      role: "AI Department Head",
      exp: "15",
      credentials: "PhD from Stanford University",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
      name: "Prof. James Chen",
      role: "Senior UX Specialist",
      exp: "12",
      credentials: "MFA from RISD | ex-Google Designer",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
    },
    {
      name: "Elena Rodriguez",
      role: "Cyber Security Lead",
      exp: "10",
      credentials: "CEH, CISSP Certified Expert",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
    }
  ];

  return (
    <section id="faculty" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Meet the Visionaries</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">Our faculty members are industry veterans dedicated to shaping the next generation of pioneers.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teachers.map((teacher, i) => (
          <TeacherCard key={i} {...teacher} />
        ))}
      </div>
    </section>
  );
};

const RegistrationForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="bg-gradient-to-br from-slate-900 to-indigo-950/20 border border-indigo-500/10 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-6 leading-tight">Start Your Transformation Today</h2>
            <p className="text-slate-300 text-lg mb-8">Join thousands of students who have fast-tracked their careers with our premium programs.</p>
            <div className="space-y-6">
              {[
                { label: 'Classes Start', value: 'Sept 15, 2026', icon: Calendar },
                { label: 'Schedule', value: 'Flexible Online/Hybrid', icon: Clock },
                { label: 'Admissions Status', value: 'Limited Seats Left', icon: UserCheck }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-950/50 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-inner">
            {submitted ? (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-12">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                   <Send className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Registration Received!</h3>
                <p className="text-slate-400">Our admissions officer will contact you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">FullName</label>
                  <input required type="text" placeholder="John Doe" className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-indigo-500 focus:outline-none transition-all placeholder:text-slate-600" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
                  <input required type="email" placeholder="john@example.com" className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-indigo-500 focus:outline-none transition-all placeholder:text-slate-600" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Preferred Course</label>
                  <select required className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-indigo-500 appearance-none focus:outline-none transition-all">
                    <option>Artificial Intelligence</option>
                    <option>Data Science</option>
                    <option>Cyber Security</option>
                    <option>UX Design</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-3 transition-all active:scale-95 group">
                  Confirm Admission <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[10px] text-slate-600 text-center uppercase tracking-tighter">By clicking you agree to our terms of service.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const BlogSection = () => {
  const posts = [
    {
      title: "The Future of AI in 2026",
      date: "May 12, 2026",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop"
    },
    {
      title: "Design Systems for Global Scale",
      date: "June 05, 2026",
      category: "UX/UI",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?w=500&h=300&fit=crop"
    },
    {
      title: "Quantum Computing Basics",
      date: "July 20, 2026",
      category: "Education",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop"
    }
  ];

  return (
    <section id="blog" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Latest Insights</h2>
          <p className="text-slate-400 text-lg">Stay updated with the latest trends and institute news.</p>
        </div>
        <button className="flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors">
          View All Articles <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {posts.map((post, i) => (
          <motion.article key={i} whileHover={{ y: -5 }} className="group cursor-pointer">
            <div className="relative h-64 overflow-hidden rounded-[2rem] mb-6">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute top-4 left-4 px-4 py-1.5 bg-indigo-600 rounded-full text-xs font-bold text-white shadow-lg">
                {post.category}
              </div>
            </div>
            <div className="flex items-center gap-3 text-slate-500 text-sm font-medium mb-3">
              <Calendar className="w-4 h-4" /> {post.date}
            </div>
            <h3 className="text-2xl font-display font-bold text-white group-hover:text-indigo-400 transition-colors leading-tight">
              {post.title}
            </h3>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export { Navbar, TeachersSection, RegistrationForm, BlogSection };
