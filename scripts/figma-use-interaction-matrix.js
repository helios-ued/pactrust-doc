// use_figma @ hVUwZpK4E52BzbhYTQIi4j — 固定模版 · 按命名排布：默认/中文/报错/点击交互

const GAP_X = 64;
const GAP_Y = 120;
const FW = 1920;
const FH = 1080;

const SCREENS = [
  { key: '01', name: '01-登录', formError: true, focus: true, hasForm: true },
  { key: '02', name: '02-验证码', formError: false, focus: 'otp', hasForm: false },
  { key: '03', name: '03-图形验证码', formError: false, focus: 'dialog', hasForm: false },
  { key: '04', name: '04-后台登录', formError: true, focus: true, hasForm: true },
  { key: '05', name: '05-后台注册', formError: true, focus: true, hasForm: true },
  { key: '06', name: '06-后台验证', formError: false, focus: 'otp', hasForm: false },
];

/** 列内自上而下顺序（与图层按名称排序一致） */
const VARIANTS = [
  { suffix: '', kind: 'default' },
  { suffix: '-有内容', kind: 'filled', needsFormFields: true },
  { suffix: '-中文', kind: 'zh' },
  { suffix: '-报错', kind: 'error-en', needsFormError: true },
  { suffix: '-报错-中文', kind: 'error-zh', needsFormError: true },
  { suffix: '-点击-语言', kind: 'click-lang' },
  { suffix: '-点击-输入聚焦', kind: 'click-focus' },
];

const TEXT_ZH = {
  'Welcome to PacsTrust.': '欢迎使用 PacsTrust.',
  'One Platform, Boundless Finance': '一站式平台，无界金融',
  'Enter verification code.': '请输入验证码。',
  'Resend Code': '重新发送',
  '56s': '56秒',
  'Switch to': '切换至',
  'Authenticator Verification': '身份验证器验证',
  'Create an account.': '创建账号',
  'Enter your information below to create your account': '请在下方填写信息以创建账号',
  "Don't have an account? ": '还没有账号？ ',
  'Sign up': '注册',
  'Already have an account? ': '已有账号？ ',
  Login: '登录',
  'Create Account': '创建账号',
  Email: '邮箱',
  Password: '密码',
  'Confirm Password': '确认密码',
  'Please enter image captcha': '请输入图形验证码',
  'Please enter ': '请输入 ',
  'Please enter': '请输入',
  Captcha: '验证码',
  Refresh: '刷新',
  Save: '保存',
};

const ZH_BTN_LABEL = {
  Login: '登录',
  'Create Account': '创建账号',
  Save: '保存',
  Refresh: '刷新',
  'Authenticator Verification': '身份验证器验证',
};

const ZH_INPUT_DEFAULT = {
  'Please enter ': '请输入 ',
  'Please enter': '请输入',
  Captcha: '验证码',
};

/** 图2：仅占位（Input=False）→ 主按钮 Fill/Darker；图3：Input=True 有值 → 品牌蓝 */
const FORM_EMPTY = [
  { label: 'Email', defaultText: 'm@example.com ', suffix: false, filled: false },
  { label: 'Password', defaultText: 'Please enter ', suffix: true, filled: false },
];
const FORM_FILLED = [
  { label: 'Email', value: 'm@example.com', suffix: false, filled: true },
  {
    label: 'Password',
    value: '********************',
    suffix: true,
    filled: true,
  },
];
const FORM_ZH_EMPTY = [
  { label: '邮箱', defaultText: 'm@example.com ', suffix: false, filled: false },
  { label: '密码', defaultText: '请输入 ', suffix: true, filled: false },
];
const FORM_ZH_FILLED = [
  { label: '邮箱', value: 'm@example.com', suffix: false, filled: true },
  { label: '密码', value: '********************', suffix: true, filled: true },
];
const FORM_ZH_REG_EMPTY = [
  { label: '邮箱', defaultText: 'm@example.com', suffix: false, filled: false },
  { label: '密码', defaultText: '请输入 ', suffix: true, filled: false },
  { label: '确认密码', defaultText: '请输入 ', suffix: true, filled: false },
];
const FORM_ZH_REG_FILLED = [
  { label: '邮箱', value: 'm@example.com', suffix: false, filled: true },
  { label: '密码', value: '********************', suffix: true, filled: true },
  { label: '确认密码', value: '********************', suffix: true, filled: true },
];

const NOTO_SC = { family: 'Noto Sans SC', style: 'Regular' };

/** Light/Fill/Darker · `VariableID:5826:35528` */
const BTN_FILL_DARKER = {
  r: 0.9019607901573181,
  g: 0.9098039269447327,
  b: 0.9215686321258545,
};

/** Input `State=Error` 描边 / Error/color `#f53f3f` */
const COLOR_ERROR = {
  r: 0.9607843160629272,
  g: 0.24705882370471954,
  b: 0.24705882370471954,
};

async function loadFonts() {
  const list = [
    ['Inter', 'Regular'],
    ['Inter', 'Medium'],
    ['Inter', 'Bold'],
    ['Noto Sans SC', 'Regular'],
    ['Roboto', 'Regular'],
  ];
  for (const [family, style] of list) {
    try {
      await figma.loadFontAsync({ family, style });
    } catch (_) {}
  }
}

function findBaseFrame(page, name) {
  const matches = page.children.filter((n) => n.type === 'FRAME' && n.name === name);
  if (matches.length === 0) return null;
  matches.sort((a, b) => a.id.localeCompare(b.id));
  for (let i = 1; i < matches.length; i++) matches[i].remove();
  return matches[0];
}

