import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  as?: keyof JSX.IntrinsicElements
}

export default function Section({ children, className, id, as: Tag = 'section' }: SectionProps) {
  return (
    <Tag id={id} className={cn('w-full', className)}>
      {children}
    </Tag>
  )
}
