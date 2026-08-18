import { useState, useEffect, useCallback } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ChefHat, Building2, Ruler, Star, ArrowRight, Phone, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-wide.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/config/siteConfig";

const services = [
  { icon: Home, title: "Residential Interiors", desc: "Transform your home into a stunning, functional space that reflects your personality." },
  { icon: ChefHat, title: "Modular Kitchens", desc: "Sleek, smart kitchens designed for efficiency with premium materials and finishes." },
  { icon: Building2, title: "Office Interiors", desc: "Inspiring workspaces that boost productivity and embody your brand's identity." },
  { icon: Ruler, title: "Renovation & Planning", desc: "Strategic space planning and renovations that maximize every square foot." }];


const projects = [
  { image: portfolio1, title: "Serene Master Suite", category: "Bedroom" },
  { image: portfolio2, title: "Elegant  Living Room", category: "Living Room" },
  { image: portfolio3, title: "Modern Living Room", category: "Living Room" }];


const steps = [
  { num: "01", title: "Consultation", desc: "We listen to your vision, needs, and budget in a free discovery call." },
  { num: "02", title: "Design Concept", desc: "Our team creates mood boards, 3D renders, and detailed design plans." },
  { num: "03", title: "Execution", desc: "Expert craftsmen bring the design to life with premium materials." },
  { num: "04", title: "Handover", desc: "Final walkthrough and handover of your stunning new space." }];


const testimonials = [
  { name: "Priya Sharma", role: "Homeowner, Mumbai", text: `${siteConfig.companyName} transformed our apartment into a luxurious sanctuary. Every detail was perfect.` },
  { name: "Rahul Mehta", role: "CEO, TechStart", text: "Our new office has boosted team morale incredibly. The design is modern yet warm." },
  { name: "Anita Desai", role: "Villa Owner, Goa", text: "From concept to completion, the team delivered beyond our highest expectations." },
  { name: "Vikram Patel", role: "Restaurant Owner, Pune", text: "The restaurant design exceeded all expectations. Our customers love the ambiance." },
  { name: "Sneha Kulkarni", role: "Homeowner, Bangalore", text: `Attention to detail and professionalism at every step. Highly recommend ${siteConfig.companyName}.` }];


