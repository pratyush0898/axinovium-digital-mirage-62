
import { FeaturedProject } from "./types";

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Meshy 2-year Anniversary showcase",
    description: "A scene I created using community models submitted for the Meshy #AroundTheWorld# celebration event. Animated with AI.",
    videoId: "14Kcrj3iAH0",
    link: "https://www.youtube.com/watch?v=14Kcrj3iAH0",
    category: "Content Creation"
  },
  {
    title: "Chromatic Frequency",
    description: "🏆 Featured at the Venice Film Festival 2024, Best of Worlds",
    longDescription: "This \"digital acid trip\" takes the viewer on a journey through a strange, flooded chasm filled with geometric bismuth-like structures.",
    videoId: "Y8yyFeVs1gs",
    link: "https://vrchat.com/home/launch?worldId=wrld_bff9ded4-af0a-4783-8d24-e0df9625bd79",
    category: "VRChat",
    award: {
      image: "/lovable-uploads/84a09bb2-7dc3-44e9-9ef6-bbf3a1258b17.png",
      link: "https://www.labiennale.org/en/cinema/2024/venice-immersive/chromatic-frequency"
    }
  },
  {
    title: "The Writers Parlor",
    description: "A commissioned world showcasing VRChat's literary community",
    longDescription: "Contains fully interactive VR typewriters and books written by the members.",
    videoId: "undefined",
    slideshow: ["/lovable-uploads/babbec86-c371-48cb-9bc4-10e2748b9425.png"],
    link: "https://vrchat.com/home/launch?worldId=wrld_4d0d9c56-716f-4abc-b832-63a80ab5f076",
    category: "VRChat",
    visits: "60,000+",
    impressions: "Over 180k impressions on X",
    impressionsLink: "https://x.com/search?q=%22The%20Writers%20Parlor%22&src=typed_query&f=top"
  }
];
