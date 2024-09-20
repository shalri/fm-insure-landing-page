import { cn } from "@/libs/utils";

export default function Button({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <button
      className={cn(
        "z-50 border-2 border-ip-very-light-gray px-[1.6rem] py-2 text-sm uppercase tracking-widest transition-colors duration-300 hover:bg-ip-very-light-gray hover:text-ip-dark-violet",
        className,
      )}
    >
      {label}
    </button>
  );
}
