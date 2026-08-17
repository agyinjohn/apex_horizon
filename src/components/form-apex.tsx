import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/i18n";

export const fieldClass =
  "mt-2 min-h-11 w-full border border-input bg-background px-4 py-3 text-[0.9375rem] text-foreground transition-colors focus:border-primary focus:outline-none";
export const labelClass =
  "text-[0.6875rem] font-semibold tracking-[0.16em] text-navy uppercase";

export function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: ReactNode;
  required?: boolean | undefined;
}) {
  const { pick } = useLang();
  return (
    <label htmlFor={htmlFor} className={labelClass}>
      {children}{" "}
      <span className="font-normal tracking-normal text-muted-foreground normal-case">
        (
        {required
          ? pick({ en: "required", fr: "obligatoire" })
          : pick({ en: "optional", fr: "facultatif" })}
        )
      </span>
    </label>
  );
}

export function TextField({
  name,
  label,
  required,
  type = "text",
  placeholder,
  span,
}: {
  name: string;
  label: string;
  required?: boolean | undefined;
  type?: string | undefined;
  placeholder?: string | undefined;
  span?: boolean | undefined;
}) {
  return (
    <div className={span ? "sm:col-span-2" : undefined}>
      <FieldLabel htmlFor={name} required={required}>
        {label}
      </FieldLabel>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={fieldClass}
        aria-required={required}
      />
    </div>
  );
}

export function SelectField({
  name,
  label,
  options,
  required,
  span,
}: {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  required?: boolean | undefined;
  span?: boolean | undefined;
}) {
  const { pick } = useLang();
  return (
    <div className={span ? "sm:col-span-2" : undefined}>
      <FieldLabel htmlFor={name} required={required}>
        {label}
      </FieldLabel>
      <select id={name} name={name} className={fieldClass} aria-required={required} defaultValue="">
        <option value="">{pick({ en: "Please select", fr: "Veuillez choisir" })}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function TextAreaField({
  name,
  label,
  rows = 5,
  required,
}: {
  name: string;
  label: string;
  rows?: number | undefined;
  required?: boolean | undefined;
}) {
  return (
    <div className="sm:col-span-2">
      <FieldLabel htmlFor={name} required={required}>
        {label}
      </FieldLabel>
      <textarea
        id={name}
        name={name}
        rows={rows}
        className={cn(fieldClass, "min-h-32 resize-y")}
        aria-required={required}
      />
    </div>
  );
}

export function ConsentField({ name = "consent", label }: { name?: string; label: ReactNode }) {
  return (
    <div className="flex items-start gap-3 sm:col-span-2">
      <input
        id={name}
        name={name}
        type="checkbox"
        className="mt-1 size-4 shrink-0 border border-input accent-primary"
      />
      <label htmlFor={name} className="text-[0.8125rem] leading-relaxed text-muted-foreground">
        {label}
      </label>
    </div>
  );
}

export function SubmitButton({ children }: { children: ReactNode }) {
  return (
    <div className="sm:col-span-2">
      <button
        type="submit"
        className="inline-flex min-h-12 items-center gap-2.5 border border-primary bg-primary px-7 py-4 text-[0.75rem] font-semibold tracking-[0.1em] text-primary-foreground uppercase transition-colors hover:border-navy hover:bg-navy"
      >
        {children}
      </button>
    </div>
  );
}

export function FormError({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <p
      role="alert"
      className="border-l-2 border-destructive bg-destructive/5 px-4 py-3 text-[0.8125rem] text-destructive sm:col-span-2"
    >
      {message}
    </p>
  );
}

export function SuccessPanel({ title, body }: { title: string; body: string }) {
  return (
    <div className="border border-primary/40 bg-brand-pale/25 p-8">
      <h2 className="display-3 text-navy">{title}</h2>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
