

// navlink.ts
export interface NavLinks {
    id: number;
    text: string;
    url: string;
  }
  
  const navLinks: NavLinks[] = [
    { id: 1, text: "Home", url: "./" },
    { id: 2, text: "About", url: "..#" },
    { id: 3, text: "Contact", url: "#" },
    { id: 4, text: "Get Started", url: "#" }
  ];
  
  export default navLinks;
  