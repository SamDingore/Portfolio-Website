"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
    return (
        <footer className="py-12 border-t border-muted">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <motion.div
                        className="mb-6 md:mb-0"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Sameer Dingore. All rights reserved.
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex space-x-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                            <Link
                                href="https://github.com/sameerdingore"
                                target="_blank"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </Link>
                        </motion.div>

                        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                            <Link
                                href="https://linkedin.com/in/sameerdingore"
                                target="_blank"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </motion.div>

                        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                            <Link
                                href="mailto:sam.dingore@gmail.com"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="Email"
                            >
                                <Mail className="h-5 w-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    className="mt-8 text-center text-sm text-muted-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <p className="flex items-center justify-center">
                        Built with
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                            className="inline-block mx-1 text-red-500"
                        >
                            <Heart className="h-4 w-4 fill-current" />
                        </motion.span>
                        using Next.js and Tailwind CSS
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}

