export type PortfolioItem = {
  name: string;
  title: string;
  description: string;
  img_url: string;
  link: string;
};

const portfolio: PortfolioItem[] = [
  {
    name: "Melvin Jones Repol",
    title: "Founder & Software Engineer",
    description:
      "He believed that every action has an equal and opposite reaction, and that by working together, we can create something greater than the sum of its parts. The energy can't be created nor destroyed, but it can be transformed and harnessed to drive innovation and progress. With this philosophy in mind, Melvin founded Hall of Codes to bring together developers from all backgrounds and skill levels to collaborate on projects that push the boundaries of what's possible.",
    img_url: "/portfolio/www.melvinjonesrepol.com.png",
    link: "https://www.melvinjonesrepol.com",
  },
  {
    name: "John Paul Caigas",
    title: "Backend Developer & IT Student",
    description:
      "The IT student who loves building the logic behind the screen. With a passion for problem-solving and a knack for creating efficient systems.",
    img_url: "/portfolio/mra1k3r0.vercel.app.png",
    link: "https://mra1k3r0.vercel.app",
  },
  {
    name: "Jerome Edica",
    title: "Full Stack Developer",
    description:
      "The full stack developer who can do it all. With a passion for both frontend and backend development, Jerome is a versatile developer who can handle any project.",
    img_url: "/portfolio/jeromeedica.vercel.app.png",
    link: "https://jeromeedica.vercel.app",
  },
  {
    name: "John Relix",
    title: "Developer | Cybersecurity Researcher | Data Analyst",
    description:
      "The developer who wears many hats. With a passion for cybersecurity and data analysis, John is a developer who can also help you secure your applications and analyze your data.",
    img_url: "/portfolio/johnrelixdev.vercel.app.png",
    link: "https://johnrelixdev.vercel.app",
  },
];

export default portfolio;
