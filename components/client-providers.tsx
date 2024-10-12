'use client'

import { Provider as JotaiProvider } from 'jotai'
import { TooltipProvider } from './ui/tooltip'

export const ClientProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <JotaiProvider>
      <TooltipProvider delayDuration={0}>
        {children}
      </TooltipProvider>
    </JotaiProvider>
  )
}
