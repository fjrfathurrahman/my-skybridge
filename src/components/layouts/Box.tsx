import { cn } from "@/lib/clsx";

export const Box = ({ children, className }: PropsLayout): React.ReactNode => {
  return (
    <div className={cn("", className)}>{children}</div>
  );
};

export interface PropsLayout extends React.HtmlHTMLAttributes<HTMLDivElement> {
  as?: string;
  clssName?: string;
}
