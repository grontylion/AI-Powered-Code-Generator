import { cn } from "@/lib/utils"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"

type Z0IconProps = {
  className?: string
  strokeWidth?: number
  fill?: boolean
  strokeDasharray?: string
  animate?: boolean
}

export function Z0Icon({
  className,
  strokeWidth = 0,
  fill = true,
  strokeDasharray,
  animate = false,
}: Z0IconProps) {
  const controls1 = useAnimation()
  const controls2 = useAnimation()

  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
      opacity: 0.8
    },
    visible: {
      pathLength: 1,
      transition: {
        pathLength: { duration: 1 }
      }
    },
    filled: {
      fill: fill ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0)",
      transition: {
        fill: { delay: 0.2, duration: 0.3 }
      },
      opacity: 1,
    }
  }

  useEffect(() => {
    if (animate && !strokeDasharray) {
      const sequence = async () => {
        await controls1.start("visible")
        await controls2.start("visible")
        await controls1.start("filled")
        await controls2.start("filled")
      }
      sequence()
    }
  }, [controls1, controls2, animate, strokeDasharray])

  const Path = animate && !strokeDasharray ? motion.path : 'path'

  return (
    <svg
      className={cn(className)}
      viewBox='0 0 40 20'
      fill={fill ? 'currentColor' : 'none'}
      stroke='currentColor'
      xmlns='http://www.w3.org/2000/svg'
    >
      <Path
        d='M 1.677 3.036 L 16.858 3.036 L 16.858 6.719 L 7.492 16.083 L 16.858 16.083 L 16.858 19.771 L 1.492 19.771 L 1.492 16.083 L 11.044 6.719 L 1.677 6.719 L 1.677 3.036 Z'
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray}
        {...(animate && !strokeDasharray
          ? {
              variants: icon,
              initial: 'hidden',
              animate: controls1,
            }
          : {})}
      />
      <Path
        d='M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z'
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray}
        {...(animate && !strokeDasharray
          ? {
              variants: icon,
              initial: 'hidden',
              animate: controls2,
            }
          : {})}
      />
    </svg>
  )
}
