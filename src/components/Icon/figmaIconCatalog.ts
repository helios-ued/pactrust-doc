/* AUTO-GENERATED — node scripts/generate-figma-icon-catalog.mjs */
import type { EpIconManifestItem } from "./epIconManifest";
import { epIconManifest } from "./epIconManifest";

export type FigmaEpCatalogIcon = {
  kind: "ep";
  rawName: string;
  name: string;
  id: string;
  missing?: boolean;
};

export type FigmaEdsCatalogIcon = {
  kind: "eds";
  id: string;
  figmaName: string;
  slug: string;
  nodeId: string;
  svg: string;
};

export type FigmaIconCategory =
  | { kind: "ep"; id: string; label: string; icons: FigmaEpCatalogIcon[] }
  | { kind: "eds"; id: string; label: string; icons: FigmaEdsCatalogIcon[] };

export const figmaEpCategories = [
  {
    "id": "System",
    "label": "System",
    "icons": [
      {
        "rawName": "Plus",
        "name": "Plus",
        "id": "ep-plus",
        "missing": false
      },
      {
        "rawName": "Minus",
        "name": "Minus",
        "id": "ep-minus",
        "missing": false
      },
      {
        "rawName": "CirclePlus",
        "name": "CirclePlus",
        "id": "ep-circle-plus",
        "missing": false
      },
      {
        "rawName": "Remove",
        "name": "Remove",
        "id": "ep-remove",
        "missing": false
      },
      {
        "rawName": "Search",
        "name": "Search",
        "id": "ep-search",
        "missing": false
      },
      {
        "rawName": "Female",
        "name": "Female",
        "id": "ep-female",
        "missing": false
      },
      {
        "rawName": "Male",
        "name": "Male",
        "id": "ep-male",
        "missing": false
      },
      {
        "rawName": "Aim",
        "name": "Aim",
        "id": "ep-aim",
        "missing": false
      },
      {
        "rawName": "House",
        "name": "House",
        "id": "ep-house",
        "missing": false
      },
      {
        "rawName": "FullScreen",
        "name": "FullScreen",
        "id": "ep-full-screen",
        "missing": false
      },
      {
        "rawName": "Loading",
        "name": "Loading",
        "id": "ep-loading",
        "missing": false
      },
      {
        "rawName": "Link",
        "name": "Link",
        "id": "ep-link",
        "missing": false
      },
      {
        "rawName": "Service",
        "name": "Service",
        "id": "ep-service",
        "missing": false
      },
      {
        "rawName": "Pointer",
        "name": "Pointer",
        "id": "ep-pointer",
        "missing": false
      },
      {
        "rawName": "Star",
        "name": "Star",
        "id": "ep-star",
        "missing": false
      },
      {
        "rawName": "Notification",
        "name": "Bell",
        "id": "ep-bell",
        "missing": false
      },
      {
        "rawName": "ChatDotRound",
        "name": "ChatDotRound",
        "id": "ep-chat-dot-round",
        "missing": false
      },
      {
        "rawName": "ChatSquare",
        "name": "ChatLineSquare",
        "id": "ep-chat-line-square",
        "missing": false
      },
      {
        "rawName": "ChatRound",
        "name": "ChatRound",
        "id": "ep-chat-round",
        "missing": false
      },
      {
        "rawName": "ChatLineRound",
        "name": "ChatLineRound",
        "id": "ep-chat-line-round",
        "missing": false
      },
      {
        "rawName": "ChatLineSquare",
        "name": "ChatLineSquare",
        "id": "ep-chat-line-square",
        "missing": false
      },
      {
        "rawName": "ChatDotSquare",
        "name": "ChatDotSquare",
        "id": "ep-chat-dot-square",
        "missing": false
      },
      {
        "rawName": "Odometer",
        "name": "Odometer",
        "id": "ep-odometer",
        "missing": false
      },
      {
        "rawName": "Aim",
        "name": "Aim",
        "id": "ep-aim",
        "missing": false
      },
      {
        "rawName": "Position",
        "name": "Position",
        "id": "ep-position",
        "missing": false
      },
      {
        "rawName": "Clock",
        "name": "Clock",
        "id": "ep-clock",
        "missing": false
      },
      {
        "rawName": "Setting",
        "name": "Setting",
        "id": "ep-setting",
        "missing": false
      },
      {
        "rawName": "Connection",
        "name": "Connection",
        "id": "ep-connection",
        "missing": false
      },
      {
        "rawName": "View",
        "name": "View",
        "id": "ep-view",
        "missing": false
      },
      {
        "rawName": "Hide",
        "name": "Hide",
        "id": "ep-hide",
        "missing": false
      },
      {
        "rawName": "Unlock",
        "name": "Unlock",
        "id": "ep-unlock",
        "missing": false
      },
      {
        "rawName": "Notification",
        "name": "Bell",
        "id": "ep-bell",
        "missing": false
      },
      {
        "rawName": "RefreshRight",
        "name": "RefreshRight",
        "id": "ep-refresh-right",
        "missing": false
      },
      {
        "rawName": "RefreshLeft",
        "name": "RefreshLeft",
        "id": "ep-refresh-left",
        "missing": false
      },
      {
        "rawName": "Refresh",
        "name": "Refresh",
        "id": "ep-refresh",
        "missing": false
      },
      {
        "rawName": "Bell",
        "name": "Bell",
        "id": "ep-bell",
        "missing": false
      },
      {
        "rawName": "MuteNotification",
        "name": "MuteNotification",
        "id": "ep-mute-notification",
        "missing": false
      },
      {
        "rawName": "User",
        "name": "User",
        "id": "ep-user",
        "missing": false
      },
      {
        "rawName": "Check",
        "name": "Check",
        "id": "ep-check",
        "missing": false
      },
      {
        "rawName": "CircleCheck",
        "name": "CircleCheck",
        "id": "ep-circle-check",
        "missing": false
      },
      {
        "rawName": "Warning",
        "name": "Warning",
        "id": "ep-warning",
        "missing": false
      },
      {
        "rawName": "CircleClose",
        "name": "CircleClose",
        "id": "ep-circle-close",
        "missing": false
      },
      {
        "rawName": "Close",
        "name": "Close",
        "id": "ep-close",
        "missing": false
      },
      {
        "rawName": "PieChart",
        "name": "PieChart",
        "id": "ep-pie-chart",
        "missing": false
      },
      {
        "rawName": "More",
        "name": "More",
        "id": "ep-more",
        "missing": false
      },
      {
        "rawName": "Compass",
        "name": "Compass",
        "id": "ep-compass",
        "missing": false
      },
      {
        "rawName": "Filter",
        "name": "Filter",
        "id": "ep-filter",
        "missing": false
      },
      {
        "rawName": "Switch",
        "name": "Switch",
        "id": "ep-switch",
        "missing": false
      },
      {
        "rawName": "Select",
        "name": "Select",
        "id": "ep-select",
        "missing": false
      },
      {
        "rawName": "SemiSelect",
        "name": "SemiSelect",
        "id": "ep-semi-select",
        "missing": false
      },
      {
        "rawName": "CloseBold",
        "name": "CloseBold",
        "id": "ep-close-bold",
        "missing": false
      },
      {
        "rawName": "EditPen",
        "name": "EditPen",
        "id": "ep-edit-pen",
        "missing": false
      },
      {
        "rawName": "Edit",
        "name": "Edit",
        "id": "ep-edit",
        "missing": false
      },
      {
        "rawName": "Message",
        "name": "Message",
        "id": "ep-message",
        "missing": false
      },
      {
        "rawName": "MessageBox",
        "name": "MessageBox",
        "id": "ep-message-box",
        "missing": false
      },
      {
        "rawName": "Finished",
        "name": "Finished",
        "id": "ep-finished",
        "missing": false
      },
      {
        "rawName": "TurnOff",
        "name": "TurnOff",
        "id": "ep-turn-off",
        "missing": false
      },
      {
        "rawName": "Open",
        "name": "Open",
        "id": "ep-open",
        "missing": false
      },
      {
        "rawName": "Delete",
        "name": "Delete",
        "id": "ep-delete",
        "missing": false
      },
      {
        "rawName": "Crop",
        "name": "Crop",
        "id": "ep-crop",
        "missing": false
      },
      {
        "rawName": "Operation",
        "name": "Operation",
        "id": "ep-operation",
        "missing": false
      },
      {
        "rawName": "ZoomOut",
        "name": "ZoomOut",
        "id": "ep-zoom-out",
        "missing": false
      },
      {
        "rawName": "ZoomIn",
        "name": "ZoomIn",
        "id": "ep-zoom-in",
        "missing": false
      },
      {
        "rawName": "InfoFilled",
        "name": "InfoFilled",
        "id": "ep-info-filled",
        "missing": false
      },
      {
        "rawName": "CircleCheckFilled",
        "name": "CircleCheckFilled",
        "id": "ep-circle-check-filled",
        "missing": false
      },
      {
        "rawName": "WarningFilled",
        "name": "WarningFilled",
        "id": "ep-warning-filled",
        "missing": false
      },
      {
        "rawName": "CircleCloseFilled",
        "name": "CircleCloseFilled",
        "id": "ep-circle-close-filled",
        "missing": false
      },
      {
        "rawName": "QuestionFilled",
        "name": "QuestionFilled",
        "id": "ep-question-filled",
        "missing": false
      },
      {
        "rawName": "WarnTriangleFilled",
        "name": "WarnTriangleFilled",
        "id": "ep-warn-triangle-filled",
        "missing": false
      },
      {
        "rawName": "UserFilled",
        "name": "UserFilled",
        "id": "ep-user-filled",
        "missing": false
      },
      {
        "rawName": "MoreFilled",
        "name": "MoreFilled",
        "id": "ep-more-filled",
        "missing": false
      },
      {
        "rawName": "Tools",
        "name": "Tools",
        "id": "ep-tools",
        "missing": false
      },
      {
        "rawName": "House",
        "name": "House",
        "id": "ep-house",
        "missing": false
      },
      {
        "rawName": "FullScreen",
        "name": "FullScreen",
        "id": "ep-full-screen",
        "missing": false
      },
      {
        "rawName": "Loading",
        "name": "Loading",
        "id": "ep-loading",
        "missing": false
      },
      {
        "rawName": "Link",
        "name": "Link",
        "id": "ep-link",
        "missing": false
      },
      {
        "rawName": "Service",
        "name": "Service",
        "id": "ep-service",
        "missing": false
      },
      {
        "rawName": "Pointer",
        "name": "Pointer",
        "id": "ep-pointer",
        "missing": false
      },
      {
        "rawName": "Star",
        "name": "Star",
        "id": "ep-star",
        "missing": false
      },
      {
        "rawName": "Notification",
        "name": "Bell",
        "id": "ep-bell",
        "missing": false
      },
      {
        "rawName": "Histogram",
        "name": "Histogram",
        "id": "ep-histogram",
        "missing": false
      },
      {
        "rawName": "Grid",
        "name": "Grid",
        "id": "ep-grid",
        "missing": false
      },
      {
        "rawName": "Promotion",
        "name": "Promotion",
        "id": "ep-promotion",
        "missing": false
      },
      {
        "rawName": "DeleteFilled",
        "name": "DeleteFilled",
        "id": "ep-delete-filled",
        "missing": false
      },
      {
        "rawName": "RemoveFilled",
        "name": "RemoveFilled",
        "id": "ep-remove-filled",
        "missing": false
      },
      {
        "rawName": "CirclePlusFilled",
        "name": "CirclePlusFilled",
        "id": "ep-circle-plus-filled",
        "missing": false
      },
      {
        "rawName": "SwitchButton",
        "name": "SwitchButton",
        "id": "ep-switch-button",
        "missing": false
      }
    ],
    "kind": "ep"
  },
  {
    "id": "Arrow",
    "label": "Arrow",
    "icons": [
      {
        "rawName": "ArrowLeft",
        "name": "ArrowLeft",
        "id": "ep-arrow-left",
        "missing": false
      },
      {
        "rawName": "ArrowUp",
        "name": "ArrowUp",
        "id": "ep-arrow-up",
        "missing": false
      },
      {
        "rawName": "ArrowRight",
        "name": "ArrowRight",
        "id": "ep-arrow-right",
        "missing": false
      },
      {
        "rawName": "ArrowDown",
        "name": "ArrowDown",
        "id": "ep-arrow-down",
        "missing": false
      },
      {
        "rawName": "ArrowLeftBold",
        "name": "ArrowLeftBold",
        "id": "ep-arrow-left-bold",
        "missing": false
      },
      {
        "rawName": "ArrowUpBold",
        "name": "ArrowUpBold",
        "id": "ep-arrow-up-bold",
        "missing": false
      },
      {
        "rawName": "ArrowRightBold",
        "name": "ArrowRightBold",
        "id": "ep-arrow-right-bold",
        "missing": false
      },
      {
        "rawName": "ArrowDownBold",
        "name": "ArrowDownBold",
        "id": "ep-arrow-down-bold",
        "missing": false
      },
      {
        "rawName": "DArrowRight",
        "name": "DArrowRight",
        "id": "ep-darrow-right",
        "missing": false
      },
      {
        "rawName": "DArrowLeft",
        "name": "DArrowLeft",
        "id": "ep-darrow-left",
        "missing": false
      },
      {
        "rawName": "Download",
        "name": "Download",
        "id": "ep-download",
        "missing": false
      },
      {
        "rawName": "Upload",
        "name": "Upload",
        "id": "ep-upload",
        "missing": false
      },
      {
        "rawName": "Top",
        "name": "Top",
        "id": "ep-top",
        "missing": false
      },
      {
        "rawName": "Bottom",
        "name": "Bottom",
        "id": "ep-bottom",
        "missing": false
      },
      {
        "rawName": "Back",
        "name": "Back",
        "id": "ep-back",
        "missing": false
      },
      {
        "rawName": "Right",
        "name": "Right",
        "id": "ep-right",
        "missing": false
      },
      {
        "rawName": "TopRight",
        "name": "TopRight",
        "id": "ep-top-right",
        "missing": false
      },
      {
        "rawName": "TopLeft",
        "name": "TopLeft",
        "id": "ep-top-left",
        "missing": false
      },
      {
        "rawName": "BottomRight",
        "name": "BottomRight",
        "id": "ep-bottom-right",
        "missing": false
      },
      {
        "rawName": "BottomLeft",
        "name": "BottomLeft",
        "id": "ep-bottom-left",
        "missing": false
      },
      {
        "rawName": "Sort",
        "name": "Sort",
        "id": "ep-sort",
        "missing": false
      },
      {
        "rawName": "SortUp",
        "name": "SortUp",
        "id": "ep-sort-up",
        "missing": false
      },
      {
        "rawName": "SortDown",
        "name": "SortDown",
        "id": "ep-sort-down",
        "missing": false
      },
      {
        "rawName": "Rank",
        "name": "Rank",
        "id": "ep-rank",
        "missing": false
      },
      {
        "rawName": "CaretLeft",
        "name": "CaretLeft",
        "id": "ep-caret-left",
        "missing": false
      },
      {
        "rawName": "CaretTop",
        "name": "CaretTop",
        "id": "ep-caret-top",
        "missing": false
      },
      {
        "rawName": "CaretRight",
        "name": "CaretRight",
        "id": "ep-caret-right",
        "missing": false
      },
      {
        "rawName": "CaretBottom",
        "name": "CaretBottom",
        "id": "ep-caret-bottom",
        "missing": false
      },
      {
        "rawName": "DCaret",
        "name": "DCaret",
        "id": "ep-dcaret",
        "missing": false
      },
      {
        "rawName": "Expand",
        "name": "Expand",
        "id": "ep-expand",
        "missing": false
      },
      {
        "rawName": "Fold",
        "name": "Fold",
        "id": "ep-fold",
        "missing": false
      }
    ],
    "kind": "ep"
  },
  {
    "id": "Document",
    "label": "Document",
    "icons": [
      {
        "rawName": "DocumentAdd",
        "name": "DocumentAdd",
        "id": "ep-document-add",
        "missing": false
      },
      {
        "rawName": "Document",
        "name": "Document",
        "id": "ep-document",
        "missing": false
      },
      {
        "rawName": "Notebook",
        "name": "Notebook",
        "id": "ep-notebook",
        "missing": false
      },
      {
        "rawName": "Tickets",
        "name": "Tickets",
        "id": "ep-tickets",
        "missing": false
      },
      {
        "rawName": "Memo",
        "name": "Memo",
        "id": "ep-memo",
        "missing": false
      },
      {
        "rawName": "Collection",
        "name": "Collection",
        "id": "ep-collection",
        "missing": false
      },
      {
        "rawName": "Postcard",
        "name": "Postcard",
        "id": "ep-postcard",
        "missing": false
      },
      {
        "rawName": "ScaleToOriginal",
        "name": "ScaleToOriginal",
        "id": "ep-scale-to-original",
        "missing": false
      },
      {
        "rawName": "SetUp",
        "name": "SetUp",
        "id": "ep-set-up",
        "missing": false
      },
      {
        "rawName": "DocumentDelete",
        "name": "DocumentDelete",
        "id": "ep-document-delete",
        "missing": false
      },
      {
        "rawName": "DocumentChecked",
        "name": "DocumentChecked",
        "id": "ep-document-checked",
        "missing": false
      },
      {
        "rawName": "DataBoard",
        "name": "DataBoard",
        "id": "ep-data-board",
        "missing": false
      },
      {
        "rawName": "DataAnalysis",
        "name": "DataAnalysis",
        "id": "ep-data-analysis",
        "missing": false
      },
      {
        "rawName": "CopyDocument",
        "name": "CopyDocument",
        "id": "ep-copy-document",
        "missing": false
      },
      {
        "rawName": "FolderChecked",
        "name": "FolderChecked",
        "id": "ep-folder-checked",
        "missing": false
      },
      {
        "rawName": "Files",
        "name": "Files",
        "id": "ep-files",
        "missing": false
      },
      {
        "rawName": "Folder",
        "name": "Folder",
        "id": "ep-folder",
        "missing": false
      },
      {
        "rawName": "FolderOpened",
        "name": "FolderOpened",
        "id": "ep-folder-opened",
        "missing": false
      },
      {
        "rawName": "FolderDelete",
        "name": "FolderDelete",
        "id": "ep-folder-delete",
        "missing": false
      },
      {
        "rawName": "FolderRemove",
        "name": "FolderRemove",
        "id": "ep-folder-remove",
        "missing": false
      },
      {
        "rawName": "DocumentCopy",
        "name": "DocumentCopy",
        "id": "ep-document-copy",
        "missing": false
      },
      {
        "rawName": "DocumentRemove",
        "name": "DocumentRemove",
        "id": "ep-document-remove",
        "missing": false
      },
      {
        "rawName": "FolderAdd",
        "name": "FolderAdd",
        "id": "ep-folder-add",
        "missing": false
      },
      {
        "rawName": "FirstAidKit",
        "name": "FirstAidKit",
        "id": "ep-first-aid-kit",
        "missing": false
      },
      {
        "rawName": "Reading",
        "name": "Reading",
        "id": "ep-reading",
        "missing": false
      },
      {
        "rawName": "DataLine",
        "name": "DataLine",
        "id": "ep-data-line",
        "missing": false
      },
      {
        "rawName": "Management",
        "name": "Management",
        "id": "ep-management",
        "missing": false
      },
      {
        "rawName": "Checked",
        "name": "Checked",
        "id": "ep-checked",
        "missing": false
      },
      {
        "rawName": "Failed",
        "name": "Failed",
        "id": "ep-failed",
        "missing": false
      },
      {
        "rawName": "List",
        "name": "List",
        "id": "ep-list",
        "missing": false
      },
      {
        "rawName": "Ticket",
        "name": "Ticket",
        "id": "ep-ticket",
        "missing": false
      },
      {
        "rawName": "TrendCharts",
        "name": "TrendCharts",
        "id": "ep-trend-charts",
        "missing": false
      }
    ],
    "kind": "ep"
  },
  {
    "id": "Media",
    "label": "Media",
    "icons": [
      {
        "rawName": "Microphone",
        "name": "Microphone",
        "id": "ep-microphone",
        "missing": false
      },
      {
        "rawName": "Mute",
        "name": "Mute",
        "id": "ep-mute",
        "missing": false
      },
      {
        "rawName": "Mic",
        "name": "Mic",
        "id": "ep-mic",
        "missing": false
      },
      {
        "rawName": "VideoPlay",
        "name": "VideoPlay",
        "id": "ep-video-play",
        "missing": false
      },
      {
        "rawName": "VideoPause",
        "name": "VideoPause",
        "id": "ep-video-pause",
        "missing": false
      },
      {
        "rawName": "VideoCamera",
        "name": "VideoCamera",
        "id": "ep-video-camera",
        "missing": false
      },
      {
        "rawName": "Headset",
        "name": "Headset",
        "id": "ep-headset",
        "missing": false
      },
      {
        "rawName": "Monitor",
        "name": "Monitor",
        "id": "ep-monitor",
        "missing": false
      },
      {
        "rawName": "Film",
        "name": "Film",
        "id": "ep-film",
        "missing": false
      },
      {
        "rawName": "Camera",
        "name": "Camera",
        "id": "ep-camera",
        "missing": false
      },
      {
        "rawName": "Picture",
        "name": "Picture",
        "id": "ep-picture",
        "missing": false
      },
      {
        "rawName": "PictureRounded",
        "name": "PictureRounded",
        "id": "ep-picture-rounded",
        "missing": false
      },
      {
        "rawName": "Cellphone",
        "name": "Cellphone",
        "id": "ep-cellphone",
        "missing": false
      },
      {
        "rawName": "Iphone",
        "name": "Iphone",
        "id": "ep-iphone",
        "missing": false
      },
      {
        "rawName": "VideoCameraFilled",
        "name": "VideoCameraFilled",
        "id": "ep-video-camera-filled",
        "missing": false
      },
      {
        "rawName": "PictureFilled",
        "name": "PictureFilled",
        "id": "ep-picture-filled",
        "missing": false
      },
      {
        "rawName": "Platform",
        "name": "Platform",
        "id": "ep-platform",
        "missing": false
      },
      {
        "rawName": "CameraFilled",
        "name": "CameraFilled",
        "id": "ep-camera-filled",
        "missing": false
      },
      {
        "rawName": "BellFilled",
        "name": "BellFilled",
        "id": "ep-bell-filled",
        "missing": false
      }
    ],
    "kind": "ep"
  },
  {
    "id": "Traffic",
    "label": "Traffic",
    "icons": [
      {
        "rawName": "MapLocation",
        "name": "MapLocation",
        "id": "ep-map-location",
        "missing": false
      },
      {
        "rawName": "Location",
        "name": "Location",
        "id": "ep-location",
        "missing": false
      },
      {
        "rawName": "LocationInformation",
        "name": "LocationInformation",
        "id": "ep-location-information",
        "missing": false
      },
      {
        "rawName": "DeleteLocation",
        "name": "DeleteLocation",
        "id": "ep-delete-location",
        "missing": false
      },
      {
        "rawName": "AddLocation",
        "name": "AddLocation",
        "id": "ep-add-location",
        "missing": false
      },
      {
        "rawName": "OfficeBuilding",
        "name": "OfficeBuilding",
        "id": "ep-office-building",
        "missing": false
      },
      {
        "rawName": "School",
        "name": "School",
        "id": "ep-school",
        "missing": false
      },
      {
        "rawName": "Guide",
        "name": "Guide",
        "id": "ep-guide",
        "missing": false
      },
      {
        "rawName": "Coordinate",
        "name": "Coordinate",
        "id": "ep-coordinate",
        "missing": false
      },
      {
        "rawName": "Bicycle",
        "name": "Bicycle",
        "id": "ep-bicycle",
        "missing": false
      },
      {
        "rawName": "Place",
        "name": "Place",
        "id": "ep-place",
        "missing": false
      },
      {
        "rawName": "Van",
        "name": "Van",
        "id": "ep-van",
        "missing": false
      },
      {
        "rawName": "LocationFilled",
        "name": "LocationFilled",
        "id": "ep-location-filled",
        "missing": false
      }
    ],
    "kind": "ep"
  },
  {
    "id": "Food",
    "label": "Food",
    "icons": [
      {
        "rawName": "Watermelon",
        "name": "Watermelon",
        "id": "ep-watermelon",
        "missing": false
      },
      {
        "rawName": "Pear",
        "name": "Pear",
        "id": "ep-pear",
        "missing": false
      },
      {
        "rawName": "NoSmoking",
        "name": "NoSmoking",
        "id": "ep-no-smoking",
        "missing": false
      },
      {
        "rawName": "Smoking",
        "name": "Smoking",
        "id": "ep-smoking",
        "missing": false
      },
      {
        "rawName": "Mug",
        "name": "Mug",
        "id": "ep-mug",
        "missing": false
      },
      {
        "rawName": "GobletSquareFull",
        "name": "GobletSquareFull",
        "id": "ep-goblet-square-full",
        "missing": false
      },
      {
        "rawName": "GobletFull",
        "name": "GobletFull",
        "id": "ep-goblet-full",
        "missing": false
      },
      {
        "rawName": "KnifeFork",
        "name": "KnifeFork",
        "id": "ep-knife-fork",
        "missing": false
      },
      {
        "rawName": "Sugar",
        "name": "Sugar",
        "id": "ep-sugar",
        "missing": false
      },
      {
        "rawName": "Bowl",
        "name": "Bowl",
        "id": "ep-bowl",
        "missing": false
      },
      {
        "rawName": "IceDrink",
        "name": "IceDrink",
        "id": "ep-ice-drink",
        "missing": false
      },
      {
        "rawName": "MilkTea",
        "name": "MilkTea",
        "id": "ep-milk-tea",
        "missing": false
      },
      {
        "rawName": "Lollipop",
        "name": "Lollipop",
        "id": "ep-lollipop",
        "missing": false
      },
      {
        "rawName": "Coffee",
        "name": "Coffee",
        "id": "ep-coffee",
        "missing": false
      },
      {
        "rawName": "Chicken",
        "name": "Chicken",
        "id": "ep-chicken",
        "missing": false
      },
      {
        "rawName": "Dish",
        "name": "Dish",
        "id": "ep-dish",
        "missing": false
      },
      {
        "rawName": "IceTea",
        "name": "IceTea",
        "id": "ep-ice-tea",
        "missing": false
      },
      {
        "rawName": "ColdDrink",
        "name": "ColdDrink",
        "id": "ep-cold-drink",
        "missing": false
      },
      {
        "rawName": "CoffeeCup",
        "name": "CoffeeCup",
        "id": "ep-coffee-cup",
        "missing": false
      },
      {
        "rawName": "DishDot",
        "name": "DishDot",
        "id": "ep-dish-dot",
        "missing": false
      },
      {
        "rawName": "IceCream",
        "name": "IceCream",
        "id": "ep-ice-cream",
        "missing": false
      },
      {
        "rawName": "Dessert",
        "name": "Dessert",
        "id": "ep-dessert",
        "missing": false
      },
      {
        "rawName": "IceCreamSquare",
        "name": "IceCreamSquare",
        "id": "ep-ice-cream-square",
        "missing": false
      },
      {
        "rawName": "ForkSpoon",
        "name": "ForkSpoon",
        "id": "ep-fork-spoon",
        "missing": false
      },
      {
        "rawName": "IceCreamRound",
        "name": "IceCreamRound",
        "id": "ep-ice-cream-round",
        "missing": false
      },
      {
        "rawName": "HotWater",
        "name": "HotWater",
        "id": "ep-hot-water",
        "missing": false
      },
      {
        "rawName": "Food",
        "name": "Food",
        "id": "ep-food",
        "missing": false
      },
      {
        "rawName": "Grape",
        "name": "Grape",
        "id": "ep-grape",
        "missing": false
      },
      {
        "rawName": "Fries",
        "name": "Fries",
        "id": "ep-fries",
        "missing": false
      },
      {
        "rawName": "Apple",
        "name": "Apple",
        "id": "ep-apple",
        "missing": false
      },
      {
        "rawName": "Burger",
        "name": "Burger",
        "id": "ep-burger",
        "missing": false
      },
      {
        "rawName": "Cherry",
        "name": "Cherry",
        "id": "ep-cherry",
        "missing": false
      },
      {
        "rawName": "Orange",
        "name": "Orange",
        "id": "ep-orange",
        "missing": false
      },
      {
        "rawName": "Goblet",
        "name": "Goblet",
        "id": "ep-goblet",
        "missing": false
      },
      {
        "rawName": "GobletSquare",
        "name": "GobletSquare",
        "id": "ep-goblet-square",
        "missing": false
      }
    ],
    "kind": "ep"
  },
  {
    "id": "Items",
    "label": "Items",
    "icons": [
      {
        "rawName": "Printer",
        "name": "Printer",
        "id": "ep-printer",
        "missing": false
      },
      {
        "rawName": "Calendar",
        "name": "Calendar",
        "id": "ep-calendar",
        "missing": false
      },
      {
        "rawName": "CreditCard",
        "name": "CreditCard",
        "id": "ep-credit-card",
        "missing": false
      },
      {
        "rawName": "Box",
        "name": "Box",
        "id": "ep-box",
        "missing": false
      },
      {
        "rawName": "Money",
        "name": "Money",
        "id": "ep-money",
        "missing": false
      },
      {
        "rawName": "Refrigerator",
        "name": "Refrigerator",
        "id": "ep-refrigerator",
        "missing": false
      },
      {
        "rawName": "Cpu",
        "name": "Cpu",
        "id": "ep-cpu",
        "missing": false
      },
      {
        "rawName": "Basketball",
        "name": "Basketball",
        "id": "ep-basketball",
        "missing": false
      },
      {
        "rawName": "Brush",
        "name": "Brush",
        "id": "ep-brush",
        "missing": false
      },
      {
        "rawName": "Suitcase",
        "name": "Suitcase",
        "id": "ep-suitcase",
        "missing": false
      },
      {
        "rawName": "SuitcaseLine",
        "name": "SuitcaseLine",
        "id": "ep-suitcase-line",
        "missing": false
      },
      {
        "rawName": "Umbrella",
        "name": "Umbrella",
        "id": "ep-umbrella",
        "missing": false
      },
      {
        "rawName": "AlarmClock",
        "name": "AlarmClock",
        "id": "ep-alarm-clock",
        "missing": false
      },
      {
        "rawName": "Medal",
        "name": "Medal",
        "id": "ep-medal",
        "missing": false
      },
      {
        "rawName": "GoldMedal",
        "name": "GoldMedal",
        "id": "ep-gold-medal",
        "missing": false
      },
      {
        "rawName": "Present",
        "name": "Present",
        "id": "ep-present",
        "missing": false
      },
      {
        "rawName": "Mouse",
        "name": "Mouse",
        "id": "ep-mouse",
        "missing": false
      },
      {
        "rawName": "Watch",
        "name": "Watch",
        "id": "ep-watch",
        "missing": false
      },
      {
        "rawName": "QuartzWatch",
        "name": "QuartzWatch",
        "id": "ep-quartz-watch",
        "missing": false
      },
      {
        "rawName": "Magnet",
        "name": "Magnet",
        "id": "ep-magnet",
        "missing": false
      },
      {
        "rawName": "Help",
        "name": "Help",
        "id": "ep-help",
        "missing": false
      },
      {
        "rawName": "Soccer",
        "name": "Soccer",
        "id": "ep-soccer",
        "missing": false
      },
      {
        "rawName": "ToiletPaper",
        "name": "ToiletPaper",
        "id": "ep-toilet-paper",
        "missing": false
      },
      {
        "rawName": "ReadingLamp",
        "name": "ReadingLamp",
        "id": "ep-reading-lamp",
        "missing": false
      },
      {
        "rawName": "Paperclip",
        "name": "Paperclip",
        "id": "ep-paperclip",
        "missing": false
      },
      {
        "rawName": "MagicStick",
        "name": "MagicStick",
        "id": "ep-magic-stick",
        "missing": false
      },
      {
        "rawName": "Football",
        "name": "Football",
        "id": "ep-football",
        "missing": false
      },
      {
        "rawName": "Baseball",
        "name": "Baseball",
        "id": "ep-baseball",
        "missing": false
      },
      {
        "rawName": "Coin",
        "name": "Coin",
        "id": "ep-coin",
        "missing": false
      },
      {
        "rawName": "Goods",
        "name": "Goods",
        "id": "ep-goods",
        "missing": false
      },
      {
        "rawName": "SoldOut",
        "name": "SoldOut",
        "id": "ep-sold-out",
        "missing": false
      },
      {
        "rawName": "Sell",
        "name": "Sell",
        "id": "ep-sell",
        "missing": false
      },
      {
        "rawName": "Key",
        "name": "Key",
        "id": "ep-key",
        "missing": false
      },
      {
        "rawName": "ShoppingCart",
        "name": "ShoppingCart",
        "id": "ep-shopping-cart",
        "missing": false
      },
      {
        "rawName": "ShoppingCartFull",
        "name": "ShoppingCartFull",
        "id": "ep-shopping-cart-full",
        "missing": false
      },
      {
        "rawName": "ShoppingTrolley",
        "name": "ShoppingTrolley",
        "id": "ep-shopping-trolley",
        "missing": false
      },
      {
        "rawName": "Phone",
        "name": "Phone",
        "id": "ep-phone",
        "missing": false
      },
      {
        "rawName": "Scissor",
        "name": "Scissor",
        "id": "ep-scissor",
        "missing": false
      },
      {
        "rawName": "Handbag",
        "name": "Handbag",
        "id": "ep-handbag",
        "missing": false
      },
      {
        "rawName": "ShoppingBag",
        "name": "ShoppingBag",
        "id": "ep-shopping-bag",
        "missing": false
      },
      {
        "rawName": "Trophy",
        "name": "Trophy",
        "id": "ep-trophy",
        "missing": false
      },
      {
        "rawName": "TrophyBase",
        "name": "TrophyBase",
        "id": "ep-trophy-base",
        "missing": false
      },
      {
        "rawName": "Stopwatch",
        "name": "Stopwatch",
        "id": "ep-stopwatch",
        "missing": false
      },
      {
        "rawName": "Timer",
        "name": "Timer",
        "id": "ep-timer",
        "missing": false
      },
      {
        "rawName": "CollectionTag",
        "name": "CollectionTag",
        "id": "ep-collection-tag",
        "missing": false
      },
      {
        "rawName": "TakeawayBox",
        "name": "TakeawayBox",
        "id": "ep-takeaway-box",
        "missing": false
      },
      {
        "rawName": "PriceTag",
        "name": "PriceTag",
        "id": "ep-price-tag",
        "missing": false
      },
      {
        "rawName": "Wallet",
        "name": "Wallet",
        "id": "ep-wallet",
        "missing": false
      },
      {
        "rawName": "Opportunity",
        "name": "Opportunity",
        "id": "ep-opportunity",
        "missing": false
      },
      {
        "rawName": "PhoneFilled",
        "name": "PhoneFilled",
        "id": "ep-phone-filled",
        "missing": false
      },
      {
        "rawName": "WalletFilled",
        "name": "WalletFilled",
        "id": "ep-wallet-filled",
        "missing": false
      },
      {
        "rawName": "GoodsFilled",
        "name": "GoodsFilled",
        "id": "ep-goods-filled",
        "missing": false
      },
      {
        "rawName": "Flag",
        "name": "Flag",
        "id": "ep-flag",
        "missing": false
      },
      {
        "rawName": "BrushFilled",
        "name": "BrushFilled",
        "id": "ep-brush-filled",
        "missing": false
      },
      {
        "rawName": "Briefcase",
        "name": "Briefcase",
        "id": "ep-briefcase",
        "missing": false
      },
      {
        "rawName": "Stamp",
        "name": "Stamp",
        "id": "ep-stamp",
        "missing": false
      }
    ],
    "kind": "ep"
  },
  {
    "id": "Weather",
    "label": "Weather",
    "icons": [
      {
        "rawName": "Sunrise-1",
        "name": "Sunrise",
        "id": "ep-sunrise",
        "missing": false
      },
      {
        "rawName": "Sunny",
        "name": "Sunny",
        "id": "ep-sunny",
        "missing": false
      },
      {
        "rawName": "Ship",
        "name": "Ship",
        "id": "ep-ship",
        "missing": false
      },
      {
        "rawName": "Lightning",
        "name": "Lightning",
        "id": "ep-lightning",
        "missing": false
      },
      {
        "rawName": "Cloudy",
        "name": "Cloudy",
        "id": "ep-cloudy",
        "missing": false
      },
      {
        "rawName": "PartlyCloudy",
        "name": "PartlyCloudy",
        "id": "ep-partly-cloudy",
        "missing": false
      },
      {
        "rawName": "Sunset",
        "name": "Sunset",
        "id": "ep-sunset",
        "missing": false
      },
      {
        "rawName": "Sunrise",
        "name": "Sunrise",
        "id": "ep-sunrise",
        "missing": false
      },
      {
        "rawName": "Drizzling",
        "name": "Drizzling",
        "id": "ep-drizzling",
        "missing": false
      },
      {
        "rawName": "Pouring",
        "name": "Pouring",
        "id": "ep-pouring",
        "missing": false
      },
      {
        "rawName": "MostlyCloudy",
        "name": "MostlyCloudy",
        "id": "ep-mostly-cloudy",
        "missing": false
      },
      {
        "rawName": "Moon",
        "name": "Moon",
        "id": "ep-moon",
        "missing": false
      },
      {
        "rawName": "MoonNight",
        "name": "MoonNight",
        "id": "ep-moon-night",
        "missing": false
      }
    ],
    "kind": "ep"
  },
  {
    "id": "Other",
    "label": "Other",
    "icons": [
      {
        "rawName": "Kruck",
        "name": "Truck",
        "id": "ep-truck",
        "missing": true
      },
      {
        "rawName": "WindPower",
        "name": "WindPower",
        "id": "ep-wind-power",
        "missing": false
      },
      {
        "rawName": "Shop",
        "name": "Shop",
        "id": "ep-shop",
        "missing": false
      },
      {
        "rawName": "s-help",
        "name": "Help",
        "id": "ep-help",
        "missing": false
      },
      {
        "rawName": "ElemeFilled",
        "name": "ElemeFilled",
        "id": "ep-eleme-filled",
        "missing": false
      },
      {
        "rawName": "Eleme",
        "name": "Eleme",
        "id": "ep-eleme",
        "missing": false
      },
      {
        "rawName": "Element",
        "name": "Element",
        "id": "ep-element",
        "missing": true
      },
      {
        "rawName": "Separator",
        "name": "Separator",
        "id": "ep-separator",
        "missing": true
      },
      {
        "rawName": "ElementPlus",
        "name": "ElementPlus",
        "id": "ep-element-plus",
        "missing": false
      },
      {
        "rawName": "ChromeFilled",
        "name": "ChromeFilled",
        "id": "ep-chrome-filled",
        "missing": false
      },
      {
        "rawName": "SwitchFilled",
        "name": "SwitchFilled",
        "id": "ep-switch-filled",
        "missing": false
      },
      {
        "rawName": "Language",
        "name": "Language",
        "id": "ep-language",
        "missing": true
      },
      {
        "rawName": "Github",
        "name": "Github",
        "id": "ep-github",
        "missing": true
      }
    ],
    "kind": "ep"
  }
] as const;

