'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Section from '../ui/Section'
import Card from '../ui/Card'
import { CheckCircle } from 'lucide-react'

const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Connect Your Tools',
      description: 'Integrate with your existing apps, databases, and services. Works with 1000+ integrations.',
    },
    {
      number: '02',
      title: 'Build Workflows',
      description: 'Create automation workflows using our intuitive builder. No coding required.',
    },
    {
      number: '03',
      title: 'Deploy & Monitor',
      description: 'Launch your automations and track performance in real-time with detailed analytics.',
    },
    {
      number: '04',
      title: 'Optimize & Scale',
      description: 'Use AI insights to continuously improve workflows and automate more operations.',
    },
  ]

  return (
    <Section id="how-it-works" gradient>
      <div className="max-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Four simple steps to transform your operations with intelligent automation
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card variant="default" hover className="p-8 h-full">
                {/* Step Number */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="text-4xl font-bold gradient-text mr-4"
                    >
                      {step.number}
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="w-8 h-8 rounded-full bg-accent-500/20 flex items-center justify-center"
                    >
                      <CheckCircle size={20} className="text-accent-400" />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-text-secondary">{step.description}</p>

                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute left-1/2 top-full w-0.5 h-8 bg-gradient-to-b from-accent-500/50 to-transparent"
                    animate={{ scaleY: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default HowItWorksSection
