import { buildVueSfc, epSize, epType } from "../vueSfc";

export function buildElStubCode(elMapping: string, name: string): string {
  return buildVueSfc({
    template: `  <!-- ${name} · ${elMapping} · 见 Figma / docs/COMPONENTS.md -->`,
  });
}

export function buildElButtonCode(options: {
  type: string;
  size: "Default" | "Large" | "Small";
  plain: boolean;
  disabled: boolean;
  label: string;
  leftIcon?: boolean;
  rightIcon?: boolean;
}): string {
  const size = epSize(options.size);
  const type = epType(options.type);
  const attrs = [`type="${type}"`];
  if (size) attrs.push(`size="${size}"`);
  if (options.plain) attrs.push("plain");
  if (options.disabled) attrs.push("disabled");

  const needsIcons = options.leftIcon || options.rightIcon;
  const imports = needsIcons
    ? ["import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue'"]
    : undefined;

  const label = options.label.replace(/</g, "");
  const inner: string[] = [];
  if (options.leftIcon) inner.push("    <el-icon class=\"el-icon--left\"><ArrowLeft /></el-icon>");
  inner.push(`    ${label}`);
  if (options.rightIcon) inner.push("    <el-icon class=\"el-icon--right\"><ArrowRight /></el-icon>");

  return buildVueSfc({
    imports,
    template: [`  <el-button`, ...attrs.map((a) => `    ${a}`), "  >", ...inner, "  </el-button>"].join("\n"),
  });
}

export function buildElTextButtonCode(options: {
  type: string;
  size: "Default" | "Large" | "Small";
  plain: boolean;
  disabled: boolean;
  label: string;
}): string {
  const size = epSize(options.size);
  const type = epType(options.type);
  const attrs = ["text", `type="${type}"`];
  if (size) attrs.push(`size="${size}"`);
  if (options.plain) attrs.push("plain");
  if (options.disabled) attrs.push("disabled");
  return buildVueSfc({
    template: `  <el-button\n    ${attrs.join("\n    ")}\n  >${options.label.replace(/</g, "")}</el-button>`,
  });
}

export function buildElIconButtonCode(options: { type?: string; plain?: boolean; round?: boolean }): string {
  const type = epType(options.type ?? "Primary");
  const attrs = [`type="${type}"`, "circle"];
  if (options.plain) attrs.push("plain");
  if (options.round) attrs.push("round");
  return buildVueSfc({
    imports: ["import { Search } from '@element-plus/icons-vue'"],
    template: `  <el-button\n    ${attrs.join("\n    ")}\n  >
    <el-icon><Search /></el-icon>
  </el-button>`,
  });
}

export function buildElLinkCode(options: {
  type: string;
  href: string;
  label: string;
  disabled: boolean;
  underline: boolean;
}): string {
  const type = epType(options.type);
  const attrs = [`href="${options.href.replace(/"/g, '\\"')}"`, `type="${type}"`];
  if (options.disabled) attrs.push("disabled");
  if (options.underline) attrs.push("underline");
  return buildVueSfc({
    template: `  <el-link\n    ${attrs.join("\n    ")}\n  >${options.label.replace(/</g, "")}</el-link>`,
  });
}

export function buildElTagCode(options: {
  mode: "Tag" | "Tag Group" | "New Tag" | "Check Tag";
  tagStyle?: string;
  size?: "Default" | "Large" | "Small";
  topic?: "Plain" | "Light" | "Dark";
  closable?: boolean;
  groupNumber?: number;
  groupCustom?: boolean;
  newTagSize?: "Default" | "Large" | "Small";
  checkTagChecked?: boolean;
}): string {
  const size = options.size ? epSize(options.size) : undefined;
  if (options.mode === "Check Tag") {
    return buildVueSfc({
      imports: ["import { ref } from 'vue'"],
      body: [`const checked = ref(${options.checkTagChecked ?? true})`],
      template: `  <el-check-tag v-model:checked="checked">Tag</el-check-tag>`,
    });
  }
  if (options.mode === "New Tag") {
    const newSize = options.newTagSize ? epSize(options.newTagSize) : size;
    const attrs = newSize ? [`size="${newSize}"`] : [];
    return buildVueSfc({
      template: `  <el-tag ${attrs.join(" ")} effect="plain" style="border-style: dashed">+ New Tag</el-tag>`,
    });
  }
  if (options.mode === "Tag Group") {
    if (options.groupCustom) {
      return buildVueSfc({
        template: `  <el-space wrap :size="8">
    <el-tag>Tag</el-tag>
    <el-tag type="success" effect="light">Tag</el-tag>
    <el-tag type="warning" effect="dark">Tag</el-tag>
    <el-tag type="danger" closable>Tag</el-tag>
    <el-tag type="info" effect="light">Tag</el-tag>
  </el-space>`,
      });
    }
    const n = options.groupNumber ?? 3;
    const tags = Array.from({ length: n }, () => `    <el-tag>Tag</el-tag>`).join("\n");
    return buildVueSfc({
      template: `  <el-space wrap :size="8">\n${tags}\n  </el-space>`,
    });
  }
  const type = epType(options.tagStyle ?? "Default");
  const effect =
    options.topic === "Dark" ? "dark" : options.topic === "Light" ? "light" : "plain";
  const attrs = [`type="${type}"`, `effect="${effect}"`];
  if (size) attrs.push(`size="${size}"`);
  if (options.closable) attrs.push("closable");
  return buildVueSfc({
    template: `  <el-tag\n    ${attrs.join("\n    ")}\n  >Tag</el-tag>`,
  });
}

export function buildElBadgeCode(options: { type: string; dot: boolean; value: string }): string {
  const type = epType(options.type);
  const badgeAttrs = options.dot
    ? "is-dot"
    : `:value="${options.value === "999" ? "'999+'" : options.value}"`;
  return buildVueSfc({
    imports: ["import { UserFilled } from '@element-plus/icons-vue'"],
    template: `  <el-badge ${badgeAttrs} type="${type}">
    <el-avatar :size="40">
      <el-icon><UserFilled /></el-icon>
    </el-avatar>
  </el-badge>`,
  });
}