function resetInputs(root) {
  for (const fi of root.findAll((n) => n.type === 'INSTANCE' && n.name === 'Form Item')) {
    const input = fi.findOne((n) => n.name === 'Input' && n.type === 'INSTANCE');
    if (input) {
      try {
        input.setProperties({
          State: 'Default',
          'Show-prompt#3376:0': false,
          Size: 'Large',
          Input: 'False',
        });
      } catch (_) {}
    }
    if (fi.componentProperties?.['Show Prompt#3153:36'] !== undefined) {
      try {
        fi.setProperties({ 'Show Prompt#3153:36': false });
      } catch (_) {}
    }
  }
}

const LIB_DROPDOWN_SET = 'a89d6c665ecce46d2cae6843f64b33e90363f20c';
const LIB_DROPDOWN_TRIGGER_SET = 'df21be62f6671f661d0dc2bc5ffd88b70e01df64';
/** dropdown-trigger/Default/Text/Default（Text-button + 独立 arrow-down） */
const LIB_DROPDOWN_TRIGGER_NEW = '65a238a043ea21f23aba12a1680e767ab3d1c91a';
const LIB_ICON_LANGUAGE = '0bfe635aecabca4f4d896987a841aa53228fdbb2';
let languageIconComp;
const ICON_REGULAR = { r: 0.3764705955982208, g: 0.3843137323856354, b: 0.4000000059604645 };
/** Figma `Brand/color` #1677ff — 界面主蓝唯一值 */
const BRAND_COLOR = { r: 0.08627451211214066, g: 0.46666666865348816, b: 1 };

let dropdownSetCache = null;
let triggerTextButtonSetCache = null;

async function getTriggerTextButtonSet() {
  if (!triggerTextButtonSetCache) {
    const trigSet = await figma.importComponentSetByKeyAsync(LIB_DROPDOWN_TRIGGER_SET);
    const ref = trigSet.findChild((c) => c.name === 'Type=Text, State=Default');
    triggerTextButtonSetCache = ref?.findOne((n) => n.name === 'Text-button')?.mainComponent?.parent;
  }
  return triggerTextButtonSetCache;
}

/** 固定模版已发布 Dropdown 内或为 Style=* 无图标 → 统一为 Trigger 同款 Type=*（含 Lang + arrow） */
async function normalizeTextButtonToTypeSet(tb, open) {
  const set = await getTriggerTextButtonSet();
  if (!set || !tb) return;
  const targetName = open
    ? 'Type=Primary, State=Default, Plain=False, Size=Default'
    : 'Type=Default, State=Default, Plain=False, Size=Default';
  const target = set.findChild((c) => c.type === 'COMPONENT' && c.name === targetName);
  if (target && tb.mainComponent?.id !== target.id) {
    try {
      tb.swapComponent(target);
    } catch (_) {}
  }
}

async function getDropdownSet() {
  if (!dropdownSetCache) {
    dropdownSetCache = await figma.importComponentSetByKeyAsync(LIB_DROPDOWN_SET);
  }
  return dropdownSetCache;
}

function findLogoBar(root) {
  return root.findOne((n) => n.name === 'Logo' && n.type === 'FRAME');
}

/** Logo 内使用库 Dropdown（Type=Text），替换孤立 Dropdown Trigger */
function removeOrphanPageDropdowns(page) {
  for (const n of [...(page?.children || [])]) {
    if (n.type === 'INSTANCE' && n.name === 'Dropdown') {
      n.remove();
    }
  }
}

async function ensureLogoDropdown(root) {
  const logo = findLogoBar(root);
  if (!logo) return null;
  let drop = logo.findOne((n) => n.name === 'Dropdown' && n.type === 'INSTANCE');
  const legacy = logo.findOne(
    (n) => n.name === 'Dropdown Trigger' && n.type === 'INSTANCE',
  );
  if (!drop && legacy) {
    const set = await getDropdownSet();
    const comp = set.findChild((c) => c.name === 'Type=Text');
    if (comp) {
      drop = comp.createInstance();
      drop.name = 'Dropdown';
      drop.x = legacy.x;
      drop.y = legacy.y;
      logo.appendChild(drop);
      legacy.remove();
    }
  }
  root
    .findAll((n) => n.name === 'Dropdown Menu' && n.parent === root)
    .forEach((n) => n.remove());
  return drop;
}

const TB_CLOSED = [
  'Style=Default, State=Default, Bg=off',
  'Type=Default, State=Default, Plain=False, Size=Default',
];
const TB_OPEN = [
  'Style=Primary, State=Default, Bg=off',
  'Type=Primary, State=Default, Plain=False, Size=Default',
];

function swapTextButtonVisual(tb, open) {
  if (!tb?.mainComponent?.parent || tb.mainComponent.parent.type !== 'COMPONENT_SET') return;
  const set = tb.mainComponent.parent;
  const names = open ? TB_OPEN : TB_CLOSED;
  const target = set.findChild((c) => c.type === 'COMPONENT' && names.includes(c.name));
  if (target && tb.mainComponent.id !== target.id) {
    try {
      tb.swapComponent(target);
    } catch (_) {}
  }
}

function textButtonUsesStyleSet(tb) {
  const name = tb?.mainComponent?.name || '';
  if (name.startsWith('Style=')) return true;
  return tb?.componentProperties?.Style !== undefined;
}

function setTextButtonLabel(tb, lang) {
  if (!tb) return;
  const styleSet = textButtonUsesStyleSet(tb);
  safeSet(tb, styleSet ? { 'Text#2938:485': lang } : { 'Text#5837:0': lang });
  const textNode =
    tb.findOne((t) => t.type === 'TEXT' && (t.name === 'text' || t.name === 'Text')) ||
    tb.findAll((t) => t.type === 'TEXT')[0];
  if (textNode && textNode.characters !== lang) {
    try {
      textNode.characters = lang;
    } catch (_) {}
  }
}

