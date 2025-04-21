
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface ProjectDialogProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDialog = ({ project, onClose }: ProjectDialogProps) => {
  if (!project) return null;

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] w-[1200px] bg-black/95 border-gray-800">
        <DialogTitle className="sr-only">{project.title}</DialogTitle>
        <DialogDescription className="sr-only">Details about {project.title} project</DialogDescription>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          <div className="relative">
            <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
            <div className="relative">
              <iframe
                src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1`}
                title={project.title}
                className="w-full aspect-video rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              {project.award && (
                <a 
                  href={project.award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block absolute top-1/2 right-4 w-48 -translate-y-1/2 z-50"
                >
                  <img
                    src={project.award.image}
                    alt="Award"
                    className="w-full hover:scale-105 transition-transform duration-200"
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
