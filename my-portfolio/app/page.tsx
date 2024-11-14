'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { Mail, Wallet2, BarChart3, Calculator, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const ProjectCard = ({ title, description, link }: { title: string; description: string; link: string }) => (
  <Card className="bg-primary text-primary-foreground rounded-3xl overflow-hidden">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription className="text-primary-foreground/70">{description}</CardDescription>
    </CardHeader>
    <CardFooter>
      <Button variant="secondary" className="w-full" asChild>
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </CardFooter>
  </Card>
)

const SkillBadge = ({ skill }: { skill: string }) => (
  <motion.div
    className="bg-secondary text-secondary-foreground rounded-full px-4 py-2 text-center"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    whileHover={{ scale: 1.05, backgroundColor: 'hsl(var(--primary))' }}
  >
    {skill}
  </motion.div>
)

const BorderAnimation = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      pathLength: [0, 1],
      opacity: [0.2, 1],
      transition: {
        duration: 4,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    })
  }, [controls])

  return (
    <svg className="absolute inset-0 w-full h-full" style={{ filter: 'blur(1px)' }}>
      <motion.rect
        width="100%"
        height="100%"
        rx="32"
        ry="32"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="4"
        animate={controls}
        style={{ pathLength: 0, opacity: 0.2 }}
      />
    </svg>
  )
}

export default function PortfolioPage() {
  const projects = [
    { title: 'Project 1', description: 'A brief description of project 1', link: '#' },
    { title: 'Project 2', description: 'A brief description of project 2', link: '#' },
    { title: 'Project 3', description: 'A brief description of project 3', link: '#' },
    { title: 'Project 4', description: 'A brief description of project 4', link: '#' },
  ]

  const skills = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'GraphQL']

  return (
    <div className="bg-background text-foreground p-4 md:p-8 min-h-screen font-sans">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Phone mockup with 3D character */}
        <motion.div
          className="col-span-1 md:col-span-2 row-span-2 bg-primary rounded-3xl overflow-hidden relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <BorderAnimation />
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Phone mockup with 3D character"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Color palette */}
        <motion.div
          className="col-span-1 bg-gradient-to-r from-primary via-secondary to-muted rounded-full h-8"
          whileHover={{ scaleX: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        ></motion.div>

        {/* Icons grid */}
        <div className="col-span-1 bg-card text-card-foreground rounded-3xl p-4 grid grid-cols-2 gap-4">
          {[Mail, Wallet2, BarChart3, Calculator].map((Icon, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl p-2 flex items-center justify-center ${
                index % 2 === 0 ? 'bg-primary' : 'bg-secondary'
              }`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="text-background" size={24} />
            </motion.div>
          ))}
        </div>

        {/* App icon */}
        <motion.div
          className="bg-primary rounded-3xl overflow-hidden"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-background w-16 h-16 rounded-2xl m-4 flex items-center justify-center">
            <div className="w-8 h-8 bg-primary rounded-full"></div>
          </div>
        </motion.div>

        {/* Logo */}
        <motion.div
          className="col-span-1 bg-secondary rounded-3xl flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h2 className="text-secondary-foreground text-2xl font-bold">Portfolio</h2>
        </motion.div>

        {/* Investors count */}
        <motion.div
          className="col-span-1 bg-card text-card-foreground rounded-3xl p-4"
          whileHover={{ y: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="flex -space-x-2 mb-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background"></div>
            ))}
            <div className="w-8 h-8 rounded-full bg-muted-foreground border-2 border-background flex items-center justify-center text-background text-xs">
              +
            </div>
          </div>
          <h3 className="text-2xl font-bold">100K+</h3>
          <p className="text-muted-foreground text-sm">connections</p>
        </motion.div>

        {/* Project cards */}
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}

        {/* Skills showcase */}
        <motion.div
          className="col-span-1 md:col-span-2 row-span-2 bg-card text-card-foreground rounded-3xl overflow-hidden relative p-6"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h3 className="text-2xl font-bold mb-4">Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}