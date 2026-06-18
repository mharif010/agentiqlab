"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import Card from "../ui/Card";
import { Zap } from "lucide-react";

const UseCasesSection = () => {
  const useCases = [
    {
      industry: "Marketing",
      icon: "📢",
      use_cases: [
        "Automated email sequences based on user behavior",
        "Real-time social media scheduling and publishing",
        "Lead scoring and qualification workflows",
        "Campaign performance reporting and analysis",
      ],
    },
    {
      industry: "Operations",
      icon: "⚙️",
      use_cases: [
        "Invoice processing and expense management",
        "Supply chain tracking and alerts",
        "Inventory management automation",
        "Resource allocation optimization",
      ],
    },
    {
      industry: "Customer Support",
      icon: "💬",
      use_cases: [
        "Intelligent ticket routing and categorization",
        "Automated response generation for common questions",
        "Customer satisfaction tracking",
        "Knowledge base updates and maintenance",
      ],
    },
    {
      industry: "Finance",
      icon: "💰",
      use_cases: [
        "Automated reconciliation and reporting",
        "Expense approval workflows",
        "Financial forecasting and analysis",
        "Compliance monitoring and audit trails",
      ],
    },
  ];

  return (
    <Section id="use-cases">
      <div className="max-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Use Cases
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Agentiq Lab powers automation across every department and industry
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.industry}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card variant="gradient" hover className="p-8 h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-4xl mb-2">{useCase.icon}</div>
                    <h3 className="text-2xl font-bold">{useCase.industry}</h3>
                  </div>
                  <Zap className="text-accent-400 w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Use Cases List */}
                <ul className="space-y-3">
                  {useCase.use_cases.map((item) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-text-secondary group/item"
                    >
                      <span className="w-2 h-2 rounded-full bg-accent-400 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default UseCasesSection;
