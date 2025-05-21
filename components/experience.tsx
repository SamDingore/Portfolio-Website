"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SectionHeading from "./ui/section-heading"
import AnimatedCard from "./ui/animated-card"

const experiences = [
    {
        title: "Software Engineer",
        company: "Innovative Configuration, Inc. (ICI)",
        period: "May 2024 – Present",
        location: "Remote",
        description: [
            "Architected and developed backend solutions for multiple frontend applications using NestJS, TypeScript, SQL, and TypeORM, applying advanced DevOps techniques with Docker and Kubernetes for streamlined deployment and scalability.",
            "Created AI agents leveraging LLM APIs, prompt engineering, and Langchain to enhance user interaction and engagement.",
            "Built, trained and evaluated Language Models for specific use cases.",
        ],
        skills: ["NestJS", "DevOps", "System Administration", "Databases", "AI Engineering"],
    },
    {
        title: "Research Assistant",
        company: "University",
        period: "Jan 2024 – May 2024",
        location: "on site",
        description: [
            "Led a team of four to design and implement an RNA motif analysis tool using Three.js and Next.js, solving complex geometric and structural biology challenges.",
            "Developed a web application utilizing a client-server architecture with Next.js and NestJS, facilitating real-time analysis and visualization for RNA research.",
        ],
        skills: ["Next.js", "NestJS", "DevOps", "System Administration"],
    },
    {
        title: "Full Stack Developer",
        company: "The Analyzing Company",
        period: "Jul 2022 – Aug 2023",
        location: "onsite",
        description: [
            "Led a development team in creating and deploying a scalable system with Next.js (frontend) and Express.js (backend), focusing on clean, modular code for optimal maintainability.",
            "Engineered a scalable, cloud-based backend with 99.9% uptime, integrating Jest for continuous testing and rapid development cycles.",
            "Successfully implemented a secure payment gateway, ensuring reliable transaction processing and improving the overall user experience.",
        ],
        skills: ["Next.js", "Express.js", "MySQL", "Directus (CMS)", "Python"],
    },
    {
        title: "Full Stack Developer Intern",
        company: "Orane Intelli Solutions",
        period: "Jul 2021 – Sep 2021",
        location: "Remote",
        description: [
            "Developed and launched a COVID-19 response app for VTTHELP, tracking infected individuals and helpers, utilizing Rapid Application Development (RAD) to meet tight deadlines and deliver an impactful solution.",
            "Designed the cross-platform app backend with Express.js, frontend with Ionic, and managed the MySQL database, ensuring smooth data communication through REST APIs.",
            "Leveraged Storybook for React to build UI components in isolation, streamlining frontend development and collaboration.",
        ],
        skills: ["Ionic", "Express.js", "MySQL"],
    },
]

export default function Experience() {
    return (
        <section id="experience" className="py-20">
            <SectionHeading title="Experience" />
            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <AnimatedCard key={index} delay={index * 2}>
                        <Card className="border border-muted glass-card gradient-border overflow-hidden">
                            <CardHeader>
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                                    <div>
                                        <CardTitle className="text-xl md:text-2xl">{exp.title}</CardTitle>
                                        <CardDescription className="text-base">{exp.company}</CardDescription>
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        <div>{exp.period}</div>
                                        <div>{exp.location}</div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-5 mb-4 space-y-2">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {exp.skills.map((skill, i) => (
                                        <Badge
                                            key={i}
                                            variant="secondary"
                                            className="animate-pulse-slow"
                                            style={{ animationDelay: `${i * 0.2}s` }}
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </AnimatedCard>
                ))}
            </div>
        </section>
    )
}

