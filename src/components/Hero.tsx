/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, BookOpen, Download, ShieldCheck, Users } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

export function Hero() {
  return (
    <section className="relative pt-[140px] md:pt-[180px] bg-white overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 items-center gap-12 pb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <span className="text-primary-green font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs mb-4 block">New Edition 2026-27</span>
          <h1 className="text-4xl lg:text-7xl font-extrabold text-primary-navy leading-[1.1] mb-6 tracking-tight">
            The Digital <br /> <span className="text-primary-green">Pharmacy</span> Bookstore
          </h1>
          <p className="text-lg text-gray-500 mb-8 max-w-lg leading-relaxed font-medium">
            India's most trusted platform for B.Pharm students. High-quality handwritten notes, solved PYQs, and semester-wise digital kits designed for success.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-10 py-3.5 bg-primary-navy text-white rounded-sm font-bold hover:bg-opacity-90 transition-all shadow-lg shadow-primary-navy/20 flex items-center gap-2 group">
              Shop Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-3.5 border-2 border-gray-100 text-primary-navy rounded-sm font-bold hover:bg-gray-50 transition-all uppercase text-xs tracking-widest">
              View Catalog
            </button>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="hidden lg:block relative"
        >
          <div className="relative aspect-[4/3] bg-gray-50 rounded-sm overflow-hidden shadow-[30px_30px_60px_-15px_rgba(7,43,107,0.15)] border-[12px] border-white">
             <img 
               src="https://images.unsplash.com/photo-1544640808-32ca72ac7f67?q=80&w=1000&auto=format&fit=crop" 
               alt="Digital Books"
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-primary-navy/20 to-transparent" />
          </div>
          
          {/* Floating Stats - Arihant style badges */}
          <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-xl rounded-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-green/10 rounded flex items-center justify-center text-primary-green">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xl font-black text-primary-navy leading-none">
                <AnimatedCounter value={10} suffix="k+" />
              </p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Students Joined</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Arihant Style Trust Bar */}
      <div className="bg-gray-50 border-y border-gray-100 py-8 hidden md:block">
        <div className="container mx-auto px-4 grid grid-cols-4 divide-x divide-gray-200">
           {[
             { icon: <ShieldCheck className="w-6 h-6" />, title: "Secure Checkout", desc: "100% Encrypted Payment" },
             { icon: <Download className="w-6 h-6" />, title: "Instant Access", desc: "Download PDF Immediately" },
             { icon: <Users className="w-6 h-6" />, title: "Topper Verified", desc: "Handwritten Perfection" },
             { icon: <BookOpen className="w-6 h-6" />, title: "Global Standard", desc: "Latest PCI Curriculum" }
           ].map((item, idx) => (
             <div key={idx} className="flex items-center gap-5 px-8">
               <div className="text-primary-green shrink-0">
                 {item.icon}
               </div>
               <div>
                 <h4 className="font-bold text-primary-navy text-sm mb-1">{item.title}</h4>
                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-none">{item.desc}</p>
               </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
