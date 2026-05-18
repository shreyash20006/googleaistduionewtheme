/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Star, Download, Bookmark, ArrowRight, FileText } from "lucide-react";
import React, { ReactNode } from "react";

export interface Note {
  id: string;
  title: string;
  semester: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  isBestseller?: boolean;
  isHandwritten?: boolean;
  tag?: string;
  image: string;
}

export const ProductCard: React.FC<{ note: Note }> = ({ note }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-sm overflow-hidden border border-gray-200 hover:border-primary-green hover:shadow-[0_10px_30px_rgb(0,0,0,0.05)] transition-all duration-300 flex flex-col h-full"
    >
      {/* Badge */}
      {note.tag && (
        <div className="absolute top-0 right-0 z-10">
          <span className="bg-primary-green text-white text-[9px] font-black px-3 py-1 uppercase tracking-widest block">
            {note.tag}
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 p-4 border-b border-gray-100">
        <img 
          src={note.image} 
          alt={note.title} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">Semester {note.semester}</span>
        <h3 className="font-bold text-primary-navy text-sm mb-2 line-clamp-2 leading-snug group-hover:text-primary-green transition-colors h-10">
          {note.title}
        </h3>
        
        <div className="flex items-center gap-1 mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3 h-3 fill-current ${i < Math.floor(note.rating) ? "text-yellow-400" : "text-gray-200"}`} />
            ))}
          </div>
          <span className="text-[10px] text-gray-400 font-bold">({note.reviews})</span>
        </div>

        <div className="mt-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg font-black text-primary-navy">₹{note.price}</span>
            <span className="text-xs text-gray-400 line-through font-bold">₹{note.originalPrice}</span>
          </div>

          <button className="w-full py-2.5 bg-primary-navy text-white text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-primary-green transition-colors flex items-center justify-center gap-2 group-hover:shadow-md" type="button">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export const SectionHeader: React.FC<{ title: string; subtitle?: string; linkText?: string }> = ({ title, subtitle, linkText }) => {
  return (
    <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
      <div className="relative">
        <h2 className="text-2xl font-black text-primary-navy tracking-tight uppercase flex items-center gap-3">
          <div className="w-1.5 h-6 bg-primary-green" />
          {title}
        </h2>
        <div className="absolute -bottom-4 left-0 w-24 h-1 bg-primary-navy" />
      </div>
      {linkText && (
        <a href="#" className="flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-primary-navy hover:text-primary-green transition-colors">
          {linkText} <ArrowRight className="w-4 h-4 cursor-pointer" />
        </a>
      )}
    </div>
  );
};

export const CategoryCard: React.FC<{ semester: string; icon: ReactNode }> = ({ semester, icon }) => {
  return (
    <motion.div 
      whileHover={{ y: -5, scale: 1.02, shadow: "0 20px 25px -5px rgba(7, 43, 107, 0.1)" }}
      className="glass-card p-10 rounded-[2.5rem] flex flex-col items-center text-center cursor-pointer group transition-all duration-300"
    >
      <div className="w-16 h-16 rounded-2xl bg-bg-light flex items-center justify-center text-primary-navy mb-6 group-hover:bg-primary-navy group-hover:text-white transition-all duration-300 shadow-sm shadow-primary-navy/5">
        {icon}
      </div>
      <h4 className="font-extrabold text-primary-navy mb-1 group-hover:text-primary-navy transition-colors text-lg tracking-tight">Sem {semester}</h4>
      <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest">Medical Notes</p>
    </motion.div>
  );
};
