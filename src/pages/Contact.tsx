import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import portfolio3 from "@/assets/portfolio-3.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig } from "@/config/siteConfig";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", projectType: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={portfolio3} alt={`Contact ${siteConfig.companyName}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative z-10 text-center">
          <motion.p className="body-sm text-accent mb-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>Get In Touch</motion.p>
          <motion.h1 className="heading-xl text-primary-foreground" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            Contact Us
          </motion.h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ScrollReveal direction="left">
            <div>
              <div>
                <p className="body-sm text-accent mb-4">Let's Talk</p>
                <div className="gold-line mb-6" />
                <h2 className="heading-lg text-foreground mb-6">Book Your Free Design Consultation</h2>
                <p className="text-muted-foreground leading-relaxed mb-10">
                  Ready to transform your space today? Fill out the form and our design team will get back to you within 24 hours.
                </p>

                <div className="space-y-8">
                  {[
                    { icon: MapPin, label: "Studio Address", value: `${siteConfig.address.street}\n${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}` },
                    { icon: Phone, label: "Phone", value: siteConfig.phone },
                    { icon: Mail, label: "Email", value: siteConfig.email },
                    { icon: Clock, label: "Working Hours", value: "Mon — Sat, 10:00 AM — 7:00 PM" },
                  ].map((c) => (
                    <div key={c.label} className="flex items-start gap-5">
                      <div className="w-10 h-10 border border-accent/30 flex items-center justify-center flex-shrink-0">
                        <c.icon className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="body-sm text-muted-foreground mb-1">{c.label}</p>
                        <p className="text-foreground whitespace-pre-line">{c.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-secondary p-8 md:p-10 border border-border">
              <h3 className="heading-md text-foreground mb-2">Send Us a Message</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="body-sm text-muted-foreground mb-2 block">Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    maxLength={100}
                    className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="body-sm text-muted-foreground mb-2 block">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    maxLength={255}
                    className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="body-sm text-muted-foreground mb-2 block">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    maxLength={20}
                    className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="body-sm text-muted-foreground mb-2 block">Project Type</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select type</option>
                    <option value="residential">Residential Interior</option>
                    <option value="office">Office/Commercial</option>
                    <option value="kitchen">Modular Kitchen</option>
                    <option value="renovation">Renovation</option>
                    <option value="turnkey">Turnkey Solution</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="body-sm text-muted-foreground mb-2 block">Message *</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  maxLength={1000}
                  className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <motion.button
                type="submit"
                className="btn-primary w-full text-center"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {submitted ? "Message Sent ✓" : "Book Free Consultation"}
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.435!2d72.835!3d19.054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzE0LjQiTiA3MsKwNTAnMDYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${siteConfig.companyName} location`}
        />
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;