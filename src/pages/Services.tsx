import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, Building2, ChefHat, Ruler, ArrowRight, CheckCircle } from "lucide-react";
import heroImg from "@/assets/hero-interior.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import officeImg from "@/assets/office-interior.jpg";
import kitchenImg from "@/assets/modular-kitchen.jpg";
import renovationImg from "@/assets/renovation.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig } from "@/config/siteConfig";

const servicesList = [
  {
    icon: Home,
    title: "Residential Interior Design",
    desc: "We create stunning, personalized living spaces that reflect your lifestyle. From cozy apartments to expansive villas, our designs blend comfort with sophistication.",
    benefits: ["Customized design tailored to your taste", "Space optimization for every room", "Premium material selection", "Complete project management"],
    image: portfolio1,
  },
  {
    icon: Building2,
    title: "Office & Commercial Design",
    desc: "Inspire productivity and impress clients with workspaces designed for success. We create environments that embody your brand while maximizing functionality.",
    benefits: ["Brand-aligned design language", "Ergonomic workspace planning", "Reception & conference room design", "Collaborative zone creation"],
    image: officeImg,
  },
  {
    icon: ChefHat,
    title: "Kitchen & Wardrobe Design",
    desc: "Modular kitchens and custom wardrobes designed for efficiency and elegance. Smart storage solutions with premium finishes that last for years.",
    benefits: ["Modular & customizable layouts", "Premium hardware & fittings", "Smart storage solutions", "Easy maintenance designs"],
    image: kitchenImg,
  },
  {
    icon: Ruler,
    title: "Turnkey Interior Solutions",
    desc: "End-to-end interior design services from concept to completion. We handle everything — design, procurement, execution, and handover.",
    benefits: ["Single point of contact", "Fixed timeline delivery", "Budget transparency", "Quality assurance at every stage"],
    image: renovationImg,
  },
];

const ServicesPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <WhatsAppButton />

    {/* Hero */}
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt={`${siteConfig.companyName} Design Services`} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="relative z-10 text-center">
        <motion.p className="body-sm text-accent mb-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>What We Offer</motion.p>
        <motion.h1 className="heading-xl text-primary-foreground" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
          Our Services
        </motion.h1>
      </div>
    </section>

    {/* Services Detail */}
    {servicesList.map((s, i) => (
      <section key={s.title} className={`section-padding ${i % 2 === 1 ? "bg-secondary" : "bg-background"}`}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction={i % 2 === 0 ? "left" : "right"}>
            <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <motion.img src={s.image} alt={s.title} className="w-full h-[400px] object-cover" whileHover={{ scale: 1.02 }} transition={{ duration: 0.6 }} loading="lazy" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction={i % 2 === 0 ? "right" : "left"}>
            <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <s.icon className="w-8 h-8 text-accent mb-4" />
              <h2 className="heading-lg text-foreground mb-4">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <div className="space-y-3 mb-8">
                {s.benefits.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-foreground text-sm">{b}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Get a Quote <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    ))}

    {/* CTA */}
    <section className="section-padding bg-foreground">
      <div>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="heading-lg text-primary-foreground mb-6">Need a Custom Solution?</h2>
          <p className="body-lg text-primary-foreground/60 mb-10">Every project is unique. Let's discuss your specific needs and create a tailored design plan.</p>
          <Link to="/contact" className="btn-gold-outline">Book Free Consultation</Link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default ServicesPage;
