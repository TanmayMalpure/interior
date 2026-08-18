import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, MessageSquare, Palette, Eye, Hammer, PartyPopper } from "lucide-react";
import heroImg from "@/assets/hero-interior.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/config/siteConfig";

const steps = [
  {
    icon: Phone,
    num: "01",
    title: "Discovery Call",
    desc: "We begin with a detailed consultation to understand your vision, lifestyle, preferences, budget, and timeline. This is where the magic starts.",
    details: ["Understanding your lifestyle needs", "Discussing budget expectations", "Site visit and measurements", "Initial timeline planning"],
  },
  {
    icon: MessageSquare,
    num: "02",
    title: "Design Planning",
    desc: "Our design team creates mood boards, material palettes, and initial layout concepts. We present multiple options for you to choose from.",
    details: ["Mood board creation", "Layout and floor plans", "Material & color palette selection", "Furniture & fixture planning"],
  },
  {
    icon: Eye,
    num: "03",
    title: "3D Visualization",
    desc: "Experience your space before it's built. We create photorealistic 3D renders so you can see exactly how your dream space will look.",
    details: ["Photorealistic 3D renders", "Virtual walkthroughs", "Design refinement", "Final approval & sign-off"],
  },
  {
    icon: Hammer,
    num: "04",
    title: "Execution",
    desc: "Our trusted team of craftsmen and contractors bring the design to life. We manage every aspect of the build with regular progress updates.",
    details: ["Procurement of materials", "Skilled craftsman deployment", "Quality checks at every stage", "Regular progress reports"],
  },
  {
    icon: PartyPopper,
    num: "05",
    title: "Final Delivery",
    desc: "A thorough quality check and walkthrough before we hand over your beautifully designed space. We ensure everything is perfect.",
    details: ["Final quality inspection", "Detailed walkthrough", "Styling & finishing touches", "Post-project support"],
  },
];

const ProcessPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <WhatsAppButton />

    {/* Hero */}
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt={`${siteConfig.companyName} Design Process`} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="relative z-10 text-center">
        <motion.p className="body-sm text-accent mb-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>How We Work</motion.p>
        <motion.h1 className="heading-xl text-primary-foreground" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
          Our Process
        </motion.h1>
      </div>
    </section>

    {/* Intro */}
    <section className="section-padding">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto">
          <p className="body-sm text-accent mb-4">From Vision to Reality</p>
          <div className="gold-line mx-auto mb-6" />
          <h2 className="heading-lg text-foreground mb-6">A Seamless Design Journey</h2>
          <p className="body-lg text-muted-foreground">
            Our structured 5-step process ensures transparency, quality, and delight at every stage. Here's how we transform your space from concept to completion.
          </p>
        </div>
      </ScrollReveal>
    </section>

    {/* Steps */}
    {steps.map((step, i) => (
      <section key={step.num} className={`section-padding ${i % 2 === 1 ? "bg-secondary" : "bg-background"}`}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction={i % 2 === 0 ? "left" : "right"}>
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="bg-card border border-border p-12 flex items-center justify-center">
                <div className="text-center">
                  <step.icon className="w-16 h-16 text-accent mx-auto mb-4 opacity-60" />
                  <span className="font-display text-8xl text-accent/20">{step.num}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction={i % 2 === 0 ? "right" : "left"}>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <p className="body-sm text-accent mb-2">Step {step.num}</p>
              <h2 className="heading-lg text-foreground mb-4">{step.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{step.desc}</p>
              <div className="space-y-3">
                {step.details.map((d) => (
                  <div key={d} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                    <span className="text-foreground text-sm">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    ))}

    {/* CTA */}
    <section className="section-padding bg-foreground">
      <div>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="heading-lg text-primary-foreground mb-6">Ready to Get Started?</h2>
          <p className="body-lg text-primary-foreground/60 mb-10">Book your free discovery call and take the first step toward your dream space.</p>
          <Link to="/contact" className="btn-gold-outline">Book Free Consultation</Link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default ProcessPage;
