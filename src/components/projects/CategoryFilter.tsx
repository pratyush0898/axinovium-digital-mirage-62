
import { motion } from "framer-motion";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryFilter = ({ categories, activeCategory, onSelectCategory }: CategoryFilterProps) => {
  return (
    <div className="flex justify-center gap-4 mb-8">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeCategory === category
              ? 'bg-purple-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};
