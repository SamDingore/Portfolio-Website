"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedTextProps {
    text: string | ReactNode
    className?: string
    once?: boolean
    delay?: number
}

export default function AnimatedText({ text, className = "", once = false, delay = 0 }: AnimatedTextProps) {
    // For string text, animate each word
    if (typeof text === "string") {
        const words = text.split(" ")

        const container = {
            hidden: { opacity: 0 },
            visible: (i = 1) => ({
                opacity: 1,
                transition: { staggerChildren: 0.12, delayChildren: delay * 0.1 },
            }),
        }

        const child = {
            hidden: {
                opacity: 0,
                y: 20,
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    type: "spring",
                    damping: 12,
                    stiffness: 100,
                },
            },
        }

        return (
            <motion.div
                className={`overflow-hidden inline-flex flex-wrap ${className}`}
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once }}
            >
                {words.map((word, index) => (
                    <motion.span key={index} className="mr-1 inline-block" variants={child}>
                        {word}
                    </motion.span>
                ))}
            </motion.div>
        )
    }

    // For ReactNode, animate the whole node
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: delay * 0.1,
                type: "spring",
                damping: 12,
                stiffness: 100,
            }}
            viewport={{ once }}
        >
            {text}
        </motion.div>
    )
}

