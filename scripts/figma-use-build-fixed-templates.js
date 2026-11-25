// 轨道 B · 重复生成 · use_figma @ hVUwZpK4E52BzbhYTQIi4j
// 权威源：模块界面 8372:22873…8375:24203（绝对坐标 + 变体；禁止 Auto Layout 猜间距）
// 轨道 A · 定稿：Figma 客户端从模块界面复制粘贴至固定模版页 — 见 docs/MODULE-SCREENS.md「双轨工作流」
// 产出 MCP 载荷：tail -n +2 本文件 > scripts/.figma-use-payload.js

const SET = {
  Button: 'c543c87cdc482197fba9405ac88eeba018704845',
  'Form Item': '56f211725f16f1b6f4e822b7c94a2d353be0afba',
  Checkbox: '4193f35097783b59bc42c8b84573a3d6b8206954',
  'Dropdown Trigger': 'df21be62f6671f661d0dc2bc5ffd88b70e01df64',
  Dropdown: 'a89d6c665ecce46d2cae6843f64b33e90363f20c',
  'Dropdown Menu': 'b17c4cb65e981fbc1e92039679796b7387995826',
  InputOTP: '4f8f872d794f5297d6f3bdaaeef703dda51d835f',
  Dialog: '6fcb8a4c2b690a8e39b5e62360e522b3f30eabc7',
};
const COMP = { 'PaceTrust -logo': 'cf040e19691fdee7b3d556deaf743c3d0618a3bd' };

const PRIMARY_BTN =
  'Type=Primary, Event=Default, Size=L, Icon=None, Kind=Standard, Disable=No, Loading=No';
const TEXT_BTN =
  'Type=Text, Event=Default, Size=L, Icon=Right, Kind=Standard, Disable=No, Loading=No';

const COLOR = {
  pageAdmin: { r: 0.9490196108818054, g: 0.9529411792755127, b: 0.9607843160629272 },
  marketing: { r: 0.6941176652908325, g: 0.7019608020782471, b: 0.7215686440467834 },
  white: { r: 1, g: 1, b: 1 },
};

const setCache = new Map();
const compCache = new Map();

async function importSet(name) {
  if (setCache.has(name)) return setCache.get(name);
  const set = await figma.importComponentSetByKeyAsync(SET[name]);
  setCache.set(name, set);
  return set;
}
async function importComp(name) {
  if (compCache.has(name)) return compCache.get(name);
  const c = await figma.importComponentByKeyAsync(COMP[name]);
  compCache.set(name, c);
  return c;
}
function pickVariant(set, varName) {
  if (!varName) return set.defaultVariant;
  const exact = set.findChild((c) => c.type === 'COMPONENT' && c.name === varName);
  if (exact) return exact;
  const parts = varName.split(',').map((p) => p.trim());
  const fuzzy = set.findChild(
    (c) => c.type === 'COMPONENT' && parts.every((p) => c.name.includes(p)),
  );
  return fuzzy || set.defaultVariant;
}

async function loadInter() {
  await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
  await figma.loadFontAsync({ family: 'Inter', style: 'Medium' });
  await figma.loadFontAsync({ family: 'Inter', style: 'Semi Bold' });
  await figma.loadFontAsync({ family: 'Inter', style: 'Bold' });
}

function solid(fill) {
  return [{ type: 'SOLID', color: { r: fill.r, g: fill.g, b: fill.b }, opacity: fill.o ?? 1 }];
}

function makeFrame(name, w, h, opts = {}) {
  const f = figma.createFrame();
  f.name = name;
  f.resize(w, h);
  f.clipsContent = false;
  if (opts.fill) f.fills = solid(opts.fill);
  if (opts.radius) f.cornerRadius = opts.radius;
  if (opts.al) {
    f.layoutMode = opts.al;
    f.itemSpacing = opts.gap ?? 0;
    if (opts.paa) f.primaryAxisAlignItems = opts.paa;
    if (opts.caa) f.counterAxisAlignItems = opts.caa;
    f.primaryAxisSizingMode = 'FIXED';
    f.counterAxisSizingMode = opts.caa ? 'FIXED' : 'AUTO';
    if (opts.pad) {
      f.paddingTop = opts.pad[0];
      f.paddingRight = opts.pad[1];
      f.paddingBottom = opts.pad[2];
      f.paddingLeft = opts.pad[3];
    }
  }
  return f;
}