export function buildElAvatarCode(options: {
  mode: "Avatar" | "Avatar Group";
  size?: string;
  shape?: "Circle" | "Square";
  groupCount?: number;
}): string {
  if (options.mode === "Avatar Group") {
    const n = options.groupCount ?? 3;
    const items = Array.from({ length: n }, () => "    <el-avatar :size=\"40\" />").join("\n");
    return buildVueSfc({
      template: `  <el-avatar-group>\n${items}\n  </el-avatar-group>`,
    });
  }
  const size = options.size && options.size !== "Custom" ? `:size="${options.size}"` : ":size=\"40\"";
  const shape = options.shape === "Square" ? 'shape="square"' : "";
  return buildVueSfc({
    imports: ["import { UserFilled } from '@element-plus/icons-vue'"],
    template: `  <el-avatar ${size} ${shape}>
    <el-icon><UserFilled /></el-icon>
  </el-avatar>`,
  });
}

export function buildElCardCode(options: {
  cardType: string;
  headerType?: string;
  bodyType?: string;
  footerType?: string;
}): string {
  if (options.cardType === "Only Body") {
    return buildVueSfc({
      template: `  <el-card>
    <p>${options.bodyType === "Image" ? "图片内容区" : "Card body content"}</p>
  </el-card>`,
    });
  }
  const header = `    <template #header>
      <span>Card header${options.headerType === "More" ? " · More" : ""}</span>
    </template>`;
  const footer =
    options.cardType === "Header+Footer"
      ? `    <template #footer>
      <span>Footer${options.footerType === "More" ? " · More" : ""}</span>
    </template>`
      : "";
  return buildVueSfc({
    template: `  <el-card>
${header}
    <p>Card body</p>
${footer}
  </el-card>`,
  });
}

export function buildElSegmentedCode(options: {
  custom: boolean;
  number: number;
  disabled: boolean;
  disableSecond: boolean;
}): string {
  const count = options.custom ? 12 : options.number;
  const opts = Array.from({ length: count }, (_, i) => {
    const n = i + 1;
    const dis = options.disableSecond && n === 2 ? ", disabled: true" : "";
    return `  { label: 'Button', value: '${n}'${dis} }`;
  }).join(",\n");
  const disabled = options.disabled ? "\n    disabled" : "";
  return buildVueSfc({
    imports: ["import { ref } from 'vue'"],
    body: ["const value = ref('1')"],
    template: `  <el-segmented v-model="value" :options="[\n${opts}\n  ]"${disabled} />`,
  });
}

export function buildElPaginationCode(options: {
  layoutType: "lt5" | "gt5" | "omitted" | "inputGoTo";
  paginationStyle: "Default" | "Background" | "Border";
  size: "Default" | "Small";
  showTotal: boolean;
  showPageSize: boolean;
  showGoTo: boolean;
  disabled: boolean;
}): string {
  const size = epSize(options.size);
  const attrs: string[] = [`:total="990"`, `:page-size="100"`, `:current-page="1"`];
  if (size) attrs.push(`size="${size}"`);
  if (options.disabled) attrs.push(":disabled=\"true\"");
  if (options.paginationStyle === "Background") attrs.push('background');
  if (options.paginationStyle === "Border") attrs.push('border');
  if (options.showTotal) attrs.push(':layout="\'total, prev, pager, next\'"');
  else attrs.push(':layout="\'prev, pager, next\'"');
  if (options.showPageSize) {
    attrs.push(':page-sizes="[50, 100, 200]"');
    attrs[attrs.length - 1] = ':layout="\'total, sizes, prev, pager, next\'"';
  }
  if (options.showGoTo || options.layoutType === "inputGoTo") {
    attrs.push(':layout="\'prev, pager, next, jumper\'"');
    if (options.showTotal) attrs.push(':layout="\'total, prev, pager, next, jumper\'"');
    if (options.showPageSize) attrs.push(':layout="\'total, sizes, prev, pager, next, jumper\'"');
  }
  if (options.layoutType === "inputGoTo") {
    attrs.push(':layout="\'prev, next, jumper\'"');
  }
  return buildVueSfc({
    imports: ["import { ref } from 'vue'"],
    body: ["const currentPage = ref(1)"],
    template: `  <el-pagination
    v-model:current-page="currentPage"
    ${attrs.join("\n    ")}
  />`,
  });
}

export function buildElDropdownCode(options: {
  triggerType: "Text" | "Button" | "Split button";
  placement: "Top" | "Bottom";
  previewOption: boolean;
  optionType: "Default" | "Selected" | "Multiple Choice";
  optionState: "Default" | "Hover" | "Disable";
  description: boolean;
  showIcon: boolean;
}): string {
  void options.optionType;
  void options.optionState;
  void options.description;
  void options.showIcon;
  void options.placement;
  const items = `    <el-dropdown-item>Action 1</el-dropdown-item>
    <el-dropdown-item>Action 2</el-dropdown-item>
    <el-dropdown-item>Action 3</el-dropdown-item>
    <el-dropdown-item>Action 4</el-dropdown-item>`;
  if (options.previewOption) {
    return buildVueSfc({
      template: `  <el-dropdown-menu>
    <el-dropdown-item>Option text</el-dropdown-item>
  </el-dropdown-menu>`,
    });
  }
  if (options.triggerType === "Split button") {
    return buildVueSfc({
      template: `  <el-dropdown split-button type="primary">
    Button
    <template #dropdown>
      <el-dropdown-menu>
${items}
      </el-dropdown-menu>
    </template>
  </el-dropdown>`,
    });
  }
  if (options.triggerType === "Button") {
    return buildVueSfc({
      imports: ["import { ArrowDown } from '@element-plus/icons-vue'"],
      template: `  <el-dropdown>
    <el-button type="primary">
      Button<el-icon class="el-icon--right"><ArrowDown /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
${items}
      </el-dropdown-menu>
    </template>
  </el-dropdown>`,
    });
  }
  return buildVueSfc({
    imports: ["import { ArrowDown } from '@element-plus/icons-vue'"],
    template: `  <el-dropdown>
    <span class="el-dropdown-link">
      Dropdown List
      <el-icon class="el-icon--right"><ArrowDown /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
${items}
      </el-dropdown-menu>
    </template>
  </el-dropdown>`,
  });
}

