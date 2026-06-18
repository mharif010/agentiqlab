'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Section from '../ui/Section'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import { ArrowRight } from 'lucide-react'

const FinalCTASection = () => {
  return (
    <Section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-dark-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="primary" size="md" className="justify-center mb-6 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-accent-400 mr-2"></span>
            Ready to Transform?
          </Badge>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Join Thousands of Teams Scaling Faster
          </h2>

          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8">
            Start your 30-day free trial today. No credit card required. Get full access to all features and see how much time and money you can save.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="primary" size="lg" className="group">
                Start Free Trial
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <p className="text-sm text-text-secondary">
              30 days. No credit card. Full access.
            </p>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-text-secondary"
          >
            <div className="flex items-center gap-2">
              <span>🔒</span>
              Enterprise Security
            </div>
            <div className="hidden md:block w-px h-5 bg-neutral-800"></div>
            <div className="flex items-center gap-2">
              <span>⚡</span>
              99.9% Uptime SLA
            </div>
            <div className="hidden md:block w-px h-5 bg-neutral-800"></div>
            <div className="flex items-center gap-2">
              <span>🤝</span>
              24/7 Support
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}

export default FinalCTASection
