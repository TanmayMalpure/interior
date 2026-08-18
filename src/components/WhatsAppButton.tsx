import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";

const WhatsAppButton = () => {
  const message = encodeURIComponent(`Hi! I'm interested in interior design services from ${siteConfig.companyName}.`);

  return (
    <motion.a
      href={`https://wa.me/${siteConfig.phoneRaw}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      aria-label="Chat on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.89 15.89 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.335 22.594c-.39 1.1-1.932 2.014-3.168 2.28-.846.18-1.95.324-5.668-1.218-4.762-1.974-7.822-6.8-8.06-7.114-.23-.314-1.924-2.562-1.924-4.888 0-2.326 1.218-3.468 1.65-3.942.39-.428 1.026-.624 1.636-.624.198 0 .376.01.536.018.47.02.706.048 1.016.788.39.928 1.34 3.27 1.458 3.508.118.238.236.556.078.87-.148.322-.278.466-.516.738-.238.272-.464.48-.702.774-.218.258-.464.534-.196 1.004.268.462 1.192 1.966 2.56 3.184 1.76 1.566 3.242 2.052 3.704 2.278.462.226.732.19 1.002-.114.278-.314 1.186-1.38 1.504-1.854.31-.474.628-.394 1.058-.236.436.158 2.762 1.302 3.234 1.54.472.236.786.356.902.554.118.198.118 1.15-.272 2.254z"/>
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;