async function makeInstance(setName, varName, w, h) {
  if (COMP[setName]) {
    const c = await importComp(setName);
    const inst = c.createInstance();
    if (w && h) inst.resize(w, h);
    return inst;
  }
  const set = await importSet(setName);
  const variant = pickVariant(set, varName);
  const inst = variant.createInstance();
  if (w && h) inst.resize(w, h);
  return inst;
}

function makeText(txt, size, weight) {
  const t = figma.createText();
  t.fontName = { family: 'Inter', style: weight };
  t.fontSize = size;
  t.lineHeight = { unit: 'PIXELS', value: size <= 14 ? 20 : 40 };
  t.characters = txt;
  t.textAutoResize = 'WIDTH_AND_HEIGHT';
  return t;
}

function patchFormItem(fi, { label, defaultText, suffix = false }) {
  if (fi.componentProperties?.['Show Prompt#3153:36'] !== undefined) {
    fi.setProperties({ 'Show Prompt#3153:36': false });
  }
  const labelInst = fi.findOne((n) => n.name === 'Component/label' && n.type === 'INSTANCE');
  const inputInst = fi.findOne((n) => n.name === 'Input' && n.type === 'INSTANCE');
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
      'Show-prompt#3376:0': false,
      'Suffix-icon#2941:32': suffix,
      State: 'Default',
      Size: 'Large',
      Input: 'False',
    });
  }
}

function patchDropdownClosed(drop) {
  if (!drop) return;
  try {
    drop.setProperties({ 'Show-select#4242:0': false });
  } catch (_) {}
  const tb = drop.findOne((n) => n.type === 'INSTANCE' && n.name === 'Text-button');
  if (tb) {
    tb.setProperties({
      Type: 'Default',
      State: 'Default',
      'Text#5837:0': 'English',
      'Left-icon#2936:0': true,
      'Right-icon#2936:98': true,
    });
  }
}

async function logoBar(w) {
  const bar = makeFrame('Logo', w, 80, { fill: COLOR.white });
  const logo = await makeInstance('PaceTrust -logo', null, w <= 960 ? 809 : Math.min(1769, w - 150), 30);
  logo.x = 24;
  logo.y = 25;
  const dd = await makeInstance('Dropdown', 'Type=Text', 140, 32);
  dd.name = 'Dropdown';
  patchDropdownClosed(dd);
  dd.x = w - 24 - dd.width;
  dd.y = 24;
  bar.appendChild(logo);
  bar.appendChild(dd);
  return bar;
}

function makeHeader(title, subtitle) {
  const header = makeFrame('header', 480, 68, { al: 'VERTICAL', gap: 8 });
  header.appendChild(makeText(title, 32, 'Bold'));
  if (subtitle) header.appendChild(makeText(subtitle, 14, 'Regular'));
  return header;
}

function patchButtonLabel(inst, label) {
  if (inst.componentProperties?.['Text#5832:1']) {
    inst.setProperties({ 'Text#5832:1': label });
    return;
  }
  const text = inst.findOne((n) => n.type === 'TEXT' && n.name !== 'text');
  if (text && 'characters' in text) text.characters = label;
  const fallback = inst.findOne((n) => n.type === 'TEXT');
  if (fallback && 'characters' in fallback) fallback.characters = label;
}

async function stackFormItems(parent, w, fields, startY) {
  const formH = fields.length * 72 + (fields.length - 1) * 24;
  const form = makeFrame('Form', w, formH);
  form.x = 0;
  form.y = startY;
  let y = 0;
  for (const f of fields) {
    const fi = await makeInstance('Form Item', 'Layout=Vertical, Type=Input', w, 72);
    patchFormItem(fi, f);
    fi.x = 0;
    fi.y = y;
    form.appendChild(fi);
    y += 96;
  }
  parent.appendChild(form);
  return formH;
}

async function submitLoginBlock(parent, w, btnLabel, footer, submitY) {
  const submit = makeFrame('Submit Block', w, 76, {
    al: 'VERTICAL',
    gap: 16,
    caa: 'CENTER',
    paa: 'MIN',
  });
  submit.x = 0;
  submit.y = submitY;
  const btn = await makeInstance('Button', PRIMARY_BTN, w, 40);
  patchButtonLabel(btn, btnLabel);
  submit.appendChild(btn);
  btn.layoutSizingHorizontal = 'FILL';
  const row = makeFrame('Text', 207, 20, { al: 'HORIZONTAL', gap: 2, caa: 'CENTER', paa: 'CENTER' });
  row.appendChild(makeText(footer[0], 14, 'Regular'));
  row.appendChild(makeText(footer[1], 14, 'Regular'));
  submit.appendChild(row);
  parent.appendChild(submit);
}

