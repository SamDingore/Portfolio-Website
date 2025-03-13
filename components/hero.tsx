"use client"

import { Button } from "@/components/ui/button"
import { Github, Mail, Linkedin, ChevronDown } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import AnimatedText from "./ui/animated-text"

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-transparent dark:from-blue-950/30" />
            </div>

            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                >
                    <div className="inline-block relative">
                        <span className="text-sm font-medium px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                            Software Engineer
                        </span>
                        <motion.span
                            className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                        />
                    </div>
                </motion.div>

                <AnimatedText text="Sameer Dingore" className="text-5xl md:text-7xl font-bold mb-4" />

                <AnimatedText
                    text="Building digital experiences that matter"
                    className="text-xl md:text-2xl text-muted-foreground mb-8"
                    delay={5}
                />

                <AnimatedText
                    text={
                        <p className="max-w-2xl mx-auto text-lg mb-8">
                            Specializing in full-stack development with Next.js, NestJS, and DevOps. Building scalable applications
                            and AI-powered solutions.
                        </p>
                    }
                    delay={8}
                />

                <motion.div
                    className="flex flex-wrap justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <Button size="lg" className="relative overflow-hidden group" asChild>
                        <Link href="#contact">
                            <span className="relative z-10">Contact Me</span>
                            <span className="absolute inset-0 bg-primary-foreground/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>
                    </Button>

                    <Button variant="outline" size="lg" className="relative overflow-hidden group" asChild>
                        <Link href="#projects">
                            <span className="relative z-10">View Projects</span>
                            <span className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>
                    </Button>
                </motion.div>

                <motion.div
                    className="flex justify-center mt-8 space-x-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                >
                    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                        <Button variant="ghost" size="icon" className="rounded-full" asChild>
                            <Link href="https://github.com/sameerdingore" target="_blank" aria-label="GitHub">
                                <Github className="h-5 w-5" />
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                        <Button variant="ghost" size="icon" className="rounded-full" asChild>
                            <Link href="mailto:sam.dingore@gmail.com" aria-label="Email">
                                <Mail className="h-5 w-5" />
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                        <Button variant="ghost" size="icon" className="rounded-full" asChild>
                            <Link href="https://linkedin.com/in/sameerdingore" target="_blank" aria-label="LinkedIn">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    delay: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    repeatDelay: 0.5,
                }}
            >
                <Link href="#experience" aria-label="Scroll down">
                    <ChevronDown className="h-8 w-8 text-muted-foreground" />
                </Link>
            </motion.div>
        </section>
    )
}