function findDropdownTriggerChild(drop) {
  return (
    drop.findOne((n) => n.name === 'dropdown-trigger/Default/Text/Default') ||
    drop.findOne((n) => n.name === 'Dropdown Trigger')
  );
}

function findDropdownTextButton(drop) {
  const trig = findDropdownTriggerChild(drop);
  return trig?.findOne((n) => n.name === 'Text-button') || drop.findOne((n) => n.name === 'Text-button');
}

function findStandaloneArrowDown(drop) {
  const trig = findDropdownTriggerChild(drop);
  const root = trig || drop;
  return root.findOne((n) => n.type === 'INSTANCE' && /arrow-down/i.test(n.name));
}

function sampleLeftIconFill(tb) {
  const left = tb?.findOne((n) => n.name === 'Left-icon');
  if (!left) return null;
  const vec =
    left.findOne((n) => n.type === 'VECTOR') ||
    left.findOne((n) => n.type === 'INSTANCE')?.findOne((n) => n.type === 'VECTOR');
  const f = vec?.fills?.[0];
  return f?.type === 'SOLID' ? { ...f.color } : null;
}

function paintArrowLikeLeftIcon(arrow, fill) {
  if (!arrow || !fill) return;
  arrow.visible = true;
  for (const v of arrow.findAll((n) => n.type === 'VECTOR')) {
    try {
      v.fills = [{ type: 'SOLID', color: { ...fill } }];
    } catch (_) {}
  }
}

function nearColor(a, b, t = 0.03) {
  return (
    a &&
    b &&
    Math.abs(a.r - b.r) < t &&
    Math.abs(a.g - b.g) < t &&
    Math.abs(a.b - b.b) < t
  );
}

/** 库内旧主蓝（如 #419EFF / sky）→ 强制 Brand #1677ff */
function isLegacyPrimaryBlue(c) {
  if (!c || c.b < 0.8) return false;
  if (nearColor(c, BRAND_COLOR, 0.02)) return false;
  return c.b > 0.85 && c.g > 0.38 && c.g < 0.82 && c.r < 0.35;
}

function setNodeSolidColor(node, color) {
  if (!node) return;
  try {
    if (node.type === 'TEXT') {
      node.fills = [{ type: 'SOLID', color: { ...color } }];
      return;
    }
    if (!('fills' in node) || node.fills === figma.mixed) return;
    const fills = Array.isArray(node.fills) ? [...node.fills] : [];
    if (fills.length === 0) fills.push({ type: 'SOLID', color: { ...color } });
    else if (fills[0]?.type === 'SOLID')
      fills[0] = { ...fills[0], type: 'SOLID', color: { ...color } };
    node.fills = fills;
  } catch (_) {}
}

function fixLegacyPrimaryBlues(root, color = BRAND_COLOR) {
  if (!root || !('findAll' in root)) return 0;
  let n = 0;
  for (const node of root.findAll((x) => x.type === 'TEXT' || x.type === 'VECTOR')) {
    const fills = node.fills;
    if (fills === figma.mixed || !Array.isArray(fills)) continue;
    const c = fills[0]?.color;
    if (c && isLegacyPrimaryBlue(c)) {
      setNodeSolidColor(node, color);
      n += 1;
    }
  }
  return n;
}

async function patchOpenLangBrand(drop) {
  const tb = findDropdownTextButton(drop);
  if (tb) {
    tb.findAll((node) => node.type === 'TEXT' || node.type === 'VECTOR').forEach((node) =>
      setNodeSolidColor(node, BRAND_COLOR),
    );
  }
  paintArrowLikeLeftIcon(findStandaloneArrowDown(drop), BRAND_COLOR);
  const menu = drop.findOne((n) => n.name === 'Dropdown Menu' && n.type === 'INSTANCE');
  const opts =
    menu?.findAll(
      (n) => n.type === 'INSTANCE' && n.name === 'Component/Dropdown Option',
    ) || [];
  const en = opts[0];
  if (en) {
    en.findAll((node) => node.type === 'TEXT' || node.type === 'VECTOR').forEach((node) => {
      if (node.type === 'TEXT' && !/^English\s*$/i.test(String(node.characters).trim())) return;
      setNodeSolidColor(node, BRAND_COLOR);
    });
    en.findAll((node) => node.type === 'VECTOR').forEach((node) =>
      setNodeSolidColor(node, BRAND_COLOR),
    );
  }
}

function fixPageLegacyBlues(page) {
  let fixed = 0;
  for (const frame of page.children) {
    if (frame.type !== 'FRAME') continue;
    fixed += fixLegacyPrimaryBlues(frame);
  }
  return fixed;
}

let dropdownTriggerNewMc;

function resolveDropdownTriggerNewMc(page) {
  if (dropdownTriggerNewMc) return dropdownTriggerNewMc;
  for (const frame of page.children) {
    if (frame.type !== 'FRAME') continue;
    const ref = frame.findOne((n) => n.name === 'dropdown-trigger/Default/Text/Default');
    if (ref?.mainComponent) {
      dropdownTriggerNewMc = ref.mainComponent;
      break;
    }
  }
  return dropdownTriggerNewMc;
}

