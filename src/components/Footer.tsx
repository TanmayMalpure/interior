import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const Footer = () => {
  return (
    <footer className="bg-foreground backdrop-blur-xl text-primary-foreground relative">
      <div className="px-6 md:px-12 lg:px-24 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Top section */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-16">
            <div className="max-w-sm">
              <Link to="/" className="font-display text-2xl tracking-[0.08em]">
                {siteConfig.companyNameShort} <span className="text-accent font-medium">{siteConfig.companyNameSuffix}</span>
              </Link>
              <p className="text-primary-foreground mt-5 leading-relaxed text-sm font-light">
                Designing spaces that inspire living. Premium interior design for homes, offices, and commercial spaces across India.
              </p>
              <div className="flex gap-5 mt-8">
                {[
                  { icon: Instagram, label: "Instagram" },
                  { icon: Facebook, label: "Facebook" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Youtube, label: "YouTube" },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="text-primary-foreground/80 hover:text-accent transition-all duration-500 hover:-translate-y-0.5"
                    aria-label={label}
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="body-sm text-accent mb-5">Contact</p>
              <div className="flex flex-col gap-3 text-primary-foreground/80 text-sm font-light">
                <p>{siteConfig.address.street}</p>
                <p>{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</p>
                <p className="text-primary-foreground/60">{siteConfig.phone}</p>
                <p className="text-primary-foreground/60">{siteConfig.email}</p>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="hr-accent mb-8" />

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/80 text-xs font-light">
              © {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
            </p>
            <div className="flex gap-8 text-primary-foreground/80 text-xs font-light">
              <a href="#" className="hover:text-accent transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors duration-300">Terms of Service</a>
            </div>
          </div>

          <div className="text-center text-primary-foreground/60 text-xs font-light mt-8">
            This website is created only for demo purposes to showcase a possible design for your studio. This is not the official website.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;