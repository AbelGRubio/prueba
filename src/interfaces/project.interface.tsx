export interface Project {
    image: string;
    altText: string;
    title: string;
    description: string;
    tags: string[];
    details: { title: string; value: string }[];
    overview?: string;
  }
  
  export interface ProjectCardInterface {
    image: string;
    altText: string;
    title: string;
    description: string;
    tags: string[];
    link: string,
    technologies: string[],
  }
  