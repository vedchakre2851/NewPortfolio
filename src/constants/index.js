import project1 from "../assets/portfolioimg1.jpg";
import project2 from "../assets/portimg2.png";
import project3 from "../assets/portimg3.jfif";
import project4 from "../assets/portimg4.png";
import project5 from "../assets/chaticon.png";
export const HERO_CONTENT = `"Passionate full stack developer focused on building user-friendly solutions that prioritize user needs."`;

export const ABOUT_TEXT = `I am a dedicated software developer 💻 with one year of experience in the dynamic IT industry 🌐. Having thrived in a fast-paced, customer-first environment 🚀, I have successfully contributed to creating innovative solutions 💡, developing, and testing high-quality applications 🛠️. I am now passionately advancing my career in the software field. My unique blend of technical skills and problem-solving abilities 🧩 makes me an ideal candidate for any challenging role in this ever-evolving landscape.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Software Developer",
    company: "Jio Platforms Limited",
    description: [
      "Contributed significantly to the development of an in-house website for storing reports generated through automation, dynamically fetching them, and visualizing the data using charts and graphs.",
      "Automated the Jio.com website by writing test cases using the Robot Framework.",
      "Managed the existing automation codebase using Git and GitHub.",
    ],
  },
  {
    year: "2019 - 2020",
    role: "Digital Marketing Intern",
    company: "Noise Communications Pvt. Ltd",
    description: [
      "Worked as a digital marketing intern for a small startup, focusing on increasing clients' online visibility through SEO and social media strategies.",
      "Successfully implemented targeted campaigns that enhanced brand awareness and engagement.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Chat-App",
    image: project5,
    description:
      "This project is a real-time chat application designed to enable users to communicate instantly with each other in a dynamic chatroom environment. Using Socket.io for real-time WebSocket communication, users can send and receive messages instantly.",
    technologies: ["Socket.io", "Node.js", "MongoDB", "Chakra-UI"],
  },
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A fully functional & responsive website is a comprehensive showcase of my skills, experiences, and projects.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Weather Forecast App",
    image: project2,
    description:
      "The Weather Forecast App is a dynamic and user-friendly application designed to provide accurate and up-to-date weather information for locations around the globe.",
    technologies: ["Express.js", "Node.js", "HTML", "CSS"],
  },

  {
    title: "To-Do App",
    image: project3,
    description:
      "The To-Do App is a simple yet powerful tool designed to help users manage their tasks efficiently.",
    technologies: ["HTML", "CSS", "Node.js", "Express", "MongoDb"],
  },
  // {
  //   title: "REST-Ful Blog API",
  //   image: project4,
  //   description:
  //     "The RESTful Blog API is a robust backend service designed to manage blog content seamlessly. This API allows for the creation, retrieval, updating, and deletion (CRUD) of blog posts.",
  //   technologies: ["HTML", "CSS", "Node.js", "Express", "MongoDb"],
  // }
];

export const CONTACT = {
  address: "Kalash Udyan, 400709 , Navi-Mumbai , India",
  phoneNo: "+91 9769704116 ",
  email: "vedchakre28@gmail.com",
};
