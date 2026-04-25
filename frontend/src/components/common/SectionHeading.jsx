export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <span className="eyebrow-badge px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-cream/72 sm:text-lg">{description}</p> : null}
    </div>
  );
}
