'use client'

import React from 'react'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning'
  size?: 'sm' | 'md'
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = '', variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center rounded-full font-medium'

    const variants = {
      primary: 'bg-accent-500/20 text-accent-300 border border-accent-500/30',
      secondary: 'bg-neutral-800/50 text-text-secondary border border-neutral-700/50',
      success: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
      warning: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
    }

    const sizes = {
      sm: 'px-2.5 py-1 text-xs',
      md: 'px-3 py-1.5 text-sm',
    }

    return (
      <span
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    )
  }
)

Badge.displayName = 'Badge'

export default Badge
