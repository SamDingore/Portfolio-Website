"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SectionHeading from "./ui/section-heading"
import { motion } from "framer-motion"

const skillCategories = [
    {
        category: "Languages",
        skills: ["C++", "Python", "Java", "HTML/CSS/Tailwind CSS", "JavaScript", "TypeScript", "SQL", "PHP"],
    },
    {
        category: "Frameworks",
        skills: ["NextJS", "ReactJS", "NestJS", "ExpressJS", "IONIC", "Redis"],
    },
    {
        category: "Technologies",
        skills: [
            "Directus (Headless CMS)",
            "Android Development",
            "Docker",
            "Git",
            "Kubernetes",
            "NGINX",
            "Langchain",
            "Huggingface",
        ],
    },
    {
        category: "Operating Systems",
        skills: ["Linux Distribution (Ubuntu)", "RedHat", "Unix"],
    },
    {
        category: "Scripting",
        skills: ["Bash shell scripting", "Python", "R", "Jupyter Notebook"],
    },
]

export default function Skills() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    }

    return (
        <section id="skills" className="py-20">
            <SectionHeading title="Technical Skills" />
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
            >
                {skillCategories.map((category, index) => (
                    <motion.div key={index} variants={item}>
                        <Card className="border border-muted glass-card gradient-border h-full">
                            <CardHeader>
                                <CardTitle className="text-xl relative inline-block">
                                    {category.category}
                                    <motion.div
                                        className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        viewport={{ once: true }}
                                    />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <motion.div
                                    className="flex flex-wrap gap-2"
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    variants={{
                                        hidden: { opacity: 0 },
                                        show: {
                                            opacity: 1,
                                            transition: { staggerChildren: 0.05 },
                                        },
                                    }}
                                >
                                    {category.skills.map((skill, i) => (
                                        <motion.div
                                            key={i}
                                            variants={{
                                                hidden: { opacity: 0, scale: 0.8 },
                                                show: {
                                                    opacity: 1,
                                                    scale: 1,
                                                    transition: { type: "spring", stiffness: 200 },
                                                },
                                            }}
                                        >
                                            <Badge
                                                variant="secondary"
                                                className="text-sm font-medium py-1.5 bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 transition-colors"
                                            >
                                                {skill}
                                            </Badge>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

