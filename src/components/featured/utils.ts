
export const getCategoryStyles = (category: string) => {
  switch (category) {
    case "VRChat Worlds":
    case "VRChat":
      return { tag: "bg-pink-500 text-pink-100 border border-pink-500" };
    case "Free Tools":
      return { tag: "bg-blue-500 text-blue-100 border border-blue-500" }; 
    case "Content Creation":
      return { tag: "bg-green-500 text-green-100 border border-green-500" }; 
    case "Community":
      return { tag: "bg-yellow-500 text-yellow-100 border border-yellow-500" }; 
    default:
      return { tag: "bg-purple-500 text-purple-100 border border-purple-500" }; 
  }
};
