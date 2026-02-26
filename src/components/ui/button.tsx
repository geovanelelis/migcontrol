import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import type React from 'react'
import { Slot } from '@radix-ui/react-slot'

const buttonVariants = cva(
  `
  inline-flex
  items-center
  justify-center
  font-semibold
  gap-2
  rounded-xl
  cursor-pointer
  focus-visible:outline-none
  focus-visible:ring-3
  hover:shadow-xs
  transition-all
  duration-300
  `,
  {
    variants: {
      variant: {
        primary: 'bg-primary-2 text-neutral-0 hover:bg-primary-3 ring-primary-0',
        primaryOutline:
          'border border-primary-2 text-primary-2 hover:bg-primary-2 hover:text-neutral-0 ring-primary-0',
        primaryGhost: 'text-primary-3 hover:bg-primary-0 ring-primary-0',
        primarySoft:
          'border border-primary-1/60 bg-primary-3/15 text-primary-1 hover:bg-primary-3/25 ring-primary-0 backdrop-blur-xs',
        cta: 'bg-orange-1 text-neutral-0 hover:bg-orange-2 ring-orange-0',
        ctaOutline:
          'border border-orange-1 text-orange-1 hover:bg-orange-1 hover:text-neutral-0 ring-orange-0',
        ctaGhost: 'text-orange-2 hover:bg-orange-0 ring-orange-0',
        ctaSoft:
          'border border-orange-1/60 bg-orange-2/15 text-orange-1 text-shadow-sm hover:bg-orange-2/25 ring-orange-0 backdrop-blur-xs',
        neutral: 'bg-neutral-90 text-neutral-0 hover:bg-neutral-80 ring-neutral-20',
        neutralOutline:
          'border border-neutral-90 text-neutral-90 hover:bg-neutral-90 hover:text-neutral-0 ring-neutral-20',
        neutralGhost: 'text-neutral-90 hover:bg-neutral-20 ring-neutral-20',
        neutralSoft:
          'border border-neutral-100/30 bg-neutral-80/20 text-neutral-100 hover:bg-neutral-80/30 ring-neutral-20 backdrop-blur-xs',
        white: 'bg-neutral-0 text-neutral-90 hover:bg-neutral-20 ring-neutral-20',
        whiteOutline:
          'border border-neutral-0 text-neutral-0 hover:bg-neutral-0 hover:text-neutral-90 ring-neutral-20',
        whiteGhost: 'text-neutral-0 hover:bg-neutral-0 ring-neutral-20',
        whiteSoft:
          'border border-neutral-0/60 bg-neutral-30/15 text-neutral-0 hover:bg-neutral-30/25 ring-neutral-20 backdrop-blur-xs',
      },

      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-5 text-sm',
        lg: 'h-12 px-6 text-base',
      },
      disabled: {
        true: 'bg-neutral-10 hover:bg-neutral-10 text-neutral-40 hover:text-neutral-40 cursor-not-allowed',
      },
    },

    defaultVariants: {
      variant: 'primary',
      size: 'md',
      disabled: false,
    },
  },
)

export type ButtonProps = Omit<React.ComponentProps<'button'>, 'disabled'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    disabled?: boolean
  }

export const Button = ({
  className,
  variant,
  size,
  asChild = false,
  disabled = false,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, disabled }), className)}
      disabled={asChild ? undefined : disabled}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : undefined}
      {...props}
    />
  )
}

Button.displayName = 'Button'
