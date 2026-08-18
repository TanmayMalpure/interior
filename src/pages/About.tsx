import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, Users, Clock, CheckCircle } from "lucide-react";
import aboutImg from "@/assets/about-designer.jpg";
import heroImg from "@/assets/hero-interior.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/config/siteConfig";

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Design Awards" },
];

const reasons = [
  "End-to-end project management",
  "Premium materials & craftsmanship",
  "Transparent pricing, no hidden costs",
  "On-time delivery guarantee",
  "Personalized design approach",
  "Post-project support & warranty",
];

const timeline = [
  { year: "2009", title: "Studio Founded", desc: `${siteConfig.companyName} was born from a passion for transforming spaces.` },
  { year: "2013", title: "50th Project", desc: "Reached a milestone of 50 completed luxury residential projects." },
  { year: "2017", title: "Commercial Division", desc: "Expanded into office and commercial interior design." },
  { year: "2020", title: "National Recognition", desc: "Won the India Interior Design Excellence Award." },
  { year: "2024", title: "200+ Projects", desc: "Crossed 200 completed projects across India." },
];

const AboutPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <WhatsAppButton />

    {/* Hero */}
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt={`About ${siteConfig.companyName}`} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="relative z-10 text-center">
        <motion.p className="body-sm text-accent mb-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          Our Story
        </motion.p>
        <motion.h1 className="heading-xl text-primary-foreground" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
          About Us
        </motion.h1>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal direction="left">
          <motion.img src={aboutImg} alt={`${siteConfig.companyName} founder`} className="w-full h-[550px] object-cover" whileHover={{ scale: 1.02 }} transition={{ duration: 0.6 }} />
        </ScrollReveal>
        <ScrollReveal direction="right">
          <div className="text-center">
            <p className="body-sm text-accent mb-4">The Studio</p>
            <div className="gold-line mb-6 mx-auto" />
            <h2 className="heading-lg text-foreground mb-6">Designing Spaces That Inspire Living</h2>
            <p className="body-lg text-muted-foreground mb-4">
              Founded in {siteConfig.foundedYear}, {siteConfig.companyName} has grown from a boutique studio into one of India's most sought-after interior design firms.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our philosophy is simple: every space tells a story. We blend aesthetics with functionality, luxury with comfort, and innovation with timelessness. Led by our founder and principal designer, our team of 25+ skilled professionals brings a wealth of experience in residential, commercial, and hospitality design.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="heading-md text-accent font-medium">{s.value}</p>
                  <p className="body-sm text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Design Philosophy */}
    <section className="section-padding bg-secondary">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="body-sm text-accent mb-4">Philosophy</p>
            <div className="gold-line mx-auto mb-6" />
            <h2 className="heading-lg text-foreground mb-6">Our Design Philosophy</h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in the power of design to elevate everyday living. Our approach marries form and function, creating spaces that are as practical as they are beautiful.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Award, title: "Excellence", desc: "We pursue perfection in every detail, from the first sketch to the final finish." },
            { icon: Users, title: "Collaboration", desc: "Your input shapes every decision. We design with you, not just for you." },
            { icon: Clock, title: "Timelessness", desc: "Trends fade, but great design endures. We create spaces that age gracefully." },
          ].map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <div className="bg-background p-8 border border-border text-center">
                <v.icon className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="heading-md text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="body-sm text-accent mb-4">Our Journey</p>
            <div className="gold-line mx-auto mb-6" />
            <h2 className="heading-lg text-foreground">Company Timeline</h2>
          </div>
        </ScrollReveal>
        <div className="space-y-0">
          {timeline.map((t, i) => (
            <ScrollReveal key={t.year}>
              <div className="flex gap-8 items-start py-8 border-b border-border last:border-b-0 group">
                <span className="font-display text-3xl text-accent/40 group-hover:text-accent transition-colors duration-500 min-w-[80px]">{t.year}</span>
                <div>
                  <h3 className="heading-sm text-foreground mb-1">{t.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding bg-foreground">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="body-sm text-accent mb-4">Why Us</p>
            <h2 className="heading-lg text-primary-foreground">Why Choose {siteConfig.companyName}</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reasons.map((r, i) => (
            <ScrollReveal key={r} delay={i * 0.05}>
              <div className="flex items-center justify-center gap-4 py-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">{r}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="text-center mt-10">
            <Link to="/contact" className="btn-gold-outline">Book Consultation</Link>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <Footer />
  </div>
);

export default AboutPage;