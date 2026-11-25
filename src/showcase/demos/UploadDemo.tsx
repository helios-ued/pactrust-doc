import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElUploadCode } from "../lib/elementPlusCode";
import { cn } from "@/lib/cn";
import {
  Upload,
  type UploadDragVisualState,
  type UploadFigmaType,
  type UploadListFileState,
} from "@/components/Upload/Upload";
import {
  CustomizeField,
  CustomizeInlineCheck,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import type { ShowcaseDemoProps } from "./types";

const TYPE_OPTIONS: { value: UploadFigmaType; label: string }[] = [
  { value: "clickUpload", label: "Click Upload" },
  { value: "listOfPictures", label: "List of pictures" },
  { value: "uploadTheServer", label: "Upload the server" },
  { value: "pictureWall", label: "Picture wall" },
  { value: "dragAndDrop", label: "Drag and drop" },
];

export function UploadDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [uploadType, setUploadType] = useState<UploadFigmaType>("clickUpload");
  const [multiple, setMultiple] = useState(true);
  const [showDescription, setShowDescription] = useState(true);
  const [sampleList, setSampleList] = useState(true);
  const [listFileState, setListFileState] = useState<UploadListFileState>("finish");
  const [dragVisualState, setDragVisualState] = useState<UploadDragVisualState>("Default");

  useReportElementPlusCode(reportElementPlusCode, () => buildElUploadCode(), []);

  const showListState =
    uploadType === "clickUpload" ||
    uploadType === "dragAndDrop" ||
    uploadType === "uploadTheServer" ||
    uploadType === "pictureWall";

  const previewWidth =
    uploadType === "pictureWall" ? "max-w-[460px]" : "max-w-[360px]";

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Type">
            <CustomizeSelect
              value={uploadType}
              onChange={(e) => setUploadType(e.target.value as UploadFigmaType)}
            >
              {TYPE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          {uploadType === "dragAndDrop" ? (
            <CustomizeField label="Drag state">
              <CustomizeSelect
                value={dragVisualState}
                onChange={(e) => setDragVisualState(e.target.value as UploadDragVisualState)}
              >
                <option value="Default">Default</option>
                <option value="Hover">Hover</option>
                <option value="Drag">Drag</option>
              </CustomizeSelect>
            </CustomizeField>
          ) : null}
          {showListState ? (
            <CustomizeField label="List state">
              <CustomizeSelect
                value={listFileState}
                onChange={(e) => setListFileState(e.target.value as UploadListFileState)}
              >
                <option value="finish">Finish</option>
                <option value="inProgress">In progress</option>
              </CustomizeSelect>
            </CustomizeField>
          ) : null}
          <CustomizeInlineCheck
            label="Sample list"
            checked={sampleList}
            onChange={(e) => setSampleList(e.target.checked)}
          />
          <CustomizeInlineCheck
            label="Multiple"
            checked={multiple}
            onChange={(e) => setMultiple(e.target.checked)}
          />
          <CustomizeInlineCheck
            label="Description"
            checked={showDescription}
            onChange={(e) => setShowDescription(e.target.checked)}
          />
        </CustomizeToolbar>
      }
      preview={
        <DemoStage className="items-stretch">
          <div className={cn("mx-auto w-full", previewWidth)}>
            <Upload
              key={uploadType}
              type={uploadType}
              multiple={multiple}
              showDescription={showDescription}
              sampleList={sampleList}
              listFileState={listFileState}
              dragVisualState={dragVisualState}
            />
          </div>
        </DemoStage>
      }
    />
  );
}

export const uploadDemoCode = buildElUploadCode();
