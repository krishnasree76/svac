import logoAsset from "@/assets/sv-logo.png.asset.json";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <div className="flex items-center gap-3">
      <img src={logoAsset.url} alt="S.V. AC Solutions" className={className} />
    </div>
  );
}