function ensureDropdownTriggerNew(drop, page) {
  if (drop.findOne((n) => n.name === 'dropdown-trigger/Default/Text/Default')) {
    resolveDropdownTriggerNewMc(page);
    return;
  }
  const old = drop.findOne((n) => n.name === 'Dropdown Trigger');
  if (!old) return;
  const mc = resolveDropdownTriggerNewMc(page);
  if (mc) {
    try {
      old.swapComponent(mc);
    } catch (_) {}
  }
}

async function ensureLanguageLeftIcon(tb) {
  if (!tb) return;
  const left = tb.findOne((n) => n.name === 'Left-icon');
  if (!left) return;
  const inner = left.findOne((n) => n.type === 'INSTANCE');
  if (!inner || /Language/i.test(inner.mainComponent?.name || '')) return;
  if (!languageIconComp) {
    languageIconComp = await figma.importComponentByKeyAsync(LIB_ICON_LANGUAGE);
  }
  try {
    inner.swapComponent(languageIconComp);
  } catch (_) {}
  safeSet(left, { Size: '14px' });
}

/** Right-icon 关；独立 arrow-down 填色与 Left-icon（Language）一致 */
async function patchDropdownChevron(drop) {
  const tb = findDropdownTextButton(drop);
  if (!tb) return;
  await ensureLanguageLeftIcon(tb);
  safeSet(tb, { 'Right-icon#2936:98': false, 'Left-icon#2936:0': true });
  const right = tb.findOne((n) => n.name === 'Right-icon');
  if (right) right.visible = false;
  const left = tb.findOne((n) => n.name === 'Left-icon');
  if (left) left.visible = true;
  const fill = sampleLeftIconFill(tb) || ICON_REGULAR;
  paintArrowLikeLeftIcon(findStandaloneArrowDown(drop), fill);
}

/** 仅 `open` 时 Primary 品牌蓝；收起 Type=Default（Text/Primary + Icon/Regular 灰） */
async function patchDropdownTextButton(drop, { lang, open }) {
  const tb = findDropdownTextButton(drop);
  if (!tb) return;
  await normalizeTextButtonToTypeSet(tb, open);
  safeSet(tb, {
    Type: open ? 'Primary' : 'Default',
    State: 'Default',
    Plain: 'False',
    Size: 'Default',
    'Left-icon#2936:0': true,
    'Right-icon#2936:98': false,
  });
  setTextButtonLabel(tb, lang);
  await patchDropdownChevron(drop);
}

async function patchDropdownClosed(drop, lang = 'English', page) {
  if (!drop) return;
  if (page) ensureDropdownTriggerNew(drop, page);
  safeSet(drop, { 'Show-select#4242:0': false });
  await patchDropdownTextButton(drop, { lang, open: false });
}

async function patchDropdownOpen(drop, lang = 'English', page) {
  if (!drop) return;
  if (page) ensureDropdownTriggerNew(drop, page);
  safeSet(drop, { 'Show-select#4242:0': true });
  await patchDropdownTextButton(drop, { lang, open: true });
  await patchLangMenuInside(drop);
  await patchOpenLangBrand(drop);
}

async function patchDropdownLang(rootOrInst, lang) {
  const drop =
    rootOrInst.type === 'FRAME'
      ? rootOrInst.findOne((n) => n.type === 'INSTANCE' && n.name === 'Dropdown')
      : rootOrInst.name === 'Dropdown'
        ? rootOrInst
        : null;
  const page = rootOrInst.type === 'FRAME' ? rootOrInst.parent : null;
  if (drop?.name === 'Dropdown') await patchDropdownClosed(drop, lang, page);
}

function safeSet(inst, props) {
  if (!inst) return;
  try {
    inst.setProperties(props);
  } catch (_) {}
}

const COLOR_MENU = {
  bg: { r: 1, g: 1, b: 1 },
  border: { r: 0.8941176533699036, g: 0.9058823585510254, b: 0.929411768913269 },
  fillHover: { r: 0.9607843160629272, g: 0.9647058844566345, b: 0.9725490212440491 },
  text: { r: 0.14901961088180542, g: 0.196078434586525, b: 0.27450981736183167 },
  /** Figma `Brand/color` #1677ff */
  primary: { r: 0.08627451211214066, g: 0.46666666865348816, b: 1 },
};

const ARROW_DOWN_BORDER_KEY = 'f3e1f6501c7d69cc7576808bef2e3d87423fe1d7';
let arrowDownBorderComp;

async function getArrowDownBorder() {
  if (arrowDownBorderComp) return arrowDownBorderComp;
  arrowDownBorderComp = await figma.importComponentByKeyAsync(ARROW_DOWN_BORDER_KEY);
  return arrowDownBorderComp;
}

function patchFormPromptText(fi, errorMsg) {
  if (!fi || fi.componentProperties?.['Show Prompt#3153:36'] === undefined) return;
  if (!errorMsg) {
    safeSet(fi, { 'Show Prompt#3153:36': false });
    return;
  }
  safeSet(fi, { 'Show Prompt#3153:36': true });
  const msgText = fi
    .findOne((n) => n.type === 'FRAME' && n.name === 'message')
    ?.findOne((n) => n.type === 'TEXT');
  if (!msgText) return;
  try {
    if (/[\u4e00-\u9fff]/.test(errorMsg)) msgText.fontName = NOTO_SC;
    else msgText.fontName = { family: 'Roboto', style: 'Regular' };
  } catch (_) {}
  try {
    msgText.characters = errorMsg;
    msgText.visible = true;
    msgText.fills = [{ type: 'SOLID', color: { ...COLOR_ERROR } }];
  } catch (_) {}
}

