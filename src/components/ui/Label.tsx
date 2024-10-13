import * as React from "react";
import { cn } from "@/lib/utils";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

const Label = ({ className, children, ...props }: LabelProps) => {
  return (
    <label
      className={cn(
        "flex gap-4 border border-shark-950 rounded-lg items-center p-2",
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
};

export { Label };