export const figmaEdsSections = [
  {
    "id": "action",
    "label": "Action",
    "icons": [
      {
        "nodeId": "8411:2644",
        "figmaName": "Action/add",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "add",
        "id": "eds-action-add",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/add\">\n<path id=\"Icon\" d=\"M16 8V24M24 16H8\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2697",
        "figmaName": "Action/remove",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "remove",
        "id": "eds-action-remove",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/remove\">\n<path id=\"Icon\" d=\"M22.6667 16H9.33333\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2699",
        "figmaName": "Action/add-square",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "add-square",
        "id": "eds-action-add-square",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/add-square\">\n<path id=\"Icon\" d=\"M16 10.6667V21.3333M21.3333 16H10.6667M7.33334 26.6667H24.6667C25.7712 26.6667 26.6667 25.7712 26.6667 24.6667V7.33333C26.6667 6.22876 25.7712 5.33333 24.6667 5.33333H7.33333C6.22876 5.33333 5.33333 6.22877 5.33333 7.33334V24.6667C5.33333 25.7712 6.22877 26.6667 7.33334 26.6667Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2700",
        "figmaName": "Action/add-circle",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "add-circle",
        "id": "eds-action-add-circle",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/add-circle\">\n<path id=\"Icon\" d=\"M16 10.6667V21.3333M21.3333 16H10.6667M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2684",
        "figmaName": "Action/add-to-list",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "add-to-list",
        "id": "eds-action-add-to-list",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/add-to-list\">\n<path id=\"Icon\" d=\"M18.6667 9.33333V17.3333M14.6667 13.3333H22.6667M18.6667 28C14.4444 28 10.2222 28 6.00001 28C4.89544 28 4.00001 27.1085 4.00001 26.0039C4.00001 22.5462 4 15.5953 4 13.3333M11.3333 22.6667H26C27.1046 22.6667 28 21.7712 28 20.6667V6C28 4.89543 27.1046 4 26 4H11.3333C10.2288 4 9.33333 4.89543 9.33333 6V20.6667C9.33333 21.7712 10.2288 22.6667 11.3333 22.6667Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2666",
        "figmaName": "Action/check",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "check",
        "id": "eds-action-check",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/check\">\n<path id=\"Icon\" d=\"M26 9.33333L12 23.3333L6.66665 18\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2660",
        "figmaName": "Action/check-double",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "check-double",
        "id": "eds-action-check-double",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/check-double\">\n<path id=\"Icon\" d=\"M29.3333 9.33333L15.3333 23.3333L9.99998 18M7.99998 23.3333L2.66665 18M22 9.33333L15.3333 16\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2656",
        "figmaName": "Action/check-circle-1",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "check-circle-1",
        "id": "eds-action-check-circle-1",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/check-circle-1\">\n<path id=\"Icon\" d=\"M21.3333 12L13.3333 20.6667L10 17.3333M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2691",
        "figmaName": "Action/check-circle-2",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "check-circle-2",
        "id": "eds-action-check-circle-2",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/check-circle-2\">\n<path id=\"Icon\" d=\"M21.3333 5.24736C19.7267 4.44894 17.9158 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 15.5493 27.9752 15.1044 27.9268 14.6667M28 6.66667L16 18.6667L12 14.6667\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2689",
        "figmaName": "Action/check-square",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "check-square",
        "id": "eds-action-check-square",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/check-square\">\n<path id=\"Icon\" d=\"M28 6.66667L16 18.6667L12 14.6667M21.3333 5.33333H7.33333C6.22876 5.33333 5.33333 6.22877 5.33333 7.33334V24.6667C5.33333 25.7712 6.22877 26.6667 7.33334 26.6667H24.6667C25.7712 26.6667 26.6667 25.7712 26.6667 24.6667V16\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2688",
        "figmaName": "Action/log-out-1",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "log-out-1",
        "id": "eds-action-log-out-1",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/log-out-1\">\n<path id=\"Icon\" d=\"M18.6667 26.6667H7.33333C6.22876 26.6667 5.33333 25.7712 5.33333 24.6667L5.33333 7.33333C5.33333 6.22877 6.22876 5.33333 7.33333 5.33333H18.6667M13.3333 16L28 16M24 12L28 16L24 20\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2683",
        "figmaName": "Action/eye-closed",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "eye-closed",
        "id": "eds-action-eye-closed",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/eye-closed\">\n<path id=\"Icon\" d=\"M28.0009 10.0008C25.6715 14.7687 21.1705 17.9998 16 17.9998M16 17.9998C10.8294 17.9998 6.32845 14.7687 3.99974 10.0002M16 17.9998L16 21.9998M25.8958 13.229L28.6666 15.9998M21.6406 16.6248L23.3333 19.9998M6.10421 13.229L3.33338 15.9998M10.3594 16.6248L8.66671 19.9998\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2681",
        "figmaName": "Action/eye-open",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "eye-open",
        "id": "eds-action-eye-open",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/eye-open\">\n<path id=\"Icon\" d=\"M29.3333 16.0003C27.0041 20.7686 21.17 25.3333 15.9997 25.3333C10.8294 25.3333 4.99528 20.7686 2.66667 15.9997C4.99528 11.2309 10.8303 6.66667 16.0006 6.66667C21.1709 6.66667 27.0041 11.232 29.3333 16.0003ZM20 16C20 18.2091 18.2091 20 16 20C13.7909 20 12 18.2091 12 16C12 13.7909 13.7909 12 16 12C18.2091 12 20 13.7909 20 16Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2675",
        "figmaName": "Action/eye-hidden",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "eye-hidden",
        "id": "eds-action-eye-hidden",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/eye-hidden\">\n<path id=\"Icon\" d=\"M5.33333 5.33333L13.1716 13.1716M26.6667 26.6667L18.8284 18.8284M13.1716 13.1716C12.4477 13.8954 12 14.8954 12 16C12 18.2091 13.7909 20 16 20C17.1046 20 18.1046 19.5523 18.8284 18.8284M13.1716 13.1716L18.8284 18.8284M9.02429 9.02429C6.30457 10.7987 3.95171 13.368 2.66667 15.9997C4.99528 20.7686 10.8294 25.3333 15.9997 25.3333C18.3167 25.3333 20.7671 24.4166 22.9756 22.9756M13.0152 7.12956C14.0153 6.83088 15.0199 6.66667 16.0006 6.66667C21.1709 6.66667 27.0041 11.232 29.3333 16.0003C28.5974 17.5069 27.5115 18.9932 26.2072 20.3216\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2654",
        "figmaName": "Action/heart-add",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "heart-add",
        "id": "eds-action-heart-add",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/heart-add\">\n<path id=\"Icon\" d=\"M22.6667 22.6667V14.6667M16 26.7608L5.95262 16.7134C3.34913 14.1099 3.34913 9.8888 5.95262 7.2853C8.0224 5.21552 10.5208 4.58177 13.0417 5.81185C14.0422 6.30007 15.3542 7.2853 16 8.57226C16.6458 7.2853 17.9578 6.30007 18.9583 5.81185C21.4792 4.58177 23.9776 5.21552 26.0474 7.2853C27.3493 8.58721 28.0002 10.2936 28 12M18.6667 18.6667H26.6667\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2670",
        "figmaName": "Action/heart",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "heart",
        "id": "eds-action-heart",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/heart\">\n<path id=\"Icon\" d=\"M26.0474 16.714C28.6509 14.1105 28.6509 9.88945 26.0474 7.28595C23.9776 5.21618 21.4792 4.58242 18.9583 5.8125C17.9578 6.30072 16.6458 7.28595 16 8.57292C15.3542 7.28595 14.0422 6.30072 13.0417 5.8125C10.5208 4.58242 8.0224 5.21618 5.95262 7.28595C3.34913 9.88945 3.34913 14.1105 5.95262 16.714L15.2929 26.0543C15.6834 26.4448 16.3166 26.4448 16.7071 26.0543L26.0474 16.714Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2669",
        "figmaName": "Action/error",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "error",
        "id": "eds-action-error",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/error\">\n<path id=\"Icon\" d=\"M16 21.3333H16.0133M16 10.6667V16M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2667",
        "figmaName": "Action/info",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "info",
        "id": "eds-action-info",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/info\">\n<path id=\"Icon\" d=\"M16 10.6667V11.3333M16 16V21.3333M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2674",
        "figmaName": "Action/lock",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "lock",
        "id": "eds-action-lock",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/lock\">\n<path id=\"Icon\" d=\"M16 18.6667V21.3333M10.6667 12V8C10.6667 5.05448 13.0545 2.66667 16 2.66667C18.9455 2.66667 21.3333 5.05448 21.3333 8V12M8.66666 28H23.3333C24.4379 28 25.3333 27.1046 25.3333 26V14C25.3333 12.8954 24.4379 12 23.3333 12H8.66667C7.5621 12 6.66667 12.8954 6.66667 14V26C6.66667 27.1046 7.56209 28 8.66666 28Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2664",
        "figmaName": "Action/lock-open",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "lock-open",
        "id": "eds-action-lock-open",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/lock-open\">\n<path id=\"Icon\" d=\"M16 18.6667V21.3333M10.8263 6.69969C11.4068 4.38265 13.503 2.66667 16 2.66667C18.9455 2.66667 21.3333 5.05448 21.3333 8V12M8.66666 28H23.3333C24.4379 28 25.3333 27.1046 25.3333 26V14C25.3333 12.8954 24.4379 12 23.3333 12H8.66667C7.5621 12 6.66667 12.8954 6.66667 14V26C6.66667 27.1046 7.56209 28 8.66666 28Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2694",
        "figmaName": "Action/settings",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "settings",
        "id": "eds-action-settings",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/settings\">\n<path id=\"Icon\" d=\"M19.4013 7.3058L19.0147 5.56614C18.8114 4.65106 17.9998 4 17.0624 4H14.9377C14.0003 4 13.1887 4.65106 12.9853 5.56614L12.5987 7.3058C11.7172 7.65092 10.901 8.12623 10.1738 8.70808L8.47139 8.17227C7.57724 7.89083 6.60759 8.26819 6.13889 9.08L5.07656 10.92C4.60787 11.7318 4.76589 12.7602 5.45669 13.3939L6.77107 14.5995C6.70233 15.0563 6.6667 15.524 6.6667 16C6.6667 16.476 6.70233 16.9437 6.77107 17.4005L5.45667 18.6061C4.76587 19.2398 4.60785 20.2682 5.07655 21.08L6.13887 22.92C6.60757 23.7318 7.57722 24.1092 8.47137 23.8277L10.1737 23.2919C10.901 23.8738 11.7172 24.3491 12.5987 24.6942L12.9853 26.4339C13.1887 27.3489 14.0003 28 14.9377 28H17.0624C17.9998 28 18.8114 27.3489 19.0147 26.4339L19.4013 24.6942C20.2828 24.3491 21.099 23.8738 21.8263 23.2919L23.5287 23.8277C24.4228 24.1092 25.3925 23.7318 25.8612 22.92L26.9235 21.08C27.3922 20.2682 27.2342 19.2398 26.5434 18.6061L25.229 17.4005C25.2977 16.9437 25.3334 16.476 25.3334 16C25.3334 15.524 25.2977 15.0563 25.229 14.5995L26.5434 13.3939C27.2342 12.7602 27.3922 11.7318 26.9235 10.92L25.8612 9.08C25.3925 8.26819 24.4228 7.89083 23.5287 8.17226L21.8263 8.70807C21.099 8.12623 20.2828 7.65092 19.4013 7.3058ZM17.3333 16C17.3333 16.7364 16.7364 17.3333 16 17.3333C15.2636 17.3333 14.6667 16.7364 14.6667 16C14.6667 15.2636 15.2636 14.6667 16 14.6667C16.7364 14.6667 17.3333 15.2636 17.3333 16Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2692",
        "figmaName": "Action/warning",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "warning",
        "id": "eds-action-warning",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/warning\">\n<path id=\"Icon\" d=\"M16 20H16.0133M16 16V12M5.48207 25.3333H26.5179C28.0615 25.3333 29.0232 23.6589 28.2455 22.3256L17.7276 4.29486C16.9558 2.97185 15.0442 2.97185 14.2724 4.29486L3.75451 22.3256C2.97675 23.6589 3.93849 25.3333 5.48207 25.3333Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2686",
        "figmaName": "Action/build",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "build",
        "id": "eds-action-build",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/build\">\n<path id=\"Icon\" d=\"M3.28252 7.05375C2.88648 7.95543 2.66667 8.95205 2.66667 10C2.66667 14.0501 5.94991 17.3333 10 17.3333C11.048 17.3333 12.0446 17.1135 12.9462 16.7175L25.2802 29.0514C26.0613 29.8325 27.3276 29.8325 28.1086 29.0514L29.0514 28.1086C29.8325 27.3276 29.8325 26.0613 29.0514 25.2802L16.7175 12.9462C17.1135 12.0446 17.3333 11.048 17.3333 10C17.3333 5.94991 14.0501 2.66667 10 2.66667C8.95205 2.66667 7.95544 2.88648 7.05376 3.28252L10.4518 6.68054C11.4932 7.72194 11.4932 9.41038 10.4518 10.4518C9.41039 11.4932 7.72195 11.4932 6.68055 10.4518L3.28252 7.05375Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2662",
        "figmaName": "Action/block",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "block",
        "id": "eds-action-block",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/block\">\n<path id=\"Icon\" d=\"M7.51472 24.4853C5.34315 22.3137 4 19.3137 4 16C4 9.37258 9.37258 4 16 4C19.3137 4 22.3137 5.34315 24.4853 7.51472C26.6569 9.68629 28 12.6863 28 16C28 22.6274 22.6274 28 16 28C12.6863 28 9.68629 26.6569 7.51472 24.4853ZM24.4853 7.51472L7.51472 24.4853\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2661",
        "figmaName": "Action/search",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "search",
        "id": "eds-action-search",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/search\">\n<path id=\"Icon\" d=\"M17.8521 17.8521L25.3333 25.3333M12.6667 20C16.7168 20 20 16.7168 20 12.6667C20 8.61658 16.7168 5.33333 12.6667 5.33333C8.61658 5.33333 5.33333 8.61658 5.33333 12.6667C5.33333 16.7168 8.61658 20 12.6667 20Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2659",
        "figmaName": "Action/search-01",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "search-01",
        "id": "eds-action-search-01",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/search-01\">\n<path id=\"Icon\" d=\"M22.4518 22.6L27 27M25.5333 15.2667C25.5333 20.9368 20.9368 25.5333 15.2667 25.5333C9.59654 25.5333 5 20.9368 5 15.2667C5 9.59654 9.59654 5 15.2667 5C20.9368 5 25.5333 9.59654 25.5333 15.2667Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2663",
        "figmaName": "Action/zoom-in",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "zoom-in",
        "id": "eds-action-zoom-in",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/zoom-in\">\n<path id=\"Icon\" d=\"M26 26L21.2663 21.2663M21.2663 21.2663C22.9553 19.5773 24 17.244 24 14.6667C24 9.51201 19.8213 5.33333 14.6667 5.33333C9.51201 5.33333 5.33333 9.51201 5.33333 14.6667C5.33333 19.8213 9.51201 24 14.6667 24C17.244 24 19.5773 22.9553 21.2663 21.2663ZM14.6667 14.6667V10.6667M14.6667 14.6667V18.6667M14.6667 14.6667H18.6667M14.6667 14.6667H10.6667\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2647",
        "figmaName": "Action/zoom-out",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "zoom-out",
        "id": "eds-action-zoom-out",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/zoom-out\">\n<path id=\"Icon\" d=\"M26 26L21.2663 21.2663M21.2663 21.2663C22.9553 19.5773 24 17.244 24 14.6667C24 9.51201 19.8213 5.33333 14.6667 5.33333C9.51201 5.33333 5.33333 9.51201 5.33333 14.6667C5.33333 19.8213 9.51201 24 14.6667 24C17.244 24 19.5773 22.9553 21.2663 21.2663ZM10.6667 14.6667H18.6667\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2655",
        "figmaName": "Action/help",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "help",
        "id": "eds-action-help",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/help\">\n<path id=\"Icon\" d=\"M16 22.6667H16.0133M16 18.6667C17.1875 16.125 20 16.3125 20 13.3333C20 11.3333 18.6667 9.33333 16 9.33333C13.9362 9.33333 12.671 10.5313 12.2044 12M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2649",
        "figmaName": "Action/verified",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "verified",
        "id": "eds-action-verified",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/verified\">\n<path id=\"Icon\" d=\"M20 13.3333L14.6667 18.6667L12 16M5.33333 6.66667V17.7224C5.33333 20.7526 7.04535 23.5227 9.75563 24.8778L16 28L22.2444 24.8778C24.9546 23.5227 26.6667 20.7526 26.6667 17.7224V6.66667L24.4697 6.91078C22.0209 7.18286 19.5579 6.54135 17.553 5.10927L16 4L14.447 5.10927C12.4421 6.54135 9.97909 7.18286 7.53032 6.91078L5.33333 6.66667Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2680",
        "figmaName": "Action/calendar",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "calendar",
        "id": "eds-action-calendar",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/calendar\">\n<path id=\"Icon\" d=\"M26.6667 12H5.33333M9.33333 4V6.66667M22.6667 4V6.66667M7.33334 28H24.6667C25.7712 28 26.6667 27.1046 26.6667 26V8.66667C26.6667 7.5621 25.7712 6.66667 24.6667 6.66667H7.33333C6.22876 6.66667 5.33333 7.5621 5.33333 8.66667V26C5.33333 27.1046 6.22877 28 7.33334 28Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2648",
        "figmaName": "Action/calendar-event",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "calendar-event",
        "id": "eds-action-calendar-event",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/calendar-event\">\n<path id=\"Icon\" d=\"M26.6667 12H5.33333M9.33333 4V6.66667M22.6667 4V6.66667M21.3333 20.6667C21.3333 21.7712 20.4379 22.6667 19.3333 22.6667C18.2288 22.6667 17.3333 21.7712 17.3333 20.6667C17.3333 19.5621 18.2288 18.6667 19.3333 18.6667C20.4379 18.6667 21.3333 19.5621 21.3333 20.6667ZM7.33334 28H24.6667C25.7712 28 26.6667 27.1046 26.6667 26V8.66667C26.6667 7.5621 25.7712 6.66667 24.6667 6.66667H7.33333C6.22876 6.66667 5.33333 7.5621 5.33333 8.66667V26C5.33333 27.1046 6.22877 28 7.33334 28Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2696",
        "figmaName": "Action/hand",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "hand",
        "id": "eds-action-hand",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/hand\">\n<path id=\"Icon\" d=\"M18.6667 6V4.66667C18.6667 3.5621 17.7712 2.66667 16.6667 2.66667C15.5621 2.66667 14.6667 3.5621 14.6667 4.66667V8.66667M18.6667 6V14.6667M18.6667 6C18.6667 4.89543 19.5621 4 20.6667 4C21.7712 4 22.6667 4.89543 22.6667 6V10M14.6667 8.66667V14.6667M14.6667 8.66667C14.6667 7.5621 13.7712 6.66667 12.6667 6.66667C11.5621 6.66667 10.6667 7.5621 10.6667 8.66667V20L8.30646 17.6398C7.40083 16.7342 5.93251 16.7342 5.02687 17.6398C4.10052 18.5661 4.12486 20.0754 5.0806 20.9714L11.6921 27.1696C13.1748 28.5597 15.1311 29.3333 17.1636 29.3333H18.6667C23.0849 29.3333 26.6667 25.7516 26.6667 21.3333V10C26.6667 8.89543 25.7712 8 24.6667 8C23.5621 8 22.6667 8.89543 22.6667 10M22.6667 10V14.6667\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2682",
        "figmaName": "Action/remove-circle",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "remove-circle",
        "id": "eds-action-remove-circle",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/remove-circle\">\n<path id=\"Icon\" d=\"M21.3333 16H10.6667M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2672",
        "figmaName": "Action/work",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "work",
        "id": "eds-action-work",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/work\">\n<path id=\"Icon\" d=\"M5.33333 16H4V10C4 8.89543 4.89543 8 6 8H12M5.33333 16V24.6667C5.33333 25.7712 6.22876 26.6667 7.33333 26.6667H24.6667C25.7712 26.6667 26.6667 25.7712 26.6667 24.6667V16M5.33333 16H13.3333M26.6667 16H28V10C28 8.89543 27.1046 8 26 8H20M26.6667 16H18.6667M18.6667 16V13.3333H13.3333V16M18.6667 16V18.6667H13.3333V16M12 8V6C12 4.89543 12.8954 4 14 4H18C19.1046 4 20 4.89543 20 6V8M12 8H20\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2679",
        "figmaName": "Action/work-alt",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "work-alt",
        "id": "eds-action-work-alt",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/work-alt\">\n<path id=\"Icon\" d=\"M12 9.33333H6C4.89543 9.33333 4 10.2288 4 11.3333V24.6667C4 25.7712 4.89543 26.6667 6 26.6667H26C27.1046 26.6667 28 25.7712 28 24.6667V11.3333C28 10.2288 27.1046 9.33333 26 9.33333H20M12 9.33333V6C12 4.89543 12.8954 4 14 4H18C19.1046 4 20 4.89543 20 6V9.33333M12 9.33333H20\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2640",
        "figmaName": "Action/bookmark",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "bookmark",
        "id": "eds-action-bookmark",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/bookmark\">\n<path id=\"Icon\" d=\"M16 20.6667L22.3243 26.4639C22.9657 27.0519 24 26.5969 24 25.7268V7.33333C24 6.22876 23.1046 5.33333 22 5.33333H10C8.89543 5.33333 8 6.22876 8 7.33333V25.7268C8 26.5969 9.03432 27.0519 9.67573 26.4639L16 20.6667Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2650",
        "figmaName": "Action/hourglass-empty",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "hourglass-empty",
        "id": "eds-action-hourglass-empty",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/hourglass-empty\">\n<path id=\"Icon\" d=\"M18.2518 16.6667C20.9063 15.1219 23.2007 11.1373 23.8298 7.32366C24.0095 6.23381 23.1046 5.33333 22 5.33333H10C8.89543 5.33333 7.99048 6.23381 8.17024 7.32366C8.79925 11.1373 11.0937 15.1219 13.7482 16.6667C11.0937 18.2115 8.79925 22.196 8.17024 26.0097C7.99048 27.0995 8.89543 28 10 28H22C23.1046 28 24.0095 27.0995 23.8298 26.0097C23.2007 22.196 20.9063 18.2115 18.2518 16.6667Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2652",
        "figmaName": "Action/log-in-1",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "log-in-1",
        "id": "eds-action-log-in-1",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/log-in-1\">\n<path id=\"Icon\" d=\"M14.6667 26.6667H26C27.1046 26.6667 28 25.7712 28 24.6667V7.33333C28 6.22877 27.1046 5.33333 26 5.33333H14.6667M4 16L18.6667 16M14.6667 12L18.6667 16L14.6667 20\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2645",
        "figmaName": "Action/copy-1",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "copy-1",
        "id": "eds-action-copy-1",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/copy-1\">\n<path id=\"Icon\" d=\"M4 21.3333V4.66666C4 3.5621 4.89543 2.66667 6 2.66667H20M11.3333 29.3333H24.6667C25.7712 29.3333 26.6667 28.4379 26.6667 27.3333V10C26.6667 8.89543 25.7712 8 24.6667 8H11.3333C10.2288 8 9.33333 8.89543 9.33333 10V27.3333C9.33333 28.4379 10.2288 29.3333 11.3333 29.3333Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2639",
        "figmaName": "Action/copy-2",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "copy-2",
        "id": "eds-action-copy-2",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/copy-2\">\n<path id=\"Icon\" d=\"M12 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V12M14 28H26C27.1046 28 28 27.1046 28 26V14C28 12.8954 27.1046 12 26 12H14C12.8954 12 12 12.8954 12 14V26C12 27.1046 12.8954 28 14 28Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2636",
        "figmaName": "Action/delete-1",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "delete-1",
        "id": "eds-action-delete-1",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/delete-1\">\n<path id=\"Icon\" d=\"M8 6.66667H24M12 6.66667L12.963 5.5432C14.5594 3.68075 17.4406 3.68075 19.037 5.5432L20 6.66667M11.3333 26.6667H20.6667C21.7712 26.6667 22.6667 25.7712 22.6667 24.6667V11.6667C22.6667 11.1144 22.219 10.6667 21.6667 10.6667H10.3333C9.78105 10.6667 9.33333 11.1144 9.33333 11.6667V24.6667C9.33333 25.7712 10.2288 26.6667 11.3333 26.6667Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2635",
        "figmaName": "Action/delete-2",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "delete-2",
        "id": "eds-action-delete-2",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/delete-2\">\n<path id=\"Icon\" d=\"M8 9.33333V24.6667C8 25.7712 8.89543 26.6667 10 26.6667H22C23.1046 26.6667 24 25.7712 24 24.6667V9.33333M8 9.33333H6.66667M8 9.33333H10.6667M24 9.33333H25.3333M24 9.33333H21.3333M13.3333 14.6667V21.3333M18.6667 14.6667V21.3333M10.6667 9.33333V6C10.6667 4.89543 11.5621 4 12.6667 4H19.3333C20.4379 4 21.3333 4.89543 21.3333 6V9.33333M10.6667 9.33333H21.3333\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2657",
        "figmaName": "Action/save",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "save",
        "id": "eds-action-save",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/save\">\n<path id=\"Icon\" d=\"M10.6667 26.6667H7.33333C6.22877 26.6667 5.33333 25.7712 5.33333 24.6667V7.33334C5.33333 6.22877 6.22876 5.33333 7.33333 5.33333H12M10.6667 26.6667V18.3333C10.6667 17.781 11.1144 17.3333 11.6667 17.3333H20.3333C20.8856 17.3333 21.3333 17.781 21.3333 18.3333V26.6667M10.6667 26.6667H21.3333M21.3333 26.6667H24.6667C25.7712 26.6667 26.6667 25.7712 26.6667 24.6667V11.4951C26.6667 10.9647 26.456 10.456 26.0809 10.0809L21.9191 5.91912C21.544 5.54405 21.0353 5.33333 20.5049 5.33333H20M20 5.33333V9.66667C20 10.219 19.5523 10.6667 19 10.6667H13C12.4477 10.6667 12 10.219 12 9.66667V5.33333M20 5.33333H12\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2634",
        "figmaName": "Action/edit-01",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "edit-01",
        "id": "eds-action-edit-01",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/edit-01\">\n<path id=\"Icon\" d=\"M20 8.66667L23.3333 12M5.33333 26.6667V23.3333L22.5858 6.08088C23.3668 5.29983 24.6332 5.29983 25.4142 6.08088L25.9191 6.58579C26.7002 7.36683 26.7002 8.63316 25.9191 9.41421L8.66667 26.6667H5.33333Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2631",
        "figmaName": "Action/edit-02",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "edit-02",
        "id": "eds-action-edit-02",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/edit-02\">\n<path id=\"Icon\" d=\"M20 8.66667L23.3333 12M14.6667 26.6667H26.6667M5.33333 26.6667V23.3333L22.5858 6.08088C23.3668 5.29983 24.6332 5.29983 25.4142 6.08088L25.9191 6.58579C26.7002 7.36683 26.7002 8.63316 25.9191 9.41421L8.66667 26.6667H5.33333Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2630",
        "figmaName": "Action/edit-03",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "edit-03",
        "id": "eds-action-edit-03",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/edit-03\">\n<path id=\"Icon\" d=\"M16 5.33333H7.33333C6.22876 5.33333 5.33333 6.22877 5.33333 7.33334V24.6667C5.33333 25.7712 6.22876 26.6667 7.33333 26.6667H24.6667C25.7712 26.6667 26.6667 25.7712 26.6667 24.6667V16M12 20V16.6667L23.9191 4.74755C24.7002 3.9665 25.9665 3.9665 26.7475 4.74755L27.2525 5.25245C28.0335 6.0335 28.0335 7.29983 27.2525 8.08088L20.6667 14.6667L15.3333 20H12Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2629",
        "figmaName": "Action/link-1",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "link-1",
        "id": "eds-action-link-1",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/link-1\">\n<path id=\"Icon\" d=\"M18.6667 16C18.6667 18.9455 16.2789 21.3333 13.3333 21.3333H8C5.05448 21.3333 2.66667 18.9455 2.66667 16C2.66667 13.0545 5.05448 10.6667 8 10.6667H10.6667M13.3333 16C13.3333 13.0545 15.7211 10.6667 18.6667 10.6667H24C26.9455 10.6667 29.3333 13.0545 29.3333 16C29.3333 18.9455 26.9455 21.3333 24 21.3333H21.3333\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2643",
        "figmaName": "Action/link-2",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "link-2",
        "id": "eds-action-link-2",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/link-2\">\n<path id=\"Icon\" d=\"M13.3333 10.6667H8C5.79086 10.6667 4 12.4575 4 14.6667V17.3333C4 19.5425 5.79086 21.3333 8 21.3333H13.3333M18.6667 10.6667H24C26.2091 10.6667 28 12.4575 28 14.6667V17.3333C28 19.5425 26.2091 21.3333 24 21.3333H18.6667M12 16H20\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2633",
        "figmaName": "Action/link-3",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "link-3",
        "id": "eds-action-link-3",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/link-3\">\n<path id=\"Icon\" d=\"M9.86961 13.9551L5.5484 18.2763C3.9863 19.8384 3.9863 22.3711 5.5484 23.9332L8.06256 26.4474C9.62465 28.0095 12.1573 28.0095 13.7194 26.4474L18.0406 22.1262M13.9551 9.86964L18.2763 5.54843C19.8384 3.98633 22.3711 3.98633 23.9332 5.54843L26.4473 8.06259C28.0094 9.62468 28.0094 12.1573 26.4473 13.7194L22.1261 18.0406M12.9337 19.062L19.062 12.9338\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2628",
        "figmaName": "Action/infinite",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "infinite",
        "id": "eds-action-infinite",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/infinite\">\n<path id=\"Icon\" d=\"M13.3333 12.5563C12.2156 11.4336 10.9422 10.6667 9.33333 10.6667C6.38781 10.6667 4 13.0545 4 16C4 18.9455 6.38781 21.3333 9.33333 21.3333C15.3333 21.3333 16.6667 10.6667 22.6667 10.6667C25.6122 10.6667 28 13.0545 28 16C28 18.9455 25.6122 21.3333 22.6667 21.3333C21.0578 21.3333 19.7844 20.5663 18.6667 19.4437\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2627",
        "figmaName": "Action/format-list-bulleted",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "format-list-bulleted",
        "id": "eds-action-format-list-bulleted",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/format-list-bulleted\">\n<path id=\"Icon\" d=\"M12 24H26.6667M12 16H26.6667M12 8H26.6667M5.33333 23.3333H6.66667V24.6667H5.33333V23.3333ZM5.33333 15.3333H6.66667V16.6667H5.33333V15.3333ZM5.33333 7.33333V8.66667H6.66667V7.33333H5.33333Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2625",
        "figmaName": "Action/layers-three",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "layers-three",
        "id": "eds-action-layers-three",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/layers-three\">\n<path id=\"Icon\" d=\"M28 16L16 21.3333L4.00001 16M28 21.3333L16 26.6667L4 21.3333M28 10.6667L16 16L4.00001 10.6667L16 5.33333L28 10.6667Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2624",
        "figmaName": "Action/format-align-left",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "format-align-left",
        "id": "eds-action-format-align-left",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/format-align-left\">\n<path id=\"Icon\" d=\"M5.33333 5.33333H26.6667M5.33333 16H26.6667M5.33333 26.6667H26.6667M5.33333 10.6667H18.6667M5.33333 21.3333H18.6667\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2693",
        "figmaName": "Action/format-align-right",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "format-align-right",
        "id": "eds-action-format-align-right",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/format-align-right\">\n<path id=\"Icon\" d=\"M5.33333 5.33333H26.6667M5.33333 16H26.6667M5.33333 26.6667H26.6667M13.3333 10.6667H26.6667M13.3333 21.3333H26.6667\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2622",
        "figmaName": "Action/format-align-center",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "format-align-center",
        "id": "eds-action-format-align-center",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/format-align-center\">\n<path id=\"Icon\" d=\"M5.33333 5.33333H26.6667M5.33333 16H26.6667M5.33333 26.6667H26.6667M9.33333 10.6667H22.6667M9.33333 21.3333H22.6667\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2621",
        "figmaName": "Action/format-align-justify",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "format-align-justify",
        "id": "eds-action-format-align-justify",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/format-align-justify\">\n<path id=\"Icon\" d=\"M5.33333 5.33333H26.6667M5.33333 16H26.6667M5.33333 26.6667H26.6667M5.33333 10.6667H26.6667M5.33333 21.3333H26.6667\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2642",
        "figmaName": "Action/format-indent-increase",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "format-indent-increase",
        "id": "eds-action-format-indent-increase",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/format-indent-increase\">\n<path id=\"Icon\" d=\"M5.33333 5.33333H26.6667M17.3333 16H26.6667M5.33333 26.6667H26.6667M17.3333 10.6667H26.6667M17.3333 21.3333H26.6667M10.6667 16L5.33333 12V20L10.6667 16Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2618",
        "figmaName": "Action/format-indent-decrease",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "format-indent-decrease",
        "id": "eds-action-format-indent-decrease",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/format-indent-decrease\">\n<path id=\"Icon\" d=\"M5.33333 5.33333H26.6667M17.3333 16H26.6667M5.33333 26.6667H26.6667M17.3333 10.6667H26.6667M17.3333 21.3333H26.6667M5.33333 16L10.6667 12V20L5.33333 16Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2616",
        "figmaName": "Action/gps-on",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "gps-on",
        "id": "eds-action-gps-on",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/gps-on\">\n<path id=\"Icon\" d=\"M16 26.6667C21.891 26.6667 26.6667 21.891 26.6667 16M16 26.6667C10.109 26.6667 5.33333 21.891 5.33333 16M16 26.6667V29.3333M26.6667 16C26.6667 10.109 21.891 5.33333 16 5.33333M26.6667 16H29.3333M16 5.33333C10.109 5.33333 5.33333 10.109 5.33333 16M16 5.33333V2.66667M5.33333 16H2.66667M17.3333 16C17.3333 16.7364 16.7364 17.3333 16 17.3333C15.2636 17.3333 14.6667 16.7364 14.6667 16C14.6667 15.2636 15.2636 14.6667 16 14.6667C16.7364 14.6667 17.3333 15.2636 17.3333 16Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2665",
        "figmaName": "Action/bar-chart",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "bar-chart",
        "id": "eds-action-bar-chart",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/bar-chart\">\n<path id=\"Icon\" d=\"M18.6667 13.3333V8.66667C18.6667 7.5621 17.7712 6.66667 16.6667 6.66667H14C12.8954 6.66667 12 7.56209 12 8.66666V17.3333M18.6667 13.3333V25.3333M18.6667 13.3333H23.3333C24.4379 13.3333 25.3333 14.2288 25.3333 15.3333V23.3333C25.3333 24.4379 24.4379 25.3333 23.3333 25.3333H18.6667M18.6667 25.3333H12M12 25.3333V17.3333M12 25.3333H7.33333C6.22876 25.3333 5.33333 24.4379 5.33333 23.3333V19.3333C5.33333 18.2288 6.22876 17.3333 7.33333 17.3333H12\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2617",
        "figmaName": "Action/map",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "map",
        "id": "eds-action-map",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/map\">\n<path id=\"Icon\" d=\"M20 9.33333L12 5.33333L4 9.33333V26.6667L12 22.6667M12 5.33333V22.6667M20 9.33333L28 6.66667V24L20 26.6667L12 22.6667M20 26.6667V9.33333\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2658",
        "figmaName": "Action/store",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "store",
        "id": "eds-action-store",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/store\">\n<path id=\"Icon\" d=\"M26.6667 15.4948V24.6667C26.6667 25.7712 25.7712 26.6667 24.6667 26.6667H7.33334C6.22877 26.6667 5.33333 25.7712 5.33333 24.6667V15.4948M21.3333 5.33333L22 13C22 14.6569 23.3431 16 25 16C26.5705 16 27.8591 14.7933 27.9892 13.2565C28.0036 13.0867 27.9782 12.9166 27.9352 12.7517L26.39 6.82849C26.1603 5.94783 25.3649 5.33333 24.4548 5.33333H7.54519C6.63506 5.33333 5.8397 5.94783 5.60996 6.82849L4.06477 12.7517C4.02176 12.9166 3.99644 13.0867 4.01081 13.2565C4.14092 14.7933 5.42954 16 7 16C8.65685 16 10 14.6569 10 13M10.6667 5.33333L10 13C10 14.6569 11.3431 16 13 16C14.6569 16 16 14.6569 16 13M16 13C16 14.6569 17.3431 16 19 16C20.6569 16 22 14.6569 22 13M16 13V5.33333\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2623",
        "figmaName": "Action/village",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "village",
        "id": "eds-action-village",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/village\">\n<path id=\"Icon\" d=\"M12 26.6666L18.6667 26.6665V12.8283C18.6667 12.2979 18.456 11.7892 18.0809 11.4141L13.4142 6.74742C12.6332 5.96637 11.3668 5.96637 10.5858 6.74742L5.91912 11.4141C5.54405 11.7892 5.33333 12.2979 5.33333 12.8283V24.6666C5.33333 25.7711 6.22875 26.6666 7.33331 26.6666L12 26.6666ZM18.6667 26.6665L26 26.6666C27.1046 26.6666 28 25.7712 28 24.6666V16.8284C28 16.2979 27.7893 15.7892 27.4142 15.4142L24.0809 12.0808C23.2998 11.2998 22.0335 11.2998 21.2525 12.0808L18.6667 14.6666M12 26.6666V21.3333\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2641",
        "figmaName": "Action/company",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "company",
        "id": "eds-action-company",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/company\">\n<path id=\"Icon\" d=\"M14.6667 26.6667H28V12.6667C28 11.5621 27.1046 10.6667 26 10.6667H20M14.6667 21.3333H14.68M22.6667 21.3333H22.68M9.33333 21.3333H9.34667M14.6667 16H14.68M22.6667 16H22.68M9.33333 16H9.34667M14.6667 10.6667H14.68M9.33333 10.6667H9.34667M20 26.6667V7.33333C20 6.22876 19.1046 5.33333 18 5.33333H6C4.89543 5.33333 4 6.22877 4 7.33334V26.6667H20Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2632",
        "figmaName": "Action/location",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "location",
        "id": "eds-action-location",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/location\">\n<path id=\"Icon\" d=\"M9.83445 6.47887C11.5407 4.82628 13.5958 4 16 4C18.4042 4 20.4497 4.81689 22.1365 6.4507C23.8233 8.08452 24.6667 10.0657 24.6667 12.3944C24.6667 13.5587 24.3661 14.892 23.7651 16.3944C23.1641 17.8967 22.437 19.3052 21.5839 20.6197C20.7308 21.9343 19.8874 23.1643 19.0537 24.3099C18.22 25.4554 17.5123 26.3662 16.9306 27.0423L16 28C15.7673 27.7371 15.4571 27.3897 15.0694 26.9577C14.6816 26.5258 13.9836 25.662 12.9754 24.3662C11.9672 23.0704 11.085 21.8122 10.3289 20.5915C9.5727 19.3709 8.88442 17.9906 8.26398 16.4507C7.64355 14.9108 7.33333 13.5587 7.33333 12.3944C7.33333 10.0657 8.16703 8.0939 9.83445 6.47887ZM17.3333 12.6667C17.3333 13.403 16.7364 14 16 14C15.2636 14 14.6667 13.403 14.6667 12.6667C14.6667 11.9303 15.2636 11.3333 16 11.3333C16.7364 11.3333 17.3333 11.9303 17.3333 12.6667Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2614",
        "figmaName": "Action/pin-drop",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "pin-drop",
        "id": "eds-action-pin-drop",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/pin-drop\">\n<path id=\"Icon\" d=\"M6.66667 26.6667H25.3333M16 10.6667H16.0133M11.2573 5.92801C12.5697 4.64266 14.1506 4 16 4C17.8494 4 19.4228 4.63536 20.7204 5.9061C22.0179 7.17685 22.6667 8.71778 22.6667 10.529C22.6667 11.4345 22.4355 12.4716 21.9732 13.6401C21.5108 14.8086 20.9515 15.904 20.2953 16.9264C19.6391 17.9489 18.9903 18.9056 18.349 19.7966C17.7077 20.6875 17.1633 21.3959 16.7159 21.9218L16 22.6667C15.821 22.4622 15.5824 22.192 15.2841 21.856C14.9858 21.5201 14.4489 20.8482 13.6734 19.8404C12.8978 18.8325 12.2192 17.8539 11.6376 16.9045C11.0559 15.9551 10.5265 14.8816 10.0492 13.6839C9.57196 12.4862 9.33333 11.4345 9.33333 10.529C9.33333 8.71778 9.97464 7.18415 11.2573 5.92801Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2668",
        "figmaName": "Action/copyright",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "copyright",
        "id": "eds-action-copyright",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/copyright\">\n<path id=\"Icon\" d=\"M18.6667 12C18.0263 11.2011 17.24 10.6667 16 10.6667C13.4359 10.6667 12 12.1905 12 16C12 19.8095 13.4359 21.3333 16 21.3333C17.24 21.3333 18.0263 20.7989 18.6667 20M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2613",
        "figmaName": "Action/ticket",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "ticket",
        "id": "eds-action-ticket",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/ticket\">\n<path id=\"Icon\" d=\"M16 21.3333H16.0133M16 16H16.0133M16 10.6667H16.0133M28 18.6667V23.3333C28 24.4379 27.1046 25.3333 26 25.3333H6C4.89543 25.3333 4 24.4379 4 23.3333V18.6667C5.47276 18.6667 6.66667 17.4728 6.66667 16C6.66667 14.5272 5.47276 13.3333 4 13.3333V8.66666C4 7.5621 4.89543 6.66667 6 6.66667H26C27.1046 6.66667 28 7.5621 28 8.66667V13.3333C26.5272 13.3333 25.3333 14.5272 25.3333 16C25.3333 17.4728 26.5272 18.6667 28 18.6667Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2695",
        "figmaName": "Action/gift",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "gift",
        "id": "eds-action-gift",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/gift\">\n<path id=\"Icon\" d=\"M4 14.6667H28V11.3333C28 10.2288 27.1046 9.33333 26 9.33333H22.6667M28 14.6667H26.6667V24.6667C26.6667 25.7712 25.7712 26.6667 24.6667 26.6667H16M16 26.6667H7.33334C6.22877 26.6667 5.33333 25.7712 5.33333 24.6667V16C5.33333 15.2636 4.73638 14.6667 4 14.6667V11.3333C4 10.2288 4.89543 9.33333 6 9.33333H9.33333M16 9.33333V26.6667M16 9.33333H22.6667M16 9.33333H9.33333M16 9.33333V8M22.6667 9.33333L23.0877 7.64923C23.5511 5.7956 22.1491 4 20.2385 4C19.2565 4 18.3395 4.49076 17.7948 5.30781L16 8M9.33333 9.33333L8.91231 7.64923C8.4489 5.7956 9.85086 4 11.7615 4C12.7435 4 13.6605 4.49076 14.2052 5.30781L16 8\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2638",
        "figmaName": "Action/award",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "award",
        "id": "eds-action-award",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/award\">\n<path id=\"Icon\" d=\"M10.6667 17.963V28L16 25.3333L21.3333 28V17.963M24 12C24 16.4183 20.4183 20 16 20C11.5817 20 8 16.4183 8 12C8 7.58172 11.5817 4 16 4C20.4183 4 24 7.58172 24 12Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2698",
        "figmaName": "Action/school",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "school",
        "id": "eds-action-school",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/school\">\n<path id=\"Icon\" d=\"M28 13.3333L24 15.5556L16 20L8 15.5556L4 13.3333L16 6.66667L28 13.3333ZM28 13.3333L28.2278 13.4472C28.9053 13.786 29.3333 14.4785 29.3333 15.2361V22.6665M8 15.5556V23.5556L16 28L24 23.5556L24 15.5556\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2685",
        "figmaName": "Action/token",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "token",
        "id": "eds-action-token",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/token\">\n<path id=\"Icon\" d=\"M26.6667 10.2222L16.9239 5.14785C16.3449 4.84629 15.6551 4.84628 15.0761 5.14785L5.33333 10.2222V21.031C5.33333 21.765 5.73538 22.44 6.38077 22.7896L16 28L25.6192 22.7896C26.2646 22.44 26.6667 21.765 26.6667 21.031L26.6667 10.2222ZM16 28V20M5.33333 10.2222L12.4822 14.0945M26.6667 10.2222L19.5178 14.0945M16 20C13.7909 20 12 18.2091 12 16C12 15.3101 12.1747 14.661 12.4822 14.0945C13.1593 12.847 14.4808 12 16 12C17.5192 12 18.8407 12.847 19.5178 14.0945C19.8253 14.661 20 15.3101 20 16C20 18.2091 18.2091 20 16 20Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2690",
        "figmaName": "Action/umbrella",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "umbrella",
        "id": "eds-action-umbrella",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/umbrella\">\n<path id=\"Icon\" d=\"M16 16H28C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16H16ZM16 16V25C16 26.6569 17.3431 28 19 28H19.6667C21.3235 28 22.6667 26.6569 22.6667 25V24\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2612",
        "figmaName": "Action/box",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "box",
        "id": "eds-action-box",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/box\">\n<path id=\"Icon\" d=\"M13.3333 17.3333H18.6667M26.6667 10.6667V26C26.6667 27.1046 25.7712 28 24.6667 28H7.33334C6.22877 28 5.33333 27.1046 5.33333 26V10.6667M28 10.6667V6C28 4.89543 27.1046 4 26 4H6C4.89543 4 4 4.89543 4 6V10.6667H28Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2626",
        "figmaName": "Action/gem",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "gem",
        "id": "eds-action-gem",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/gem\">\n<path id=\"Icon\" d=\"M28 13.3333H3.99999M14 6.66667L12 13.3333L16 26.6667L20 13.3333L18 6.66667M4.70922 14.1214L15.0089 25.5655C15.5386 26.154 16.4614 26.154 16.9911 25.5655L27.2908 14.1214C27.706 13.66 27.7479 12.9732 27.392 12.4648L23.7314 7.23538C23.4819 6.87895 23.0742 6.66667 22.6391 6.66667H9.36087C8.92578 6.66667 8.51806 6.87895 8.26856 7.23538L4.60797 12.4648C4.25205 12.9732 4.29403 13.66 4.70922 14.1214Z\" stroke-width=\"1.4\" stroke-linejoin=\"bevel\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2620",
        "figmaName": "Action/command",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "command",
        "id": "eds-action-command",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/command\">\n<path id=\"Icon\" d=\"M13.3333 13.3333H9.66667C8.00981 13.3333 6.66667 11.9902 6.66667 10.3333V9.66667C6.66667 8.00981 8.00981 6.66667 9.66666 6.66667H10.3333C11.9902 6.66667 13.3333 8.00981 13.3333 9.66666V13.3333ZM13.3333 13.3333H18.6667M13.3333 13.3333V18.6667M18.6667 13.3333H22.3333C23.9902 13.3333 25.3333 11.9902 25.3333 10.3333V9.66666C25.3333 8.00981 23.9902 6.66667 22.3333 6.66667H21.6667C20.0098 6.66667 18.6667 8.00981 18.6667 9.66667V13.3333ZM18.6667 13.3333V18.6667M18.6667 18.6667V22.3333C18.6667 23.9902 20.0098 25.3333 21.6667 25.3333H22.3333C23.9902 25.3333 25.3333 23.9902 25.3333 22.3333V21.6667C25.3333 20.0098 23.9902 18.6667 22.3333 18.6667H18.6667ZM18.6667 18.6667H13.3333M13.3333 18.6667H9.66666C8.00981 18.6667 6.66667 20.0098 6.66667 21.6667V22.3333C6.66667 23.9902 8.00981 25.3333 9.66667 25.3333H10.3333C11.9902 25.3333 13.3333 23.9902 13.3333 22.3333V18.6667Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2673",
        "figmaName": "Action/book-open",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "book-open",
        "id": "eds-action-book-open",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/book-open\">\n<path id=\"Icon\" d=\"M16 9.99968V26M16 26L13.2669 24.6334C12.4337 24.2169 11.5151 24 10.5836 24H6C4.89543 24 4 23.1046 4 22V10C4 8.89543 4.89543 8 6 8H10.5838C11.5151 8 12.4337 8.21681 13.2667 8.63327L16 9.99968L18.7333 8.63318C19.5663 8.21671 20.4849 7.99988 21.4162 7.99986L25.9999 7.99973C27.1045 7.99971 28 8.89514 28 9.99973V21.9997C28 23.1042 27.1046 23.9997 26 23.9997H21.4166C20.485 23.9997 19.5662 24.2166 18.733 24.6333L16 26Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2611",
        "figmaName": "Action/compass",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "compass",
        "id": "eds-action-compass",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/compass\">\n<path id=\"Icon\" d=\"M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16ZM21.3333 10.6667L13.3333 13.3333L10.6667 21.3333L18.6667 18.6667L21.3333 10.6667Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2687",
        "figmaName": "Action/bolt-1",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "bolt-1",
        "id": "eds-action-bolt-1",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/bolt-1\">\n<path id=\"Icon\" d=\"M18.6666 2.66662L5.33326 18.6666H14.7272L13.3333 29.3333L26.6666 13.3333H17.2727L18.6666 2.66662Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2607",
        "figmaName": "Action/bolt-1-off",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "bolt-1-off",
        "id": "eds-action-bolt-1-off",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/bolt-1-off\">\n<path id=\"Icon\" d=\"M14.1211 8.12117L18.6666 2.66662L17.5108 11.5108M11.3939 11.3939L5.33326 18.6666H14.7272L13.3333 29.3333L20.606 20.606M11.3939 11.3939L5.33326 5.33329M11.3939 11.3939L20.606 20.606M19.3333 13.3333H26.6666L23.3333 17.3333M20.606 20.606L26.6666 26.6666\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2606",
        "figmaName": "Action/bolt-2",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "bolt-2",
        "id": "eds-action-bolt-2",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/bolt-2\">\n<path id=\"Icon\" d=\"M10.6667 4H21.3333L19.3333 10.6667H28L10.6667 29.3333L13.3333 16H6.66667L10.6667 4Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2637",
        "figmaName": "Action/rocket-launch",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "rocket-launch",
        "id": "eds-action-rocket-launch",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/rocket-launch\" clip-path=\"url(#clip0_8573_11956)\">\n<path id=\"Icon\" d=\"M16 9.33333C20 5.33333 22.6667 5.33333 26.6667 5.33333C26.6667 9.33333 26.6667 12 22.6667 16C21.1676 17.4991 15.3333 22 15.3333 22M22.6667 16L23.4752 20.0427C23.8031 21.682 23.29 23.3767 22.1078 24.5588L19.6041 27.0626C19.1343 27.5324 18.3455 27.4219 18.0228 26.8411L15.3333 22M16 9.33333L10 16.6667M16 9.33333L11.9573 8.52479C10.318 8.19693 8.62329 8.71004 7.44117 9.89216L4.93744 12.3959C4.46765 12.8657 4.57813 13.6545 5.1589 13.9772L10 16.6667M10 16.6667L15.3333 22M20.6667 11.334L19.3333 12.6673M4 28L9.0589 26.9882C9.99375 26.8012 10.6667 25.9804 10.6667 25.0271L10.6667 23.3333C10.6667 22.2288 9.77124 21.3333 8.66667 21.3333L6.97294 21.3333C6.01958 21.3333 5.19875 22.0063 5.01178 22.9411L4 28Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n<defs>\n<clipPath id=\"clip0_8573_11956\">\n<rect width=\"32\" height=\"32\" fill=\"white\"/>\n</clipPath>\n</defs>\n</svg>"
      },
      {
        "nodeId": "8411:2605",
        "figmaName": "Action/close-circle",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "close-circle",
        "id": "eds-action-close-circle",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/close-circle\">\n<path id=\"Icon\" d=\"M20 12.0001L12 20.0001M20 20.0001L12 12.0001M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2653",
        "figmaName": "Action/close-circle-1",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "close-circle-1",
        "id": "eds-action-close-circle-1",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/close-circle-1\">\n<circle id=\"Ellipse 109\" cx=\"16\" cy=\"16\" r=\"14\" fill=\"black\" fill-opacity=\"0.5\"/>\n<g id=\"Icon\">\n<path d=\"M21 11L11 21Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"currentColor\"/>\n<path d=\"M21 21L11 11Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"currentColor\"/>\n<path d=\"M21 11L11 21M21 21L11 11\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"white\"/>\n</g>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2610",
        "figmaName": "Action/toolbox",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "toolbox",
        "id": "eds-action-toolbox",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/toolbox\">\n<path id=\"Icon\" d=\"M28 16.1692V26C28 26.5523 27.5523 27 27 27H5C4.44772 27 4 26.5523 4 26V16.1692M28 16.1692V12.4154C28 11.3108 27.1046 10.4154 26 10.4154H21.3333M28 16.1692H22.6667M4 16.1692V12.4154C4 11.3108 4.89543 10.4154 6 10.4154H10.6667M4 16.1692H9.33333M9.33333 16.1692V14.8154M9.33333 16.1692V17.5231M9.33333 16.1692H22.6667M22.6667 16.1692V17.5231M22.6667 16.1692V14.8154M21.3333 10.4154V7C21.3333 5.89543 20.4379 5 19.3333 5H12.6667C11.5621 5 10.6667 5.89543 10.6667 7V10.4154M21.3333 10.4154H10.6667\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:5286",
        "figmaName": "Action/layout",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "layout",
        "id": "eds-action-layout",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/layout\">\n<path id=\"Icon\" d=\"M13.4737 5.17188V26.8281M4 16V25C4 26.1046 4.89543 27 6 27H16H26C27.1046 27 28 26.1046 28 25V16V7C28 5.89543 27.1046 5 26 5H16H6C4.89543 5 4 5.89543 4 7V16Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"#1C2024\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2619",
        "figmaName": "Action/columns-three",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "columns-three",
        "id": "eds-action-columns-three",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/columns-three\">\n<path id=\"Icon\" d=\"M12 5.33333V26.6667M20 5.33333V26.6667M7.33334 26.6667H24.6667C25.7712 26.6667 26.6667 25.7712 26.6667 24.6667V7.33333C26.6667 6.22876 25.7712 5.33333 24.6667 5.33333H7.33333C6.22876 5.33333 5.33333 6.22877 5.33333 7.33334V24.6667C5.33333 25.7712 6.22877 26.6667 7.33334 26.6667Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2615",
        "figmaName": "Action/globe",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "globe",
        "id": "eds-action-globe",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/globe\">\n<path id=\"Icon\" d=\"M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4M16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4M16 28C12.6201 24.5199 10.6667 20.4068 10.6667 16C10.6667 11.5932 12.6201 7.48007 16 4M16 28C19.3799 24.5199 21.3333 20.4068 21.3333 16C21.3333 11.5932 19.3799 7.48007 16 4M26.6667 12H5.33333M26.6667 20H5.33333\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2676",
        "figmaName": "Action/offer",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "offer",
        "id": "eds-action-offer",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/offer\">\n<path id=\"Icon\" d=\"M10.6667 10.6667H10.68M15.2525 5.91912L26.5858 17.2525C27.3668 18.0335 27.3668 19.2998 26.5858 20.0809L20.0809 26.5858C19.2998 27.3668 18.0335 27.3668 17.2525 26.5858L5.91912 15.2525C5.54405 14.8774 5.33333 14.3687 5.33333 13.8382V7.33333C5.33333 6.22876 6.22876 5.33333 7.33333 5.33333H13.8382C14.3687 5.33333 14.8774 5.54405 15.2525 5.91912Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2671",
        "figmaName": "Action/atom",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "atom",
        "id": "eds-action-atom",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/atom\">\n<path id=\"Icon\" d=\"M16 16H16.0133M16.6667 16C16.6667 16.3682 16.3682 16.6667 16 16.6667C15.6318 16.6667 15.3333 16.3682 15.3333 16C15.3333 15.6318 15.6318 15.3333 16 15.3333C16.3682 15.3333 16.6667 15.6318 16.6667 16ZM20.2426 11.7574C25.9703 17.485 28.714 24.0278 26.3709 26.3709C24.0278 28.714 17.485 25.9703 11.7574 20.2426C6.02967 14.515 3.28595 7.97225 5.6291 5.6291C7.97225 3.28595 14.515 6.02967 20.2426 11.7574ZM11.7578 11.7574C6.03006 17.4851 3.28635 24.0278 5.62949 26.3709C7.97264 28.714 14.5153 25.9703 20.243 20.2426C25.9707 14.515 28.7144 7.97225 26.3713 5.6291C24.0281 3.28596 17.4854 6.02967 11.7578 11.7574Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2609",
        "figmaName": "Action/droplet",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "droplet",
        "id": "eds-action-droplet",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/droplet\">\n<path id=\"Icon\" d=\"M9.87174 24.6335C6.4872 21.2489 6.66654 16.6667 9.87174 12.377C13.0769 8.08725 15.3271 5.13592 16 3.58203C16.6729 5.13592 18.9232 8.08725 22.1284 12.377C25.3336 16.6667 25.513 21.2489 22.1284 24.6335C20.4361 26.3258 18.2182 27.1719 16.0002 27.1719C13.7821 27.1719 11.5641 26.3258 9.87174 24.6335Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2608",
        "figmaName": "Action/planet",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "planet",
        "id": "eds-action-planet",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/planet\">\n<path id=\"Icon\" d=\"M22.1469 10.8796C25.8615 10.6228 28.5155 11.1915 28.8792 12.5491C29.451 14.683 24.1484 17.9578 17.0355 19.8637C9.92262 21.7696 3.69298 21.5848 3.12121 19.4509C2.7575 18.0935 4.77087 16.2744 8.11518 14.6397M8.11518 14.6397C8.03945 15.0818 8 15.5363 8 16C8 20.4183 11.5817 24 16 24C20.4183 24 24 20.4183 24 16C24 14.0522 23.3039 12.267 22.1469 10.8796C20.6794 9.11982 18.4705 8 16 8C12.0454 8 8.76103 10.8694 8.11518 14.6397Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2678",
        "figmaName": "Action/link-external",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "link-external",
        "id": "eds-action-link-external",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/link-external\">\n<path id=\"Icon\" d=\"M14.625 4.99994H9.125C6.84682 4.99994 5 6.84676 5 9.12494V22.8751C5 25.1532 6.84683 27.0001 9.125 27.0001H22.875C25.1532 27.0001 27 25.1532 27 22.8751V17.3749M27 11.1876V4.99994L20.1243 5.00027M27 4.99994L15.3115 16.6871\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2677",
        "figmaName": "Action/bulb",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "bulb",
        "id": "eds-action-bulb",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/bulb\">\n<path id=\"Icon\" d=\"M20 21.3333V25.5C20 26.8807 18.8807 28 17.5 28H14.5C13.1193 28 12 26.8807 12 25.5V21.3333M20 21.3333V18.9297C22.3912 17.5465 24 14.9611 24 12C24 7.58172 20.4183 4 16 4C11.5817 4 8 7.58172 8 12C8 14.9611 9.6088 17.5465 12 18.9297V21.3333M20 21.3333H12M19.3333 12C19.3333 10.1591 17.8409 8.66667 16 8.66667\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:2651",
        "figmaName": "Action/click",
        "category": "Action",
        "sectionLabel": "Action",
        "slug": "click",
        "id": "eds-action-click",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Action/click\" clip-path=\"url(#clip0_8573_11988)\">\n<path id=\"Icon\" d=\"M9.33333 9.33333L7.33333 7.33333M20 9.33333L22 7.33333M7.33333 22L9.33333 20M14.6667 6.66667L14.6667 4M6.66667 14.6667L4 14.6667M22.8804 22.6516L28.4661 20.4659C28.89 20.3001 28.8898 19.7003 28.4659 19.5346L15.2445 14.3681C14.8386 14.2094 14.4382 14.6099 14.5969 15.0158L19.7634 28.2371C19.9291 28.6611 20.5289 28.6612 20.6947 28.2374L22.8804 22.6516Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n<defs>\n<clipPath id=\"clip0_8573_11988\">\n<rect width=\"32\" height=\"32\" fill=\"white\"/>\n</clipPath>\n</defs>\n</svg>"
      }
    ],
    "kind": "eds"
  },
  {
    "id": "arrow-(pacstrust)",
    "label": "Arrow (PacsTrust)",
    "icons": [
      {
        "nodeId": "8411:3087",
        "figmaName": "Arrow/arrow-forward-long",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "arrow-forward-long",
        "id": "eds-arrow-arrow-forward-long",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/arrow-forward-long\">\n<path id=\"Icon\" d=\"M21.3333 23L28 16L21.3333 9M28 16H4\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3086",
        "figmaName": "Arrow/arrow-back-long",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "arrow-back-long",
        "id": "eds-arrow-arrow-back-long",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/arrow-back-long\">\n<path id=\"Icon\" d=\"M10.6667 9L4 16L10.6667 23M4 16H28\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3081",
        "figmaName": "Arrow/arrow-down",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "arrow-down",
        "id": "eds-arrow-arrow-down",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/arrow-down\">\n<path id=\"Icon\" d=\"M16 7V25M24 17.2857L16 25L8 17.2857\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3062",
        "figmaName": "Arrow/arrow-up",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "arrow-up",
        "id": "eds-arrow-arrow-up",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/arrow-up\">\n<path id=\"Icon\" d=\"M16 25L16 7M24 14.7143L16 7L8 14.7143\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3080",
        "figmaName": "Arrow/arrow-forward",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "arrow-forward",
        "id": "eds-arrow-arrow-forward",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/arrow-forward\">\n<path id=\"Icon\" d=\"M17.2857 24L25 16L17.2857 8M25 16H7\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3075",
        "figmaName": "Arrow/arrow-back",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "arrow-back",
        "id": "eds-arrow-arrow-back",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/arrow-back\">\n<path id=\"Icon\" d=\"M14.7143 24L7 16L14.7143 8M7 16H25\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3078",
        "figmaName": "Arrow/arrow-down-simple",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "arrow-down-simple",
        "id": "eds-arrow-arrow-down-simple",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/arrow-down-simple\">\n<path id=\"Icon\" d=\"M5 11L16 21L27 11\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3069",
        "figmaName": "Arrow/arrow-up-simple",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "arrow-up-simple",
        "id": "eds-arrow-arrow-up-simple",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/arrow-up-simple\">\n<path id=\"Icon\" d=\"M27 21L16 11L5 21\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3072",
        "figmaName": "Arrow/arrow-forward-simple",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "arrow-forward-simple",
        "id": "eds-arrow-arrow-forward-simple",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/arrow-forward-simple\">\n<path id=\"Icon\" d=\"M9 27L23 16L9 5\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3071",
        "figmaName": "Arrow/arrow-back-simple",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "arrow-back-simple",
        "id": "eds-arrow-arrow-back-simple",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/arrow-back-simple\">\n<path id=\"Icon\" d=\"M23 27L9 16L23 5\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3074",
        "figmaName": "Arrow/chevron-down",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "chevron-down",
        "id": "eds-arrow-chevron-down",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/chevron-down\">\n<path id=\"Icon\" d=\"M8 12L15.2929 19.2929C15.6834 19.6834 16.3166 19.6834 16.7071 19.2929L24 12\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3070",
        "figmaName": "Arrow/chevron-up",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "chevron-up",
        "id": "eds-arrow-chevron-up",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/chevron-up\">\n<path id=\"Icon\" d=\"M8 20L15.2929 12.7071C15.6834 12.3166 16.3166 12.3166 16.7071 12.7071L24 20\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3068",
        "figmaName": "Arrow/chevron-Left",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "chevron-Left",
        "id": "eds-arrow-chevron-left",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/chevron-Left\">\n<path id=\"Icon\" d=\"M20 24L12.7071 16.7071C12.3166 16.3166 12.3166 15.6834 12.7071 15.2929L20 8\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3067",
        "figmaName": "Arrow/chevron-right",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "chevron-right",
        "id": "eds-arrow-chevron-right",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/chevron-right\">\n<path id=\"Icon\" d=\"M12 8L19.2929 15.2929C19.6834 15.6834 19.6834 16.3166 19.2929 16.7071L12 24\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3066",
        "figmaName": "Arrow/arrow-turn-right",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "arrow-turn-right",
        "id": "eds-arrow-arrow-turn-right",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/arrow-turn-right\">\n<path id=\"Icon\" d=\"M7 27V14.5C7 12.2909 8.79086 10.5 11 10.5H25M19 5L25 10.5L19 16\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3064",
        "figmaName": "Arrow/arrow-turn-left",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "arrow-turn-left",
        "id": "eds-arrow-arrow-turn-left",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/arrow-turn-left\">\n<path id=\"Icon\" d=\"M25 27V14.5C25 12.2909 23.2091 10.5 21 10.5H7M13 5L7 10.5L13 16\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3058",
        "figmaName": "Arrow/arrow-subdirectory-forward",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "arrow-subdirectory-forward",
        "id": "eds-arrow-arrow-subdirectory-forward",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/arrow-subdirectory-forward\">\n<path id=\"Icon\" d=\"M19.4615 27L25 21.1333L19.4615 15.2667M25 21.1333H9C7.89543 21.1333 7 20.2438 7 19.1392C7.00001 15.1536 7.00002 6.45997 7.00002 5\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3063",
        "figmaName": "Arrow/arrow-subdirectory-back",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "arrow-subdirectory-back",
        "id": "eds-arrow-arrow-subdirectory-back",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/arrow-subdirectory-back\">\n<path id=\"Icon\" d=\"M12.5385 27L7 21.1333L12.5385 15.2667M7 21.1333H23C24.1046 21.1333 25 20.2438 25 19.1392C25 15.1536 25 6.45997 25 5\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3061",
        "figmaName": "Arrow/download-2",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "download-2",
        "id": "eds-arrow-download-2",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/download-2\">\n<path id=\"Icon\" d=\"M11.1667 14.9091L16.5 20.9091L21.8333 14.9091M16.5 20.9091V4M27 22V26C27 27.1046 26.1046 28 25 28H7C5.89543 28 5 27.1046 5 26L5 22\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3059",
        "figmaName": "Arrow/download-3",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "download-3",
        "id": "eds-arrow-download-3",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/download-3\">\n<path id=\"Icon\" d=\"M21.8333 10L16.5 4L11.1667 10M16.5 4L16.5 20.9091M27 22V26C27 27.1046 26.1046 28 25 28H7C5.89543 28 5 27.1046 5 26L5 22\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3057",
        "figmaName": "Arrow/download-4",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "download-4",
        "id": "eds-arrow-download-4",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/download-4\">\n<path id=\"Icon\" d=\"M21.9556 10L16.2667 4L10.5778 10M16.2667 4L16.2667 20.9091M28 17.6364C28 17.6364 26.9333 28 16.2667 28C5.6 28 4 17.6364 4 17.6364\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3082",
        "figmaName": "Arrow/download-1",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "download-1",
        "id": "eds-arrow-download-1",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/download-1\">\n<path id=\"Icon\" d=\"M9 16L16 22.875L23 16M16 22.875V5M23 27H9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3056",
        "figmaName": "Arrow/arrow-down-long",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "arrow-down-long",
        "id": "eds-arrow-arrow-down-long",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/arrow-down-long\">\n<path id=\"Icon\" d=\"M9 21.3333L16 28L23 21.3333M16 28L16 4\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3077",
        "figmaName": "Arrow/arrow-up-long",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "arrow-up-long",
        "id": "eds-arrow-arrow-up-long",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/arrow-up-long\">\n<path id=\"Icon\" d=\"M16 28L16 4M23 10.6667L16 4L9 10.6667\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3055",
        "figmaName": "Arrow/redo",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "redo",
        "id": "eds-arrow-redo",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/redo\">\n<path id=\"Icon\" d=\"M11.6251 27L10.4339 25.7429C5.12784 20.1429 9.06791 10.8667 16.7526 10.8667H24M18.1765 5L24 10.8667L18.1765 16.7333\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3053",
        "figmaName": "Arrow/undo",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "undo",
        "id": "eds-arrow-undo",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32.7\" height=\"32\" viewBox=\"0 0 32.7 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/undo\">\n<path id=\"Icon\" d=\"M15.0158 27L21.2646 21.2992C25.3123 17.6065 22.6998 10.8667 17.2208 10.8667H0.7M7.43684 5L0.7 10.8667L7.43684 16.7333\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3050",
        "figmaName": "Arrow/arrow-forward-double",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "arrow-forward-double",
        "id": "eds-arrow-arrow-forward-double",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/arrow-forward-double\">\n<path id=\"Icon\" d=\"M16.2924 8L24.6001 16L16.2924 24M6.6001 8L14.9078 16L6.6001 24\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3049",
        "figmaName": "Arrow/arrow-back-double",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "arrow-back-double",
        "id": "eds-arrow-arrow-back-double",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/arrow-back-double\">\n<path id=\"Icon\" d=\"M15.3077 8L7 16L15.3077 24M25 8L16.6923 16L25 24\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3052",
        "figmaName": "Arrow/arrow-down-circle",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "arrow-down-circle",
        "id": "eds-arrow-arrow-down-circle",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/arrow-down-circle\">\n<path id=\"Icon\" d=\"M21.3333 14.6667L16 20L10.6667 14.6667M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3054",
        "figmaName": "Arrow/arrow-up-circle",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "arrow-up-circle",
        "id": "eds-arrow-arrow-up-circle",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/arrow-up-circle\">\n<path id=\"Icon\" d=\"M21.3333 17.3333L16 12L10.6667 17.3333M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3065",
        "figmaName": "Arrow/share-1",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "share-1",
        "id": "eds-arrow-share-1",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/share-1\">\n<path id=\"Icon\" d=\"M13.25 5H7C5.89543 5 5 5.89543 5 7V25C5 26.1046 5.89543 27 7 27H25C26.1046 27 27 26.1046 27 25V18.75M14.625 17.375L27 5M20.125 5H27V11.875\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4061",
        "figmaName": "Arrow/share-2",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "share-2",
        "id": "eds-arrow-share-2",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/share-2\">\n<path id=\"Icon\" d=\"M10.6667 9.33333L16 4L21.3333 9.33333M16 4V21.3333M26.6667 17.3333V24.6667C26.6667 25.7712 25.7712 26.6667 24.6667 26.6667H7.33334C6.22877 26.6667 5.33333 25.7712 5.33333 24.6667V17.3333\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3048",
        "figmaName": "Arrow/upload",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "upload",
        "id": "eds-arrow-upload",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/upload\">\n<path id=\"Icon\" d=\"M9.125 21.1333H7C5.89543 21.1333 5 20.2379 5 19.1333V7C5 5.89543 5.89543 5 7 5H25C26.1046 5 27 5.89543 27 7V19.1333C27 20.2379 26.1046 21.1333 25 21.1333H22.875M16 27V10.8667M11.875 15.2667L16 10.8667L20.125 15.2667\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3073",
        "figmaName": "Arrow/outgoing",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "outgoing",
        "id": "eds-arrow-outgoing",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/outgoing\">\n<path id=\"Icon\" d=\"M9.125 21.1333H7C5.89543 21.1333 5 20.2379 5 19.1333V7C5 5.89543 5.89543 5 7 5H23.625C24.7296 5 25.625 5.89543 25.625 7V12.3333M14.625 10.8667V18.6C14.625 20.8091 16.4159 22.6 18.625 22.6H27M22.875 18.2L27 22.6L22.875 27\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3047",
        "figmaName": "Arrow/swap-alt",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "swap-alt",
        "id": "eds-arrow-swap-alt",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/swap-alt\">\n<path id=\"Icon\" d=\"M10.8572 25.625L10.8572 5M7 9.12508L10.8572 5L14.7144 9.125M21.1429 6.375L21.1429 27M17.2859 22.8751L21.1429 27L25 22.8751\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3084",
        "figmaName": "Arrow/sync",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "sync",
        "id": "eds-arrow-sync",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/sync\">\n<path id=\"Icon\" d=\"M25.625 21.1428H5M9.12508 25L5 21.1428L9.125 17.2856M6.375 10.8571L27 10.8571M22.8751 14.7141L27 10.8571L22.8751 7\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3083",
        "figmaName": "Arrow/flows-1",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "flows-1",
        "id": "eds-arrow-flows-1",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/flows-1\">\n<path id=\"Icon\" d=\"M12.4705 21.1428H22.3529M18.1175 25L22.3529 21.1428L18.1176 17.2856M13.8823 10.8571H28M23.7648 14.7141L28 10.8571L23.7648 7M4 21.1429H4.01412M5.41177 10.8571H5.42589M9.64708 10.8571H9.6612M8.23531 21.1429H8.24943\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3046",
        "figmaName": "Arrow/flow",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "flow",
        "id": "eds-arrow-flow",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/flow\">\n<path id=\"Icon\" d=\"M16 16H28M22.6667 21L28 16L22.6667 11M12 16.0001H12.0134M8.00004 16.0001H8.01338M4.00004 16.0001H4.01338\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4065",
        "figmaName": "Arrow/share-3",
        "category": "Arrow",
        "sectionLabel": "Arrow (PacsTrust)",
        "slug": "share-3",
        "id": "eds-arrow-share-3",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Arrow/share-3\">\n<path id=\"Icon\" d=\"M12 8L16 4L20 8M16 4L16 20M21.3333 13.3333H23.3333C24.4379 13.3333 25.3333 14.2288 25.3333 15.3333V24.6667C25.3333 25.7712 24.4379 26.6667 23.3333 26.6667H8.66666C7.56209 26.6667 6.66667 25.7712 6.66667 24.6667V15.3333C6.66667 14.2288 7.5621 13.3333 8.66667 13.3333H10.6667\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      }
    ],
    "kind": "eds"
  },
  {
    "id": "fill",
    "label": "Fill",
    "icons": [
      {
        "nodeId": "8413:5560",
        "figmaName": "Fill/lock-1",
        "category": "Fill",
        "sectionLabel": "Fill",
        "slug": "lock-1",
        "id": "eds-fill-lock-1",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n<g id=\"Fill/lock-1\">\n<path id=\"Icon\" d=\"M10.6667 12V8C10.6667 5.05448 13.0545 2.66667 16 2.66667C18.9455 2.66667 21.3333 5.05448 21.3333 8V12M16 18.6667V21.3333M10.6667 12V7.99998C10.6667 5.05447 13.0545 2.66665 16 2.66665C18.9455 2.66665 21.3333 5.05447 21.3333 7.99998V12M8.66666 28H23.3333C24.4379 28 25.3333 27.1046 25.3333 26V14C25.3333 12.8954 24.4379 12 23.3333 12H8.66667C7.5621 12 6.66667 12.8954 6.66667 14V26C6.66667 27.1046 7.56209 28 8.66666 28ZM8.66666 28H23.3333C24.4379 28 25.3333 27.1046 25.3333 26V14C25.3333 12.8954 24.4379 12 23.3333 12H8.66667C7.5621 12 6.66667 12.8954 6.66667 14V26C6.66667 27.1046 7.56209 28 8.66666 28Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"#1C2024\"/>\n<g id=\"Icon_2\">\n<use xlink:href=\"#stroke0_8573_11794\" fill=\"#1C2024\"/>\n<use xlink:href=\"#stroke0_8573_11794\" fill=\"#1C2024\"/>\n<path d=\"M16.3333 18.6667V21.3333M9 28H23.6667C24.7712 28 25.6667 27.1046 25.6667 26V14C25.6667 12.8954 24.7712 12 23.6667 12H9C7.89543 12 7 12.8954 7 14V26C7 27.1046 7.89543 28 9 28ZM9 28H23.6667C24.7712 28 25.6667 27.1046 25.6667 26V14C25.6667 12.8954 24.7712 12 23.6667 12H9C7.89543 12 7 12.8954 7 14V26C7 27.1046 7.89543 28 9 28Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"#1C2024\"/>\n</g>\n</g>\n<defs>\n<path id=\"stroke0_8573_11794\" d=\"M7 14C7 12.8954 7.89543 12 9 12H23.6667C24.7712 12 25.6667 12.8954 25.6667 14V26C25.6667 27.1046 24.7712 28 23.6667 28H9C7.89543 28 7 27.1046 7 26V14Z\"/>\n</defs>\n</svg>"
      },
      {
        "nodeId": "8413:5559",
        "figmaName": "Fill/heart",
        "category": "Fill",
        "sectionLabel": "Fill",
        "slug": "heart",
        "id": "eds-fill-heart",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Fill/heart\">\n<path id=\"Icon\" d=\"M26.0474 7.28595C28.6509 9.88945 28.6509 14.1105 26.0474 16.714L16.7071 26.0543C16.3166 26.4448 15.6834 26.4448 15.2929 26.0543L5.95262 16.714C3.34913 14.1105 3.34913 9.88945 5.95262 7.28595C8.0224 5.21618 10.5208 4.58242 13.0417 5.8125C14.0422 6.30072 15.3542 7.28595 16 8.57292C16.6458 7.28595 17.9578 6.30072 18.9583 5.8125C21.4792 4.58242 23.9776 5.21618 26.0474 7.28595Z\" fill=\"#1C2024\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"#1C2024\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:5557",
        "figmaName": "Fill/arrow solid - left",
        "category": "Fill",
        "sectionLabel": "Fill",
        "slug": "arrow solid - left",
        "id": "eds-fill-arrow-solid-left",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Fill/arrow solid - left\">\n<path id=\"Vector\" d=\"M9.00867 17.288C8.4962 16.8877 8.4962 16.1123 9.00867 15.712L22.3844 5.26222C23.0409 4.7493 24 5.2171 24 6.05025V26.9498C24 27.7829 23.0409 28.2507 22.3844 27.7378L9.00867 17.288Z\" fill=\"#1C2024\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:5552",
        "figmaName": "Fill/arrow solid - Right",
        "category": "Fill",
        "sectionLabel": "Fill",
        "slug": "arrow solid - Right",
        "id": "eds-fill-arrow-solid-right",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Fill/arrow solid - Right\">\n<path id=\"Vector\" d=\"M22.9913 17.288C23.5038 16.8877 23.5038 16.1123 22.9913 15.712L9.61564 5.26222C8.9591 4.7493 8 5.2171 8 6.05025V26.9498C8 27.7829 8.9591 28.2507 9.61564 27.7378L22.9913 17.288Z\" fill=\"#1C2024\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:5556",
        "figmaName": "Fill/arrow solid - Up",
        "category": "Fill",
        "sectionLabel": "Fill",
        "slug": "arrow solid - Up",
        "id": "eds-fill-arrow-solid-up",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Fill/arrow solid - Up\">\n<path id=\"Vector\" d=\"M15.212 9.00867C15.6123 8.4962 16.3877 8.4962 16.788 9.00867L27.2378 22.3844C27.7507 23.0409 27.2829 24 26.4498 24H5.55025C4.7171 24 4.2493 23.0409 4.76222 22.3844L15.212 9.00867Z\" fill=\"#1C2024\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:5554",
        "figmaName": "Fill/arrow solid ",
        "category": "Fill",
        "sectionLabel": "Fill",
        "slug": "arrow solid ",
        "id": "eds-fill-arrow-solid",
        "svg": ""
      },
      {
        "nodeId": "8413:5551",
        "figmaName": "Fill/arrow solid - Down",
        "category": "Fill",
        "sectionLabel": "Fill",
        "slug": "arrow solid - Down",
        "id": "eds-fill-arrow-solid-down",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Fill/arrow solid - Down\">\n<path id=\"Vector\" d=\"M16.7761 23.0448C16.3759 23.5373 15.6241 23.5373 15.2239 23.0448L4.32486 9.63059C3.79388 8.97708 4.25894 8 5.10097 8H26.899C27.7411 8 28.2061 8.97708 27.6751 9.63059L16.7761 23.0448Z\" fill=\"#1C2024\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:5550",
        "figmaName": "Fill/close-circle-1",
        "category": "Fill",
        "sectionLabel": "Fill",
        "slug": "close-circle-1",
        "id": "eds-fill-close-circle-1",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Fill/close-circle-1\">\n<circle id=\"Ellipse 109\" cx=\"16\" cy=\"16\" r=\"11\" fill=\"#1C2024\"/>\n<g id=\"Icon\">\n<path d=\"M20 12L12 20Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#1C2024\"/>\n<path d=\"M20 20L12 12Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#1C2024\"/>\n<path d=\"M20 12L12 20M20 20L12 12\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"white\"/>\n</g>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:5553",
        "figmaName": "Fill/Question\t",
        "category": "Fill",
        "sectionLabel": "Fill",
        "slug": "Question\t",
        "id": "eds-fill-question",
        "svg": ""
      },
      {
        "nodeId": "8413:5549",
        "figmaName": "Fill/Warning",
        "category": "Fill",
        "sectionLabel": "Fill",
        "slug": "Warning",
        "id": "eds-fill-warning",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"wrapper\">\n<path id=\"Union\" d=\"M16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2ZM16 13.2773C15.3557 13.2773 14.8331 13.8001 14.833 14.4443V22.6113C14.8331 23.2556 15.3557 23.7773 16 23.7773C16.6443 23.7773 17.1669 23.2556 17.167 22.6113V14.4443C17.1669 13.8001 16.6443 13.2773 16 13.2773ZM16 8.22266C15.141 8.22266 14.4446 8.91843 14.4443 9.77734C14.4443 10.6365 15.1409 11.333 16 11.333C16.8591 11.333 17.5557 10.6365 17.5557 9.77734C17.5554 8.91843 16.859 8.22266 16 8.22266Z\" fill=\"#1C2024\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:5547",
        "figmaName": "Fill/Info",
        "category": "Fill",
        "sectionLabel": "Fill",
        "slug": "Info",
        "id": "eds-fill-info",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"wrapper\">\n<path id=\"Union\" d=\"M16 1.99999C23.732 1.99999 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2.00001 8.268 8.26802 1.99999 16 1.99999ZM16 20.667C15.1409 20.667 14.4443 21.3635 14.4443 22.2226C14.4446 23.0816 15.141 23.7773 16 23.7773C16.859 23.7773 17.5554 23.0816 17.5557 22.2226C17.5557 21.3635 16.8591 20.667 16 20.667ZM16 8.22264C15.3557 8.22264 14.8331 8.74443 14.833 9.38866V17.5557C14.8331 18.1999 15.3557 18.7226 16 18.7226C16.6443 18.7226 17.1669 18.1999 17.167 17.5557V9.38866C17.1669 8.74443 16.6443 8.22264 16 8.22264Z\" fill=\"#1C2024\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:5546",
        "figmaName": "Fill/star",
        "category": "Fill",
        "sectionLabel": "Fill",
        "slug": "star",
        "id": "eds-fill-star",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"25.1185\" height=\"24.0562\" viewBox=\"0 0 25.1185 24.0562\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path id=\"Icon\" d=\"M11.6359 1.31597C11.9775 0.494677 13.141 0.494676 13.4825 1.31597L16.2674 8.01163L23.496 8.59114C24.3826 8.66222 24.7421 9.76873 24.0666 10.3474L18.5592 15.0651L20.2418 22.1189C20.4482 22.9841 19.507 23.668 18.7479 23.2043L12.5592 19.4243L6.3706 23.2043C5.6115 23.668 4.67025 22.9841 4.87663 22.1189L6.55923 15.0651L1.05185 10.3474C0.376313 9.76873 0.735838 8.66222 1.62249 8.59114L8.85102 8.01163L11.6359 1.31597Z\" fill=\"#1C2024\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"#1C2024\"/>\n</svg>"
      },
      {
        "nodeId": "8413:5548",
        "figmaName": "Fill/success",
        "category": "Fill",
        "sectionLabel": "Fill",
        "slug": "success",
        "id": "eds-fill-success",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Fill/success\">\n<path id=\"Union\" d=\"M16 2C23.732 2 30 8.26802 30 16C30 23.732 23.732 30 16 30C8.26802 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2ZM22.4268 11.6748C21.9712 11.2195 21.2329 11.2196 20.7773 11.6748L13.626 18.8232L10.6025 15.7998L10.4404 15.665C9.98575 15.3502 9.35708 15.3949 8.95215 15.7998C8.49674 16.2554 8.4966 16.9947 8.95215 17.4502L12.8027 21.2998L12.9639 21.4346C13.4185 21.7495 14.0472 21.7046 14.4521 21.2998L22.4268 13.3252L22.5615 13.1631C22.8765 12.7084 22.8317 12.0798 22.4268 11.6748Z\" fill=\"#1C2024\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:5558",
        "figmaName": "Fill/close",
        "category": "Fill",
        "sectionLabel": "Fill",
        "slug": "close",
        "id": "eds-fill-close",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"28\" height=\"28\" viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path id=\"&#229;&#189;&#162;&#231;&#138;&#182;\" d=\"M14 0C21.732 0 28 6.26802 28 14C28 21.732 21.732 28 14 28C6.26802 28 0 21.732 0 14C0 6.26802 6.26802 0 14 0ZM8.50828 8.5084C8.05266 8.96402 8.05266 9.7027 8.50828 10.1583L12.358 14.0078L8.4558 17.9139C8.0534 18.3722 8.0709 19.0704 8.50828 19.5078C8.9639 19.9634 9.70258 19.9634 10.1582 19.5078L14.0077 15.6579L17.9138 19.5604C18.372 19.9628 19.0704 19.9452 19.5078 19.5078C19.9634 19.0522 19.9634 18.3136 19.5078 17.8579L15.6577 14.0078L19.5602 10.1023C19.9626 9.64406 19.9452 8.94578 19.5078 8.5084C19.0522 8.05278 18.3134 8.05278 17.8578 8.5084L14.0077 12.3581L10.1022 8.45592L10.0437 8.4078C9.5862 8.0557 8.92744 8.08924 8.50828 8.5084Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#1C2024\"/>\n</svg>"
      },
      {
        "nodeId": "8413:5555",
        "figmaName": "Fill/Circle Checkmark",
        "category": "Fill",
        "sectionLabel": "Fill",
        "slug": "Circle Checkmark",
        "id": "eds-fill-circle-checkmark",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Fill/Circle Checkmark\">\n<path d=\"M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z\" fill=\"#1C2024\"/>\n<path id=\"Vector 13\" d=\"M5.5 12L10.1429 17L18.5 7\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"#FBFDFF\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:5545",
        "figmaName": "Fill/Checked Indeterminate",
        "category": "Fill",
        "sectionLabel": "Fill",
        "slug": "Checked Indeterminate",
        "id": "eds-fill-checked-indeterminate",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Fill/Checked Indeterminate\">\n<path d=\"M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z\" fill=\"#1C2024\"/>\n<path id=\"Vector 13\" d=\"M8 12H16\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"#FBFDFF\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:5544",
        "figmaName": "Fill/Checkbox",
        "category": "Fill",
        "sectionLabel": "Fill",
        "slug": "Checkbox",
        "id": "eds-fill-checkbox",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Fill/Checkbox\">\n<path d=\"M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z\" fill=\"#1C2024\"/>\n<path id=\"Vector 13\" d=\"M5.5 12L10.1429 17L18.5 7\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"#FBFDFF\"/>\n</g>\n</svg>"
      }
    ],
    "kind": "eds"
  },
  {
    "id": "other-(pacstrust)",
    "label": "Other (PacsTrust)",
    "icons": [
      {
        "nodeId": "8411:3679",
        "figmaName": "Other/scale-1",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "scale-1",
        "id": "eds-other-scale-1",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/scale-1\">\n<path id=\"Icon\" d=\"M12 5.33333H7.33333C6.22876 5.33333 5.33333 6.22876 5.33333 7.33333V17.3333M26.6667 20V24.6667C26.6667 25.7712 25.7712 26.6667 24.6667 26.6667H14.6667M5.33333 17.3333V24.6667C5.33333 25.7712 6.22876 26.6667 7.33333 26.6667H14.6667M5.33333 17.3333H14.6667V26.6667M26.6667 5.33333L18 14M26.6667 10.6667V5.33333H21.3333\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3649",
        "figmaName": "Other/close",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "close",
        "id": "eds-other-close",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/close\">\n<path id=\"Icon\" d=\"M8 8L24 24M24 8L8 24\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3663",
        "figmaName": "Other/close-circle",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "close-circle",
        "id": "eds-other-close-circle",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/close-circle\">\n<path id=\"Icon\" d=\"M20 12.0001L12 20.0001M20 20.0001L12 12.0001M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3659",
        "figmaName": "Other/more-vertical",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "more-vertical",
        "id": "eds-other-more-vertical",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/more-vertical\">\n<g id=\"Icon\">\n<path d=\"M16 17.7143C16.9625 17.7143 17.75 16.9429 17.75 16C17.75 15.0571 16.9625 14.2857 16 14.2857C15.0375 14.2857 14.25 15.0571 14.25 16C14.25 16.9429 15.0375 17.7143 16 17.7143Z\" fill=\"currentColor\"/>\n<path d=\"M16 7.42857C16.9625 7.42857 17.75 6.65714 17.75 5.71429C17.75 4.77143 16.9625 4 16 4C15.0375 4 14.25 4.77143 14.25 5.71429C14.25 6.65714 15.0375 7.42857 16 7.42857Z\" fill=\"currentColor\"/>\n<path d=\"M16 28C16.9625 28 17.75 27.2286 17.75 26.2857C17.75 25.3429 16.9625 24.5714 16 24.5714C15.0375 24.5714 14.25 25.3429 14.25 26.2857C14.25 27.2286 15.0375 28 16 28Z\" fill=\"currentColor\"/>\n</g>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3645",
        "figmaName": "Other/full-screen-exit",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "full-screen-exit",
        "id": "eds-other-full-screen-exit",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/full-screen-exit\">\n<path id=\"Icon\" d=\"M12 24.0002L12 22.0002C12 20.8956 11.1046 20.0002 10 20.0002H8.00001M20 24.0002V22.0002C20 20.8956 20.8954 20.0002 22 20.0002L24 20.0002M12 8.00018L12 10.0002C12 11.1048 11.1046 12.0002 10 12.0002L8 12.0002M20 8.00021L20 10.0002C20 11.1048 20.8954 12.0002 22 12.0002L24 12.0002\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3689",
        "figmaName": "Other/coffee",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "coffee",
        "id": "eds-other-coffee",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/coffee\">\n<path id=\"Icon\" d=\"M22.6667 6.66667H6.66667V17.3333C6.66667 19.5425 8.45753 21.3333 10.6667 21.3333H18.6667C20.8758 21.3333 22.6667 19.5425 22.6667 17.3333V6.66667ZM22.6667 6.66667H26C27.1046 6.66667 28 7.5621 28 8.66667V12.6667C28 13.7712 27.1046 14.6667 26 14.6667H22.6667M5.33333 25.3333H26.6667\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3666",
        "figmaName": "Other/cake",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "cake",
        "id": "eds-other-cake",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/cake\">\n<path id=\"Icon\" d=\"M16 13.3333V9.33333M16 9.33333C17.4728 9.33333 18.6667 8.13943 18.6667 6.66667C18.6667 5.19391 16.6667 2 16 2C15.3333 2 13.3333 5.19391 13.3333 6.66667C13.3333 8.13943 14.5272 9.33333 16 9.33333ZM26.6667 20L25.7456 21.3726C24.9287 22.59 23.1231 22.5439 22.3694 21.2864L21.7146 20.1939C20.9381 18.8985 19.0611 18.8981 18.2841 20.1931L17.715 21.1417C16.9382 22.4364 15.0618 22.4364 14.285 21.1417L13.715 20.1916C12.9382 18.897 11.0618 18.897 10.285 20.1916L9.62601 21.29C8.87061 22.549 7.06135 22.592 6.24693 21.3704L5.33333 20M26.6667 28V17.3333C26.6667 15.1242 24.8758 13.3333 22.6667 13.3333H9.33333C7.12419 13.3333 5.33333 15.1242 5.33333 17.3333V28H26.6667Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3664",
        "figmaName": "Other/wifi-tethering",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "wifi-tethering",
        "id": "eds-other-wifi-tethering",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/wifi-tethering\">\n<path id=\"Icon\" d=\"M20.714 20.714C23.3175 18.1105 23.3175 13.8894 20.714 11.286C18.1106 8.68246 13.8895 8.68246 11.286 11.286C8.68246 13.8894 8.68246 18.1105 11.286 20.714M24.4853 24.4853C29.1716 19.799 29.1716 12.201 24.4853 7.51472C19.799 2.82843 12.201 2.82843 7.51472 7.51472C2.82843 12.201 2.82843 19.799 7.51472 24.4853M17.3333 16C17.3333 16.7364 16.7364 17.3333 16 17.3333C15.2636 17.3333 14.6667 16.7364 14.6667 16C14.6667 15.2636 15.2636 14.6667 16 14.6667C16.7364 14.6667 17.3333 15.2636 17.3333 16Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3637",
        "figmaName": "Other/orientation-locked",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "orientation-locked",
        "id": "eds-other-orientation-locked",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/orientation-locked\">\n<path id=\"Icon\" d=\"M13.3333 16H18.6667M13.3333 16V12.6667C13.3333 11.5621 14.2288 10.6667 15.3334 10.6667H16.6667C17.7713 10.6667 18.6667 11.5621 18.6667 12.6667V16M13.3333 16H12V20H20V16H18.6667M26.6459 12L23.5425 8.45753C19.3769 4.29193 12.6231 4.29194 8.45753 8.45753C4.29193 12.6231 4.29193 19.3769 8.45753 23.5425C12.6231 27.7081 19.3769 27.7081 23.5425 23.5425C24.9412 22.1437 25.8703 20.4531 26.3297 18.6667M22.6667 12L26.6459 12V8\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3635",
        "figmaName": "Other/gauge-high",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "gauge-high",
        "id": "eds-other-gauge-high",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/gauge-high\">\n<path id=\"Icon\" d=\"M26.8921 13.6236C27.6031 15.1567 28 16.8653 28 18.6665C28 20.6245 27.5311 22.473 26.6994 24.1057C26.2955 24.8986 25.4452 25.3332 24.5553 25.3332H7.44467C6.55484 25.3332 5.70452 24.8986 5.30063 24.1057C4.46894 22.473 4 20.6245 4 18.6665C4 12.0391 9.37258 6.66651 16 6.66651C17.7641 6.66651 19.4394 7.04719 20.948 7.73089M16.9428 17.7239C16.4221 17.2032 15.5779 17.2032 15.0572 17.7239C14.5365 18.2446 14.5365 19.0888 15.0572 19.6095C15.5779 20.1302 16.4221 20.1302 16.9428 19.6095C17.4635 19.0888 17.4635 18.2446 16.9428 17.7239ZM16.9428 17.7239L25.4281 9.23858\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3660",
        "figmaName": "Other/flip",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "flip",
        "id": "eds-other-flip",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/flip\">\n<path id=\"Icon\" d=\"M24.6999 12.6133C25.1089 13.6632 25.3333 14.8054 25.3333 16C25.3333 21.1547 21.1547 25.3333 16 25.3333H12M14.6667 28L12 25.3333L14.6667 22.6667M7.30009 19.3867C6.8911 18.3368 6.66667 17.1946 6.66667 16C6.66667 10.8453 10.8453 6.66667 16 6.66667H20M17.3333 9.33333L20 6.66667L17.3333 4M18.6667 15.9999C18.6667 17.4727 17.4728 18.6666 16 18.6666C14.5272 18.6666 13.3333 17.4727 13.3333 15.9999C13.3333 14.5272 14.5272 13.3333 16 13.3333C17.4728 13.3333 18.6667 14.5272 18.6667 15.9999Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3676",
        "figmaName": "Other/disk",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "disk",
        "id": "eds-other-disk",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/disk\">\n<path id=\"Icon\" d=\"M8 16C8 13.0389 9.60879 10.4535 12 9.07026M24 15.7369C24 18.6981 22.3912 21.2834 20 22.6667M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16ZM18.6667 16C18.6667 17.4728 17.4728 18.6667 16 18.6667C14.5272 18.6667 13.3333 17.4728 13.3333 16C13.3333 14.5272 14.5272 13.3333 16 13.3333C17.4728 13.3333 18.6667 14.5272 18.6667 16Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3632",
        "figmaName": "Other/scan",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "scan",
        "id": "eds-other-scan",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/scan\">\n<path id=\"Icon\" d=\"M26.6667 10.6667V7.33333C26.6667 6.22876 25.7712 5.33333 24.6667 5.33333H7.33333C6.22876 5.33333 5.33333 6.22876 5.33333 7.33333V10.6667M26.6667 21.3333V24.6667C26.6667 25.7712 25.7712 26.6667 24.6667 26.6667H7.33333C6.22876 26.6667 5.33333 25.7712 5.33333 24.6667V21.3333M5.33333 16V16.0133M10.6667 16V16.0133M16 16V16.0133M21.3333 16V16.0133M26.6667 16V16.0133\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3669",
        "figmaName": "Other/home-1",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "home-1",
        "id": "eds-other-home-1",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/home-1\">\n<path id=\"Icon\" d=\"M14.9833 4.6002L6.31668 9.71594C5.70728 10.0757 5.33333 10.7306 5.33333 11.4383V24.6668C5.33333 25.7713 6.22876 26.6668 7.33333 26.6668H11.3333C12.4379 26.6668 13.3333 25.7713 13.3333 24.6668V18C13.3333 16.8954 14.2288 16 15.3333 16H16.6667C17.7712 16 18.6667 16.8954 18.6667 18V24.6668C18.6667 25.7713 19.5621 26.6668 20.6667 26.6668H24.6667C25.7712 26.6668 26.6667 25.7713 26.6667 24.6668V11.4383C26.6667 10.7306 26.2927 10.0757 25.6833 9.71595L17.0167 4.6002C16.3894 4.22998 15.6106 4.22998 14.9833 4.6002Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3668",
        "figmaName": "Other/home-2",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "home-2",
        "id": "eds-other-home-2",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/home-2\">\n<path id=\"Icon\" d=\"M18.6667 26.6667V18.6667C18.6667 17.1939 17.4728 16 16 16C14.5272 16 13.3333 17.1939 13.3333 18.6667V26.6667M14.9833 4.60011L6.31668 9.71585C5.70728 10.0756 5.33333 10.7305 5.33333 11.4382V24.6667C5.33333 25.7712 6.22877 26.6667 7.33334 26.6667H24.6667C25.7712 26.6667 26.6667 25.7712 26.6667 24.6667V11.4382C26.6667 10.7305 26.2927 10.0756 25.6833 9.71585L17.0167 4.60011C16.3894 4.22988 15.6106 4.22988 14.9833 4.60011Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3667",
        "figmaName": "Other/home-3",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "home-3",
        "id": "eds-other-home-3",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/home-3\">\n<path id=\"Icon\" d=\"M25.3331 10.5418V24.6667C25.3331 25.7712 24.4377 26.6667 23.3331 26.6667H8.66644C7.56187 26.6667 6.66644 25.7712 6.66644 24.6667V10.5418M2.66644 13.3335L14.8528 4.80297C15.5415 4.32092 16.4581 4.32092 17.1467 4.80297L29.3331 13.3335\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3690",
        "figmaName": "Other/crop-alt",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "crop-alt",
        "id": "eds-other-crop-alt",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/crop-alt\">\n<path id=\"Icon\" d=\"M28 22.6667H11.3333C10.2288 22.6667 9.33333 21.7712 9.33333 20.6667V4M4 9.33333H9.33333M22.6667 22.6667V28M14.6667 9.33333H20.6667C21.7712 9.33333 22.6667 10.2288 22.6667 11.3333V17.3333\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3652",
        "figmaName": "Other/clock",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "clock",
        "id": "eds-other-clock",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/clock\">\n<path id=\"Icon\" d=\"M21.3333 18.6667L16 16V9.33333M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3670",
        "figmaName": "Other/alarm",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "alarm",
        "id": "eds-other-alarm",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/alarm\">\n<path id=\"Icon\" d=\"M16 12V17.3333L20 20M4 8L8.66667 4M28 8L23.3333 4M16 28C21.891 28 26.6667 23.2244 26.6667 17.3333C26.6667 11.4423 21.891 6.66667 16 6.66667C10.109 6.66667 5.33333 11.4423 5.33333 17.3333C5.33333 23.2244 10.109 28 16 28Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3671",
        "figmaName": "Other/fast-forward",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "fast-forward",
        "id": "eds-other-fast-forward",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/fast-forward\">\n<path id=\"Icon\" d=\"M26.3572 16.7808L18.958 22.7002C18.3033 23.224 17.3333 22.7578 17.3333 21.9193V10.0806C17.3333 9.24207 18.3033 8.7759 18.958 9.29971L26.3572 15.2191C26.8577 15.6194 26.8577 16.3805 26.3572 16.7808ZM15.6906 16.7808L8.29136 22.7002C7.6366 23.224 6.66667 22.7578 6.66667 21.9193V10.0806C6.66667 9.24207 7.6366 8.7759 8.29136 9.29971L15.6906 15.2191C16.191 15.6194 16.191 16.3805 15.6906 16.7808Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3640",
        "figmaName": "Other/fast-rewind",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "fast-rewind",
        "id": "eds-other-fast-rewind",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/fast-rewind\">\n<path id=\"Icon\" d=\"M5.64275 16.7809L13.042 22.7002C13.6967 23.2241 14.6667 22.7579 14.6667 21.9194V10.0806C14.6667 9.24212 13.6967 8.77595 13.042 9.29976L5.64275 15.2191C5.14235 15.6195 5.14235 16.3805 5.64275 16.7809ZM16.3094 16.7809L23.7086 22.7002C24.3634 23.2241 25.3333 22.7579 25.3333 21.9194V10.0806C25.3333 9.24212 24.3634 8.77595 23.7086 9.29976L16.3094 15.2191C15.809 15.6195 15.809 16.3805 16.3094 16.7809Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3657",
        "figmaName": "Other/forward",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "forward",
        "id": "eds-other-forward",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/forward\">\n<path id=\"Icon\" d=\"M25.3333 17.3333C25.3333 22.488 21.1547 26.6667 16 26.6667C10.8453 26.6667 6.66667 22.488 6.66667 17.3333C6.66667 12.1787 10.8453 8 16 8H22.6667M18.6667 12L22.6667 8L18.6667 4\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3644",
        "figmaName": "Other/update",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "update",
        "id": "eds-other-update",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/update\">\n<path id=\"Icon\" d=\"M27.9792 8V13.3333H22.6667M27.9792 13.3333L23.5425 8.45753C19.3769 4.29193 12.6231 4.29194 8.45753 8.45753C4.29193 12.6231 4.29193 19.3769 8.45753 23.5425C12.6231 27.7081 19.3769 27.7081 23.5425 23.5425C24.5876 22.4973 25.3705 21.2892 25.8912 20M16 12V17.3333L20 19.3333\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3638",
        "figmaName": "Other/headset",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "headset",
        "id": "eds-other-headset",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/headset\">\n<path id=\"Icon\" d=\"M5.33333 17.3333V23.3333C5.33333 24.4379 6.22876 25.3333 7.33333 25.3333H8.66667C9.77123 25.3333 10.6667 24.4379 10.6667 23.3333V19.3333C10.6667 18.2288 9.77124 17.3333 8.66667 17.3333H5.33333ZM5.33333 17.3333V10.6667C5.33333 6.24839 8.91506 2.66667 13.3333 2.66667H18.6667C23.0849 2.66667 26.6667 6.24839 26.6667 10.6667V17.3333M26.6667 17.3333V23.3333C26.6667 24.4379 25.7712 25.3333 24.6667 25.3333H23.3333C22.2288 25.3333 21.3333 24.4379 21.3333 23.3333V19.3333C21.3333 18.2288 22.2288 17.3333 23.3333 17.3333H26.6667Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3651",
        "figmaName": "Other/headset-mic",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "headset-mic",
        "id": "eds-other-headset-mic",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/headset-mic\">\n<path id=\"Icon\" d=\"M5.33333 17.3333V23.3333C5.33333 24.4379 6.22876 25.3333 7.33333 25.3333H8.66667C9.77123 25.3333 10.6667 24.4379 10.6667 23.3333V19.3333C10.6667 18.2288 9.77124 17.3333 8.66667 17.3333H5.33333ZM5.33333 17.3333V10.6667C5.33333 6.24839 8.91506 2.66667 13.3333 2.66667H18.6667C23.0849 2.66667 26.6667 6.24839 26.6667 10.6667V17.3333M26.6667 25.3333H23.3333C22.2288 25.3333 21.3333 24.4379 21.3333 23.3333V19.3333C21.3333 18.2288 22.2288 17.3333 23.3333 17.3333H26.6667M26.6667 25.3333V17.3333M26.6667 25.3333C26.6667 27.5425 24.8758 29.3333 22.6667 29.3333H14.6667\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3677",
        "figmaName": "Other/image",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "image",
        "id": "eds-other-image",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/image\">\n<path id=\"Icon\" d=\"M5.33333 22.6667L10.5896 17.936C11.3803 17.2244 12.5896 17.2562 13.3417 18.0084L15.3333 20L20.5858 14.7475C21.3668 13.9665 22.6332 13.9665 23.4142 14.7475L26.6667 18M14.6667 12C14.6667 12.7364 14.0697 13.3333 13.3333 13.3333C12.597 13.3333 12 12.7364 12 12C12 11.2636 12.597 10.6667 13.3333 10.6667C14.0697 10.6667 14.6667 11.2636 14.6667 12ZM7.33334 26.6667H24.6667C25.7712 26.6667 26.6667 25.7712 26.6667 24.6667V7.33333C26.6667 6.22876 25.7712 5.33333 24.6667 5.33333H7.33333C6.22876 5.33333 5.33333 6.22877 5.33333 7.33334V24.6667C5.33333 25.7712 6.22877 26.6667 7.33334 26.6667Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3634",
        "figmaName": "Other/history",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "history",
        "id": "eds-other-history",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/history\">\n<path id=\"Icon\" d=\"M4.0208 8V13.3333H9.33332M4.0208 13.3333L8.45753 8.45753C12.6231 4.29193 19.3769 4.29194 23.5425 8.45753C27.7081 12.6231 27.7081 19.3769 23.5425 23.5425C19.3769 27.7081 12.6231 27.7081 8.45753 23.5425C7.41238 22.4973 6.62946 21.2892 6.10877 20M16 12V17.3333L20 19.3333\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3683",
        "figmaName": "Other/camera",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "camera",
        "id": "eds-other-camera",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/camera\">\n<path id=\"Icon\" d=\"M16 21.3333C18.9455 21.3333 21.3333 18.9455 21.3333 16C21.3333 13.0545 18.9455 10.6667 16 10.6667C13.0545 10.6667 10.6667 13.0545 10.6667 16C10.6667 18.9455 13.0545 21.3333 16 21.3333ZM21.4142 6.08088L19.9191 4.58579C19.544 4.21071 19.0353 4 18.5049 4H13.4951C12.9647 4 12.456 4.21071 12.0809 4.58579L10.5858 6.08088C10.2107 6.45595 9.70201 6.66667 9.17157 6.66667H6C4.89543 6.66667 4 7.56209 4 8.66666L4 23.3333C4 24.4379 4.89543 25.3333 6 25.3333H26C27.1046 25.3333 28 24.4379 28 23.3333V8.66667C28 7.5621 27.1046 6.66667 26 6.66667H22.8284C22.298 6.66667 21.7893 6.45595 21.4142 6.08088Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3636",
        "figmaName": "Other/camera-add-photo",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "camera-add-photo",
        "id": "eds-other-camera-add-photo",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/camera-add-photo\">\n<path id=\"Icon\" d=\"M17.3333 6.66667H12.1618C11.6313 6.66667 11.1226 6.87738 10.7475 7.25245L9.25245 8.74755C8.87738 9.12262 8.36867 9.33333 7.83824 9.33333H4.66667C3.5621 9.33333 2.66667 10.2288 2.66667 11.3333L2.66667 26C2.66667 27.1046 3.5621 28 4.66667 28H24.6667C25.7712 28 26.6667 27.1046 26.6667 26V16M22.6667 6.66667H30.6667M26.6667 10.6667V2.66667M14.6667 24C17.6122 24 20 21.6122 20 18.6667C20 15.7211 17.6122 13.3333 14.6667 13.3333C11.7211 13.3333 9.33333 15.7211 9.33333 18.6667C9.33333 21.6122 11.7211 24 14.6667 24Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3682",
        "figmaName": "Other/videocam",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "videocam",
        "id": "eds-other-videocam",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/videocam\">\n<path id=\"Icon\" d=\"M28 10.4142V21.5858C28 22.4767 26.9229 22.9229 26.2929 22.2929L21.4142 17.4142C20.6332 16.6332 20.6332 15.3668 21.4142 14.5858L26.2929 9.7071C26.9229 9.07714 28 9.52331 28 10.4142ZM20 10V22C20 23.1046 19.1046 24 18 24H6C4.89543 24 4 23.1046 4 22L4 10C4 8.89543 4.89543 8 6 8H18C19.1046 8 20 8.89543 20 10Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3658",
        "figmaName": "Other/play-square",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "play-square",
        "id": "eds-other-play-square",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/play-square\">\n<path id=\"Icon\" d=\"M7.33334 26.6667H24.6667C25.7712 26.6667 26.6667 25.7712 26.6667 24.6667V7.33333C26.6667 6.22876 25.7712 5.33333 24.6667 5.33333H7.33333C6.22876 5.33333 5.33333 6.22877 5.33333 7.33334V24.6667C5.33333 25.7712 6.22877 26.6667 7.33334 26.6667ZM21.1728 16.4412L13.4706 20.549C12.8045 20.9043 12 20.4216 12 19.6667V12.3333C12 11.5784 12.8045 11.0957 13.4706 11.451L21.1728 15.5588C21.5257 15.7471 21.5257 16.2529 21.1728 16.4412Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3678",
        "figmaName": "Other/camera-timer",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "camera-timer",
        "id": "eds-other-camera-timer",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/camera-timer\">\n<path id=\"Icon\" d=\"M16 10.6667V17.3333H21.3333M21.4142 6.08088L19.9191 4.58579C19.544 4.21071 19.0353 4 18.5049 4H13.4951C12.9647 4 12.456 4.21071 12.0809 4.58579L10.5858 6.08088C10.2107 6.45595 9.70201 6.66667 9.17157 6.66667H6C4.89543 6.66667 4 7.56209 4 8.66666L4 23.3333C4 24.4379 4.89543 25.3333 6 25.3333H26C27.1046 25.3333 28 24.4379 28 23.3333V8.66667C28 7.5621 27.1046 6.66667 26 6.66667H22.8284C22.298 6.66667 21.7893 6.45595 21.4142 6.08088Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3687",
        "figmaName": "Other/cast",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "cast",
        "id": "eds-other-cast",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/cast\">\n<path id=\"Icon\" d=\"M4 6.66667H26C27.1046 6.66667 28 7.5621 28 8.66667V23.3333C28 24.4379 27.1046 25.3333 26 25.3333H21.3333M10.6667 25.3333C10.6667 21.6514 7.6819 18.6667 4 18.6667M16 25.3333C16 18.7059 10.6274 13.3333 4 13.3333M4 24.6667C4 25.0349 4.29848 25.3333 4.66667 25.3333C5.03486 25.3333 5.34715 25.017 5.17035 24.694C5.04786 24.4703 4.86307 24.2855 4.63931 24.163C4.31635 23.9862 4 24.2985 4 24.6667Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3674",
        "figmaName": "Other/grid-alt",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "grid-alt",
        "id": "eds-other-grid-alt",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/grid-alt\">\n<path id=\"Icon\" d=\"M19.4528 26H25C25.5523 26 26 25.5523 26 25V19.4528C26 18.9005 25.5523 18.4528 25 18.4528H19.4528C18.9005 18.4528 18.4528 18.9005 18.4528 19.4528V25C18.4528 25.5523 18.9005 26 19.4528 26ZM7 26H12.5472C13.0995 26 13.5472 25.5523 13.5472 25V19.4528C13.5472 18.9005 13.0995 18.4528 12.5472 18.4528H7C6.44772 18.4528 6 18.9005 6 19.4528V25C6 25.5523 6.44772 26 7 26ZM19.4528 13.5472H25C25.5523 13.5472 26 13.0995 26 12.5472V7C26 6.44772 25.5523 6 25 6H19.4528C18.9005 6 18.4528 6.44772 18.4528 7V12.5472C18.4528 13.0995 18.9005 13.5472 19.4528 13.5472ZM7 13.5472H12.5472C13.0995 13.5472 13.5472 13.0995 13.5472 12.5472V7C13.5472 6.44772 13.0995 6 12.5472 6H7C6.44772 6 6 6.44772 6 7V12.5472C6 13.0995 6.44772 13.5472 7 13.5472Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3661",
        "figmaName": "Other/menu",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "menu",
        "id": "eds-other-menu",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/menu\">\n<path id=\"Icon\" d=\"M5.33333 9.33333H26.6667M5.33333 16H26.6667M5.33333 22.6667H26.6667\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3680",
        "figmaName": "Other/loop",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "loop",
        "id": "eds-other-loop",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/loop\">\n<path id=\"Icon\" d=\"M4.66667 17.3333L3.96259 14.0476C3.29561 10.9351 5.66838 8 8.8516 8H25.3333M21.3333 4L25.3333 8L21.3333 12M27.3333 14.6667L28.0374 17.9524C28.7044 21.0649 26.3316 24 23.1484 24H6.66667M10.6667 28L6.66667 24L10.6667 20\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3685",
        "figmaName": "Other/crop",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "crop",
        "id": "eds-other-crop",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/crop\">\n<path id=\"Icon\" d=\"M12 6.66667H8.66667C7.5621 6.66667 6.66667 7.5621 6.66667 8.66667V12M12 25.3333H8.66667C7.5621 25.3333 6.66667 24.4379 6.66667 23.3333V20M20 6.66667H23.3333C24.4379 6.66667 25.3333 7.5621 25.3333 8.66667V12M20 25.3333H23.3333C24.4379 25.3333 25.3333 24.4379 25.3333 23.3333V20\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3648",
        "figmaName": "Other/full-screen",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "full-screen",
        "id": "eds-other-full-screen",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/full-screen\">\n<path id=\"Icon\" d=\"M8 20V22C8 23.1046 8.89543 24 10 24H12M24 20V22C24 23.1046 23.1046 24 22 24H20M8 12V10C8 8.89543 8.89543 8 10 8H12M24 12V10C24 8.89543 23.1046 8 22 8H20\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3655",
        "figmaName": "Other/app-menu",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "app-menu",
        "id": "eds-other-app-menu",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/app-menu\">\n<g id=\"Icon\">\n<path d=\"M10.75 17.7143C11.7125 17.7143 12.5 16.9429 12.5 16C12.5 15.0571 11.7125 14.2857 10.75 14.2857C9.7875 14.2857 9 15.0571 9 16C9 16.9429 9.7875 17.7143 10.75 17.7143Z\" fill=\"currentColor\"/>\n<path d=\"M10.75 7.42857C11.7125 7.42857 12.5 6.65714 12.5 5.71429C12.5 4.77143 11.7125 4 10.75 4C9.7875 4 9 4.77143 9 5.71429C9 6.65714 9.7875 7.42857 10.75 7.42857Z\" fill=\"currentColor\"/>\n<path d=\"M10.75 28C11.7125 28 12.5 27.2286 12.5 26.2857C12.5 25.3429 11.7125 24.5714 10.75 24.5714C9.7875 24.5714 9 25.3429 9 26.2857C9 27.2286 9.7875 28 10.75 28Z\" fill=\"currentColor\"/>\n<path d=\"M21.25 17.7143C22.2125 17.7143 23 16.9429 23 16C23 15.0571 22.2125 14.2857 21.25 14.2857C20.2875 14.2857 19.5 15.0571 19.5 16C19.5 16.9429 20.2875 17.7143 21.25 17.7143Z\" fill=\"currentColor\"/>\n<path d=\"M21.25 7.42857C22.2125 7.42857 23 6.65714 23 5.71429C23 4.77143 22.2125 4 21.25 4C20.2875 4 19.5 4.77143 19.5 5.71429C19.5 6.65714 20.2875 7.42857 21.25 7.42857Z\" fill=\"currentColor\"/>\n<path d=\"M21.25 28C22.2125 28 23 27.2286 23 26.2857C23 25.3429 22.2125 24.5714 21.25 24.5714C20.2875 24.5714 19.5 25.3429 19.5 26.2857C19.5 27.2286 20.2875 28 21.25 28Z\" fill=\"currentColor\"/>\n</g>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3647",
        "figmaName": "Other/refresh",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "refresh",
        "id": "eds-other-refresh",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/refresh\">\n<path id=\"Icon\" d=\"M27.9792 8V13.3333H22.6667M27.9792 13.3333L23.5425 8.45753C19.3769 4.29193 12.6231 4.29194 8.45753 8.45753C4.29193 12.6231 4.29193 19.3769 8.45753 23.5425C12.6231 27.7081 19.3769 27.7081 23.5425 23.5425C24.5876 22.4973 25.3705 21.2892 25.8912 20\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3653",
        "figmaName": "Other/more-horizontal",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "more-horizontal",
        "id": "eds-other-more-horizontal",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/more-horizontal\">\n<g id=\"Icon\">\n<path d=\"M5.5 17.75C6.4625 17.75 7.25 16.9625 7.25 16C7.25 15.0375 6.4625 14.25 5.5 14.25C4.5375 14.25 3.75 15.0375 3.75 16C3.75 16.9625 4.5375 17.75 5.5 17.75Z\" fill=\"currentColor\"/>\n<path d=\"M16 17.75C16.9625 17.75 17.75 16.9625 17.75 16C17.75 15.0375 16.9625 14.25 16 14.25C15.0375 14.25 14.25 15.0375 14.25 16C14.25 16.9625 15.0375 17.75 16 17.75Z\" fill=\"currentColor\"/>\n<path d=\"M26.5 17.75C27.4625 17.75 28.25 16.9625 28.25 16C28.25 15.0375 27.4625 14.25 26.5 14.25C25.5375 14.25 24.75 15.0375 24.75 16C24.75 16.9625 25.5375 17.75 26.5 17.75Z\" fill=\"currentColor\"/>\n</g>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3654",
        "figmaName": "Other/filter-list",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "filter-list",
        "id": "eds-other-filter-list",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/filter-list\">\n<path id=\"Icon\" d=\"M5.33358 9.33333H26.6669M9.3335 16H22.6668M14.6668 22.6667H17.3335\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3656",
        "figmaName": "Other/filter-list-add",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "filter-list-add",
        "id": "eds-other-filter-list-add",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/filter-list-add\">\n<path id=\"Icon\" d=\"M4.00033 10.6667H14.667M20.0003 10.6667H24.0003M24.0003 10.6667H28.0003M24.0003 10.6667V14.6667M24.0003 10.6667V6.66667M8.00033 17.3333H20.0003M13.3337 24H16.0003\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3643",
        "figmaName": "Other/face-id",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "face-id",
        "id": "eds-other-face-id",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/face-id\">\n<path id=\"Icon\" d=\"M9.33333 4H6.66667C5.19391 4 4 5.19391 4 6.66666V9.33333M9.33333 28H6.66667C5.19391 28 4 26.8061 4 25.3333V22.6667M22.6667 4H25.3333C26.8061 4 28 5.19391 28 6.66666V9.33333M22.6667 28H25.3333C26.8061 28 28 26.8061 28 25.3333V22.6667M14.6667 17.3333H16V12M21.3333 12.6667V10.6667M12 22C14 23.3333 18 23.3333 20 22M10.6667 12.6667V10.6667\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3626",
        "figmaName": "Other/print",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "print",
        "id": "eds-other-print",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/print\">\n<path id=\"Icon\" d=\"M9.33333 22.6667H6C4.89543 22.6667 4 21.7712 4 20.6667V13.6667C4 12.0098 5.34315 10.6667 7 10.6667H9.33333M9.33333 22.6667V18.6667H22.6667V22.6667M9.33333 22.6667V24.6667C9.33333 25.7712 10.2288 26.6667 11.3333 26.6667H20.6667C21.7712 26.6667 22.6667 25.7712 22.6667 24.6667V22.6667M22.6667 22.6667H26C27.1046 22.6667 28 21.7712 28 20.6667V13.6667C28 12.0098 26.6569 10.6667 25 10.6667H22.6667M9.33333 10.6667V7.33333C9.33333 6.22876 10.2288 5.33333 11.3333 5.33333H20.6667C21.7712 5.33333 22.6667 6.22876 22.6667 7.33333V10.6667M9.33333 10.6667H22.6667M20 14.6667H22.6667\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3681",
        "figmaName": "Other/library",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "library",
        "id": "eds-other-library",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/library\">\n<path id=\"Icon\" d=\"M10.6667 4H21.3333M8 9.33333H24M14.6667 19.3333V23.3333L18.6667 21.3333L14.6667 19.3333ZM7.33334 28H24.6667C25.7712 28 26.6667 27.1046 26.6667 26V16.6667C26.6667 15.5621 25.7712 14.6667 24.6667 14.6667H7.33333C6.22876 14.6667 5.33333 15.5621 5.33333 16.6667V26C5.33333 27.1046 6.22877 28 7.33334 28Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3641",
        "figmaName": "Other/storage",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "storage",
        "id": "eds-other-storage",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/storage\">\n<path id=\"Icon\" d=\"M6.66667 12V6C6.66667 4.89543 7.5621 4 8.66667 4H23.3333C24.4379 4 25.3333 4.89543 25.3333 6V12M6.66667 12H25.3333M6.66667 12V20M25.3333 12V20M25.3333 20V26C25.3333 27.1046 24.4379 28 23.3333 28H8.66666C7.5621 28 6.66667 27.1046 6.66667 26V20M25.3333 20H6.66667M10.6667 16H10.68M10.6667 8H10.68M10.6667 24H10.68\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3662",
        "figmaName": "Other/podcast",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "podcast",
        "id": "eds-other-podcast",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/podcast\">\n<path id=\"Icon\" d=\"M16 17.3333L16 28M16 17.3333C16.7364 17.3333 17.3333 16.7364 17.3333 16C17.3333 15.2636 16.7364 14.6667 16 14.6667C15.2636 14.6667 14.6667 15.2636 14.6667 16C14.6667 16.7364 15.2636 17.3333 16 17.3333ZM20.714 20.714C23.3175 18.1106 23.3175 13.8895 20.714 11.286C18.1106 8.68246 13.8895 8.68246 11.286 11.286C8.68246 13.8895 8.68246 18.1106 11.286 20.714M24.4853 24.4853C29.1716 19.799 29.1716 12.201 24.4853 7.51472C19.799 2.82843 12.201 2.82843 7.51472 7.51472C2.82843 12.201 2.82843 19.799 7.51472 24.4853\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3688",
        "figmaName": "Other/sliders",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "sliders",
        "id": "eds-other-sliders",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/sliders\">\n<path id=\"Icon\" d=\"M5.33333 8H10.6667M10.6667 8V5.33333M10.6667 8V10.6667M26.6667 8H16M5.33333 16H18.6667M18.6667 16V13.3333M18.6667 16V18.6667M26.6667 16H24M5.33333 24H13.3333M13.3333 24V21.3333M13.3333 24V26.6667M26.6667 24H18.6667\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3673",
        "figmaName": "Other/AR",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "AR",
        "id": "eds-other-ar",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/AR\">\n<path id=\"Icon\" d=\"M9.33333 12.6667L16 16M16 22.6667L22.6667 19.3333V12.6667L16 9.33333L9.33333 12.6667V19.3333L16 22.6667ZM16 16L22.6667 12.6667M16 16V22.6667M10.6667 5.33333H7.33333C6.22876 5.33333 5.33333 6.22876 5.33333 7.33333V10.6667M10.6667 26.6667H7.33333C6.22876 26.6667 5.33333 25.7712 5.33333 24.6667V21.3333M21.3333 5.33333H24.6667C25.7712 5.33333 26.6667 6.22876 26.6667 7.33333V10.6667M21.3333 26.6667H24.6667C25.7712 26.6667 26.6667 25.7712 26.6667 24.6667V21.3333\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3646",
        "figmaName": "Other/loading-2",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "loading-2",
        "id": "eds-other-loading-2",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/loading-2\">\n<path id=\"Icon\" d=\"M16 4.99988V8.66654M16 26.9999V23.3332M6.47372 21.4999L9.64915 19.6665M27 15.9999H23.3333M21.5 25.5262L19.6667 22.3507M5 15.9999H8.66666M10.5 6.4736L12.3333 9.64902M10.5 25.5262L12.3333 22.3507M25.5263 21.4999L22.3508 19.6665M6.47372 10.4999L9.64914 12.3332\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3672",
        "figmaName": "Other/loading-1",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "loading-1",
        "id": "eds-other-loading-1",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/loading-1\">\n<path id=\"Icon\" d=\"M16 4V8M3.99996 16H7.99996M7.51472 7.51472L10.3431 10.3431M7.51468 24.4853L10.3431 21.6568M28 16.0007H24M24.4853 7.51518L21.6569 10.3436M15.9997 28.0003V24.0003M24.4851 24.4856L21.6567 21.6572\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3633",
        "figmaName": "Other/loading-3",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "loading-3",
        "id": "eds-other-loading-3",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"28.0001\" height=\"28.0001\" viewBox=\"0 0 28.0001 28.0001\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"&#231;&#188;&#150;&#231;&#187;&#132; 4\">\n<ellipse id=\"&#230;&#164;&#173;&#229;&#156;&#134;&#229;&#189;&#162;\" cx=\"14.0002\" cy=\"3.81818\" rx=\"2.54545\" ry=\"3.81818\" fill=\"currentColor\"/>\n<ellipse id=\"&#230;&#164;&#173;&#229;&#156;&#134;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 9\" cx=\"14.0002\" cy=\"24.182\" rx=\"2.54545\" ry=\"3.81818\" fill=\"#A8ABB2\"/>\n<ellipse id=\"&#230;&#164;&#173;&#229;&#156;&#134;&#229;&#189;&#162;_2\" cx=\"6.80006\" cy=\"6.80059\" rx=\"2.54545\" ry=\"3.81818\" transform=\"rotate(-45 6.80006 6.80059)\" fill=\"#606266\"/>\n<ellipse id=\"&#230;&#164;&#173;&#229;&#156;&#134;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 9_2\" cx=\"21.2\" cy=\"21.1998\" rx=\"2.54545\" ry=\"3.81818\" transform=\"rotate(-45 21.2 21.1998)\" fill=\"#A8ABB2\"/>\n<ellipse id=\"&#230;&#164;&#173;&#229;&#156;&#134;&#229;&#189;&#162;_3\" cx=\"3.81818\" cy=\"13.9998\" rx=\"2.54545\" ry=\"3.81818\" transform=\"rotate(-90 3.81818 13.9998)\" fill=\"#909399\"/>\n<ellipse id=\"&#230;&#164;&#173;&#229;&#156;&#134;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 9_3\" cx=\"24.1817\" cy=\"13.9997\" rx=\"2.54545\" ry=\"3.81818\" transform=\"rotate(-90 24.1817 13.9997)\" fill=\"#C0C4CC\"/>\n<ellipse id=\"&#230;&#164;&#173;&#229;&#156;&#134;&#229;&#189;&#162;_4\" cx=\"6.80051\" cy=\"21.1994\" rx=\"2.54545\" ry=\"3.81818\" transform=\"rotate(-135 6.80051 21.1994)\" fill=\"#909399\"/>\n<ellipse id=\"&#230;&#164;&#173;&#229;&#156;&#134;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 9_4\" cx=\"2.54545\" cy=\"3.81818\" rx=\"2.54545\" ry=\"3.81818\" transform=\"matrix(-0.707111 -0.707102 0.707111 -0.707102 20.2996 11.3003)\" fill=\"#C0C4CC\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3624",
        "figmaName": "Other/loading-4",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "loading-4",
        "id": "eds-other-loading-4",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/loading-4\">\n<path id=\"Vector\" d=\"M28 16C27.9999 18.5341 27.1975 21.0031 25.7079 23.0532C24.2183 25.1033 22.1179 26.6292 19.7078 27.4122C17.2977 28.1952 14.7016 28.1951 12.2915 27.412C9.88145 26.6289 7.78117 25.1029 6.29169 23.0527C4.8022 21.0025 3.99998 18.5334 4 15.9993C4.00002 13.4652 4.80227 10.9961 6.29179 8.946C7.7813 6.89585 9.88161 5.36988 12.2917 4.58677C14.7018 3.80366 17.2979 3.80362 19.708 4.58667\" stroke-width=\"1.33\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3623",
        "figmaName": "Other/BreadcrumbSlash",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "BreadcrumbSlash",
        "id": "eds-other-breadcrumbslash",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/BreadcrumbSlash\">\n<path id=\"Line 101\" d=\"M9.79978 27.4312L22.9998 4.56817\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3625",
        "figmaName": "Other/airplay",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "airplay",
        "id": "eds-other-airplay",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/airplay\">\n<path id=\"Icon\" d=\"M8 22.6667H6C4.89543 22.6667 4 21.7712 4 20.6667V8.66667C4 7.5621 4.89543 6.66667 6 6.66667H26C27.1046 6.66667 28 7.5621 28 8.66667V20.6667C28 21.7712 27.1046 22.6667 26 22.6667H24M10.6667 26.6667L16 20L21.3333 26.6667H10.6667Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3686",
        "figmaName": "Other/power",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "power",
        "id": "eds-other-power",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/power\">\n<path id=\"Icon\" d=\"M16 5.33333V16M23.0555 7.99998C25.27 9.9545 26.6667 12.8141 26.6667 16C26.6667 21.891 21.891 26.6667 16 26.6667C10.109 26.6667 5.33333 21.891 5.33333 16C5.33333 12.8141 6.73002 9.9545 8.94449 7.99998\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3639",
        "figmaName": "Other/phone-call-1",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "phone-call-1",
        "id": "eds-other-phone-call-1",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/phone-call-1\">\n<path id=\"Icon\" d=\"M28.0002 14.6666C28.0002 8.77555 23.2245 3.99992 17.3335 3.99992M22.4988 13.3333C22.0165 11.4591 20.5409 9.98357 18.6667 9.50123M25.0281 26.5971C14.9293 25.7396 6.26037 17.0707 5.40291 6.97186C5.32225 6.02192 6.00625 5.19875 6.9411 5.01178L10.5021 4.29959C11.3865 4.12271 12.2798 4.55963 12.6832 5.36632L13.9202 7.8404C14.3525 8.70493 14.1046 9.75488 13.3313 10.3348L12.8 10.7333C12.2964 11.111 11.9846 11.7141 12.1995 12.3058C13.1322 14.8745 17.1255 18.8678 19.6942 19.8005C20.2859 20.0154 20.889 19.7036 21.2667 19.2L21.6652 18.6687C22.2451 17.8954 23.2951 17.6475 24.1596 18.0798L26.6337 19.3168C27.4404 19.7202 27.8773 20.6135 27.7004 21.4979L26.9882 25.0589C26.8012 25.9937 25.9781 26.6777 25.0281 26.5971Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3630",
        "figmaName": "Other/phone-call-2",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "phone-call-2",
        "id": "eds-other-phone-call-2",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/phone-call-2\">\n<path id=\"Icon\" d=\"M11.2861 11.2864C13.8896 8.68286 18.1107 8.68286 20.7142 11.2864M7.51465 7.51537C12.2009 2.82908 19.7989 2.82908 24.4852 7.51537M20.1809 21.2329C17.8435 20.5953 14.1565 20.5953 11.8191 21.2329C11.0905 21.4317 10.6667 22.1341 10.6667 22.8892V23.9384C10.6667 24.7515 10.1744 25.4836 9.42148 25.7905L6.75482 26.8773C5.43939 27.4134 4 26.4457 4 25.0252V21.5943C4 21.0573 4.21199 20.5381 4.61469 20.1828C10.9355 14.6057 21.0645 14.6057 27.3853 20.1828C27.788 20.5381 28 21.0573 28 21.5943V25.0252C28 26.4457 26.5606 27.4134 25.2452 26.8773L22.5785 25.7905C21.8256 25.4836 21.3333 24.7515 21.3333 23.9384V22.8892C21.3333 22.1341 20.9095 21.4317 20.1809 21.2329Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3629",
        "figmaName": "Other/phone-missed",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "phone-missed",
        "id": "eds-other-phone-missed",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/phone-missed\">\n<path id=\"Icon\" d=\"M24.6667 7.33333L21.3333 10.6667M24.6667 7.33333L28 4M24.6667 7.33333L28 10.6667M24.6667 7.33333L21.3333 4M25.0281 26.5971C14.9293 25.7396 6.26037 17.0707 5.40291 6.97186C5.32225 6.02192 6.00625 5.19875 6.9411 5.01178L10.5021 4.29959C11.3865 4.12271 12.2798 4.55963 12.6832 5.36632L13.9202 7.8404C14.3525 8.70493 14.1046 9.75488 13.3313 10.3348L12.8 10.7333C12.2964 11.111 11.9846 11.7141 12.1995 12.3058C13.1322 14.8745 17.1255 18.8678 19.6942 19.8005C20.2859 20.0154 20.889 19.7036 21.2667 19.2L21.6652 18.6687C22.2451 17.8954 23.2951 17.6475 24.1596 18.0798L26.6337 19.3168C27.4404 19.7202 27.8773 20.6135 27.7004 21.4979L26.9882 25.0589C26.8012 25.9937 25.9781 26.6777 25.0281 26.5971Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3675",
        "figmaName": "Other/phone-add",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "phone-add",
        "id": "eds-other-phone-add",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/phone-add\">\n<path id=\"Icon\" d=\"M24.0002 7.99992V12M24.0002 7.99992V3.99992M24.0002 7.99992L28.0002 7.99992M24.0002 7.99992L20 8M25.0281 26.5971C14.9293 25.7396 6.26037 17.0707 5.40291 6.97186C5.32225 6.02192 6.00625 5.19875 6.9411 5.01178L10.5021 4.29959C11.3865 4.12271 12.2798 4.55963 12.6832 5.36632L13.9202 7.8404C14.3525 8.70493 14.1046 9.75488 13.3313 10.3348L12.8 10.7333C12.2964 11.111 11.9846 11.7141 12.1995 12.3058C13.1322 14.8745 17.1255 18.8678 19.6942 19.8005C20.2859 20.0154 20.889 19.7036 21.2667 19.2L21.6652 18.6687C22.2451 17.8954 23.2951 17.6475 24.1596 18.0798L26.6337 19.3168C27.4404 19.7202 27.8773 20.6135 27.7004 21.4979L26.9882 25.0589C26.8012 25.9937 25.9781 26.6777 25.0281 26.5971Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3642",
        "figmaName": "Other/phone",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "phone",
        "id": "eds-other-phone",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/phone\">\n<path id=\"Icon\" d=\"M25.0281 26.5971C14.9293 25.7396 6.26037 17.0707 5.40291 6.97186C5.32225 6.02192 6.00625 5.19875 6.9411 5.01178L10.5021 4.29959C11.3865 4.12271 12.2798 4.55963 12.6832 5.36632L13.9202 7.8404C14.3525 8.70493 14.1046 9.75488 13.3313 10.3348L12.8 10.7333C12.2964 11.111 11.9846 11.7141 12.1995 12.3058C13.1322 14.8745 17.1255 18.8678 19.6942 19.8005C20.2859 20.0154 20.889 19.7036 21.2667 19.2L21.6652 18.6687C22.2451 17.8954 23.2951 17.6475 24.1596 18.0798L26.6337 19.3168C27.4404 19.7202 27.8773 20.6135 27.7004 21.4979L26.9882 25.0589C26.8012 25.9937 25.9781 26.6777 25.0281 26.5971Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3627",
        "figmaName": "Other/phone-call-end",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "phone-call-end",
        "id": "eds-other-phone-call-end",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/phone-call-end\">\n<path id=\"Icon\" d=\"M21.6549 16.2107C18.484 14.8858 13.516 14.8858 10.3451 16.2107C9.69686 16.4815 9.33333 17.1469 9.33333 17.8494V18.646C9.33333 19.4638 8.83544 20.1992 8.07613 20.5029L5.40946 21.5696C4.09573 22.0951 2.66667 21.1276 2.66667 19.7126V16.2181C2.66667 15.6546 2.90084 15.1126 3.33562 14.7542C10.4853 8.85975 21.5147 8.85974 28.6644 14.7542C29.0992 15.1126 29.3333 15.6546 29.3333 16.2181V19.7126C29.3333 21.1276 27.9043 22.0951 26.5905 21.5696L23.9239 20.5029C23.1646 20.1992 22.6667 19.4638 22.6667 18.646V17.8494C22.6667 17.1469 22.3031 16.4815 21.6549 16.2107Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8411:3628",
        "figmaName": "Other/signal-cellular-3-bar",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "signal-cellular-3-bar",
        "id": "eds-other-signal-cellular-3-bar",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/signal-cellular-3-bar\">\n<path id=\"Icon\" d=\"M22.3333 26.6667H25.6667C26.2189 26.6667 26.6667 26.219 26.6667 25.6667V9C26.6667 8.44772 26.2189 8 25.6667 8H22.3333C21.781 8 21.3333 8.44771 21.3333 9V25.6667C21.3333 26.219 21.781 26.6667 22.3333 26.6667ZM6.33333 26.6667H9.66667C10.219 26.6667 10.6667 26.219 10.6667 25.6667V19.6667C10.6667 19.1144 10.2189 18.6667 9.66667 18.6667H6.33333C5.78105 18.6667 5.33333 19.1144 5.33333 19.6667V25.6667C5.33333 26.219 5.78105 26.6667 6.33333 26.6667ZM14.3333 26.6667H17.6667C18.219 26.6667 18.6667 26.219 18.6667 25.6667V14.3333C18.6667 13.781 18.2189 13.3333 17.6667 13.3333H14.3333C13.781 13.3333 13.3333 13.781 13.3333 14.3333V25.6667C13.3333 26.219 13.781 26.6667 14.3333 26.6667Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4350",
        "figmaName": "Other/add-block",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "add-block",
        "id": "eds-other-add-block",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/add-block\">\n<path id=\"Icon\" d=\"M22.6667 20V25.3333M25.3333 22.6667H20M20.6667 13.3333H24.6667C25.7712 13.3333 26.6667 12.4379 26.6667 11.3333V7.33333C26.6667 6.22876 25.7712 5.33333 24.6667 5.33333H20.6667C19.5621 5.33333 18.6667 6.22876 18.6667 7.33333V11.3333C18.6667 12.4379 19.5621 13.3333 20.6667 13.3333ZM7.33333 26.6667H11.3333C12.4379 26.6667 13.3333 25.7712 13.3333 24.6667V20.6667C13.3333 19.5621 12.4379 18.6667 11.3333 18.6667H7.33333C6.22876 18.6667 5.33333 19.5621 5.33333 20.6667V24.6667C5.33333 25.7712 6.22876 26.6667 7.33333 26.6667ZM7.33333 13.3333H11.3333C12.4379 13.3333 13.3333 12.4379 13.3333 11.3333V7.33333C13.3333 6.22876 12.4379 5.33333 11.3333 5.33333H7.33333C6.22876 5.33333 5.33333 6.22876 5.33333 7.33333V11.3333C5.33333 12.4379 6.22876 13.3333 7.33333 13.3333Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4343",
        "figmaName": "Other/note-02",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "note-02",
        "id": "eds-other-note-02",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"22.7333\" height=\"22.7333\" viewBox=\"0 0 22.7333 22.7333\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path id=\"Icon\" d=\"M22.0333 10.0333L12.7 0.7H2.7C1.59543 0.7 0.7 1.59543 0.7 2.7V20.0333C0.7 21.1379 1.59543 22.0333 2.7 22.0333H20.0333C21.1379 22.0333 22.0333 21.1379 22.0333 20.0333V10.0333ZM12.7 0.7V9.03333C12.7 9.58562 13.1477 10.0333 13.7 10.0333H22.0333\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</svg>"
      },
      {
        "nodeId": "8413:4340",
        "figmaName": "Other/file-2",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "file-2",
        "id": "eds-other-file-2",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"28\" height=\"32\" viewBox=\"0 0 28 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/file-2\">\n<path id=\"Icon\" d=\"M8 4L20 4H22C23.1046 4 24 4.89543 24 6V26C24 27.1046 23.1046 28 22 28H6C4.89543 28 4 27.1046 4 26V6C4 4.89543 4.89543 4 6 4L8 4ZM20 4V6C20 7.10457 19.1046 8 18 8H10C8.89543 8 8 7.10457 8 6L8 4\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4346",
        "figmaName": "Other/file",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "file",
        "id": "eds-other-file",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/file\">\n<path id=\"Icon\" d=\"M25.3333 12L17.3333 4H8.66667C7.5621 4 6.66667 4.89543 6.66667 6V26C6.66667 27.1046 7.56209 28 8.66666 28H23.3333C24.4379 28 25.3333 27.1046 25.3333 26V12ZM17.3333 4V11C17.3333 11.5523 17.781 12 18.3333 12H25.3333\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4344",
        "figmaName": "Other/add-page",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "add-page",
        "id": "eds-other-add-page",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/add-page\">\n<path id=\"Icon\" d=\"M25.3333 12L17.3333 4H8.66667C7.5621 4 6.66667 4.89543 6.66667 6V26C6.66667 27.1046 7.56209 28 8.66666 28H23.3333C24.4379 28 25.3333 27.1046 25.3333 26V12ZM17.3333 4V11C17.3333 11.5523 17.781 12 18.3333 12H25.3333M16 17.3333V22.6667M18.6667 20H13.3333\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4345",
        "figmaName": "Other/note-01",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "note-01",
        "id": "eds-other-note-01",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/note-01\">\n<path id=\"Icon\" d=\"M25.3333 12L17.3333 4H8.66667C7.5621 4 6.66667 4.89543 6.66667 6V26C6.66667 27.1046 7.56209 28 8.66666 28H23.3333C24.4379 28 25.3333 27.1046 25.3333 26V12ZM17.3333 4V11C17.3333 11.5523 17.781 12 18.3333 12H25.3333M12 17.3333H20M12 22.6667H20\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4349",
        "figmaName": "Other/file-copy",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "file-copy",
        "id": "eds-other-file-copy",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/file-copy\">\n<path id=\"Icon\" d=\"M26.6667 16L18.6667 8H11.3333C10.2288 8 9.33333 8.89543 9.33333 10V27.3333C9.33333 28.4379 10.2288 29.3333 11.3333 29.3333H24.6667C25.7712 29.3333 26.6667 28.4379 26.6667 27.3333V16ZM18.6667 8V15C18.6667 15.5523 19.1144 16 19.6667 16H26.6667M4 21.3333V4.66666C4 3.5621 4.89543 2.66667 6 2.66667H20\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4348",
        "figmaName": "Other/clipboard",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "clipboard",
        "id": "eds-other-clipboard",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/clipboard\">\n<path id=\"Icon\" d=\"M12 22.6667H16M12 12H20M12 17.3333H20M13.3333 2.66667H18.6667M8.66666 28H23.3333C24.4379 28 25.3333 27.1046 25.3333 26V8.66667C25.3333 7.5621 24.4379 6.66667 23.3333 6.66667H8.66667C7.5621 6.66667 6.66667 7.5621 6.66667 8.66667V26C6.66667 27.1046 7.56209 28 8.66666 28Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4342",
        "figmaName": "Other/folder",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "folder",
        "id": "eds-other-folder",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/folder\">\n<path id=\"Icon\" d=\"M6 25.3333H26C27.1046 25.3333 28 24.4379 28 23.3333V11.3333C28 10.2288 27.1046 9.33333 26 9.33333H16.1618C15.6313 9.33333 15.1226 9.12262 14.7475 8.74755L13.2525 7.25245C12.8774 6.87738 12.3687 6.66667 11.8382 6.66667L6 6.66667C4.89543 6.66667 4 7.56209 4 8.66666V23.3333C4 24.4379 4.89543 25.3333 6 25.3333Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4341",
        "figmaName": "Other/add-folder",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "add-folder",
        "id": "eds-other-add-folder",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/add-folder\">\n<path id=\"Icon\" d=\"M16 14.6667V20M18.6667 17.3333H13.3333M6 25.3333H26C27.1046 25.3333 28 24.4379 28 23.3333V11.3333C28 10.2288 27.1046 9.33333 26 9.33333H16.1618C15.6313 9.33333 15.1226 9.12262 14.7475 8.74755L13.2525 7.25245C12.8774 6.87738 12.3687 6.66667 11.8382 6.66667L6 6.66667C4.89543 6.66667 4 7.56209 4 8.66666V23.3333C4 24.4379 4.89543 25.3333 6 25.3333Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4339",
        "figmaName": "Other/cloud-upload",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "cloud-upload",
        "id": "eds-other-cloud-upload",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/cloud-upload\">\n<path id=\"Icon\" d=\"M9.33333 25.3333L7.71081 25.3272C4.16308 25.1758 1.33333 22.2517 1.33333 18.6667C1.33333 15.1335 4.08185 12.2423 7.55741 12.0145C9.05256 8.85369 12.2709 6.66667 16 6.66667C20.7024 6.66667 24.5926 10.1443 25.239 14.668L25.3333 14.6667C28.2789 14.6667 30.6667 17.0545 30.6667 20C30.6667 22.8563 28.4214 25.1881 25.5995 25.3268L22.6667 25.3333M16 26.6667V16M12 20L16 16L20 20\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4338",
        "figmaName": "Other/cloud-download",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "cloud-download",
        "id": "eds-other-cloud-download",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/cloud-download\">\n<path id=\"Icon\" d=\"M9.33333 25.3333L7.71081 25.3272C4.16308 25.1758 1.33333 22.2517 1.33333 18.6667C1.33333 15.1335 4.08185 12.2423 7.55741 12.0145C9.05256 8.85369 12.2709 6.66667 16 6.66667C20.7024 6.66667 24.5926 10.1443 25.239 14.668L25.3333 14.6667C28.2789 14.6667 30.6667 17.0545 30.6667 20C30.6667 22.8563 28.4214 25.1881 25.5995 25.3268L22.6667 25.3333M16 13.3333V24M12 20L16 24L20 20\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4347",
        "figmaName": "Other/inbox",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "inbox",
        "id": "eds-other-inbox",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/inbox\">\n<path id=\"Icon\" d=\"M26.6667 18.6667H20C20 20.8758 18.2091 22.6667 16 22.6667C13.7909 22.6667 12 20.8758 12 18.6667H5.33333M7.33334 26.6667H24.6667C25.7712 26.6667 26.6667 25.7712 26.6667 24.6667V7.33333C26.6667 6.22876 25.7712 5.33333 24.6667 5.33333H7.33333C6.22876 5.33333 5.33333 6.22877 5.33333 7.33334V24.6667C5.33333 25.7712 6.22877 26.6667 7.33334 26.6667Z\" stroke-width=\"1.4\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4337",
        "figmaName": "Other/list",
        "category": "Other",
        "sectionLabel": "Other (PacsTrust)",
        "slug": "list",
        "id": "eds-other-list",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Other/list\">\n<path id=\"Icon\" d=\"M12 22.6667H26.6667M12 16H26.6667M12 9.33333H26.6667M5.33333 22H6.66667V23.3333H5.33333V22ZM5.33333 15.3333H6.66667V16.6667H5.33333V15.3333ZM5.33333 8.66667V10H6.66667V8.66667H5.33333Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      }
    ],
    "kind": "eds"
  },
  {
    "id": "social-+-communication",
    "label": "Social + communication",
    "icons": [
      {
        "nodeId": "8413:4095",
        "figmaName": "Social/youtube",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "youtube",
        "id": "eds-social-youtube",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Social/youtube\">\n<path id=\"Icon\" d=\"M13.3333 12V20L21.3333 16L13.3333 12ZM23.0676 25.8814L26.3446 25.5173C27.3037 25.4107 28.0499 24.6345 28.1187 23.672L28.341 20.5598C28.5578 17.5238 28.5578 14.4762 28.341 11.4402L28.1187 8.32801C28.0499 7.36548 27.3037 6.5893 26.3446 6.48274L23.0676 6.11862C18.3703 5.5967 13.6297 5.5967 8.93239 6.11862L5.65539 6.48273C4.69631 6.5893 3.95008 7.36548 3.88133 8.32801L3.65903 11.4402C3.44218 14.4762 3.44218 17.5238 3.65903 20.5598L3.88133 23.672C3.95008 24.6345 4.69631 25.4107 5.65539 25.5173L8.93238 25.8814C13.6297 26.4033 18.3703 26.4033 23.0676 25.8814Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4086",
        "figmaName": "Social/user",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "user",
        "id": "eds-social-user",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Social/user\">\n<path id=\"Icon\" d=\"M16 18.6667C21.7764 18.6667 24.5498 20.6687 25.1875 24.6727C25.3612 25.7635 24.4379 26.6667 23.3333 26.6667H8.66666C7.56209 26.6667 6.63877 25.7635 6.81251 24.6727C7.45021 20.6687 10.2236 18.6667 16 18.6667ZM16 14.6667C18.6667 14.6667 20 13.3333 20 10C20 6.66667 18.6667 5.33333 16 5.33333C13.3333 5.33333 12 6.66667 12 10C12 13.3333 13.3333 14.6667 16 14.6667Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4072",
        "figmaName": "Social/user-add",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "user-add",
        "id": "eds-social-user-add",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Social/user-add\">\n<path id=\"Icon\" d=\"M4 14.6667H10.6667M7.33333 18V11.3333M19.3333 18.6667C24.6967 18.6667 27.272 20.6683 27.8644 24.6717C28.0261 25.7643 27.1046 26.6667 26 26.6667H12.6667C11.5621 26.6667 10.6405 25.7643 10.8022 24.6717C11.3947 20.6683 13.97 18.6667 19.3333 18.6667ZM19.3333 13.3333C21.5556 13.3333 22.6667 12.1905 22.6667 9.33333C22.6667 6.47619 21.5556 5.33333 19.3333 5.33333C17.1111 5.33333 16 6.47619 16 9.33333C16 12.1905 17.1111 13.3333 19.3333 13.3333Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4084",
        "figmaName": "Social/users",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "users",
        "id": "eds-social-users",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Path\">\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4094",
        "figmaName": "Social/user-remove",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "user-remove",
        "id": "eds-social-user-remove",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Social/user-remove\">\n<path id=\"Icon\" d=\"M22 14.6667H28M12.6667 18.6667C18.03 18.6667 20.6053 20.6683 21.1978 24.6717C21.3595 25.7643 20.4379 26.6667 19.3333 26.6667H6C4.89543 26.6667 3.97387 25.7643 4.13557 24.6717C4.72802 20.6683 7.30333 18.6667 12.6667 18.6667ZM12.6667 13.3333C14.8889 13.3333 16 12.1905 16 9.33333C16 6.47619 14.8889 5.33333 12.6667 5.33333C10.4444 5.33333 9.33333 6.47619 9.33333 9.33333C9.33333 12.1905 10.4444 13.3333 12.6667 13.3333Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4093",
        "figmaName": "Social/user-circle",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "user-circle",
        "id": "eds-social-user-circle",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Social/user-circle\">\n<path id=\"Icon\" d=\"M24 24.9444C23.311 21.8333 20.7142 20 16.0002 20C11.2861 20 8.68901 21.8333 8 24.9444M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28ZM16 16C17.7778 16 18.6667 15.0476 18.6667 12.6667C18.6667 10.2857 17.7778 9.33333 16 9.33333C14.2222 9.33333 13.3333 10.2857 13.3333 12.6667C13.3333 15.0476 14.2222 16 16 16Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4092",
        "figmaName": "Social/user-group",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "user-group",
        "id": "eds-social-user-group",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Social/user-group\">\n<path id=\"Icon\" d=\"M24.6735 25.3333H26.6667C28.1394 25.3333 29.4225 24.1013 28.9547 22.7048C28.2417 20.5766 26.4874 19.2897 23.4036 18.8439M19.3335 14.486C19.7215 14.6086 20.1658 14.6667 20.6667 14.6667C22.8889 14.6667 24 13.5238 24 10.6667C24 7.80952 22.8889 6.66667 20.6667 6.66667C20.1658 6.66667 19.7215 6.72472 19.3335 6.84736M12.6667 18.6667C17.8534 18.6667 20.4327 20.2267 21.1327 23.3466C21.3746 24.4244 20.4379 25.3333 19.3333 25.3333H6C4.89543 25.3333 3.95875 24.4244 4.20059 23.3466C4.90068 20.2267 7.47997 18.6667 12.6667 18.6667ZM12.6667 14.6667C14.8889 14.6667 16 13.5238 16 10.6667C16 7.80952 14.8889 6.66667 12.6667 6.66667C10.4444 6.66667 9.33333 7.80952 9.33333 10.6667C9.33333 13.5238 10.4444 14.6667 12.6667 14.6667Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4090",
        "figmaName": "Social/mail",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "mail",
        "id": "eds-social-mail",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Social/mail\">\n<path id=\"Icon\" d=\"M4 10.6667L14.8906 17.9271C15.5624 18.3749 16.4376 18.3749 17.1094 17.9271L28 10.6667M6 25.3333H26C27.1046 25.3333 28 24.4379 28 23.3333V8.66667C28 7.5621 27.1046 6.66667 26 6.66667H6C4.89543 6.66667 4 7.56209 4 8.66666V23.3333C4 24.4379 4.89543 25.3333 6 25.3333Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4078",
        "figmaName": "Social/mail-open",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "mail-open",
        "id": "eds-social-mail-open",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Social/mail-open\">\n<path id=\"Icon\" d=\"M28 10.6667L16.9713 4.5396C16.3672 4.20402 15.6328 4.20402 15.0287 4.5396L4 10.6667V23.3333C4 24.4379 4.89543 25.3333 6 25.3333H26C27.1046 25.3333 28 24.4379 28 23.3333V10.6667ZM4 10.6667C6.04276 12.0285 12.3297 16.2198 14.8939 17.9292C15.5657 18.3771 16.4376 18.3749 17.1094 17.9271L28 10.6667\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4087",
        "figmaName": "Social/forward-to-inbox",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "forward-to-inbox",
        "id": "eds-social-forward-to-inbox",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Social/forward-to-inbox\">\n<path id=\"Icon\" d=\"M14.6667 25.3333H6C4.89543 25.3333 4 24.4379 4 23.3333V8.66666C4 7.5621 4.89543 6.66667 6 6.66667H26C27.1046 6.66667 28 7.5621 28 8.66667V17.3333M29.3333 25.3333H20M26.6667 28L29.3333 25.3333L26.6667 22.6667M4 10.6667L14.5208 17.6805C15.4165 18.2777 16.5835 18.2777 17.4792 17.6805L28 10.6667\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4073",
        "figmaName": "Social/@",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "@",
        "id": "eds-social-at-",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Social/@\">\n<path id=\"Icon\" d=\"M21.3333 16C21.3333 18.9455 18.9455 21.3333 16 21.3333C13.0545 21.3333 10.6667 18.9455 10.6667 16C10.6667 13.0545 13.0545 10.6667 16 10.6667C18.9455 10.6667 21.3333 13.0545 21.3333 16ZM21.3333 16V18.3333C21.3333 19.9902 22.6765 21.3333 24.3333 21.3333H25C26.6569 21.3333 28 19.9902 28 18.3333V16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28H21.3333\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4085",
        "figmaName": "Social/star",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "star",
        "id": "eds-social-star",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Social/star\">\n<path id=\"Icon\" d=\"M19.7082 11.5821L16.9233 4.88641C16.5817 4.06512 15.4182 4.06512 15.0767 4.88641L12.2918 11.5821L5.06324 12.1616C4.17659 12.2327 3.81706 13.3392 4.4926 13.9178L9.99997 18.6355L8.31738 25.6893C8.11099 26.5545 9.05224 27.2384 9.81134 26.7747L16 22.9948L22.1886 26.7747C22.9477 27.2384 23.889 26.5545 23.6826 25.6893L22 18.6355L27.5074 13.9178C28.1829 13.3392 27.8234 12.2327 26.9367 12.1616L19.7082 11.5821Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4083",
        "figmaName": "Social/star-circle",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "star-circle",
        "id": "eds-social-star-circle",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Social/star-circle\">\n<path id=\"Icon\" d=\"M29.3333 16C29.3333 23.3638 23.3638 29.3333 16 29.3333C8.6362 29.3333 2.66667 23.3638 2.66667 16C2.66667 8.6362 8.6362 2.66667 16 2.66667C23.3638 2.66667 29.3333 8.6362 29.3333 16ZM16 8L18.2249 13.1559L24 13.6022L19.6 17.2349L20.9443 22.6667L16 19.7559L11.0557 22.6667L12.4 17.2349L8 13.6022L13.7751 13.1559L16 8Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4082",
        "figmaName": "Social/thumb-up",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "thumb-up",
        "id": "eds-social-thumb-up",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Social/thumb-up\">\n<path id=\"Icon\" d=\"M10.6666 26.6667H23.3586C24.1532 26.6667 24.8724 26.1963 25.1909 25.4683L29.1656 16.3833C29.2762 16.1305 29.3333 15.8576 29.3333 15.5816V14C29.3333 12.8954 28.4379 12 27.3333 12H18L19.6088 6.10093C19.8362 5.26697 19.4434 4.3884 18.6703 4.00182C17.8938 3.6136 16.9512 3.83007 16.4219 4.51813L11.0814 11.4608C10.8124 11.8104 10.6666 12.2392 10.6666 12.6802V13.3333M10.6666 26.6667V13.3333M10.6666 26.6667H2.66667V13.3333H10.6666\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4091",
        "figmaName": "Social/thumb-down",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "thumb-down",
        "id": "eds-social-thumb-down",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Social/thumb-down\">\n<path id=\"Icon\" d=\"M10.6666 5.33333H23.3586C24.1532 5.33333 24.8724 5.80372 25.1909 6.5317L29.1656 15.6167C29.2762 15.8695 29.3333 16.1424 29.3333 16.4184V18C29.3333 19.1046 28.4379 20 27.3333 20H18L19.6088 25.8991C19.8362 26.733 19.4434 27.6116 18.6703 27.9982C17.8938 28.3864 16.9512 28.1699 16.4219 27.4819L11.0814 20.5392C10.8124 20.1896 10.6666 19.7608 10.6666 19.3198V18.6667M10.6666 5.33333H2.66667V18.6667H10.6666M10.6666 5.33333V18.6667\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4080",
        "figmaName": "Social/notifications",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "notifications",
        "id": "eds-social-notifications",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Social/notifications\">\n<path id=\"Icon\" d=\"M16.0001 7.33333C19.682 7.33333 22.6667 10.3181 22.6667 14V17.2396C22.6667 17.7294 22.8465 18.2022 23.1719 18.5683L25.7809 21.5035C26.6408 22.4708 25.9541 24 24.6598 24H7.34033C6.04606 24 5.35935 22.4708 6.21922 21.5035L8.82821 18.5683C9.15363 18.2022 9.33338 17.7294 9.33339 17.2396L9.33342 14C9.33342 10.3181 12.3182 7.33333 16.0001 7.33333ZM16.0001 7.33333V4M14.6667 28H17.3333\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4077",
        "figmaName": "Social/notifications-active",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "notifications-active",
        "id": "eds-social-notifications-active",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Social/notifications-active\">\n<path id=\"Icon\" d=\"M16.0001 7.33333C19.682 7.33333 22.6667 10.3181 22.6667 14V17.2396C22.6667 17.7294 22.8465 18.2022 23.1719 18.5683L25.7809 21.5035C26.6408 22.4708 25.9541 24 24.6598 24H7.34033C6.04606 24 5.35935 22.4708 6.21922 21.5035L8.82821 18.5683C9.15363 18.2022 9.33338 17.7294 9.33339 17.2396L9.33341 14C9.33341 10.3181 12.3182 7.33333 16.0001 7.33333ZM16.0001 7.33333V4M4 14.6668C4 10.5062 6.11737 6.8402 9.33333 4.6875M28 14.6668C28 10.5062 25.8826 6.8402 22.6667 4.6875M14.6667 28H17.3333\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4079",
        "figmaName": "Social/notifications-off",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "notifications-off",
        "id": "eds-social-notifications-off",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Social/notifications-off\">\n<path id=\"Icon\" d=\"M24.6563 24H7.34033C6.04606 24 5.35935 22.4708 6.21922 21.5035L8.82821 18.5683C9.15363 18.2022 9.33338 17.7294 9.33339 17.2396L9.33342 14C9.33342 12.503 9.82685 11.1212 10.66 10.0084M14.6667 27.9999H17.3333M22.6667 14.6666L22.6667 13.9999C22.6667 10.318 19.682 7.33327 16.0001 7.33327M16.0001 7.33327C15.7102 7.33327 15.4247 7.35177 15.1446 7.38765M16.0001 7.33327L16.0001 3.99994M26.6667 25.9999L7.33333 6.66661\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4088",
        "figmaName": "Social/notifications-paused",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "notifications-paused",
        "id": "eds-social-notifications-paused",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Social/notifications-paused\">\n<path id=\"Icon\" d=\"M16.0001 7.33333C19.682 7.33333 22.6667 10.3181 22.6667 14V17.2396C22.6667 17.7294 22.8465 18.2022 23.1719 18.5683L25.7809 21.5035C26.6408 22.4708 25.9541 24 24.6598 24H7.34033C6.04606 24 5.35935 22.4708 6.21922 21.5035L8.82821 18.5683C9.15363 18.2022 9.33338 17.7294 9.33339 17.2396L9.33342 14C9.33342 10.3181 12.3182 7.33333 16.0001 7.33333ZM16.0001 7.33333V4M13.3333 13H18.6667L13.3333 19H18.6667M14.6667 28H17.3333\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4076",
        "figmaName": "Social/megaphone",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "megaphone",
        "id": "eds-social-megaphone",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Social/megaphone\">\n<path id=\"Icon\" d=\"M8 24V18.6667M8 18.6667H10.6667L17.3333 22.6667V9.33333L10.6667 13.3333H6C4.89543 13.3333 4 14.2288 4 15.3333V16.6667C4 17.7712 4.89543 18.6667 6 18.6667H8ZM22.6667 9.33333L25.3333 6.66667M22.6667 22.6667L25.3333 25.3333M25.3333 16H28\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4081",
        "figmaName": "Social/send",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "send",
        "id": "eds-social-send",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Social/send\">\n<path id=\"Icon\" d=\"M28 4L4 13.3333L13.3333 18.6667L18.6667 28L28 4ZM13.3333 18.6667L28 4\" stroke-width=\"1.4\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4075",
        "figmaName": "Social/chat",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "chat",
        "id": "eds-social-chat",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Social/chat\">\n<path id=\"Icon\" d=\"M16 14.6667H16.0133M10.6667 14.6667H10.68M21.3333 14.6667H21.3467M16.3861 23.9979C24.1287 23.9125 28 21.2252 28 14.6667C28 8 24 5.33333 16 5.33333C8 5.33333 4 8 4 14.6667C4 18.7695 5.51497 21.3573 8.5449 22.7409L6.66667 28L16.3861 23.9979Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4074",
        "figmaName": "Social/chat-empty",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "chat-empty",
        "id": "eds-social-chat-empty",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Social/chat-empty\">\n<path id=\"Icon\" d=\"M16.3861 23.9979C24.1287 23.9125 28 21.2252 28 14.6667C28 8 24 5.33333 16 5.33333C8 5.33333 4 8 4 14.6667C4 18.7695 5.51497 21.3573 8.5449 22.7409L6.66667 28L16.3861 23.9979Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4071",
        "figmaName": "Social/add-comment",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "add-comment",
        "id": "eds-social-add-comment",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Social/add-comment\">\n<path id=\"Icon\" d=\"M16 10.6667V18.6667M20 14.6667H12M16.3861 23.9979C24.1287 23.9125 28 21.2252 28 14.6667C28 8 24 5.33333 16 5.33333C8 5.33333 4 8 4 14.6667C4 18.7695 5.51497 21.3573 8.5449 22.7409L6.66667 28L16.3861 23.9979Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4070",
        "figmaName": "Social/facebook",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "facebook",
        "id": "eds-social-facebook",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Social/facebook\">\n<path id=\"Icon\" d=\"M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28ZM16 28V17.3335M16 17.3335V13.3335C16 10.6987 17.805 9.38162 20.6667 9.57949M16 17.3335L20 17.3335M16 17.3335H12\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4069",
        "figmaName": "Social/linkedin",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "linkedin",
        "id": "eds-social-linkedin",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Social/linkedin\">\n<path id=\"Icon\" d=\"M10.6667 21.3333V14.6667M16 21.3333V18.6667M16 18.6667V14.6667M16 18.6667C16 16.6667 16.6667 14.6667 18.6667 14.6667C20.6667 14.6667 21.3333 16.6667 21.3333 18.6667V21.3333M10.6533 10.6667H10.6667M7.33333 5.33333H24.6667C25.7712 5.33333 26.6667 6.22876 26.6667 7.33333V24.6667C26.6667 25.7712 25.7712 26.6667 24.6667 26.6667H7.33334C6.22877 26.6667 5.33333 25.7712 5.33333 24.6667V7.33334C5.33333 6.22877 6.22876 5.33333 7.33333 5.33333Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4068",
        "figmaName": "Social/twitter",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "twitter",
        "id": "eds-social-twitter",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Social/twitter\">\n<path id=\"Icon\" d=\"M10.1824 21.6509C3.51585 18.3173 2.00012 10.6664 4.66667 6C8.00012 9.33303 12.0001 11.9995 16.0001 11.3331C15.7245 8.45739 16.9653 6.00043 19.3335 5.33349C21.3627 4.76201 23.3334 4.66648 25.3334 6.6669H30.0001L26.6668 10.6665C26.889 13.5554 25.8871 19.7914 21.3334 23.3332C15.3335 27.9998 9.33345 27.3332 3.33345 24.6664C6.00012 23.9998 8.70552 22.6667 10.1824 21.6509Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4067",
        "figmaName": "Social/pinterest",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "pinterest",
        "id": "eds-social-pinterest",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Social/pinterest\">\n<path id=\"Icon\" d=\"M9.93604 17.5724C8.45879 14.5576 10.4692 8.68262 17.2319 9.64309C24.6806 10.701 23.34 22.2794 17.1295 21.8272C15.1643 21.6841 14.4212 20.0555 14.2272 18.3918M14.2272 18.3918C14.0801 17.1304 14.2486 15.8488 14.4394 15.179C14.7651 14.036 15.3048 14.1914 14.9104 15.7031C14.7184 16.439 14.4842 17.3625 14.2272 18.3918ZM14.2272 18.3918C13.5413 21.1383 12.6932 24.6381 12.0528 27.3357M12.0528 27.3357C13.289 27.7661 14.6172 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 21.2446 7.36447 25.7034 12.0528 27.3357Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4089",
        "figmaName": "Social/rss-feed",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "rss-feed",
        "id": "eds-social-rss-feed",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Social/rss-feed\">\n<path id=\"Icon\" d=\"M6.66667 14.6667C12.5577 14.6667 17.3333 19.4423 17.3333 25.3333M6.66667 6.66667C16.976 6.66667 25.3333 15.024 25.3333 25.3333M9.33333 24C9.33333 24.7364 8.73638 25.3333 8 25.3333C7.26362 25.3333 6.66667 24.7364 6.66667 24C6.66667 23.2636 7.26362 22.6667 8 22.6667C8.73638 22.6667 9.33333 23.2636 9.33333 24Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4066",
        "figmaName": "Social/share-1",
        "category": "Social",
        "sectionLabel": "Social + communication",
        "slug": "share-1",
        "id": "eds-social-share-1",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Social/share-1\">\n<path id=\"Icon\" d=\"M19.6589 21.8948C19.4502 22.3303 19.3333 22.8182 19.3333 23.3333C19.3333 25.1743 20.8257 26.6667 22.6667 26.6667C24.5076 26.6667 26 25.1743 26 23.3333C26 21.4924 24.5076 20 22.6667 20C21.3409 20 20.1959 20.774 19.6589 21.8948ZM19.6589 21.8948L10.3411 17.4385M19.6589 10.1052C20.1959 11.226 21.3409 12 22.6667 12C24.5076 12 26 10.5076 26 8.66667C26 6.82572 24.5076 5.33333 22.6667 5.33333C20.8257 5.33333 19.3333 6.82572 19.3333 8.66667C19.3333 9.18182 19.4502 9.66968 19.6589 10.1052ZM19.6589 10.1052L10.3411 14.5615M10.3411 17.4385C10.5498 17.003 10.6667 16.5152 10.6667 16C10.6667 15.4848 10.5498 14.997 10.3411 14.5615C9.80414 13.4407 8.65913 12.6667 7.33333 12.6667C5.49238 12.6667 4 14.1591 4 16C4 17.8409 5.49238 19.3333 7.33333 19.3333C8.65913 19.3333 9.80414 18.5593 10.3411 17.4385Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      }
    ],
    "kind": "eds"
  },
  {
    "id": "payment",
    "label": "Payment",
    "icons": [
      {
        "nodeId": "8413:4188",
        "figmaName": "Payment/calculate-2",
        "category": "Payment",
        "sectionLabel": "Payment",
        "slug": "calculate-2",
        "id": "eds-payment-calculate-2",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Payment/calculate-2\">\n<path id=\"Icon\" d=\"M8 21.3333H10.6667M10.6667 21.3333H13.3333M10.6667 21.3333V24M10.6667 21.3333V18.6667M19.3333 8.66654L21.3333 10.6666M21.3333 10.6666L23.3333 12.6665M21.3333 10.6666L19.3334 12.6665M21.3333 10.6666L23.3334 8.66654M8 10.6667H13.3333M18.6667 20H24M18.6667 24H24\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4191",
        "figmaName": "Payment/calculate-1",
        "category": "Payment",
        "sectionLabel": "Payment",
        "slug": "calculate-1",
        "id": "eds-payment-calculate-1",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Payment/calculate-1\">\n<path id=\"Icon\" d=\"M9.33333 11.3333H14M18.3333 18.6667H23M18.3333 22H23M9 20.3333H11.6667M11.6667 20.3333H14.3333M11.6667 20.3333V23M11.6667 20.3333V17.6667M18.8001 9.33333L20.6859 11.2191M20.6859 11.2191L22.5714 13.1046M20.6859 11.2191L18.8001 13.1048M20.6859 11.2191L22.5714 9.33358M24.6667 26.6667H7.33334C6.22877 26.6667 5.33333 25.7712 5.33333 24.6667V7.33333C5.33333 6.22876 6.22876 5.33333 7.33333 5.33333H24.6667C25.7712 5.33333 26.6667 6.22876 26.6667 7.33333V24.6667C26.6667 25.7712 25.7712 26.6667 24.6667 26.6667Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4194",
        "figmaName": "Payment/euro",
        "category": "Payment",
        "sectionLabel": "Payment",
        "slug": "euro",
        "id": "eds-payment-euro",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Payment/euro\">\n<path id=\"Icon\" d=\"M18.6667 13.3333H9.49227M9.49227 13.3333H5.33333M9.49227 13.3333C10.2268 7.66097 13.5071 5.33333 19.3333 5.33333C22.5573 5.33333 25.0018 6.04608 26.6667 7.64393M9.49227 13.3333C9.38631 14.1516 9.33333 15.0395 9.33333 16C9.33333 16.9605 9.38631 17.8484 9.49227 18.6667M18.6667 18.6667H9.49227M9.49227 18.6667H5.33333M9.49227 18.6667C10.2268 24.339 13.5071 26.6667 19.3333 26.6667C22.5573 26.6667 25.0018 25.9539 26.6667 24.3561\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4197",
        "figmaName": "Payment/percent",
        "category": "Payment",
        "sectionLabel": "Payment",
        "slug": "percent",
        "id": "eds-payment-percent",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Payment/percent\">\n<path id=\"Icon\" d=\"M25.3333 6.66667L6.66667 25.3333M23.3333 26.6667C25.5556 26.6667 26.6667 25.5238 26.6667 22.6667C26.6667 19.8095 25.5556 18.6667 23.3333 18.6667C21.1111 18.6667 20 19.8095 20 22.6667C20 25.5238 21.1111 26.6667 23.3333 26.6667ZM8.66667 13.3333C10.8889 13.3333 12 12.1905 12 9.33333C12 6.47619 10.8889 5.33333 8.66667 5.33333C6.44444 5.33333 5.33333 6.47619 5.33333 9.33333C5.33333 12.1905 6.44444 13.3333 8.66667 13.3333Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4200",
        "figmaName": "Payment/credit-card-percent",
        "category": "Payment",
        "sectionLabel": "Payment",
        "slug": "credit-card-percent",
        "id": "eds-payment-credit-card-percent",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Payment/credit-card-percent\">\n<path id=\"Icon\" d=\"M16 8H6C4.89543 8 4 8.89543 4 10V18.6667M28 4L21.3333 12M20 4L20 5.33333M29.3333 10.6667L29.3333 12M4 18.6667V23.3333C4 24.4379 4.89543 25.3333 6 25.3333H26C27.1046 25.3333 28 24.4379 28 23.3333V18.6667H4Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4203",
        "figmaName": "Payment/credit-card-check",
        "category": "Payment",
        "sectionLabel": "Payment",
        "slug": "credit-card-check",
        "id": "eds-payment-credit-card-check",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Payment/credit-card-check\">\n<path id=\"Icon\" d=\"M16 8H6C4.89543 8 4 8.89543 4 10V18.6667M4 18.6667V23.3333C4 24.4379 4.89543 25.3333 6 25.3333H26C27.1046 25.3333 28 24.4379 28 23.3333V18.6667M4 18.6667H28M28 18.6667V16M30.6667 5.33333L24 12L21.3333 9.33333\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4164",
        "figmaName": "Payment/wallet-2",
        "category": "Payment",
        "sectionLabel": "Payment",
        "slug": "wallet-2",
        "id": "eds-payment-wallet-2",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Payment/wallet-2\">\n<path id=\"Icon\" d=\"M25.3333 10.6667H26C27.1046 10.6667 28 11.5621 28 12.6667V24.6667C28 25.7712 27.1046 26.6667 26 26.6667H7C5.34315 26.6667 4 25.3235 4 23.6667V8.33334C4 6.67648 5.34315 5.33333 7 5.33333H23.3333C24.4379 5.33333 25.3333 6.22876 25.3333 7.33333V10.6667ZM25.3333 10.6667H9.33333M22.6667 18.6667H21.3333\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4209",
        "figmaName": "Payment/wallet-1",
        "category": "Payment",
        "sectionLabel": "Payment",
        "slug": "wallet-1",
        "id": "eds-payment-wallet-1",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Payment/wallet-1\">\n<path id=\"Icon\" d=\"M4 8.66667V23.6667C4 25.3235 5.34315 26.6667 7 26.6667H27C27.5523 26.6667 28 26.219 28 25.6667V21.3333M4 8.66667V8V7.33333C4 6.22877 4.89543 5.33333 6 5.33333H24.3333C24.8856 5.33333 25.3333 5.78105 25.3333 6.33333V10.6667M4 8.66667C4 9.77124 4.89543 10.6667 6 10.6667H25.3333M25.3333 10.6667H27C27.5523 10.6667 28 11.1144 28 11.6667V16M28 16H23.3333C22.2288 16 21.3333 16.8954 21.3333 18V19.3333C21.3333 20.4379 22.2288 21.3333 23.3333 21.3333H28M28 16V21.3333\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4221",
        "figmaName": "Payment/credit-card",
        "category": "Payment",
        "sectionLabel": "Payment",
        "slug": "credit-card",
        "id": "eds-payment-credit-card",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Payment/credit-card\">\n<path id=\"Icon\" d=\"M28 18.6667V10C28 8.89543 27.1046 8 26 8H6C4.89543 8 4 8.89543 4 10V18.6667M28 18.6667V23.3333C28 24.4379 27.1046 25.3333 26 25.3333H6C4.89543 25.3333 4 24.4379 4 23.3333V18.6667M28 18.6667H4\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4212",
        "figmaName": "Payment/credit-card-secure",
        "category": "Payment",
        "sectionLabel": "Payment",
        "slug": "credit-card-secure",
        "id": "eds-payment-credit-card-secure",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Payment/credit-card-secure\">\n<path id=\"Icon\" d=\"M4 18.6667V23.3333C4 24.4379 4.89543 25.3333 6 25.3333H26C27.1046 25.3333 28 24.4379 28 23.3333V18.6667H4ZM4 18.6667V10C4 8.89543 4.89543 8 6 8H16M22.6667 8H21.3333V13.3333H29.3333V8H28M22.6667 8V5.33333C22.6667 3.86057 23.8606 2.66667 25.3333 2.66667M22.6667 8H28M28 8V5.33333C28 3.86057 26.8061 2.66667 25.3333 2.66667M25.3333 2.66667L-nan -nanL-nan -nanL25.3333 2.66667Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4224",
        "figmaName": "Payment/bank",
        "category": "Payment",
        "sectionLabel": "Payment",
        "slug": "bank",
        "id": "eds-payment-bank",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Payment/bank\">\n<path id=\"Icon\" d=\"M4 26.6667H28M16 17.3333V26.6667M24 17.3333V26.6667M8 17.3333V26.6667M16.4472 5.55694L28.59 11.6283C29.4395 12.0531 29.1372 13.3333 28.1875 13.3333H3.81246C2.86276 13.3333 2.56053 12.0531 3.40997 11.6283L15.5528 5.55694C15.8343 5.41618 16.1657 5.41618 16.4472 5.55694Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4176",
        "figmaName": "Payment/coins",
        "category": "Payment",
        "sectionLabel": "Payment",
        "slug": "coins",
        "id": "eds-payment-coins",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Payment/coins\">\n<path id=\"Icon\" d=\"M9.33333 7.05317C5.47801 8.20057 2.66667 11.772 2.66667 16C2.66667 20.228 5.47801 23.7994 9.33333 24.9468M29.3333 16C29.3333 21.1547 25.1547 25.3333 20 25.3333C14.8453 25.3333 10.6667 21.1547 10.6667 16C10.6667 10.8453 14.8453 6.66667 20 6.66667C25.1547 6.66667 29.3333 10.8453 29.3333 16Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4206",
        "figmaName": "Payment/bitcoin-2",
        "category": "Payment",
        "sectionLabel": "Payment",
        "slug": "bitcoin-2",
        "id": "eds-payment-bitcoin-2",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Payment/bitcoin-2\">\n<path id=\"Icon\" d=\"M16 10.6667V8M16 24V21.3333M12 16H17.3333C18.8061 16 20 14.8061 20 13.3333C20 11.8606 18.8061 10.6667 17.3333 10.6667H12V16ZM12 16H18.6667C20.1394 16 21.3333 17.1939 21.3333 18.6667C21.3333 20.1394 20.1394 21.3333 18.6667 21.3333H12V16ZM28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4167",
        "figmaName": "Payment/dollar-2",
        "category": "Payment",
        "sectionLabel": "Payment",
        "slug": "dollar-2",
        "id": "eds-payment-dollar-2",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"17.4\" height=\"25.4\" viewBox=\"0 0 17.4 25.4\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path id=\"Icon\" d=\"M15.3667 3.36667H8.7M8.7 3.36667H4.7C2.49086 3.36667 0.7 5.15753 0.7 7.36667V8.7C0.7 10.9091 2.49086 12.7 4.7 12.7H8.7M8.7 3.36667V0.7M8.7 3.36667V12.7M8.7 12.7H12.7C14.9091 12.7 16.7 14.4909 16.7 16.7V18.0333C16.7 20.2425 14.9091 22.0333 12.7 22.0333H8.7M8.7 12.7V22.0333M8.7 22.0333H0.7M8.7 22.0333V24.7\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</svg>"
      },
      {
        "nodeId": "8413:4170",
        "figmaName": "Payment/bitcoin-1",
        "category": "Payment",
        "sectionLabel": "Payment",
        "slug": "bitcoin-1",
        "id": "eds-payment-bitcoin-1",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Payment/bitcoin-1\">\n<path id=\"Icon\" d=\"M13.3333 8V5.33333M13.3333 8H12M13.3333 8H18.6667M18.6667 8V5.33333M18.6667 8C20.8758 8 22.6667 9.79086 22.6667 12C22.6667 14.2091 20.8758 16 18.6667 16M13.3333 26.6667V24M13.3333 24H12M13.3333 24H18.6667M18.6667 26.6667V24M18.6667 24H20C22.2091 24 24 22.2091 24 20C24 17.7909 22.2091 16 20 16H18.6667M9.33333 8H12M12 8V16M18.6667 16H12M9.33333 24H12M12 24L12 16\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4173",
        "figmaName": "Payment/Rmb",
        "category": "Payment",
        "sectionLabel": "Payment",
        "slug": "Rmb",
        "id": "eds-payment-rmb",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Payment/Rmb\">\n<path id=\"Icon\" d=\"M22.6667 16L16 16M16 16L9.33333 16M16 16L8.66667 5.33333M16 16L23.3333 5.33333M16 16V21.3333M22.6667 21.3333H16M16 21.3333H9.33333M16 21.3333V26.6667\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4185",
        "figmaName": "Payment/dollar-1",
        "category": "Payment",
        "sectionLabel": "Payment",
        "slug": "dollar-1",
        "id": "eds-payment-dollar-1",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Payment/dollar-1\">\n<path id=\"Icon\" d=\"M16 4V6.58835M16 6.58835V15.106M16 6.58835C17.9946 6.67734 19.9907 7.50715 20.9053 8.84585M16 6.58835C13.2956 6.46769 10.5939 7.70886 10.5939 10.8899C10.5939 13.5307 13.2743 14.3063 16 15.106M16 15.106V24.5416M16 15.106C18.9793 15.9802 22.0127 16.8831 21.6586 20.2824C21.361 23.1395 18.7715 24.5132 16 24.5416M16 24.5416V28M16 24.5416C13.5067 24.5672 10.8662 23.5039 9.61461 21.4522\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4179",
        "figmaName": "Payment/contactless-2",
        "category": "Payment",
        "sectionLabel": "Payment",
        "slug": "contactless-2",
        "id": "eds-payment-contactless-2",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Payment/contactless-2\">\n<path id=\"Icon\" d=\"M10.3662 13.3196C10.5628 14.1814 10.6667 15.0786 10.6667 16.0001C10.6667 16.9215 10.5628 17.8187 10.3662 18.6806M14.3333 11.2271C14.7666 12.7433 14.9987 14.3443 14.9987 15.9996C14.9987 17.6549 14.7666 19.256 14.3333 20.7721M18.6653 9.14574C19.3505 11.3081 19.7201 13.6108 19.7201 15.9999C19.7201 18.3889 19.3505 20.6917 18.6653 22.854M28 15.9999C28 22.6273 22.6274 27.9999 16 27.9999C9.37259 27.9999 4.00001 22.6273 4.00001 15.9999C4.00001 9.37249 9.37259 3.99991 16 3.99991C22.6274 3.99991 28 9.37249 28 15.9999Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4215",
        "figmaName": "Payment/contactless-1",
        "category": "Payment",
        "sectionLabel": "Payment",
        "slug": "contactless-1",
        "id": "eds-payment-contactless-1",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Payment/contactless-1\">\n<path id=\"Icon\" d=\"M21.7334 26.0003C23.2001 22.9336 24.0001 19.6003 24.0001 16.0003C24.0001 12.4003 23.2001 8.93363 21.7334 6.00029M16.9333 23.7338C18 21.3338 18.6666 18.6671 18.6666 16.0004C18.6666 13.3338 18 10.5338 16.9333 8.13376M12.1335 21.4668C12.9335 19.7335 13.3335 17.8668 13.3335 16.0002C13.3335 14.1335 12.9335 12.1335 12.1335 10.5335M7.33335 19.0671C7.73335 18.1338 8.00002 17.0671 8.00002 16.0004C8.00002 14.9338 7.73335 13.7338 7.33335 12.8004\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4218",
        "figmaName": "Payment/shopping-cart",
        "category": "Payment",
        "sectionLabel": "Payment",
        "slug": "shopping-cart",
        "id": "eds-payment-shopping-cart",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Payment/shopping-cart\">\n<path id=\"Icon\" d=\"M6 6.66667H24.9435C25.7113 6.66667 26.1927 7.49615 25.8117 8.16281L21.9092 14.9923C21.5531 15.6154 20.8904 16 20.1727 16H10.6667M10.6667 16L8.28958 19.8033C7.8733 20.4694 8.35215 21.3333 9.13758 21.3333H24M10.6667 16L5.21945 5.10557C4.88067 4.428 4.18814 4 3.4306 4H2.66667M10.6667 26.6667C10.6667 27.403 10.0697 28 9.33333 28C8.59695 28 8 27.403 8 26.6667C8 25.9303 8.59695 25.3333 9.33333 25.3333C10.0697 25.3333 10.6667 25.9303 10.6667 26.6667ZM24 26.6667C24 27.403 23.403 28 22.6667 28C21.9303 28 21.3333 27.403 21.3333 26.6667C21.3333 25.9303 21.9303 25.3333 22.6667 25.3333C23.403 25.3333 24 25.9303 24 26.6667Z\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:4182",
        "figmaName": "Payment/shopping-bag",
        "category": "Payment",
        "sectionLabel": "Payment",
        "slug": "shopping-bag",
        "id": "eds-payment-shopping-bag",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Payment/shopping-bag\">\n<path id=\"Icon\" d=\"M12 9.33333H8.92013C8.40004 9.33333 7.96678 9.732 7.92359 10.2503L6.75692 24.2503C6.70834 24.8333 7.16842 25.3333 7.75346 25.3333H24.2465C24.8316 25.3333 25.2917 24.8333 25.2431 24.2503L24.0764 10.2503C24.0332 9.732 23.6 9.33333 23.0799 9.33333H20M12 9.33333V6C12 4.89543 12.8954 4 14 4H18C19.1046 4 20 4.89543 20 6V9.33333M12 9.33333H20\" stroke-width=\"1.4\" stroke-linejoin=\"round\" stroke=\"black\"/>\n</g>\n</svg>"
      }
    ],
    "kind": "eds"
  },
  {
    "id": "document-(file-type)",
    "label": "Document (file type)",
    "icons": [
      {
        "nodeId": "8413:5268",
        "figmaName": "Document/TXT",
        "category": "Document",
        "sectionLabel": "Document (file type)",
        "slug": "TXT",
        "id": "eds-document-txt",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Icon/Document/TXT\">\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 7\" d=\"M9 2H27L35 10V34C35 36.2091 33.2091 38 31 38H9C6.79086 38 5 36.2091 5 34V6C5 3.79086 6.79086 2 9 2Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6397FF\"/>\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 8\" d=\"M27 2L35 10H29C27.8954 10 27 9.10457 27 8V2Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#A8C5FF\"/>\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;\" d=\"M11.5 17H28.5C28.7761 17 29 17.2239 29 17.5V18.5C29 18.7761 28.7761 19 28.5 19H11.5C11.2239 19 11 18.7761 11 18.5V17.5C11 17.2239 11.2239 17 11.5 17Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"white\"/>\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189;\" d=\"M11.5 24H24.5C24.7761 24 25 24.2239 25 24.5V25.5C25 25.7761 24.7761 26 24.5 26H11.5C11.2239 26 11 25.7761 11 25.5V24.5C11 24.2239 11.2239 24 11.5 24Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"white\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:5278",
        "figmaName": "Document/Web",
        "category": "Document",
        "sectionLabel": "Document (file type)",
        "slug": "Web",
        "id": "eds-document-web",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"30\" height=\"36\" viewBox=\"0 0 30 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"&#231;&#188;&#150;&#231;&#187;&#132;\">\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 7\" d=\"M4 0H22L30 8V32C30 34.2091 28.2091 36 26 36H4C1.79086 36 0 34.2091 0 32V4C0 1.79086 1.79086 0 4 0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6397FF\"/>\n<g id=\"&#230;&#181;&#143;&#232;&#167;&#136;&#229;&#153;&#168;\">\n<path id=\"&#229;&#189;&#162;&#231;&#138;&#182;\" d=\"M15.9939 12.011C19.945 10.1915 22.3884 10.9713 22.3884 13.2068C22.3884 14.0386 22.0245 15.1303 21.7125 15.8581C22.4923 17.2618 22.7523 18.8734 22.5963 20.1731H12.5627C12.5627 23.2404 16.9297 24.3321 18.5413 21.6288H22.2324C21.2446 24.4361 18.5933 26.0997 15.63 26.0997C14.5382 26.0997 13.4465 26.0997 12.5107 25.6318C9.80734 26.9835 7 27.3474 7 24.3321C7 22.9285 7.72783 21.0569 8.29969 19.9132C9.39144 17.9896 10.7951 16.1181 12.4587 14.6624C11.159 15.2343 9.70337 16.6899 8.76759 17.7297C9.54739 14.2985 12.7187 11.8031 15.9939 12.011ZM8.97555 21.5768C9.49543 23.1364 10.5872 24.4881 12.0428 25.3199C9.33947 26.8276 6.74008 26.2037 8.97555 21.5768ZM12.5107 18.2496C12.5627 16.586 14.0183 15.3383 15.682 15.3383C17.2936 15.3383 18.8012 16.534 18.8532 18.2496H12.5107ZM21.9725 13.4667C21.9725 12.5309 21.2446 11.8551 20.3089 11.8551C19.5895 11.8551 18.8193 12.2106 18.149 12.52L18.1254 12.5309C19.529 13.1028 20.7248 14.2985 21.5046 15.5462C21.7645 14.9744 21.9725 14.0906 21.9725 13.4667Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"white\"/>\n</g>\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 8\" d=\"M22 0L30 8H24C22.8954 8 22 7.10457 22 6V0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#A8C5FF\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:5275",
        "figmaName": "Document/link",
        "category": "Document",
        "sectionLabel": "Document (file type)",
        "slug": "link",
        "id": "eds-document-link",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"30\" height=\"36\" viewBox=\"0 0 30 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"&#231;&#188;&#150;&#231;&#187;&#132;\">\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 7\" d=\"M4 0H22L30 8V32C30 34.2091 28.2091 36 26 36H4C1.79086 36 0 34.2091 0 32V4C0 1.79086 1.79086 0 4 0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6397FF\"/>\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 8\" d=\"M22 0L30 8H24C22.8954 8 22 7.10457 22 6V0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#A8C5FF\"/>\n<path id=\"Union\" d=\"M17.0624 19.504C17.5918 19.4651 18.0692 19.7458 18.2909 20.1797C18.294 20.1857 18.2937 20.1894 18.2967 20.1924C18.3059 20.2103 18.312 20.2283 18.3212 20.2462C19.1153 21.9283 18.8076 23.9784 17.3856 25.3643L13.9901 28.6661C12.1615 30.4442 9.19953 30.4442 7.37096 28.6661C5.54288 26.888 5.54274 24.0085 7.37096 22.2305L8.65807 20.9795L8.661 20.9825C8.87026 20.761 9.15974 20.611 9.49206 20.587C10.1847 20.5331 10.7911 21.0394 10.8465 21.7129C10.8773 22.114 10.7083 22.488 10.4159 22.7335L10.4257 22.7422L9.16296 23.9698C8.32262 24.787 8.32257 26.1165 9.16296 26.9337C10.0033 27.7507 11.3704 27.7507 12.2108 26.9337L15.5965 23.6348C16.2429 23.0033 16.3975 22.0662 16.0467 21.2969C15.9698 21.1532 15.9205 20.994 15.9051 20.8204C15.8499 20.147 16.3698 19.5578 17.0624 19.504ZM16.0116 13.4288C17.8404 11.5236 20.8021 11.5234 22.6307 13.4288C24.4564 15.3312 24.4564 18.4216 22.6307 20.3272L21.3436 21.668L21.3407 21.6641C21.1314 21.9014 20.842 22.0622 20.5096 22.0879C19.8169 22.1457 19.2096 21.6037 19.1542 20.8819C19.1234 20.4521 19.2934 20.0512 19.5858 19.7881L19.576 19.7784L20.8387 18.4629C21.6792 17.5872 21.679 16.163 20.8387 15.2872C19.9982 14.4113 18.6314 14.4113 17.7909 15.2872L14.4012 18.8194C13.7548 19.4963 13.6011 20.4998 13.952 21.3243C14.029 21.4783 14.0782 21.649 14.0936 21.835C14.1488 22.5567 13.628 23.1884 12.9354 23.2462C12.406 23.2878 11.9286 22.9865 11.7069 22.5215C11.7038 22.5151 11.7041 22.5111 11.701 22.5079C11.6919 22.4887 11.6858 22.4694 11.6766 22.4503C10.8855 20.6474 11.1929 18.45 12.6151 16.9678L16.0116 13.4288Z\" fill=\"white\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:5271",
        "figmaName": "Document/Excel",
        "category": "Document",
        "sectionLabel": "Document (file type)",
        "slug": "Excel",
        "id": "eds-document-excel",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Icon/Document/Excel\">\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 7\" d=\"M9 2H27L35 10V34C35 36.2091 33.2091 38 31 38H9C6.79086 38 5 36.2091 5 34V6C5 3.79086 6.79086 2 9 2Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#93C55B\"/>\n<path id=\"&#232;&#183;&#175;&#229;&#190;&#132;\" d=\"M16.4164 28.2225L19.9182 22.9904C19.9919 22.8803 20.141 22.8508 20.2511 22.9245C20.2772 22.9419 20.2996 22.9644 20.3171 22.9904L23.8188 28.2225C23.8931 28.3334 24.0178 28.4 24.1512 28.4H25.8319C26.0528 28.4 26.2319 28.2209 26.2319 28C26.2319 27.9183 26.2068 27.8385 26.1602 27.7715L21.513 21.095C21.4557 21.0127 21.4557 20.9033 21.513 20.8209L25.8205 14.6284C25.9467 14.4471 25.9019 14.1978 25.7206 14.0716C25.6535 14.025 25.5738 14 25.4921 14H23.8113C23.6778 14 23.5531 14.0666 23.4788 14.1776L20.3171 18.9051C20.2434 19.0153 20.0944 19.0448 19.9842 18.9711C19.9581 18.9537 19.9356 18.9312 19.9181 18.9051L16.7564 14.1776C16.6822 14.0666 16.5575 14 16.4239 14H14.7395C14.5186 14 14.3395 14.1791 14.3395 14.4C14.3395 14.4811 14.3642 14.5604 14.4103 14.6271L18.6836 20.8216C18.7402 20.9037 18.7402 21.0122 18.6835 21.0943L14.0709 27.7727C13.9454 27.9545 13.9909 28.2036 14.1727 28.3291C14.2395 28.3753 14.3188 28.4 14.4 28.4H16.084C16.2175 28.4 16.3422 28.3334 16.4164 28.2225Z\" fill=\"white\"/>\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 8\" d=\"M27 2L35 10H29C27.8954 10 27 9.10457 27 8V2Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#C8E2A5\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:5270",
        "figmaName": "Document/CAD",
        "category": "Document",
        "sectionLabel": "Document (file type)",
        "slug": "CAD",
        "id": "eds-document-cad",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"30\" height=\"36\" viewBox=\"0 0 30 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"&#231;&#188;&#150;&#231;&#187;&#132;&#229;&#164;&#135;&#228;&#187;&#189; 2\">\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 7\" d=\"M4 0H22L30 8V32C30 34.2091 28.2091 36 26 36H4C1.79086 36 0 34.2091 0 32V4C0 1.79086 1.79086 0 4 0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#30C4F6\"/>\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;\" d=\"M9.90587 0H11.2695V36H9.90587V0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#C8F1FF\"/>\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;_2\" d=\"M0 21.6364H30V23H0V21.6364Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#C8F1FF\"/>\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;_3\" d=\"M8.6786 18.9091H12.6786C13.507 18.9091 14.1786 19.5807 14.1786 20.4091V24.4091C14.1786 25.2375 13.507 25.9091 12.6786 25.9091H8.6786C7.85017 25.9091 7.1786 25.2375 7.1786 24.4091V20.4091C7.1786 19.5807 7.85017 18.9091 8.6786 18.9091Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#30C4F6\"/>\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;_4\" d=\"M12.6786 18.1591C13.9212 18.1591 14.9286 19.1664 14.9286 20.4091V24.4091C14.9286 25.6517 13.9212 26.6591 12.6786 26.6591H8.6786C7.43596 26.6591 6.4286 25.6517 6.4286 24.4091V20.4091C6.4286 19.1664 7.43596 18.1591 8.6786 18.1591H12.6786ZM8.6786 19.6591C8.26439 19.6591 7.9286 19.9949 7.9286 20.4091V24.4091C7.9286 24.8233 8.26439 25.1591 8.6786 25.1591H12.6786C13.0928 25.1591 13.4286 24.8233 13.4286 24.4091V20.4091C13.4286 19.9949 13.0928 19.6591 12.6786 19.6591H8.6786Z\" fill=\"white\"/>\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;_5\" d=\"M9.90587 21.6364H11.7241V23.4545H9.90587V21.6364Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"white\"/>\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 8\" d=\"M22 0L30 8H24C22.8954 8 22 7.10457 22 6V0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#99E5FF\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:5273",
        "figmaName": "Document/API",
        "category": "Document",
        "sectionLabel": "Document (file type)",
        "slug": "API",
        "id": "eds-document-api",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"30\" height=\"36\" viewBox=\"0 0 30 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"&#231;&#188;&#150;&#231;&#187;&#132;&#229;&#164;&#135;&#228;&#187;&#189; 2\">\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 7\" d=\"M4 0H22L30 8V32C30 34.2091 28.2091 36 26 36H4C1.79086 36 0 34.2091 0 32V4C0 1.79086 1.79086 0 4 0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6397FF\"/>\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 8\" d=\"M22 0L30 8H24C22.8954 8 22 7.10457 22 6V0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#A8C5FF\"/>\n<g id=\"API\">\n<path id=\"Vector\" d=\"M23.8479 14.2727V23H22.267V14.2727H23.8479Z\" fill=\"white\"/>\n<path id=\"Vector_2\" d=\"M14.5443 23V14.2727H17.817C18.4875 14.2727 19.05 14.3977 19.5045 14.6477C19.9619 14.8977 20.3071 15.2415 20.54 15.679C20.7758 16.1136 20.8937 16.608 20.8937 17.1619C20.8937 17.7216 20.7758 18.2188 20.54 18.6534C20.3042 19.0881 19.9562 19.4304 19.496 19.6804C19.0358 19.9276 18.469 20.0511 17.7957 20.0511H15.6267V18.7514H17.5827C17.9747 18.7514 18.2957 18.6832 18.5457 18.5469C18.7957 18.4105 18.9804 18.223 19.0997 17.9844C19.2219 17.7457 19.2829 17.4716 19.2829 17.1619C19.2829 16.8523 19.2219 16.5796 19.0997 16.3438C18.9804 16.108 18.7943 15.9247 18.5415 15.794C18.2915 15.6605 17.969 15.5938 17.5741 15.5938H16.1253V23H14.5443Z\" fill=\"white\"/>\n<path id=\"Vector_3\" d=\"M6.98145 23H5.29395L8.36639 14.2727H10.3181L13.3948 23H11.7073L9.37633 16.0625H9.30815L6.98145 23ZM7.03684 19.5781H11.6391V20.848H7.03684V19.5781Z\" fill=\"white\"/>\n</g>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:5263",
        "figmaName": "Document/SQL",
        "category": "Document",
        "sectionLabel": "Document (file type)",
        "slug": "SQL",
        "id": "eds-document-sql",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"30\" height=\"36\" viewBox=\"0 0 30 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"&#231;&#188;&#150;&#231;&#187;&#132;&#229;&#164;&#135;&#228;&#187;&#189; 2\">\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 7\" d=\"M4 0H22L30 8V32C30 34.2091 28.2091 36 26 36H4C1.79086 36 0 34.2091 0 32V4C0 1.79086 1.79086 0 4 0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#FF9A57\"/>\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 8\" d=\"M22 0L30 8H24C22.8954 8 22 7.10457 22 6V0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#FFC39C\"/>\n<g id=\"SQL\">\n<path id=\"Vector\" d=\"M20.9584 23V14.2727H22.5394V21.6747H26.3831V23H20.9584Z\" fill=\"white\"/>\n<path id=\"Vector_2\" d=\"M14.9051 20.0682H16.337L17.185 21.1676L17.7901 21.8835L19.2432 23.75H17.7091L16.7205 22.4972L16.2986 21.9006L14.9051 20.0682ZM19.452 18.6364C19.452 19.5767 19.2759 20.3821 18.9236 21.0526C18.5742 21.7202 18.0969 22.2315 17.4918 22.5867C16.8895 22.9418 16.2063 23.1193 15.4421 23.1193C14.6779 23.1193 13.9932 22.9418 13.3881 22.5867C12.7858 22.2287 12.3085 21.7159 11.9563 21.0483C11.6068 20.3778 11.4321 19.5739 11.4321 18.6364C11.4321 17.696 11.6068 16.892 11.9563 16.2244C12.3085 15.554 12.7858 15.0412 13.3881 14.6861C13.9932 14.331 14.6779 14.1534 15.4421 14.1534C16.2063 14.1534 16.8895 14.331 17.4918 14.6861C18.0969 15.0412 18.5742 15.554 18.9236 16.2244C19.2759 16.892 19.452 17.696 19.452 18.6364ZM17.8625 18.6364C17.8625 17.9744 17.7588 17.4162 17.5514 16.9617C17.3469 16.5043 17.0628 16.1591 16.6992 15.9261C16.3355 15.6903 15.9165 15.5724 15.4421 15.5724C14.9676 15.5724 14.5486 15.6903 14.185 15.9261C13.8213 16.1591 13.5358 16.5043 13.3284 16.9617C13.1239 17.4162 13.0216 17.9744 13.0216 18.6364C13.0216 19.2983 13.1239 19.858 13.3284 20.3153C13.5358 20.7699 13.8213 21.1151 14.185 21.3509C14.5486 21.5838 14.9676 21.7003 15.4421 21.7003C15.9165 21.7003 16.3355 21.5838 16.6992 21.3509C17.0628 21.1151 17.3469 20.7699 17.5514 20.3153C17.7588 19.858 17.8625 19.2983 17.8625 18.6364Z\" fill=\"white\"/>\n<path id=\"Vector_3\" d=\"M8.60365 16.6719C8.56388 16.2997 8.39626 16.0099 8.10081 15.8026C7.80819 15.5952 7.42751 15.4915 6.95876 15.4915C6.62922 15.4915 6.34655 15.5412 6.11075 15.6406C5.87496 15.7401 5.69456 15.875 5.56956 16.0455C5.44456 16.2159 5.38064 16.4105 5.3778 16.6293C5.3778 16.8111 5.41899 16.9688 5.50138 17.1023C5.5866 17.2358 5.70166 17.3494 5.84655 17.4432C5.99143 17.5341 6.15194 17.6108 6.32808 17.6733C6.50422 17.7358 6.68177 17.7884 6.86075 17.831L7.67893 18.0355C8.00848 18.1122 8.32524 18.2159 8.62922 18.3466C8.93604 18.4773 9.21018 18.642 9.45166 18.8409C9.69598 19.0398 9.88916 19.2798 10.0312 19.5611C10.1733 19.8423 10.2443 20.1719 10.2443 20.5497C10.2443 21.0611 10.1136 21.5114 9.85223 21.9006C9.59087 22.2869 9.21302 22.5895 8.71871 22.8082C8.22723 23.0242 7.63206 23.1321 6.93319 23.1321C6.25422 23.1321 5.66473 23.027 5.16473 22.8168C4.66757 22.6065 4.27836 22.2997 3.99711 21.8963C3.71871 21.4929 3.56814 21.0014 3.54541 20.4219H5.10081C5.12354 20.7259 5.21729 20.9787 5.38206 21.1804C5.54683 21.3821 5.76132 21.5327 6.02552 21.6321C6.29257 21.7315 6.59086 21.7813 6.92041 21.7813C7.26416 21.7813 7.5653 21.7301 7.82382 21.6278C8.08518 21.5227 8.28973 21.3778 8.43746 21.1932C8.58518 21.0057 8.66047 20.7869 8.66331 20.5369C8.66047 20.3097 8.59371 20.1222 8.46302 19.9744C8.33234 19.8239 8.1491 19.6989 7.91331 19.5994C7.68035 19.4972 7.40763 19.4063 7.09513 19.3267L6.10223 19.071C5.38348 18.8864 4.8153 18.6065 4.39768 18.2315C3.98291 17.8537 3.77552 17.3523 3.77552 16.7273C3.77552 16.2131 3.91473 15.7628 4.19314 15.3764C4.47439 14.9901 4.85649 14.6903 5.33944 14.4773C5.8224 14.2614 6.36927 14.1534 6.98007 14.1534C7.59939 14.1534 8.142 14.2614 8.60791 14.4773C9.07666 14.6903 9.44456 14.9872 9.7116 15.3679C9.97865 15.7457 10.1164 16.1804 10.125 16.6719H8.60365Z\" fill=\"white\"/>\n</g>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:5265",
        "figmaName": "Document/img",
        "category": "Document",
        "sectionLabel": "Document (file type)",
        "slug": "img",
        "id": "eds-document-img",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"30\" height=\"36\" viewBox=\"0 0 30 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"&#231;&#188;&#150;&#231;&#187;&#132;\">\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 7\" d=\"M4 0H22L30 8V32C30 34.2091 28.2091 36 26 36H4C1.79086 36 0 34.2091 0 32V4C0 1.79086 1.79086 0 4 0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6397FF\"/>\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 8\" d=\"M22 0L30 8H24C22.8954 8 22 7.10457 22 6V0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#A8C5FF\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:5264",
        "figmaName": "Document/Word",
        "category": "Document",
        "sectionLabel": "Document (file type)",
        "slug": "Word",
        "id": "eds-document-word",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"30\" height=\"36\" viewBox=\"0 0 30 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"&#231;&#188;&#150;&#231;&#187;&#132;&#229;&#164;&#135;&#228;&#187;&#189;\">\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 7\" d=\"M4 0H22L30 8V32C30 34.2091 28.2091 36 26 36H4C1.79086 36 0 34.2091 0 32V4C0 1.79086 1.79086 0 4 0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6397FF\"/>\n<path id=\"W\" d=\"M12.5718 24.7032L14.9571 15.7725C14.9623 15.753 14.9799 15.7395 15 15.7395C15.0201 15.7395 15.0377 15.753 15.0429 15.7725L17.4282 24.7032C17.4749 24.8782 17.6335 25 17.8146 25H19.1865C19.3641 25 19.5204 24.8829 19.5704 24.7124L22.85 13.5124C22.912 13.3004 22.7905 13.0782 22.5785 13.0161C22.542 13.0054 22.5041 13 22.4661 13H21.2131C21.0301 13 20.8704 13.1242 20.8254 13.3016L18.5393 22.3115C18.5344 22.3309 18.5169 22.3445 18.4968 22.3445C18.4767 22.3445 18.4591 22.331 18.4539 22.3116L16.0514 13.297C16.0048 13.1219 15.8462 13 15.6649 13H14.3351C14.1538 13 13.9952 13.1219 13.9486 13.297L11.5461 22.3116C11.5409 22.331 11.5233 22.3445 11.5032 22.3445C11.4831 22.3445 11.4656 22.3309 11.4607 22.3115L9.17461 13.3016C9.1296 13.1242 8.96992 13 8.7869 13H7.5332C7.31228 13 7.1332 13.1791 7.1332 13.4C7.1332 13.4379 7.13857 13.4755 7.14917 13.5119L10.4129 24.7119C10.4626 24.8826 10.6191 25 10.7969 25H12.1854C12.3665 25 12.5251 24.8782 12.5718 24.7032Z\" fill=\"white\"/>\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 8\" d=\"M22 0L30 8H24C22.8954 8 22 7.10457 22 6V0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#A8C5FF\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:5267",
        "figmaName": "Document/PPT",
        "category": "Document",
        "sectionLabel": "Document (file type)",
        "slug": "PPT",
        "id": "eds-document-ppt",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Icon/Document/PPT\">\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 7\" d=\"M9 2H27L35 10V34C35 36.2091 33.2091 38 31 38H9C6.79086 38 5 36.2091 5 34V6C5 3.79086 6.79086 2 9 2Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#FD6D6D\"/>\n<path id=\"&#232;&#183;&#175;&#229;&#190;&#132;\" d=\"M21.1941 13.4977C23.7542 13.4977 25.8295 15.5731 25.8295 18.1331C25.8295 20.6337 23.8496 22.6717 21.3719 22.7652L21.1941 22.7685L16.5392 22.7683C16.3459 22.7682 16.1846 22.9053 16.1473 23.0875L16.1392 23.1682L16.1399 28.1466C16.14 28.3399 16.0029 28.5012 15.8206 28.5385L15.74 28.5466H14.54C14.319 28.5466 14.14 28.3675 14.14 28.1466V21.1685C14.14 20.9476 14.319 20.7685 14.54 20.7685H21.1941C22.6496 20.7685 23.8295 19.5886 23.8295 18.1331C23.8295 16.7278 22.7296 15.5794 21.3437 15.5019L21.1941 15.4977H14.4C14.1791 15.4977 14 15.3187 14 15.0977V13.8977C14 13.6768 14.1791 13.4977 14.4 13.4977H21.1941Z\" fill=\"white\"/>\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 8\" d=\"M27 2L35 10H29C27.8954 10 27 9.10457 27 8V2Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#FFA9A9\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:5277",
        "figmaName": "Document/PDF",
        "category": "Document",
        "sectionLabel": "Document (file type)",
        "slug": "PDF",
        "id": "eds-document-pdf",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"30\" height=\"36\" viewBox=\"0 0 30 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"&#231;&#188;&#150;&#231;&#187;&#132;&#229;&#164;&#135;&#228;&#187;&#189; 2\">\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 7\" d=\"M4 0H22L30 8V32C30 34.2091 28.2091 36 26 36H4C1.79086 36 0 34.2091 0 32V4C0 1.79086 1.79086 0 4 0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#FD6D6D\"/>\n<g id=\"pdf\">\n<path id=\"&#229;&#189;&#162;&#231;&#138;&#182;\" d=\"M17.535 21.6179C15.531 22.057 13.6248 22.6913 11.7186 23.472C10.2034 26.1556 8.78599 27.5218 7.56406 27.5218C7.31968 27.5218 7.02641 27.473 6.83092 27.3266C6.29325 27.0826 6 26.5459 6 26.0092C6 25.5701 6.09776 24.3503 10.7411 22.3498C11.8164 20.3981 12.6473 18.3976 13.3316 16.2995C12.745 15.1285 11.4742 12.2497 12.354 10.786C12.6473 10.2492 13.2338 9.95648 13.8692 10.0053C14.358 10.0053 14.8467 10.2492 15.14 10.6396C15.7754 11.5178 15.7265 13.372 14.8956 16.1043C15.6777 17.5681 16.7041 18.8855 17.926 20.0077C18.9524 19.8126 19.9788 19.6662 21.0053 19.6662C23.3025 19.715 23.6446 20.7884 23.5957 21.4227C23.5957 23.0817 21.9828 23.0817 21.1519 23.0817C19.8322 22.9841 18.5614 22.4961 17.535 21.6179ZM7.46632 26.1068L7.61295 26.058C8.29722 25.814 8.83486 25.3261 9.22588 24.6918C8.49274 24.9845 7.90621 25.4725 7.46632 26.1068ZM13.8203 11.469H13.967C14.2114 12.2985 14.2114 13.1768 13.9181 14.0063C13.5759 13.2256 13.4293 12.3473 13.6248 11.5178C13.6737 11.469 13.7715 11.469 13.8203 11.469ZM14.2602 18.6416L14.2114 18.5928C13.7715 19.715 13.2827 20.8372 12.745 21.9106L12.8428 21.8618V21.9594C13.9181 21.5691 15.0911 21.2276 16.1664 20.9836L16.1176 20.9348H16.2642C15.531 20.2029 14.8467 19.3734 14.3091 18.544L14.2602 18.6416ZM19.6856 21.2276C20.1255 21.13 20.5165 21.13 20.9564 21.13C21.9339 21.13 22.1294 21.3739 22.1294 21.5203C21.8362 21.6179 21.494 21.6667 21.1519 21.6179C20.6631 21.5691 20.1744 21.4715 19.6856 21.2276Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"white\"/>\n</g>\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 8\" d=\"M22 0L30 8H24C22.8954 8 22 7.10457 22 6V0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#FFA9A9\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:5272",
        "figmaName": "Document/compressed file",
        "category": "Document",
        "sectionLabel": "Document (file type)",
        "slug": "compressed file",
        "id": "eds-document-compressed-file",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"30\" height=\"36\" viewBox=\"0 0 30 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"&#231;&#188;&#150;&#231;&#187;&#132;&#229;&#164;&#135;&#228;&#187;&#189;\">\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 7\" d=\"M4 0H22L30 8V32C30 34.2091 28.2091 36 26 36H4C1.79086 36 0 34.2091 0 32V4C0 1.79086 1.79086 0 4 0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#FBC824\"/>\n<path id=\"&#229;&#189;&#162;&#231;&#138;&#182;\" d=\"M17.24 16C17.3284 16 17.4 16.0716 17.4 16.16V18.4C17.4 19.7255 16.3255 20.8 15 20.8C13.6745 20.8 12.6 19.7255 12.6 18.4V16.16C12.6 16.0716 12.6716 16 12.76 16H17.24ZM15.8 17.6H14.2V18.4C14.2 18.7927 14.483 19.1194 14.8562 19.1871L15 19.2C15.3927 19.2 15.7194 18.917 15.7871 18.5438L15.8 18.4V17.6ZM17.24 12C17.3284 12 17.4 12.0716 17.4 12.16V14.24C17.4 14.3284 17.3284 14.4 17.24 14.4H15.16C15.0716 14.4 15 14.3284 15 14.24V12.16C15 12.0716 15.0716 12 15.16 12H17.24ZM14.84 9.6C14.9284 9.6 15 9.67163 15 9.76V11.84C15 11.9284 14.9284 12 14.84 12H12.76C12.6716 12 12.6 11.9284 12.6 11.84V9.76C12.6 9.67163 12.6716 9.6 12.76 9.6H14.84ZM17.24 7.2C17.3284 7.2 17.4 7.27163 17.4 7.36V9.44C17.4 9.52837 17.3284 9.6 17.24 9.6H15.16C15.0716 9.6 15 9.52837 15 9.44V7.36C15 7.27163 15.0716 7.2 15.16 7.2H17.24ZM14.84 4.8C14.9284 4.8 15 4.87163 15 4.96V7.04C15 7.12837 14.9284 7.2 14.84 7.2H12.76C12.6716 7.2 12.6 7.12837 12.6 7.04V4.96C12.6 4.87163 12.6716 4.8 12.76 4.8H14.84ZM17.24 2.4C17.3284 2.4 17.4 2.47163 17.4 2.56V4.64C17.4 4.72837 17.3284 4.8 17.24 4.8H15.16C15.0716 4.8 15 4.72837 15 4.64V2.56C15 2.47163 15.0716 2.4 15.16 2.4H17.24ZM14.84 0C14.9284 0 15 0.0716344 15 0.16V2.24C15 2.32837 14.9284 2.4 14.84 2.4H12.76C12.6716 2.4 12.6 2.32837 12.6 2.24V0.16C12.6 0.0716344 12.6716 0 12.76 0H14.84Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"white\"/>\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 8\" d=\"M22 0L30 8H24C22.8954 8 22 7.10457 22 6V0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#FCE187\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:5276",
        "figmaName": "Document/XLS",
        "category": "Document",
        "sectionLabel": "Document (file type)",
        "slug": "XLS",
        "id": "eds-document-xls",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"30\" height=\"36\" viewBox=\"0 0 30 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"&#231;&#188;&#150;&#231;&#187;&#132;&#229;&#164;&#135;&#228;&#187;&#189; 2\">\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 7\" d=\"M4 0H22L30 8V32C30 34.2091 28.2091 36 26 36H4C1.79086 36 0 34.2091 0 32V4C0 1.79086 1.79086 0 4 0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#1CC78D\"/>\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 8\" d=\"M22 0L30 8H24C22.8954 8 22 7.10457 22 6V0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#70EBC2\"/>\n<g id=\"XLS\">\n<path id=\"Vector\" d=\"M23.6855 16.6719C23.6457 16.2997 23.4781 16.0099 23.1827 15.8026C22.8901 15.5952 22.5094 15.4915 22.0406 15.4915C21.7111 15.4915 21.4284 15.5412 21.1926 15.6406C20.9568 15.7401 20.7764 15.875 20.6514 16.0455C20.5264 16.2159 20.4625 16.4105 20.4597 16.6293C20.4597 16.8111 20.5008 16.9688 20.5832 17.1023C20.6685 17.2358 20.7835 17.3494 20.9284 17.4432C21.0733 17.5341 21.2338 17.6108 21.4099 17.6733C21.5861 17.7358 21.7636 17.7884 21.9426 17.831L22.7608 18.0355C23.0903 18.1122 23.4071 18.2159 23.7111 18.3466C24.0179 18.4773 24.292 18.642 24.5335 18.8409C24.7778 19.0398 24.971 19.2798 25.1131 19.5611C25.2551 19.8423 25.3261 20.1719 25.3261 20.5497C25.3261 21.0611 25.1954 21.5114 24.9341 21.9006C24.6727 22.2869 24.2949 22.5895 23.8006 22.8082C23.3091 23.0242 22.7139 23.1321 22.015 23.1321C21.3361 23.1321 20.7466 23.027 20.2466 22.8168C19.7494 22.6065 19.3602 22.2997 19.079 21.8963C18.8006 21.4929 18.65 21.0014 18.6273 20.4219H20.1827C20.2054 20.7259 20.2991 20.9787 20.4639 21.1804C20.6287 21.3821 20.8432 21.5327 21.1074 21.6321C21.3744 21.7315 21.6727 21.7813 22.0023 21.7813C22.346 21.7813 22.6472 21.7301 22.9057 21.6278C23.167 21.5227 23.3716 21.3778 23.5193 21.1932C23.667 21.0057 23.7423 20.7869 23.7452 20.5369C23.7423 20.3097 23.6756 20.1222 23.5449 19.9744C23.4142 19.8239 23.231 19.6989 22.9952 19.5994C22.7622 19.4972 22.4895 19.4063 22.177 19.3267L21.1841 19.071C20.4653 18.8864 19.8972 18.6065 19.4795 18.2315C19.0648 17.8537 18.8574 17.3523 18.8574 16.7273C18.8574 16.2131 18.9966 15.7628 19.275 15.3764C19.5562 14.9901 19.9383 14.6903 20.4213 14.4773C20.9043 14.2614 21.4511 14.1534 22.0619 14.1534C22.6812 14.1534 23.2239 14.2614 23.6898 14.4773C24.1585 14.6903 24.5264 14.9872 24.7935 15.3679C25.0605 15.7457 25.1983 16.1804 25.2068 16.6719H23.6855Z\" fill=\"white\"/>\n<path id=\"Vector_2\" d=\"M12.1457 23V14.2727H13.7267V21.6747H17.5704V23H12.1457Z\" fill=\"white\"/>\n<path id=\"Vector_3\" d=\"M5.1816 14.2727L7.10347 17.4688H7.17165L9.10205 14.2727H10.9046L8.21569 18.6364L10.9472 23H9.11483L7.17165 19.8253H7.10347L5.16029 23H3.33643L6.09353 18.6364L3.37052 14.2727H5.1816Z\" fill=\"white\"/>\n</g>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:5266",
        "figmaName": "Document/chart",
        "category": "Document",
        "sectionLabel": "Document (file type)",
        "slug": "chart",
        "id": "eds-document-chart",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"30\" height=\"36\" viewBox=\"0 0 30 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 7\" d=\"M4 0H22L30 8V32C30 34.2091 28.2091 36 26 36H4C1.79086 36 0 34.2091 0 32V4C0 1.79086 1.79086 0 4 0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6397FF\"/>\n</svg>"
      },
      {
        "nodeId": "8413:5262",
        "figmaName": "Document/Folder",
        "category": "Document",
        "sectionLabel": "Document (file type)",
        "slug": "Folder",
        "id": "eds-document-folder",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"36\" height=\"32\" viewBox=\"0 0 36 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"&#231;&#188;&#150;&#231;&#187;&#132; 13\">\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;\" opacity=\"0.9\" d=\"M4 0H14.1487C14.9422 0 15.6606 0.46909 15.9798 1.19556L16.8823 3.24991C17.0408 3.61074 17.3965 3.84481 17.7906 3.84766L34.0145 3.96498C35.1134 3.97293 36 4.866 36 5.96493V13.1364H0V4C0 1.79086 1.79086 0 4 0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#266EFF\"/>\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;_2\" d=\"M2 10.1364H34C35.1046 10.1364 36 11.0318 36 12.1364V28C36 30.2091 34.2091 32 32 32H4C1.79086 32 0 30.2091 0 28V12.1364C0 11.0318 0.89543 10.1364 2 10.1364Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6397FF\"/>\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;_3\" d=\"M4.63636 7.86364H31.3636C31.9159 7.86364 32.3636 8.31135 32.3636 8.86364V10.1364H3.63636V8.86364C3.63636 8.31135 4.08408 7.86364 4.63636 7.86364Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"white\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:5261",
        "figmaName": "Document/audio",
        "category": "Document",
        "sectionLabel": "Document (file type)",
        "slug": "audio",
        "id": "eds-document-audio",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"30\" height=\"36\" viewBox=\"0 0 30 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"&#231;&#188;&#150;&#231;&#187;&#132;\">\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 7\" d=\"M4 0H22L30 8V32C30 34.2091 28.2091 36 26 36H4C1.79086 36 0 34.2091 0 32V4C0 1.79086 1.79086 0 4 0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#FF9A57\"/>\n<g id=\"&#231;&#188;&#150;&#231;&#187;&#132; 82\">\n<path id=\"&#229;&#156;&#134;&#232;&#167;&#146;&#231;&#159;&#169;&#229;&#189;&#162; 2-path\" d=\"M11.2 14.7C10.8686 14.7 10.6 14.9686 10.6 15.3V23.7C10.6 24.0314 10.8686 24.3 11.2 24.3C11.5314 24.3 11.8 24.0314 11.8 23.7V15.3C11.8 14.9686 11.5314 14.7 11.2 14.7Z\" fill=\"white\"/>\n<path id=\"&#229;&#156;&#134;&#232;&#167;&#146;&#231;&#159;&#169;&#229;&#189;&#162; 2-path&#229;&#164;&#135;&#228;&#187;&#189; 2\" d=\"M7.6 17.1C7.26863 17.1 7 17.3686 7 17.7V20.5C7 20.8314 7.26863 21.1 7.6 21.1C7.93137 21.1 8.2 20.8314 8.2 20.5V17.7C8.2 17.3686 7.93137 17.1 7.6 17.1Z\" fill=\"white\"/>\n<path id=\"&#229;&#156;&#134;&#232;&#167;&#146;&#231;&#159;&#169;&#229;&#189;&#162; 2-path&#229;&#164;&#135;&#228;&#187;&#189;\" d=\"M18.4 14.7C18.0686 14.7 17.8 14.9686 17.8 15.3V23.7C17.8 24.0314 18.0686 24.3 18.4 24.3C18.7314 24.3 19 24.0314 19 23.7V15.3C19 14.9686 18.7314 14.7 18.4 14.7Z\" fill=\"white\"/>\n<path id=\"&#229;&#156;&#134;&#232;&#167;&#146;&#231;&#159;&#169;&#229;&#189;&#162; 2-path&#229;&#164;&#135;&#228;&#187;&#189; 3\" d=\"M22 17.1C21.6686 17.1 21.4 17.3686 21.4 17.7V20.5C21.4 20.8314 21.6686 21.1 22 21.1C22.3314 21.1 22.6 20.8314 22.6 20.5V17.7C22.6 17.3686 22.3314 17.1 22 17.1Z\" fill=\"white\"/>\n<path id=\"&#229;&#156;&#134;&#232;&#167;&#146;&#231;&#159;&#169;&#229;&#189;&#162; 2-path_2\" d=\"M14.8 11.5C14.4686 11.5 14.2 11.7686 14.2 12.1V26.1C14.2 26.4314 14.4686 26.7 14.8 26.7C15.1314 26.7 15.4 26.4314 15.4 26.1V12.1C15.4 11.7686 15.1314 11.5 14.8 11.5Z\" fill=\"white\"/>\n</g>\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 8\" d=\"M22 0L30 8H24C22.8954 8 22 7.10457 22 6V0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#FFC39C\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:5269",
        "figmaName": "Document/video",
        "category": "Document",
        "sectionLabel": "Document (file type)",
        "slug": "video",
        "id": "eds-document-video",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"30\" height=\"36\" viewBox=\"0 0 30 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"&#231;&#188;&#150;&#231;&#187;&#132;\">\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 7\" d=\"M4 0H22L30 8V32C30 34.2091 28.2091 36 26 36H4C1.79086 36 0 34.2091 0 32V4C0 1.79086 1.79086 0 4 0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#FF9A57\"/>\n<g id=\"&#231;&#188;&#150;&#231;&#187;&#132; 5\">\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;\" d=\"M14.5732 17.0108L16.9345 18.8155C17.11 18.9497 17.1436 19.2007 17.0094 19.3762C16.9879 19.4044 16.9627 19.4296 16.9345 19.4511L14.5732 21.2559C14.3977 21.39 14.1466 21.3565 14.0125 21.181C13.9592 21.1112 13.9303 21.0259 13.9303 20.9381L13.9303 17.3286C13.9303 17.1077 14.1094 16.9286 14.3303 16.9286C14.4181 16.9286 14.5034 16.9575 14.5732 17.0108Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"white\"/>\n<path id=\"&#230;&#164;&#173;&#229;&#156;&#134;&#229;&#189;&#162;\" d=\"M15 12C18.866 12 22 15.134 22 19C22 22.866 18.866 26 15 26C11.134 26 8 22.866 8 19C8 15.134 11.134 12 15 12ZM15 13.2002C11.7967 13.2002 9.2002 15.7967 9.2002 19C9.2002 22.2033 11.7967 24.7998 15 24.7998C18.2033 24.7998 20.7998 22.2033 20.7998 19C20.7998 15.7967 18.2033 13.2002 15 13.2002Z\" fill=\"white\"/>\n</g>\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 8\" d=\"M22 0L30 8H24C22.8954 8 22 7.10457 22 6V0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#FFC39C\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:5260",
        "figmaName": "Document/General",
        "category": "Document",
        "sectionLabel": "Document (file type)",
        "slug": "General",
        "id": "eds-document-general",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"30\" height=\"36\" viewBox=\"0 0 30 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"&#231;&#188;&#150;&#231;&#187;&#132;&#229;&#164;&#135;&#228;&#187;&#189;\">\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 7\" d=\"M4 0H22L30 8V32C30 34.2091 28.2091 36 26 36H4C1.79086 36 0 34.2091 0 32V4C0 1.79086 1.79086 0 4 0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6397FF\"/>\n<path id=\"&#229;&#189;&#162;&#231;&#138;&#182;&#231;&#187;&#147;&#229;&#144;&#136;\" d=\"M14.9365 13.4289C17.2393 13.429 19.1064 15.296 19.1064 17.5988C19.1064 17.6066 19.1055 17.6144 19.1055 17.6222C19.2394 17.6066 19.3756 17.5988 19.5137 17.5988C21.4391 17.5988 23 19.1597 23 21.0851C22.9999 23.0104 21.439 24.5714 19.5137 24.5714C19.3759 24.5714 19.2401 24.5616 19.1064 24.5461V24.5714H10.7666V24.5587C10.6741 24.5661 10.5807 24.5714 10.4863 24.5714C8.561 24.5714 7.00013 23.0104 7 21.0851C7 19.1597 8.56092 17.5988 10.4863 17.5988C10.5807 17.5988 10.6742 17.6022 10.7666 17.6095C10.7666 17.606 10.7666 17.6024 10.7666 17.5988C10.7666 15.2959 12.6336 13.4289 14.9365 13.4289Z\" fill=\"white\"/>\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 8\" d=\"M22 0L30 8H24C22.8954 8 22 7.10457 22 6V0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#A8C5FF\"/>\n</g>\n</svg>"
      },
      {
        "nodeId": "8413:5274",
        "figmaName": "Document/GIF",
        "category": "Document",
        "sectionLabel": "Document (file type)",
        "slug": "GIF",
        "id": "eds-document-gif",
        "svg": "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"30\" height=\"36\" viewBox=\"0 0 30 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"&#231;&#188;&#150;&#231;&#187;&#132;\">\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 7\" d=\"M4 0H22L30 8V32C30 34.2091 28.2091 36 26 36H4C1.79086 36 0 34.2091 0 32V4C0 1.79086 1.79086 0 4 0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6397FF\"/>\n<g id=\"&#231;&#188;&#150;&#231;&#187;&#132; 152\">\n<path id=\"&#230;&#164;&#173;&#229;&#156;&#134;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 2\" d=\"M19 26.4494C21.2091 26.4494 23 24.6586 23 22.4494C23 20.2403 21.2091 18.4494 19 18.4494C16.7909 18.4494 15 20.2403 15 22.4494C15 24.6586 16.7909 26.4494 19 26.4494Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#A8C5FF\"/>\n<circle id=\"&#230;&#164;&#173;&#229;&#156;&#134;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189;\" cx=\"15\" cy=\"19\" r=\"4\" fill=\"#CCDDFF\"/>\n<circle id=\"&#230;&#164;&#173;&#229;&#156;&#134;&#229;&#189;&#162;\" cx=\"11\" cy=\"15\" r=\"4\" fill=\"white\"/>\n</g>\n<path id=\"&#231;&#159;&#169;&#229;&#189;&#162;&#229;&#164;&#135;&#228;&#187;&#189; 8\" d=\"M22 0L30 8H24C22.8954 8 22 7.10457 22 6V0Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#A8C5FF\"/>\n</g>\n</svg>"
      }
    ],
    "kind": "eds"
  }
] as const;

export const figmaIconCategories: FigmaIconCategory[] = [
  ...figmaEpCategories.map((c) => ({ kind: "ep" as const, id: c.id, label: c.label, icons: c.icons.map((i) => ({ kind: "ep" as const, ...i })) })),
  ...figmaEdsSections.map((s) => ({ kind: "eds" as const, id: s.id, label: s.label, icons: s.icons.map((i) => ({ kind: "eds" as const, id: i.id, figmaName: i.figmaName, slug: i.slug, nodeId: i.nodeId, svg: i.svg })) })),
];

export const figmaIconTotalCount = 592;
export const figmaEpListedCount = 294;
export const figmaEdsCount = 298;

const epById = new Map(epIconManifest.map((item) => [item.id, item]));

export function resolveEpManifestItem(id: string): EpIconManifestItem | undefined {
  return epById.get(id);
}

const edsSvgById = new Map<string, string>();
for (const section of figmaEdsSections) {
  for (const icon of section.icons) {
    edsSvgById.set(icon.id, icon.svg);
  }
}

export function resolveEdsIconSvg(id: string): string | undefined {
  return edsSvgById.get(id);
}
