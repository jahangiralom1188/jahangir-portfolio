import siteConfig from "./siteConfig";

import studyhubImage from "../assets/projects/studyhub.png";
import dailyflowImage from "../assets/projects/dailyflow.png";

const projects = [
  {
    id: "studyhub",
    number: "01",
    title: "StudyHub",
    category: "Full-Stack Web Application",
    description:
      "A student-focused platform designed to bring study resources and useful academic tools together in one place.",
    technologies: ["React", "Vite", "Node.js", "Express", "MongoDB"],
    status: "Featured",
    accent: "blue",
    image: studyhubImage,
    github: siteConfig.projects.studyhub.github,
    live: siteConfig.projects.studyhub.live,
  },

  {
    id: "dailyflow",
    number: "02",
    title: "DailyFlow",
    category: "Android Application",
    description:
      "A personal routine and reminder application built to manage daily tasks, class schedules, notifications, and attendance tracking.",
    technologies: ["Java", "Android", "SQLite", "Notifications"],
    status: "Featured",
    accent: "purple",
    image: dailyflowImage,
    mobile: true,
    github: siteConfig.projects.dailyflow.github,
    live: siteConfig.projects.dailyflow.live,
  },

  {
    id: "foods-mart",
    number: "03",
    title: "Foods Mart",
    category: "Web Application",
    description:
      "A food-focused web application built with a Python backend and MongoDB database.",
    technologies: ["Python", "HTML", "CSS", "MongoDB"],
    status: "Project",
    accent: "green",
    github: siteConfig.projects.foodsMart.github,
    live: siteConfig.projects.foodsMart.live,
  },

  {
    id: "silent-caller",
    number: "04",
    title: "Silent Caller",
    category: "Web Application",
    description:
      "A web-based project combining a frontend interface with Python and MongoDB functionality.",
    technologies: ["HTML", "CSS", "Python", "MongoDB"],
    status: "In Progress",
    accent: "orange",
    github: siteConfig.projects.silentCaller.github,
    live: siteConfig.projects.silentCaller.live,
  },
];

export default projects;