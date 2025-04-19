
import { Github, Twitter, Youtube, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black/90 py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <img src="/lovable-uploads/36e2fa8a-1319-475a-a816-0ab0a910a3d5.png" alt="Axinovium Logo" className="h-12 mb-6" />
          <div className="flex space-x-6 mb-8">
            {[
              { icon: MessageCircle, href: "#", label: "Discord" },
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Twitter, href: "#", label: "Twitter" },
              { icon: Youtube, href: "#", label: "YouTube" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </a>
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