export function buildElBreadcrumbCode(options: {
  custom: boolean;
  number: 2 | 3 | 4;
  previewItem: boolean;
  itemState: "Default" | "Hover" | "Not current page";
}): string {
  void options.itemState;
  if (options.previewItem) {
    return buildVueSfc({
      template: `  <el-breadcrumb>
    <el-breadcrumb-item>homepage</el-breadcrumb-item>
  </el-breadcrumb>`,
    });
  }
  if (options.custom) {
    return buildVueSfc({
      template: `  <el-breadcrumb>
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/promotion' }">promotion management</el-breadcrumb-item>
    <el-breadcrumb-item>...</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/list' }">promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>`,
    });
  }
  const labels = {
    2: ["homepage", "promotion management"],
    3: ["homepage", "promotion management", "promotion list"],
    4: ["homepage", "promotion management", "promotion list", "promotion detail"],
  }[options.number];
  const lines = labels.map((label, i) => {
    const last = i === labels.length - 1;
    if (last) return `    <el-breadcrumb-item>${label}</el-breadcrumb-item>`;
    return `    <el-breadcrumb-item :to="{ path: '/' }">${label}</el-breadcrumb-item>`;
  });
  return buildVueSfc({
    template: `  <el-breadcrumb>
${lines.join("\n")}
  </el-breadcrumb>`,
  });
}

export function buildElStepsCode(options: {
  previewLine: boolean;
  direction: "Horizontal" | "Vertical";
  stepType: "Default" | "State";
  alignCenter: boolean;
  active: number;
  lineStatus: "Wait" | "Process" | "Success" | "Error";
  lastStep: boolean;
  errorStep: boolean;
}): string {
  if (options.previewLine) {
    return buildVueSfc({
      template: `  <!-- Steps Line · Type ${options.stepType} · Status ${options.lineStatus} -->`,
    });
  }
  const dir = options.direction === "Vertical" ? "vertical" : "horizontal";
  const finish = options.errorStep ? "error" : "success";
  return buildVueSfc({
    template: `  <el-steps direction="${dir}" :active="${options.active}" finish-status="${finish}"${options.stepType === "State" ? ' simple' : ""}>
    <el-step title="Step text" description="Some description" />
    <el-step title="Step text" description="Some description" />
    <el-step title="Step text" description="Some description" />
    <el-step title="Step text" description="Some description" />
  </el-steps>`,
  });
}

export function buildElTabsCode(options: {
  previewItem: boolean;
  tabType: "Default" | "Card" | "Border-card";
  position: "Top" | "Left" | "Right";
  align: "Left" | "Center" | "Right";
  active: number;
  itemState: "Default" | "Hover" | "Selected";
  itemLayout: "Default" | "Left" | "Center" | "Right";
}): string {
  if (options.previewItem) {
    return buildVueSfc({
      template: `  <!-- Tabs/item · State ${options.itemState} · Layout ${options.itemLayout} · Type ${options.tabType} -->`,
    });
  }
  const typeAttr =
    options.tabType === "Card"
      ? ' type="card"'
      : options.tabType === "Border-card"
        ? ' type="border-card"'
        : "";
  const tabPosition =
    options.position === "Left" ? ' tab-position="left"' : options.position === "Right" ? ' tab-position="right"' : "";
  const stretch =
    options.tabType === "Default" && options.position === "Top" && options.align !== "Left"
      ? ` :stretch="${options.align === "Center" ? "true" : "false"}"`
      : "";
  return buildVueSfc({
    template: `  <el-tabs v-model="activeName"${typeAttr}${tabPosition}${stretch}>
    <el-tab-pane label="User" name="user" />
    <el-tab-pane label="Config" name="config" />
    <el-tab-pane label="Role" name="role" />
    <el-tab-pane label="Task" name="task" />
  </el-tabs>`,
  });
}

export function buildElPageHeaderCode(options: {
  optionType: "Option" | "Radio";
  backButton: boolean;
  crumbs: boolean;
  tag: boolean;
  showOption: boolean;
}): string {
  const icon = options.backButton ? ' icon="Back"' : "";
  const breadcrumb = options.crumbs
    ? `
    <template #breadcrumb>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/nav' }">Navigation</el-breadcrumb-item>
        <el-breadcrumb-item>Page Header</el-breadcrumb-item>
      </el-breadcrumb>
    </template>`
    : "";
  const content = options.tag
    ? `
    <span class="text-sm text-[var(--el-text-color-secondary)]">This is a description</span>
    <el-tag size="small" type="primary" effect="light">Tag</el-tag>`
    : `
    <span class="text-sm text-[var(--el-text-color-secondary)]">This is a description</span>`;
  const extra =
    options.showOption && options.optionType === "Option"
      ? `
    <template #extra>
      <el-button>Button</el-button>
      <el-button>Button</el-button>
      <el-button type="primary">Button</el-button>
    </template>`
      : options.showOption && options.optionType === "Radio"
        ? `
    <template #extra>
      <el-radio-group>
        <el-radio-button value="1">Button</el-radio-button>
        <el-radio-button value="2">Button</el-radio-button>
        <el-radio-button value="3">Button</el-radio-button>
      </el-radio-group>
    </template>`
        : "";

  return buildVueSfc({
    template: `  <el-page-header${icon} @back="() => {}">
    <template #content>
      <div class="flex items-center gap-3">
        <span class="text-xl font-bold">UI Design</span>${content}
      </div>
    </template>${breadcrumb}${extra}
  </el-page-header>`,
  });
}

