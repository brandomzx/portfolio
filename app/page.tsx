"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail, MessageSquare, ArrowRight, ExternalLink, Linkedin, Menu } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

// Add this custom ScrollLink component
const ScrollLink = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()

    // Get the target element
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      // Scroll to the target element with smooth behavior
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for header height
        behavior: "smooth",
      })

      // Update URL without reload
      window.history.pushState({}, "", href)
    }
  }

  return (
    <a href={href} onClick={handleScroll} className={className}>
      {children}
    </a>
  )
}

export default function QuantumNetworkInc() {
  const [logoClicked, setLogoClicked] = useState(false)
  const projects = [
    {
      image: "/7.png", link: "https://saveur-eight.vercel.app/",
      title: "Saveur",
      description: "A Design Project for a elegant Gourmet or Restaurant Website.",
    },
    {
      image: "/9.png", link: "https://ghibli-woad.vercel.app/",
      title: "Ghibli",
      description: "A Parody Design about Ghibli Studio and their work.",
    },
    {
      image: "/12.png", link: "https://informative-three.vercel.app/",
      title: "Informative",
      description: "An Informative Website about providing services such as Development, Marketing and Applications.",
    },
    {
      image: "/16.png", link: "https://impactful-website.vercel.app/",
      title: "Impactful",
      description: "A tourist place to book a tour through the Esmerald Mountains.",
    },
    {
      image: "/18.png", link: "https://ecommerce-landing-lovat.vercel.app/",
      title: "E-Commerce",
      description: "Landing page for a E-Commerce Website.",
    },
    {
      image: "/19.png", link: "https://quantumh.vercel.app/",
      title: "Hotel",
      description: "Landing page of Hospitality and Hotels Website.",
    },

  ]



  // Reset animation state after animation completes
  useEffect(() => {
    if (logoClicked) {
      const timer = setTimeout(() => {
        setLogoClicked(false)
      }, 500) // Match this to the animation duration
      return () => clearTimeout(timer)
    }
  }, [logoClicked])

  const scrollToTop = () => {
    setLogoClicked(true)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <button
            onClick={scrollToTop}
            className={`flex items-center gap-2 font-bold text-xl transition-all duration-500 ease-in-out ${logoClicked ? "scale-110 text-primary" : "hover:text-primary hover:scale-105"}`}
          >
            <span className="text-primary relative">
              Quantum Network Inc.
              {logoClicked && (
                <span className="absolute inset-0 animate-pulse bg-primary/10 rounded-md" aria-hidden="true"></span>
              )}
            </span>
          </button>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <ScrollLink href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </ScrollLink>
            <ScrollLink href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </ScrollLink>
            <ScrollLink href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </ScrollLink>
            <ScrollLink href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </ScrollLink>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedSection animation="fade-in" className="container py-24 sm:py-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Hi, I'm <span className="text-primary">Brandom Orduz</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                I'm a creative professional specializing in web design, UX/UI, and digital experiences.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById("projects")
                    if (element) {
                      window.scrollTo({
                        top: element.offsetTop - 80,
                        behavior: "smooth",
                      })
                    }
                  }}
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById("contact")
                    if (element) {
                      window.scrollTo({
                        top: element.offsetTop - 80,
                        behavior: "smooth",
                      })
                    }
                  }}
                >
                  Contact Me
                </Button>
              </div>
              <div className="flex gap-4 pt-4">
                <Link href="https://github.com/brandomzx" rel="noopener noreferrer" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="https://www.linkedin.com/in/brandomorduz" rel="noopener noreferrer" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-full border-4 border-primary mx-auto lg:mx-0 max-w-[400px] w-full">
              <Image src="/1.png" alt="Profile" fill className="object-cover" priority />
            </div>
          </div>
        </AnimatedSection>

        {/* About Section */}
        <AnimatedSection id="about" animation="fade-up" className="bg-muted/50 py-16 sm:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">About Me</h2>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <AnimatedSection
                animation="fade-right"
                className="relative aspect-video overflow-hidden rounded-lg border"
              >
                <Image src="/2.jpg" alt="About me" fill className="object-cover" />
              </AnimatedSection>
              <AnimatedSection animation="fade-left" className="space-y-4">
                <p className="text-lg">
                  I'm a passionate creative professional with over 3 years of experience in web design and development.
                  I specialize in creating beautiful, functional websites that help businesses achieve their goals.
                </p>
                <p className="text-lg">
                  My approach combines aesthetic sensibility with technical expertise to deliver digital experiences
                  that are not only visually appealing but also user-friendly and effective.
                </p>
                <p className="text-lg">When I'm not designing or coding, you can find me at Final Fantasy 14.</p>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection id="projects" animation="fade-up" className="container py-16 sm:py-24">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">My Projects</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((imgUrl, index) => (
              <AnimatedSection key={index} animation="zoom-in" delay={index * 100} className="overflow-hidden">
                <Card className="h-full">
                  <div className="relative aspect-video">
                    <Image
                      src={imgUrl.image}
                      alt={`Project ${index + 1}`}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{imgUrl.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {imgUrl.description}
                    </p>
                    <div className="flex">
                      <Link href={imgUrl.link} target="_blank" rel="noopener noreferrer">
                        <Button size="sm">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection id="skills" animation="fade-up" className="bg-muted/50 py-16 sm:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">My Skills</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Web Design", description: "Creating beautiful, intuitive interfaces" },
                { title: "Frontend Development", description: "Building responsive, interactive websites" },
                { title: "UX/UI Design", description: "Crafting user-centered digital experiences" },
                { title: "Graphic Design", description: "Developing visual assets and branding" },
                { title: "SEO Optimization", description: "Improving visibility and search rankings" },
                { title: "Content Strategy", description: "Planning effective content hierarchies" },
                { title: "Responsive Design", description: "Ensuring sites work on all devices" },
                { title: "Performance Optimization", description: "Making websites fast and efficient" },
              ].map((skill, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 75} className="bg-background">
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                      <p className="text-muted-foreground">{skill.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection id="contact" animation="fade-up" className="container py-16 sm:py-24">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Get In Touch
          </h2>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <AnimatedSection animation="fade-right" className="space-y-4">
              <h3 className="text-2xl font-bold">Let's Work Together</h3>
              <p className="text-lg text-muted-foreground">
                I'm currently available for freelance work. If you have a project that you want to get started, think
                you need my help with something, or just want to say hello, then get in touch.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>brandomjorduz@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span>+1 (407) 955-8108</span>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <Link href="https://github.com/brandomzx" rel="noopener noreferrer" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="https://www.linkedin.com/in/brandomorduz/" rel="noopener noreferrer" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-left">
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="name"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <input
                        id="subject"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Your message"
                      />
                    </div>
                    <Button className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 font-bold text-xl hover:text-primary transition-colors"
          >
            <span className="text-primary">Quantum Network Inc.</span>
          </button>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Brandom Orduz. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://github.com/brandomzx" rel="noopener noreferrer" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/brandomorduz/" rel="noopener noreferrer" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

