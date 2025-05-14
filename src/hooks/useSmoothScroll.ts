
import { useCallback } from "react";

export const useSmoothScroll = () => {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    
    if (element) {
      // Get the element's position relative to the viewport
      const rect = element.getBoundingClientRect();
      // Get the current scroll position
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // Calculate the total offset
      const offset = rect.top + scrollTop;
      
      // Smooth scroll to the element
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
  }, []);
  
  return { scrollToSection };
};
