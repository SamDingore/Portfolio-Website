"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Link from "next/link"
import SectionHeading from "./ui/section-heading"
import AnimatedCard from "./ui/animated-card"

const projects = [
    {
        title: "RNA 3D Canvas",
        description: [
            "Developed a web tool for visualizing, analyzing, and annotating RNA structures in 3D, leveraging Babylon.js for rendering complex biological data.",
            "Added advanced features like 3D nucleotide selection, base pair visualization, and annotation capabilities to assist researchers in structural biology.",
        ],
        technologies: ["NEXT JS", "Babylon.js", "TypeScript", "Node.js"],
        github: "https://github.com/samdingore",
    },
    {
        title: "Dating Site for Shoppers (Mingle All the Way)",
        description: [
            "Built a unique dating platform where shoppers can match based on specific preferences and availability, creating personalized shopping meetups.",
            "Designed a custom matching algorithm for users to connect on niche requirements, coupled with profile hashing and data encryption to ensure secure, protected user interactions.",
            "Single-handedly conceptualized, developed, and tested the project using Selenium—all in just three days.",
        ],
        technologies: ["HTML", "Handlebars", "CSS", "Express", "MySQL"],
        github: "https://github.com/samdingore",
    },
    {
        title: "Image Processing Software (Video Making Automation)",
        description: [
            "Developed a command-line tool to edit large numbers of videos and images, utilizing C and modifying the FFMPEG library for fast image processing.",
            "Designed the software to sequence, frame, and format images, solving the challenges of managing large-sized image sets during video editing.",
            "Rebuilt the tool in C++ and released both versions for public use on Github.",
        ],
        technologies: ["C", "C++", "FFMPEG"],
        github: "https://github.com/samdingore",
    },
]

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <SectionHeading title="Projects" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <AnimatedCard key={index} delay={index * 2} className="h-full">
                        <Card className="flex flex-col h-full border border-muted glass-card gradient-border overflow-hidden">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-xl">{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <ul className="list-disc pl-5 mb-4 space-y-2">
                                    {project.description.map((item, i) => (
                                        <li key={i} className="text-sm">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.technologies.map((tech, i) => (
                                        <Badge key={i} variant="outline" className="bg-primary/5 border-primary/20">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" size="sm" asChild className="w-full group">
                                    <Link href={project.github} target="_blank">
                                        <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                                        <span className="relative">
                                            View on GitHub
                                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform" />
                                        </span>
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </AnimatedCard>
                ))}
            </div>
        </section>
    )
}

