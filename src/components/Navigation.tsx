/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search, ShoppingCart, User, Menu, ChevronDown, Sparkles, Heart } from "lucide-react";
import { motion, useScroll } from "motion/react";
import { useState, useEffect, ReactNode } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-primary-navy text-white py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <span>Customer Support: +91 98765 43210</span>
            <span>Free Delivery on All Semester Bundles</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary-green transition-colors">Track Order</a>
            <a href="#" className="hover:text-primary-green transition-colors">My Account</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`bg-white border-b border-gray-100 transition-all duration-300 ${isScrolled ? "py-2 shadow-md" : "py-4"}`}>
        <div className="container mx-auto px-4 flex items-center justify-between gap-4 sm:gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-navy rounded flex items-center justify-center text-white font-bold text-lg sm:text-xl">
              T
            </div>
            <span className="text-xl sm:text-2xl font-display font-black tracking-tighter text-primary-navy">
              TGPCOP <span className="text-primary-green">NOTES</span>
            </span>
          </div>

          {/* Search */}
          <div className="hidden lg:flex flex-1 max-w-2xl relative">
            <input 
              type="text" 
              placeholder="Search by Semester, Subject, or PYQ..."
              className="w-full bg-gray-50 border border-gray-200 rounded-sm py-2.5 px-4 pr-12 focus:border-primary-navy outline-none transition-all text-sm"
            />
            <button className="absolute right-0 top-0 bottom-0 px-5 bg-primary-navy text-white rounded-r-sm hover:bg-opacity-90 transition-colors">
              <Search className="w-5 h-5 shadow-sm" />
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 sm:gap-7 text-primary-navy">
            <div className="flex flex-col items-center cursor-pointer group">
              <User className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-primary-green transition-colors" />
              <span className="text-[9px] sm:text-[10px] font-bold uppercase mt-1 hidden sm:block">Account</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer group relative">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-primary-green transition-colors" />
              <span className="text-[9px] sm:text-[10px] font-bold uppercase mt-1 hidden sm:block">Wishlist</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer group relative">
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-primary-green transition-colors" />
              <span className="absolute -top-1 sm:-top-2 -right-1 w-4 h-4 bg-primary-green text-white text-[10px] flex items-center justify-center rounded-full font-bold">0</span>
              <span className="text-[9px] sm:text-[10px] font-bold uppercase mt-1 hidden sm:block">Cart</span>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Nav Bar (Arihant Style) */}
      <nav className="bg-white border-b border-gray-100 shadow-sm hidden md:block">
        <div className="container mx-auto px-4">
          <ul className="flex items-center gap-7 py-3 text-[11px] font-black uppercase tracking-widest text-primary-navy">
            <li className="flex items-center gap-2 cursor-pointer hover:text-primary-green transition-colors border-r border-gray-200 pr-7 group">
              <Menu className="w-4 h-4 group-hover:rotate-90 transition-transform" /> Categories
            </li>
            {["B.Pharm", "Handwritten", "PYQ Papers", "Semester Wise", "MCQs", "GPAT Notes"].map((cat) => (
              <li key={cat} className="cursor-pointer hover:text-primary-green transition-colors relative group">
                {cat}
                <div className="absolute -bottom-3 left-0 w-0 h-0.5 bg-primary-green transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export function MobileBottomNav() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-100 z-50 flex items-center justify-around px-4">
      <NavItem icon={<Menu className="w-5 h-5" />} label="Categories" />
      <NavItem icon={<Search className="w-5 h-5" />} label="Search" active />
      <NavItem icon={<ShoppingCart className="w-5 h-5" />} label="Cart" />
      <NavItem icon={<User className="w-5 h-5" />} label="Account" />
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: ReactNode; label: string; active?: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-1 ${active ? "text-primary-green" : "text-gray-400"}`}>
      {icon}
      <span className="text-[10px] font-medium uppercase tracking-wider">{label}</span>
    </div>
  );
}
