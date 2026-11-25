import { cn } from "@/lib/cn";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import { useMemo } from "react";
import "./showcase-code.css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("xml", xml);

/** highlight.js 无独立 vue 语法时用 xml 高亮 SFC */
function detectHighlightLanguage(code: string): string {
  if (/<script[\s>]/.test(code) && /<template[\s>]/.test(code)) return "xml";
  if (/^<\!--/.test(code.trim()) || /^<\w/.test(code.trim())) return "xml";
  if (code.includes("import ")) return "typescript";
  return "xml";
}

export function ShowcaseCodeBlock({
  code,
  className,
}: {
  code: string;
  className?: string;
}) {
  const html = useMemo(() => {
    const lang = detectHighlightLanguage(code);
    try {
      return hljs.highlight(code, { language: lang, ignoreIllegals: true }).value;
    } catch {
      return hljs.highlightAuto(code, ["xml", "typescript", "javascript"]).value;
    }
  }, [code]);

  return (
    <pre className={cn("showcase-code-block", className)}>
      <code className="hljs" dangerouslySetInnerHTML={{ __html: html }} />
    </pre>
  );
}
