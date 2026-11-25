import { Button } from "@/components/Button/Button";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import { cn } from "@/lib/cn";
import { useMemo, useRef, useState, type DragEvent } from "react";
import "./upload.css";

/** Figma Upload Type 3128:73263 */
export type UploadFigmaType =
  | "clickUpload"
  | "listOfPictures"
  | "uploadTheServer"
  | "pictureWall"
  | "dragAndDrop";

/** @deprecated Use UploadFigmaType; `click` / `drag` still accepted */
export type UploadType = UploadFigmaType | "click" | "drag";

export type UploadDragVisualState = "Default" | "Hover" | "Drag";
export type UploadListFileState = "finish" | "inProgress";

export type UploadSampleFile = {
  name: string;
  /** 0–100; omit for finished row */
  progress?: number;
};

export type UploadSampleImage = {
  name: string;
  src?: string;
  /** Picture wall: dashed tile with ring progress */
  uploading?: boolean;
  uploadProgress?: number;
};

export type UploadProps = {
  type?: UploadType;
  multiple?: boolean;
  accept?: string;
  disabled?: boolean;
  buttonText?: string;
  serverButtonText?: string;
  description?: string;
  showDescription?: boolean;
  /** Showcase: pre-filled Figma list rows */
  sampleList?: boolean;
  listFileState?: UploadListFileState;
  sampleFiles?: UploadSampleFile[];
  sampleImages?: UploadSampleImage[];
  /** Showcase：拖拽区视觉态 */
  dragVisualState?: UploadDragVisualState;
  /** Drag trigger only (300×200) vs combined drag block (356×210) */
  dragCompact?: boolean;
  onFiles?: (files: File[]) => void;
  className?: string;
};

const DEFAULT_DESCRIPTION = "jpg/png files with a size less than 500KB.";

const SAMPLE_FILES_FINISH: UploadSampleFile[] = [
  { name: "element-plus-logo2.svg" },
  { name: "element-plus-logo2.svg" },
];

const SAMPLE_FILES_PROGRESS: UploadSampleFile[] = [
  { name: "element-plus-logo2.svg" },
  { name: "element-plus-logo2.svg", progress: 50 },
];

const SAMPLE_IMAGES: UploadSampleImage[] = [
  { name: "element-plus-logo2.svg" },
  { name: "element-plus-logo2.svg" },
];

const SAMPLE_WALL: UploadSampleImage[] = [
  { name: "food.jpeg" },
  { name: "food.jpeg" },
];

function normalizeType(type?: UploadType): UploadFigmaType {
  if (type === "click") return "clickUpload";
  if (type === "drag") return "dragAndDrop";
  return type ?? "clickUpload";
}

function SuccessCornerBadge() {
  return (
    <span className="pt-upload__image-row-badge" aria-hidden>
      <EpIconByName name="Select" size={12} />
    </span>
  );
}

function WallSuccessBadge() {
  return (
    <span className="pt-upload__wall-card-badge" aria-hidden>
      <EpIconByName name="Select" size={12} />
    </span>
  );
}

function FileListRows({
  rows,
  onRemove,
}: {
  rows: { key: string; name: string; progress?: number }[];
  onRemove?: (key: string) => void;
}) {
  if (!rows.length) return null;
  return (
    <div className="pt-upload__list-file">
      {rows.map((row) => {
        const inProgress =
          row.progress !== undefined && row.progress >= 0 && row.progress < 100;
        if (inProgress) {
          return (
            <div key={row.key} className="pt-upload__file-row pt-upload__file-row--progress">
              <div className="pt-upload__file-row-top">
                <div className="pt-upload__file-name">
                  <EpIconByName name="Document" size={16} className="shrink-0 text-el-text-secondary" />
                  <span>{row.name}</span>
                </div>
                <span className="pt-upload__file-progress-label">{row.progress}%</span>
              </div>
              <div className="pt-upload__file-bar">
                <div className="pt-upload__file-bar-track">
                  <div
                    className="pt-upload__file-bar-fill"
                    style={{ width: `${row.progress}%` }}
                  />
                </div>
              </div>
            </div>
          );
        }
        return (
          <div key={row.key} className="pt-upload__file-row">
            <div className="pt-upload__file-name">
              <EpIconByName name="Document" size={16} className="shrink-0 text-el-text-secondary" />
              <span>{row.name}</span>
            </div>
            <button
              type="button"
              className="pt-upload__file-remove"
              aria-label={`Remove ${row.name}`}
              onClick={() => onRemove?.(row.key)}
            >
              <EpIconByName name="Close" size={16} />
            </button>
          </div>
        );
      })}
    </div>
  );
}