const LOGIN_FIELDS = [
  { label: 'Email', defaultText: 'm@example.com ', suffix: false },
  { label: 'Password', defaultText: 'Please enter ', suffix: true },
];

async function splitMarketing(name, bgName = 'Background') {
  const root = makeFrame(name, 1920, 1080, { fill: COLOR.white });
  const left = makeFrame('Layout', 960, 1080);
  left.x = 0;
  left.y = 0;
  const logo = await logoBar(960);
  left.appendChild(logo);
  const card = makeFrame('Card', 960, 1000);
  card.x = 0;
  card.y = 80;
  left.appendChild(card);
  const bg = makeFrame(bgName, 960, 1080, { fill: COLOR.marketing });
  bg.x = 960;
  bg.y = 0;
  root.appendChild(left);
  root.appendChild(bg);
  return { root, card };
}

async function build01() {
  const { root, card } = await splitMarketing('01-登录');
  const body = makeFrame('Card Body', 480, 400);
  body.x = 240;
  body.y = 200;
  const header = makeHeader('Welcome to PacsTrust.', 'One Platform, Boundless Finance');
  header.resize(480, 68);
  header.x = 0;
  header.y = 0;
  body.appendChild(header);
  await stackFormItems(body, 480, LOGIN_FIELDS, 108);
  await submitLoginBlock(body, 480, 'Login', ["Don't have an account? ", 'Sign up'], 316);
  card.appendChild(body);
  return root;
}

async function buildOtpBody(name, bodyH, fieldH, contentName, bgName = 'Background') {
  const { root, card } = await splitMarketing(name, bgName);
  const body = makeFrame('Card Body', 480, bodyH);
  body.x = 240;
  body.y = 200;
  const header = makeFrame('header', 480, 68, { al: 'VERTICAL', gap: 8 });
  header.appendChild(makeText('Enter verification code.', 32, 'Bold'));
  const resend = makeFrame('Frame 22', 122, 20, { al: 'HORIZONTAL', gap: 8, caa: 'CENTER' });
  resend.appendChild(makeText('Resend Code', 14, 'Regular'));
  resend.appendChild(makeText('56s', 14, 'Regular'));
  header.appendChild(resend);
  header.x = 0;
  header.y = 0;
  body.appendChild(header);
  const field = makeFrame(contentName === 'Content' ? 'Content' : 'Field', 480, fieldH);
  field.x = 0;
  field.y = 108;
  const otp = await makeInstance('InputOTP', 'Type=Outlined', 480, 64);
  otp.x = 0;
  otp.y = 0;
  field.appendChild(otp);
  const link = makeFrame(contentName === 'Content' ? 'Flex' : 'Submit Block', 259, 20, {
    al: 'HORIZONTAL',
    gap: 8,
    caa: 'CENTER',
  });
  link.x = 0;
  link.y = 88;
  link.appendChild(makeText('Switch to', 14, 'Regular'));
  const btn = await makeInstance('Button', TEXT_BTN, 188, 20);
  patchButtonLabel(btn, 'Authenticator Verification');
  link.appendChild(btn);
  field.appendChild(link);
  body.appendChild(field);
  card.appendChild(body);
  return root;
}

async function build02() {
  return buildOtpBody('02-验证码', 216, 108, 'Field');
}

async function build03() {
  const inner = await buildOtpBody('02-验证码', 216, 108, 'Content', 'Img');
  inner.name = '01-登录';
  const wrap = makeFrame('03-图形验证码', 1920, 1080);
  inner.x = 0;
  inner.y = 0;
  wrap.appendChild(inner);
  const overlay = makeFrame('Overlay', 1920, 1080, { fill: { r: 0, g: 0, b: 0, o: 0.5 } });
  wrap.appendChild(overlay);
  const dialog = await makeInstance('Dialog', 'Title-center=off', 387, 228);
  dialog.setProperties({
    'Text#3144:3': 'Please enter image captcha',
    'Show-button#3144:9': true,
    'Title-icon#3144:0': false,
    'Title-center': 'off',
  });
  dialog.x = 766;
  dialog.y = 427;
  wrap.appendChild(dialog);
  return wrap;
}

