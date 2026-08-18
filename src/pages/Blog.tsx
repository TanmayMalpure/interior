import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, User } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import kitchenImg from "@/assets/modular-kitchen.jpg";
import renovationImg from "@/assets/renovation.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const posts = [
  {
    image: renovationImg,
    title: "Interior Design Trends 2025: What's In and What's Out",
    excerpt: "From warm minimalism to biophilic design, discover the top trends shaping modern interiors this year.",
    category: "Trends",
    date: "Feb 15, 2025",
    readTime: "5 min read",
  },
  {
    image: portfolio1,
    title: "Small Apartment Design Ideas That Maximize Space",
    excerpt: "Smart storage, multifunctional furniture, and visual tricks to make compact apartments feel spacious.",
    category: "Tips",
    date: "Jan 28, 2025",
    readTime: "4 min read",
  },
  {
    image: kitchenImg,
    title: "The Ultimate Guide to Modular Kitchen Design",
    excerpt: "Everything you need to know about planning, designing, and executing the perfect modular kitchen.",
    category: "Guide",
    date: "Jan 10, 2025",
    readTime: "7 min read",
  },
  {
    image: portfolio2,
    title: "Color Psychology in Interior Design",
    excerpt: "How colors influence mood, energy, and perception — and how to use them effectively in your home.",
    category: "Design",
    date: "Dec 20, 2024",
    readTime: "6 min read",
  },
  {
    image: renovationImg,
    title: "Budget-Friendly Home Renovation Tips",
    excerpt: "Transform your home without breaking the bank with these practical renovation strategies.",
    category: "Tips",
    date: "Dec 5, 2024",
    readTime: "4 min read",
  },
  {
    image: portfolio1,
    title: "Creating the Perfect Home Office Setup",
    excerpt: "Design an inspiring and productive workspace at home with ergonomic and aesthetic principles.",
    category: "Guide",
    date: "Nov 18, 2024",
    readTime: "5 min read",
  },
];

const BlogPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <WhatsAppButton />

    {/* Hero */}
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-foreground" />
      <div className="relative z-10 text-center">
        <motion.p className="body-sm text-accent mb-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          Insights & Inspiration
        </motion.p>
        <motion.h1 className="heading-xl text-primary-foreground" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
          Blog
        </motion.h1>
        <motion.p className="body-lg text-primary-foreground/60 mt-4 max-w-lg mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          Design tips, trends, and inspiration from our expert team.
        </motion.p>
      </div>
    </section>

    {/* Featured Post */}
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="overflow-hidden">
              <motion.img src={posts[0].image} alt={posts[0].title} className="w-full h-[400px] object-cover" whileHover={{ scale: 1.03 }} transition={{ duration: 0.6 }} />
            </div>
            <div className="flex flex-col justify-center">
              <span className="body-sm text-accent mb-3">{posts[0].category}</span>
              <h2 className="heading-lg text-foreground mb-4">{posts[0].title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{posts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-muted-foreground text-sm mb-6">
                <span className="flex items-center gap-1"><Clock size={14} /> {posts[0].readTime}</span>
                <span>{posts[0].date}</span>
              </div>
              <span className="btn-outline inline-flex items-center gap-2 self-start cursor-pointer">
                Read Article <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, i) => (
            <ScrollReveal key={post.title} delay={i * 0.05}>
              <motion.article className="group cursor-pointer" whileHover={{ y: -4 }}>
                <div className="aspect-[16/10] overflow-hidden mb-4">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <span className="body-sm text-accent">{post.category}</span>
                <h3 className="heading-sm text-foreground mt-2 mb-2 group-hover:text-accent transition-colors">{post.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-muted-foreground text-xs">
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  <span>{post.date}</span>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Newsletter */}
    <section className="section-padding bg-secondary">
      <ScrollReveal>
        <div className="text-center max-w-xl mx-auto">
          <p className="body-sm text-accent mb-4">Stay Inspired</p>
          <h2 className="heading-lg text-foreground mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mb-8">Get design tips, trends, and exclusive offers delivered to your inbox.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Your email address" className="flex-1 bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors" />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        </div>
      </ScrollReveal>
    </section>

    <Footer />
  </div>
);

export default BlogPage;
