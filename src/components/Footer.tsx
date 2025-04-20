
import { MessageCircle, Youtube } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const socials = [
    { icon: "patreon", href: "https://patreon.com/Axinovium", label: "Patreon" },
    { icon: Youtube, href: "https://www.youtube.com/channel/UCrgS4q_x0tGr-qbuElKyToA", label: "YouTube" },
    { icon: MessageCircle, href: "https://discord.com/invite/PtvFrba3wP", label: "Discord Community" },
  ];

  return (
    <footer className="bg-black/90 py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-10 mb-8">
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
                {social.icon === "patreon" ? (
                  <svg className="h-16 w-16 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.82 2.41c3.96 0 7.18 3.24 7.18 7.22 0 3.97-3.22 7.21-7.18 7.21-3.97 0-7.19-3.24-7.19-7.21 0-3.98 3.22-7.22 7.19-7.22M2 21.6h3.5V2.41H2V21.6z" />
                  </svg>
                ) : (
                  <social.icon className="h-16 w-16 relative z-10" />
                )}
                <motion.div 
                  className="absolute -inset-2 rounded-full bg-purple-600/0 group-hover:bg-purple-600/20 transition-colors duration-300"
                  whileHover={{ 
                    boxShadow: "0 0 12px rgba(139, 92, 246, 0.6)",
                  }}
                />
              </motion.a>
            ))}
          </div>
          <img 
            src="/lovable-uploads/36e2fa8a-1319-475a-a816-0ab0a910a3d5.png" 
            alt="Axinovium Logo" 
            className="h-8 mt-12"
          />
          <p className="text-gray-400 text-center mt-4">&copy; {new Date().getFullYear()} Axinovium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
