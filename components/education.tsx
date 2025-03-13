"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SectionHeading from "./ui/section-heading"
import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

export default function Education() {
    return (
        <section id="education" className="py-20">
            <SectionHeading title="Education" />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <Card className="border border-muted glass-card gradient-border overflow-hidden">
                    <CardHeader className="relative">
                        <motion.div
                            className="absolute top-4 right-4 p-2 rounded-full bg-primary/10"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 0.3,
                            }}
                            viewport={{ once: true }}
                        >
                            <GraduationCap className="h-6 w-6 text-primary" />
                        </motion.div>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                            <div>
                                <CardTitle className="text-xl md:text-2xl">California State University, Monterey Bay</CardTitle>
                                <CardDescription className="text-base">
                                    Computer Science B.S., Software Engineering Concentration
                                </CardDescription>
                            </div>
                            <div className="text-sm text-muted-foreground">
                                <div>Graduated: Dec 2024</div>
                                <div className="font-semibold text-primary">3.9 GPA (Dean's List)</div>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <motion.div
                            className="w-full bg-muted rounded-full h-2 mt-2"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-primary h-2 rounded-full w-full" />
                        </motion.div>
                    </CardContent>
                </Card>
            </motion.div>
        </section>
    )
}

