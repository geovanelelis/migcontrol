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
  text-xs
  gap-2
  rounded-2xl
  cursor-pointer
  select-none
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-offset-2
  active:scale-[0.96]
  transition-all
  duration-300
  ease-in-out
  relative
  overflow-hidden
  `,
  {
    variants: {
      variant: {
        primary:
          'bg-primary-2 text-neutral-0 hover:bg-primary-3 ring-primary-1 shadow-md hover:shadow-lg hover:shadow-primary-2/30',
        primaryOutline:
          'border border-primary-2 text-primary-2 hover:bg-primary-2 hover:text-neutral-0 ring-primary-1 transition-colors',
        primaryGhost: 'text-primary-3 hover:bg-primary-0/40 ring-primary-1',
        primarySoft:
          'border border-primary-1/40 bg-primary-2/10 text-primary-1 hover:bg-primary-2/20 ring-primary-1 backdrop-blur-sm',

        cta: 'bg-orange-1 text-neutral-0 hover:bg-orange-2 ring-orange-0 shadow-md hover:shadow-lg hover:shadow-orange-1/40',
        ctaOutline:
          'border border-orange-1 text-orange-1 hover:bg-orange-1 hover:text-neutral-0 ring-orange-0 transition-colors',
        ctaGhost: 'text-orange-2 hover:bg-orange-0/50 ring-orange-0',
        ctaSoft:
          'border border-orange-1/40 bg-orange-1/10 text-orange-1 hover:bg-orange-1/20 ring-orange-0 backdrop-blur-sm',

        neutral:
          'bg-neutral-90 text-neutral-0 hover:bg-neutral-80 ring-neutral-40 shadow-md hover:shadow-lg',
        neutralOutline:
          'border border-neutral-80 text-neutral-80 hover:bg-neutral-90 hover:text-neutral-0 ring-neutral-30 transition-colors',
        neutralGhost: 'text-neutral-80 hover:bg-neutral-10 ring-neutral-30',
        neutralSoft:
          'border border-neutral-40/30 bg-neutral-80/10 text-neutral-80 hover:bg-neutral-80/20 ring-neutral-30 backdrop-blur-sm',

        white:
          'bg-neutral-0 text-neutral-90 hover:bg-neutral-10 ring-neutral-20 shadow-md hover:shadow-lg hover:shadow-neutral-0/30',
        whiteOutline:
          'border border-neutral-0/70 text-neutral-0 hover:bg-neutral-0 hover:text-neutral-90 ring-neutral-20 transition-colors',
        whiteGhost: 'text-neutral-0 hover:bg-neutral-0/15 ring-neutral-20',
        whiteSoft:
          'border border-neutral-0/30 bg-neutral-0/10 text-neutral-0 hover:bg-neutral-0/20 ring-neutral-20 backdrop-blur-sm',
      },

      size: {
        sm: 'h-9 px-4 font-medium tracking-widest',
        md: 'h-11 px-6 md:text-sm font-semibold tracking-wide',
        lg: 'h-13 px-8 md:text-base font-semibold tracking-wide',
      },

      disabled: {
        true: 'bg-neutral-10 hover:bg-neutral-10 text-neutral-40 hover:text-neutral-40 cursor-not-allowed pointer-events-none shadow-none',
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
