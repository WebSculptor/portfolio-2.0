import { Facebook, Heart, Instagram, Linkedin, Twitter } from "lucide-react";

import demoImg from "../../public/reference.png";

export const nav_links: NavLinks[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Wall of Love",
    path: "/wall-of-love",
    icon: Heart,
  },
  {
    name: "Contact & Support",
    path: "/contact",
  },
];

export const reviews: ReviewProps[] = [
  {
    id: 1,
    ratings: 3.5,
    review:
      "Working alongside him is always pleasant. He completes the task quickly and goes above and beyond what is required. He obviously knows a lot about the work he does, as well. I'm excited for our upcoming project together.",
    name: "Jethro Jonathan",
    createdAt: "February 8th, 2023",
    imgUrl: "/reference.png",
  },
  {
    id: 2,
    ratings: 5,
    review:
      "Abdullahi is an exceptional student who is eager to learn. He is a hard worker who is always looking to learn new skills. His leadership talents are maturing, and he is on the right track. I feel he is the best candidate for your position.",
    name: "Oluwafemi Korede",
    createdAt: "July 26th, 2023",
    imgUrl: "/reference.png",
  },
  {
    id: 3,
    ratings: 2.5,
    review:
      "Salihu comes highly recommended for opportunities in web frontend development. His knowledge of ReactJs and Next.js, together with his expertise and devotion, make him a tremendous asset to any company.",
    name: "Ajibade Awojide",
    createdAt: "July 26th, 2023",
    imgUrl: "/reference.png",
  },
];

export const contactData: ContactProps[] = [
  {
    icon: `<svg
        width="100%"
        height="1.5em"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path
          d="M7 9l5 3.5L17 9"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M2 17V7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"
          stroke="currentColor"
        ></path>
      </svg>`,
    name: "Send me an Email",
    value: "abdullahisalihuinusa@gmail.com",
    path: "mailto://abdullahisalihuinusa@gmail.com",
  },
  {
    icon: `<svg width="100%" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary"><path d="M18.118 14.702L14 15.5c-2.782-1.396-4.5-3-5.5-5.5l.77-4.13L7.815 2H4.064c-1.128 0-2.016.932-1.847 2.047.42 2.783 1.66 7.83 5.283 11.453 3.805 3.805 9.286 5.456 12.302 6.113 1.165.253 2.198-.655 2.198-1.848v-3.584l-3.882-1.479z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
    name: "Call Me",
    value: "+234 912 099 6480",
    path: "tel:+2349120996480",
  },
  {
    icon: `<svg width="100%" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary"><path d="M7.9 8.08c0-4.773 7.5-4.773 7.5 0 0 3.409-3.409 2.727-3.409 6.818M12 19.01l.01-.011" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
    name: "FAQs",
    value: "Get quick answers",
    path: "/faqs",
  },
];

export const footerLinks = [
  {
    title: "Instagram",
    icon: Instagram,
    path: "/",
  },
  {
    title: "Twitter",
    icon: Twitter,
    path: "/",
  },
  {
    title: "LinkedIn",
    icon: Linkedin,
    path: "/",
  },
  {
    title: "Facebook",
    icon: Facebook,
    path: "/",
  },
];

export const projects: ProjectsProps[] = [
  {
    image: demoImg,
    name: "Project Name",
    shortDescription:
      "Sleek and sophisticated font that embodies creativity and innovation.",
    url: "http://localhost:3000/projects",
    underConstruction: false,
  },
  {
    image: demoImg,
    name: "Project Name",
    shortDescription:
      "Sleek and sophisticated font that embodies creativity and innovation.",
    url: "http://localhost:3000/projects",
    underConstruction: false,
  },
  {
    image: demoImg,
    name: "Project Name",
    shortDescription:
      "Sleek and sophisticated font that embodies creativity and innovation.",
    url: "http://localhost:3000/projects",
    underConstruction: false,
  },
  {
    image: demoImg,
    name: "Project Name",
    shortDescription:
      "Sleek and sophisticated font that embodies creativity and innovation.",
    url: "http://localhost:3000/projects",
    underConstruction: true,
  },
  {
    image: demoImg,
    name: "Project Name",
    shortDescription:
      "Sleek and sophisticated font that embodies creativity and innovation.",
    url: "http://localhost:3000/projects",
    underConstruction: false,
  },
  {
    image: demoImg,
    name: "Project Name",
    shortDescription:
      "Sleek and sophisticated font that embodies creativity and innovation.",
    url: "http://localhost:3000/projects",
    underConstruction: true,
  },
  {
    image: demoImg,
    name: "Project Name",
    shortDescription:
      "Sleek and sophisticated font that embodies creativity and innovation.",
    url: "http://localhost:3000/projects",
    underConstruction: false,
  },
  {
    image: demoImg,
    name: "Project Name",
    shortDescription:
      "Sleek and sophisticated font that embodies creativity and innovation.",
    url: "http://localhost:3000/projects",
    underConstruction: false,
  },
  {
    image: demoImg,
    name: "Project Name",
    shortDescription:
      "Sleek and sophisticated font that embodies creativity and innovation.",
    url: "http://localhost:3000/projects",
    underConstruction: true,
  },
  {
    image: demoImg,
    name: "Project Name",
    shortDescription:
      "Sleek and sophisticated font that embodies creativity and innovation.",
    url: "http://localhost:3000/projects",
    underConstruction: false,
  },
  {
    image: demoImg,
    name: "Project Name",
    shortDescription:
      "Sleek and sophisticated font that embodies creativity and innovation.",
    url: "http://localhost:3000/projects",
    underConstruction: false,
  },
];

