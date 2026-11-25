/** 生成 Showcase「代码」Tab 用的 Vue 3 SFC 字符串（无多余说明注释） */

export function buildVueSfc(options: {
  /** 粘贴到业务工程前可读说明（HTML 注释，位于 SFC 最前） */
  fileComment?: string[];
  imports?: string[];
  body?: string[];
  template: string;
  scopedStyle?: string[];
}): string {
  const parts: string[] = [];
  if (options.fileComment?.length) {
    parts.push("<!--", ...options.fileComment, "-->", "");
  }
  const script: string[] = ['<script setup lang="ts">'];
  if (options.imports?.length) {
    script.push(...options.imports, "");
  }
  if (options.body?.length) {
    script.push(...options.body);
  }
  script.push("</script>", "");
  parts.push(...script, "<template>", options.template, "</template>", "");
  if (options.scopedStyle?.length) {
    parts.push("<style scoped>", ...options.scopedStyle, "</style>", "");
  }
  return parts.join("\n");
}

export function epSize(size: "Default" | "Large" | "Small"): "default" | "large" | "small" | undefined {
  if (size === "Large") return "large";
  if (size === "Small") return "small";
  return undefined;
}

/** Figma PascalCase → Element Plus 小写 type */
export function epType(type: string): string {
  if (type === "Danger") return "danger";
  if (type === "Default") return "default";
  return type.toLowerCase();
}

export function lit(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}
