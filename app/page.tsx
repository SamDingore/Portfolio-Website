import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
// import Education from "@/components/education"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <div className="container mx-auto px-4 py-8 space-y-20">
        <Experience />
        {/* <Education /> */}
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  )
}

