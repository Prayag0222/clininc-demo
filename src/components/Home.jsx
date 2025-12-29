'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // UNCOMMENT FOR NEXT.JS
import { 
  Stethoscope, 
  Calendar, 
  ShieldCheck, 
  Activity, 
  Users, 
  Clock, 
  MapPin, 
  Phone, 
  Menu, 
  X, 
  ChevronRight, 
  Star,
  Heart,
  Microscope,
  Smile
} from 'lucide-react';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('general');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden selection:bg-teal-500 selection:text-white">
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes gentle-pulse {
          0% { box-shadow: 0 0 0 0 rgba(20, 184, 166, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(20, 184, 166, 0); }
          100% { box-shadow: 0 0 0 0 rgba(20, 184, 166, 0); }
        }
        .animate-fade-in { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-pulse-soft { animation: gentle-pulse 2s infinite; }
        .glass-nav {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(226, 232, 240, 0.6);
        }
        .blob-bg {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23F0FDFA' d='M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.3,82.1,22.9,71.1,34.4C60,45.9,49.3,55.3,37.2,62.5C25.1,69.7,11.5,74.7,-1.2,76.8C-13.9,78.9,-26.9,78.1,-38.5,72.6C-50.1,67.1,-60.3,56.9,-68.4,45C-76.5,33.1,-82.5,19.5,-83.4,5.5C-84.3,-8.5,-80.1,-22.9,-71.7,-34.7C-63.3,-46.5,-50.7,-55.7,-37.9,-63.5C-25.1,-71.3,-12.1,-77.7,1.8,-80.8C15.7,-83.9,29.3,-83.7,44.7,-76.4Z' transform='translate(100 100)' /%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right top;
          background-size: contain;
        }
      `}</style>

      {/* Top Bar - Very important for clinics (Contact/Hours) */}
      <div className="bg-teal-900 text-teal-50 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm font-medium">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={14} className="text-teal-300" /> +1 (555) 123-4567</span>
            <span className="flex items-center gap-2"><MapPin size={14} className="text-teal-300" /> 12 Medical Plaza, New York</span>
          </div>
          <span className="flex items-center gap-2"><Clock size={14} className="text-teal-300" /> Mon - Sat: 8:00 AM - 8:00 PM</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 shadow-sm' : 'bg-white py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-linear-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-teal-500/20">
              <Activity size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              Nova<span className="text-teal-600">Health</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'Doctors', 'Patients', 'Locations'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-semibold text-slate-600 hover:text-teal-600 transition-colors"
              >
                {item}
              </button>
            ))}
            <button className="px-6 py-2.5 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20 flex items-center gap-2 animate-pulse-soft">
              <Calendar size={18} /> Book Appointment
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-900 p-2">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 flex flex-col gap-4 shadow-xl">
             {['Services', 'Doctors', 'Patients', 'Locations'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-lg font-medium text-slate-600 hover:text-teal-600"
              >
                {item}
              </button>
            ))}
            <button className="w-full py-3 rounded-lg bg-teal-600 text-white font-semibold flex items-center justify-center gap-2">
              <Calendar size={18} /> Book Now
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full blob-bg opacity-40 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium mb-6">
              <ShieldCheck size={14} /> Rated #1 Clinic in 2024
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6">
              Modern Healthcare <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-600 to-cyan-600">Focused on You.</span>
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Experience a new standard of medical care. Advanced technology, compassionate specialists, and a holistic approach to your well-being.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-full bg-teal-600 text-white font-bold hover:bg-teal-700 transition-all shadow-xl shadow-teal-600/20 flex items-center justify-center gap-2">
                Find a Doctor <ChevronRight size={18} />
              </button>
              <button className="px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-bold hover:border-teal-200 hover:bg-teal-50 transition-all">
                Our Departments
              </button>
            </div>

            <div className="mt-12 flex items-center gap-8">
               <div>
                  <h4 className="text-2xl font-bold text-slate-900">15k+</h4>
                  <p className="text-sm text-slate-500">Happy Patients</p>
               </div>
               <div className="w-px h-10 bg-slate-200"></div>
               <div>
                  <h4 className="text-2xl font-bold text-slate-900">4.9</h4>
                  <div className="flex text-yellow-400 gap-0.5">
                     {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <p className="text-sm text-slate-500">Review Score</p>
               </div>
            </div>
          </div>

          <div className="relative hidden lg:block h-[600px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&q=80&w=1200"
              alt="Doctor"
              fill={true}
              className="object-cover rounded-[2.5rem] shadow-2xl"
              priority={true}
            />
           
            {/* Floating Card */}
            <div className="absolute bottom-10 left-[-20px] bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs animate-[gentle-pulse_4s_infinite]">
               <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                     <Heart size={24} fill="currentColor" />
                  </div>
                  <div>
                     <p className="font-bold text-slate-900">Cardiology</p>
                     <p className="text-xs text-slate-500">Top Department</p>
                  </div>
               </div>
               <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-teal-500 rounded-full"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-teal-600 font-semibold tracking-wide uppercase text-sm">Comprehensive Care</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2 mb-4">Specialized Departments</h2>
            <p className="text-slate-600">Combining medical excellence with a warm, patient-centered approach to treat a wide range of conditions.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'General Practice', icon: Stethoscope, desc: 'Routine check-ups, health screenings, and preventive care for all ages.' },
              { title: 'Dental Care', icon: Smile, desc: 'Cosmetic dentistry, implants, and routine hygiene services.' },
              { title: 'Cardiology', icon: Heart, desc: 'Advanced heart care including ECG, echocardiograms, and consultations.' },
              { title: 'Pediatrics', icon: Users, desc: 'Compassionate care for infants, children, and adolescents.' },
              { title: 'Laboratory', icon: Microscope, desc: 'On-site diagnostics with rapid results and accurate reporting.' },
              { title: 'Emergency', icon: Activity, desc: '24/7 urgent care for non-life-threatening injuries and illnesses.' },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{service.desc}</p>
                <div className="mt-6 flex items-center text-teal-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Feature Section */}
      <section className="py-24 bg-white overflow-hidden">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="order-2 lg:order-1 relative">
                  <div className="absolute inset-0 bg-teal-600 rounded-3xl rotate-3 opacity-10"></div>
                  <Image 
                     src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200"
                     alt="Waiting Room"
                     width={800}
                     height={600}
                     className="relative rounded-3xl shadow-lg object-cover"
                  />
                  {/* <img 
                     src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200"
                     alt="Waiting Room"
                     className="relative rounded-3xl shadow-lg object-cover w-full h-auto"
                  /> */}
               </div>
               
               <div className="order-1 lg:order-2">
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Patient-First Philosophy</h2>
                  <p className="text-lg text-slate-600 mb-8">
                     We believe healthcare should be accessible, transparent, and comfortable. Our facility is designed to reduce anxiety and promote healing.
                  </p>

                  <div className="space-y-6">
                     {[
                        { title: 'Online Booking System', desc: 'Schedule appointments in seconds, manage prescriptions online.' },
                        { title: 'Experienced Specialists', desc: 'Board-certified doctors with 10+ years of average experience.' },
                        { title: 'Insurance Accepted', desc: 'We partner with all major insurance providers for seamless billing.' }
                     ].map((feat, i) => (
                        <div key={i} className="flex gap-4">
                           <div className="shrink-0 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700">
                              <ShieldCheck size={20} />
                           </div>
                           <div>
                              <h4 className="font-bold text-slate-900 text-lg">{feat.title}</h4>
                              <p className="text-slate-500 text-sm">{feat.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Doctors/Team */}
      <section id="doctors" className="py-24 bg-slate-50">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
               <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Meet Our Specialists</h2>
                  <p className="text-slate-500 mt-2">Dedicated to your health and recovery.</p>
               </div>
               <button className="hidden md:flex text-teal-600 font-semibold items-center gap-2 hover:text-teal-800">
                  View All Doctors <ChevronRight size={20} />
               </button>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
               {[
                  { name: 'Dr. Sarah Lin', role: 'Chief Cardiologist', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400' },
                  { name: 'Dr. James Carter', role: 'Pediatrician', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400' },
                  { name: 'Dr. Emily Chen', role: 'Dermatologist', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400' },
                  { name: 'Dr. Michael Ross', role: 'Orthopedic Surgeon', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400' },
               ].map((doc, idx) => (
                  <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
                     <div className="h-64 overflow-hidden">
                        <Image src={doc.img} alt={doc.name} width={400} height={400} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        {/* <img src={doc.img} alt={doc.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" /> */}
                     </div>
                     <div className="p-6 text-center">
                        <h3 className="font-bold text-lg text-slate-900">{doc.name}</h3>
                        <p className="text-teal-600 text-sm font-medium">{doc.role}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 px-6 bg-teal-900 text-white relative overflow-hidden">
         {/* Background Pattern */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
         
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Your Health is Our Priority</h2>
            <p className="text-teal-100 text-lg mb-10">
               Book an appointment today and take the first step towards a healthier life. Walk-ins are also welcome.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <button className="px-8 py-4 bg-white text-teal-900 font-bold rounded-full hover:bg-teal-50 transition-colors shadow-lg">
                  Book Appointment Now
               </button>
               <button className="px-8 py-4 border border-teal-400 text-white font-bold rounded-full hover:bg-teal-800 transition-colors">
                  Call (555) 123-4567
               </button>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-16 pb-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
               <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white">
                     <Activity size={18} />
                  </div>
                  <span className="text-xl font-bold text-slate-900">Nova<span className="text-teal-600">Health</span></span>
               </div>
               <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Providing world-class healthcare with a personal touch. Accredited by the International Health Board.
               </p>
            </div>
            
            {[
               { title: 'Quick Links', links: ['About Us', 'Find a Doctor', 'Services', 'Patient Portal'] },
               { title: 'Specialties', links: ['Cardiology', 'Neurology', 'Dental', 'Orthopedics'] },
               { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'] }
            ].map((col, idx) => (
               <div key={idx}>
                  <h4 className="font-bold text-slate-900 mb-4">{col.title}</h4>
                  <ul className="space-y-3">
                     {col.links.map(link => (
                        <li key={link}>
                           <a href="#" className="text-sm text-slate-500 hover:text-teal-600 transition-colors">{link}</a>
                        </li>
                     ))}
                  </ul>
               </div>
            ))}
          </div>
          
          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center">
             <p className="text-slate-400 text-sm">© 2024 NovaHealth Clinic. All rights reserved.</p>
             <div className="flex gap-4 mt-4 md:mt-0">
                {/* Social Icons Placeholder */}
                <div className="w-8 h-8 rounded-full bg-slate-100 hover:bg-teal-100 text-slate-400 hover:text-teal-600 flex items-center justify-center transition-colors cursor-pointer"><Phone size={14}/></div>
                <div className="w-8 h-8 rounded-full bg-slate-100 hover:bg-teal-100 text-slate-400 hover:text-teal-600 flex items-center justify-center transition-colors cursor-pointer"><MapPin size={14}/></div>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;