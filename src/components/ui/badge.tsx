import React from 'react'
import { cva } from 'class-variance-authority'

import { cn } from '../../lib/utils'

export const badgeVariants = cva(
  'inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none',
  {
    variants: {
      variant: {
        primary: 'border-0 bg-primary-2 text-neutral-0 hover:bg-primary-3',
        primaryOutline:
          'border border-primary-1/60 bg-primary-3/5 text-primary-1 hover:bg-primary-3/10 ring-primary-0 backdrop-blur-xs',
        secondary: 'border-0 bg-primary-0/50 text-primary-2',
        neutral: 'border-0 bg-neutral-90 text-neutral-0 hover:bg-neutral-80',
        neutralOutline:
          'border border-neutral-100/40 bg-neutral-100/5 text-neutral-100 hover:bg-neutral-100/10 ring-neutral-20 backdrop-blur-xs',
        orange: 'border-0 bg-orange-1 text-neutral-0 hover:bg-orange-2',
        orangeOutline:
          'border border-orange-1/60 bg-orange-2/15 text-orange-1 hover:bg-orange-2/25 ring-orange-0 backdrop-blur-xs',
        white: 'border-0 bg-neutral-0 text-neutral-90 hover:bg-neutral-20',
        whiteOutline:
          'border border-neutral-0/60 bg-neutral-30/15 text-neutral-0 hover:bg-neutral-30/25 ring-neutral-20 backdrop-blur-xs',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-1.5 text-base',
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
      | 'primaryOutline'
      | 'neutralOutline'
      | 'orangeOutline'
      | 'whiteOutline'
    size?: 'sm' | 'md' | 'lg'
  }
>(({ className, variant, size, ...props }, ref) => (
  <span ref={ref} className={cn(badgeVariants({ variant, size }), className)} {...props} />
))
Badge.displayName = 'Badge'
