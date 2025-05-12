
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { FeaturedProject } from "./types";

interface ProjectModalProps {
  selectedProject: FeaturedProject | null;
  onClose: () => void;
}

export const ProjectModal = ({ selectedProject, onClose }: ProjectModalProps) => {
  if (!selectedProject) {
    return null;
  }

  return (
    <Dialog open={!!selectedProject} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] w-[1200px] bg-black/95 border-gray-800">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          <div className="relative">
            <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
            <div className="relative">
              <iframe
                src={`https://www.youtube.com/embed/${selectedProject.videoId}?autoplay=1`}
                title={selectedProject.title}
                className="w-full aspect-video rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              {selectedProject.award && (
                <a
                  href={selectedProject.award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-1/2 right-2 w-24 -translate-y-1/2 hover:scale-105 transition-transform duration-200 z-20"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={selectedProject.award.image}
                    alt="Award"
                    className="w-full h-auto"
                  />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};
