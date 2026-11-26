import { getShowcaseProduct } from "@/showcase/showcaseProduct";

/** pactrust-doc 构建：整站为可交付中台原型（无 Showcase 文档壳） */
export function isPrototypeDelivery(): boolean {
  return getShowcaseProduct() === "doc";
}