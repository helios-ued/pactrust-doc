import figmaSource from "../../../figma-source.json";

/** Figma Dev Mode 深链（nodeId 形如 8770:65333） */
export function figmaDevUrl(nodeId: string): string {
  const dashed = nodeId.replace(":", "-");
  return `${figmaSource.url}?node-id=${dashed}&m=dev`;
}
