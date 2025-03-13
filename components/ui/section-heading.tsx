"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
    title: string
    className?: string
}

export default function SectionHeading({ title, className = "" }: SectionHeadingProps) {
    return (
        <div className={`relative mb-12 text-center ${className}`}>
            <motion.h2
                className="text-3xl md:text-4xl font-bold relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
            >
                {title}
            </motion.h2>
            <motion.div
                className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-24 bg-primary rounded-full"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 96, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            />
        </div>
    )
}

