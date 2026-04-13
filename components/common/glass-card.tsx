'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

interface GlassCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className, hover = true, glow = false, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          'relative rounded-xl',
          'bg-white/[0.02] border border-white/[0.08]',
          'backdrop-blur-xl',
          glow && 'shadow-[0_0_24px_rgba(34,211,238,0.08)]',
          className
        )}
        whileHover={
          hover
            ? {
                scale: 1.002,
                borderColor: 'rgba(34,211,238,0.25)',
                boxShadow: '0 0 24px rgba(34,211,238,0.15)',
              }
            : undefined
        }
        transition={{ duration: 0.2 }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

GlassCard.displayName = 'GlassCard'

export { GlassCard }
