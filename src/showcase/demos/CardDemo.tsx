import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElCardCode } from "../lib/elementPlusCode";
import {
  Card,
  type CardBodyType,
  type CardFooterType,
  type CardHeaderType,
  type CardType,
} from "@/components/Card/Card";
import {
  CustomizeField,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import { EdsPreviewStack } from "../ui/EdsShowcaseUi";
import type { ShowcaseDemoProps } from "./types";

const headerTypes: CardHeaderType[] = ["Default", "More", "Icon", "Back"];
const cardTypes: CardType[] = ["Default", "Only Body", "Header+Footer"];

export function CardDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [cardType, setCardType] = useState<CardType>("Default");
  const [headerType, setHeaderType] = useState<CardHeaderType>("Default");
  const [bodyType, setBodyType] = useState<CardBodyType>("Text");
  const [footerType, setFooterType] = useState<CardFooterType>("Default");

  useReportElementPlusCode(
    reportElementPlusCode,
    () => buildElCardCode({ cardType, headerType, bodyType, footerType }),
    [cardType, headerType, bodyType, footerType],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Type">
            <CustomizeSelect value={cardType} onChange={(e) => setCardType(e.target.value as CardType)}>
              {cardTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Header">
            <CustomizeSelect
              value={headerType}
              disabled={cardType === "Only Body"}
              onChange={(e) => setHeaderType(e.target.value as CardHeaderType)}
            >
              {headerTypes.map((h) => (
                <option key={h} value={h}>
                  {h}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Body">
            <CustomizeSelect value={bodyType} onChange={(e) => setBodyType(e.target.value as CardBodyType)}>
              <option value="Text">Text</option>
              <option value="Image">Image</option>
            </CustomizeSelect>
          </CustomizeField>
          <CustomizeField label="Footer">
            <CustomizeSelect
              value={footerType}
              disabled={cardType !== "Header+Footer"}
              onChange={(e) => setFooterType(e.target.value as CardFooterType)}
            >
              <option value="Default">Default</option>
              <option value="More">More</option>
            </CustomizeSelect>
          </CustomizeField>
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={120}>
          <EdsPreviewStack className="gap-0">
            <Card
              cardType={cardType}
              headerType={headerType}
              bodyType={bodyType}
              footerType={footerType}
            />
          </EdsPreviewStack>
        </DemoStage>
      }
    />
  );
}

export const cardDemoCode = buildElCardCode({
  cardType: "Default",
  headerType: "More",
  bodyType: "Text",
  footerType: "Default",
});