export const aboutContent: AboutProps[] = [
  {
    title: "Innovative Developer Specializing in Unique Skills",
    description:
      "With a deep understanding of cutting-edge technologies, I specialize in delivering high-quality solutions tailored to your needs.",
  },
  {
    title: "Customer-Centered Approach",
    description:
      "I'm committed to delivering excellence while being guided by experience and knowledge. With the help of cutting-edge technology, I can provide services that are specifically designed to meet your needs.",
  },
  {
    title: "Goals and Objectives",
    description:
      "As a developer, it is my goal to improve people's lives through software and web applications. I write all of my code with the intention of producing intuitive, responsive, and visually appealing digital solutions.",
  },
  {
    title: "Beyond Development",
    description:
      "I'm very involved in web development, but I also keep an eye on business trends. Beyond work, my love of learning inspires me to grow and innovate.",
  },
];

export const faqs = [
  {
    question: "What technologies/languages do you specialize in?",
    answer:
      "I specialize in full-stack development, with expertise in languages such as JavaScript (Node.js, React), Python (Django), and Java. I also have experience with database management using MySQL and MongoDB.",
  },
  {
    question: "Can you describe your development process?",
    answer:
      "My development process typically begins with understanding the project requirements, followed by planning and design. I then move on to coding, incorporating feedback iteratively, and conclude with thorough testing and deployment.",
  },
  {
    question: "What types of projects have you worked on?",
    answer:
      "I've worked on a diverse range of projects, including e-commerce websites, content management systems, and mobile applications. Each project has allowed me to leverage different technologies and hone various aspects of my development skills.",
  },
  {
    question: "How do you stay updated with the latest industry trends?",
    answer:
      "I stay updated by regularly reading tech blogs, participating in forums like Stack Overflow, and attending industry conferences. I'm also a member of online communities and engage in continuous learning through online courses and tutorials.",
  },
  {
    question:
      "Do you have experience with version control systems (e.g., Git)?",
    answer:
      "Yes, I am well-versed in using Git for version control. I routinely use branching strategies and pull requests to maintain clean and efficient code repositories.",
  },
  {
    question:
      "What's your approach to problem-solving in a development context?",
    answer:
      "My problem-solving approach involves breaking down complex issues into smaller, manageable tasks. I prioritize understanding the root cause, researching solutions, and applying best practices. Collaboration with team members and seeking feedback are integral parts of my problem-solving process.",
  },
  {
    question: "Can you provide examples of your code or projects?",
    answer:
      "Certainly! You can explore some of my code samples and projects on my GitHub profile [GitHub Profile Link]. They cover a range of technologies, demonstrating my coding style, problem-solving abilities, and project management skills.",
  },
  {
    question: "How do you handle tight deadlines and pressure?",
    answer:
      "I thrive under pressure by prioritizing tasks, maintaining clear communication with stakeholders, and breaking down projects into achievable milestones. I also allocate time for thorough testing to ensure the quality of the final deliverables.",
  },
  {
    question: "What is your experience with collaborative development?",
    answer:
      "I have extensive experience collaborating with cross-functional teams using tools like Slack and Jira. I actively participate in code reviews, provide constructive feedback, and appreciate the importance of effective communication in collaborative environments.",
  },
  {
    question: "How do you ensure the security of the applications you develop?",
    answer:
      "Security is a top priority in my development process. I follow best practices for secure coding, implement user authentication and authorization, and stay informed about the latest security vulnerabilities and patches.",
  },
];
