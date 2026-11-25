import { Link } from "@/components/Link/Link";
import { Tag } from "@/components/Tag/Tag";
import type { ReactNode } from "react";

export type DescriptionCell = {
  label: string;
  content?: ReactNode;
  /** 占列数（Copy me 第三行 Address 为 2） */
  span?: 1 | 2;
};

export type DescriptionRow = {
  items: DescriptionCell[];
};

const remarksTags = (
  <span className="pt-desc-item__tags">
    <Tag tagStyle="Default" topic="Light" size="Small">
      Design
    </Tag>
    <Tag tagStyle="Success" topic="Light" size="Small">
      School
    </Tag>
  </span>
);

/** Figma Copy me - light · `6420:51270` */
export const DESCRIPTIONS_COPY_ME: DescriptionRow[] = [
  {
    items: [
      { label: "User name", content: "Element plus" },
      { label: "Telephone", content: "+86 1234567890" },
      { label: "Location", content: "Guangzhou" },
    ],
  },
  {
    items: [
      { label: "Email", content: "1421107302@qq.com" },
      {
        label: "Profile",
        content: (
          <Link href="https://element-plus.org" linkType="Primary" onClick={(e) => e.preventDefault()}>
            https://element-plus.org
          </Link>
        ),
      },
      { label: "Language", content: "English" },
    ],
  },
  {
    items: [
      { label: "Remarks", content: remarksTags },
      {
        label: "Address",
        span: 2,
        content:
          "No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province",
      },
    ],
  },
];
