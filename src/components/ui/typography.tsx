import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface TypographyProps
  extends HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

export function H1({ children, className, ...props }: TypographyProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-heading font-bold tracking-tight lg:text-5xl",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className, ...props }: TypographyProps) {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-3xl font-heading font-semibold tracking-tight lg:text-4xl",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className, ...props }: TypographyProps) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-heading font-semibold tracking-tight lg:text-3xl",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function Paragraph({ children, className, ...props }: TypographyProps) {
  return (
    <p
      className={cn(
        "leading-7 font-body text-[gray] [&:not(:first-child)]:mt-6",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function Large({ children, className, ...props }: TypographyProps) {
  return (
    <p className={cn("text-lg font-body font-semibold", className)} {...props}>
      {children}
    </p>
  );
}

export function Small({ children, className, ...props }: TypographyProps) {
  return (
    <p className={cn("text-sm font-body leading-none", className)} {...props}>
      {children}
    </p>
  );
}
