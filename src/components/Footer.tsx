
import { Mail, Patreon, Youtube, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const socials = [
    { icon: Mail, href: "mailto:axinovium@gmail.com", label: "Email" },
    { icon: Patreon, href: "https://patreon.com/Axinovium", label: "Patreon" },
    { icon: Youtube, href: "https://www.youtube.com/channel/UCrgS4q_x0tGr-qbuElKyToA", label: "YouTube" },
    { icon: MessageCircle, href: "https://discord.com/invite/PtvFrba3wP", label: "Discord Community" },
  ];

  return (
    <footer className="bg-black/90 py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <img 
            src="/lovable-uploads/36e2fa8a-1319-475a-a816-0ab0a910a3d5.png" 
            alt="Axinovium Logo" 
            className="h-12 mb-6"
          />
          <div className="flex space-x-8 mb-8">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors relative group"
                aria-label={social.label}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="h-8 w-8 relative z-10" />
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
