import type React from "react";
import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-background hover:bg-primary-hover",
  outline:
    "border border-text-secondary text-text-primary " +
    "hover:border-primary hover:text-primary",
};

const base =
  "inline-flex items-center justify-center gap-2 " +
  "rounded-lg px-5 py-3 font-semibold " +
  "transition-colors duration-300 cursor-pointer " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 " +
  "focus-visible:outline-primary " +
  "disabled:opacity-50 disabled:cursor-not-allowed";

function Button({ variant = "primary", children, ...props }: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
