import React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

export const badgeVariants = cva(
  'border-0 inline-flex items-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 focus:outline-none select-none cursor-default',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-2 text-neutral-0 hover:bg-primary-3 shadow-md hover:shadow-lg hover:shadow-primary-2/30',
        primaryGhost:
          'bg-primary-2/10 text-primary-2 hover:bg-primary-2/20 backdrop-blur-sm transition-colors',
        secondary: 'bg-primary-0/70 text-primary-3 shadow-sm hover:shadow-md',
        neutral: 'bg-neutral-90 text-neutral-0 hover:bg-neutral-80 shadow-md hover:shadow-lg',
        neutralGhost:
          'bg-neutral-80/8 text-neutral-70 hover:bg-neutral-80/15 backdrop-blur-sm transition-colors',
        orange:
          'bg-orange-1 text-neutral-0 hover:bg-orange-2 shadow-md hover:shadow-lg hover:shadow-orange-1/40',
        orangeGhost:
          'bg-orange-1/10 text-orange-1 hover:bg-orange-1/20 backdrop-blur-sm transition-colors',
        white: 'bg-neutral-0 text-neutral-90 hover:bg-neutral-10 shadow-md hover:shadow-lg',
        whiteGhost:
          'bg-neutral-0/10 text-neutral-0 hover:bg-neutral-0/20 backdrop-blur-sm transition-colors',
      },
      size: {
        sm: 'px-3 py-1 text-[11px] font-medium',
        md: 'px-4 py-1.5 text-xs font-semibold',
        lg: 'px-5 py-2 text-sm font-semibold',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

export const Badge = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & {
    variant?:
      | 'primary'
      | 'neutral'
      | 'orange'
      | 'white'
      | 'secondary'
      | 'primaryGhost'
      | 'neutralGhost'
      | 'orangeGhost'
      | 'whiteGhost'
    size?: 'sm' | 'md' | 'lg'
  }
>(({ className, variant, size, ...props }, ref) => (
  <span ref={ref} className={cn(badgeVariants({ variant, size }), className)} {...props} />
))
Badge.displayName = 'Badge'
