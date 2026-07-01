export default function WritingSection() {
  return (
    <section className="flex flex-col gap-element-gap" id="writing">
      <div className="flex items-center gap-4">
        <div className="w-8 h-[1px] bg-status-red shrink-0"></div>
        <h2 className="font-headline-lg text-headline-lg italic text-primary">
          Writing
        </h2>
      </div>
      <div className="flex flex-col">
        <div className="py-4 border-b border-border-subtle">
          <p className="font-code-md text-code-md text-on-surface-variant italic">
            to be added soon!
          </p>
        </div>
      </div>
    </section>
  );
}