export function buildElMenuCode(options: {
  demoType: "Sidebar" | "Top" | "Global-header";
  menuSize: "Large" | "Default" | "Small";
  previewItem: boolean;
  level: 1 | 2 | 3;
  itemState: "Default" | "Hover" | "Selected" | "Disable";
  unfold: boolean;
  childIcon: boolean;
  showIcon: boolean;
  onlyIcon: boolean;
  sidebarUnfolded: boolean;
  sidebarStyle?: "01" | "02" | "03" | "04";
  headerType: "Default" | "Large" | "Small";
  headerLogo: boolean;
  headerFold: boolean;
  headerCrumbs: boolean;
  headerMenu: boolean;
  headerFlush: boolean;
}): string {
  void options.itemState;
  void options.unfold;
  void options.childIcon;
  void options.showIcon;
  void options.onlyIcon;
  void options.level;
  void options.sidebarUnfolded;
  void options.headerType;
  void options.headerLogo;
  void options.headerFold;
  void options.headerCrumbs;
  void options.headerMenu;
  void options.headerFlush;
  if (options.demoType === "Global-header") {
    const h = options.headerType === "Large" ? 64 : options.headerType === "Small" ? 48 : 56;
    return buildVueSfc({
      template: `  <el-container>
    <el-header :height="${h}">
      <!-- Global-header · Logo / Fold / 安全中心 / 工具栏 -->
    </el-header>
    <el-container>
      <el-aside width="200px"><el-menu /></el-aside>
      <el-main />
    </el-container>
  </el-container>`,
    });
  }
  if (options.previewItem) {
    const label = options.level === 1 ? "Navigator One" : "item one";
    return buildVueSfc({
      template: `  <el-menu${options.demoType === "Top" ? ' mode="horizontal"' : ""} default-active="1">
    <el-menu-item index="1">${label}</el-menu-item>
  </el-menu>`,
    });
  }
  if (options.demoType === "Top") {
    return buildVueSfc({
      template: `  <el-menu mode="horizontal" default-active="2">
    <el-menu-item index="1">Navigator One</el-menu-item>
    <el-menu-item index="2">Navigator One</el-menu-item>
    <el-menu-item index="3">Navigator One</el-menu-item>
    <el-menu-item index="4">Navigator One</el-menu-item>
  </el-menu>`,
    });
  }
  const collapse = options.sidebarUnfolded ? "" : "\n    collapse";
  return buildVueSfc({
    template: `  <el-menu default-active="1-1"${collapse}>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><Menu /></el-icon>
        <span>Dashboard</span>
      </template>
      <el-menu-item index="1-1">主控台</el-menu-item>
      <el-menu-item index="1-2">监控页</el-menu-item>
      <el-menu-item index="1-3">工作台</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><Menu /></el-icon>
        <span>系统管理</span>
      </template>
    </el-sub-menu>
  </el-menu>`,
  });
}

export function buildElAnchorCode(options: {
  direction: "Vertical" | "Horizontal";
  markerType: "Default" | "Underline";
  level: 1 | 2 | 3 | 4;
  selected: boolean;
  showList: boolean;
  activeLevel: 1 | 2 | 3 | 4;
}): string {
  const typeAttr = options.markerType === "Underline" ? ' type="underline"' : "";
  const dirAttr = options.direction === "Horizontal" ? ' direction="horizontal"' : "";
  if (options.showList) {
    return buildVueSfc({
      template: `  <el-anchor${typeAttr}${dirAttr}>
    <el-anchor-link href="#part1" title="Part1" />
    <el-anchor-link href="#part2" title="Part2" />
    <el-anchor-link href="#part3" title="Part3" />
    <el-anchor-link href="#part4" title="Part4" />
  </el-anchor>`,
    });
  }
  if (options.direction === "Horizontal") {
    return buildVueSfc({
      template: `  <el-anchor direction="horizontal">
    <el-anchor-link href="#api" title="Anchor API" />
  </el-anchor>`,
    });
  }
  const title = "Anchor API";
  void options.selected;
  void options.level;
  return buildVueSfc({
    template: `  <el-anchor${typeAttr}>
    <el-anchor-link href="#api" title="${title}" />
  </el-anchor>`,
  });
}

export function buildElProgressCode(options: {
  visualType: "Default" | "Internal" | "Circle" | "Dashboard";
  state: "Primary" | "Success" | "Warning" | "Error";
  percentage: number;
  showLabel: boolean;
}): string {
  const status =
    options.state === "Primary"
      ? ""
      : options.state === "Error"
        ? ' status="exception"'
        : ` status="${epType(options.state)}"`;
  const pct = options.percentage;
  if (options.visualType === "Circle") {
    return buildVueSfc({
      template: `  <el-progress type="circle" :percentage="${pct}"${status} />`,
    });
  }
  if (options.visualType === "Dashboard") {
    return buildVueSfc({
      template: `  <el-progress type="dashboard" :percentage="${pct}"${status} />`,
    });
  }
  const textInside = options.visualType === "Internal" ? "\n    text-inside" : "";
  const showText = options.showLabel ? "" : "\n    :show-text=\"false\"";
  return buildVueSfc({
    template: `  <el-progress
    :percentage="${pct}"
    :stroke-width="${options.visualType === "Internal" ? 24 : 6}"${textInside}${showText}${status}
  />`,
  });
}