async function buildAdmin(
  name,
  title,
  subtitle,
  fields,
  btnLabel,
  cardY,
  cardH,
  footer,
) {
  const root = makeFrame(name, 1920, 1080, { fill: COLOR.pageAdmin });
  root.appendChild(await logoBar(1920));
  const layout = makeFrame('Layout', 1920, 1000);
  layout.x = 0;
  layout.y = 80;
  const card = makeFrame('Card', 480, cardH, { fill: COLOR.white, radius: 20 });
  card.x = 720;
  card.y = cardY;
  const header = makeFrame('header', 416, 68, { al: 'VERTICAL', gap: 8 });
  header.x = 32;
  header.y = 40;
  header.appendChild(makeText(title, 32, 'Bold'));
  if (subtitle) header.appendChild(makeText(subtitle, 14, 'Regular'));
  card.appendChild(header);
  const formH = await stackFormItems(card, 416, fields, 148);
  const submitY = 148 + formH + 40;
  await submitLoginBlock(card, 416, btnLabel, footer, submitY);
  layout.appendChild(card);
  root.appendChild(layout);
  return root;
}

async function build06() {
  const root = makeFrame('06-后台验证', 1920, 1080, { fill: COLOR.pageAdmin });
  root.appendChild(await logoBar(1920));
  const layout = makeFrame('Layout', 1920, 1000);
  layout.x = 0;
  layout.y = 80;
  const card = makeFrame('Card', 480, 344, { fill: COLOR.white, radius: 20 });
  card.x = 720;
  card.y = 200;
  const header = makeFrame('header', 416, 68, { al: 'VERTICAL', gap: 8 });
  header.x = 32;
  header.y = 40;
  header.appendChild(makeText('Enter verification code.', 32, 'Bold'));
  const resend = makeFrame('Frame 22', 122, 20, { al: 'HORIZONTAL', gap: 8, caa: 'CENTER' });
  resend.appendChild(makeText('Resend Code', 14, 'Regular'));
  resend.appendChild(makeText('56s', 14, 'Regular'));
  header.appendChild(resend);
  card.appendChild(header);
  const field = makeFrame('Field', 416, 156);
  field.x = 32;
  field.y = 148;
  const otp = await makeInstance('InputOTP', 'Type=Outlined', 416, 64);
  otp.x = 0;
  otp.y = 24;
  field.appendChild(otp);
  const link = makeFrame('Text', 259, 20, { al: 'HORIZONTAL', gap: 8, caa: 'CENTER' });
  link.x = 0;
  link.y = 112;
  link.appendChild(makeText('Switch to', 14, 'Regular'));
  const btn = await makeInstance('Button', TEXT_BTN, 188, 20);
  patchButtonLabel(btn, 'Authenticator Verification');
  link.appendChild(btn);
  field.appendChild(link);
  card.appendChild(field);
  layout.appendChild(card);
  root.appendChild(layout);
  return root;
}

const page = figma.root.children[0];
await figma.setCurrentPageAsync(page);
page.name = '固定模版';

for (const n of [...page.children]) n.remove();

await loadInter();

const gapX = 64;
const gapY = 120;
const specs = [
  { build: build01, col: 0, row: 0 },
  { build: build02, col: 1, row: 0 },
  { build: build03, col: 2, row: 0 },
  {
    build: () =>
      buildAdmin(
        '04-后台登录',
        'Welcome to PacsTrust.',
        'One Platform, Boundless Finance',
        LOGIN_FIELDS,
        'Login',
        264,
        472,
        ["Don't have an account? ", 'Sign up'],
      ),
    col: 0,
    row: 1,
  },
  {
    build: () =>
      buildAdmin(
        '05-后台注册',
        'Create an account.',
        'Enter your information below to create your account',
        [
          { label: 'Email', defaultText: 'm@example.com', suffix: false },
          { label: 'Password', defaultText: 'Please enter ', suffix: true },
          { label: 'Confirm Password', defaultText: 'Please enter ', suffix: true },
        ],
        'Create Account',
        200,
        568,
        ['Already have an account? ', 'Login'],
      ),
    col: 1,
    row: 1,
  },
  { build: build06, col: 2, row: 1 },
];

const created = [];
for (const s of specs) {
  const frame = await s.build();
  page.appendChild(frame);
  frame.x = s.col * (1920 + gapX);
  frame.y = s.row * (1080 + gapY);
  created.push({ name: frame.name, id: frame.id });
}

return {
  pageId: page.id,
  created,
  note: '1:1 layout coords from module screens; publish TPL/* in library for component import',
};