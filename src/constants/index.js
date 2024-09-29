import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate software engineer with a knack for crafting robust and scalable web applications. Through my professional and academic experiences, I have honed my skills in front-end technologies like HTML, CSS, Bootstrap, jQuery, React and Next.js, as well as back-end technologies like Node.js, Spring, Boot, PHP, Flask, Django, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated full stack developer and software engineer with a strong foundation in both front-end and back-end technologies. Through my diverse experiences, I've developed a passion for creating efficient and user-friendly web applications. I have expertise in technologies such as React, Node.js, MySQL, and Docker, and I'm committed to leveraging these skills to deliver innovative solutions. My academic background, complemented by practical projects and certifications, fuels my enthusiasm for continuous learning and growth in the tech industry.`;

export const EXPERIENCES = [
  {
    year: "September 2024 - Present",
    role: "Software Engineer",
    company: "Motus Nova",
    description: ``,
    technologies: ["React.js", "Node.js", "PostgreSQL","AWS"],
  },
  {
    year: "August 2024 - September 2024",
    role: "Web Developer",
    company: "Collin College",
    description: `Created a self-service cross-listing web application in Canvas, enabling instructors to easily manage course and section listings, enhancing course administration. Automated course data reporting using the Canvas API and Power Automate, streamlining report delivery to management. Developed a Python script for user account deactivation in Canvas, improving security by disconnecting devices and terminating active sessions.`,
    technologies: ["Python", "Flask", "REST APIs", "Instructure Canvas"],
  },
  {
    year: "June 2023 - May 2024",
    role: "Software Engineer Intern",
    company: "CyberForce|Q",
    description: `Designed and developed high-performing websites with integrated responsiveness and search engine optimizations 
using WiX, resulting in a notable 15% increase in website traffic. Demonstrated expertise in containerization by implementing multi-stage Docker builds for Flask and FastAPI
applications, optimizing image size for efficient GKE deployments. Proficiently integrated REST APIs into Python scripts for various applications, while conducting comprehensive audits 
of over 30 custom Python codes to enhance investigation and response capabilities.`,
    technologies: ["Javascript", "WIX", "AWS", "GCP", "Python", "REST-API"],
  },
  {
    year: "May 2021 - June 2021",
    role: "Frontend Developer Intern",
    company: "GOLS EdTech Pvt. Ltd.",
    description: `Enhanced the efficiency and user-friendliness of a Learning Management System (LMS) website, leading to a notable 12% increase in website traffic. `,
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
  },
  {
    year: "August 2020 - March 2021",
    role: "Full Stack Developer Intern",
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
    technologies: ["Java", "Springboot", "Thymeleaf", "Hibernate", "MySQL"],
  },
  {
    title: "NFT Transaction System",
    image: project2,
    description:
      "NFT Transaction System (NTS) is an application used to buy and sell NFT’s using USD and Ethereum.",
    technologies: ["Python", "Flask", "MySQL"],
  },
  {
    title: "Comparative study of Machine Translation Systems",
    image: project3,
    description:
      "A WebApp for text conversion from English to Hindi after generating a caption from an image",
    technologies: ["Python","TensorFlow", "PyTorch", "CNN", "LSTM"],
  },
  {
    title: "Bookstore Application",
    image: project4,
    description:
      "This project is a full-stack web application for managing a collection of books.",
    technologies: ["Node.js", "Express", "MongoDB", "React", "Vite", "Tailwind CSS"],
  },
];

export const CONTACT = {
  address: "7575 Frankford Rd, Dallas, TX, 75252 ",
  phoneNo: "(+1) 945-244-8745 ",
  email: "mxj210065@utdallas.edu",
};