export function buildElTimelineCode(options: {
  cellType: "Vertical" | "Horizontal" | "Card";
  activeType: "Default" | "Primary" | "Success" | "Warning" | "Error" | "Info";
  size: "Default" | "Large";
  hollow: boolean;
}): string {
  void options.size;
  void options.hollow;
  const activeEp =
    options.activeType === "Default"
      ? ""
      : ` type="${epType(options.activeType === "Error" ? "Danger" : options.activeType)}"`;
  const ts = "2022-07-20 20:00";
  if (options.cellType === "Card") {
    return buildVueSfc({
      template: `  <el-timeline>
    <el-timeline-item timestamp="${ts}" placement="top">
      <el-card shadow="hover">
        <h4>Event start</h4>
        <p>Tom committed ${ts}</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="${ts}" placement="top">
      <el-card shadow="hover">
        <h4>Event start</h4>
        <p>Tom committed ${ts}</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="${ts}" placement="top">
      <el-card shadow="hover">
        <h4>Event start</h4>
        <p>Tom committed ${ts}</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>`,
    });
  }
  const item2 = `    <el-timeline-item timestamp="${ts}">Event start</el-timeline-item>`;
  const item1 = `    <el-timeline-item timestamp="${ts}"${activeEp}>Event start</el-timeline-item>`;
  return buildVueSfc({
    template: `  <el-timeline>
${item1}
${item2}
${item2}
  </el-timeline>`,
  });
}

export function buildElTableCode(options: {
  custom: boolean;
  rows: number;
  stripe: boolean;
  border: boolean;
  size: "Default" | "Large";
}): string {
  const sizeAttr = options.size === "Large" ? ' size="large"' : "";
  const stripe = options.stripe ? " stripe" : "";
  const border = options.border ? " border" : "";
  if (!options.custom) {
    return buildVueSfc({
      imports: ["import { ref } from 'vue'"],
      body: [
        `const tableData = ref(Array.from({ length: ${options.rows} }, () => ({ title: 'Title' })))`,
      ],
      template: `  <el-table :data="tableData"${stripe}${border}${sizeAttr}>
    <el-table-column prop="title" label="Title" />
  </el-table>`,
    });
  }
  return buildVueSfc({
    imports: ["import { ref } from 'vue'"],
    body: [
      `const tableData = ref([
  { id: 1, fieldA: 'Title', fieldB: 'Title', fieldC: 'Title' },
  { id: 2, fieldA: 'Title', fieldB: 'Title', fieldC: 'Title' },
  { id: 3, fieldA: 'Title', fieldB: 'Title', fieldC: 'Title' },
])`,
    ],
    template: `  <el-table :data="tableData"${stripe}${border}${sizeAttr}>
    <el-table-column type="selection" width="40" />
    <el-table-column label="Title" min-width="160">
      <template #default>
        <div>PacsTrust Design</div>
        <div class="el-text el-text--secondary">Notification message</div>
      </template>
    </el-table-column>
    <el-table-column prop="fieldA" label="Title" min-width="120" />
    <el-table-column prop="fieldB" label="Title" min-width="120" />
    <el-table-column label="Title" min-width="120">
      <template #default>
        <el-tag type="info">Tag</el-tag>
        <el-tag type="success">Tag</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="Title" width="80">
      <template #default="{ $index }">
        <el-switch :model-value="$index === 1" />
      </template>
    </el-table-column>
    <el-table-column label="Title" min-width="140">
      <template #default>
        <el-progress :percentage="50" :stroke-width="6" />
      </template>
    </el-table-column>
    <el-table-column prop="fieldC" label="Title" min-width="100" />
    <el-table-column label="Title" min-width="136">
      <template #default>
        <el-button link type="primary">Detail</el-button>
        <el-button link type="primary">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>`,
  });
}

export function buildElResultCode(options: {
  state: "Success" | "Warning" | "Error" | "Info" | "Other";
  showSubTitle: boolean;
  showButton: boolean;
}): string {
  const iconMap: Record<string, string> = {
    Success: "success",
    Warning: "warning",
    Error: "error",
    Info: "info",
  };
  if (options.state === "Other") {
    const sub = options.showSubTitle
      ? '\n    sub-title="Please follow the instructions"'
      : "";
    const extra = options.showButton
      ? `\n    <template #extra>
      <el-button type="primary">Button</el-button>
    </template>`
      : "";
    return buildVueSfc({
      template: `  <el-result title="Result Tip"${sub}>
    <template #icon>
      <img src="/avatar-figma-sample.png" alt="" width="100" height="100" style="object-fit: cover" />
    </template>${extra}
  </el-result>`,
    });
  }
  const icon = iconMap[options.state];
  const sub = options.showSubTitle ? '\n    sub-title="Please follow the instructions"' : "";
  const extra = options.showButton
    ? `\n    <template #extra>
      <el-button type="primary">Button</el-button>
    </template>`
    : "";
  return buildVueSfc({
    template: `  <el-result icon="${icon}" title="Result Tip"${sub}>${extra}
  </el-result>`,
  });
}

export function buildElDescriptionsCode(options: {
  layout: "Horizontal" | "Vertical";
  size: "Default" | "Large" | "Small";
  border: boolean;
  icon: boolean;
}): string {
  const size = epSize(options.size);
  const direction = options.layout === "Vertical" ? 'direction="vertical"' : "";
  const border = options.border ? "border" : "";
  const sizeAttr = size ? `size="${size}"` : "";
  const iconSlot = options.icon
    ? `\n      <template #label="{ label }">
        <span>{{ label }} <el-icon><ElementPlus /></el-icon></span>
      </template>`
    : "";
  return buildVueSfc({
    imports: options.icon ? ["import { ElementPlus } from '@element-plus/icons-vue'"] : undefined,
    template: `  <el-descriptions title="User Info" :column="3" ${direction} ${border} ${sizeAttr}>${iconSlot}
    <el-descriptions-item label="User name">Element plus</el-descriptions-item>
    <el-descriptions-item label="Telephone">+86 1234567890</el-descriptions-item>
    <el-descriptions-item label="Location">Guangzhou</el-descriptions-item>
    <el-descriptions-item label="Email">1421107302@qq.com</el-descriptions-item>
    <el-descriptions-item label="Profile">Design · School</el-descriptions-item>
    <el-descriptions-item label="Address" :span="2">Guangzhou · China</el-descriptions-item>
  </el-descriptions>`,
  });
}

