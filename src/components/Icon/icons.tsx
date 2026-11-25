import type { SVGProps } from "react";
import { cn } from "@/lib/cn";
import { EpIconByName } from "./EpIconByName";

type P = SVGProps<SVGSVGElement>;

/** @deprecated 手写 path — 统一走 epIconManifest，与 Figma EP 图标一致 */
function epIconNamed(epName: string) {
  return function IconFromEp(props: P) {
    const size = Number(props.width ?? props.height ?? 16);
    return <EpIconByName name={epName} size={size} className={cn(props.className as string)} />;
  };
}

export const IconSearch = epIconNamed("Search");
export const IconPlus = epIconNamed("Plus");
export const IconClose = epIconNamed("Close");
export const IconCheck = epIconNamed("Check");
export const IconArrowRight = epIconNamed("ArrowRight");
export const IconArrowLeft = epIconNamed("ArrowLeft");
export const IconArrowDown = epIconNamed("ArrowDown");
export const IconUpload = epIconNamed("Upload");
export const IconDownload = epIconNamed("Download");
export const IconEdit = epIconNamed("Edit");
export const IconDelete = epIconNamed("Delete");
export const IconShare = epIconNamed("Share");
export const IconLock = epIconNamed("Lock");
export const IconUnlock = epIconNamed("Unlock");
export const IconUser = epIconNamed("User");
export const IconSetting = epIconNamed("Setting");
export const IconHome = epIconNamed("House");
export const IconBell = epIconNamed("Bell");
export const IconMessage = epIconNamed("Message");
export const IconCalendar = epIconNamed("Calendar");
export const IconDocument = epIconNamed("Document");
export const IconFolder = epIconNamed("Folder");
export const IconView = epIconNamed("View");
export const IconHide = epIconNamed("Hide");
export const IconStar = epIconNamed("Star");
export const IconRefresh = epIconNamed("Refresh");
export const IconLink = epIconNamed("Link");
export const IconPicture = epIconNamed("Picture");
export const IconWarning = epIconNamed("Warning");
export const IconInfo = epIconNamed("InfoFilled");
export const IconCircleCheck = epIconNamed("CircleCheck");
export const IconCircleClose = epIconNamed("CircleClose");

export const iconCatalog = {
  Search: IconSearch,
  Plus: IconPlus,
  Close: IconClose,
  Check: IconCheck,
  ArrowRight: IconArrowRight,
  ArrowLeft: IconArrowLeft,
  ArrowDown: IconArrowDown,
  Upload: IconUpload,
  Download: IconDownload,
  Edit: IconEdit,
  Delete: IconDelete,
  Share: IconShare,
  Lock: IconLock,
  Unlock: IconUnlock,
  User: IconUser,
  Setting: IconSetting,
  Home: IconHome,
  Bell: IconBell,
  Message: IconMessage,
  Calendar: IconCalendar,
  Document: IconDocument,
  Folder: IconFolder,
  View: IconView,
  Hide: IconHide,
  Star: IconStar,
  Refresh: IconRefresh,
  Link: IconLink,
  Picture: IconPicture,
  Warning: IconWarning,
  Info: IconInfo,
  CircleCheck: IconCircleCheck,
  CircleClose: IconCircleClose,
} as const;

export type IconName = keyof typeof iconCatalog;
