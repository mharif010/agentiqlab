'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Section from '../ui/Section'
import Card from '../ui/Card'
import { ArrowRight, Zap, BarChart3, Users, Wrench } from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Intelligent agents that learn from your workflows and continuously improve performance.',
    },
    {
      icon: Wrench,
      title: 'Workflow Builder',
      description: 'Intuitive drag-and-drop interface to create complex automations without coding.',
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Real-time insights into automation performance, efficiency gains, and ROI metrics.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Built-in tools for teams to share, manage, and scale workflows together.',
    },
  ]

  return (
    <Section id="features" gradient>
      <div className="max-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Powerful Features</h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Everything you need to automate workflows, reduce manual work, and scale operations
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="gradient" hover className="p-6 md:p-8 h-full group cursor-pointer">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="w-12 h-12 rounded-lg bg-accent-500/20 flex items-center justify-center mb-4 group-hover:bg-accent-500/30 transition-colors"
                  >
                    <Icon size={24} className="text-accent-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-text-secondary mb-4">{feature.description}</p>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-center text-accent-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Learn more
                    <ArrowRight size={16} className="ml-2" />
                  </motion.div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export default FeaturesSection