export function buildElAlertCode(options: {
  state: string;
  style: string;
  align: string;
  closeType?: string;
  withDescription?: boolean;
}): string {
  const type = epType(options.state);
  const effect = options.style === "Fill" ? 'effect="dark"' : "";
  const center = options.align === "Center" ? "center" : "";
  const closable = options.closeType !== "Default";
  const closeText = options.closeType === "Text" ? ' close-text="关闭"' : "";
  const desc =
    options.withDescription !== false
      ? '\n    description="带辅助文字的 Alert 变体见 Figma。"'
      : "";
  return buildVueSfc({
    template: `  <el-alert
    title="提示标题"
    type="${type}"${desc}
    show-icon
    ${closable ? "closable" : ""}${closeText}
    ${effect}
    ${center}
  />`,
  });
}

export function buildElSwitchCode(options: {
  size: "Default" | "Large" | "Small";
  disabled: boolean;
  checked: boolean;
}): string {
  const size = epSize(options.size);
  const attrs = [`v-model="value"`];
  if (size) attrs.push(`size="${size}"`);
  if (options.disabled) attrs.push("disabled");
  return buildVueSfc({
    imports: ["import { ref } from 'vue'"],
    body: [`const value = ref(${options.checked})`],
    template: `  <el-switch\n    ${attrs.join("\n    ")}\n  />`,
  });
}

export function buildElCheckboxCode(options: {
  groupType?: string;
  disabled?: boolean;
}): string {
  return buildVueSfc({
    imports: ["import { ref } from 'vue'"],
    body: ["const checked = ref(['Option A'])"],
    template: `  <el-checkbox-group v-model="checked"${options.disabled ? " disabled" : ""}>
    <el-checkbox label="Option A" value="Option A" />
    <el-checkbox label="Option B" value="Option B" />
  </el-checkbox-group>`,
  });
}

export type ElRadioCodeOptions = {
  /** 定制 State=Default 时为组，否则为单颗 Radio 态预览 */
  mode: "group" | "single";
  groupType?: "Default" | "Border" | "Button";
  size?: "Default" | "Large" | "Small";
  disabled?: boolean;
  /** 单选态：Selected / Disable(Selected) */
  selected?: boolean;
};

export function buildElRadioCode(options: ElRadioCodeOptions): string {
  const {
    mode,
    groupType = "Default",
    size = "Default",
    disabled = false,
    selected = true,
  } = options;

  const sizeEp = epSize(size);
  const groupAttrs: string[] = ['v-model="value"'];
  if (sizeEp) groupAttrs.push(`size="${sizeEp}"`);
  if (disabled) groupAttrs.push("disabled");

  if (mode === "single") {
    const radioAttrs = ['value="1"'];
    if (groupType === "Border") radioAttrs.push("border");
    const initial = selected ? "'1'" : "''";
    const groupLine = [`  <el-radio-group`, ...groupAttrs.map((a) => `    ${a}`), "  >"].join("\n");
    return buildVueSfc({
      imports: ["import { ref } from 'vue'"],
      body: [`const value = ref(${initial})`],
      template: `${groupLine}
    <el-radio ${radioAttrs.join(" ")}>Option</el-radio>
  </el-radio-group>`,
    });
  }

  if (groupType === "Button") {
    return buildVueSfc({
      imports: ["import { ref } from 'vue'"],
      body: ["const value = ref('1')"],
      template: `  <el-radio-group\n    ${groupAttrs.join("\n    ")}\n  >
    <el-radio-button value="1">Option 1</el-radio-button>
    <el-radio-button value="2">Option 2</el-radio-button>
  </el-radio-group>`,
    });
  }

  const border = groupType === "Border" ? " border" : "";
  return buildVueSfc({
    imports: ["import { ref } from 'vue'"],
    body: ["const value = ref('1')"],
    template: `  <el-radio-group\n    ${groupAttrs.join("\n    ")}\n  >
    <el-radio value="1"${border}>Option 1</el-radio>
    <el-radio value="2"${border}>Option 2</el-radio>
  </el-radio-group>`,
  });
}

export function buildElSliderCode(options: { range?: boolean; disabled?: boolean }): string {
  const attrs = ["v-model=\"value\""];
  if (options.range) attrs.push(":range=\"true\"");
  if (options.disabled) attrs.push("disabled");
  return buildVueSfc({
    imports: ["import { ref } from 'vue'"],
    body: [options.range ? "const value = ref([20, 60])" : "const value = ref(40)"],
    template: `  <el-slider\n    ${attrs.join("\n    ")}\n  />`,
  });
}

export function buildElRateCode(options: { disabled?: boolean }): string {
  return buildVueSfc({
    imports: ["import { ref } from 'vue'"],
    body: ["const value = ref(3)"],
    template: `  <el-rate v-model="value"${options.disabled ? " disabled" : ""} />`,
  });
}

export function buildElSelectCode(options: {
  size?: "Default" | "Large" | "Small";
  disabled?: boolean;
  multiple?: boolean;
}): string {
  const size = options.size ? epSize(options.size) : undefined;
  const attrs = ['v-model="value"', 'placeholder="Select"'];
  if (size) attrs.push(`size="${size}"`);
  if (options.disabled) attrs.push("disabled");
  if (options.multiple) attrs.push("multiple");
  return buildVueSfc({
    imports: ["import { ref } from 'vue'"],
    body: [options.multiple ? "const value = ref<string[]>([])" : "const value = ref('')"],
    template: `  <el-select\n    ${attrs.join("\n    ")}\n  >
    <el-option label="Option 1" value="1" />
    <el-option label="Option 2" value="2" />
  </el-select>`,
  });
}

export function buildElInputNumberCode(options: {
  size?: "Default" | "Large" | "Small";
  disabled?: boolean;
}): string {
  const size = options.size ? epSize(options.size) : undefined;
  const attrs = ['v-model="value"'];
  if (size) attrs.push(`size="${size}"`);
  if (options.disabled) attrs.push("disabled");
  return buildVueSfc({
    imports: ["import { ref } from 'vue'"],
    body: ["const value = ref(1)"],
    template: `  <el-input-number\n    ${attrs.join("\n    ")}\n  />`,
  });
}

