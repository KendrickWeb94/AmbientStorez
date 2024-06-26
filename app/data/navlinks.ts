

// navlink.ts
export interface NavLink {
    id: number;
    text: string;
    url: string;
  }
  
  const navLinks: NavLink[] = [
    { id: 1, text: "Home", url: "./" },
    { id: 2, text: "About", url: "..#" },
    { id: 3, text: "Contact", url: "#" },
    { id: 4, text: "Get Started", url: "#" }
  ];
  
  export default navLinks;
  