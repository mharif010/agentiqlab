'use client'

import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'gradient'
  hover?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', variant = 'default', hover = true, ...props }, ref) => {
    const baseStyles = 'rounded-xl overflow-hidden transition-all duration-300'

    const variants = {
      default: 'bg-neutral-900 border border-neutral-800/50',
      glass: 'glass',
      gradient: 'bg-gradient-to-br from-accent-500/10 to-dark-500/10 border border-accent-500/20',
    }

    const hoverStyles = hover ? 'hover:border-accent-500/50 hover:shadow-lg hover:shadow-accent-500/10' : ''

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
        {...props}
      />
    )
  }
)

Card.displayName = 'Card'

export default Card
