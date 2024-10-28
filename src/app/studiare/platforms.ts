export interface Platform {
    id: number;
    name: string;
    description: string;
    link: string;
  }
  
export const platforms: Platform[] = [
    {
        id: 0,
        name: "CTF Platform",
        description: "La piattaforma dedicata agli studenti di Software Security.",
        link: "https://cybersecurity.dimes.unical.it/"
    },
    {
        id: 1,
        name: "OOP Platform",
        description: "La piattaforma dedicata agli studenti di Programmazione Orientata agli Oggetti.",
        link: '#'
    },
    {
        id: 2,
        name: "SoftEng Platform",
        description: "La piattaforma dedicata agli studenti di ingegneria del software.",
        link: "#"
    }
];
  