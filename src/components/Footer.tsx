/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Star, Quote, CheckCircle2, Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export function StudentReviews() {
  const reviews = [
    {
      id: 1,
      name: "Rahul Verma",
      college: "GOP College of Pharmacy",
      text: "The handwritten notes are a life saver! I was struggling with Pharmacology, but these simplified diagrams and points helped me score 85% in my sessional exams.",
      rating: 5,
      avatar: "RV"
    },
    {
      id: 2,
      name: "Sneha Patil",
      college: "Mumbai University",
      text: "PYQs with solutions are very well organized. I saves hours of searching. Highly recommend TGPCOP Notes to every B.Pharm student out there.",
      rating: 5,
      avatar: "SP"
    },
    {
       id: 3,
       name: "Aniket Gupta",
       college: "Delhi Institute of Pharmacy",
       text: "Combo packs are very affordable. The PDF quality is amazing and you get instant access right after payment. Best investment for my degree.",
       rating: 4,
       avatar: "AG"
    }
  ];

  return (
    <section className="py-24 bg-bg-light overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-primary-navy mb-4 tracking-tighter">Trusted by <span className="text-primary-green">10,000+</span> Future Pharmacists</h2>
          <p className="text-gray-500 font-semibold max-w-2xl mx-auto">Real success stories from pharmacy students who leveraged our premium resources for excellence.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <motion.div 
              key={review.id}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[3rem] shadow-sm relative group border border-border-soft hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-8 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary-green" />
              </div>
              
              <div className="flex items-center gap-1 text-yellow-500 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 fill-current ${i < review.rating ? "text-yellow-500" : "text-gray-100"}`} />
                ))}
              </div>

              <p className="text-dark-slate/80 leading-relaxed mb-10 font-medium italic">"{review.text}"</p>

              <div className="flex items-center gap-4 border-t border-border-soft pt-8">
                <div className="w-14 h-14 bg-primary-navy rounded-2xl flex items-center justify-center text-white font-extrabold text-lg shadow-lg">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-primary-navy flex items-center gap-2">
                    {review.name}
                    <CheckCircle2 className="w-4 h-4 text-primary-green" />
                  </h4>
                  <p className="text-xs font-extrabold text-gray-400 uppercase tracking-widest">{review.college}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary-navy pt-16 pb-8 text-white">
      <div className="container mx-auto px-4">
        {/* Newsletter / Signup style bar */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-white/10 pb-12 mb-12 gap-8">
          <div className="max-w-md text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Subscribe to our newsletter</h3>
            <p className="text-gray-400 text-sm">Join 10,000+ students and get latest updates on B.Pharm notes & PYQs.</p>
          </div>
          <div className="flex w-full max-w-md">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="bg-white/5 border border-white/10 px-4 py-3 rounded-l-sm w-full outline-none focus:border-primary-green transition-colors text-sm"
            />
            <button className="bg-primary-green hover:bg-green-700 text-white px-6 py-3 rounded-r-sm font-bold text-sm transition-colors whitespace-nowrap">
              SUBSCRIBE
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
               <div className="w-8 h-8 bg-white text-primary-navy rounded flex items-center justify-center font-bold text-lg">
                T
              </div>
              <span className="text-xl font-display font-black tracking-tighter">
                TGPCOP <span className="text-primary-green">NOTES</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8 pr-8 text-sm">
              TGPCOP NOTES is India's leading digital Bookstore for B.Pharmacy students. We provide high-yield notes, PYQs and educational resources strictly following the PCI curriculum.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary-green transition-all border border-white/10">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black mb-8 uppercase tracking-widest text-primary-green">Shop by Category</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-[13px] font-medium">
              {["Semester 1 & 2", "Semester 3 & 4", "Semester 5 & 6", "Semester 7 & 8", "GPAT Entrance Exam"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black mb-8 uppercase tracking-widest text-primary-green">Information</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-[13px] font-medium">
              {["About Us", "Contact Us", "Terms & Conditions", "Privacy Policy", "Sitemap"].map((item) => (
                <li key={item}>
                   <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black mb-8 uppercase tracking-widest text-primary-green">My Account</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-[13px] font-medium">
              {["Login / Register", "My Orders", "My Wishlist", "Digital Vault", "Help Center"].map((item) => (
                <li key={item}>
                   <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:row items-center justify-between gap-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
          <p>© 2026 TGPCOP NOTES. POWERED BY EXCELLENCE.</p>
          <div className="flex gap-10">
             <div className="flex items-center gap-2">
               <MapPin className="w-3 h-3 text-primary-green" /> Nagpur, India
             </div>
             <div className="flex items-center gap-2">
               <Phone className="w-3 h-3 text-primary-green" /> +91 98765 43210
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a 
      href="#" 
      className="fixed bottom-24 right-6 lg:bottom-10 lg:right-10 z-[60] bg-[#25D366] text-white p-5 rounded-[1.5rem] shadow-[0_20px_50px_rgba(37,211,102,0.3)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
    >
      <div className="absolute right-full mr-6 bg-primary-navy text-white px-5 py-3 rounded-2xl shadow-2xl text-sm font-black opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap translate-x-4 group-hover:translate-x-0 border border-white/10">
        Need Help? Chat with Us
      </div>
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </a>
  );
}
