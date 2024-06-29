import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate software engineer with a knack for crafting robust and scalable web applications. Through my professional and academic experiences, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated full stack developer and software engineer with a strong foundation in both front-end and back-end technologies. Through my diverse experiences, including internships and professional roles, I've developed a passion for creating efficient and user-friendly web applications. I have expertise in technologies such as React, Node.js, PostgreSQL, and Docker, and I'm committed to leveraging these skills to deliver innovative solutions. My academic background, complemented by practical projects and certifications, fuels my enthusiasm for continuous learning and growth in the tech industry.`;

export const EXPERIENCES = [
  {
    year: "June 2023 - Present",
    role: "Software Engineer",
    company: "CyberForce|Q",
    description: `Designed and developed high-performing websites with integrated responsiveness and search engine optimizations 
using WiX, resulting in a notable 15% increase in website traffic. Demonstrated expertise in containerization by implementing multi-stage Docker builds for Flask and FastAPI
applications, optimizing image size for efficient GKE deployments. Proficiently integrated REST APIs into Python scripts for various applications, while conducting comprehensive audits 
of over 30 custom Python codes to enhance investigation and response capabilities.`,
    technologies: ["Javascript", "WIX", "AWS", "GCP", "Python", "REST-API"],
  },
  {
    year: "May 2021 - June 2021",
    role: "Frontend Developer",
    company: "GOLS EdTech Pvt. Ltd.",
    description: `Enhanced the efficiency and user-friendliness of a Learning Management System (LMS) website, leading to a notable 12% increase in website traffic. `,
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
  },
  {
    year: "August 2020 - March 2021",
    role: "Full Stack Developer",
    company: "DY Patil University",
    description: `Built a system to manage transcript data for 1000+ students pursuing Bachelor of Dental Surgery degree. Engineered a data management system to reduce manual work by 70%, reducing the risk of data duplication and errors.`,
    technologies: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