export function buildElFormCode(options: { layout: "Horizontal" | "Vertical"; labelAlign?: string }): string {
  const labelPosition = options.layout === "Vertical" ? 'label-position="top"' : "";
  return buildVueSfc({
    imports: ["import { reactive } from 'vue'"],
    body: [
      "const form = reactive({ name: '', region: '' })",
    ],
    template: `  <el-form :model="form" label-width="120px" ${labelPosition}>
    <el-form-item label="Activity name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity zone">
      <el-select v-model="form.region" placeholder="please select">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
  </el-form>`,
  });
}

export function buildElDatePickerCode(options: { type?: string; disabled?: boolean }): string {
  const type = options.type === "datetime" ? 'type="datetime"' : "";
  return buildVueSfc({
    imports: ["import { ref } from 'vue'"],
    body: ["const value = ref('')"],
    template: `  <el-date-picker\n    v-model="value"\n    ${type}\n    placeholder="Pick a day"\n    ${options.disabled ? "disabled" : ""}\n  />`,
  });
}

export function buildElTimePickerCode(options: { disabled?: boolean }): string {
  return buildVueSfc({
    imports: ["import { ref } from 'vue'"],
    body: ["const value = ref('')"],
    template: `  <el-time-picker\n    v-model="value"\n    placeholder="Pick a time"\n    ${options.disabled ? "disabled" : ""}\n  />`,
  });
}

export function buildElTimeSelectCode(options: { disabled?: boolean }): string {
  return buildVueSfc({
    imports: ["import { ref } from 'vue'"],
    body: ["const value = ref('')"],
    template: `  <el-time-select\n    v-model="value"\n    start="08:30"\n    step="00:15"\n    end="18:30"\n    placeholder="Select time"\n    ${options.disabled ? "disabled" : ""}\n  />`,
  });
}

export function buildElCascaderCode(options: { disabled?: boolean }): string {
  return buildVueSfc({
    imports: ["import { ref } from 'vue'"],
    body: [
      "const value = ref([])",
      "const options = [{ value: 'guide', label: 'Guide', children: [{ value: 'disciplines', label: 'Disciplines' }] }]",
    ],
    template: `  <el-cascader v-model="value" :options="options" ${options.disabled ? "disabled" : ""} />`,
  });
}

export function buildElTransferCode(): string {
  return buildVueSfc({
    imports: ["import { ref } from 'vue'"],
    body: [
      "const value = ref([])",
      "const data = [{ key: 1, label: 'Option 1' }, { key: 2, label: 'Option 2' }]",
    ],
    template: `  <el-transfer v-model="value" :data="data" />`,
  });
}

export function buildElUploadCode(): string {
  return buildVueSfc({
    template: `  <el-upload action="#" :auto-upload="false">
    <el-button type="primary">Click to upload</el-button>
    <template #tip>
      <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
    </template>
  </el-upload>`,
  });
}

export function buildElColorPickerCode(options: { size?: "Default" | "Large" | "Small" }): string {
  const size = options.size ? epSize(options.size) : undefined;
  return buildVueSfc({
    imports: ["import { ref } from 'vue'"],
    body: ["const color = ref('#1677ff')"],
    template: `  <el-color-picker v-model="color"${size ? ` size="${size}"` : ""} />`,
  });
}

export function buildElColorPickerPanelCode(): string {
  return buildVueSfc({
    imports: ["import { ref } from 'vue'"],
    body: ["const color = ref('#1677ff')"],
    template: `  <el-color-picker-panel v-model="color" />`,
  });
}

export function buildElInputTagCode(): string {
  return buildVueSfc({
    imports: ["import { ref } from 'vue'"],
    body: ["const tags = ref(['Tag 1', 'Tag 2'])"],
    template: `  <el-input-tag v-model="tags" />`,
  });
}

export function buildElInputOtpCode(): string {
  return buildVueSfc({
    imports: ["import { ref } from 'vue'"],
    body: ["const value = ref('')"],
    template: `  <el-input-otp v-model="value" :length="6" />`,
  });
}

export function buildElSpaceCode(options: {
  direction: "horizontal" | "vertical";
  size: string;
}): string {
  return buildVueSfc({
    template: `  <el-space direction="${options.direction}" size="${options.size}">
    <el-button>Button 1</el-button>
    <el-button>Button 2</el-button>
  </el-space>`,
  });
}

export function buildElScrollbarCode(): string {
  return buildVueSfc({
    template: `  <el-scrollbar height="200px">
    <p v-for="i in 20" :key="i">Scroll item {{ i }}</p>
  </el-scrollbar>`,
  });
}

export function buildElSplitterCode(_direction: "horizontal" | "vertical"): string {
  return buildVueSfc({
    template: `  <el-splitter>
    <el-splitter-panel>面板 A</el-splitter-panel>
    <el-splitter-panel>面板 B</el-splitter-panel>
  </el-splitter>`,
  });
}

export function buildElButtonGroupCode(): string {
  return buildVueSfc({
    template: `  <el-button-group>
    <el-button type="primary">Left</el-button>
    <el-button type="primary">Middle</el-button>
    <el-button type="primary">Right</el-button>
  </el-button-group>`,
  });
}

export function buildElDialogCode(options: { titleCenter: boolean; titleIcon: boolean }): string {
  const center = options.titleCenter ? ' align-center' : "";
  return buildVueSfc({
    template: `  <el-dialog v-model="visible" title="This is a custom header!" width="480"${center}${options.titleIcon ? "" : ' :show-close="true"'}>
    <span>Element Plus 默认提供一套主题…</span>
    <template #footer>
      <el-button>Button</el-button>
      <el-button type="primary">Button</el-button>
    </template>
  </el-dialog>`,
  });
}

