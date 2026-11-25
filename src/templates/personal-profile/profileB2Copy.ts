export type ProfileB2Locale = "zh" | "en";

export type ProfileB2Field = {
  id: string;
  label: string;
  value: string;
  span?: 1 | 2;
};

export type ProfileB2Copy = {
  pageTitle: string;
  sectionTitle: string;
  edit: string;
  moreLabel: string;
  avatarEditLabel: string;
  fields: readonly ProfileB2Field[];
};

export const PROFILE_B2_COPY: Record<ProfileB2Locale, ProfileB2Copy> = {
  zh: {
    pageTitle: "我的资料",
    sectionTitle: "个人信息",
    edit: "编辑",
    moreLabel: "更多操作",
    avatarEditLabel: "更换头像",
    fields: [
      { id: "first-name", label: "名", value: "小珊" },
      { id: "last-name", label: "姓", value: "阿尔·加扎利" },
      { id: "email", label: "邮箱", value: "sarahalghazali980@gmail.com" },
      { id: "phone", label: "手机号码", value: "+86 138 0000 8731" },
      { id: "bio", label: "简介", value: "出纳员", span: 2 },
    ],
  },
  en: {
    pageTitle: "My Profile",
    sectionTitle: "Personal information",
    edit: "Edit",
    moreLabel: "More actions",
    avatarEditLabel: "Change photo",
    fields: [
      { id: "first-name", label: "First name", value: "Sarah" },
      { id: "last-name", label: "Last name", value: "Al ghazali" },
      { id: "email", label: "Email", value: "sarahalghazali980@gmail.com" },
      { id: "phone", label: "Phone number", value: "+62 083 9712 8731" },
      { id: "bio", label: "Bio", value: "Operator Cashier", span: 2 },
    ],
  },
};

export const PROFILE_B2_COVER_SRC = "/login-marketing-hero.jpg";