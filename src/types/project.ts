
import { ReactNode } from "react";

export interface Project {
  id: number;
  title: string;
  description: ReactNode;
  videoId?: string;
  image?: string;
  link: string;
  category: string;
  award?: {
    image: string;
    link: string;
  };
  longDescription?: string;
  visits?: string;
  impressions?: string;
  impressionsLink?: string;
  slideshow?: string[];
}
