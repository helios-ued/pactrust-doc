import { buildVueSfc, epSize } from "../vueSfc";

export type ElInputCodeOptions = {
  state: "Default" | "Hover" | "Focus" | "Error" | "Disabled";
  size: "Default" | "Large" | "Small";
  placeholder: string;
  prefixIcon?: boolean;
  suffixIcon?: boolean;
  range?: boolean;
  hasValue?: boolean;
};

function inputAttrs(options: {
  placeholder: string;
  epSize?: "default" | "large" | "small";
  disabled?: boolean;
  clearable?: boolean;
}): string[] {
  const attrs: string[] = ['v-model="value"'];
  if (options.placeholder) {
    attrs.push(`placeholder="${options.placeholder.replace(/"/g, '\\"')}"`);
  }
  if (options.epSize) attrs.push(`size="${options.epSize}"`);
  if (options.disabled) attrs.push("disabled");
  if (options.clearable) attrs.push("clearable");
  return attrs;
}

function buildInputTemplateBody(options: ElInputCodeOptions): string {
  const {
    size,
    placeholder,
    prefixIcon = false,
    suffixIcon = false,
    range = false,
    state,
  } = options;

  const sizeEp = epSize(size);
  const disabled = state === "Disabled";

  if (range) {
    const ph = placeholder.replace(/"/g, '\\"');
    return [
      '  <el-space alignment="center" :size="8">',
      "    <el-input",
      '      v-model="value"',
      sizeEp ? `      size="${sizeEp}"` : "",
      disabled ? "      disabled" : "",
      `      placeholder="${ph}"`,
      "    />",
      '    <span aria-hidden="true">-</span>',
      "    <el-input",
      '      v-model="valueEnd"',
      sizeEp ? `      size="${sizeEp}"` : "",
      disabled ? "      disabled" : "",
      `      placeholder="${ph}"`,
      "    />",
      "  </el-space>",
    ]
      .filter(Boolean)
      .join("\n");
  }

  const attrs = inputAttrs({
    placeholder,
    epSize: sizeEp,
    disabled,
    clearable: suffixIcon,
  });

  const slots: string[] = [];
  if (prefixIcon) {
    slots.push(
      "    <template #prefix>",
      "      <el-icon><User /></el-icon>",
      "    </template>",
    );
  }
  if (suffixIcon) {
    slots.push(
      "    <template #suffix>",
      "      <el-icon><CircleClose /></el-icon>",
      "    </template>",
    );
  }

  if (slots.length) {
    return [`  <el-input`, ...attrs.map((a) => `    ${a}`), "  >", ...slots, "  </el-input>"].join("\n");
  }

  return [`  <el-input`, ...attrs.map((a) => `    ${a}`), "  />"].join("\n");
}

export function buildElInputCode(options: ElInputCodeOptions): string {
  const {
    state,
    prefixIcon = false,
    suffixIcon = false,
    range = false,
    hasValue = false,
  } = options;

  const needsIcons = (prefixIcon || suffixIcon) && !range;
  const sample = hasValue ? "Element Plus" : "";

  const imports = ["import { ref } from 'vue'"];
  if (needsIcons) imports.push("import { User, CircleClose } from '@element-plus/icons-vue'");

  const body = [`const value = ref('${sample}')`, ...(range ? ["const valueEnd = ref('')"] : [])];

  let template = buildInputTemplateBody(options);

  if (state === "Error") {
    template = [
      '  <el-form label-width="0" @submit.prevent>',
      '    <el-form-item validate-status="error" error="校验失败">',
      ...template.split("\n").map((line) => (line ? `    ${line}` : line)),
      "    </el-form-item>",
      "  </el-form>",
    ].join("\n");
  }

  return buildVueSfc({ imports, body, template });
}

export function buildElPasswordCode(options: { showPassword?: boolean; placeholder?: string }): string {
  const placeholder = options.placeholder ?? "密码";
  const attrs = [
    'v-model="value"',
    `placeholder="${placeholder.replace(/"/g, '\\"')}"`,
    "type=\"password\"",
  ];
  if (options.showPassword !== false) attrs.push("show-password");
  return buildVueSfc({
    imports: ["import { ref } from 'vue'"],
    body: ["const value = ref('')"],
    template: `  <el-input\n    ${attrs.join("\n    ")}\n  />`,
  });
}

export function buildElTextareaCode(options: { placeholder?: string }): string {
  const placeholder = options.placeholder ?? "请输入多行文本";
  return buildVueSfc({
    imports: ["import { ref } from 'vue'"],
    body: ["const value = ref('')"],
    template: `  <el-input
    v-model="value"
    type="textarea"
    placeholder="${placeholder.replace(/"/g, '\\"')}"
  />`,
  });
}

export function buildElMixedInputCode(): string {
  return buildVueSfc({
    imports: ["import { ref } from 'vue'"],
    body: ["const value = ref('')"],
    template: `  <el-input v-model="value" placeholder="example.com">
    <template #prepend>https://</template>
  </el-input>`,
  });
}
