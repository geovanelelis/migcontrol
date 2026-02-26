import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' as const },
  }),
}

interface CardProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  | 'onDrag'
  | 'onDragStart'
  | 'onDragEnd'
  | 'onAnimationStart'
  | 'onAnimationEnd'
  | 'onAnimationIteration'
  | 'onTransitionStart'
  | 'onTransitionEnd'
> {
  index?: number
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, index = 0, ...props }, ref) => (
    <motion.div
      ref={ref}
      data-slot="card"
      role="article"
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={cardVariant}
      className={cn(
        'group flex flex-col gap-6 rounded-3xl overflow-hidden',
        'bg-neutral-0 text-neutral-90',
        'shadow-xs border border-neutral-10',
        'hover:shadow-lg hover:-translate-y-2',
        'transition-all duration-400',
        className,
      )}
      {...props}
    />
  ),
)
Card.displayName = 'Card'

export const CardImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, src, alt = '', ...props }, ref) => (
  <div className="bg-neutral-20 flex items-center justify-center overflow-hidden relative">
    {src ? (
      <img
        ref={ref}
        data-slot="cardImage"
        src={src}
        alt={alt}
        className={cn('h-full w-full object-cover', className)}
        {...props}
      />
    ) : null}
  </div>
))
CardImage.displayName = 'CardImage'

export const CardIconArea = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div className="h-52 bg-primary-2/20 flex items-center justify-center overflow-hidden relative">
      <div
        ref={ref}
        data-slot="cardIconArea"
        className={cn(
          'relative w-20 h-20 rounded-2xl bg-neutral-0/80 backdrop-blur-sm',
          'flex items-center justify-center shadow-lg',
          'group-hover:scale-105 transition-transform duration-500',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  ),
)
CardIconArea.displayName = 'CardIconArea'

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="cardHeader"
      className={cn('flex flex-col gap-3 px-7 lg:px-9', className)}
      {...props}
    />
  ),
)
CardHeader.displayName = 'CardHeader'

export const CardTag = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      data-slot="cardTag"
      className={cn(
        'inline-block text-xs font-semibold uppercase tracking-widest text-primary-1',
        className,
      )}
      {...props}
    />
  ),
)
CardTag.displayName = 'CardTag'

export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    data-slot="cardTitle"
    className={cn(
      'text-1xl lg:text-2xl font-bold text-neutral-80 leading-tight tracking-tight',
      className,
    )}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="cardDescription"
    className={cn('text-base text-neutral-60 leading-relaxed my-1', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="cardContent"
      className={cn('flex flex-col gap-1 px-7 lg:px-9 text-sm text-neutral-60', className)}
      {...props}
    />
  ),
)
CardContent.displayName = 'CardContent'

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="cardFooter"
      className={cn('flex items-center gap-2 px-7 lg:px-9 pb-6 lg:pb-8', className)}
      {...props}
    />
  ),
)
CardFooter.displayName = 'CardFooter'
