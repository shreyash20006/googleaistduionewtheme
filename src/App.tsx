import { Navbar, MobileBottomNav } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ProductCard, SectionHeader, CategoryCard, Note } from "./components/ProductGrid";
import { StudentReviews, Footer, WhatsAppButton } from "./components/Footer";
import { AnimatedCounter } from "./components/AnimatedCounter";
import { motion } from "motion/react";
import { 
  BookMarked, 
  Library, 
  Stethoscope, 
  Dna, 
  Pill, 
  Microscope, 
  Brain,
  FlaskConical,
  ChevronRight
} from "lucide-react";

const BESTSELLERS: Note[] = [
  {
    id: "1",
    title: "Pharmacology II - Comprehensive Exam Notes",
    semester: "5",
    price: 149,
    originalPrice: 299,
    rating: 4.9,
    reviews: 128,
    isBestseller: true,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Medicinal Chemistry - Semester 4 Handwritten Notes",
    semester: "4",
    price: 199,
    originalPrice: 399,
    rating: 5.0,
    reviews: 85,
    isHandwritten: true,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "Physical Pharmaceutics I - Full Prep Guide",
    semester: "3",
    price: 129,
    originalPrice: 249,
    rating: 4.8,
    reviews: 210,
    isBestseller: true,
    image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "4",
    title: "Human Anatomy & Physiology - Complete Notes",
    semester: "1",
    price: 99,
    originalPrice: 199,
    rating: 4.7,
    reviews: 320,
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=400&auto=format&fit=crop"
  }
];

