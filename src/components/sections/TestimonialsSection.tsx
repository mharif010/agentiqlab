'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Section from '../ui/Section'
import Card from '../ui/Card'
import { Star } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'VP of Operations',
      company: 'TechCorp',
      image: '👩‍💼',
      quote: 'Agentiq Lab reduced our manual data entry by 80%. What used to take our team 40 hours a week now takes less than 8.',
      rating: 5,
    },
    {
      name: 'James Mitchell',
      role: 'CEO',
      company: 'InnovateLabs',
      image: '👨‍💼',
      quote: 'The ROI was immediate. We saved $200K in the first month alone. Best investment in automation we\'ve made.',
      rating: 5,
    },
    {
      name: 'Maria Garcia',
      role: 'Head of Marketing',
      company: 'CloudBase',
      image: '👩‍💻',
      quote: 'Incredibly intuitive platform. Our non-technical team members were building workflows within hours of onboarding.',
      rating: 5,
    },
    {
      name: 'David Park',
      role: 'Operations Manager',
      company: 'DataFlow',
      image: '👨‍🔧',
      quote: 'The support team is exceptional. Every question was answered quickly and helpfully. Highly recommend.',
      rating: 5,
    },
  ]

  return (
    <Section id="testimonials" gradient>
      <div className="max-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Loved by Teams Worldwide</h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            See how companies are transforming their operations with Agentiq Lab
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="default" hover className="p-6 md:p-8 h-full flex flex-col">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={18} className="fill-accent-400 text-accent-400" />
                    ))}
                </div>

                {/* Quote */}
                <p className="text-lg mb-6 flex-grow text-text-secondary italic">"{testimonial.quote}"</p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-text-secondary">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default TestimonialsSection
