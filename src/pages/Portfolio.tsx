import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import heroImg from "@/assets/hero-interior.jpg";
import officeImg from "@/assets/office-interior.jpg";
import kitchenImg from "@/assets/modular-kitchen.jpg";
import renovationImg from "@/assets/renovation.jpg";
import heroWide from "@/assets/hero-wide.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/config/siteConfig";

const projects = [
  { image: heroImg, title: "Contemporary Living Room", category: "Living Room", area: "450 sq ft", budget: "₹8-12 Lakhs" },
  { image: portfolio1, title: "Serene Master Bedroom", category: "Bedroom", area: "300 sq ft", budget: "₹5-8 Lakhs" },
  { image: kitchenImg, title: "Modern Modular Kitchen", category: "Kitchen", area: "120 sq ft", budget: "₹4-6 Lakhs" },
  { image: officeImg, title: "Executive Corner Office", category: "Office", area: "350 sq ft", budget: "₹6-10 Lakhs" },
  { image: portfolio3, title: "Luxury Spa Bathroom", category: "Bedroom", area: "100 sq ft", budget: "₹3-5 Lakhs" },
  { image: portfolio4, title: "Grand Dining Space", category: "Living Room", area: "280 sq ft", budget: "₹5-8 Lakhs" },
  { image: heroWide, title: "Penthouse Living Area", category: "Luxury Homes", area: "1200 sq ft", budget: "₹25-40 Lakhs" },
  { image: renovationImg, title: "Complete Home Makeover", category: "Living Room", area: "1800 sq ft", budget: "₹20-30 Lakhs" },
  { image: portfolio2, title: "Designer Kitchen Island", category: "Kitchen", area: "180 sq ft", budget: "₹6-9 Lakhs" },
];

const categories = ["All", "Living Room", "Bedroom", "Kitchen", "Office", "Luxury Homes"];

const PortfolioPage = () => {
  const [active, setActive] = useState("All");
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null);
  const isMobile = useIsMobile();
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={portfolio4} alt={`${siteConfig.companyName} Portfolio`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative z-10 text-center">
          <motion.p className="body-sm text-accent mb-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>Our Work</motion.p>
          <motion.h1 className="heading-xl text-primary-foreground" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            Portfolio
          </motion.h1>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 md:px-12 lg:px-24 py-8 border-b border-border md:sticky md:top-[65px] bg-background/95 backdrop-blur-md z-30">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`body-sm px-5 py-2 border transition-all duration-300 ${
                active === cat ? "border-accent bg-accent text-accent-foreground" : "border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filtered.map((p, i) => (
            <ScrollReveal key={p.title + i} delay={i * 0.03}>
              <motion.div layout className="group relative overflow-hidden cursor-pointer" whileHover={{ y: -4 }} onClick={() => setSelectedImage({ image: p.image, title: p.title })}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-colors duration-500 flex items-end">
                  <div className="p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="body-sm text-accent mb-1">{p.category}</p>
                    <h3 className="heading-sm text-primary-foreground mb-2">{p.title}</h3>
                    <div className="flex gap-4 text-primary-foreground/60 text-xs">
                      <span>{p.area}</span>
                      <span>{p.budget}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="heading-lg text-primary-foreground mb-4">Like What You See?</h2>
            <p className="body-lg text-primary-foreground/60 mb-8">Let's create something beautiful for your space.</p>
            <Link to="/contact" className="btn-gold-outline">Start a Project</Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-[90vw] p-2 bg-background border-border">
          {selectedImage && (
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[85vh] object-contain rounded"
            />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
