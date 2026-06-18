"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 -left-40 w-96 h-96 bg-dark-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-container relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <Badge variant="primary" size="md" className="backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-accent-400 mr-2"></span>
              Introducing Agentiq Lab
            </Badge>
          </div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text leading-tight"
          >
            Automate Everything.
            <br />
            Accelerate Growth.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8"
          >
            Build powerful AI-driven workflows without code. Reduce manual work
            by 80%, scale your operations, and stay ahead of competition.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button variant="primary" size="lg" className="group">
              Get Started Free
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Play size={20} />
              Watch Demo
            </Button>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 max-w-xl mx-auto text-center"
          >
            {[
              { number: "10K+", label: "Active Users" },
              { number: "1M+", label: "Workflows Run" },
              { number: "99.9%", label: "Uptime" },
            ].map((metric, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-accent-400 mb-1">
                  {metric.number}
                </div>
                <div className="text-sm text-text-secondary">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Product Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 md:mt-24"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-dark-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden border border-accent-500/20 group-hover:border-accent-500/50 transition-colors duration-500">
              <div className="aspect-video bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-16 h-16 rounded-full bg-accent-500/30 flex items-center justify-center cursor-pointer"
                >
                  <Play size={32} className="text-accent-400 ml-1" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
