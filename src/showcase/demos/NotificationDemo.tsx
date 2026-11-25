import { Notification, type NotificationType } from "@/components/Notification/Notification";
import { useState } from "react";
import { useReportElementPlusCode } from "../hooks/useReportElementPlusCode";
import { buildElNotificationCode } from "../lib/elementPlusCode/builders";
import {
  CustomizeField,
  CustomizeRoot,
  CustomizeSelect,
  CustomizeToolbar,
  DemoStage,
} from "../ui/CustomizeLayout";
import { EdsPreviewStack } from "../ui/EdsShowcaseUi";
import type { ShowcaseDemoProps } from "./types";

const types: NotificationType[] = ["Default", "Primary", "Success", "Warning", "Error", "Info"];

export function NotificationDemo({ part = "all", splitRender, reportElementPlusCode }: ShowcaseDemoProps = {}) {
  const [notificationType, setNotificationType] = useState<NotificationType>("Primary");

  useReportElementPlusCode(
    reportElementPlusCode,
    () => buildElNotificationCode({ notificationType }),
    [notificationType],
  );

  return (
    <CustomizeRoot
      part={part}
      splitRender={splitRender}
      customize={
        <CustomizeToolbar>
          <CustomizeField label="Type">
            <CustomizeSelect
              value={notificationType}
              onChange={(e) => setNotificationType(e.target.value as NotificationType)}
            >
              {types.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </CustomizeSelect>
          </CustomizeField>
        </CustomizeToolbar>
      }
      preview={
        <DemoStage minHeight={120} className="items-start">
          <EdsPreviewStack>
            <Notification notificationType={notificationType} />
          </EdsPreviewStack>
        </DemoStage>
      }
    />
  );
}

export const notificationDemoCode = buildElNotificationCode({ notificationType: "Primary" });
