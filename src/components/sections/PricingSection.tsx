'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Section from '../ui/Section'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import { Check } from 'lucide-react'

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: 99,
      description: 'Perfect for teams just getting started',
      features: [
        'Up to 10 workflows',
        'Basic integrations',
        'Monthly reports',
        'Email support',
        '99.5% uptime SLA',
      ],
      cta: 'Start Free Trial',
      highlighted: false,
    },
    {
      name: 'Professional',
      price: 299,
      description: 'For growing teams and businesses',
      features: [
        'Unlimited workflows',
        'Advanced integrations',
        'Real-time analytics',
        'Priority support',
        '99.9% uptime SLA',
        'Custom integrations',
        'Team collaboration',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom SLA',
        'Advanced security',
        'On-premise deployment',
        'Custom training',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ]

  return (
    <Section id="pricing" gradient>
      <div className="max-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="primary" size="md" className="justify-center mb-4">
            Simple, Transparent Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Plans for Every Scale</h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Start free and scale as you grow. No credit card required.
          </p>
        </motion.div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-4 bg-neutral-800/50 p-1.5 rounded-lg border border-neutral-700/50">
            <button className="px-4 py-2 rounded-md bg-accent-500 text-dark font-medium text-sm transition-colors">
              Monthly
            </button>
            <button className="px-4 py-2 rounded-md text-text-secondary font-medium text-sm hover:text-text transition-colors">
              Annual (Save 20%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card
                variant={plan.highlighted ? 'gradient' : 'default'}
                hover
                className={`p-8 h-full flex flex-col ${
                  plan.highlighted ? 'ring-2 ring-accent-500' : ''
                }`}
              >
                {plan.highlighted && (
                  <Badge variant="success" size="sm" className="w-fit mb-4">
                    Most Popular
                  </Badge>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-text-secondary text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  {typeof plan.price === 'number' ? (
                    <>
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-text-secondary ml-2">/month</span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold">{plan.price}</span>
                  )}
                </div>

                {/* CTA */}
                <Button
                  variant={plan.highlighted ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full mb-8"
                >
                  {plan.cta}
                </Button>

                {/* Features */}
                <div className="space-y-4 flex-grow">
                  {plan.features.map((feature) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <Check size={20} className="text-accent-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-text-secondary">
            All plans include 30-day free trial. No credit card required.{' '}
            <a href="#faq" className="text-accent-400 hover:text-accent-300 transition-colors">
              See FAQ
            </a>
          </p>
        </motion.div>
      </div>
    </Section>
  )
}

export default PricingSection
