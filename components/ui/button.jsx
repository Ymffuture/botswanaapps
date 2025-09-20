import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Tailwind colors with custom overrides
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Primary maroon button with white text
        default:
          "bg-[#800000] text-white hover:bg-[#660000] focus-visible:ring-[#800000]",

        // Destructive = red tone
        destructive:
          "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600",

        // Outline = border maroon + transparent background
        outline:
          "border border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white",

        // Secondary = dark gray (#202124)
        secondary:
          "bg-[#202124] text-white hover:bg-[#2a2d31] focus-visible:ring-[#202124]",

        // Ghost = transparent with hover maroon bg
        ghost:
          "bg-transparent text-[#800000] hover:bg-[#800000]/10 hover:text-[#800000]",

        // Link style
        link: "text-[#800000] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

