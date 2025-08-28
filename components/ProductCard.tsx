import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Props = {
  title: string;
  imgSrc: string;        // e.g. "/evergran.png" in /public
  badge?: string;        // e.g. "Premium Quality"
  weight?: string;       // e.g. "25Kg"
  href?: string;         // e.g. "/products/ever-gran"
};

export default function ProductCard({
  title,
  imgSrc,
  badge = "Premium Quality",
  weight = "25Kg",
  href = "#",
}: Props) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-lg">
      {/* Image area */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-50">
        <Image
          src={imgSrc}
          alt={title}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-contain transition duration-300 group-hover:scale-[1.03]"
          priority={false}
        />

        {/* badge/tag (top-left) */}
        <div className="absolute left-3 top-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/85 px-3 py-1 text-xs font-medium text-emerald-700 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {badge}
          </span>
        </div>

        {/* weight chip (optional) */}
        <div className="absolute right-3 top-3">
          <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-semibold text-white">
            {weight}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>

      {/* CTA */}
      <div className="mt-3">
        <Link
          href={href}
          aria-label={`Learn more about ${title}`}
          className="group/cta inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-50 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          Learn More
          <ChevronRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-0.5" />
        </Link>
      </div>

      {/* subtle gradient hover ring */}
      <div
        className="pointer-events-none absolute inset-px rounded-[14px] opacity-0 transition-opacity group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(16,185,129,.15), rgba(59,130,246,.12))",
        }}
      />
    </div>
  );
}
