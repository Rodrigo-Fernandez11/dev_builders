import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "light" | "lightGhost";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const classes =
    variant === "primary"
      ? "inline-flex items-center rounded-md bg-teal-700 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-teal-600"
      : variant === "light"
        ? "inline-flex items-center rounded-md border border-amber-100 bg-amber-50 px-5 py-3 text-sm font-medium text-zinc-900 transition duration-300 hover:-translate-y-0.5 hover:bg-white"
        : variant === "lightGhost"
          ? "inline-flex items-center rounded-md border border-white/60 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
        : "inline-flex items-center rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-800 transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-100";

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
