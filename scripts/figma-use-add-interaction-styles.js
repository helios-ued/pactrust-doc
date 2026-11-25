// use_figma @ hVUwZpK4E52BzbhYTQIi4j — 交互样张：中文界面 + 输入框报错（基于已定稿 21:* 克隆）

const GAP_X = 64;
const GAP_Y = 120;
const FW = 1920;
const FH = 1080;

const BASE_NAMES = [
  { name: '01-登录', col: 0, row: 0 },
  { name: '02-验证码', col: 1, row: 0 },
  { name: '03-图形验证码', col: 2, row: 0 },
  { name: '04-后台登录', col: 0, row: 1 },
  { name: '05-后台注册', col: 1, row: 1 },
  { name: '06-后台验证', col: 2, row: 1 },
];

function findBaseFrame(page, name) {
  const matches = page.children.filter((n) => n.type === 'FRAME' && n.name === name);
  if (matches.length === 0) return null;
  if (matches.length > 1) {
    matches.sort((a, b) => a.id.localeCompare(b.id));
    for (let i = 1; i < matches.length; i++) matches[i].remove();
  }
  return matches[0];
}

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

const FORM_ZH = [
  { label: '邮箱', defaultText: 'm@example.com ', suffix: false },
  { label: '密码', defaultText: '请输入 ', suffix: true },
];
const FORM_ZH_REGISTER = [
  { label: '邮箱', defaultText: 'm@example.com', suffix: false },
  { label: '密码', defaultText: '请输入 ', suffix: true },
  { label: '确认密码', defaultText: '请输入 ', suffix: true },
];

async function loadFonts() {
  const list = [
    ['Inter', 'Regular'],
    ['Inter', 'Medium'],
    ['Inter', 'Semi Bold'],
    ['Inter', 'Bold'],
    ['Noto Sans SC', 'Regular'],
    ['Noto Sans SC', 'Medium'],
  ];
  for (const [family, style] of list) {
    try {
      await figma.loadFontAsync({ family, style });
    } catch (_) {
      /* optional on remote */
    }
  }
}

const NOTO_SC = { family: 'Noto Sans SC', style: 'Regular' };
const UNAVAILABLE_FONTS = new Set(['PingFang SC', 'PingFang TC', 'Microsoft YaHei']);

function remapPingFang(textNode) {
  if (textNode.fontName === figma.mixed) return;
  if (UNAVAILABLE_FONTS.has(textNode.fontName.family)) {
    textNode.fontName = NOTO_SC;
  }
}

async function loadFontsFromNode(root) {
  try {
    await figma.loadFontAsync(NOTO_SC);
  } catch (_) {}
  try {
    await figma.loadFontAsync({
      family: 'Inter',
      style: 'Regular',
      variationSettings: { wght: 400, slnt: 0 },
    });
  } catch (_) {}
  for (const fi of root.findAll((n) => n.type === 'INSTANCE' && n.name === 'Form Item')) {
    for (const t of fi.findAll((n) => n.type === 'TEXT')) {
      remapPingFang(t);
    }
    const inputInst = fi.findOne(
      (n) => n.type === 'INSTANCE' && (n.name === 'Input' || n.name === 'input'),
    );
    if (!inputInst) continue;
    for (const t of inputInst.findAll((n) => n.type === 'TEXT')) {
      remapPingFang(t);
    }
  }
  for (const t of root.findAll((n) => n.type === 'TEXT')) {
    remapPingFang(t);
    if (t.fontName !== figma.mixed) {
      try {
        await figma.loadFontAsync(t.fontName);
      } catch (_) {}
    }
  }
}

function patchDropdownLang(inst, lang) {
  const tb = inst.findOne((n) => n.type === 'INSTANCE' && n.name === 'Text-button');
  if (tb) tb.setProperties({ 'Text#5837:0': lang });
}

function patchFormItem(fi, { label, defaultText, suffix, error }) {
  const labelInst = fi.findOne((n) => n.name === 'Component/label' && n.type === 'INSTANCE');
  const inputInst = fi.findOne((n) => n.name === 'Input' && n.type === 'INSTANCE');
  if (fi.componentProperties?.['Show Prompt#3153:36'] !== undefined) {
    fi.setProperties({ 'Show Prompt#3153:36': false });
  }
  if (labelInst) {
    labelInst.setProperties({
      'Label#5858:23': label,
      'Required#6178:0': false,
      'Info#6178:7': false,
    });
  }
  if (inputInst) {
    inputInst.setProperties({
      'Default-text#2941:64': defaultText,
      'Suffix-icon#2941:32': suffix,
      State: error ? 'Error' : 'Default',
      Size: 'Large',
      Input: 'False',
      'Show-prompt#3376:0': !!error,
      'Prompt-text#3376:61': error || 'This is the prompt',
    });
  }
}

