"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../ui/Section";
import Card from "../ui/Card";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does it take to set up the first workflow?",
      answer:
        "Most users create their first workflow in 15-30 minutes using our visual builder. We also provide templates and guided tours to make it even faster.",
    },
    {
      question: "Do I need to write any code?",
      answer:
        "No, our drag-and-drop builder handles everything. We support 1000+ pre-built integrations, so you rarely need custom code.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we use enterprise-grade security including end-to-end encryption, SOC 2 compliance, and regular security audits. Your data is never stored longer than necessary.",
    },
    {
      question: "Can I integrate with custom APIs?",
      answer:
        "Absolutely. Our webhooks and custom integration tools let you connect to virtually any system or service.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We offer email support on all plans, live chat for Professional and Enterprise, and dedicated account managers for Enterprise customers.",
    },
    {
      question: "Can I try it for free?",
      answer:
        "Yes! All plans come with a 30-day free trial. No credit card required. You get full access to all features.",
    },
  ];

  return (
    <Section id="faq">
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
            Frequently Asked Questions
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            {
              "Have questions? We've got answers. Cannot find what you are looking for?"
            }
            <a
              href="#"
              className="text-accent-400 hover:text-accent-300 transition-colors"
            >
              Contact our support team
            </a>
            .
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card
                variant="default"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="p-6 cursor-pointer group"
              >
                <motion.button
                  className="w-full flex items-center justify-between text-left"
                  whileHover={{ scale: 1.01 }}
                >
                  <span className="text-lg font-semibold group-hover:text-accent-400 transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ChevronDown size={20} className="text-accent-400" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-text-secondary mt-4 pt-4 border-t border-neutral-800/50">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQSection;