function patchInputVisual(inputInst, field, errorMsg) {
  if (!inputInst) return;
  const filled = !!field.filled;
  const value = field.value || field.defaultText || ' ';
  if (filled) {
    safeSet(inputInst, {
      Input: 'True',
      State: errorMsg ? 'Error' : 'Default',
      Size: 'Large',
      'Input-text#2941:80': value,
      'Default-text#2941:64': ' ',
      'Suffix-icon#2941:32': field.suffix,
      'Show-prompt#3376:0': false,
    });
  } else {
    safeSet(inputInst, {
      Input: 'False',
      State: errorMsg ? 'Error' : 'Default',
      Size: 'Large',
      'Default-text#2941:64': value,
      'Suffix-icon#2941:32': field.suffix,
      'Show-prompt#3376:0': false,
    });
  }
  const text = inputInst.findOne((n) => n.type === 'TEXT' && n.name === 'Label');
  if (text && filled) {
    try {
      text.characters = value;
    } catch (_) {}
  }
}

function patchFormItem(fi, field) {
  const { label, suffix, errorMsg } = field;
  const labelInst = fi.findOne((n) => n.name === 'Component/label' && n.type === 'INSTANCE');
  const inputInst = fi.findOne((n) => n.name === 'Input' && n.type === 'INSTANCE');
  safeSet(labelInst, {
    'Label#5858:23': label,
    'Required#6178:0': false,
    'Info#6178:7': false,
  });
  patchInputVisual(inputInst, field, errorMsg);
  if (!errorMsg) patchFormPromptText(fi, null);
  else patchFormPromptText(fi, errorMsg);
}

function applyZhFontToTextNode(t, next) {
  if (!t || t.fontName === figma.mixed) return;
  if (/[\u4e00-\u9fff]/.test(next)) {
    try {
      t.fontName = NOTO_SC;
    } catch (_) {}
  }
  try {
    t.characters = next;
  } catch (_) {}
}

function replaceText(root, map) {
  for (const t of root.findAll((n) => n.type === 'TEXT')) {
    const cur = t.characters;
    const next = map[cur] ?? map[cur.trim()];
    if (next === undefined) continue;
    applyZhFontToTextNode(t, next);
  }
}

function patchZhInputInstances(root) {
  for (const input of root.findAll((n) => n.type === 'INSTANCE' && n.name === 'Input')) {
    const cp = input.componentProperties || {};
    const raw = cp['Default-text#2941:64'];
    if (raw !== undefined) {
      const v = typeof raw === 'object' && raw && 'value' in raw ? raw.value : raw;
      const next = ZH_INPUT_DEFAULT[v];
      if (next) {
        safeSet(input, { 'Default-text#2941:64': next, 'Show-prompt#3376:0': false });
      }
    }
    for (const t of input.findAll((n) => n.type === 'TEXT')) {
      const next = TEXT_ZH[t.characters] ?? TEXT_ZH[t.characters.trim()];
      if (next) applyZhFontToTextNode(t, next);
    }
  }
}

function patchZhButtonsAll(root) {
  const keys = ['Text#5832:1', 'Text#5832:0', 'Text#5837:0'];
  for (const btn of root.findAll((n) => n.type === 'INSTANCE' && n.name === 'Button')) {
    for (const key of keys) {
      if (btn.componentProperties?.[key] === undefined) continue;
      const raw = btn.componentProperties[key];
      const v = typeof raw === 'object' && raw && 'value' in raw ? raw.value : raw;
      const next = ZH_BTN_LABEL[v];
      if (next) safeSet(btn, { [key]: next });
    }
    const t = btn.findOne((n) => n.type === 'TEXT');
    if (t) {
      const next = ZH_BTN_LABEL[t.characters] ?? TEXT_ZH[t.characters];
      if (next) applyZhFontToTextNode(t, next);
    }
  }
}

function patchZhDialog(root) {
  const dlg = root.findOne((n) => n.type === 'INSTANCE' && n.name === 'Dialog');
  if (!dlg) return;
  safeSet(dlg, {
    'Text#3144:3': '请输入图形验证码',
    'Title-center': 'off',
    'Show-button#3144:9': true,
  });
  for (const t of dlg.findAll((n) => n.type === 'TEXT')) {
    const next = TEXT_ZH[t.characters] ?? TEXT_ZH[t.characters.trim()];
    if (next) applyZhFontToTextNode(t, next);
  }
  for (const input of dlg.findAll((n) => n.type === 'INSTANCE' && n.name === 'Input')) {
    safeSet(input, {
      'Default-text#2941:64': '验证码',
      'Show-prompt#3376:0': false,
      Input: 'False',
      State: 'Default',
      Size: 'Large',
    });
  }
}

function findPrimarySubmitButton(root) {
  const bySize = root.findOne(
    (n) => n.type === 'INSTANCE' && n.name === 'Button' && n.height >= 32 && n.width > 120,
  );
  if (bySize) return bySize;
  return root.findOne((n) => {
    if (n.type !== 'INSTANCE' || n.name !== 'Button' || n.height < 32) return false;
    const text = n.findOne((t) => t.type === 'TEXT');
  return text && /^(Login|登录|创建账号|Create)/i.test(String(text.characters).trim());
  });
}

function patchPrimaryButtonLabel(root, label) {
  const btn = findPrimarySubmitButton(root);
  if (!btn) return;
  if (btn.componentProperties?.['Text#5832:1']) {
    safeSet(btn, { 'Text#5832:1': label });
    return;
  }
  const text = btn.findOne((n) => n.type === 'TEXT');
  if (text) text.characters = label;
}

