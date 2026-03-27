function Toggle({ value, toggle }: { value: boolean; toggle: () => void }) {
  return (
    <div className="flex items-center gap-x-3">
      <label htmlFor="hs-lg-switch" className="relative inline-block h-8 w-15 cursor-pointer">
        <input type="checkbox" id="hs-lg-switch" className="peer sr-only" checked={value} onChange={toggle} />
        <span className="peer-checked:bg-primary-checked absolute inset-0 rounded-lg bg-gray-200 transition-colors duration-200 ease-in-out peer-disabled:pointer-events-none peer-disabled:opacity-50" />
        <span className="absolute inset-s-0.5 top-1/2 size-7 -translate-y-1/2 rounded-md bg-white/90 shadow-sm transition-transform duration-200 ease-in-out peer-checked:translate-x-full" />
      </label>
      <label htmlFor="hs-lg-switch" className="text-muted-foreground-1 text-sm">Photo</label>
    </div>
  );
}

export default Toggle;
