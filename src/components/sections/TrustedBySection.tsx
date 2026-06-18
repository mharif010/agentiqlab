"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import Card from "../ui/Card";

const TrustedBySection = () => {
  const companies = [
    { name: "TechCorp", logo: "🏢" },
    { name: "InnovateLabs", logo: "🚀" },
    { name: "CloudBase", logo: "☁️" },
    { name: "DataFlow", logo: "📊" },
    { name: "Automate Inc", logo: "⚙️" },
    { name: "SmartOps", logo: "🧠" },
  ];

  const stats = [
    { number: "500+", description: "Enterprise Customers" },
    { number: "5M+", description: "Workflows Automated" },
    { number: "50B+", description: "Data Points Processed" },
    { number: "$2.5B", description: "Value Created" },
  ];

  return (
    <Section id="trusted-by" className="py-12 md:py-16">
      <div className="max-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Join thousands of companies automating their workflows with Agentiq
            Lab
          </p>
        </motion.div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16 py-8 border-y border-neutral-800/50"
        >
          {companies.map((company) => (
            <motion.div
              key={company.name}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center justify-center"
            >
              <Card
                variant="default"
                className="w-full p-6 text-center cursor-pointer"
              >
                <div className="text-4xl mb-2">{company.logo}</div>
                <div className="text-sm font-medium text-text-secondary">
                  {company.name}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-text-secondary">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TrustedBySection;