function ImageListRows({
  rows,
  onRemove,
}: {
  rows: { key: string; name: string; src?: string }[];
  onRemove?: (key: string) => void;
}) {
  if (!rows.length) return null;
  return (
    <div className="pt-upload__list-image">
      {rows.map((row) => (
        <div key={row.key} className="pt-upload__image-row">
          <SuccessCornerBadge />
          <div className="pt-upload__image-thumb">
            {row.src ? (
              <img src={row.src} alt="" />
            ) : (
              <EpIconByName name="Picture" size={28} />
            )}
          </div>
          <div className="pt-upload__file-name min-w-0 flex-1">
            <span>{row.name}</span>
          </div>
          <button
            type="button"
            className="pt-upload__file-remove"
            aria-label={`Remove ${row.name}`}
            onClick={() => onRemove?.(row.key)}
          >
            <EpIconByName name="Close" size={16} />
          </button>
        </div>
      ))}
    </div>
  );
}

function WallProgressRing({ percent }: { percent: number }) {
  const r = 59;
  const c = 2 * Math.PI * r;
  const offset = c - (percent / 100) * c;
  return (
    <div className="pt-upload__wall-progress">
      <svg className="pt-upload__wall-progress-ring" viewBox="0 0 126 126" aria-hidden>
        <circle className="track" cx="63" cy="63" r={r} />
        <circle
          className="value"
          cx="63"
          cy="63"
          r={r}
          strokeDasharray={c}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="pt-upload__wall-progress-text">{percent}%</span>
    </div>
  );
}

