import React from "react";
import { Input } from "./input";

interface CurrencyInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string | number;
  onChange: (value: string) => void;
}

export const CurrencyInput = React.forwardRef<
  HTMLInputElement,
  CurrencyInputProps
>(({ value, onChange, ...props }, ref) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    onChange(value);
  };

  const formattedValue = typeof value === "number" ? value.toString() : value;

  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
        ₹
      </span>
      <Input
        {...props}
        ref={ref}
        type="text"
        value={formattedValue}
        onChange={handleChange}
        className="pl-7"
      />
    </div>
  );
});

CurrencyInput.displayName = "CurrencyInput";