"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react"
import SectionHeading from "./ui/section-heading"
import { motion } from "framer-motion"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000))

        setIsSubmitting(false)
        setSubmitted(true)
        setFormData({ name: "", email: "", message: "" })

        // Reset submitted state after 3 seconds
        setTimeout(() => setSubmitted(false), 3000)
    }

    return (
        <section id="contact" className="py-20">
            <SectionHeading title="Contact Me" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Card className="border border-muted glass-card gradient-border h-full">
                        <CardHeader>
                            <CardTitle className="text-2xl">Get in Touch</CardTitle>
                            <CardDescription className="text-base">
                                Fill out the form and I'll get back to you as soon as possible.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">
                                        Your Name
                                    </label>
                                    <Input
                                        id="name"
                                        placeholder="John Doe"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="bg-background/50 border-muted-foreground/20 focus:border-primary"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">
                                        Your Email
                                    </label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="bg-background/50 border-muted-foreground/20 focus:border-primary"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">
                                        Your Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        placeholder="I'd like to discuss a project..."
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="bg-background/50 border-muted-foreground/20 focus:border-primary resize-none"
                                        required
                                    />
                                </div>
                                <Button type="submit" className="w-full relative overflow-hidden group" disabled={isSubmitting}>
                                    <span className="relative z-10 flex items-center justify-center">
                                        {isSubmitting ? (
                                            <>
                                                <svg
                                                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    ></circle>
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    ></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : submitted ? (
                                            <>
                                                <CheckCircle className="mr-2 h-4 w-4" />
                                                Message Sent!
                                            </>
                                        ) : (
                                            <>
                                                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                Send Message
                                            </>
                                        )}
                                    </span>
                                    <span className="absolute inset-0 bg-primary-foreground/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Card className="border border-muted glass-card gradient-border h-full">
                        <CardHeader>
                            <CardTitle className="text-2xl">Contact Information</CardTitle>
                            <CardDescription className="text-base">
                                Feel free to reach out through any of these channels.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            <motion.div
                                className="flex items-center"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 mr-4">
                                    <Phone className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Phone</p>
                                    <p className="font-medium">(831) 760-1402</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-center"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 mr-4">
                                    <Mail className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <a href="mailto:sam.dingore@gmail.com" className="font-medium hover:text-primary transition-colors">
                                        sam.dingore@gmail.com
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-center"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 mr-4">
                                    <MapPin className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Location</p>
                                    <p className="font-medium">California, USA</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="mt-8 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-transparent border border-primary/20"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-center text-sm">
                                    Available for freelance projects and full-time positions.
                                    <br />
                                    Let's build something amazing together!
                                </p>
                            </motion.div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}