/** 图2：Fill/Darker 底 + 白字（禁用变体 + 覆盖填充）；图3：品牌蓝 Event=Default */
function applyButtonFillDarker(btn) {
  if (!btn) return;
  const fills = Array.isArray(btn.fills) ? [...btn.fills] : [];
  if (fills.length === 0) fills.push({ type: 'SOLID', color: { ...BTN_FILL_DARKER } });
  else fills[0] = { ...(fills[0] || {}), type: 'SOLID', visible: true, color: { ...BTN_FILL_DARKER } };
  btn.fills = fills;
}

function isAuthLoginRegisterScreen(root) {
  const n = root?.name || '';
  return /^(01|04|05)/.test(n);
}

/** 01/04/05 底链（Sign up / Login）水平居中；02/03/06 验证码区「Switch to」不改 */
function centerAuthFooterInSubmit(submit) {
  if (!submit || submit.name !== 'Submit Block' || submit.type !== 'FRAME') return false;
  const btn = submit.findOne(
    (n) => n.type === 'INSTANCE' && n.name === 'Button' && n.height >= 28,
  );
  if (!btn) return false;
  const row = submit.children.find((n) => n.name === 'Text' && n.type === 'FRAME');
  if (!row) return false;
  const copy = row
    .findAll((t) => t.type === 'TEXT')
    .map((t) => t.characters)
    .join('');
  if (/Switch to/i.test(copy) || !/account|账号/i.test(copy)) return false;

  if (submit.layoutMode !== 'NONE') {
    submit.layoutMode = 'VERTICAL';
    submit.primaryAxisAlignItems = 'MIN';
    submit.counterAxisAlignItems = 'CENTER';
    submit.itemSpacing = 16;
    try {
      btn.layoutSizingHorizontal = 'FILL';
    } catch (_) {}
  } else {
    row.x = (submit.width - row.width) / 2;
  }
  return true;
}

function centerAuthFooterInFrame(root) {
  if (!isAuthLoginRegisterScreen(root)) return false;
  let ok = false;
  for (const submit of root.findAll(
    (n) => n.name === 'Submit Block' && n.type === 'FRAME',
  )) {
    if (centerAuthFooterInSubmit(submit)) ok = true;
  }
  return ok;
}

function centerAuthFootersOnPage(page) {
  let count = 0;
  for (const frame of page.children) {
    if (frame.type !== 'FRAME') continue;
    if (centerAuthFooterInFrame(frame)) count += 1;
  }
  return count;
}

/** 主按钮与 Form Item / Submit Block 同宽（禁用变体勿 HUG 居中） */
function stretchPrimaryButton(root) {
  const btn = findPrimarySubmitButton(root);
  if (!btn) return;
  const submit = btn.parent;
  const item = root.findAll((n) => n.type === 'INSTANCE' && n.name === 'Form Item')[0];
  const targetW = submit?.width || item?.width;
  if (!targetW) return;

  if (submit?.type === 'FRAME' && submit.layoutMode !== 'NONE') {
    submit.counterAxisAlignItems = isAuthLoginRegisterScreen(root) ? 'CENTER' : 'MIN';
    btn.layoutSizingHorizontal = 'FILL';
    btn.layoutAlign = 'STRETCH';
    centerAuthFooterInSubmit(submit);
    return;
  }
  btn.resize(targetW, btn.height);
  btn.x = 0;
  centerAuthFooterInSubmit(submit);
}

function patchPrimaryButtonEnabled(root, enabled) {
  const btn = findPrimarySubmitButton(root);
  if (!btn) return;
  const mc = btn.mainComponent;
  const set = mc?.parent;
  if (!set || set.type !== 'COMPONENT_SET') return;

  let target;
  if (mc.name.includes('Event=')) {
    const size = mc.name.includes('Size=S') ? 'S' : mc.name.includes('Size=M') ? 'M' : 'L';
    target = set.findChild((c) => {
      if (c.type !== 'COMPONENT' || !c.name.includes('Type=Primary')) return false;
      if (!c.name.includes(`Size=${size}`)) return false;
      if (!c.name.includes('Icon=None') || !c.name.includes('Kind=Standard')) return false;
      if (enabled) return c.name.includes('Disable=No') && /\bEvent=Default\b/.test(c.name);
      return c.name.includes('Disable=Yes') && c.name.includes('Event=Disabled');
    });
  } else {
    const sizeToken = mc.name.includes('Size=Small')
      ? 'Small'
      : mc.name.includes('Size=Large')
        ? 'Large'
        : 'Default';
    target = set.findChild((c) => {
      if (c.type !== 'COMPONENT' || !c.name.includes('Type=Primary')) return false;
      if (!c.name.includes(`Size=${sizeToken}`) || !c.name.includes('Plain=False')) return false;
      if (enabled) return c.name.includes('State=Default');
      return c.name.includes('State=Disable');
    });
  }
  if (target) btn.swapComponent(target);
  if (!enabled) applyButtonFillDarker(findPrimarySubmitButton(root));
  stretchPrimaryButton(root);
}

function patchFormFields(root, fields) {
  const items = root.findAll((n) => n.type === 'INSTANCE' && n.name === 'Form Item');
  items.slice(0, fields.length).forEach((fi, i) => patchFormItem(fi, fields[i]));
}

function applyFormPreset(root, { zh = false, filled = false } = {}) {
  const isReg = root.name.includes('05');
  let fields;
  if (zh) {
    fields = isReg
      ? filled
        ? FORM_ZH_REG_FILLED
        : FORM_ZH_REG_EMPTY
      : filled
        ? FORM_ZH_FILLED
        : FORM_ZH_EMPTY;
  } else {
    fields = filled ? FORM_FILLED : FORM_EMPTY;
  }
  patchFormFields(root, fields);
  patchPrimaryButtonEnabled(root, filled);
}

