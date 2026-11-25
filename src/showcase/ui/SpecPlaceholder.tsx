export function SpecPlaceholder({
  name,
  nodeId,
  variants,
  note,
}: {
  name: string;
  nodeId: string;
  variants?: string[];
  note?: string;
}) {
  return (
    <div className="w-full">
      <p className="text-center text-sm text-[color:var(--ds-text-secondary)]">
        {note ??
          `「${name}」规范预览占位。请在 Figma Dev Mode（node ${nodeId}）对照 Component Set。`}
      </p>
      {variants?.length ? (
        <ul className="mx-auto mt-4 max-w-lg list-disc space-y-1 pl-5 text-sm text-[color:var(--ds-text-regular)]">
          {variants.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
