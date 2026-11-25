import type { NavItem } from "../nav";
import type { ComponentDoc, DocSubVariant } from "../registry/types";

const FIGMA_FILE =
  "https://www.figma.com/design/wEUoBPgPgqLRZ2qBlO7W1C/Element-%E2%80%94%E2%80%94-PacsTrust-Design";

export function buildAiPrompt(
  meta: NavItem,
  doc: ComponentDoc | undefined,
  sub?: DocSubVariant,
): string {
  const title = sub?.label ?? doc?.title ?? meta.name;
  const lines = [
    `# Element — PacsTrust Design · ${title}`,
    "",
    "You implement UI for PacsTrust. Follow these locks:",
    "- Source: Figma Element — PacsTrust Design + repo docs/SPEC-LOCK.md, docs/COMPONENTS.md",
    "- Use Element Plus mapping where documented; use repo React wrappers when present",
    "- Tokens only: CSS variables --el-* and docs/FOUNDATIONS.md (no ad-hoc brand hex)",
    "- Boolean Figma variants: false / true. Danger → danger, Disable → disabled",
    "",
    `## Figma`,
    `- Component page: ${meta.name}`,
    `- nodeId: ${meta.nodeId}`,
    `- URL: ${FIGMA_FILE}?node-id=${meta.nodeId.replace(":", "-")}`,
    "",
  ];

  if (doc?.elementMapping) {
    lines.push(`## Element Plus`, doc.elementMapping, "");
  }
  if (sub?.description ?? doc?.subtitle) {
    lines.push(`## Summary`, sub?.description ?? doc!.subtitle, "");
  }
  if (doc?.variants?.length) {
    lines.push("## Figma variants", ...doc.variants.map((v) => `- ${v}`), "");
  }
  if (sub?.variants?.length) {
    lines.push("## Sub-variant variants", ...sub.variants.map((v) => `- ${v}`), "");
  }
  const props = sub?.props?.length ? sub.props : doc?.props;
  if (props?.length) {
    lines.push(
      "## Props",
      ...props.map(
        (p) =>
          `- ${p.name}: ${p.type}${p.default ? ` (default ${p.default})` : ""} — ${p.description}`,
      ),
      "",
    );
  }
  if (doc?.slots?.length) {
    lines.push(
      "## Slots",
      ...doc.slots.map((s) => `- ${s.name}: ${s.description}`),
      "",
    );
  }
  lines.push(
    "## Task",
    `Implement or refine **${title}** matching Figma variants exactly; do not invent props.`,
  );
  return lines.join("\n");
}
