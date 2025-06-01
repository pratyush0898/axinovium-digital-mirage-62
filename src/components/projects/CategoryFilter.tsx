
import { motion } from "framer-motion";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryFilter = ({ categories, activeCategory, onSelectCategory }: CategoryFilterProps) => {
  const getCategoryStyles = (category: string, isActive: boolean) => {
    if (!isActive) return "bg-gray-800 text-gray-300 hover:bg-gray-700";
    
    switch (category) {
      case "VRChat Worlds":
      case "VRChat":
        return "bg-pink-500 text-pink-100 border-pink-500";
      case "Free Tools":
        return "bg-blue-500 text-blue-100 border-blue-500";
      case "Content Creation":
        return "bg-green-500 text-green-100 border-green-500";
      case "Community":
        return "bg-yellow-500 text-yellow-100 border-yellow-500";
      case "Music":
        return "bg-purple-900 text-purple-100 border-purple-900";
      case "All":
        return "bg-purple-500 text-purple-100 border-purple-500";
      default:
        return "bg-purple-500 text-purple-100 border-purple-500";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-3 mb-8"
    >
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${getCategoryStyles(
            category,
            activeCategory === category
          )}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  );
};
