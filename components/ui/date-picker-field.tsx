"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils/cn";
import {
  formatDateVi,
  formatMonthYearVi,
  getCalendarDays,
  isBeforeDay,
  isSameDay,
  parseISODate,
  startOfDay,
  toISODate,
} from "@/lib/utils/date";

type DatePickerFieldProps = {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  minDate?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
};

const WEEKDAY_LABELS = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"] as const;

const triggerClassName =
  "flex w-full items-center justify-between gap-3 rounded-2xl border border-viepsy-hairline bg-viepsy-canvas px-4 py-3 text-left text-body-sm text-viepsy-ink outline-none transition-[border-color,box-shadow] focus:border-viepsy-accent-sage focus:ring-2 focus:ring-viepsy-accent-sage/20";

function CalendarIcon() {
  return (
    <svg
      className="size-4 shrink-0 text-viepsy-accent-sage"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
    </svg>
  );
}

export function DatePickerField({
  id,
  value,
  onChange,
  minDate,
  placeholder = "Chọn ngày",
  className,
  disabled = false,
}: DatePickerFieldProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const panelId = `${fieldId}-panel`;
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const selectedDate = parseISODate(value);
  const minDay = useMemo(
    () => startOfDay(parseISODate(minDate ?? "") ?? new Date()),
    [minDate],
  );
  const today = useMemo(() => startOfDay(new Date()), []);

  const [viewDate, setViewDate] = useState(() => selectedDate ?? minDay);

  useEffect(() => {
    if (selectedDate) {
      setViewDate(selectedDate);
      return;
    }
    setViewDate(minDay);
  }, [value, selectedDate, minDay]);

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

  const calendarDays = getCalendarDays(viewDate.getFullYear(), viewDate.getMonth());

  const handleSelect = (date: Date) => {
    if (isBeforeDay(date, minDay)) return;
    onChange(toISODate(date));
    setOpen(false);
  };

  const shiftMonth = (delta: number) => {
    setViewDate((current) => {
      const next = new Date(current);
      next.setMonth(current.getMonth() + delta, 1);
      return next;
    });
  };

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        id={fieldId}
        type="button"
        disabled={disabled}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={panelId}
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
            selectedDate ? "text-viepsy-ink" : "text-viepsy-ink/45",
          )}
        >
          {formatDateVi(value, placeholder)}
        </span>
        <CalendarIcon />
      </button>

      {open ? (
        <div
          id={panelId}
          role="dialog"
          aria-label="Chọn ngày"
          className="absolute z-50 mt-2 w-full min-w-[18rem] rounded-[1.25rem] border border-viepsy-hairline bg-viepsy-canvas p-4 shadow-[0_16px_40px_rgba(44,36,25,0.12)]"
        >
          <div className="mb-4 flex items-center justify-between gap-2">
            <button
              type="button"
              aria-label="Tháng trước"
              onClick={() => shiftMonth(-1)}
              className="flex size-9 items-center justify-center rounded-full border border-viepsy-hairline text-viepsy-ink transition-colors hover:bg-viepsy-surface-soft"
            >
              <svg
                className="size-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                aria-hidden
              >
                <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <p className="text-body-sm font-[480]">{formatMonthYearVi(viewDate)}</p>

            <button
              type="button"
              aria-label="Tháng sau"
              onClick={() => shiftMonth(1)}
              className="flex size-9 items-center justify-center rounded-full border border-viepsy-hairline text-viepsy-ink transition-colors hover:bg-viepsy-surface-soft"
            >
              <svg
                className="size-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                aria-hidden
              >
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="mb-2 grid grid-cols-7 gap-1">
            {WEEKDAY_LABELS.map((label) => (
              <span
                key={label}
                className="py-1 text-center font-mono text-[0.6875rem] uppercase tracking-wider text-viepsy-ink/45"
              >
                {label}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((day) => {
              const inMonth = day.getMonth() === viewDate.getMonth();
              const disabledDay = isBeforeDay(day, minDay);
              const selected = selectedDate ? isSameDay(day, selectedDate) : false;
              const isToday = isSameDay(day, today);

              return (
                <button
                  key={toISODate(day)}
                  type="button"
                  disabled={disabledDay}
                  onClick={() => handleSelect(day)}
                  className={cn(
                    "flex size-9 items-center justify-center rounded-full text-body-sm transition-colors",
                    !inMonth && "text-viepsy-ink/25",
                    inMonth && !selected && !disabledDay && "text-viepsy-ink hover:bg-viepsy-surface-soft",
                    disabledDay && "cursor-not-allowed text-viepsy-ink/20",
                    selected &&
                      "bg-viepsy-accent-sage font-[480] text-viepsy-inverse-ink hover:bg-viepsy-accent-sage/90",
                    isToday &&
                      !selected &&
                      "ring-1 ring-viepsy-accent-sage/50 ring-offset-1 ring-offset-viepsy-canvas",
                  )}
                >
                  {day.getDate()}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
