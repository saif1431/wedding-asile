import { Check } from "lucide-react";

export function AvailabilityBadge({ date, available = true }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${
        available
          ? "bg-green-50 text-green-700 border border-green-200"
          : "bg-red-50 text-red-700 border border-red-200"
      }`}
    >
      <Check className="w-4 h-4" />
      {available ? `Available to book for ${date}` : `Not available on ${date}`}
    </div>
  );
}