import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElTagCode } from "../lib/elementPlusCode";
import {
  CheckTag,
  NewTag,
  Tag,
  TagGroup,
  type NewTagVisualState,
  type TagGroupNumber,
  type TagSize,
  type TagStyle,
  type TagTopic,
} from "@/components/Tag/Tag";
import {
  CustomizeBooleanField,
  CustomizeField,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import {
  EdsHeroStage,
  EdsPreviewDivider,
  EdsPreviewStack,
  EdsVariantSection,
  EdsVariantTile,
} from "../ui/EdsShowcaseUi";
import type { ShowcaseDemoProps } from "./types";

type TagPreview = "Tag" | "Tag Group" | "New Tag" | "Check Tag";

const groupNumbers: TagGroupNumber[] = [2, 3, 4, 5, 6, 7, 8];

const TAG_SIGNATURE: Array<{ tagStyle: TagStyle; topic: TagTopic; closable?: boolean }> = [
  { tagStyle: "Default", topic: "Plain" },
  { tagStyle: "Default", topic: "Light" },
  { tagStyle: "Default", topic: "Dark" },
  { tagStyle: "Success", topic: "Light" },
  { tagStyle: "Warning", topic: "Dark" },
  { tagStyle: "Danger", topic: "Plain", closable: true },
];

function TagSignatureShowcase({
  tagStyle,
  topic,
  closable,
}: {
  tagStyle: TagStyle;
  topic: TagTopic;
  closable: boolean;
}) {
  return (
    <>
      <EdsPreviewDivider />
      <EdsVariantSection>
        {(["Small", "Default", "Large"] as const).map((s) => (
          <EdsVariantTile key={s}>
            <Tag tagStyle={tagStyle} size={s} topic={topic} closable={closable}>
              Tag
            </Tag>
          </EdsVariantTile>
        ))}
      </EdsVariantSection>
      <EdsPreviewDivider />
      <EdsVariantSection>
        {TAG_SIGNATURE.map((p, i) => (
          <EdsVariantTile key={i}>
            <Tag tagStyle={p.tagStyle} topic={p.topic} closable={p.closable}>
              Tag
            </Tag>
          </EdsVariantTile>
        ))}
      </EdsVariantSection>
      <EdsPreviewDivider />
      <EdsVariantSection>
        <EdsVariantTile>
          <TagGroup number={4} />
        </EdsVariantTile>
        <EdsVariantTile>
          <TagGroup custom />
        </EdsVariantTile>
      </EdsVariantSection>
    </>
  );
}

export function TagDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [preview, setPreview] = useState<TagPreview>("Tag");
  const [tagStyle, setTagStyle] = useState<TagStyle>("Default");
  const [size, setSize] = useState<TagSize>("Default");
  const [topic, setTopic] = useState<TagTopic>("Plain");
  const [closable, setClosable] = useState(false);
  const [groupCustom, setGroupCustom] = useState(false);
  const [groupNumber, setGroupNumber] = useState<TagGroupNumber>(3);
  const [newTagSize, setNewTagSize] = useState<TagSize>("Default");
  const [newTagState, setNewTagState] = useState<NewTagVisualState>("Default");
  const [checkTagChecked, setCheckTagChecked] = useState(true);

  useReportElementPlusCode(
    reportElementPlusCode,
    () =>
      buildElTagCode({
        mode: preview,
        tagStyle,
        size,
        topic,
        closable,
        groupNumber,
        groupCustom,
        newTagSize,
        checkTagChecked,
      }),
    [preview, tagStyle, size, topic, closable, groupNumber, groupCustom, newTagSize, checkTagChecked],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="展示">
            <CustomizeSelect value={preview} onChange={(e) => setPreview(e.target.value as TagPreview)}>
              <option value="Tag">Tag</option>
              <option value="Tag Group">Tag Group</option>
              <option value="New Tag">New Tag</option>
              <option value="Check Tag">Check Tag</option>
            </CustomizeSelect>
          </CustomizeField>
          {preview === "Tag" ? (
            <>
              <CustomizeField label="Style">
                <CustomizeSelect value={tagStyle} onChange={(e) => setTagStyle(e.target.value as TagStyle)}>
                  {(["Default", "Success", "Warning", "Danger", "Info"] as const).map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </CustomizeSelect>
              </CustomizeField>
              <CustomizeField label="Size">
                <CustomizeSelect value={size} onChange={(e) => setSize(e.target.value as TagSize)}>
                  {(["Default", "Large", "Small"] as const).map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </CustomizeSelect>
              </CustomizeField>
              <CustomizeField label="Topic">
                <CustomizeSelect value={topic} onChange={(e) => setTopic(e.target.value as TagTopic)}>
                  {(["Plain", "Light", "Dark"] as const).map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </CustomizeSelect>
              </CustomizeField>
              <CustomizeBooleanField label="Close" checked={closable} onChange={(e) => setClosable(e.target.checked)} />
            </>
          ) : null}
          {preview === "Tag Group" ? (
            <>
              <CustomizeBooleanField
                label="Custom"
                checked={groupCustom}
                onChange={(e) => setGroupCustom(e.target.checked)}
              />
              {!groupCustom ? (
                <CustomizeField label="Number">
                  <CustomizeSelect
                    value={String(groupNumber)}
                    onChange={(e) => setGroupNumber(Number(e.target.value) as TagGroupNumber)}
                  >
                    {groupNumbers.map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </CustomizeSelect>
                </CustomizeField>
              ) : null}
            </>
          ) : null}
          {preview === "New Tag" ? (
            <>
              <CustomizeField label="Size">
                <CustomizeSelect value={newTagSize} onChange={(e) => setNewTagSize(e.target.value as TagSize)}>
                  {(["Default", "Large", "Small"] as const).map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </CustomizeSelect>
              </CustomizeField>
              <CustomizeField label="State">
                <CustomizeSelect
                  value={newTagState}
                  onChange={(e) => setNewTagState(e.target.value as NewTagVisualState)}
                >
                  {(["Default", "Hover", "Focus"] as const).map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </CustomizeSelect>
              </CustomizeField>
            </>
          ) : null}
          {preview === "Check Tag" ? (
            <CustomizeBooleanField
              label="checked"
              checked={checkTagChecked}
              onChange={(e) => setCheckTagChecked(e.target.checked)}
            />
          ) : null}
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={preview === "Tag" ? 320 : 160}>
          <EdsPreviewStack>
            <EdsHeroStage className="min-h-[56px] w-full py-2">
              {preview === "Tag" ? (
                <Tag tagStyle={tagStyle} size={size} topic={topic} closable={closable}>
                  Tag
                </Tag>
              ) : null}
              {preview === "Tag Group" ? <TagGroup custom={groupCustom} number={groupNumber} /> : null}
              {preview === "New Tag" ? <NewTag size={newTagSize} visualState={newTagState} /> : null}
              {preview === "Check Tag" ? (
                <CheckTag checked={checkTagChecked} onCheckedChange={setCheckTagChecked}>
                  Tag
                </CheckTag>
              ) : null}
            </EdsHeroStage>
            {preview === "Tag" ? (
              <TagSignatureShowcase tagStyle={tagStyle} topic={topic} closable={closable} />
            ) : null}
            {preview === "Tag Group" ? (
              <>
                <EdsPreviewDivider />
                <EdsVariantSection>
                  {([2, 4, 6] as const).map((n) => (
                    <EdsVariantTile key={n}>
                      <TagGroup number={n} />
                    </EdsVariantTile>
                  ))}
                  <EdsVariantTile>
                    <TagGroup custom />
                  </EdsVariantTile>
                </EdsVariantSection>
              </>
            ) : null}
            {preview === "New Tag" ? (
              <>
                <EdsPreviewDivider />
                <EdsVariantSection>
                  {(["Small", "Default", "Large"] as const).map((s) => (
                    <EdsVariantTile key={s}>
                      <NewTag size={s} />
                    </EdsVariantTile>
                  ))}
                </EdsVariantSection>
              </>
            ) : null}
            {preview === "Check Tag" ? (
              <>
                <EdsPreviewDivider />
                <EdsVariantSection>
                  <EdsVariantTile>
                    <CheckTag checked={false}>Tag</CheckTag>
                  </EdsVariantTile>
                  <EdsVariantTile>
                    <CheckTag checked>Tag</CheckTag>
                  </EdsVariantTile>
                </EdsVariantSection>
              </>
            ) : null}
          </EdsPreviewStack>
        </DemoStage>
      }
    />
  );
}

export const tagDemoCode = buildElTagCode({
  mode: "Tag",
  tagStyle: "Default",
  size: "Default",
  topic: "Plain",
  closable: false,
});