async function localizeZh(root) {
  replaceText(root, TEXT_ZH);
  applyFormPreset(root, { zh: true, filled: false });
  patchZhInputInstances(root);
  patchZhButtonsAll(root);
  patchZhDialog(root);
  const drop = await ensureLogoDropdown(root);
  await patchDropdownClosed(drop, '简体中文', root.parent);
  if (root.name.includes('01') || root.name.includes('04')) patchPrimaryButtonLabel(root, '登录');
  if (root.name.includes('05')) patchPrimaryButtonLabel(root, '创建账号');
  centerAuthFooterInFrame(root);
}

async function applyDefaultEn(root) {
  applyFormPreset(root, { zh: false, filled: false });
  const drop = await ensureLogoDropdown(root);
  await patchDropdownClosed(drop, 'English', root.parent);
  centerAuthFooterInFrame(root);
}

function applyEmailError(root, msg) {
  const fi = root.findAll((n) => n.type === 'INSTANCE' && n.name === 'Form Item')[0];
  if (!fi) return;
  const labelInst = fi.findOne((n) => n.name === 'Component/label' && n.type === 'INSTANCE');
  let label = 'Email';
  if (labelInst?.componentProperties?.['Label#5858:23']) {
    const v = labelInst.componentProperties['Label#5858:23'];
    label = typeof v === 'object' && v && 'value' in v ? v.value : v;
  }
  patchFormItem(fi, {
    label,
    defaultText: 'm@example.com ',
    suffix: false,
    filled: false,
    errorMsg: msg,
  });
}

function swapButtonEvent(btn, event) {
  const mc = btn.mainComponent;
  if (!mc || mc.parent?.type !== 'COMPONENT_SET') return;
  const targetName = mc.name.replace('Event=Default', `Event=${event}`);
  const target = mc.parent.findChild((c) => c.type === 'COMPONENT' && c.name === targetName);
  if (target) btn.swapComponent(target);
}

function swapButtonState(btn, state) {
  const mc = btn.mainComponent;
  if (!mc || mc.parent?.type !== 'COMPONENT_SET') return;
  const parts = mc.name.split(',').map((p) => p.trim());
  const next = parts.map((p) => (p.startsWith('State=') ? `State=${state}` : p)).join(', ');
  const target = mc.parent.findChild((c) => c.type === 'COMPONENT' && c.name === next);
  if (target) btn.swapComponent(target);
}

const LIB_DROPDOWN_MENU_SET = 'b17c4cb65e981fbc1e92039679796b7387995826';
const DROPDOWN_MENU_VARIANT = 'Size=Large, Pop-up=None';

let dropdownMenuSetCache = null;

async function getDropdownMenuSet() {
  if (!dropdownMenuSetCache) {
    dropdownMenuSetCache = await figma.importComponentSetByKeyAsync(LIB_DROPDOWN_MENU_SET);
  }
  return dropdownMenuSetCache;
}

async function patchLangMenuInside(drop) {
  const menu = drop.findOne((n) => n.name === 'Dropdown Menu' && n.type === 'INSTANCE');
  if (!menu) return;
  const set = await getDropdownMenuSet();
  const none = set.findChild((c) => c.name === DROPDOWN_MENU_VARIANT);
  if (none && menu.mainComponent?.id !== none.id) {
    try {
      menu.swapComponent(none);
    } catch (_) {}
  }
  const head = menu.findOne((n) => n.name === 'Head');
  if (head) head.visible = false;
  const arrow = menu.findOne((n) => n.name === 'arrow');
  if (arrow) arrow.visible = false;
  const opts = menu.findAll(
    (n) => n.type === 'INSTANCE' && n.name === 'Component/Dropdown Option',
  );
  const rowSpec = [
    { text: 'English', type: 'Multiple Choice', state: 'Default' },
    { text: '简体中文', type: 'Default', state: 'Hover' },
  ];
  opts.forEach((opt, i) => {
    const spec = rowSpec[i];
    if (!spec) {
      opt.visible = false;
      return;
    }
    opt.visible = true;
    safeSet(opt, {
      Type: spec.type,
      State: spec.state,
      Description: 'False',
      'Text#3045:18': spec.text,
      'HasSubMenu#8952:19': false,
    });
  });
}

async function patchClickLang(root) {
  applyFormPreset(root, { zh: false, filled: false });
  patchPrimaryButtonEnabled(root, false);
  const drop = await ensureLogoDropdown(root);
  if (!drop) return;
  await patchDropdownOpen(drop, 'English', root.parent);
}

async function patchClickFocus(root, focus) {
  if (focus === true) {
    await applyDefaultEn(root);
    const fi = root.findAll((n) => n.type === 'INSTANCE' && n.name === 'Form Item')[0];
    const input = fi?.findOne((n) => n.name === 'Input' && n.type === 'INSTANCE');
    if (input) safeSet(input, { State: 'Focus', Size: 'Large', Input: 'False' });
    return;
  }
  if (focus === 'otp') {
    const otp = root.findOne((n) => n.type === 'INSTANCE' && n.name === 'InputOTP');
    if (otp) otp.setProperties({ Type: 'Outlined' });
  }
  if (focus === 'dialog') {
    const dlg = root.findOne((n) => n.type === 'INSTANCE' && n.name === 'Dialog');
    const dlgBtn = dlg?.findOne(
      (n) => n.type === 'INSTANCE' && n.name === 'Button' && n.height >= 32,
    );
    if (dlgBtn?.mainComponent?.name.includes('Event=')) swapButtonEvent(dlgBtn, 'Press');
    else if (dlgBtn) swapButtonState(dlgBtn, 'Press');
  }
}

