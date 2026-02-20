import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-text-inverse hover:bg-primary-hover active:bg-primary-hover disabled:bg-primary/35 disabled:text-text-inverse/70",
        destructive: "bg-danger text-text-inverse hover:bg-danger/90",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-text-inverse",
        secondary: "border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-text-inverse",
        ghost: "text-primary hover:bg-primary/10",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-accent text-text-inverse hover:bg-accent-hover shadow-lg",
        heroOutline: "border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-text-inverse",
        success: "bg-accent text-text-inverse hover:bg-accent-hover",
        whatsapp: "bg-accent text-text-inverse hover:bg-accent-hover shadow-lg",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-md px-4 text-sm",
        lg: "h-14 rounded-lg px-8 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
