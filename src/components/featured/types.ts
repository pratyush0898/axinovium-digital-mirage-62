
import { ReactNode } from "react";

export interface FeaturedProject {
  title: string;
  description: string | ReactNode;
  videoId: string;
  link: string;
  category?: string;
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
