import { cn } from "@/lib/clsx"
import { PropsLayout } from "./Box"

export const Container = ({ children, className }: PropsLayout): React.ReactNode => {
  return (
    <div className={cn('max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[968px] mx-auto px-4 min-h-max', className)}>{children}</div>
  )
}
