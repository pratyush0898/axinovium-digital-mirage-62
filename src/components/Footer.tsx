
import { Github, Twitter, Youtube, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-black/90 py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <motion.img 
            src="/lovable-uploads/36e2fa8a-1319-475a-a816-0ab0a910a3d5.png" 
            alt="Axinovium Logo" 
            className="h-12 mb-6" 
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
          <div className="flex space-x-8 mb-8">
            {[
              { icon: MessageCircle, href: "#", label: "Discord" },
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Twitter, href: "#", label: "Twitter" },
              { icon: Youtube, href: "#", label: "YouTube" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors relative group"
                aria-label={social.label}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="h-6 w-6 relative z-10" />
                <motion.div 
                  className="absolute -inset-2 rounded-full bg-purple-600/0 group-hover:bg-purple-600/20 transition-colors duration-300"
                  whileHover={{ 
                    boxShadow: "0 0 12px rgba(139, 92, 246, 0.6)",
                  }}
                />
              </motion.a>
            ))}
          </div>
          <div className="text-gray-400 text-center">
            <p className="mb-2">contact@axinovium.com</p>
            <p>&copy; {new Date().getFullYear()} Axinovium. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
