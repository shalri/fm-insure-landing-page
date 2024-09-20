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
        "border-2 border-ip-very-light-gray px-[1.6rem] py-2 text-sm uppercase tracking-widest",
        className,
      )}
    >
      {label}
    </button>
  );
}
