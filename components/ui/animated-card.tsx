"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedCardProps {
    children: ReactNode
    className?: string
    delay?: number
}

export default function AnimatedCard({ children, className = "", delay = 0 }: AnimatedCardProps) {
    return (
        <motion.div
            className={`${className}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: delay * 0.1,
                type: "spring",
                damping: 12,
                stiffness: 100,
            }}
            whileHover={{
                y: -5,
                transition: { duration: 0.2 },
            }}
            viewport={{ once: true, margin: "-100px" }}
        >
            {children}
        </motion.div>
    )
}