function replaceText(root, map) {
  const texts = root.findAll((n) => n.type === 'TEXT');
  for (const t of texts) {
    const next = map[t.characters];
    if (next !== undefined && t.fontName !== figma.mixed) {
      if (/[\u3040-\u9fff]/.test(next) && t.fontName.family === 'Inter') {
        t.fontName = NOTO_SC;
      }
      t.characters = next;
    }
  }
}

function patchPrimaryButton(root, label) {
  const btn = root.findOne(
    (n) => n.type === 'INSTANCE' && n.name === 'Button' && n.height >= 36 && n.width > 200,
  );
  if (!btn) return;
  if (btn.componentProperties?.['Text#5832:1']) {
    btn.setProperties({ 'Text#5832:1': label });
    return;
  }
  const text = btn.findOne((n) => n.type === 'TEXT');
  if (text) text.characters = label;
}

function patchLoginFormsZh(root, threeField) {
  const items = root.findAll((n) => n.type === 'INSTANCE' && n.name === 'Form Item');
  const fields = threeField ? FORM_ZH_REGISTER : FORM_ZH;
  fields.forEach((f, i) => {
    if (items[i]) patchFormItem(items[i], f);
  });
}

function localizeZh(root) {
  for (const dd of root.findAll((n) => n.type === 'INSTANCE' && n.name === 'Dropdown Trigger')) {
    patchDropdownLang(dd, '简体中文');
  }
  replaceText(root, TEXT_ZH);
  const isRegister = root.name.includes('05');
  patchLoginFormsZh(root, isRegister);
  if (root.name.includes('01') || root.name.includes('04')) patchPrimaryButton(root, '登录');
  if (root.name.includes('05')) patchPrimaryButton(root, '创建账号');
}

function applyEmailError(root, msg) {
  const items = root.findAll((n) => n.type === 'INSTANCE' && n.name === 'Form Item');
  if (items[0]) {
    const labelInst = items[0].findOne((n) => n.name === 'Component/label' && n.type === 'INSTANCE');
    const label = labelInst?.componentProperties?.['Label#5858:23'];
    const labelVal =
      typeof label === 'object' && label && 'value' in label ? label.value : label || 'Email';
    const inputInst = items[0].findOne((n) => n.name === 'Input' && n.type === 'INSTANCE');
    let defaultText = 'm@example.com ';
    if (inputInst?.componentProperties?.['Default-text#2941:64']) {
      const d = inputInst.componentProperties['Default-text#2941:64'];
      defaultText = typeof d === 'object' && d && 'value' in d ? d.value : d;
    }
    patchFormItem(items[0], {
      label: labelVal,
      defaultText,
      suffix: false,
      error: msg,
    });
  }
}

const page = figma.root.children.find((p) => p.name === '固定模版' || p.id === '0:1') || figma.root.children[0];
await figma.setCurrentPageAsync(page);
await loadFonts();

const rowBase = 0;
const rowZh = 2;
const rowErr = 3;

const created = [];

// remove prior interaction rows if re-run
for (const n of [...page.children]) {
  if (n.name.includes('-中文') || n.name.includes('-报错')) n.remove();
}

for (const b of BASE_NAMES) {
  const src = findBaseFrame(page, b.name);
  if (!src) continue;

  const zh = src.clone();
  zh.name = `${b.name}-中文`;
  page.appendChild(zh);
  zh.x = b.col * (FW + GAP_X);
  zh.y = rowZh * (FH + GAP_Y);
  await loadFontsFromNode(zh);
  localizeZh(zh);
  created.push({ name: zh.name, id: zh.id, kind: 'zh' });
}

const errSpecs = [
  { baseName: '01-登录', name: '01-登录-报错', col: 0, row: rowErr, msg: 'Please enter your email' },
  {
    baseName: '04-后台登录',
    name: '04-后台登录-报错',
    col: 1,
    row: rowErr,
    msg: 'Please enter your email',
  },
];

for (const e of errSpecs) {
  const src = findBaseFrame(page, e.baseName);
  if (!src) continue;
  const err = src.clone();
  err.name = e.name;
  page.appendChild(err);
  err.x = e.col * (FW + GAP_X);
  err.y = e.row * (FH + GAP_Y);
  await loadFontsFromNode(err);
  applyEmailError(err, e.msg);
  created.push({ name: err.name, id: err.id, kind: 'error' });
}

const errZh = [{ baseName: '01-登录', name: '01-登录-中文-报错', col: 2, row: rowErr, msg: '请输入邮箱' }];
for (const e of errZh) {
  const src = findBaseFrame(page, e.baseName);
  if (!src) continue;
  const err = src.clone();
  err.name = e.name;
  page.appendChild(err);
  err.x = e.col * (FW + GAP_X);
  err.y = e.row * (FH + GAP_Y);
  await loadFontsFromNode(err);
  localizeZh(err);
  applyEmailError(err, e.msg);
  created.push({ name: err.name, id: err.id, kind: 'error-zh' });
}

return {
  pageId: page.id,
  pageName: page.name,
  created,
  layout: { rowZh, rowErr, gapX: GAP_X, gapY: GAP_Y },
};