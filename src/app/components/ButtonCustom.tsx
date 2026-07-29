import { Button, ButtonProps as HeadlessButtonProps } from "@headlessui/react";
import { ReactNode } from "react";
import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
interface ButtonCustomProps extends HeadlessButtonProps {
  children?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export default function ButtonCustom({
  children,
  leftIcon,
  rightIcon,

  className,
  type = "button",
  ...props
}: ButtonCustomProps) {
  return (
    <Button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-4 py-2 rounded transition-all cursor-pointer bg-cta hover:bg-cta-hover text-cta-text font-bold ",

        typeof className === "string" ? className : "",
      )}
      {...props}
    >
      {leftIcon}
      {children && <span>{children}</span>}
      {rightIcon}
    </Button>
  );
}