const LATEST: Note[] = [
  {
    id: "5",
    title: "Biostatistics & Research Methodology",
    semester: "8",
    price: 159,
    originalPrice: 349,
    rating: 4.6,
    reviews: 42,
    tag: "New",
    image: "https://images.unsplash.com/photo-1543286386-713bdd54867e?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "6",
    title: "Pharmacy Practice - Semester 7 PYQs",
    semester: "7",
    price: 89,
    originalPrice: 149,
    rating: 4.9,
    reviews: 18,
    image: "https://images.unsplash.com/photo-15840174443b0-27bbbd8c148c?q=80&w=400&auto=format&fit=crop"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-white pb-16 lg:pb-0">
      <Navbar />
      
      <main>
        <Hero />

        {/* Semester Categories */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader 
              title="Shop By Semester" 
              linkText="View All"
            />
            <div className="grid grid-cols-2 lg:grid-cols-8 gap-4">
              {[
                { sem: "1", icon: <BookMarked /> },
                { sem: "2", icon: <Library /> },
                { sem: "3", icon: <Stethoscope /> },
                { sem: "4", icon: <Dna /> },
                { sem: "5", icon: <Pill /> },
                { sem: "6", icon: <Microscope /> },
                { sem: "7", icon: <Brain /> },
                { sem: "8", icon: <FlaskConical /> }
              ].map((item) => (
                <motion.div 
                  key={item.sem}
                  whileHover={{ y: -5 }}
                  className="bg-white border border-gray-200 p-6 flex flex-col items-center text-center group cursor-pointer hover:border-primary-green hover:shadow-md transition-all rounded-sm"
                >
                  <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-primary-navy mb-3 group-hover:bg-primary-navy group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Semester</span>
                  <span className="text-xl font-black text-primary-navy">0{item.sem}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bestsellers Section */}
        <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4">
            <SectionHeader 
              title="Bestselling Notes" 
              linkText="Shop Bestsellers"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {BESTSELLERS.map(note => (
                <ProductCard key={note.id} note={note} />
              ))}
            </div>
          </div>
        </section>

        {/* Combo Packs Banner */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-primary-navy text-white relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 rounded-sm">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-green/5 skew-x-12 translate-x-1/2 pointer-events-none" />
              
              <div className="relative z-10 flex-1 p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/10">
                <span className="inline-block px-3 py-1 bg-primary-green text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                  Recommended Bundle
                </span>
                <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight uppercase tracking-tight">Full Semester <br /> <span className="text-primary-green">Master Kits</span></h2>
                <p className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed font-medium">Save up to 40% with our comprehensive digital kits. Contains handwritten notes, solved PYQs, and high-yield MCQs in one bundle.</p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-10 py-3.5 bg-primary-green text-white rounded-sm font-bold hover:bg-green-700 transition-all uppercase text-xs tracking-widest shadow-xl shadow-primary-green/20">
                    Explore Kits
                  </button>
                  <button className="px-10 py-3.5 border border-white/20 text-white rounded-sm font-bold hover:bg-white/5 transition-all uppercase text-xs tracking-widest">
                    How it works
                  </button>
                </div>
              </div>

              <div className="relative z-10 w-full lg:w-auto p-10 lg:p-20 flex flex-col items-center justify-center bg-white/5 h-full self-stretch">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2">Flat Discount</span>
                <span className="text-8xl font-black text-primary-green tracking-tighter leading-none mb-4">40%</span>
                <span className="text-xs font-bold uppercase tracking-widest text-primary-green underline decoration-2 underline-offset-4">Limited Offer</span>
              </div>
            </div>
          </div>
        </section>

        {/* Latest & Handwritten Mix */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
              <div>
                <SectionHeader title="Latest Uploads" linkText="View All" />
                <div className="grid sm:grid-cols-2 gap-6">
                  {LATEST.map(note => (
                    <ProductCard key={note.id} note={note} />
                  ))}
                </div>
              </div>
              <div className="mt-12 lg:mt-0">
                <SectionHeader title="Topper Gems" linkText="View All" />
                <div className="space-y-4">
                  {[4, 5, 6].map((semester) => (
                    <div key={semester} className="flex items-center gap-6 p-4 bg-white border border-gray-150 hover:border-primary-green transition-all group cursor-pointer rounded-sm shadow-sm">
                      <div className="w-16 h-20 bg-gray-50 overflow-hidden shrink-0 border border-gray-100 p-2">
                         <img src={`https://images.unsplash.com/photo-1544640808-32ca72ac7f67?q=80&w=200&auto=format&fit=crop`} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" alt="Notes" />
                      </div>
                      <div className="flex flex-col flex-1">
                        <span className="text-[10px] font-black uppercase tracking-[0.1em] text-primary-green mb-1">Academic Year 2026</span>
                        <h4 className="font-bold text-primary-navy group-hover:text-primary-green transition-colors line-clamp-1 text-sm">Pharmacognosy & Phytochemistry Handwritten</h4>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-base font-black text-primary-navy">₹199</span>
                          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest line-through">₹499</span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary-green transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <StudentReviews />

        {/* Why Choose Section */}
        <section className="py-24 bg-white text-center">
          <div className="container mx-auto px-4">
            <div className="mb-16">
              <h2 className="text-4xl font-extrabold text-primary-navy mb-4">Why Pharmacy Students Love Us</h2>
              <p className="text-gray-500 font-medium max-w-xl mx-auto">We provide the roadmap to your pharmaceutical career success.</p>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-black text-primary-navy mb-2">
                  <AnimatedCounter value={10000} suffix="+" />
                </div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Active Students</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-black text-primary-navy mb-2">
                  <AnimatedCounter value={500} suffix="+" />
                </div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Digital Resources</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-black text-primary-navy mb-2">
                  <AnimatedCounter value={4.9} decimals={1} suffix="/5" />
                </div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Average Rating</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-black text-primary-navy mb-2">
                   <AnimatedCounter value={98} suffix="%" />
                </div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Success Rate</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: "Topper Verified", desc: "Notes curated and verified by university rankers." },
                { title: "Simplified Content", desc: "Complex pharmacy topics explained in easy language." },
                { title: "Instant Delivery", desc: "Download your PDFs immediately after purchase." },
                { title: "Lifetime Access", desc: "Log in anytime to download your purchased notes again." }
              ].map((item, idx) => (
                <div key={idx} className="p-8 bg-bg-light rounded-[2.5rem] border border-border-soft text-center hover:bg-primary-green/5 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary-green mx-auto mb-6 shadow-sm border border-border-soft">
                    <CheckCircle2Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-primary-navy mb-3">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-bg-light">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-extrabold text-primary-navy text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "How will I receive the notes after purchase?", a: "You will get an instant download link on your screen after payment, and we also send the link to your registered email address." },
                { q: "Are these notes suitable for GCP students?", a: "Yes, our notes are strictly according to the latest PCI curriculum followed by major pharmacy colleges including GCP." },
                { q: "Can I print these notes?", a: "Absolutely! The PDFs are high-resolution and optimized for single-sided or double-sided printing." },
                { q: "What if I lose the download link?", a: "Don't worry! Just log in to your account or contact our WhatsApp support with your order ID." }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-border-soft">
                  <h4 className="font-bold text-primary-navy mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 bg-primary-green/10 text-primary-green rounded-full flex items-center justify-center text-xs text-center font-bold">Q</span>
                    {faq.q}
                  </h4>
                  <p className="text-gray-500 text-sm ml-8 font-medium">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <MobileBottomNav />
      <WhatsAppButton />
    </div>
  );
}

function CheckCircle2Icon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
    </svg>
  );
}