const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 })
  };

  const t = testimonials[current];

  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="body-sm text-accent mb-4">Testimonials</p>
            <div className="gold-line mx-auto mb-6" />
            <h2 className="heading-lg text-foreground">What Our Clients Say</h2>
          </div>
        </ScrollReveal>

        <div className="relative min-h-[250px] flex items-center">
          <button
            onClick={prev}
            className="absolute left-0 md:-left-12 z-10 p-2 text-muted-foreground hover:text-accent transition-colors"
            aria-label="Previous testimonial">
            <ChevronLeft size={24} />
          </button>

          <div className="w-full overflow-hidden px-8 md:px-0">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-center">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, j) =>
                    <Star key={j} size={16} className="fill-accent text-accent" />
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8 italic text-lg">"{t.text}"</p>
                <p className="font-display text-foreground font-medium text-lg">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={next}
            className="absolute right-0 md:-right-12 z-10 p-2 text-muted-foreground hover:text-accent transition-colors"
            aria-label="Next testimonial">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) =>
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-accent w-6" : "bg-border"}`}
              aria-label={`Go to testimonial ${i + 1}`} />
          )}
        </div>
      </div>
    </section>);
};

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt={`Luxury interior design by ${siteConfig.companyName}`} className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/20" />
        </div>

        <div className="relative z-10 section-padding w-full max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
            <h1 className="heading-xl text-primary-foreground mb-6">
              {/* <motion.span className="block" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
                Luxury Interior
              </motion.span> */}
              <motion.span className="block" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
                Get a Designer Space You'll Love
              </motion.span>
              {/* <motion.span className="block text-accent italic" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.0 }}>
                Modern Living
              </motion.span> */}
            </h1>

            <motion.div className="flex gap-4 flex-wrap justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}>
              <Link to="/contact" className="btn-primary text-white">
                Book Free Consultation
              </Link>
              <Link to="/portfolio" className="btn-outline-light text-white">
                View Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}>
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-primary-foreground/50" />
        </motion.div>
      </section>

      {/* Services */}
      <section className="section-padding bg-secondary">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="body-sm text-accent mb-4">What We Do</p>
              <div className="gold-line mx-auto mb-6" />
              <h2 className="heading-lg text-foreground">Our Services</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) =>
              <ScrollReveal key={s.title} delay={i * 0.05}>
                <motion.div
                  className="bg-background p-8 border border-border hover:border-accent/30 transition-all duration-500 group h-full"
                  whileHover={{ y: -6 }}>
                  <s.icon className="w-8 h-8 text-accent mb-5 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="heading-md text-center text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-center text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              </ScrollReveal>
            )}
          </div>

          <ScrollReveal>
            <div className="text-center mt-10">
              <Link to="/services" className="btn-outline inline-flex items-center gap-2">
                All Services <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <p className="body-sm text-accent mb-4">Featured Work</p>
                <div className="gold-line mb-6" />
                <h2 className="heading-lg text-foreground">Selected Projects</h2>
              </div>
              <Link to="/portfolio" className="mt-4 md:mt-0 body-sm text-accent hover:text-foreground transition-colors inline-flex items-center gap-2">
                View All <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p, i) =>
              <ScrollReveal key={p.title + i} delay={i * 0.05}>
                <motion.div
                  className="group relative overflow-hidden cursor-pointer"
                  whileHover={{ y: -4 }}
                  onClick={() => setSelectedImage({ image: p.image, title: p.title })}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-500 flex items-end">
                    <div className="p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="body-sm text-accent mb-1">{p.category}</p>
                      <h3 className="heading-sm text-primary-foreground">{p.title}</h3>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            )}
          </div>

          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl w-[90vw] p-2 bg-background">
              {selectedImage && (
                <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-auto max-h-[85vh] object-contain rounded" />
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Process */}
            <section className="section-padding bg-secondary">
      {/* <section className="section-padding bg-[hsl(var(--navbar-scrolled)/0.9)] "> */}
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="body-sm text-accent mb-4">How We Work</p>
              <div className="gold-line mx-auto mb-6" />
              <h2 className="heading-lg text-foreground">Our Process</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) =>
              <ScrollReveal key={s.num} delay={i * 0.1}>
                <div className="text-center text-accent">
                  <span className="font-display text-5xl text-accent">{s.num}</span>
                  <h3 className="heading-md text-foreground mt-3 mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            )}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Link to="/process" className="btn-gold-outline inline-flex items-center gap-2">
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>


    {/* Instagram Section */}
    <section className=" p-10">
  <div className="max-w-6xl mx-auto">
    <ScrollReveal>
      <div className="text-center mb-16">
        <p className="body-sm text-accent mb-4">Follow Us</p>
        <div className="gold-line mx-auto mb-6" />
        <h2 className="heading-lg text-foreground">From Our Instagram</h2>
      </div>
    </ScrollReveal>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {siteConfig.social.instagram.posts.map((postUrl, i) => (
        <div key={postUrl} className="overflow-hidden rounded-2xl aspect-[3.8/5]">
          <iframe
            src={postUrl}
            title={`Instagram post ${i + 1}`}
            className="w-full h-full border-0"
            scrolling="no"
            loading="lazy"
          />
        </div>
      ))}
    </div>

    <div className="text-center mt-10 pb-6">
      <a
        href={siteConfig.social.instagram.profile}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline inline-flex items-center gap-2"
      >
        View Profile <ArrowRight size={14} />
      </a>
    </div>
  </div>
</section>


            {/* CTA */}
            <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={portfolio1} alt="Interior design background" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-foreground/75" />
        </div>
        <ScrollReveal>
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <p className="body-sm text-accent mb-4">Ready to Start?</p>
            <h2 className="heading-lg text-primary-foreground mb-6">Let's Design Your Dream Space</h2>
            <p className="body-lg text-primary-foreground/70 mb-10">
              Every great space begins with a conversation. Book your free consultation today.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                <Phone size={14} /> Book Free Consultation
              </Link>
              <Link to="/portfolio" className="btn-outline-light text-white inline-flex items-center gap-2">
                View Our Work <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />



      <Footer />
    </div>);
};


export default Index;