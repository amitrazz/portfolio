import corpcommentImg from "@/assets/corpcomment.png";
import rmtdevImg from "@/assets/rmtdev.png";
import wordanalyticsImg from "@/assets/wordanalytics.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: 'Senior Software Engineer',
    location: 'Aptos, Bangalore',
    description:
      'Architected a microservices commerce platform using Node.js and AWS Lambda with seamless CI/CD and 99.99% uptime.',
    icon: React.createElement(FaReact),
    date: 'May 2023 – Present',
  },
  {
    title: 'Tech Lead (SDE IV)',
    location: 'Valuebound Consulting, Bangalore',
    description:
      'Designed scalable backend services using NestJS & GraphQL, improved system throughput by 40%, reviewed 100+ PRs, and mentored junior devs.',
    icon: React.createElement(CgWorkAlt),
    date: 'Jul 2021 – May 2023',
  },
  {
    title: 'SDE III – FinTech',
    location: 'Robosoft Technologies, Bangalore',
    description:
      'Led microservices and queue-based architecture for a FinTech product, enhancing scalability and fault tolerance.',
    icon: React.createElement(CgWorkAlt),
    date: 'Mar 2021 – Jul 2021',
  },
  {
    title: 'Full Stack Developer',
    location: 'Creatise, Bangalore',
    description:
      'Built and maintained React/Node.js applications with MongoDB. Created CI pipelines and improved test coverage to 85% for critical services.',
    icon: React.createElement(CgWorkAlt),
    date: '2016 – 2021',
  },
  {
    title: 'Bachelor of Engineering (ECE)',
    location: 'Bangalore, India',
    description:
      'Graduated from KNS Institute of Technology with a degree in Electronics & Communication Engineering.',
    icon: React.createElement(LuGraduationCap),
    date: '2011 – 2016',
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  { name: 'JavaScript', category: 'Programming Languages' },
  { name: 'TypeScript', category: 'Programming Languages' },
  { name: 'Python', category: 'Programming Languages' },

  { name: 'React.js', category: 'Frontend & Mobile' },
  { name: 'Next.js', category: 'Frontend & Mobile' },
  { name: 'React Native', category: 'Frontend & Mobile' },
  { name: 'Flutter', category: 'Frontend & Mobile' },
  { name: 'HTML5', category: 'Frontend & Mobile' },
  { name: 'CSS3', category: 'Frontend & Mobile' },

  { name: 'Node.js', category: 'Backend & APIs' },
  { name: 'NestJS', category: 'Backend & APIs' },
  { name: 'Express.js', category: 'Backend & APIs' },
  { name: 'Hapi.js', category: 'Backend & APIs' },
  { name: 'GraphQL', category: 'Backend & APIs' },
  { name: 'REST APIs', category: 'Backend & APIs' },
  { name: 'OpenAPI', category: 'Backend & APIs' },
  { name: 'Microservices', category: 'Backend & APIs' },

  { name: 'AWS', category: 'Cloud & DevOps' },
  { name: 'Serverless', category: 'Cloud & DevOps' },
  { name: 'CI/CD', category: 'Cloud & DevOps' },
  { name: 'Docker', category: 'Cloud & DevOps' },
  { name: 'Lambda', category: 'Cloud & DevOps' },
  { name: 'CloudFormation', category: 'Cloud & DevOps' },

  { name: 'MongoDB', category: 'Databases & Storage' },
  { name: 'PostgreSQL', category: 'Databases & Storage' },
  { name: 'MySQL', category: 'Databases & Storage' },
  { name: 'DynamoDB', category: 'Databases & Storage' },
  { name: 'S3', category: 'Databases & Storage' },
] as const;

