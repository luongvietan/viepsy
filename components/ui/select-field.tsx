"use client";

import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils/cn";

export type SelectOption = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  className?: string;
  disabled?: boolean;
};

const triggerClassName =
  "flex w-full items-center justify-between gap-3 rounded-2xl border border-viepsy-hairline bg-viepsy-canvas px-4 py-3 text-left text-body-sm text-viepsy-ink outline-none transition-[border-color,box-shadow] focus:border-viepsy-accent-sage focus:ring-2 focus:ring-viepsy-accent-sage/20";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={cn(
        "size-4 shrink-0 text-viepsy-ink/55 transition-transform duration-200",
        open && "rotate-180",
      )}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SelectField({
  id,
  value,
  onChange,
  options,
  placeholder = "Chọn một mục",
  className,
  disabled = false,
}: SelectFieldProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const listboxId = `${fieldId}-listbox`;
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const selected = options.find((option) => option.value === value);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const handleSelect = (nextValue: string) => {
    onChange(nextValue);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        id={fieldId}
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        onClick={() => setOpen((current) => !current)}
        className={cn(
          triggerClassName,
          disabled && "cursor-not-allowed opacity-60",
          open && "border-viepsy-accent-sage ring-2 ring-viepsy-accent-sage/20",
        )}
      >
        <span
          className={cn(
            "min-w-0 truncate",
            selected ? "text-viepsy-ink" : "text-viepsy-ink/45",
          )}
        >
          {selected?.label ?? placeholder}
        </span>
        <ChevronIcon open={open} />
      </button>

      {open ? (
        <ul
          id={listboxId}
          role="listbox"
          aria-labelledby={fieldId}
          className="absolute z-50 mt-2 max-h-64 w-full overflow-auto rounded-2xl border border-viepsy-hairline bg-viepsy-canvas p-1.5 shadow-[0_16px_40px_rgba(44,36,25,0.12)]"
        >
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <li key={option.value} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(option.value)}
                  className={cn(
                    "flex w-full rounded-xl px-3 py-2.5 text-left text-body-sm transition-colors",
                    isSelected
                      ? "bg-viepsy-block-mint font-[480] text-viepsy-ink"
                      : "text-viepsy-ink/85 hover:bg-viepsy-surface-soft",
                  )}
                >
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