export function buildElDrawerCode(options: { layout: string }): string {
  const dir = options.layout.toLowerCase();
  return buildVueSfc({
    imports: ["import { ref } from 'vue'"],
    body: ["const visible = ref(true)"],
    template: `  <el-drawer v-model="visible" title="I am the title" direction="${dir}">
    <p>Element Plus 默认提供一套主题…</p>
    <template #footer>
      <el-button>Button</el-button>
      <el-button type="primary">Button</el-button>
    </template>
  </el-drawer>`,
  });
}

export function buildElLoadingCode(options: { iconType: string; size: string }): string {
  void options;
  return buildVueSfc({
    body: ["const loading = ref(true)"],
    imports: ["import { ref } from 'vue'"],
    template: `  <div v-loading="loading" style="height: 120px" />`,
  });
}

export function buildElMessageCode(options: {
  messageType: string;
  plain: boolean;
  closable: boolean;
}): string {
  const type = epType(options.messageType);
  const plain = options.plain ? " plain" : "";
  const showClose = options.closable ? " showClose: true," : "";
  return buildVueSfc({
    body: [`ElMessage({ message: 'this is a message.', type: '${type}',${showClose}${plain ? " plain: true," : ""} })`],
    template: `  <!-- 调用 ElMessage API -->`,
  });
}

export function buildElMessageBoxCode(options: { boxType: string }): string {
  if (options.boxType === "Message prompts") {
    return buildVueSfc({
      body: [`ElMessageBox.alert('This is a message', 'Title')`],
      template: `  <!-- ElMessageBox.alert -->`,
    });
  }
  if (options.boxType === "Submit") {
    return buildVueSfc({
      body: [`ElMessageBox.prompt('This is a message', 'Title')`],
      template: `  <!-- ElMessageBox.prompt -->`,
    });
  }
  return buildVueSfc({
    body: [`ElMessageBox.confirm('This is a message', 'Title')`],
    template: `  <!-- ElMessageBox.confirm -->`,
  });
}

export function buildElNotificationCode(options: { notificationType: string }): string {
  const raw = options.notificationType;
  const typePart =
    raw === "Default"
      ? ""
      : `type: '${raw === "Error" ? "error" : epType(raw)}', `;
  return buildVueSfc({
    body: [
      `ElNotification({ title: 'Notification', message: 'This is a message that does not automatically close', ${typePart}})`,
    ],
    template: `  <!-- ElNotification API -->`,
  });
}

export function buildElPopconfirmCode(options: { layout: string }): string {
  const placementMap: Record<string, string> = {
    "Up-left": "top-start",
    "Up-center": "top",
    "Up-right": "top-end",
    下左: "bottom-start",
    下中: "bottom",
    下右: "bottom-end",
    "Left-up": "left-start",
    "Left-center": "left",
    "Left-down": "left-end",
    "Right-up": "right-start",
    "Right-center": "right",
    "Right-down": "right-end",
  };
  const placement = placementMap[options.layout] ?? "top";
  return buildVueSfc({
    template: `  <el-popconfirm title="Are you sure to delete this?" placement="${placement}">
    <template #reference>
      <el-button>Delete</el-button>
    </template>
  </el-popconfirm>`,
  });
}

export function buildElTooltipCode(options: { effect: string; layout: string }): string {
  const placementMap: Record<string, string> = {
    Top: "top",
    "Top Start": "top-start",
    "Top End": "top-end",
    Bottom: "bottom",
    "Bottom Start": "bottom-start",
    "Bottom End": "bottom-end",
    Left: "left",
    "Left Start": "left-start",
    "Left End": "left-end",
    Right: "right",
    "Right Start": "right-start",
    "Right End": "right-end",
  };
  const placement = placementMap[options.layout] ?? "top";
  const effect = options.effect === "Dark" ? 'effect="dark"' : "";
  return buildVueSfc({
    template: `  <el-tooltip content="Tooltip content" placement="${placement}" ${effect}>
    <el-button>触发</el-button>
  </el-tooltip>`,
  });
}

export function buildElDividerCode(options: {
  vertical: boolean;
  lineStyle: string;
  contentLayout: string;
}): string {
  const dir = options.vertical ? ' direction="vertical"' : "";
  const border = options.lineStyle === "Dashed" ? ' border-style="dashed"' : options.lineStyle === "Point" ? ' border-style="dotted"' : "";
  const pos =
    !options.vertical && options.contentLayout !== "No text"
      ? ` content-position="${options.contentLayout.toLowerCase()}"`
      : "";
  const content =
    !options.vertical && options.contentLayout !== "No text"
      ? "\n    Rabindranath Tagore"
      : "";
  return buildVueSfc({
    template: `  <el-divider${dir}${border}${pos}>${content}
  </el-divider>`,
  });
}

export function buildElWatermarkCode(options: { watermarkType: string; content: string }): string {
  const font = options.watermarkType === "Icon" ? "" : ` font="{ text: '${options.content.replace(/'/g, "\\'")}' }"`;
  return buildVueSfc({
    template: `  <el-watermark${font}>
    <div style="height: 300px" />
  </el-watermark>`,
  });
}

export function buildElPopoverCode(options: { layout: string }): string {
  const placementMap: Record<string, string> = {
    "up-left": "top-start",
    "up-middle": "top",
    "up-right": "top-end",
    下左: "bottom-start",
    下中: "bottom",
    下右: "bottom-end",
    "left-up": "left-start",
    "left-middle": "left",
    "left-bottom": "left-end",
    "right-up": "right-start",
    "right-middle": "right",
    "right-bottom": "right-end",
  };
  const placement = placementMap[options.layout] ?? "top";
  return buildVueSfc({
    template: `  <el-popover placement="${placement}" title="Title" :width="212" trigger="click">
    <template #reference>
      <el-button>触发</el-button>
    </template>
    <p>this is content, this is content, this is content</p>
  </el-popover>`,
  });
}

export function buildElIconCode(): string {
  return buildVueSfc({
    imports: ["import { Search } from '@element-plus/icons-vue'"],
    template: `  <el-icon :size="20"><Search /></el-icon>`,
  });
}