async function applyVariant(root, kind, screen) {
  resetInputs(root);
  if (kind === 'default') await applyDefaultEn(root);
  if (kind === 'filled') applyFormPreset(root, { zh: false, filled: true });
  if (kind === 'zh') await localizeZh(root);
  if (kind === 'error-en') {
    await applyDefaultEn(root);
    applyEmailError(root, 'Please enter your email');
    patchPrimaryButtonEnabled(root, false);
  }
  if (kind === 'error-zh') {
    await localizeZh(root);
    applyEmailError(root, '请输入邮箱');
    patchPrimaryButtonEnabled(root, false);
  }
  if (kind === 'click-lang') await patchClickLang(root);
  if (kind === 'click-focus') await patchClickFocus(root, screen.focus);
}

/** `rebuild` 重生整表；`patch` 仅修补报错文案 + 语言下拉 + 按钮/表单规则 */
const RUN_MODE = 'rebuild';

const page = figma.root.children.find((p) => p.name === '固定模版' || p.id === '0:1') || figma.root.children[0];
await figma.setCurrentPageAsync(page);
removeOrphanPageDropdowns(page);
await loadFonts();
await getArrowDownBorder();

const removedClickBtn = [];
for (const n of [...page.children]) {
  if (n.type === 'FRAME' && n.name.endsWith('-点击-主按钮')) {
    removedClickBtn.push(n.name);
    n.remove();
  }
}

if (RUN_MODE === 'patch') {
  const patched = { errors: [], lang: [], forms: [] };
  for (const frame of page.children) {
    if (frame.type !== 'FRAME') continue;
    const screen = SCREENS.find((s) => frame.name === s.name || frame.name.startsWith(`${s.name}-`));
    if (frame.name.includes('-报错')) {
      const isZh = frame.name.includes('报错-中文');
      resetInputs(frame);
      if (isZh) {
        await localizeZh(frame);
        applyEmailError(frame, '请输入邮箱');
      } else {
        await applyDefaultEn(frame);
        applyEmailError(frame, 'Please enter your email');
      }
      patchPrimaryButtonEnabled(frame, false);
      patched.errors.push(frame.name);
      continue;
    }
    if (frame.name.endsWith('-点击-语言')) {
      await patchClickLang(frame);
      patched.lang.push(frame.name);
      continue;
    }
    if (!frame.name.includes('-') || frame.name.endsWith('-中文')) {
      if (frame.name.endsWith('-中文')) await localizeZh(frame);
      else await applyDefaultEn(frame);
      patched.forms.push(frame.name);
      continue;
    }
    if (frame.name.endsWith('-点击-输入聚焦') && screen) {
      resetInputs(frame);
      await applyVariant(frame, 'click-focus', screen);
      patched.forms.push(frame.name);
    }
  }
  const zhLocalized = [];
  for (const frame of page.children) {
    if (frame.type !== 'FRAME' || !frame.name.includes('中文')) continue;
    const hadError = frame.name.includes('-报错');
    await localizeZh(frame);
    if (hadError) {
      applyEmailError(frame, '请输入邮箱');
      patchPrimaryButtonEnabled(frame, false);
    }
    zhLocalized.push(frame.name);
  }
  removeOrphanPageDropdowns(page);
  const blueFixed = fixPageLegacyBlues(page);
  const footerCentered = centerAuthFootersOnPage(page);
  return {
    mode: 'patch',
    removedClickBtn,
    patchedErrorCount: patched.errors.length,
    patchedLangCount: patched.lang.length,
    patchedForms: patched.forms.length,
    errors: patched.errors,
    lang: patched.lang,
    forms: patched.forms,
    orphanDropdownsRemoved: true,
    legacyBlueNodesFixed: blueFixed,
    authFooterFramesCentered: footerCentered,
    zhLocalized,
  };
}

const bases = {};
for (const s of SCREENS) {
  const b = findBaseFrame(page, s.name);
  if (b) {
    resetInputs(b);
    await applyDefaultEn(b);
    bases[s.name] = b;
  }
}

for (const n of [...page.children]) {
  if (n.type !== 'FRAME') continue;
  if (SCREENS.some((s) => s.name === n.name)) continue;
  n.remove();
}

const created = [];

for (let col = 0; col < SCREENS.length; col++) {
  const screen = SCREENS[col];
  const src = bases[screen.name];
  if (!src) continue;

  let row = 0;
  for (const v of VARIANTS) {
    if (v.needsFormError && !screen.formError) continue;
    if (v.needsFormFields && !screen.hasForm) continue;
    if (v.kind === 'click-focus' && (screen.focus === false || screen.focus === undefined)) continue;

    let frame;
    if (v.suffix === '') {
      frame = src;
      frame.name = screen.name;
    } else {
      frame = src.clone();
      frame.name = `${screen.name}${v.suffix}`;
      page.appendChild(frame);
      await applyVariant(frame, v.kind, screen);
    }
    frame.x = col * (FW + GAP_X);
    frame.y = row * (FH + GAP_Y);
    row += 1;
    created.push({ name: frame.name, id: frame.id, col, row: row - 1 });
  }
}

removeOrphanPageDropdowns(page);
const blueFixed = fixPageLegacyBlues(page);
const footerCentered = centerAuthFootersOnPage(page);

return {
  pageId: page.id,
  layout: '6 columns (01→06), variants stacked by naming order',
  createdCount: created.length,
  created: created.map((c) => ({ name: c.name, id: c.id })),
  legacyBlueNodesFixed: blueFixed,
  authFooterFramesCentered: footerCentered,
};