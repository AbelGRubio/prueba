export default interface HeroSectionProps {
    backgroundImage?: string;
    title: string;
    subtitle: string;
    buttons?: { text: string; href: string; primary?: boolean }[];
    enableZoom?: boolean;
  }
  