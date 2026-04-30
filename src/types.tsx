import { Sparkles, BookOpen, Users, ArrowRight, ShieldCheck, Database, Layout, Code } from 'lucide-react';
import React from 'react';

export interface Course {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  fullDescription: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  syllabus: string[];
  instructor: string;
}

export const ALL_COURSES: Course[] = [
  { 
    id: 'ai',
    title: "Advanced AI", 
    icon: <Sparkles />, 
    color: "text-blue-400",
    description: "Master Neural Networks and LLMs with hands-on projects.",
    fullDescription: "Dive deep into the world of Artificial Intelligence. This course covers everything from basic machine learning algorithms to advanced deep learning architectures and Large Language Models (LLMs).",
    duration: "6 Months",
    level: "Advanced",
    syllabus: ["Neural Networks", "Natural Language Processing", "Computer Vision", "Reinforcement Learning"],
    instructor: "Dr. Sarah Mitchell"
  },
  { 
    id: 'ds',
    title: "Data Science", 
    icon: <Database />, 
    color: "text-green-400",
    description: "Learn to turn raw data into powerful business insights.",
    fullDescription: "A comprehensive journey into data analysis, statistical modeling, and predictive analytics using Python and R.",
    duration: "5 Months",
    level: "Intermediate",
    syllabus: ["Statistic Models", "Python for Data Science", "Big Data Tools", "Visualization"],
    instructor: "Dr. Robert Fox"
  },
  { 
    id: 'ux',
    title: "UX Design", 
    icon: <Layout />, 
    color: "text-purple-400",
    description: "Create user-centric interfaces that people love to use.",
    fullDescription: "Learn the psychology of design, wireframing, prototyping, and user testing with modern tools like Figma.",
    duration: "4 Months",
    level: "Beginner",
    syllabus: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
    instructor: "Prof. James Chen"
  },
  { 
    id: 'cloud',
    title: "Cloud Computing", 
    icon: <ArrowRight />, 
    color: "text-orange-400",
    description: "Deploy and scale applications on AWS, Azure, and GCP.",
    fullDescription: "Master cloud infrastructure, serverless architecture, and devops practices on major cloud platforms.",
    duration: "4 Months",
    level: "Intermediate",
    syllabus: ["AWS Fundamentals", "Azure Services", "Kubernetes", "CI/CD Pipelines"],
    instructor: "Michael Scott"
  },
  { 
    id: 'cyber',
    title: "Cyber Security", 
    icon: <ShieldCheck />, 
    color: "text-red-400",
    description: "Protect digital assets and master ethical hacking.",
    fullDescription: "Learn to identify vulnerabilities, defend against attacks, and build secure network architectures.",
    duration: "6 Months",
    level: "Advanced",
    syllabus: ["Ethical Hacking", "Network Security", "Cryptography", "Risk Management"],
    instructor: "Elena Rodriguez"
  },
  { 
    id: 'fs',
    title: "Full Stack Dev", 
    icon: <Code />, 
    color: "text-indigo-400",
    description: "Build robust web applications from front to back.",
    fullDescription: "A complete stack training including React, Node.js, Express, and MongoDB to build modern web apps.",
    duration: "8 Months",
    level: "Beginner",
    syllabus: ["React Mastery", "Node.js Backend", "Database Design", "API Development"],
    instructor: "David Malan"
  }
];
