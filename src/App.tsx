import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Process from "./pages/Process";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => {
  const [showDemoPopup, setShowDemoPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowDemoPopup(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.title = `${siteConfig.companyName} | ${siteConfig.tagline}`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", siteConfig.description);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Dialog open={showDemoPopup} onOpenChange={setShowDemoPopup}>
          <DialogContent className="max-w-sm sm:max-w-lg">
            <div className="text-center">
              <p className="text-sm"><b>Disclaimer:</b> This website is created only for demo purposes to showcase a possible design for your studio. This is not the official website.</p>
            </div>
          </DialogContent>
        </Dialog>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/process" element={<Process />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;