export function Upload({
  type: typeProp = "clickUpload",
  multiple = false,
  accept,
  disabled = false,
  buttonText = "Button",
  serverButtonText = "upload to server",
  description = DEFAULT_DESCRIPTION,
  showDescription = true,
  sampleList = true,
  listFileState = "finish",
  sampleFiles,
  sampleImages,
  dragVisualState = "Default",
  dragCompact = false,
  onFiles,
  className,
}: UploadProps) {
  const figmaType = normalizeType(typeProp);
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [over, setOver] = useState(false);
  const [hiddenSampleKeys, setHiddenSampleKeys] = useState<string[]>([]);

  const ingest = (list: FileList | null) => {
    if (!list?.length) return;
    const next = multiple ? [...files, ...Array.from(list)] : [list[0]!];
    setFiles(next);
    onFiles?.(next);
  };

  const removeUserFile = (index: number) => {
    const next = files.filter((_, i) => i !== index);
    setFiles(next);
    onFiles?.(next);
  };

  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setOver(false);
    if (disabled) return;
    ingest(e.dataTransfer.files);
  };

  const dragClass =
    dragVisualState === "Drag"
      ? "is-drag"
      : dragVisualState === "Hover" || over
        ? "is-hover"
        : "";

  const defaultSampleFiles =
    listFileState === "inProgress" ? SAMPLE_FILES_PROGRESS : SAMPLE_FILES_FINISH;

  const fileRows = useMemo(() => {
    const sample =
      sampleList && (figmaType === "clickUpload" || figmaType === "dragAndDrop" || figmaType === "uploadTheServer")
        ? (sampleFiles ?? defaultSampleFiles)
            .filter((_, i) => !hiddenSampleKeys.includes(`sample-file-${i}`))
            .map((f, i) => ({
              key: `sample-file-${i}`,
              name: f.name,
              progress: f.progress,
            }))
        : [];
    const user = files.map((f, i) => ({
      key: `user-${i}-${f.name}`,
      name: f.name,
      progress: undefined as number | undefined,
    }));
    return [...sample, ...user];
  }, [
    sampleList,
    figmaType,
    sampleFiles,
    defaultSampleFiles,
    hiddenSampleKeys,
    files,
  ]);

  const imageRows = useMemo(() => {
    if (!sampleList || figmaType !== "listOfPictures") return [];
    const imgs = sampleImages ?? SAMPLE_IMAGES;
    return imgs
      .filter((_, i) => !hiddenSampleKeys.includes(`sample-img-${i}`))
      .map((img, i) => ({
        key: `sample-img-${i}`,
        name: img.name,
        src: img.src,
      }));
  }, [sampleList, figmaType, sampleImages, hiddenSampleKeys]);

  const wallTiles = sampleImages ?? SAMPLE_WALL;

  const hiddenInput = (
    <input
      ref={inputRef}
      type="file"
      className="hidden"
      multiple={multiple}
      accept={accept}
      disabled={disabled}
      onChange={(e) => {
        ingest(e.target.files);
        e.target.value = "";
      }}
    />
  );

  const primaryTrigger = (
    <Button
      size="Default"
      buttonType="Primary"
      disabled={disabled}
      leftIcon={<EpIconByName name="ElementPlus" size={14} />}
      rightIcon={<EpIconByName name="ElementPlus" size={14} />}
      onClick={() => inputRef.current?.click()}
    >
      {buttonText}
    </Button>
  );

  const hint = showDescription ? <p className="pt-upload__hint">{description}</p> : null;

  const dragZone = (
    <div
      role="button"
      tabIndex={0}
      className={cn(
        "pt-upload__drag",
        dragCompact && "pt-upload__drag--compact",
        dragClass,
        disabled && "is-disabled",
      )}
      onDragOver={(e) => {
        e.preventDefault();
        if (!disabled && dragVisualState === "Default") setOver(true);
      }}
      onDragLeave={() => setOver(false)}
      onDrop={onDrop}
      onClick={() => !disabled && inputRef.current?.click()}
      onKeyDown={(e) => e.key === "Enter" && !disabled && inputRef.current?.click()}
    >
      <EpIconByName name="UploadFilled" size={48} className="pt-upload__drag-icon" />
      <div className="pt-upload__drag-text">
        <span>Drag file here or</span>
        <button
          type="button"
          className="pt-upload__drag-link"
          onClick={(e) => {
            e.stopPropagation();
            if (!disabled) inputRef.current?.click();
          }}
        >
          click to upload
        </button>
      </div>
    </div>
  );

  if (figmaType === "dragAndDrop") {
    return (
      <div className={cn("pt-upload", className)}>
        {dragZone}
        {hiddenInput}
        {hint}
        <FileListRows
          rows={fileRows}
          onRemove={(key) => {
            if (key.startsWith("sample-file-")) {
              setHiddenSampleKeys((k) => [...k, key]);
            } else {
              const idx = files.findIndex((_, i) => key === `user-${i}-${files[i]?.name}`);
              if (idx >= 0) removeUserFile(idx);
            }
          }}
        />
      </div>
    );
  }

  if (figmaType === "listOfPictures") {
    return (
      <div className={cn("pt-upload", className)}>
        {hiddenInput}
        <ImageListRows
          rows={imageRows}
          onRemove={(key) => setHiddenSampleKeys((k) => [...k, key])}
        />
      </div>
    );
  }

  if (figmaType === "pictureWall") {
    const showUploadingTile =
      sampleList && listFileState === "inProgress" && !hiddenSampleKeys.includes("wall-uploading");
    return (
      <div className={cn("pt-upload pt-upload--picture-wall", className)}>
        {hiddenInput}
        <div className="pt-upload__wall">
          {sampleList
            ? wallTiles.map((tile, i) =>
                hiddenSampleKeys.includes(`wall-${i}`) ? null : (
                  <div key={`wall-${i}`} className="pt-upload__wall-card">
                    {tile.src ? (
                      <img src={tile.src} alt="" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-el-primary-light-9 text-el-primary">
                        <EpIconByName name="Picture" size={32} />
                      </div>
                    )}
                    <WallSuccessBadge />
                  </div>
                ),
              )
            : null}
          {showUploadingTile ? (
            <div className="pt-upload__wall-card pt-upload__wall-card--uploading">
              <WallProgressRing percent={15} />
            </div>
          ) : null}
          <button
            type="button"
            className="pt-upload__wall-card pt-upload__wall-card--add"
            disabled={disabled}
            aria-label="Add file"
            onClick={() => !disabled && inputRef.current?.click()}
          >
            <EpIconByName name="Plus" size={32} />
          </button>
        </div>
        {hint}
      </div>
    );
  }

  if (figmaType === "uploadTheServer") {
    return (
      <div className={cn("pt-upload", className)}>
        <div className="pt-upload__actions-row">
          {primaryTrigger}
          <button type="button" className="pt-upload__server-btn" disabled={disabled}>
            {serverButtonText}
          </button>
        </div>
        {hiddenInput}
        {hint}
        <FileListRows
          rows={fileRows}
          onRemove={(key) => {
            if (key.startsWith("sample-file-")) {
              setHiddenSampleKeys((k) => [...k, key]);
            }
          }}
        />
      </div>
    );
  }

  return (
    <div className={cn("pt-upload", className)}>
      {primaryTrigger}
      {hiddenInput}
      {hint}
      <FileListRows
        rows={fileRows}
        onRemove={(key) => {
          if (key.startsWith("sample-file-")) {
            setHiddenSampleKeys((k) => [...k, key]);
          } else {
            const idx = files.findIndex((_, i) => key === `user-${i}-${files[i]?.name}`);
            if (idx >= 0) removeUserFile(idx);
          }
        }}
      />
    </div>
  );
}
